import React from 'react';
import { useForm } from 'react-hook-form';
import Page from '../../common/Page';
import Chip from '../../common/Chip';
import SettingsWrapper from './Settings.style';

const Settings: React.FC = () => {
  const { register, handleSubmit, errors, setError } = useForm();

  return (
    <Page>
      <SettingsWrapper>
        <Chip>Настройки</Chip>
      </SettingsWrapper>
    </Page>
  );
};

export default Settings;
