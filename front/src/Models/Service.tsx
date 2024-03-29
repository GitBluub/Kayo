import queryString from 'query-string'
const frontHost = import.meta.env.SNOWPACK_PUBLIC_FRONT_END_HOST
const frontPort = import.meta.env.SNOWPACK_PUBLIC_FRONT_END_PORT
const subscribeRoute = "services/subscribe"

/**
 * Service class
 */
class Service {
	name: string;
	/**
	 * Where to redirect on subscribe (oauth)
	 */
	urlToSubscribe: string;
	widget: {
		backgroundColor: string;
		fontColor: string;
	}

	constructor(backgroundColor: string, fontColor: string, name: string,getUrlToSubscribe: () => string) {
		this.widget = {
			backgroundColor: backgroundColor,
			fontColor: fontColor
		}
		this.name = name;
		this.urlToSubscribe = getUrlToSubscribe();
	}
}
const AvailableServices: { [id: string]: Service; }= {
	"covid": new Service("#ABABAB", "#FFFFFF", "Covid",  () => `http://${frontHost}:${frontPort}/${subscribeRoute}/covid`),
	"stocks": new Service("#065A60", "#FFFFFF", "Stock Market",  () => `http://${frontHost}:${frontPort}/${subscribeRoute}/stocks`),
	"weather": new Service("#44A8AE", "#FFFFFF", "Weather",  () => `http://${frontHost}:${frontPort}/${subscribeRoute}/weather`),
	"github": new Service("#263238", "#FFFFFF", "Weather",  () => `http://${frontHost}:${frontPort}/${subscribeRoute}/github`),
	"error": new Service("#FF0000", "#FFFFFF", "Error",  () => ""),
	"spotify": new Service("#69C66D", "#FFFFFF", "Spotify", () => {
		return 'https://accounts.spotify.com/authorize?' +
    	queryString.stringify({
    	  response_type: 'code',
    	  client_id: import.meta.env.SNOWPACK_PUBLIC_SPOTIFY_CLIENT_ID,
    	  scope: 'user-top-read',
    	  redirect_uri: `http://${frontHost}:${frontPort}/${subscribeRoute}/spotify`,
    	  state: 'kayo'
    	})
	})
}


export default AvailableServices;
export { Service }