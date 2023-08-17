import { Select } from 'antd';
import React from 'react';
import axios from 'axios';
import ReactOnRails from 'react-on-rails';

const onChange = async (value) => {
	const url = '/users';
  const data = { 'timezone': value }
  const response = await axios.patch(url, data, {
      headers: ReactOnRails.authenticityHeaders(),
    });
  if(response.status === 200) {
    window.location.reload();
  }
};

const onSearch = (value) => {
  console.log('search:', value);
};

const TimeZoneDropdown = ({timezone}) => {
	const placeholder = timezone ? timezone : "Select a new timezone";

	return (
  <Select
    showSearch
    placeholder={placeholder}
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
		style={{ width: '200px' }}
    options={[
      {
        value: 'Central Daylight Time',
        label: 'Central Daylight Time',
      },
      {
        value: 'Mountain Daylight Time',
        label: 'Mountain Daylight Time',
      },
      {
        value: 'Mountain Standard Time',
        label: 'Mountain Standard Time',
      },
      {
        value: 'Pacific Daylight Time',
        label: 'Pacific Daylight Time',
      },
      {
        value: 'Alaska Daylight Time',
        label: 'Alaska Daylight Time',
      },
      {
        value: 'Hawaii Standard Time',
        label: 'Hawaii Standard Time',
      },
    ]}
  />
	)
};
export default TimeZoneDropdown;