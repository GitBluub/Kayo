import { Link, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Title from "./Components/Title";
import Grid from "@mui/material/Grid/Grid";
import Widget, { WidgetGroup, WidgetGroupInterface } from "./Components/Widget";
import KayoAPI from "../Controllers/API/KayoAPI";
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
		console.log(state.widgetGroups)
		return (
			<Grid container alignItems="center" justifyContent="center" direction="column">
				<MainPageMenu />
				<Title>KAYO</Title>
				<Grid container alignItems="center" justifyContent="center" direction="column" style={{ paddingTop: 30 }}>
					{
						state.widgetGroups.map((group: WidgetGroupInterface) => <WidgetGroup key={group.serviceName} serviceName={group.serviceName} widgets={group.widgets} />)
					}
				</Grid>
			</Grid>
		)
	}
}
