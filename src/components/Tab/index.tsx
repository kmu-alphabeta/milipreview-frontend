import React, { useState } from 'react';
import * as style from './style';

interface TabProps {
  tabs: string[];
  onTabChange: (tab: string) => void;
}

const TabComponent: React.FC<TabProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (tab: string, index: number) => {
    setActiveTab(index);
    onTabChange(tab);
  };

  return (
    <style.TabLayout>
      {tabs.map((tab, index) => (
        <style.TabButton
          key={tab}
          active={activeTab === index}
          onClick={() => handleTabClick(tab, index)}
        >
          {tab}
        </style.TabButton>
      ))}
    </style.TabLayout>
  );
};

export default TabComponent;
