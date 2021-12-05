import * as React from 'react';
import type { SpotifyWidgetData } from 'src/Controllers/WidgetFactories/SpotifyWidgetFactory';
import { SpotifyWidget, BestType } from './SpotifyWidget';


/**
 * Widget for an artist's top-track
 * @param props 
 * @returns 
 */
const ArtistTopTrack = (props: SpotifyWidgetData) => (
	<SpotifyWidget leftTitle={props.artistName + "'s top track"} title={`'${props.trackName as string}' from ${props.albumName as string}`} illustration={props.illustrationUrl} subtitle=""/>
)

export { ArtistTopTrack }