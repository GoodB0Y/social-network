/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateGroup } from '../../redux-toolkit/groups/singleGroupSlice';
import { ModalData, SubmitData } from '../../types/group';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 600px;
  height: 600px;
  border: 2px solid black;
  background-color: #ffffff;
  top: 150px;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
  left: 33%;
  z-index: 5;
`;

const FromContainer = styled.input`
  width: 100%;
  margin: 5px 20px;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #ffb11b;
  border: 2px solid black;
  border-radius: 5px 20px;
  outline: none;
`;

const LabelContainer = styled.label`
  display: block;
  margin-top: 15px;
`;

const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px 20px;
  background-color: #ffb11b;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  padding: 3px;
  color: #ffffff;
  border-radius: 5px;
  border: 1px solid #ffb11b;
  background-color: black;
`;

const ModalEdit: React.FC<ModalData> = ({
  closeModal,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  updateGroup,
  groupData: { description, linkSite, addressImageGroup, groupCategory, name, id },
}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData: SubmitData): void => {
    updateGroup({ ...formData, id });
  };

  return (
    <Wrapper onClick={closeModal}>
      <ModalContainer onClick={(event): void => event.stopPropagation()}>
        <CloseButton type="button" onClick={closeModal}>
          close
        </CloseButton>
        <form action="" method="" onSubmit={handleSubmit(onSubmit)}>
          <h3>Editing Group</h3>
          <LabelContainer>
            Group name
            <FromContainer type="text" name="name" ref={register} defaultValue={name} />
          </LabelContainer>
          <LabelContainer>
            Description
            <FromContainer
              type="text"
              name="description"
              ref={register}
              defaultValue={description}
            />
          </LabelContainer>
          <LabelContainer>
            Group Category
            <FromContainer
              type="text"
              name="groupCategory"
              ref={register}
              defaultValue={groupCategory}
            />
          </LabelContainer>
          <LabelContainer>
            Link Site
            <FromContainer type="text" name="linkSite" ref={register} defaultValue={linkSite} />
          </LabelContainer>
          <LabelContainer>
            Group Image
            <FromContainer
              type="text"
              name="addressImageGroup"
              ref={register}
              defaultValue={addressImageGroup}
            />
          </LabelContainer>
          <ModalButton type="submit">Save</ModalButton>
        </form>
      </ModalContainer>
    </Wrapper>
  );
};

const mapDispatchToProps = {
  updateGroup,
};

export default connect(null, mapDispatchToProps)(ModalEdit);
