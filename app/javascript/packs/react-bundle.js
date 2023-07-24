import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/Dashboard/components/HelloWorld';
import LoginForm from '../bundles/Dashboard/components/LoginForm';
import Dashboard from '../bundles/Dashboard/components/Dashboard';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
	LoginForm,
	Dashboard,
});
