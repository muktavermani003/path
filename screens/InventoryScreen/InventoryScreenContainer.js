import React from 'react';
import InventoryScreenComponent from './InventoryScreenComponent';

const InventoryScreenContainer = props => {
	const customProps = { ...props };
	return <InventoryScreenComponent {...customProps} />;
};

export default InventoryScreenContainer;
