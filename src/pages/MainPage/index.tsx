import * as m from './style';
import { categories } from '../../data/category';
import Header from '../../componenets/Header/index';
import Profile from '../../componenets/Profile/index';
import Prediction from '../../componenets/Prediction';

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
        <m.RightBox>
          <Profile
            userData={{
              name: '박건민',
              profileImage: '',
            }}
          />
          <span style={{ marginLeft: '6%' }}>최근 예측 기록</span>
          <Prediction />
        </m.RightBox>
      </m.InnerContainer>
    </m.Container>
  );
};

export default MainPage;
