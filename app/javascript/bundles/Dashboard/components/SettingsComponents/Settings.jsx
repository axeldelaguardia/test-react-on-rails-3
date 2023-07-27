import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;
import style from './Settings.module.scss';
import AccountInfo from './AccountInfo';
import UpdateAccount from './UpdateAccount';
import PageLayout from '../PageLayout';
import ProfileSettings from './ProfileSettings';

const accountSettings = [LaptopOutlined].map((icon, index) => {
	const key = String(index + 1);
	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: 'Account Settings',
		children: ["Account Information", "Update Account", "Profile"].map((label, j) => {
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

const Settings = ({user, name, email, timezone, image_path}) => {
	console.log(image_path);
	const [selectedMenuItem, setSelectedMenuItem] = useState(null);
	useEffect(() => {
		setSelectedMenuItem('1');
	}, []);

	const handleMenuItemSelect = (item) => {
		setSelectedMenuItem(item.key);
		console.log(item.key, item)
	}

  return (
		<PageLayout className={style.mainLayout} user={user}>
      <Layout className={style.settingsPart}>
				<div className={style.siderEdge}>
					<Sider width={230}>
						<div className={style.siderWrapper}>
							<Menu
								mode="inline"
								defaultSelectedKeys={['1']}
								defaultOpenKeys={['sub1']}
								className={style.subMenu}
								items={settingsMenu}
								onSelect={handleMenuItemSelect}
							/>
						</div>
					</Sider>
				</div>
        <div className={style.contentLayout}>
          <Content className={style.content}>
            {selectedMenuItem === '1' && <AccountInfo name={name} email={email} timezone={timezone}/>}
            {selectedMenuItem === '2' && <UpdateAccount/>}
            {selectedMenuItem === '3' && <ProfileSettings profile_pic_path={image_path}/>}
            {selectedMenuItem === '4' && <div>Themes</div>}
            {selectedMenuItem === '5' && <div>Font</div>}
          </Content>
        </div>
      </Layout>
		</PageLayout>

  );
};

Settings.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	timezone: PropTypes.string.isRequired,
	user: PropTypes.object,
	image_path: PropTypes.string,
};

export default Settings;