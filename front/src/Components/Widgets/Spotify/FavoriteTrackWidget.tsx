import * as React from 'react';
import { SpotifyWidget, BestType } from './SpotifyWidget';

interface FavoriteTrackWidgetInterface {
	artistName: string,
	track: string
	illustration: string,
}

const FavoriteTrackWidget = (props: FavoriteTrackWidgetInterface) => (
	<SpotifyWidget leftTitle="Favorite track" title={props.track + " by " + props.artistName} illustration={props.illustration} subtitle=""/>
)

export { FavoriteTrackWidget, FavoriteTrackWidgetInterface }