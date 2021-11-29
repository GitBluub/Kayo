import { ThemeProvider } from "@emotion/react";
import axios from "axios";
import queryString from 'query-string'

export default class SpotifyAPI {
	private static oauthToken = null as string | null;
	private static spotifyAPIUrl = 'https://api.spotify.com'

	public static setOauthToken(token: string) {
		this.oauthToken = token;
	}

	public static getFavorite(what: "artists" | "tracks") {
		return axios.get(
			`${this.spotifyAPIUrl}/me/top/${what}?&limit=1`
		).then(res => res.data);
	}

	public static getFavoriteArtist() {
		return this.getFavorite("artists");
	}

	public static getFavoriteTrack() {
		return this.getFavorite("tracks");
	}

	public static getArtistId(artistName: string) {
		return axios.get(
			`${this.spotifyAPIUrl}/v1/search?` + queryString.stringify({
				q: artistName
			})
		).then((res: any) => res.items[0].id);
	}

	public static getArtistTopTrack(artistName: string) {
		return this.getArtistId(artistName).then(id => 
			axios.get(
				`${this.spotifyAPIUrl}/v1/artists/${id}/top-tracks?market=FR`
			)).then((res: any) => res.items[0])
	}
}