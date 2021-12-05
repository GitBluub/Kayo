import * as React from 'react';
import { SpotifyWidget, BestType } from './SpotifyWidget';

/**
 * Widget for favorite track widget
 */
interface FavoriteTrackWidgetInterface {
	artistName: string,
	trackName: string
	illustrationUrl: string,
}
/**
 * Widget for a favorite track widget
 * @param props 
 * @returns 
 */
const FavoriteTrackWidget = (props: FavoriteTrackWidgetInterface) => (
	<SpotifyWidget leftTitle="Favorite track" title={props.trackName + " by " + props.artistName} illustration={props.illustrationUrl} subtitle=""/>
)

export { FavoriteTrackWidget, FavoriteTrackWidgetInterface }