import React from 'react';
import * as m from './style';

const Education: React.FC = () => {
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const majors = ['컴퓨터 공학', '전자 공학', '기계 공학', '경영학', '심리학'];
  const attendanceStatuses = ['재학 중', '졸업', '휴학 중'];
  const attendanceRates = ['우수', '양호', '보통', '미흡'];

  return (
    <m.Container>
      <m.Title>학력 및 출결 상황을 입력해주세요</m.Title>
      <m.ProgressBar>
        <m.Progress width={30} />
      </m.ProgressBar>
      <m.InputSection>
        <m.DateOfBirthContainer>
          <m.Dropdown>
            <option value="">학력</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}년 졸업
              </option>
            ))}
          </m.Dropdown>

          <m.Dropdown>
            <option value="">전공</option>
            {majors.map((major) => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </m.Dropdown>

          <m.Dropdown>
            <option value="">재학</option>
            {attendanceStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </m.Dropdown>

          <m.Dropdown>
            <option value="">출결</option>
            {attendanceRates.map((rate) => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
          </m.Dropdown>
        </m.DateOfBirthContainer>
      </m.InputSection>
    </m.Container>
  );
};

export default Education;
