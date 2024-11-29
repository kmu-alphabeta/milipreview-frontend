import { useRef, useState, useEffect } from 'react';
import * as d from './style';

interface DropdownProps {
  width: number;
  option: string[] | number[];
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ option, width, placeholder }) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [currentValue, setCurrentValue] = useState(placeholder);
  const [showOptions, setShowOptions] = useState(false);
  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement>) => {
    setCurrentValue(e.currentTarget.getAttribute('value') || '');
  };

  useEffect(() => {
    // NOTE Dropdwon 박스 바깥쪽을 클릭시 옵션이 사라지는 기능
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        // dom 바깥 클릭
        setShowOptions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef]);

  return (
    <d.SelectBox
      onClick={() => setShowOptions((prev) => !prev)}
      ref={selectRef}
      style={{ width }}
    >
      <d.Label>{currentValue}</d.Label>
      <d.SelectOption show={showOptions}>
        {option.map((data, index) => (
          <d.Option
            key={index}
            value={data}
            onClick={handleOnChangeSelectValue}
          >
            {data}
          </d.Option>
        ))}
      </d.SelectOption>
    </d.SelectBox>
  );
};

export default Dropdown;
