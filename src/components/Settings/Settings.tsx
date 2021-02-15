import React from 'react';
import { useForm } from 'react-hook-form';

import Page from '../../common/Page';

const Settings: React.FC = () => {
  const { register, handleSubmit, errors, setError } = useForm();

  return (
    <Page>
      <div>Hello</div>
    </Page>
  );
};

export default Settings;
