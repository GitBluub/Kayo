import { Link, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Title, { Subtitle } from "./Components/Title";
import Grid from "@mui/material/Grid/Grid";
import KayoAPI from "../Controllers/KayoAPI";
import MainPageMenu from "./Components/MainPageMenu";
import type { WidgetInterface } from "../Models/Widget";
import WidgetFactory from "../Controllers/WidgetFactory";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface HomeState {
	intervalID: number,
	widgets: WidgetInterface[],
	isAdmin: boolean
}


export default class Home extends React.Component {

	constructor(props: any) {
		super(props);
		this.state = {
			widgets: [],
			intervalID: 0,
			isAdmin: false,
		} as HomeState
		this.tick()
	}

	reorder(list: any[], startIndex: number, endIndex: number) {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};
	tick() {
		KayoAPI.getMyWidgets().then(res => {
			this.setState(oldState => {
				return {
					...oldState,
					widgets: res
				} as HomeState
			}
			)
		})
	}
	componentDidMount() {
		let isAdmin = true;
		const newIntervalID = setInterval(() => this.tick(), 1000 * 60);
		KayoAPI.getUsers().catch(_ => isAdmin = false)
		this.setState(oldState => {
			return {
				...oldState,
				isAdmin,
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
			<DragDropContext onDragEnd={(result) => {
				if (!result.destination) {
					return;
				}
				const sourceIndex = result.source.index
				const destIndex = result.destination.index
				this.setState((oldState: HomeState) => {
					oldState.widgets = this.reorder(oldState.widgets, sourceIndex, destIndex)
					oldState.widgets.forEach((widget, index, array) => widget.index = index)
					KayoAPI.reorderWidgetsData(oldState.widgets.map(widget => widget.id))
					return oldState
				})

			}}>
				<Grid container alignItems="center" justifyContent="center" direction="column">
					<MainPageMenu isAdmin={state.isAdmin}/>
					<Title>KAYO</Title>
					<Grid container alignItems="center" justifyContent="center" direction="column" style={{ paddingTop: 30 }}>
						<Droppable droppableId="widgets">
							{(provided, snapshot) => (
								<div ref={provided.innerRef}>
									{state.widgets.length == 0 &&
										<Grid container alignItems="center" justifyContent="center" direction="column">
											<Subtitle>No widget, please consider one of the following options:</Subtitle>
											<Subtitle><Link to="/widgets/add">Add a widget</Link></Subtitle>
											<Subtitle><Link to="/services">Subscribe to a service</Link></Subtitle>
										</Grid>}
									{state.widgets.length > 0 &&
										state.widgets.map((widget: WidgetInterface) => (
											<Draggable key={widget.id.toString()} draggableId={widget.id.toString()} index={widget.index}>
												{(provided, snapshot) => (
													<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
														<WidgetFactory key={widget.id} widgetid={widget.id} widgetName={widget.name} serviceName={widget.serviceName} widgetParams={widget.params} />
													</div>
												)}
											</Draggable>
										))
									}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</Grid>
				</Grid>
			</DragDropContext>
		)
	}
}