import * as React from 'react';
import { COVIDWidget } from './COVIDWidget';

interface DailyNewInfectionWidgetInterface {
	rate: number,
	country: string
}
/**
 * Widget for covid infection rate
 * @param props 
 * @returns 
 */
const DailyNewInfectionWidget = (props: DailyNewInfectionWidgetInterface) => {
	return <COVIDWidget title="COVID Daily new infections" subtitle={"in " + props.country} rate={props.rate} positive={false}/>
}

export {DailyNewInfectionWidget, DailyNewInfectionWidgetInterface}