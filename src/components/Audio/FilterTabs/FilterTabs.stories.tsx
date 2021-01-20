import React from 'react';
import { Meta, Story } from '@storybook/react';
import FilterTabs, { FilterTabsProps, Tabs } from './index';

export default {
  title: 'FilterTabs',
  component: FilterTabs,
} as Meta;

const Template: Story<FilterTabsProps> = (args) => <FilterTabs {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  activeTab: Tabs.All,
  openTab: (tab) => tab,
};
