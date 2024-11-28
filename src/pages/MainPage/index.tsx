import * as m from './style';
import React from 'react';
import { categories } from '../../data/category';
import Header from '../../components/Header/index';
import ProfileContainer from '../../components/ProfileContainer';
import { useNavigate } from 'react-router-dom';
import { getHistory } from '../../apis/history';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';
import RecommendPrediction from '../../components/RecommendPrediction';
import Group from '../../assets/Graph.svg';

interface HistoryItem {
  id: number;
  category: string;
  score: number;
  predictedCutoff: number;
  probability: number;
  isPassed: boolean;
  timestamp: string;
}

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const onClickText = (category: { type: string; specialty: string }) => {
    navigate('/prediction', {
      state: { category: category.type, specialty: category.specialty },
    });
  };

  const token = localStorage.getItem('token') || '';
  const { isLoading, isError, data } = useQuery<HistoryItem[]>({
    queryKey: ['history'],
    queryFn: () => getHistory(token),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !data) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        정보를 불러오지 못했습니다....
      </div>
    );
  }

  const topTwoRecords =
    data?.sort((a, b) => b.probability - a.probability).slice(0, 2) || [];

  const average =
    topTwoRecords.length > 0
      ? Math.abs(topTwoRecords[0].predictedCutoff - topTwoRecords[0].score)
      : 0;

  const [army] =
    topTwoRecords.length > 0 ? topTwoRecords[0].category.split('/') : ['', ''];

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
                      <m.TextButton
                        onClick={() =>
                          onClickText({ type: category.type, specialty })
                        }
                        key={specialty}
                      >
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
            <ProfileContainer showEmail={false} />
          </div>
          <RecommendPrediction />
          <div />
          <h1
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: '20px',
            }}
          >
            맞춤형 추천 기록
          </h1>
          <m.RightInnerBox>
            <m.Text>
              지원자님에게 추천되는
              <br /> 맞춤 직종이에요!
            </m.Text>
            <m.Text style={{ color: 'red' }}>추천하는 군종 : {army}</m.Text>
            <img src={Group} alt="Group" />
            <m.Text>
              그중에서도 <br />
              <span style={{ color: 'red' }}>
                '{topTwoRecords.length > 0 ? topTwoRecords[0].category : 'N/A'}'
              </span>
              가 합격될 <br />
              가능성이 가장 높아요 !
            </m.Text>
            <m.smText>
              ❗지원자님의 지원 경향과 합격률을 계산했을 때 {army}이 가장
              적합해요!
            </m.smText>
            <m.smText>
              ❗다른 지원자보다 합격될 확률이{' '}
              <span style={{ color: 'red' }}>{average}%</span> 정도 높아요!
            </m.smText>
          </m.RightInnerBox>
        </m.RightBox>
      </m.InnerContainer>
    </m.Container>
  );
};

export default MainPage;
