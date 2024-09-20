import React from "react";
import { MainTab, TabIcon, TabList, TabListItem } from "./Tabs.styled";
import ButtonGroup from "./helper-components/ButtonGroup";

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
    <ButtonGroup
    onExportClick={() => console.log("Export Clicked")}
    anchorElExport={null}
    onExportClose={() => console.log("Export Closed")}
  />
  </MainTab>
  );
};

export default Tabs;
