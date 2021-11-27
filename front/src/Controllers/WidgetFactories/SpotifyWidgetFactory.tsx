import * as React from 'react';
import { ArtistTopTrack } from 'src/Components/Widgets/Spotify/ArtistTopTrack';
import ErrorWidget from '../../Components/Widgets/ErrorWidget';
import { FavoriteArtistWidget } from '../../Components/Widgets/Spotify/FavoriteArtistWidget';
import { FavoriteTrackWidget } from '../../Components/Widgets/Spotify/FavoriteTrackWidget';
import KayoAPI from '../API/KayoAPI';
import SpotifyAPI from '../API/SpotifyAPI';
import type { WidgetFactoryProps } from '../WidgetFactory';


const SpotifyWidgetFactory = ({ widgetName, widgetParams }: WidgetFactoryProps) => {
	const [widget, setWidget] = React.useState(<></>);
	const what = widgetParams[0].value;
	
	switch (widgetName) {
		case 'favorite':
			KayoAPI.getOAuthToken('spotify').then(token => {
				SpotifyAPI.setOauthToken(token);
				SpotifyAPI.getFavorite(what as "artists" | "tracks").then((res: any) => setWidget((_) => {
		
					if (res.items == [])
						return <FavoriteArtistWidget artistName="John Doe" illustration="https://image.shutterstock.com/image-vector/pictogram-head-question-mark-john-260nw-171638717.jpg"/>
					if (what == "artists") {
						return <FavoriteArtistWidget artistName={res.items[0].name} illustration={res.items[0].images[0].url}/>
					} else {
						return <FavoriteTrackWidget artistName={res.items[0].artists[0].name} track={res.items[0].name} illustration={res.items[0].album.images[0].url}/>
					}
				}))
			})
			break;
	
		case 'artist-top-track':
		KayoAPI.getOAuthToken('spotify').then(token => {
				SpotifyAPI.setOauthToken(token);
				SpotifyAPI.getArtistTopTrack(what).then((item: any) => setWidget((_) => {
					return <ArtistTopTrack artistName={item.artists[0].name} track={item.name} illustration={item.album.images[0].url}/>
				}))
			})
			break;
		default:
			return <ErrorWidget serviceName="Spotify" widgetName={widgetName} widgetParams={widgetParams}/>
	}
	
	return widget
	
}

export default SpotifyWidgetFactory