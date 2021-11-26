import * as React from 'react';
import type { WidgetParam } from 'src/Components/Widget';
import ErrorWidget from 'src/Components/Widgets/ErrorWidget';
import { FavoriteArtistWidget } from 'src/Components/Widgets/Spotify/FavoriteArtistWidget';
import { FavoriteTrackWidget } from 'src/Components/Widgets/Spotify/FavoriteTrackWidget';
import KayoAPI from '../API/KayoAPI';
import SpotifyAPI from '../API/SpotifyAPI';

const SpotifyWidgetFactory = (widgetName: string, widgetParams: WidgetParam[]) => {
	const [widget, setWidget] = React.useState(<></>);
	const what = widgetParams[0].value;
	if (widgetName !== 'favorite' || widgetParams.length != 1 || !['artists', 'tracks'].includes(what))
		return <ErrorWidget serviceName="Spotify" widgetName={widgetName} widgetParams={widgetParams}/>
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
	return widget
	
}

export default SpotifyWidgetFactory