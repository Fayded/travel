var React = require('react-native');

var {
	View,
	Text,
	StyleSheet
} = React;

var styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'pink'
	}
})

class Main extends React.Component {
	render() {
		return (
			<View>
				<Text> Testing the Router </Text>
			</View>
		)
	}
};

module.exports = Main;