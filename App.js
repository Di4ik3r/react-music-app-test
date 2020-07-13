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
	TextInput,
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
	NativeRouter,
	Route,
	Link,
	Redirect,
	useHistory,
} from 'react-router-native';

import t from 'tcomb-form-native';
import { match } from 'tcomb-form-native/lib';

const bands = [
	'Bring Me The Horizon',
	'Amity Affliction',
	'Falling In Reverse',
];

const tracks = generateTracks(10);

function generateTracks(length) {
	let result = [];
	for (let i = 0; i < length; i++) {
		result.push(generateTrack(i));
	}
	return result;
}

function generateTrack(id) {
	return {
		id: id,
		band: bands[randomInteger(0, bands.length - 1)],
		track: 'track ' + randomInteger(0, 99),
	};
}

const UserTemplate = t.struct({
	login: t.String,
	password: t.String,
});
const TrackTemplate = t.struct({
	band: t.String,
	track: t.String,
});
const options = {
	fields: {
		login: {},
		password: {
			password: true,
			secureTextEntry: true,
		},
	},
};

const Form = t.form.Form;
const users = [
	{
		login: 'user1',
		password: 'pass1',
	},
	{
		login: 'u1',
		password: 'p1',
	},
	{
		login: 'u',
		password: 'p',
	},
];

const App = () => {
	const [auth, setAuth] = useState(true);
	const [tracks, setTracks] = useState(tracks);

	return (
		<NativeRouter>
			<View style={styles.body}>
				<Route exact path="/" component={Index} />
				<Route path="/app" component={AppIndex} />
			</View>
		</NativeRouter>
	);
};

const AppIndex = () => {
	return (
		<View>
			<Route path="/app/home" component={Home} />
			<Route path="/app/add" component={Add} />
			<TabBar />
		</View>
	);
};

const Home = () => {
	return (
		<View style={styles.appChild}>
			<HeaderText text="home" />
			<ScrollView style={styles.homeContainer}>
				{tracks.map((item) => (
					<Track key={item.id} track={item} />
				))}
			</ScrollView>
		</View>
	);
};

const Track = ({ track }) => {
	const handlePress = () => {};

	return (
		<View
			style={styles.track}
			onPress={() => {
				handlePress();
			}}
		>
			<Text
				style={{
					...styles.trackText,
					...styles.trackTextBand,
				}}
			>
				{track.band}
			</Text>
			<Text
				style={{
					...styles.trackText,
					...styles.trackTextHeader,
				}}
			>
				Track({track.id}): <Text> {track.track} </Text>
			</Text>
		</View>
	);
};

const DashedView = () => <View style={styles.dash} />;
const HeaderText = ({ text }) => (
	<View>
		<Text style={styles.textHeader}> {text} </Text>
		<DashedView />
	</View>
);

const Index = () => {
	return (
		<>
			<Login />
		</>
	);
};

const Add = () => {
	return (
		<View style={styles.appChild}>
			<HeaderText text="add" />
			<AddForm />
		</View>
	);
};

const AddForm = () => {
	const [value, setValue] = useState({});
	let _form = null;

	const handleSubmit = () => {
		const input = _form.getValue();
		if (!input) {
			setValue({});
			return;
		}
		const { track, band } = input;
		if (track && band && track.trim().length > 0 && band.trim().length > 0) {
			setValue({});
			return;
		}

		tracks.push(input);
		console.log(input);
		console.log(tracks);
	};
	return (
		<View style={styles.addPanelWrapper}>
			<View style={styles.addPanel}>
				<Form
					value={value}
					type={TrackTemplate}
					options={options}
					ref={(c) => {
						_form = c;
					}}
				/>
				{/* <TextInput placeholder="login" style={styles.input} /> */}
				{/* <TextInput placeholder="password" style={styles.input} /> */}
				{/* <Link to="/app"> */}
				<View style={styles.button}>
					<Button
						title="add"
						onPress={() => {
							handleSubmit();
						}}
					/>
				</View>
			</View>
		</View>
	);
};

