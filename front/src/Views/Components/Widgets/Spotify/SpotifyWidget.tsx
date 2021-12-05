import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../../../Models/Service';
import Grid from '@mui/material/Grid/Grid';

enum BestType {
	ALBUM = "album",
	ARTIST = "artist",
	SONG = "song"
}
/**
 * Props for any spotify widget
 */
interface SpotifyWidgetInterface {
	leftTitle: string
	title: string,
	illustration: string,
	subtitle: string | undefined,
}
/**
 * Wrapper for spotify widgets
 * @param props 
 * @returns 
 */
const SpotifyWidget = (props: SpotifyWidgetInterface) => {
	return <Widget service={AvailableServices['spotify']}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<h2>{props.leftTitle}</h2>
			</Grid>
		</Grid>
		<Grid item>
			<Grid container direction="row" alignItems="center">
				<Grid item style={{textAlign: 'right'}}>
					<h4>{props.title}</h4>
					<h5>{props.subtitle}</h5>
				</Grid>
				<Grid item style={{ padding: 3, paddingLeft: 30 }}>
					<img src={props.illustration} style={{ borderRadius: "15%", width: '150px', paddingTop: 5 }} />
				</Grid>
			</Grid>
		</Grid>
	</Widget>
}

export { SpotifyWidget, BestType, SpotifyWidgetInterface }