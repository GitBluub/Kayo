import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../../../Models/Service';
import Grid from '@mui/material/Grid/Grid';
import type { GithubWidgetData } from '../../../../Controllers/WidgetFactories/GithubWidgetFactory';


/**
 * Widget for github actions
 * @param param0 
 * @returns 
 */
const GithubActionsWidget = ({ owner, repoName, badges }: GithubWidgetData) => (
	<Widget service={AvailableServices['github']}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<a href={`https://github.com/${owner}/${repoName}`} style={{ color: "white" }} target="_blank">
					<h2 style={{marginRight: 10}}>{owner}/{repoName}</h2>
					
				</a>
			</Grid>
		</Grid>
		<Grid item>
			{
				badges?.slice(0, 3).map((badgeUrl: string) => (
					<img key={badgeUrl} src={badgeUrl} style={{ padding: 10 }}/>
				))
			}
		</Grid>
	</Widget>
)

export default GithubActionsWidget