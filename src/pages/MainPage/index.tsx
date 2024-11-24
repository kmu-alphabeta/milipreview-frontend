import * as m from './style';
import { categories } from '../../data/category';
import Header from '../../components/Header/index';
import Profile from '../../components/Profile/index';
import PredictionForm from '../../components/Prediction/PredictionForm';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const onClickText = () => {
    navigate('/');
  };
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
                      <m.TextButton onClick={onClickText} key={specialty}>
                        {specialty}
                      </m.TextButton>
                    ))}
                  </m.SpecialtyContainer>
                </div>
              ))}
            </m.LeftBoxContainer>
          </m.LeftBox>
        </m.LeftContainer>
        <m.RightBox>
          <div style={{ marginLeft: '6%' }}>
            <Profile
              userData={{
                name: '박건민',
                profileImage: '',
              }}
            />
          </div>
          <span style={{ marginLeft: '6%' }}>최근 예측 기록</span>
          <PredictionForm />
        </m.RightBox>
      </m.InnerContainer>
    </m.Container>
  );
};

export default MainPage;
