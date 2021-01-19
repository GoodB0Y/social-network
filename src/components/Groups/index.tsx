import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Page from '../../common/Page';
import SingleGroup from './SingleGroup';
import PageSearchInput from '../../common/Inputs/PageSearch';
import { RootState } from '../../redux-toolkit/store';
import { loadGroups, joinGroup, loadAllUsers } from '../../redux-toolkit/groups/groupsSlice';
import { Group, GroupRequestProps } from '../../types/group';
import { GroupsContainer, GroupsTitle } from './Groups.styles';

interface StateProps {
  groups: Group[];
}
interface DispatchProps {
  loadGroups: (page: number, size: number) => void;
  loadAllUsers: (props: GroupRequestProps) => void;
}
type Props = StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  groups: state.groups.groups,
});
const mapDispatchToProps = {
  loadGroups,
  joinGroup,
  loadAllUsers,
};

const Groups = ({ loadGroups: _loadGroups, groups, loadAllUsers: _loadAllUsers }: Props) => {
  const currentUserId = 10;

  useEffect(() => {
    _loadGroups(1, 15);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    groups.forEach((element: Group) =>
      _loadAllUsers({ userId: currentUserId, groupId: element.id, page: 1, size: 15 })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups]);

  const [groupName, setGroupName] = useState<string>('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setGroupName(value.toLowerCase());
  };

  const filterGroups = (data: Group[]): Group[] =>
    data.filter((el) => el.name.toLowerCase().includes(groupName));

  const renderGroups = (data: Group[]): JSX.Element[] =>
    data.map((el: Group) => <SingleGroup key={el.id} groupInfo={el} />);
  return (
    <Page>
      <GroupsContainer>
        <PageSearchInput placeholder="Начните поиск группы..." action={handleInput} />
        <GroupsTitle>Группы</GroupsTitle>
        {groupName.length > 0 ? renderGroups(filterGroups(groups)) : renderGroups(groups)}
      </GroupsContainer>
    </Page>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
