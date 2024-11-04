// src/components/NewMemberForm/NewMemberForm.tsx

import React from 'react';
import * as m from './style';

const NewMemberForm: React.FC = () => {
  return (
    <m.Container>
      <m.Title>신규 회원 가입</m.Title>
      <m.ProgressBar>
        <m.Progress width={50} /> {/* 진행도를 퍼센트로 조절하세요 */}
      </m.ProgressBar>
      <m.InputSection>
        {/* 텍스트 입력 */}
        <m.InputLabel>이름</m.InputLabel>
        <m.TextInput type="text" placeholder="이름을 입력하세요" />

        {/* 체크박스 그룹 */}
        <m.InputLabel>관심 분야</m.InputLabel>
        <m.CheckboxGroup>
          <label>
            <input type="checkbox" /> 기술
          </label>
          <label>
            <input type="checkbox" /> 디자인
          </label>
          <label>
            <input type="checkbox" /> 마케팅
          </label>
        </m.CheckboxGroup>

        {/* 드롭다운 메뉴 */}
        <m.InputLabel>직업</m.InputLabel>
        <m.Dropdown>
          <option value="">선택하세요</option>
          <option value="developer">개발자</option>
          <option value="designer">디자이너</option>
          <option value="marketer">마케터</option>
        </m.Dropdown>
      </m.InputSection>
      <m.ButtonContainer>
        <m.Button>이전</m.Button>
        <m.Button>다음</m.Button>
      </m.ButtonContainer>
    </m.Container>
  );
};

export default NewMemberForm;
