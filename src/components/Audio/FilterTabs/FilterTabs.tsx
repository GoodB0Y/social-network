import React from 'react';

import { Container, TabItem } from './FilterTabs.styles';

export enum Tabs {
  My = 'Моя музыка',
  All = 'Вся музыка',
  Friends = 'Музыка друзей',
}

export type FilterTabsProps = {
  openTab: (tab: Tabs) => void;
  activeTab: Tabs;
};

const FilterTabs = ({ openTab, activeTab }: FilterTabsProps): JSX.Element => (
  <Container>
    {Object.keys(Tabs).map((key: string) => {
      const tab = Tabs[key as keyof typeof Tabs];
      return (
        <TabItem type="button" onClick={() => openTab(tab)} selected={tab === activeTab}>
          {tab}
        </TabItem>
      );
    })}
  </Container>
);

export default FilterTabs;
