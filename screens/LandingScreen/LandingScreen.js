import React, { Component } from 'react';
import { View } from 'react-native';
import FooterTab from '../../widgets/FooterTab';
import AccountScreen from '../AccountScreen/index';
import LeadScreen from '../LeadScreen/index';
import MisScreen from '../MisScreen/index';
import styles from './LandingScreenStyle';

class LandingScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 1,
		};
	}

	onUpdateTab = index => {
		this.setState({ selectedIndex: index });
	};

	render() {
		return (
			<>
				<View style={styles.container}>
					{this.state.selectedIndex === 1 ? (
						<LeadScreen navigation={this.props.navigation} />
					) : this.state.selectedIndex === 2 ? (
						<MisScreen navigation={this.props.navigation} />
					) : (
						<AccountScreen navigation={this.props.navigation} />
					)}
				</View>
				<FooterTab clickFooter={this.onUpdateTab} selected={this.state.selectedIndex} />
			</>
		);
	}
}

export default LandingScreen;
