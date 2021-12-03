import { Link, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Title, { Subtitle } from "./Components/Title";
import Grid from "@mui/material/Grid/Grid";
import Widget, { WidgetGroup, WidgetGroupInterface } from "./Components/Widget";
import KayoAPI from "../Controllers/KayoAPI";
import MainPageMenu from "./Components/MainPageMenu";

interface HomeState {
	intervalID: number,
	widgetGroups: WidgetGroupInterface[],
}

export default class Home extends React.Component {
	
	constructor(props: any) {
		super(props);
		this.state = {
			widgetGroups: [],
			intervalID: 0
		} as HomeState
		this.tick()
	}

	tick() {
		KayoAPI.getMyWidgets().then(res => {
			this.setState(oldState => {
				return {
					...oldState,
					widgetGroups: res
				} as HomeState
			}
			)
		})
	}
	componentDidMount() {
		const newIntervalID = setInterval(() => this.tick(), 1000 * 60);
		this.setState(oldState => {
			return {
				...oldState,
				intervalID: newIntervalID,
			} as HomeState;
		});
	}

	componentWillUnmount() {
		const state = this.state as HomeState
		clearInterval(state.intervalID);
	}

	render() {
		const state = this.state as HomeState
		return (
			<Grid container alignItems="center" justifyContent="center" direction="column">
				<MainPageMenu />
				<Title>KAYO</Title>
				<Grid container alignItems="center" justifyContent="center" direction="column" style={{ paddingTop: 30 }}>
					{
						(this.state as HomeState).widgetGroups.length == 0 ?
							<><Subtitle >No new widget, please consider one of the following options:</Subtitle>
								<Subtitle><Link to="/widgets/add">Add a widget</Link></Subtitle>
								<Subtitle><Link to="/services">Subscribe to a service</Link></Subtitle>
							</>
							: (this.state as HomeState).widgetGroups.map((group: WidgetGroupInterface) => <WidgetGroup key={group.serviceName} serviceName={group.serviceName} widgets={group.widgets} />)
					}
				</Grid>
			</Grid>
		)
	}
}
