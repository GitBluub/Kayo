import { Link, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Title from "./Components/Title";
import Grid from "@mui/material/Grid/Grid";
import Widget, { WidgetGroup, WidgetGroupInterface } from "./Components/Widget";
import KayoAPI from "../Controllers/API/KayoAPI";
import MainPageMenu from "./Components/MainPageMenu";

const Home = () => {
	const [ widgetGroups, setWidgetGroups ] = useState<WidgetGroupInterface[]>([]);

	useEffect(() => {
		KayoAPI.getMyWidgets().then(res => setWidgetGroups(res))
	}, [])
	
	return (
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<MainPageMenu/>
			<Title>KAYO</Title>
			<Grid container alignItems="center" justifyContent="center" direction="column" style={{ paddingTop: 30}}>
				{
					widgetGroups.map((group: WidgetGroupInterface) => <WidgetGroup key={group.service_name} service_name={group.service_name} widgets={group.widgets} />)
				}
			</Grid>
		</Grid>
	)
}

export default Home;
