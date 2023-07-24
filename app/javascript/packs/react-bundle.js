import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import LoginForm from '../bundles/LoginForm/components/LoginForm';
import Dashboard from '../bundles/Dashboard/components/DashboardServer';
import LogoutButton from '../bundles/Dashboard/components/LogoutButton';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
	LoginForm,
	Dashboard,
	LogoutButton,
});
