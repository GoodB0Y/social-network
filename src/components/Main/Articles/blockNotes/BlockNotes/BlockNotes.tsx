import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Note from '../Note';
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
import Loader from '../../../../../common/Loader';
import ErrorBlock from '../../../../../common/errorBlock';

const mapStateToProps = (state: RootState) => ({
  posts: state.posts.data,
  loading: state.posts.loading,
  error: state.posts.error,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const BlockNotes = ({ posts, loading, error }: Props) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const renderSearch = () =>
    isOpenSearch ? (
      <InputSearch placeholder="Поиск..." onBlur={() => setIsOpenSearch(!isOpenSearch)} />
    ) : (
      <ComponentSearch onClick={() => setIsOpenSearch(!isOpenSearch)} />
    );

  const renderNotes = () => {
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <ErrorBlock errorMessage="Error occured with loading posts." />;
    }
    if (!posts) {
      return <EmptyBlockNotes>Ничего не найдено!</EmptyBlockNotes>;
    }
    return posts.map((dataPost) => <Note key={dataPost.post.id} dataPost={dataPost} />);
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
