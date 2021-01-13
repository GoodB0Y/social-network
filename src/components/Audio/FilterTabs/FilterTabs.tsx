import React from 'react';

import { Container, TabItem } from './FilterTabs.styles';

export enum Tabs {
  My = 'Моя музыка',
  All = 'Вся музыка',
  Friends = 'Музыка друзей',
}

type Props = {
  openTab: (tab: Tabs) => void;
  activeTab: Tabs;
};

const getTab = (type: string): Tabs => Tabs[type as keyof typeof Tabs];

const FilterTabs = ({ openTab, activeTab }: Props): JSX.Element => (
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
