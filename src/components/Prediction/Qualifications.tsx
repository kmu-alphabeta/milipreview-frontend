import React from 'react';
import * as m from './style';

const Qualifications: React.FC = () => {
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <m.Container>
      <m.Title>보유한 자격증 정보를 입력해주세요</m.Title>
      <m.ProgressBar>
        <m.Progress width={55} />
      </m.ProgressBar>
      <m.InputSection>
        <m.DateOfBirthContainer>
          <m.Dropdown>
            <option value=""></option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </m.Dropdown>
          <m.DropdownLabel>년</m.DropdownLabel>
          <m.Dropdown>
            <option value=""></option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </m.Dropdown>
          <m.DropdownLabel>월</m.DropdownLabel>
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
    </m.Container>
  );
};

export default Qualifications;