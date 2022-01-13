import React from 'react';
import LeadDetailScreenComponent from './LeadDetailScreenComponent';

const LeadDetailScreenContainer = props => {
	const customProps = { ...props };
	return <LeadDetailScreenComponent {...customProps} />;
};

export default LeadDetailScreenContainer;
