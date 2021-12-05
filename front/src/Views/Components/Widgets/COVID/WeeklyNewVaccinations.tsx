import * as React from 'react';
import { COVIDWidget } from './COVIDWidget';

interface WeeklyNewVaccinationsInterface {
	rate: number,
	country: string
}
/**
 * Widget for covid vaccination rate
 * @param props 
 * @returns 
 */
const WeeklyNewVaccinations = (props: WeeklyNewVaccinationsInterface) => {
	return <COVIDWidget title="COVID Weekly new vaccinated" subtitle={"in " + props.country} rate={props.rate} positive/>
}

export {WeeklyNewVaccinations, WeeklyNewVaccinationsInterface}