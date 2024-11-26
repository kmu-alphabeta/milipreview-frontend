import React, { useState } from 'react';
import * as m from './style';
import Header from '../../components/Header';
import PredictionCategory from '../../components/PredictionForm/PredictionCategory';
import PredictionForm from '../../components/PredictionForm/PredictionForm';
import { useLocation } from 'react-router-dom';

// 한글 -> 영어 매핑 객체
const categoryMapping: { [key: string]: string } = {
  '육군': 'ARMY',
  '해군': 'NAVY',
  '공군': 'AIR_FORCE',
  '해병대': 'MARINE_CORPS',
};

const PredictionPage: React.FC = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [baseCategory, setBaseCategory] = useState<string | null>(null);
  const [headerText, setHeaderText] = useState<string>('모집병 합격 예측');

  const location = useLocation();
  const { category: koreanBaseCategory, specialty } = location.state || {}; // 한글 baseCategory 받기

  // 카테고리 선택 완료 시 호출
  const handleCategorySelect = (category: string, baseCategoryKorean: string) => {
    setSelectedCategory(category);
    setBaseCategory(baseCategoryKorean);
    setIsCategorySelected(true);

    // 헤더 텍스트 업데이트
    setHeaderText(`모집병 합격 예측: ${koreanBaseCategory} - ${specialty} - ${category}`);
  };

  return (
    <m.Background>
      <m.Container>
        <Header />
        <m.HeaderText>{headerText}</m.HeaderText>
        <m.inContiner>
          {!isCategorySelected ? (
            <PredictionCategory
              onCategorySelect={handleCategorySelect}
              koreanBaseCategory={koreanBaseCategory}
              specialty={specialty}
            />
          ) : (
            <PredictionForm category={selectedCategory} baseCategory={baseCategory} />
          )}
        </m.inContiner>
      </m.Container>
    </m.Background>
  );
};

export default PredictionPage;
