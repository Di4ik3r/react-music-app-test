/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button,
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NativeRouter, Route, Link, Redirect } from 'react-router-native';

const App = () => {
	const [auth, setAuth] = useState(true);

	return (
		<NativeRouter>
			<View style={styles.index}>
				{/* {auth ?  : null} */}
				<TabBar auth={auth} setAuth={setAuth} />
				<Route exact path="/" component={Home} />
				<Route path="/add" component={Add} />
				<Route
					path="/login"
					component={() => {
						return <Login auth={auth} setAuth={setAuth} />;
					}}
				/>
			</View>
		</NativeRouter>
	);
};

const DashedView = () => <View style={styles.dash} />;
const HeaderText = ({ text }) => (
	<View>
		<Text style={styles.textHeader}>{text}</Text>
		<DashedView />
	</View>
);

const Home = () => {
	return (
		<View style={styles.child}>
			<HeaderText text="home" />
		</View>
	);
};

const Add = () => {
	return (
		<View style={Object.assign({}, styles.child, styles.addPanel)}>
			<HeaderText text="add" />
		</View>
	);
};

const Login = ({ auth, setAuth }) => {
	const loginStyle = {
		opacity: 0,
	};
	let style = Object.assign({}, styles.child, styles.loginPanel);

	return (
		<View>
			<Text>{auth.toString()}</Text>
			{auth == false ? (
				<View style={style}>
					<Text> login panel </Text>
					<Link to="/">
						<Button
							title="kekus"
							onPress={() => {
								setAuth(true);
							}}
						/>
					</Link>
					<Text>{auth.toString()}</Text>
				</View>
			) : null}
		</View>
	);
};

const TabBar = ({ auth, setAuth }) => {
	return (
		<View className="tab-bar" style={styles.tabBar}>
			<TabBarItem text="HOME" linkTo="/" />
			<TabBarItem text="ADD" linkTo="/add" />
			<TabBarItemLogout
				text={'Logout'}
				auth={auth}
				setAuth={setAuth}
				linkTo="/login"
			/>
		</View>
	);
};

const TabBarItem = ({ text, linkTo }) => {
	return (
		<Link to={linkTo} className="tab-bar-item" style={styles.tabBarItem}>
			<Text style={styles.text}>{text}</Text>
		</Link>
	);
};

const TabBarItemLogout = ({ text, linkTo, auth, setAuth }) => {
	return (
		<Link
			to={linkTo}
			className="tab-bar-item"
			style={styles.tabBarItem}
			onPress={() => {
				setAuth(!auth);
			}}
		>
			<Text style={styles.text}>
				{text} : {auth != undefined ? auth.toString() : null}
			</Text>
		</Link>
	);
};

const _App: () => React$Node = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}
				>
					<Header />
					{global.HermesInternal == null ? null : (
						<View style={styles.engine}>
							<Text style={styles.footer}> Engine: Hermes </Text>
						</View>
					)}
					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}> Step One </Text>
							<Text style={styles.sectionDescription}>
								Edit <Text style={styles.highlight}> App.js </Text> to change
								this screen and then come back to see your edits.
							</Text>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}> See Your Changes </Text>
							<Text style={styles.sectionDescription}>
								<ReloadInstructions />
							</Text>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}> Debug </Text>
							<Text style={styles.sectionDescription}>
								<DebugInstructions />
							</Text>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}> Learn More </Text>
							<Text style={styles.sectionDescription}>
								Read the docs to discover what to do next:
							</Text>
						</View>
						<LearnMoreLinks />
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	index: {
		// marginTop: 50,
		display: 'flex',
		flexDirection: 'column-reverse',
		backgroundColor: 'blue',
		height: '100%',
	},
	child: {
		height: '90%',
		// display: "flex",
		alignSelf: 'stretch',
		// alignContent: "flex-start",
		backgroundColor: '#a3a3a3',
	},
	tabBar: {
		// display: "flex",
		flexDirection: 'row',
		// justifyContent: "space-evenly",
		// alignContent: "flex-end",
		// alignItems: "center",
		// justifyContent: "center",
		backgroundColor: 'green',
		height: '10%',
		// flexWrap: "wrap",
		// height: "100%",
	},
	tabBarItem: {
		width: '33.33%',
		// height: "100%",
		alignSelf: 'stretch',
		backgroundColor: 'grey',
		borderWidth: 1,
		borderColor: 'yellow',
		flexDirection: 'row',
	},
	text: {
		// height: "100%",
		width: '100%',
		backgroundColor: 'green',
		textAlign: 'center',
		// justifyContent: "center",
		alignSelf: 'center',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 20,
	},
	textHeader: {
		textAlign: 'center',
		fontSize: 36,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	dash: {
		borderColor: 'black',
		borderWidth: 1,
		marginLeft: '15%',
		marginRight: '15%',
	},
	addPanel: {
		// backgroundColor: 'blue',
	},
	loginPanel: {
		position: 'absolute',
		// top: 0,
		// bottom: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'red',
		// opacity: 0.25,
	},
});

export default App;
