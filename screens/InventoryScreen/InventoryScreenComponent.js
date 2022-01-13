import React, { Component } from 'react';
import InventoryScreenUI from './InventoryScreenUI';

class InventoryScreenComponent extends Component {
	onGoBack = () => {
		this.props.navigation.goBack();
	};

	render() {
		return <InventoryScreenUI onPressClose={this.onGoBack} />;
	}
}

export default InventoryScreenComponent;
