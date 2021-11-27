import axios from "axios";

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
}