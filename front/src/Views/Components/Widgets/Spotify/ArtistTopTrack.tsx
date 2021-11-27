import * as React from 'react';
import { SpotifyWidget, BestType } from './SpotifyWidget';

interface ArtistTopTrackInterface {
	artistName: string,
	track: string
	illustration: string,
}

const ArtistTopTrack = (props: ArtistTopTrackInterface) => (
	<SpotifyWidget leftTitle={props.artistName + "'s top track"} title={props.track} illustration={props.illustration} subtitle=""/>
)

export { ArtistTopTrack, ArtistTopTrackInterface }