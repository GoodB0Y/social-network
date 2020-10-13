/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Field, Formik } from 'formik';
import SmoothCollapse from 'react-smooth-collapse';
import * as Yup from 'yup';
import { ArticleButton, ArticleStyledForm, InputName, InputText, ErrorLine } from './styles';
import imgButtonMore from './img/BTN more.svg';
import { ArticleName, ButtonMore } from '../../../common/styledComponents';
import createPost from './createPost';
import Tags from '../../../common/tags';
import LoadingBlock from '../../../common/loadingBlock';
import { loadPostsByUser } from '../../../redux-toolkit/postsSlice';
import { RootState } from '../../../redux-toolkit/store';

const ArticleSchema = Yup.object().shape({
  articleName: Yup.string()
    .min(1, 'Слишком короткое название!')
    .max(50, 'Слишком длинное название!')
    .required('Название должно быть указано'),
  articleText: Yup.string()
    .required('В статье должен быть текст'),
});

const mapStateToProps = (state: RootState) => ({
  user: state?.user?.data,
});

const mapDispatchToProps = {
  loadPostsByUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface IArticleForm {
  isOpen: boolean;
  changeOpen: () => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & IArticleForm;

const ArticleForm: React.FC<Props> = ({
  changeOpen,
  isOpen,
  loadPostsByUser: _loadPostsByUser,
  user,
}): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  return (
    <Formik
      initialValues={{
        articleName: '',
        articleText: '',
      }}
      onSubmit={async (values, actions) => {
        setLoading(true);
        try {
          await createPost({ title: values.articleName, text: values.articleText, tags, user });
          await _loadPostsByUser(user?.userId);
          setTags([]);
          actions.resetForm();
        } catch (err) {
          alert(err);
        }
        setLoading(false);
      }}
      validationSchema={ArticleSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ errors, touched }) => (
        <SmoothCollapse expanded={isOpen} heightTransition="1s">
          <ArticleStyledForm>
            <ArticleName>Название статьи</ArticleName>
            <Field
              name="articleName"
              as={InputName}
              autoComplete="off"
              $isError={errors.articleName && touched.articleName}
            />
            {
                errors.articleName && touched.articleName && (
                  <ErrorLine>{errors.articleName}</ErrorLine>
                )
              }
            <ArticleName>Текст</ArticleName>
            <Field
              name="articleText"
              rows="12"
              as={InputText}
              $isError={errors.articleText && touched.articleText}
            />
            {
                errors.articleText && touched.articleText && (
                  <ErrorLine>{errors.articleText}</ErrorLine>
                )
            }
            <ArticleName>Теги</ArticleName>
            <Tags
              tags={tags}
              setTags={(_tags) => setTags(_tags.filter((tag) => tag !== ''))}
              deleteTag={(index) => {
                setTags((_tags) => _tags.filter((item, _index) => _index !== index));
              }}
            />
            {loading && <LoadingBlock />}
            <ArticleButton className="articleButton" type="submit">
              Опубликовать
            </ArticleButton>
            <ButtonMore img={imgButtonMore} onClick={changeOpen} />
          </ArticleStyledForm>
        </SmoothCollapse>
      )}
    </Formik>
  );
};

export default connector(ArticleForm);
