import * as React from 'react';
import { SpotifyWidget, BestType } from './SpotifyWidget';

interface FavoriteTrackWidgetInterface {
	artistName: string,
	trackName: string
	illustrationUrl: string,
}

const FavoriteTrackWidget = (props: FavoriteTrackWidgetInterface) => (
	<SpotifyWidget leftTitle="Favorite track" title={props.trackName + " by " + props.artistName} illustration={props.illustrationUrl} subtitle=""/>
)

export { FavoriteTrackWidget, FavoriteTrackWidgetInterface }