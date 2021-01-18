import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RootState } from '../../../redux-toolkit/store';
import { joinGroup, leaveGroup } from '../../../redux-toolkit/groups/groupsSlice';
import Button from '../../../common/Button';
import { Group, GroupRequestProps } from '../../../types/group';
import {
  SingleGroupContainer,
  GroupAvatar,
  GroupDescriptionContainer,
  GroupTitle,
  ItemLink,
  GroupCategory,
  GroupFollowers,
  LeftWrapper,
  FollowButton,
  UnFollowButton,
} from './SingleGroup.styles';

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

const SingleGroup = ({
  groupInfo: { addressImageGroup, name, groupCategory, subscribers, id },
  joinGroup: _joinGroup,
  leaveGroup: _leaveGroup,
  memberOf,
  history,
}: Props) => (
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
      <Button
        label="Выйти из группы"
        onClick={(): void => _leaveGroup({ userId: 4, groupId: id })}
      />
    ) : (
      <Button
        label="Вступить в группу"
        onClick={(): void => _joinGroup({ userId: 4, groupId: id })}
      />
    )}
  </SingleGroupContainer>
);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleGroup));
