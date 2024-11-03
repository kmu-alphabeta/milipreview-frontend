import * as m from './style';
import Header from '../../componenets/Header/index';

const MainPage: React.FC = () => {
  return (
    <m.Container>
      <Header />
      <m.InnerContainer>
        <m.LeftContainer>
          <m.Image>
            <m.OverlayText>
              <m.TitleText>군대 합격률 예측</m.TitleText>
              <m.TitleText style={{ textAlign: 'right' }}>
                이젠 밀리프리뷰에서
              </m.TitleText>
            </m.OverlayText>
          </m.Image>
          <m.LeftBox />
        </m.LeftContainer>
        <m.RightBox />
      </m.InnerContainer>
    </m.Container>
  );
};

export default MainPage;
