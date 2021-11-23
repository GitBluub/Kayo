import * as React from 'react';
import { SpotifyWidget, BestType } from './SpotifyWidget';

interface FavoriteArtistWidgetInterface {
	artistName: string,
	illustration: string,
}

const FavoriteArtistWidget = (props: FavoriteArtistWidgetInterface) => (
	<SpotifyWidget type={BestType.ARTIST} title={props.artistName} illustration={props.illustration} subtitle=""/>
)

export { FavoriteArtistWidget, FavoriteArtistWidgetInterface }