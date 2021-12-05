import * as React from 'react';
import { SpotifyWidget, BestType } from './SpotifyWidget';
/**
 * Widget for favorite artist widget
 */
interface FavoriteArtistWidgetInterface {
	artistName: string,
	illustrationUrl: string,
}
/**
 * Widget for a favorite artist widget
 * @param props 
 * @returns 
 */
const FavoriteArtistWidget = (props: FavoriteArtistWidgetInterface) => (
	<SpotifyWidget leftTitle="Favorite artist" title={props.artistName} illustration={props.illustrationUrl} subtitle=""/>
)

export { FavoriteArtistWidget, FavoriteArtistWidgetInterface }