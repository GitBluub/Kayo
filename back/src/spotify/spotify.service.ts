import { HttpException, Injectable } from '@nestjs/common';
import { Parameter } from 'src/widget/models/parameter.model';
import axios, { Axios, AxiosInstance } from "axios"
import { query } from 'express';
import * as queryString from 'query-string'

@Injectable()
export class SpotifyService {
	axiosInstance: AxiosInstance
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: "https://api.spotify.com/v1",
		})

	}

	async getTopTrackData(params: Parameter[]) {
		let artistId = ""
		try {
			artistId = (await this.axiosInstance.get('/search?' + queryString.stringify({
				q: params[0].value,
				type: 'artist'
			}))).data.artists.items[0].id;
		} catch (error) {
			console.error(error) // from creation or business logic
		}
		const res = await this.axiosInstance.get(`/artists/${artistId}/top-tracks?market=FR`);
		const track = res.data.tracks[0];
		return {
			artistName: track.artists[0].name,
			trackName: track.name,
			illustrationUrl: track.album.images[0].url	
		}
	}
	
	async getFavoriteData(params: Parameter[]) {
		const type = params[0].value
		const res = await this.axiosInstance.get(`/me/top/${type}?&limit=1`)
		switch (type) {
			case "artists":
				return {
					artistName: res.data.items[0].name,
					illustrationUrl: res.data.items[0].images[0].url
				}
			case "tracks":
				const  track = res.data.items[0];
				return {
					artistName: track.artists[0].name,
					trackName: track.name,
					illustrationUrl: track.album.images[0].url	
				}
			default:
				throw HttpException
		}
	}

	async getData(widgetName: string, params: Parameter[], token: string) {
		this.axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		switch(widgetName) {
			case "favorite":
				return this.getFavoriteData(params);
				break;
			case "artist-top-track":
				return this.getTopTrackData(params);
				break;
			default:
				throw HttpException
		}
	}
}
