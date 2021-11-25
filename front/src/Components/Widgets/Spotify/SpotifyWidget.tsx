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
	subtitle: string | undefined,
}

const SpotifyWidget = (props: SpotifyWidgetInterface) => {
	return <Widget service={AvailableServices['SPOTIFY']}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>Favorite {props.type}</h2>
			</Grid>
		</Grid>
		<Grid item>
			<Grid container direction="row" alignItems="center">
				<Grid item style={{textAlign: 'right'}}>
					<h4>{props.title}</h4>
					<h5>{props.subtitle}</h5>
				</Grid>
				<Grid item style={{ padding: 3, paddingLeft: 30 }}>
					<img src={props.illustration} style={{ borderRadius: (props.type == BestType.ARTIST) ? "50%" : "15%", width: '150px', paddingTop: 5 }} />
				</Grid>
			</Grid>
		</Grid>
	</Widget>
}

export { SpotifyWidget, BestType, SpotifyWidgetInterface }