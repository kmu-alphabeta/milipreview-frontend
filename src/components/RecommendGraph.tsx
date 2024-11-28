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
  const grouped = rawData.reduce(
    (acc: { [key: string]: HistoryItem }, curr) => {
      const { category, probability } = curr;
      if (!acc[category] || acc[category].probability < probability) {
        acc[category] = curr; // 해당 카테고리의 확률이 더 높으면 교체
      }
      return acc;
    },
    {},
  );

  // Pie Chart 형식으로 변환
  return Object.values(grouped).map((item) => ({
    id: item.category, // 파이 차트의 ID (카테고리명)
    label: item.category, // 라벨
    value: item.probability, // 값 (확률)
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
    <div style={{ height: '250px' }}>
      <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
      />
    </div>
  );
};

export default RecommendGraph;
