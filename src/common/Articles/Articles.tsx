import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  setLoading,
  loadAllTags,
  loadAllPosts,
  loadPostsByTag,
  loadPostsByUser,
} from '../../redux-toolkit/postsSlice';
import { RootState } from '../../redux-toolkit/store';

import ITag from '../../types/tag';
import { IDataPost } from '../../types/post';

import filterNews from './helpers';
import { menuItemsTitles, filters } from './menuItemsData';

import TagCloud from './TagCloud';
import ArticleList from '../ArticleList/ArticleList';

import {
  Menu,
  MenuItem,
  MenuWrapper,
  SearchField,
  ButtonSearch,
  ArticlesWrapper,
} from './Articles.styles';

interface StateProps {
  data: null | IDataPost[];
  allTags: null | ITag[];
}

interface ParentProps {
  userId?: number;
  filterList: string[];
}

interface DispatchProps {
  getAllTags: () => void;
  getAllPosts: () => void;
  getPostsByTag: (tag: string) => void;
  getPostsByUser: (id: number) => void;
  changeLoading: (loading: boolean) => void;
}

type Props = StateProps & DispatchProps & ParentProps;

const mapStateToProps = (state: RootState): StateProps => ({
  data: state.posts.data,
  allTags: state.posts.allTags,
});

const mapDispatchToProps = {
  getAllTags: loadAllTags,
  getAllPosts: loadAllPosts,
  getPostsByTag: loadPostsByTag,
  getPostsByUser: loadPostsByUser,
  changeLoading: setLoading,
};

const Articles = ({
  data,
  userId,
  allTags,
  filterList,
  getAllTags,
  getAllPosts,
  getPostsByTag,
  getPostsByUser,
  changeLoading,
}: Props): JSX.Element => {
  const searchField = useRef<HTMLInputElement>(null);

  const { allFilter, tagsFilter, recommendFilter, requestFilter, postByTagFilter } = filters;

  const [showSearchField, setShowSearchField] = useState<boolean>(false);
  const [actualFilter, setActualFilter] = useState<string>(allFilter);
  const [searchRequest, setSearchRequest] = useState<string>(' ');

  useEffect(() => {
    if (filterList.includes(tagsFilter)) {
      if (actualFilter === tagsFilter) getAllTags();
    }

    if (userId) {
      if (actualFilter === recommendFilter) getAllPosts();
      else getPostsByUser(userId);
    } else if (actualFilter !== postByTagFilter) getAllPosts();
  }, [
    actualFilter,
    filterList,
    userId,
    getAllPosts,
    getAllTags,
    getPostsByUser,
    tagsFilter,
    postByTagFilter,
    recommendFilter,
  ]);

  useEffect(() => {
    if (showSearchField) searchField?.current?.focus();
  }, [showSearchField]);

  const showPostByTag = (tag: string): void => {
    setActualFilter(postByTagFilter);
    getPostsByTag(tag);
  };

  const submitNewsRequest = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      setActualFilter(requestFilter);
      setSearchRequest(event.currentTarget.value);
      event.currentTarget.value = '';
    }
  };

  const buttonSearchClickHandler = (): void => setShowSearchField((prev) => !prev);

  const searchFieldBlurHandler = (): void => setShowSearchField(false);

  const menuItemClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (actualFilter !== event.currentTarget.name) {
      changeLoading(true);
      setActualFilter(event.currentTarget.name);
    }
  };

  const search = showSearchField ? (
    <SearchField ref={searchField} onBlur={searchFieldBlurHandler} onKeyPress={submitNewsRequest} />
  ) : (
    <ButtonSearch onClick={buttonSearchClickHandler} />
  );

  const menuItems = filterList.map((filter) => {
    const title = menuItemsTitles[filter];

    return (
      <MenuItem name={filter} onClick={menuItemClickHandler}>
        {title}
      </MenuItem>
    );
  });

  const renderContent = (): JSX.Element => {
    if (actualFilter === tagsFilter) {
      return <TagCloud tags={allTags} getPostsByTag={showPostByTag} />;
    }

    const posts = data ? filterNews([...data], actualFilter, searchRequest) : null;

    return <ArticleList data={posts} showPostByTag={showPostByTag} />;
  }; /* B filterNews УБРАТЬ СПЛАЙС ПОСЛЕ НАСТРОЙКИ СЕРВЕРНОЙ ПАГИНАЦИИ */

  return (
    <ArticlesWrapper>
      <MenuWrapper>
        <Menu>{menuItems}</Menu>
        {search}
      </MenuWrapper>
      {renderContent()}
    </ArticlesWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
