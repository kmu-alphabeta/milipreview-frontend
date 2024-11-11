import * as p from './style';
import { dummyData } from '../../data/prediction';
const Prediction: React.FC = () => {
  const predictionData = dummyData.slice();

  return (
    <p.Container>
      {predictionData.map((item) => (
        <p.InnerContainer key={item.id}>
          <p.LeftBox>
            {item.militaryType}
            <p.DateText>{item.date}</p.DateText>
          </p.LeftBox>
          <p.RightBox>
            <p.SpecialtyText>{item.specialty}</p.SpecialtyText>
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
      ))}
    </p.Container>
  );
};

export default Prediction;
