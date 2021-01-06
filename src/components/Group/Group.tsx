import React, { useEffect } from 'react';
import { withRouter, useParams, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { GroupPosts, GroupInt } from '../../types/group';
import LoadingBlock from '../../common/loadingBlock';
import GroupHeader from './GroupHeader';
import NewsList from './NewsList';
import { RootState } from '../../redux-toolkit/store';
import photogroup from '../../img/icons/photogroup.svg';

import { loadGroupInfo, loadGroupPosts } from '../../redux-toolkit/groups/singleGroupSlice';

const Wrapper = styled.div`
  font-family: Montserrat;
  background: #111222;
  padding: 100px 0;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  font-family: 'Montserrat', sans-serif;
  background: #111111;
  border-radius: 15px;
  padding: 114px 0 114px 0;
  margin-top: 30px;
  position: relative;
  min-height: 1200px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 95px;
  padding-right: 95px;
  padding-top: 80px;
  background: #ffffff;
  text-align: center;

  margin-top: 50px;
  border-radius: 15px 15px 15px 15px;
`;

const Label = styled.div`
  position: absolute;
  top: -90px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  display: flex;
`;

const GroupIco = styled.div`
  width: 155px;
  height: 155px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Img = styled.img`
  display: block;
  object-fit: cover;
  width: 155px;
  height: 155px;
  border-radius: 50%;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const NameGroup = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  text-align: left;
  margin-bottom: 6px;
`;

const Category = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #b2b2b2;
  text-align: left;
`;

interface StateProps {
  groupInfo: GroupInt | null;
  posts: GroupPosts[] | null;
  loading: boolean;
}
interface DispatchProps {
  loadGroupInfo: (id: string) => void;
  loadGroupPosts: (id: string) => void;
}
type Props = StateProps & DispatchProps & RouteComponentProps;

interface RouteParams {
  slug: string;
}

const mapStateToProps = (state: RootState): StateProps => ({
  groupInfo: state.singleGroup.groupInfo,
  posts: state.singleGroup.posts,
  loading: state.singleGroup.loading,
});

const mapDispatchToProps = {
  loadGroupInfo,
  loadGroupPosts,
};

const Group: React.FC<Props> = ({
  loadGroupInfo: _loadGroupInfo,
  loadGroupPosts: _loadGroupPosts,
  loading,
  groupInfo,
  posts,
}) => {
  const params = useParams<RouteParams>();
  const { slug } = params;

  useEffect(() => {
    _loadGroupInfo(slug);
    _loadGroupPosts(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (posts && groupInfo) {
    let { addressImageGroup } = groupInfo;
    const { groupCategory, name } = groupInfo;
    if (addressImageGroup === `This is a address of the group #${Number(slug) - 1}`) {
      addressImageGroup = photogroup;
    }
    const postsUpg = posts.map((element: GroupPosts) => ({
      ...element,
      addressImageGroup,
      groupName: name,
    }));

    return (
      <Wrapper>
        {loading ? (
          <LoadingBlock />
        ) : (
          <Container>
            <Label>
              <GroupIco>
                <Img src={addressImageGroup} alt="Фото группы" />
              </GroupIco>
              <DataContainer>
                <NameGroup>{name}</NameGroup>
                <Category>Категория: {groupCategory}</Category>
              </DataContainer>
            </Label>
            <GroupHeader data={groupInfo} />
            <NewsList news={postsUpg} />
          </Container>
        )}
      </Wrapper>
    );
  }
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Group));
