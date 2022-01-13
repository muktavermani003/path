import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Theme from '../theme';

class CollapsedView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSections: [],
		};
	}

	renderHeader = section => {
		const { activeSections } = this.state;
		return (
			<View style={[styles.paymentDetails, section.index !== 0 && styles.line]}>
				<Text style={styles.item}>{section.title}</Text>
				<Image
					source={Theme.image.iconDownArrow}
					style={[
						styles.iconArrow,
						activeSections.includes(section.index) && styles.iconArrowUp,
					]}
				/>
			</View>
		);
	};

	renderContent = section => {
		return section.content;
	};

	updateSections = activeSections => {
		this.setState({
			activeSections,
		});
	};

	render() {
		const { sections, viewStyle } = this.props;
		const { activeSections } = this.state;
		return (
			<View style={viewStyle}>
				<Accordion
					sections={sections}
					activeSections={activeSections}
					renderHeader={this.renderHeader}
					renderContent={this.renderContent}
					onChange={this.updateSections}
					underlayColor={Theme.color.white}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	paymentDetails: {
		paddingVertical: Theme.verticalScale(12),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	line: {
		borderTopColor: Theme.color.cccd1d3,
		borderTopWidth: Theme.normalScale(1),
	},
	item: {
		color: Theme.color.c394e59,
		fontFamily: Theme.font.fontFamily.semiBold,
		fontSize: Theme.font.fontSize.fs14,
	},
	iconArrow: {
		width: Theme.normalScale(24),
		height: Theme.normalScale(24),
	},
	iconArrowUp: {
		transform: [{ rotate: '180deg' }],
	},
});

export default CollapsedView;
