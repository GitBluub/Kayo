import * as React from 'react';
import COVIDWidget from './COVIDWidget';

interface WeeklyNewVaccinationsInterface {
	rate: number,
	country: string
}

const WeeklyNewVaccinations = (props: WeeklyNewVaccinationsInterface) => {
	return <COVIDWidget title="COVID Weekly new vaccinated" subtitle={"in " + props.country} rate={props.rate} positive/>
}

export {WeeklyNewVaccinations, WeeklyNewVaccinationsInterface}