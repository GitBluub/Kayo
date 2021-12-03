import React, { useEffect, useState } from 'react';
import { TemperatureWidget } from '../../Views/Components/Widgets/Weather/TemperatureWidget';
import { WeatherWidget } from '../../Views/Components/Widgets/Weather/WeatherWidget';
import ErrorWidget from '../../Views/Components/Widgets/ErrorWidget';
import type { ServiceWidgetFactoryProps } from '../WidgetFactory';
import { HumidityWidget } from '../../Views/Components/Widgets/Weather/HumidityWidget';
import GithubActionsWidget from '../../Views/Components/Widgets/Github/ActionsWidget';

interface GithubWidgetData {
	owner: string,
	repoName: string,
	badges: string[]
}

const GithubWidgetFactory = ({ widgetName, widgetParams, widgetData }: ServiceWidgetFactoryProps) => {
	const data = widgetData as GithubWidgetData
	switch (widgetName) {
		case "actions":
			return (<GithubActionsWidget owner={data.owner} repoName={data.repoName} badges={data.badges} />)
	}
	return <ErrorWidget widgetName={widgetName} serviceName="Weather" widgetParams={widgetParams}/>
}

export default GithubWidgetFactory;
export { GithubWidgetData }