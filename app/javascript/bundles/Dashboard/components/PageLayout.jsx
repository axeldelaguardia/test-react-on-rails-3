import React from 'react';
import { Layout } from 'antd';
import style from './SettingsComponents/Settings.module.scss';
import NavBar from './NavBar';
import LoginForm from './LoginForm';

const PageLayout = ({user, background, children}) => {


  return (
		<Layout className={style.mainLayout} style={{ backgroundImage: background ? `url(${background})` : 'none', backgroundSize: 'cover' }}>

			<div>
				{!user && <NavBar className={style.navBar} authType={"hidden"}/>}
				{user ? <NavBar className={style.navBar} authType={"logout"}/> : <LoginForm/>}
				{children}
			</div>
    </Layout>
  );
};

export default PageLayout;