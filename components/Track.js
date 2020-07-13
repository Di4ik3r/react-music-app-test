import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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

export default Track;
