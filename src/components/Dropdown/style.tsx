import styled from 'styled-components';

interface DropdownProps {
  show: boolean;
}

export const SelectBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px #e4e4e4;
  cursor: pointer;

  &::before {
    content: '⌵';
    position: absolute;
    top: 4px;
    right: 8px;
    color: #000;
    font-size: 15px;
    font-weight: bold;
  }
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const SelectOption = styled.ul<DropdownProps>`
  position: absolute;
  top: 38px;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: ${(props) => (props.show ? '1px solid #cccccc;' : 'none')};
  border-radius: 10px;
  max-height: ${(props) => (props.show ? 'none' : '0')};
  background-color: #fefefe;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #777777;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #cccccc;
    border-radius: 0px 3px 3px 0px;
  }
`;

export const Option = styled.li`
  font-size: var(--regular);
  padding: 10px;
  transition: background-color 0.2s ease-in;
  &:hover {
    color: white;
    border-radius: 5px;
    background: linear-gradient(
      135deg,
      #437550 0%,
      #437550 100%
    ); //이렇게 안하면 시각적으로 딜레이 느낌 남
  }
`;
