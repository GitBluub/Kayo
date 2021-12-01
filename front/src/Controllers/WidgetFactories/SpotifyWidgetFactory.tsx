import React, { useEffect, useState } from 'react';
import { ArtistTopTrack } from '../../Views/Components/Widgets/Spotify/ArtistTopTrack';
import ErrorWidget from '../../Views/Components/Widgets/ErrorWidget';
import { FavoriteArtistWidget } from '../../Views/Components/Widgets/Spotify/FavoriteArtistWidget';
import { FavoriteTrackWidget } from '../../Views/Components/Widgets/Spotify/FavoriteTrackWidget';
import KayoAPI from '../API/KayoAPI';
import SpotifyAPI from '../API/SpotifyAPI';
import type { ServiceWidgetFactoryProps } from '../WidgetFactory';

interface SpotifyWidgetData {
	illustrationUrl: string,
	artistName: string,
	trackName: string | undefined
}


const SpotifyWidgetFactory = ({ widgetName, widgetData, widgetParams }: ServiceWidgetFactoryProps) => {
	switch (widgetName) {
		case 'favorite':
			if (widgetParams[0].value == "artists") {
				return <FavoriteArtistWidget artistName={widgetData.artistName} illustration={widgetData.illustrationUrl}/>
			} else {
				return <FavoriteTrackWidget artistName={widgetData.artistName} track={widgetData.trackName} illustration={widgetData.illustrationUrl}/>
			}
		case 'artist-top-track':
			return <ArtistTopTrack artistName={widgetData.artistName} track={widgetData.trackName} illustration={widgetData.illustrationUrl}/>
		default:
			return (<ErrorWidget serviceName="Spotify" widgetName={widgetName} widgetParams={widgetParams}/>)
	}
}

export default SpotifyWidgetFactory