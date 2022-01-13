import React, { Component } from 'react';
import { Animated, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { animationDuration, interpolationValue } from '../constants/Constant';
import Theme from '../theme';

class OverlayComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			scaleValue: new Animated.Value(0),
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

	onOpenModal = () => {
		const { scaleValue } = this.state;
		this.setState(
			{
				isVisible: true,
			},
			() => {
				Animated.timing(scaleValue, {
					toValue: 1,
					duration: animationDuration,
					useNativeDriver: true,
				}).start();
			},
		);
	};

	onCloseModal = () => {
		const { scaleValue } = this.state;
		this.setState(
			{
				isVisible: false,
			},
			() => {
				Animated.timing(scaleValue, {
					toValue: 0,
					duration: animationDuration,
					useNativeDriver: true,
				}).start();
			},
		);
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	};

	render() {
		const { component, title, overlayStyle } = this.props;
		const { isVisible, scaleValue } = this.state;
		return isVisible ? (
			<Modal transparent={true}>
				<Animated.View
					style={[
						styles.container,
						{ transform: [{ translateY: scaleValue.interpolate(interpolationValue) }] },
					]}>
					<View style={[styles.innerContainer, overlayStyle]}>
						<View style={styles.header}>
							<Text style={styles.title}>{title}</Text>
							<TouchableOpacity
								hitSlop={styles.hitSlop}
								activeOpacity={0.8}
								onPress={this.onCloseModal}>
								<Image style={styles.iconClose} source={Theme.image.iconClose} />
							</TouchableOpacity>
						</View>
						{component}
					</View>
				</Animated.View>
			</Modal>
		) : null;
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.color.overlay,
		zIndex: 100,
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	},
	innerContainer: {
		paddingTop: Theme.verticalScale(16),
		paddingHorizontal: Theme.normalScale(16),
		backgroundColor: Theme.color.white,
		borderTopLeftRadius: Theme.normalScale(8),
		borderTopRightRadius: Theme.normalScale(8),
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs18,
		fontFamily: Theme.font.fontFamily.bold,
	},
	hitSlop: {
		top: Theme.verticalScale(15),
		bottom: Theme.verticalScale(15),
		right: Theme.normalScale(15),
		left: Theme.normalScale(15),
	},
	iconClose: {
		height: Theme.verticalScale(16),
		width: Theme.normalScale(16),
		resizeMode: 'contain',
	},
});

export default OverlayComponent;
