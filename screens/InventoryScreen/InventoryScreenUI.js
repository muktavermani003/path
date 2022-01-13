import React, { Component } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Theme from '../../theme';
import Header from '../../widgets/Header';
import styles from './InventoryScreenStyle';
import mockData from '../../constants/mockData';
import ButtonComponent from '../../widgets/ButtonComponent';

class InventoryScreenUI extends Component {
	render() {
		const { onPressClose } = this.props;
		return (
			<View style={styles.container}>
				<Header
					headerName={Theme.language.inventory}
					hasIconClose
					headerStyle={styles.headerStyle}
					containerStyle={styles.containerStyle}
					onPressClose={onPressClose}
				/>
				<FlatList
					data={mockData.inventory}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollView}
					renderItem={({ item }) => {
						return (
							<View style={styles.card}>
								<View>
									<Text style={styles.name}>{item.name}</Text>
									<Text
										style={
											styles.qty
										}>{`${Theme.language.qty}: ${item.qty}`}</Text>
								</View>
								<View style={styles.buttonView}>
									<TouchableOpacity activeOpacity={0.8} style={styles.image}>
										<Image style={styles.icon} source={Theme.image.iconMinus} />
									</TouchableOpacity>
									<Text style={styles.qtyStyle}>{item.qty}</Text>
									<TouchableOpacity activeOpacity={0.8} style={styles.image}>
										<Image style={styles.icon} source={Theme.image.iconPlus} />
									</TouchableOpacity>
								</View>
							</View>
						);
					}}
				/>
				<View style={styles.button}>
					<ButtonComponent title={Theme.language.save} />
				</View>
			</View>
		);
	}
}

export default InventoryScreenUI;
