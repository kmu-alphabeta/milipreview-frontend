import * as p from './style';
// import { predictionData } from '../../data/prediction';
const Prediction: React.FC = () => {
  return (
    <p.Container>
      {/* <p.InnerContainer>
        <p.LeftBox>
            <p.DateText></p.DateText>
        </p.LeftBox>
        <p.RightBox></p.RightBox>
    //   </p.InnerContainer> */}
      {/* {predictionData.map((item) => ( */}
      {/* //     <p.InnerContainer key={item.id}> */}
      {/* <p.LeftBox>
            <p.DateText>{item.date}</p.DateText>
            <p.MilitaryType>{item.militaryType}</p.MilitaryType>
            <p.Specialty>{item.specialty}</p.Specialty>
          </p.LeftBox>
          <p.RightBox>
            <p.Probability
              style={{ color: item.probability === 100 ? 'blue' : 'red' }}
            >
              {item.probability}%
            </p.Probability>
            <p.LinkButton>보기</p.LinkButton>
          </p.RightBox> */}
      {/* // </p.InnerContainer> */}
      {/* ))} */}
    </p.Container>
  );
};

export default Prediction;
