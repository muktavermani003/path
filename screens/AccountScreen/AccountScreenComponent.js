import React, { Component } from 'react';
import Theme from '../../theme';
import AccountScreenUI from './AccountScreenUI';

class AccountScreenComponent extends Component {
	constructor(props) {
		super(props);
		this.props = props.customProps;
	}

	onViewProfile = () => {
		this.props.navigation.navigate(Theme.navigations.VIEW_PROFILE_SCREEN);
	};

	render() {
		return <AccountScreenUI onViewProfile={this.onViewProfile} />;
	}
}

export default AccountScreenComponent;
