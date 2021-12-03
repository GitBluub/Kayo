import * as React from 'react';
import Widget from '../../Widget';
import AvailableServices from '../../../../Models/Service';
import Grid from '@mui/material/Grid/Grid';
import type { GithubWidgetData } from '../../../../Controllers/WidgetFactories/GithubWidgetFactory';


const GithubRepoStatWidget = ({ owner, repoName, starCount, forkCount, watchCount, language }: GithubWidgetData) => (
	<Widget service={AvailableServices['github']}>
		<Grid item>
			<Grid container alignItems="center" justifyContent="space-between">
				<a href={`https://github.com/${owner}/${repoName}`} style={{ color: "white" }} target="_blank">
					<h2 style={{marginRight: 10}}>{owner}/{repoName}</h2>
					
				</a>
			</Grid>
		</Grid>
		<Grid item>
			{ starCount }
			{ forkCount }
			{ watchCount }
			{ language }
			<img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language?.toLowerCase()}/${language?.toLowerCase()}-original.svg`} />
		</Grid>
	</Widget>
)

export default GithubRepoStatWidget