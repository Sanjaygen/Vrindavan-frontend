import React from "react";
import { TabIcon, TabList, TabListItem } from "./Tabs.styled";

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabItems: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, tabItems }) => {
  return (
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
  );
};

export default Tabs;
