import * as m from './style';
import { categories } from '../../data/category';
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
          <m.LeftBox>
            <m.LeftBoxContainer>
              <m.SubTitleText>합격률 예측하기</m.SubTitleText>
              {categories.map((category) => (
                <div key={category.type}>
                  <m.CategoryTitle>{category.type}</m.CategoryTitle>
                  <m.SpecialtyContainer>
                    {category.specialties.map((specialty) => (
                      <m.TextButton key={specialty}>{specialty}</m.TextButton>
                    ))}
                  </m.SpecialtyContainer>
                </div>
              ))}
            </m.LeftBoxContainer>
          </m.LeftBox>
        </m.LeftContainer>
        <m.RightBox />
      </m.InnerContainer>
    </m.Container>
  );
};

export default MainPage;
