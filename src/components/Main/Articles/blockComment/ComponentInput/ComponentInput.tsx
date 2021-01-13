import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import { Formik, Field } from 'formik';
import createComment from './createComment';
import { IUser } from '../../../../../types/user';
import { loadCommentsByPost } from '../../../../../redux-toolkit/postsSlice';

import { WrapperForm, Input, BtnSend, BtnOpenNote, StyledLoading } from './styles';
import Loader from '../../../../../common/Loader';

interface Props {
  user: IUser | null;
  postId: number;
  setIsOpen: (state: boolean) => void;
  loadCommentsByPost: (id: number) => void;
  isOpen: boolean;
}

const ComponentInput: React.FC<Props> = ({
  user,
  postId,
  setIsOpen,
  loadCommentsByPost: _loadCommentsByPost,
  isOpen,
}) => {
  const openOnClick = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        inputText: '',
      }}
      onSubmit={async (values, actions) => {
        setIsLoading(true);
        await createComment({ postId, text: values.inputText, user });
        await _loadCommentsByPost(postId);
        setIsLoading(false);
        actions.resetForm();
      }}
    >
      <WrapperForm>
        <Avatar src={user?.avatar} />
        {isLoading && (
          <StyledLoading>
            <Loader size={30} />
          </StyledLoading>
        )}
        <Field
          as={Input}
          name="inputText"
          placeholder="Напишите что-нибудь..."
          autoComplete="off"
        />
        <BtnSend type="submit" />
        <BtnOpenNote type="button" onClick={openOnClick} isOpen={isOpen} />
      </WrapperForm>
    </Formik>
  );
};

const mapDispatchToProps = {
  loadCommentsByPost,
};

export default connect(null, mapDispatchToProps)(ComponentInput);
