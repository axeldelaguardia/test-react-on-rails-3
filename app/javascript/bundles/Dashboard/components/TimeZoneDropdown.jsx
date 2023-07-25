import { Select } from 'antd';
import React from 'react';
import handleFormSubmit from '../utils/formUtils';

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

const TimeZoneDropdown = () => (
  <Select
    showSearch
    placeholder="Select a timezone"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
		style={{ width: '200px' }}
    options={[
      {
        value: 'CDT',
        label: 'Central Daylight Time',
      },
      {
        value: 'MDT',
        label: 'Mountain Daylight Time',
      },
      {
        value: 'MST',
        label: 'Mountain Standard Time',
      },
      {
        value: 'PDT',
        label: 'Pacific Daylight Time',
      },
      {
        value: 'AKDT',
        label: 'Alaska Daylight Time',
      },
      {
        value: 'HST',
        label: 'Hawaii Standard Time',
      },
    ]}
  />
);
export default TimeZoneDropdown;