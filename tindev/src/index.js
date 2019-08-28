import React from 'react';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings([
  'Inrecognized WebSocket'
])
import Routes from './routes';
export default function App (){
  return (
    <Routes />    
  );
}