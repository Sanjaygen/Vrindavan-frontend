import React from "react";
import { MainTab, TabIcon, TabList, TabListItem } from "./Tabs.styled";

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabItems: TabItem[];
  renderExtraContent?: (activeTab: string) => React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, tabItems,renderExtraContent }) => {
  return (
    <MainTab>
    <TabList>
      {tabItems.map((item) => (
        <TabListItem
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          isActive={activeTab === item.id}
        >
          <TabIcon>{item.icon}</TabIcon>
          {item.label}
        </TabListItem>
      ))}
    </TabList>
    {renderExtraContent && (
        <div style={{ marginTop: '16px' }}>{renderExtraContent(activeTab)}</div> 
      )}
  </MainTab>
  );
};

export default Tabs;
