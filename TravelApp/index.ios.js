'use strict';
var React = require('react-native');
var Main = require('./App/Components/Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

class TravelApp extends React.Component {
  render() {
  	return (
  		<NavigatorIOS
  			initialRoute = {{
  				title: 'TravelApp',
  				component: Main
  			}} />
		);
  }
};

AppRegistry.registerComponent('TravelApp', () => TravelApp);
