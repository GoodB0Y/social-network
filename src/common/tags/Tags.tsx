import React, { useState, useCallback } from 'react';
import { TagsContainer, Input } from './style';
import Tag from './Tag';

interface ITags {
  deleteTag: (index: number) => void;
  setTags: (tags: string[]) => void;
  tags: string[];
}

const Tags: React.FC<ITags> = ({ deleteTag, setTags, tags }) => {
  const [value, setValue] = useState('');
  const renderTags = useCallback(
    () =>
      tags.map((tagText, index) => (
        <Tag key={tagText} deleteTag={() => deleteTag(index)}>
          {tagText}
        </Tag>
      )),
    [deleteTag, tags]
  );
  const onBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setTags([...tags, value]);
      setValue('');
    },
    [setTags, value, tags]
  );
  const onEnterKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        onBlur((event as unknown) as React.FocusEvent<HTMLDivElement>);
      }
    },
    [onBlur]
  );
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const innerValue =
        event.target.value !== undefined || event.target.value !== null ? event.target.value : '';
      setValue(innerValue);
    },
    [setValue]
  );
  return (
    <label htmlFor="input">
      <TagsContainer onBlur={onBlur} onKeyPress={onEnterKeyPress}>
        {renderTags()}
        <Input id="input" type="text" value={value} onChange={onChange} />
      </TagsContainer>
    </label>
  );
};

export default Tags;
