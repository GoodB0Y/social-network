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

const getTab = (type: string): Tabs => Tabs[type as keyof typeof Tabs];

const FilterTabs = ({ openTab, activeTab }: FilterTabsProps): JSX.Element => (
  <Container>
    {Object.entries(Tabs).map((tab: Array<string>) => (
      <TabItem
        type="button"
        onClick={() => openTab(getTab(tab[0]))}
        selected={getTab(tab[0]) === activeTab}
      >
        {tab[1]}
      </TabItem>
    ))}
  </Container>
);

export default FilterTabs;
