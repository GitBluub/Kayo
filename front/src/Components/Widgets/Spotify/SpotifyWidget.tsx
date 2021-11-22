import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../Service';
import Grid from '@mui/material/Grid/Grid';

enum BestType {
	ALBUM = "album",
	ARTIST = "artist",
	SONG = "song"
}

interface SpotifyWidgetInterface {
	type: BestType,
	title: string,
	illustration: string,
}

const SpotifyWidget = (props: SpotifyWidgetInterface) => {
	return <Widget service={AvailableServices.SPOTIFY}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>Favorite {props.type}</h2>
			</Grid>
		</Grid>
		<Grid item>
			<Grid container direction="row" alignItems="center">
				<Grid item justifyContent="center">
					<h4>ADELE</h4>
				</Grid>
				<Grid item style={{ padding: 3, paddingLeft: 30 }}>
					<img src={props.illustration} style={{ borderRadius: (props.type == BestType.ARTIST) ? "50%" : "15%", width: '100px', paddingTop: 5 }} />
				</Grid>
			</Grid>
		</Grid>
	</Widget>
}

export { SpotifyWidget, BestType, SpotifyWidgetInterface }