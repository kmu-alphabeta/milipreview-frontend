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

const Prediction: React.FC = () => {
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

  return (
    <p.Container>
      {data?.map((item: HistoryItem) => {
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
              <p.ClickButton>
                보러
                <br />
                가기
              </p.ClickButton>
            </p.RightBox>
          </p.InnerContainer>
        );
      }) ?? null}
    </p.Container>
  );
};

export default Prediction;