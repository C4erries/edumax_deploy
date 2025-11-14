export interface TabItem {
    label: string;
    value: string;
  }
  
  export interface TabsProps {
    tabs: TabItem[];
    activeTab: string;
    onTabChange: (value: string) => void;
    className?: string;
  }
  