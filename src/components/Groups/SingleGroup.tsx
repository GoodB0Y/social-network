import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RootState } from '../../redux-toolkit/store';
import { joinGroup, leaveGroup } from '../../redux-toolkit/groups/groupsSlice';
import { Group, GroupRequestProps } from '../../types/group';

const SingleGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 31px 0px;
  align-items: center;
  border-bottom: 1px solid #b2b2b2;
`;

const GroupAvatar = styled.img`
  border-radius: 50%;
  overflow: hidden;
  width: 90px;
  height: 90px;
`;

const GroupDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
  justify-self: flex-start;
  padding-top: 8px;
`;
const GroupTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #000000;
`;
const ItemLink = styled.a`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #ffb11b;
  }
`;

const GroupCategory = styled.span`
  color: #515151;
  font-size: 16px;
  margin-bottom: 4px;
`;
const GroupFollowers = styled.span`
  color: #515151;
  font-size: 16px;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const FollowButton = styled.button`
  background-color: #ffb11b;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 40px;
  &:focus {
    outline: none;
  }
`;
const UnFollowButton = styled.button`
  background-color: #ffffff;
  color: #ffb11b;
  border-radius: 5px;
  border: solid #ffb11b 1px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 40px;
  &:focus {
    outline: none;
  }
`;

interface StateProps {
  memberOf: number[];
}
interface DispatchProps {
  joinGroup: (props: GroupRequestProps) => void;
  leaveGroup: (props: GroupRequestProps) => void;
}
interface OwnProps {
  groupInfo: Group;
}
type Props = StateProps & DispatchProps & OwnProps & RouteComponentProps;

const mapStateToProps = (state: RootState): StateProps => ({
  memberOf: state.groups.memberOf,
});

const mapDispatchToProps = {
  joinGroup,
  leaveGroup,
};

const SingleGroup: React.FC<Props> = ({
  groupInfo: { addressImageGroup, name, groupCategory, subscribers, id },
  joinGroup: _joinGroup,
  leaveGroup: _leaveGroup,
  memberOf,
  history,
}) => (
  <SingleGroupContainer>
    <LeftWrapper>
      <GroupAvatar src={addressImageGroup} alt="avatar" />
      <GroupDescriptionContainer>
        <GroupTitle>
          <ItemLink onClick={(): void => history.push(`/group/${id}`)}>{name}</ItemLink>
        </GroupTitle>
        <GroupCategory>{groupCategory}</GroupCategory>
        <GroupFollowers>{subscribers} подписчиков </GroupFollowers>
      </GroupDescriptionContainer>
    </LeftWrapper>
    {memberOf.some((element: number) => element === id) ? (
      <UnFollowButton onClick={(): void => _leaveGroup({ userId: 4, groupId: id })}>
        Выйти из группы
      </UnFollowButton>
    ) : (
      <FollowButton onClick={(): void => _joinGroup({ userId: 4, groupId: id })}>
        Вступить в группу
      </FollowButton>
    )}
  </SingleGroupContainer>
);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleGroup));
