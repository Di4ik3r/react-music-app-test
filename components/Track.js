import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { removeTrack as removeTrackAction } from '../redux/actions';

const Track = ({ track, removeTrack }) => {
	const handlePress = () => {
		removeTrack(track.id);
	};

	return (
		<TouchableOpacity
			onPress={() => {
				handlePress();
			}}
			style={styles.track}
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
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
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
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	removeTrack: (id) => {
		dispatch(removeTrackAction(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Track);
