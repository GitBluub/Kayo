import * as React from 'react';
import { SpotifyWidget, BestType } from './SpotifyWidget';

interface FavoriteArtistWidgetInterface {
	artistName: string,
	illustrationUrl: string,
}

const FavoriteArtistWidget = (props: FavoriteArtistWidgetInterface) => (
	<SpotifyWidget leftTitle="Favorite artist" title={props.artistName} illustration={props.illustrationUrl} subtitle=""/>
)

export { FavoriteArtistWidget, FavoriteArtistWidgetInterface }