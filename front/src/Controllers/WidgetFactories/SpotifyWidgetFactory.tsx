import React, { useEffect, useState } from 'react';
import { ArtistTopTrack } from '../../Views/Components/Widgets/Spotify/ArtistTopTrack';
import ErrorWidget from '../../Views/Components/Widgets/ErrorWidget';
import { FavoriteArtistWidget } from '../../Views/Components/Widgets/Spotify/FavoriteArtistWidget';
import { FavoriteTrackWidget } from '../../Views/Components/Widgets/Spotify/FavoriteTrackWidget';
import KayoAPI from '../KayoAPI';
import type { ServiceWidgetFactoryProps } from '../WidgetFactory';

interface SpotifyWidgetData {
	illustrationUrl: string,
	artistName: string,
	trackName: string | undefined,
	albumName: string | undefined,
}


const SpotifyWidgetFactory = ({ widgetName, widgetData, widgetParams }: ServiceWidgetFactoryProps) => {
	const data = widgetData as SpotifyWidgetData
	switch (widgetName) {
		case 'favorite':
			if (widgetParams[0].value === "artists") {
				return <FavoriteArtistWidget artistName={data.artistName} illustrationUrl={data.illustrationUrl}/>
			} else {
				return <FavoriteTrackWidget artistName={data.artistName} trackName={data.trackName as string} illustrationUrl={data.illustrationUrl}/>
			}
		case 'artist-top-track':
			return <ArtistTopTrack artistName={data.artistName} trackName={data.trackName as string} illustrationUrl={data.illustrationUrl} albumName={data.albumName}/>
		default:
			return (<ErrorWidget serviceName="Spotify" widgetName={widgetName} widgetParams={widgetParams}/>)
	}
}

export default SpotifyWidgetFactory;
export { SpotifyWidgetData }