import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;
import style from './Dashboard.module.scss';
import NavBar from './NavBar';
import AccountInfo from './AccountInfo';

const accountSettings = [LaptopOutlined].map((icon, index) => {
	const key = String(index + 1);
	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: 'Account Settings',
		children: ["Account Information", "Email", "Password"].map((label, j) => {
			const subKey = index * 4 + j + 1;
			return {
				key: subKey,
				label: label,
			};
		}),
	};
});

const displaySettings = [UserOutlined].map((icon, index) => {
	const key = String(index + 4);
	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: 'Display Settings',
		children: ["Background", "Font"].map((label, j) => {
			const subKey = index * 4 + j + 4;
			return {
				key: subKey,
				label: label,
			};
		}),
	};
});

const settingsMenu = [...accountSettings, ...displaySettings,]

const Dashboard = ({name, email, timezone}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

	const [selectedMenuItem, setSelectedMenuItem] = useState(null);
	useEffect(() => {
		setSelectedMenuItem('1');
	}, []);

	const handleMenuItemSelect = (item) => {
		setSelectedMenuItem(item.key);
		console.log(item.key, item)
	}

  return (
    <Layout className={style.mainLayout}>
			<NavBar authType={'logout'}/>
      <Layout>
        <Sider
          width={230}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
						className={style.subMenu}
            items={settingsMenu}
						onSelect={handleMenuItemSelect}
          />
        </Sider>
        <Layout
					className={style.contentLayout}
        >
          <Content
						className={style.content}
          >
            {selectedMenuItem === '1' && <AccountInfo name={name} email={email} timezone={timezone}/>}
            {selectedMenuItem === '2' && <div>Email</div>}
            {selectedMenuItem === '3' && <div>Password</div>}
            {selectedMenuItem === '4' && <div>Background</div>}
            {selectedMenuItem === '5' && <div>Font</div>}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

Dashboard.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	timezone: PropTypes.string.isRequired,
};

export default Dashboard;