import * as React from 'react';
import { SpotifyWidget, BestType } from './SpotifyWidget';

interface FavoriteAlbumWidgetInterface {
	artistName: string,
	albumName: string,
	illustration: string,
}

const FavoriteAlbumWidget = (props: FavoriteAlbumWidgetInterface) => (
	<SpotifyWidget type={BestType.ALBUM} title={props.albumName + " by " + props.artistName} illustration={props.illustration} subtitle=""/>
)

export { FavoriteAlbumWidget, FavoriteAlbumWidgetInterface }