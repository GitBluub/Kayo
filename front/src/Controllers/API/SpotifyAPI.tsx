import { ThemeProvider } from "@emotion/react";
import axios from "axios";
import queryString from 'query-string'

export default class SpotifyAPI {
	private static frontHost = import.meta.env.SNOWPACK_PUBLIC_FRONT_END_HOST
	private static frontPort = import.meta.env.SNOWPACK_PUBLIC_FRONT_END_PORT
	private static clientId = import.meta.env.SNOWPACK_PUBLIC_SPOTIFY_CLIENT_ID
	private static clientSecret = import.meta.env.SNOWPACK_PUBLIC_SPOTIFY_CLIENT_SECRET
	private static spotifyAPIUrl = 'https://accounts.spotify.com'

	public static getAccessToken(code: string) {
		const params = new URLSearchParams()
		params.append("grant_type", 'authorization_code')
		params.append("code", code)
		params.append('redirect_uri', `http://${this.frontHost}:${this.frontPort}/services/subscribe/spotify`)
		return axios.post(
			`${this.spotifyAPIUrl}/api/token`,
			params, { headers: {
				'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
				'content-type': 'application/x-www-form-urlencoded'
			  }
			}).then(res => res.data);
	}
}