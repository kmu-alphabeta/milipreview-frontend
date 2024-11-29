import * as p from './style';
import { getHistory } from '../../apis/history';
import { useQuery } from 'react-query';
import Spinner from '../Spinner';

interface HistoryItem {
  id: number;
  category: string;
  score: number;
  predictedCutoff: number;
  probability: number;
  isPassed: boolean;
  timestamp: string;
}

const RecommendPrediction: React.FC = () => {
  const token = localStorage.getItem('token');
  console.log('토큰:', token);
  const { isLoading, isError, data } = useQuery<HistoryItem[]>({
    queryKey: ['history'],
    queryFn: () => getHistory(token as string),
  });

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
  const topTwoRecords = data
    ?.sort((a, b) => b.probability - a.probability) // probability 내림차순 정렬
    .slice(0, 2);
  return (
    <p.Container>
      {topTwoRecords?.map((item: HistoryItem) => {
        const [army, specialty] = item.category.split('/');

        return (
          <p.InnerContainer key={item.id}>
            <p.LeftBox>
              {army}
              <p.DateText>{item.timestamp}</p.DateText>
            </p.LeftBox>
            <p.RightBox>
              <p.SpecialtyText>{specialty}</p.SpecialtyText>
              <p.Probability
                style={{ color: item.probability > 50 ? 'blue' : 'red' }}
              >
                {item.probability}%
              </p.Probability>
            </p.RightBox>
          </p.InnerContainer>
        );
      }) ?? null}
    </p.Container>
  );
};

export default RecommendPrediction;
