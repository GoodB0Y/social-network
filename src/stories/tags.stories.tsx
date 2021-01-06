import React, { useState } from 'react';
import Tags from '../common/tags';

export default {
  title: 'Tags',
  component: Tags,
};

export const TagsComponent: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  return (
    <div style={{ padding: '50px', border: '1px solid red', backgroundColor: 'black' }}>
      <Tags
        tags={tags}
        setTags={(_tags) => {
          setTags(_tags);
        }}
        deleteTag={(index) => {
          setTags((_tags) => _tags.filter((item, _index) => _index !== index));
        }}
      />
    </div>
  );
};
