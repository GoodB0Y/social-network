import React, { useState } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { GroupHeaderData } from '../../types/group';
import ModalEdit from './ModalEdit';

const NavbarWrapper = styled.nav`
  font-style: normal;
  font-weight: normal;
  min-height: 150px;
  border-bottom: 1px solid #515151;
  color: #515151;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const EditButton = styled.div`
  align-self: flex-end;
  button {
    padding: 5px;
    background-color: #ffb11b;
    border-radius: 5px;
    outline: none;
    color: black;
    border: 1px solid black;
  }
`;

const OriginDate = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  color: #000000;
  margin-bottom: 15px;
`;

const GroupDescription = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  color: #000000;
  margin-bottom: 15px;
  text-align: left;
`;

const Link = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 15px;
`;

const Owner = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  color: #000000;
  margin-bottom: 15px;
`;

const GroupHeader = ({
  data: { description, linkSite, ownerFio, persistDate },
  data,
}: GroupHeaderData): JSX.Element => {
  const originDate = persistDate ? format(new Date(persistDate), "dd.MM.yyyy' в 'HH:mm") : null;

  const [isModalOpen, setModal] = useState(false);

  const closeModal = (): void => setModal(false);

  return (
    <NavbarWrapper className="hello">
      <EditButton>
        <button type="button" onClick={(): void => setModal(true)}>
          Edit group
        </button>
      </EditButton>
      {isModalOpen && <ModalEdit closeModal={closeModal} groupData={data} />}
      <OriginDate>{originDate}</OriginDate>
      <GroupDescription>{description}</GroupDescription>
      <Link href={linkSite}>{linkSite}</Link>
      <Owner>Group owner: {ownerFio}</Owner>
    </NavbarWrapper>
  );
};

export default GroupHeader;
