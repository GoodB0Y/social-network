import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';

const SelectBirthday: React.FC = () => {
  const [startDate, setStartDate] = useState<any>(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      locale="ru"
      className="birthday"
      dateFormat="dd.MM.yyyy"
      placeholderText="Дата рождения"
      id="birthday"
    />
  );
};

export default SelectBirthday;
