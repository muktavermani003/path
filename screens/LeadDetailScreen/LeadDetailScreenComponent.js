import React, { Component } from 'react';
import Theme from '../../theme';
import LeadDetailScreenUI from './LeadDetailScreenUI';

class LeadDetailScreenComponent extends Component {
	constructor(props) {
		super(props);
		this.props = props.customProps;
		this.state = {
			selectedModal: '',
			bodyTemperature: '',
			date: '',
			time: '',
			remarks: '',
		};
	}

	onOpenModal = key => {
		this.setState({
			selectedModal: key,
		});
	};

	onChangeText = (text, field) => {
		this.setState({
			[field]: text,
		});
	};

	onSubmitDetails = () => {
		this.props.navigation.navigate(Theme.navigations.REGISTER_PATIENT_SCREEN);
	};

	onPressBack = () => {
		this.props.navigation.goBack();
	};

	render() {
		const { selectedModal, bodyTemperature, date, time, remarks } = this.state;
		const { route } = this.props;
		const { leadId } = route.params || {};
		return (
			<LeadDetailScreenUI
				leadId={leadId}
				selectedModal={selectedModal}
				onOpenModal={this.onOpenModal}
				bodyTemperature={bodyTemperature}
				onChangeText={this.onChangeText}
				onSubmitDetails={this.onSubmitDetails}
				onUploadPhoto={this.onUploadPhoto}
				date={date}
				time={time}
				remarks={remarks}
				onReschedule={this.onReschedule}
				onPressBack={this.onPressBack}
			/>
		);
	}
}

export default LeadDetailScreenComponent;
