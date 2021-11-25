import * as React from 'react';
import { COVIDWidget } from './COVIDWidget';

interface DailyNewHospitalizationWidgetInterface {
	rate: number,
	country: string
}

const DailyNewHospitalizationWidget = (props: DailyNewHospitalizationWidgetInterface) => {
	return <COVIDWidget title="COVID Daily new hospitalizations" subtitle={"in " + props.country} rate={props.rate} positive={false}/>
}

export {DailyNewHospitalizationWidget, DailyNewHospitalizationWidgetInterface}