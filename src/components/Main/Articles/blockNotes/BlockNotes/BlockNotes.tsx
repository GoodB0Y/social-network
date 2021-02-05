import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  Wrapper,
  MenuWrapper,
  Menu,
  MenuItem,
  ComponentSearch,
  InputSearch,
  EmptyBlockNotes,
} from './styles';
import { RootState } from '../../../../../redux-toolkit/store';
import ArticleList from '../../../../../common/ArticleList/ArticleList';

const mapStateToProps = (state: RootState) => ({
  posts: state.posts.data,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const BlockNotes = ({ posts }: Props) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const renderSearch = () =>
    isOpenSearch ? (
      <InputSearch placeholder="Поиск..." onBlur={() => setIsOpenSearch(!isOpenSearch)} />
    ) : (
      <ComponentSearch onClick={() => setIsOpenSearch(!isOpenSearch)} />
    );

  const renderNotes = () => {
    if (!posts) {
      return <EmptyBlockNotes>Ничего не найдено!</EmptyBlockNotes>;
    }
    return <ArticleList data={posts} />;
  };

  return (
    <Wrapper>
      <MenuWrapper>
        <Menu>
          <MenuItem className="active">Все</MenuItem>
          <MenuItem>Мои заметки</MenuItem>
          <MenuItem>Рекомендации</MenuItem>
        </Menu>
        {renderSearch()}
      </MenuWrapper>
      {renderNotes()}
    </Wrapper>
  );
};

export default connector(BlockNotes);
