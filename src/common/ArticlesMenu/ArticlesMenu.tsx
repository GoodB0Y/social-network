import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  ArticlesWrapper,
  MenuWrapper,
  MenuItem,
  Menu,
  ButtonSearch,
  SearchField,
} from './ArticlesMenu.styles';
import { menuItemsTitles, menuItemsNames } from './menuItemsData';

import { RootState } from '../../redux-toolkit/store';
import {
  loadAllPosts,
  loadPostsByUser,
  loadPostsByTag,
  loadAllTags,
  setLoading,
} from '../../redux-toolkit/postsSlice';
import { IDataPost } from '../../types/post';
import ITag from '../../types/tag';

import ArticleList from '../ArticleList/ArticleList';
import TagCloud from './TagCloud';
import filterNews from './helpers';

/* interface IdataItem {
    name: string,
    title: string,
} */

interface StateProps {
  data: null | IDataPost[];
  allTags: null | ITag[];
}

interface ParentProps {
  itemsNames: string[];
  userId?: number;
}

interface DispatchProps {
  getAllPosts: () => void;
  getPostsByTag: (tagName: string) => void;
  getAllTags: () => void;
  getPostsByUser: (id: number) => void;
  changeLoading: (load: boolean) => void;
}

type Props = StateProps & DispatchProps & ParentProps;

const mapStateToProps = (state: RootState): StateProps => ({
  data: state.posts.data,
  allTags: state.posts.allTags,
});

const mapDispatchToProps = {
  getAllPosts: loadAllPosts,
  getPostsByUser: loadPostsByUser,
  getPostsByTag: loadPostsByTag,
  getAllTags: loadAllTags,
  changeLoading: setLoading,
};

const ArticlesMenu = ({
  data,
  userId,
  allTags,
  itemsNames,
  getAllPosts,
  getPostsByTag,
  changeLoading,
  getAllTags,
  getPostsByUser,
}: Props): JSX.Element => {
  const searchField = useRef<HTMLInputElement>(null);
  const [showSearchField, setShowSearchField] = useState<boolean>(false);
  const [actualFilter, setActualFilter] = useState<string>(menuItemsNames.all);
  const [searchRequest, setSearchRequest] = useState<string | null>(null);

  const postByTag = 'postByTag';
  useEffect(() => {
    if (itemsNames.includes(menuItemsNames.tags)) {
      if (actualFilter === menuItemsNames.tags) getAllTags();
    }

    if (userId) {
      if (actualFilter === menuItemsNames.recommend) getAllPosts();
      else getPostsByUser(userId);
    } else if (actualFilter !== postByTag) getAllPosts();
  }, [actualFilter, itemsNames, userId, getAllPosts, getAllTags, getPostsByUser]);

  useEffect(() => {
    if (showSearchField) searchField?.current?.focus();
  }, [showSearchField]);

  const showPostByTag = (tag: string): void => {
    setActualFilter(postByTag);
    getPostsByTag(tag);
  };

  const changeFilter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setActualFilter(event.currentTarget.name);
  };

  const submitNewsRequest = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      setActualFilter?.(menuItemsNames.request);
      setSearchRequest(event.currentTarget.value);
      event.currentTarget.value = '';
    }
  };

  const renderSearch = (): JSX.Element => {
    if (showSearchField) {
      return (
        <SearchField
          ref={searchField}
          onBlur={(): void => setShowSearchField(false)}
          onKeyPress={submitNewsRequest}
        />
      );
    }
    return (
      <ButtonSearch
        onClick={(): void => {
          setShowSearchField((prev) => !prev);
        }}
      />
    );
  };

  const menuItemClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    changeLoading(true);
    changeFilter(event);
  };

  const menuItems = itemsNames.map((itemName) => {
    const title = menuItemsTitles[itemName];

    return (
      <MenuItem name={itemName} onClick={menuItemClickHandler}>
        {title}
      </MenuItem>
    );
  });

  const renderContent = (): JSX.Element => {
    if (actualFilter === menuItemsNames.tags) {
      return <TagCloud tags={allTags} getPostsByTag={showPostByTag} />;
    }

    const posts = data ? filterNews([...data], actualFilter, searchRequest) : null;

    return <ArticleList data={posts} showPostByTag={showPostByTag} />;
  }; /* B filterNews УБРАТЬ СПЛАЙС ПОСЛЕ НАСТРОЙКИ СЕРВЕРНОЙ ПАГИНАЦИИ */

  return (
    <ArticlesWrapper>
      <MenuWrapper>
        <Menu>{menuItems}</Menu>
        {renderSearch()}
      </MenuWrapper>
      {renderContent()}
    </ArticlesWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesMenu);
