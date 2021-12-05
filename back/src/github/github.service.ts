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
			const res = await this.axiosInstance.get(`repos/${owner}/${repoName}/actions/workflows`, {
				auth: {
					username: owner,
					password: repoName
				  }
			})
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

	async getRepoStats(params: Parameter[]) {
		const owner = params[0].value
		const repoName = params[1].value
		try {
			const res = await this.axiosInstance.get(`repos/${owner}/${repoName}`, {
				auth: {
					username: owner,
					password: repoName
				  }
			})
			return {
				owner,
				repoName,
				starCount: res.data.stargazers_count,
				forkCount: res.data.forks_count,
				watchCount:  res.data.watchers_count,
				language:  res.data.language,
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
			case "stats":
				return {...(await this.getRepoStats(params))};
				break;
			default:
				throw new BadRequestException()
		}
	}
}
