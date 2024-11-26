import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as m from './style';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

interface FormData {
  [key: string]: string;
}

interface PredictionCategoryProps {
  onCategorySelect: (category: string, baseCategory: string) => void;
  koreanBaseCategory: string;
  specialty: string;
}

// 한글 -> 영어 매핑 객체
const categoryMapping: { [key: string]: string } = {
  '육군': 'ARMY',
  '해군': 'NAVY',
  '공군': 'AIR_FORCE',
  '해병대': 'MARINE_CORPS',
};

const PredictionCategory: React.FC<PredictionCategoryProps> = ({
                                                                 onCategorySelect,
                                                                 koreanBaseCategory,
                                                                 specialty,
                                                               }) => {
  const [categories, setCategories] = useState<FormData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');

  useEffect(() => {
    const fetchCategories = async () => {
      if (!koreanBaseCategory) {
        setError('카테고리가 유효하지 않습니다.');
        return;
      }

      const englishBaseCategory = categoryMapping[koreanBaseCategory];
      if (!englishBaseCategory) {
        console.error('Invalid base category:', koreanBaseCategory);
        setError('잘못된 카테고리입니다.');
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem('token'); // 로컬스토리지에서 토큰 가져오기
        if (!token) {
          throw new Error('토큰이 없습니다. 로그인하세요.');
        }
        const response = await axios.get<FormData>(
          `${API_BASE_URL}/form/${englishBaseCategory}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.data && typeof response.data === 'object') {
          setCategories(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
          setError('잘못된 데이터 형식입니다.');
        }
      } catch (err: any) {
        console.error(
          'Failed to fetch categories:',
          err.response?.data?.message || err.message
        );
        setError(err.response?.data?.message || '카테고리 로드 실패');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [koreanBaseCategory]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleConfirm = () => {
    if (selectedOption) {
      const englishBaseCategory = categoryMapping[koreanBaseCategory];
      onCategorySelect(selectedOption, englishBaseCategory); // category와 영어 baseCategory 전달
    } else {
      console.error('No option selected.');
      alert('옵션을 선택해주세요.');
    }
  };

  return (
    <m.Container>

      {isLoading ? (
        <m.Title>로딩 중...</m.Title>
      ) : error ? (
        <m.Title>{error}</m.Title>
      ) : (
        <>
          <m.Title>
            모집상세를 선택하세요
          </m.Title>
          <m.InputSection>
            <m.DateOfBirthContainer>
              <m.Dropdown value={selectedOption} onChange={handleOptionChange}>
                <option value="" disabled>
                  옵션을 선택하세요
                </option>
                {Object.entries(categories).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </m.Dropdown>
            </m.DateOfBirthContainer>
            <m.ButtonContainer>
              <m.Button onClick={handleConfirm}>확인</m.Button>
            </m.ButtonContainer>
          </m.InputSection>
        </>
      )}
    </m.Container>
  );
};

export default PredictionCategory;
