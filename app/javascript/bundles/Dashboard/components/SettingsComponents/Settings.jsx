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
import Background from './DisplaySettings/Background';

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

const Settings = ({user, name, email, timezone, image_path, background_path}) => {
	const [localName, setLocalName] = useState(name);
	const [localEmail, setLocalEmail] = useState(email);
	const [localTimezone, setLocalTimezone] = useState(timezone);
	const [localBackgroundPath, setLocalBackgroundPath] = useState(background_path);

	const updateAccountInfo = (updatedData) => {
		setLocalName(updatedData.user.name);
		setLocalEmail(updatedData.user.email);
		setLocalTimezone(updatedData.user.timezone);
	};

	const updateBackground = (updatedData) => {
		setLocalBackgroundPath(updatedData.user.background_path);
	};

	const [selectedMenuItem, setSelectedMenuItem] = useState(null);
	useEffect(() => {
		setSelectedMenuItem('1');
	}, []);

	const handleMenuItemSelect = (item) => {
		setSelectedMenuItem(item.key);
	}

  return (
		<PageLayout className={style.mainLayout} user={user} background={localBackgroundPath}>
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
            {selectedMenuItem === '1' && (
							<AccountInfo 
								name={localName} 
								email={localEmail} 
								timezone={localTimezone}/>
						)}
            {selectedMenuItem === '2' && (
							<UpdateAccount
								name={localName}
								email={localEmail}
								timezone={localTimezone}
								onUpdateSuccess={updateAccountInfo}/>
						)}
            {selectedMenuItem === '3' && <ProfileSettings profile_pic_path={image_path}/>}
            {selectedMenuItem === '4' && (
							<Background
								onUpdateSuccess={updateBackground}
							/>
						)}
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
	background_path: PropTypes.string,
};

export default Settings;