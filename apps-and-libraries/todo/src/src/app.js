import React from 'react';

import LoginContext from './components/auth/context.js';
import SettingsContext from './context/settings.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <SettingsContext>
        <LoginContext>
          <ToDo />
        </LoginContext>
      </SettingsContext>
    );
  }
}
