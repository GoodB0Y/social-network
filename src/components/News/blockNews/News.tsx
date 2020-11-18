/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { RootState } from '../../../redux-toolkit/store';
import {
  loadAllPosts,
  loadPostsByTag,
} from '../../../redux-toolkit/postsSlice';
import { IDataPost } from '../../../types/post';
import filterNews from './helpers';

import ErrorBlock from '../../../common/errorBlock';
import LoadingBlock from '../../../common/loadingBlock';
import NewsItem from './NewsItem';

import img from '../../../img/icons/search.svg';

interface StateProps {
  data: null | IDataPost[];
  loading: boolean;
  error: null | Error;
}

interface DispatchProps {
  getAllPosts: () => void;
  getPostsByTag: (tagName: string) => void;
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps =>
  ({
    data: state.posts.data,
    loading: state.posts.loading,
    error: state.posts.error,
  });

const mapDispatchToProps = {
  getAllPosts: loadAllPosts,
  getPostsByTag: loadPostsByTag,
};

const News: React.FC<Props> = ({ data, loading, error, getAllPosts, getPostsByTag }) => {
  const searchField = useRef<HTMLInputElement>(null);
  const [showSearchField, setShowSearchField] = useState(false);
  const [actualFilter, setActualFilter] = useState<string>('all');
  const [searchRequest, setSearchRequest] = useState<string | null>(null);

  useEffect(() => {
    getAllPosts();
  }, [actualFilter, getAllPosts]);

  useEffect(() => {
    if (showSearchField) searchField!.current!.focus();
  }, [showSearchField]);

  const setNewsFilter = (event: any): void => {
    setActualFilter(event.target.name);
  };

  const submitNewsRequest = (key: string): void => {
    if (key === 'Enter') {
      setActualFilter('request');
      setSearchRequest(searchField.current?.value!);
      searchField.current!.value = '';
    }
  };

  const renderSearchField = (): JSX.Element => {
    if (showSearchField) {
      return (
        <SearchField
          ref={searchField}
          onBlur={(): void => {
            setShowSearchField((prev) =>
              !prev);
          }}
          onKeyPress={({ key }) =>
            submitNewsRequest(key)}
        />
      );
    }
    return (
      <ButtonSearch
        onClick={(): void => {
          setShowSearchField((prev) =>
            !prev);
        }}
      />
    );
  };

  const renderNews = (): JSX.Element | JSX.Element[] => {
    if (loading) return (<LoadingBlock />);
    if (error) return (<ErrorBlock>Error occured with loading posts.</ErrorBlock>);
    if (!data) return (<ErrorBlock>Ничего не найдено!</ErrorBlock>);

    const filteredNews = filterNews([...data!], actualFilter, searchRequest);
    if (filteredNews.length === 0) return (<ErrorBlock>Ничего не найдено!</ErrorBlock>);
    return filteredNews.splice(0, 10).map((postData) =>
      <NewsItem key={postData.post.id} postData={postData} getPostsByTag={getPostsByTag} />);
  };/* УБРАТЬ СПЛАЙС ПОСЛЕ НАСТРОЙКИ СЕРВЕРНОЙ ПАГИНАЦИИ */

  const renderTagCloud = () => { console.log('ЖДЕМ ЭНДПОИНТ НА ВСЕ ТЕГИ'); };

  return (
    <Wrapper>
      <Container>
        <Label>Новости</Label>
        <MenuWrapper>
          <Menu>
            <MenuItem name="all" onClick={setNewsFilter}>
              Все
            </MenuItem>
            <MenuItem name="fresh" onClick={setNewsFilter}>
              Свежие
            </MenuItem>
            <MenuItem name="popular" onClick={setNewsFilter}>
              Популярные
            </MenuItem>
            <MenuItem name="tags" onClick={renderTagCloud}>Теги</MenuItem>
          </Menu>
          {renderSearchField()}
        </MenuWrapper>

        {renderNews()}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #111111;
  padding: 100px 100px 100px 0;
`;

const Container = styled.div`
  position: relative;
  max-width: 1291px;
  display: flex;
  flex-direction: column;
  padding-left: 95px;
  padding-right: 95px;

  background: #ffffff;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  border-radius: 15px 15px 0px 0px;
`;

const Label = styled.div`
  position: absolute;
  top: -100px;
  width: 299px;
  height: 155px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffb11b;
  border-radius: 15px;
  
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
`;

const MenuWrapper = styled.nav`
  min-height: 150px;
  padding: 108px 0 61px 0;
  display: flex;
  justify-content: space-between;

  font-style: normal;
  font-weight: normal;
  color: #515151;
  border-bottom: 1px solid #515151;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.button`
  font-size: 16px;
  line-height: 20px;
  background: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  margin-right: 50px;
  padding: 0;
  padding-bottom: 7px;
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
    border-bottom: 3px solid #ffb11b;
  }
  &:active,
  &:focus {
    outline: none;
    border-bottom: 3px solid #ffb11b;
  }
`;

const ButtonSearch = styled.button`
  width: 35px;
  height: 35px;
  background-color: transparent;
  background: url(${img}) center no-repeat;
  border: 0;
  color: inherit;
  cursor: pointer;
  padding: 0;
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
  }
`;

const SearchField = styled.input.attrs(() =>
  ({
    type: 'search',
    placeholder: 'Поиск...',
  }))`
height: 46px;
width: 100%;
margin: 0 0 0  24px;
padding: 13px 18px;
background: #FFFFFF;
border: none;
border-bottom: 2px solid #515151;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
color: #515151;
&:focus {
  outline: none;
  border-bottom: 3px solid #ffb11b;
}
`;
export default connect(mapStateToProps, mapDispatchToProps)(News);
