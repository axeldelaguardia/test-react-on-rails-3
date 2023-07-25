// import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import style from './HomePage.module.scss';

// const HomePage = (props) => {
//   const [name, setName] = useState(props.name);

//   return (
//     <div>
//       <h3>Hello, {name}!</h3>
//       <hr />
//       <form className={style.bright}>
//         <label className={style.case} htmlFor="name">
//           Say hello to:
//           <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//       </form>
//     </div>
//   );
// };

// HomePage.propTypes = {
//   name: PropTypes.string.isRequired, // this is passed from the Rails view
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { Layout, Menu, theme } from 'antd';
import AuthButton from './AuthButton';
import style from './Dashboard.module.scss';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';

const HomePage = ({user}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={style.mainLayout}>
			{!user && <NavBar authType={"hidden"}/>}
			{user ? <NavBar authType={"logout"}/> : <LoginForm/>}
    </Layout>
  );
};

HomePage.propTypes = {
	user: PropTypes.object,
};

export default HomePage;