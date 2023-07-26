import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import AuthButton from './AuthButton';
const { Header} = Layout;
import style from './Settings.module.scss';

const items1 = ['Home', 'Dashboard', 'Settings'].map((key) => ({
  key,
  label: key,
}));

const NavBar = ({ authType }) => {

	const [selectedNavItem, setSelectedNavItem] = useState(null);

	const handleNavItemSelect = (item) => {
		setSelectedNavItem(item.key);
	
		switch (item.key) {
			case 'Home':
				window.location.href = '/';
				break;
			case 'Dashboard':
				window.location.href = '/dashboard';
				break;
			case 'Settings':
				window.location.href = '/settings';
				break;
		}
	};

  return (
		<Header
			className={style.header}
		>
			<h1 className={style.title} >React on Rails Demo</h1>
			<Menu 
				theme="dark"
				defaultSelectedKeys={['1']} 
				items={items1}
				className={style.navMenu}
				onSelect={handleNavItemSelect}
			/>
			<AuthButton type={ authType } />
		</Header>
  );
};

export default NavBar;