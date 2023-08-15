import ReactOnRails from 'react-on-rails';

import PageLayout from '../bundles/Dashboard/components/PageLayout';
import LoginForm from '../bundles/Dashboard/components/LoginForm';
import Settings from '../bundles/Dashboard/components/SettingsComponents/Settings';
import AccountInfo from '../bundles/Dashboard/components/SettingsComponents/AccountInfo';
import UpdateUserInfoModal from '../bundles/Dashboard/components/SettingsComponents/UpdateUserInfo';
import TimeZoneDropdown from '../bundles/Dashboard/components/SettingsComponents/TimeZoneDropdown';
import NavBar from '../bundles/Dashboard/components/NavBar';
import Dashboard from '../bundles/Dashboard/components/Dashboard';
import UpdateAccount from '../bundles/Dashboard/components/SettingsComponents/UpdateAccount';
import ProfileSettings from '../bundles/Dashboard/components/SettingsComponents/ProfileSettings';
import Background from '../bundles/Dashboard/components/SettingsComponents/DisplaySettings/Background'
import Home from '../bundles/Dashboard/components/Home';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  PageLayout,
  Home,
	LoginForm,
	Settings,
	AccountInfo,
	UpdateUserInfoModal,
	TimeZoneDropdown,
	NavBar,
	Dashboard,
	UpdateAccount,
	ProfileSettings,
	Background,
});
