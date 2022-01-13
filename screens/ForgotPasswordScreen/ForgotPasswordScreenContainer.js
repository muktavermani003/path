import React from 'react';
import ForgotPasswordScreenComponent from './ForgotPasswordScreenComponent';

const ForgotPasswordScreenContainer = props => {
	const customProps = { ...props };
	return <ForgotPasswordScreenComponent {...customProps} />;
};

export default ForgotPasswordScreenContainer;
