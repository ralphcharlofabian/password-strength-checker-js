// import logo from './logo.svg';
// import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './appRedux/store';

import 'antd/dist/antd.css';
import PasswordStrengthChecker from './components/passwordStrengthChecker';


function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>
        <PasswordStrengthChecker/>
      </PersistGate> */}
      <PasswordStrengthChecker/>
    </Provider>
  );
}

export default App;
