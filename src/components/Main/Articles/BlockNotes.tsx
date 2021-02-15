import React from 'react';
// import { Wrapper } from './styles';
import { menuItemsNames } from '../../../common/ArticlesMenu/menuItemsData';
import ArticlesMenu from '../../../common/ArticlesMenu/ArticlesMenu';

type Props = {
  userId?: number;
};

const BlockNotes = ({ userId }: Props): JSX.Element => {
  const { all, myNotes, recommend } = menuItemsNames;

  return <ArticlesMenu itemsNames={[all, myNotes, recommend]} userId={userId} />;
};

export default BlockNotes;
