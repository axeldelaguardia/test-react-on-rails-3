import { Select } from 'antd';
import React from 'react';
import handleFormSubmit from '../../utils/formUtils';

const [authenticity_token] = [document.querySelector('meta[name="csrf-token"]').content];

const onChange = (value) => {
	const url = '/users';
	const method = 'patch';
	const data = {
		'user[timezone]': value,
	};

	handleFormSubmit(url, method, authenticity_token, data);
	console.log(`selected ${value}`);
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