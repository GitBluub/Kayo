import { BadRequestException, Injectable } from '@nestjs/common';
import { Parameter } from 'src/widget/models/parameter.model';
import axios, { Axios, AxiosInstance } from "axios"
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubService {
	axiosInstance: AxiosInstance
	constructor(
		private configService: ConfigService
	) {
		this.axiosInstance = axios.create({
			baseURL: "https://api.github.com",
		})

	}

	async getActionsBadges(params: Parameter[]) {
		const owner = params[0].value
		const repoName = params[1].value
		try {
			const res = await this.axiosInstance.get(`repos/${owner}/${repoName}/actions/workflows`)
			console.log(res)
			return {
				owner,
				repoName,
				badges: res.data.workflows.map(action => {
					return action.badge_url;
				})
			}
		} catch (err) {
			throw new BadRequestException()
		}
	}

	async getData(widgetName: string, params: Parameter[], token: string) {
		switch(widgetName) {
			case "actions":
				return {...(await this.getActionsBadges(params))};
				break;
			default:
				throw new BadRequestException()
		}
	}
}
