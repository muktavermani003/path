import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigations from '../theme/navigationConstant';
import LoginScreen from '../screens/LoginScreen/index';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/index';
import SetNewPasswordScreen from '../screens/SetNewPasswordScreen/index';
import LeadScreen from '../screens/LeadScreen/index';
import LeadDetailStartRideScreen from '../screens/LeadDetailStartRideScreen/LeadDetailStartRideScreenUI';
import LeadDetailScreen from '../screens/LeadDetailScreen/index';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import MisScreen from '../screens/MisScreen/index';
import AccountScreen from '../screens/AccountScreen/index';
import RegisterPatientScreen from '../screens/RegisterPatientScreen/index';
import SamplesScreen from '../screens/SamplesScreen/index';
import InventoryScreen from '../screens/InventoryScreen/index';
import RequiredDocumentsScreen from '../screens/RequiredDocumentsScreen/index';
import ViewProfileScreen from '../screens/ViewProfileScreen/index';

const AuthenticatedStack = createNativeStackNavigator();

const AuthenticatedRoute = () => {
	return (
		<AuthenticatedStack.Navigator initialRouteName={navigations.LOGIN_SCREEN}>
			<AuthenticatedStack.Screen
				name={navigations.LANDING_SCREEN}
				component={LandingScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.LEAD_SCREEN}
				component={LeadScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.LEAD_DETAIL_SCREEN}
				component={LeadDetailScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.MIS_SCREEN}
				component={MisScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.ACCOUNT_SCREEN}
				component={AccountScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.REGISTER_PATIENT_SCREEN}
				component={RegisterPatientScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.SAMPLES_SCREEN_NAVIGATION}
				component={SamplesScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.INVENTORY_SCREEN_NAVIGATION}
				component={InventoryScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.REQUIRED_DOCUMENT_SCREEN}
				component={RequiredDocumentsScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.LOGIN_SCREEN}
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.FORGOT_PASSWORD_SCREEN}
				component={ForgotPasswordScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.SET_NEW_PASSWORD_SCREEN}
				component={SetNewPasswordScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.VIEW_PROFILE_SCREEN}
				component={ViewProfileScreen}
				options={{ headerShown: false }}
			/>
			<AuthenticatedStack.Screen
				name={navigations.LEAD_DETAIL_START_RIDE}
				component={LeadDetailStartRideScreen}
				options={{ headerShown: false }}
			/>
		</AuthenticatedStack.Navigator>
	);
};

class Navigation extends Component {
	render() {
		return (
			<NavigationContainer>
				<AuthenticatedRoute />
			</NavigationContainer>
		);
	}
}

export default Navigation;
