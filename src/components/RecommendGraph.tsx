import { getHistory } from '../apis/history';
import { useQuery } from 'react-query';
import Spinner from './Spinner';
import { ResponsivePie } from '@nivo/pie';

interface HistoryItem {
  id: number;
  category: string;
  score: number;
  predictedCutoff: number;
  probability: number;
  isPassed: boolean;
  timestamp: string;
}

const processChartData = (rawData: HistoryItem[]) => {
  const validCategories = ['육군', '공군', '해군', '해병'];

  // 1. 유효한 데이터만 필터링
  const filteredData = rawData.filter((item) => {
    const categoryPrefix = item.category.split('/')[0];
    return validCategories.includes(categoryPrefix);
  });

  // 2. 각 분야별로 가장 높은 확률만 유지 (기존 코드와 동일)
  const grouped = filteredData.reduce(
    (acc: { [key: string]: HistoryItem }, curr) => {
      const { category, probability } = curr;
      const categoryPrefix = category.split('/')[0];
      if (
        !acc[categoryPrefix] ||
        acc[categoryPrefix].probability < probability
      ) {
        acc[categoryPrefix] = curr;
      }
      return acc;
    },
    {} as { [key: string]: HistoryItem },
  );

  // 3. 각 분야별 확률 합을 구하고, 그 합을 100%에 맞춰서 재조정
  const totalProbability = Object.values(grouped).reduce(
    (sum, item) => sum + item.probability,
    0,
  );

  // 4. 확률 비율을 계산해서 100%에 맞게 재조정
  return Object.values(grouped).map((item) => ({
    id: item.category.split('/')[0],
    value:
      totalProbability > 0 ? (item.probability / totalProbability) * 100 : 0, // 확률 비율을 계산
  }));
};

const RecommendGraph: React.FC = () => {
  const token = localStorage.getItem('token');
  console.log('토큰:', token);
  const { isLoading, isError, data } = useQuery<HistoryItem[]>({
    queryKey: ['history'],
    queryFn: () => getHistory(token as string),
  });

  const chartData = data ? processChartData(data) : [];
  console.log('chartData:', chartData);
  const [army] = chartData.length > 0 ? chartData[0].id.split('/') : ['', ''];

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        정보를 불러오지
        <br />
        못했습니다....
      </div>
    );
  }
  return (
    <div className="piechart" style={{ width: '100%', height: '250px' }}>
      <ResponsivePie
        // chart에 사용될 데이터
        data={chartData}
        // chart margin
        margin={{ top: 30, right: 80, bottom: 40, left: 80 }}
        // chart 중간 빈공간 반지름
        innerRadius={0.5}
        // pad 간격
        padAngle={1}
        colors={['#346942', '#030E06', '#112C18', '#435648']}
        // pad border 두께 설정
        borderWidth={1}
        // pad border 색상 설정
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        // link label skip할 기준 각도
        arcLinkLabelsSkipAngle={10}
        // link label 색상
        arcLinkLabelsTextColor="#101010"
        // link label 연결되는 선 두께
        arcLinkLabelsThickness={2}
        // link label 연결되는 선 색상
        arcLinkLabelsColor={{ from: 'color' }} // pad 색상에 따라감
        theme={{
          // label style (pad에 표현되는 글씨)
          labels: {
            text: {
              fontSize: '0.8rem',
              fill: 'transparent',
            },
          },
        }}
      />
    </div>
  );
};

export default RecommendGraph;