const Login = () => {
	const [value, setValue] = useState({});
	const history = useHistory();
	let _form = null;

	const handleSubmit = () => {
		const input = _form.getValue();
		if (!input) {
			setValue({});
			return;
		}
		const { login, password } = input;
		const filter = users.filter((item) => {
			return item.login === login && item.password === password;
		});
		if (filter.length < 1) {
			setValue({});
			return;
		}

		history.push('/app/home');
	};

	return (
		<View style={styles.login}>
			<View style={styles.loginPanel}>
				<Form
					value={value}
					type={UserTemplate}
					options={options}
					ref={(c) => {
						_form = c;
					}}
				/>
				{/* <TextInput placeholder="login" style={styles.input} /> */}
				{/* <TextInput placeholder="password" style={styles.input} /> */}
				{/* <Link to="/app"> */}
				<View style={styles.button}>
					<Button
						title="login"
						onPress={() => {
							handleSubmit();
						}}
					/>
				</View>
			</View>
		</View>
	);
};

const TabBar = () => {
	return (
		<View className="tab-bar" style={styles.tabBar}>
			<TabBarItem position="left" text="home" linkTo="/app/home" />
			<TabBarItem position="center" text="add" linkTo="/app/add" />
			<TabBarItemLogout text={'Logout'} />
		</View>
	);
};

const TabBarItem = ({ text, linkTo, position }) => {
	let style = styles.tabBarItem;
	switch (position) {
		case 'left': {
			style = {
				...style,
				...styles.tabBarLeftItem,
			};
			break;
		}
		case 'center': {
			style = {
				...style,
				...styles.tabBarCenterItem,
			};
			break;
		}
	}

	return (
		<Link to={linkTo} className="tab-bar-item" style={style}>
			<Text style={styles.text}> {text} </Text>
		</Link>
	);
};

const TabBarItemLogout = ({ text }) => {
	return (
		<Link
			to="/"
			className="tab-bar-item"
			style={{
				...styles.tabBarItem,
				...styles.tabBarRightItem,
			}}
		>
			<Text style={styles.text}> {text} </Text>
		</Link>
	);
};

const styles = StyleSheet.create({
	body: {
		width: '100%',
		height: '100%',
		backgroundColor: '#d1d1d1',
	},
	login: {
		display: 'flex',
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	loginPanel: {
		borderRadius: 15,
		backgroundColor: 'white',
		padding: 25,
		width: 250,
		borderColor: 'black',
		borderWidth: 1,
	},
	input: {
		// borderColor: 'grey',
		// borderWidth: 1,
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		margin: 5,
		marginBottom: 15,
		padding: 0,
	},
	button: {
		marginTop: 10,
		marginLeft: 20,
		marginRight: 20,
	},
	text: {
		// height: "100%",
		width: '100%',
		// backgroundColor: 'green',
		textAlign: 'center',
		// justifyContent: "center",
		alignSelf: 'center',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 20,
		textAlignVertical: 'center',
		height: '100%',
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
		marginBottom: 10,
	},
	appChild: {
		height: '90%',
	},
	tabBar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'stretch',
		height: '10%',
		backgroundColor: 'transparent',
		// borderWidth: 1,
		// borderColor: 'black',
	},
	tabBarItem: {
		// width: '33.33%',
		// backgroundColor: 'blue',
		flex: 1,
		// borderWidth: 1,
		borderTopWidth: 2,
		borderTopColor: '#3a3a3a',
		backgroundColor: '#a3a3a3',
		// alignSelf: 'center',
	},
	tabBarLeftItem: {
		borderTopLeftRadius: 25,
		borderLeftWidth: 2,
	},
	tabBarCenterItem: {
		// borderWidth: 2,
		// borderColor: '#a3a3a3',
		// backgroundColor: '#a9a9a9',
	},
	tabBarRightItem: {
		borderTopRightRadius: 25,
		borderRightWidth: 2,
	},
	homeContainer: {
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 10,
		paddingRight: 10,
	},
	track: {
		margin: 5,
		padding: 5,
		// backgroundColor: 'green',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: '#b3b3b3',
	},
	trackText: {
		textAlign: 'center',
	},
	trackTextBand: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	trackTextHeader: {
		fontWeight: '800',
		fontSize: 14,
	},
	addPanelWrapper: {
		display: 'flex',
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		height: '85%',
		// backgroundColor: 'white',
		borderRadius: 10,
		margin: 15,
	},
	addPanel: {
		borderRadius: 15,
		backgroundColor: 'white',
		padding: 25,
		// width: 250,
		width: '85%',
		// borderColor: 'black',
		// borderWidth: 1,
	},
});

function randomInteger(min, max) {
	let rand = min + Math.random() * (max - min);
	return Math.floor(rand);
}

export default App;
