import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native';
import { conenct, connect } from 'react-redux';

import HeaderText from './HeaderText';
import { styles as appStyles } from './App';
import {
	addTrack as addTrackAction,
	addTrackSetInput as addTrackSetInputAction,
} from '../redux/actions';

const Form = t.form.Form;

const TrackTemplate = t.struct({
	band: t.String,
	track: t.String,
});

let AddForm = ({ addTrack, addTrackInput, addTrackSetInput }) => {
	let _form = null;
	// console.log('kekus', addTrack, addTrackInput, addTrackSetInput);

	const handleSubmit = () => {
		const input = _form.getValue();
		if (!input) {
			addTrackSetInput({});
			return;
		}
		const { track, band } = input;
		if (track && band && track.trim().length > 0 && band.trim().length > 0) {
			// console.log('kekus');
			addTrackSetInput({});
			addTrack({ ...input });
			// console.log('top lvl add-track');
			return;
		}
	};
	return (
		<View style={styles.addPanelWrapper}>
			<View style={styles.addPanel}>
				<Form
					value={addTrackInput}
					type={TrackTemplate}
					ref={(c) => {
						_form = c;
					}}
				/>
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

const mapStateToProps = (state) => ({
	addTrackInput: state.addTrackInput,
});

const mapDispatchToProps = (dispatch) => ({
	addTrackSetInput: (input) => {
		// console.log('begin input');
		dispatch(addTrackSetInputAction(input));
		// console.log('end input');
	},
	addTrack: (track) => {
		// 	console.log('begin add');
		dispatch(addTrackAction(track));
		// 	console.log('end add');
	},
});

AddForm = connect(mapStateToProps, mapDispatchToProps)(AddForm);

const Add = () => {
	return (
		<View style={appStyles.appChild}>
			<HeaderText text="add" />
			<AddForm />
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
