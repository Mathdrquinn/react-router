import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
//Components
import Layout from './components/Layout';

const app = document.getElementById('app');
ReactDOM.render(<Layout word='swag'/>, app)
