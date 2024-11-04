// src/components/NewMemberForm/NewMemberForm.tsx

import React from 'react';
import * as m from './style';

const NewMemberForm: React.FC = () => {
  // 연도, 월, 일 옵션 생성
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <m.Container>
      <m.Title>생년월일을 입력해주세요</m.Title>
      <m.ProgressBar>
        <m.Progress width={50} /> {/* 진행도를 퍼센트로 조절하세요 */}
      </m.ProgressBar>
      <m.InputSection>
        {/* 생년월일 입력 */}
        <m.DateOfBirthContainer>
          {/* 연도 드롭다운 */}
          <m.Dropdown>
            <option value=""></option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </m.Dropdown>
          <m.DropdownLabel>년</m.DropdownLabel>
          {/* 월 드롭다운 */}
          <m.Dropdown>
            <option value=""></option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </m.Dropdown>
          <m.DropdownLabel>월</m.DropdownLabel>
          {/* 일 드롭다운 */}
          <m.Dropdown>
            <option value=""></option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </m.Dropdown>
          <m.DropdownLabel>일</m.DropdownLabel>
        </m.DateOfBirthContainer>
      </m.InputSection>
      <m.ButtonContainer>
        <m.Button>이전</m.Button>
        <m.Button>다음</m.Button>
      </m.ButtonContainer>
    </m.Container>
  );
};

export default NewMemberForm;
