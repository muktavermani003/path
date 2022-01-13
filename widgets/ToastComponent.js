import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { toastTimeout } from '../constants/Constant';
import Theme from '../theme';

class ToastComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
		};
	}

	componentDidMount() {
		const { onRef } = this.props;
		if (onRef) {
			onRef(this);
		}
	}

	componentWillUnmount() {
		const { onRef } = this.props;
		if (onRef) {
			onRef(null);
		}
	}
	handleToastVisibility = (value, message) => {
		this.setState({
			isVisible: value,
			message,
		});
	};

	onShowToast = () => {
		this.setState({
			isVisible: true,
		});
		setTimeout(() => {
			this.setState({
				isVisible: false,
			});
		}, toastTimeout);
	};

	render() {
		const { toastMessage } = this.props;
		const { isVisible } = this.state;
		return isVisible ? (
			<View style={styles.containerStyle}>
				<Text style={styles.text}>{toastMessage}</Text>
			</View>
		) : null;
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		alignSelf: 'center',
		backgroundColor: Theme.color.c05202f,
		borderRadius: Theme.normalScale(8),
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: Theme.verticalScale(22),
		elevation: Theme.verticalScale(2),
		shadowOpacity: 0.1,
		shadowColor: Theme.color.black,
		paddingHorizontal: Theme.normalScale(16),
		paddingVertical: Theme.verticalScale(12),
	},
	text: {
		color: Theme.color.white,
		fontSize: Theme.font.fontSize.fs14,
		fontFamily: Theme.font.fontFamily.medium,
		lineHeight: Theme.font.LineHeight.lh16,
	},
});

export default ToastComponent;
