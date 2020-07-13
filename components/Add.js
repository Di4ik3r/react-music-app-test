import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native';

import HeaderText from './HeaderText';
import { styles as appStyles } from './App';

const Form = t.form.Form;

const TrackTemplate = t.struct({
	band: t.String,
	track: t.String,
});

const Add = () => {
	return (
		<View style={appStyles.appChild}>
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

		// tracks.push(input);
		// console.log(input);
		// console.log(tracks);
	};
	return (
		<View style={styles.addPanelWrapper}>
			<View style={styles.addPanel}>
				<Form
					value={value}
					type={TrackTemplate}
					ref={(c) => {
						_form = c;
					}}
				/>
				{/* <TextInput placeholder="login" style={styles.input} /> */}
				{/* <TextInput placeholder="password" style={styles.input} /> */}
				{/* <Link to="/app"> */}
				<View style={appStyles.button}>
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

const styles = StyleSheet.create({
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

export default Add;
