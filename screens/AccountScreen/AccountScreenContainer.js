import React from 'react';
import AccountScreenComponent from './AccountScreenComponent';

const AccountScreenContainer = props => {
	const customProps = { ...props };
	return <AccountScreenComponent {...customProps} />;
};

export default AccountScreenContainer;
