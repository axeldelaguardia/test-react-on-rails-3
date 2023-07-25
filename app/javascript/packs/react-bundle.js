import ReactOnRails from 'react-on-rails';

import HomePage from '../bundles/Dashboard/components/HomePage';
import LoginForm from '../bundles/Dashboard/components/LoginForm';
import Dashboard from '../bundles/Dashboard/components/Dashboard';
import AccountInfo from '../bundles/Dashboard/components/AccountInfo';
import UpdateUserInfoModal from '../bundles/Dashboard/components/UpdateUserInfo';
import TimeZoneDropdown from '../bundles/Dashboard/components/TimeZoneDropdown';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HomePage,
	LoginForm,
	Dashboard,
	AccountInfo,
	UpdateUserInfoModal,
	TimeZoneDropdown,
});
