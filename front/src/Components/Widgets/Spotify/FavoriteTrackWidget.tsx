import * as React from 'react';
import { FavoriteAlbumWidget } from './FavoriteAlbumWidget';
import { SpotifyWidget, BestType } from './SpotifyWidget';

interface FavoriteTrackWidgetInterface {
	artistName: string,
	track: string
	illustration: string,
}

const FavoriteTrackWidget = (props: FavoriteTrackWidgetInterface) => (
	<FavoriteAlbumWidget illustration={props.illustration} albumName={props.track} artistName={props.artistName} />
)

export { FavoriteTrackWidget, FavoriteTrackWidgetInterface }