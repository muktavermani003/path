import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Theme from '../theme';
import Input from './Input';
import OverlayComponent from './OverlayComponent';

class DropdownComponent extends Component {
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
		this.modalRef.onOpenModal();
	};

	dropdownComponent = data => {
		const { onSearch, searchValue, searchTitle, activeDropdownValue, onSelectValue } =
			this.props;
		return (
			<View style={styles.container}>
				<Input
					placeholder={searchTitle}
					onChangeText={onSearch}
					value={searchValue}
					hasIconSearch
					textInputStyle={styles.textInputStyle}
				/>
				<FlatList
					data={data}
					keyExtractor={this.keyExtractor}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.componentScrollView}
					renderItem={({ item, index }) => {
						return (
							<TouchableOpacity
								style={styles.data}
								onPress={() => onSelectValue(index)}
								activeOpacity={0.8}>
								<Image
									source={
										index === activeDropdownValue
											? Theme.image.iconActiveRadio
											: Theme.image.iconInactiveRadio
									}
									style={[
										styles.iconInactiveRadio,
										index === activeDropdownValue && styles.iconActiveRadio,
									]}
								/>
								<Text style={styles.text}>{item}</Text>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
		);
	};

	render() {
		const { title, values } = this.props;
		return (
			<OverlayComponent
				onRef={ref => {
					this.modalRef = ref;
				}}
				component={this.dropdownComponent(values)}
				title={title}
				overlayStyle={styles.overlayStyle}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: Theme.verticalScale(16),
	},
	textInputStyle: {
		paddingLeft: Theme.normalScale(40),
	},
	componentScrollView: {
		marginTop: Theme.verticalScale(16),
		paddingBottom: Theme.verticalScale(100),
	},
	data: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconInactiveRadio: {
		height: Theme.normalScale(22),
		width: Theme.normalScale(22),
		marginTop: Theme.verticalScale(2),
		marginLeft: Theme.verticalScale(1),
	},
	iconActiveRadio: {
		height: Theme.normalScale(24),
		width: Theme.normalScale(24),
		marginLeft: 0,
		resizeMode: 'contain',
	},
	text: {
		fontFamily: Theme.font.fontFamily.medium,
		fontSize: Theme.font.fontSize.fs16,
		lineHeight: Theme.font.LineHeight.lh40,
		color: Theme.color.c394e59,
		marginLeft: Theme.normalScale(12),
	},
	overlayStyle: {
		maxHeight: Theme.verticalScale(776),
	},
});

export default DropdownComponent;
