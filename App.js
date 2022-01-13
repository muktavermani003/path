import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';
import Theme from './src/theme';
import Navigation from './src/navigation/Navigation';

const { color } = Theme;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.white,
	},
});

class App extends Component {
	render() {
		console.disableYellowBox = true;
		return (
			<Provider store={store()}>
				<SafeAreaView style={styles.container}>
					<StatusBar backgroundColor={color.cf4f7f8} barStyle="dark-content" />
					<Navigation />
				</SafeAreaView>
			</Provider>
		);
	}
}

export default App;
