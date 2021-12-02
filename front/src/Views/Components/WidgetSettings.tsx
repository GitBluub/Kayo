import * as React from 'react';
import ParameterCard from './ParameterCard/ParameterCard';
import ParameterCardGroup from './ParameterCard/ParameterCardGroup';
import ParameterCardButton from './ParameterCard/ParameterCardButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField/TextField';
import IconButton from '@mui/material/IconButton/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button/Button';

import { useState } from 'react';
import API from '../../Controllers/KayoAPI';
import type { WidgetInterface, WidgetParam } from '../../Models/Widget';
import type { WidgetGroupInterface } from './Widget';
import { Navigate } from 'react-router';
import KayoAPI from '../../Controllers/KayoAPI';

interface WidgetSettingsProps {
	widget: WidgetInterface;
	setWidgetGroupState: () => void;
}

const WidgetSettings = ({ widget, setWidgetGroupState }: WidgetSettingsProps) => {
	const [params, setParamsState] = useState(widget.params);
	const [changed, setFilledChanged] = useState(false)
	const [updated, setUpdated] = useState(false)

	if (updated)
		return <Navigate replace to="/"/>
	return (
		<ParameterCard name={widget.name}>
			{
				widget.params.map((_, index, __) =>
					<TextField key={index} id="filled-basic" label={params[index].name} variant="filled" defaultValue={params[index].value}
						onChange={(newValue) => setParamsState((paramsState: WidgetParam[]) => {
							setFilledChanged(true);
							paramsState[index].value = newValue.target.value;
							return paramsState
						}
						)}
					/>
				)
			}
			{changed ?
				<Button color="success" variant="contained" style={{ marginRight: 20, marginLeft: 20 }} onClick={() => { API.updateWidgetParams(widget.id, params).then(res => setUpdated(true)) }}>
					<DoneIcon />
					Update
				</Button>
				: <></>
			}
			<ParameterCardButton onClick={() => { KayoAPI.deleteWidget(widget.id);setWidgetGroupState()}}>
				<DeleteOutlineIcon sx={{ color: "red", fontSize: 35 }} />
			</ParameterCardButton>
		</ParameterCard>
	)
}

type WidgetSettingsGroupProps = WidgetGroupInterface & {
	setState: any
	groups:  WidgetGroupInterface[] 
} 

const WidgetSettingsGroup = ({ serviceName, widgets, setState, groups }: WidgetSettingsGroupProps) => {
	if (widgets.length == 0)
		return <></>
	return (
		<ParameterCardGroup key={serviceName} title={serviceName.toUpperCase()}>
			{ widgets.map((widget: WidgetInterface) => <WidgetSettings key={widget.id} widget={widget} setWidgetGroupState={
				() => {
					groups.forEach((group, _, __) => { group.widgets = group.widgets.filter((tmp, _, __) => tmp.id != widget.id); })
					setState(groups)
				}
			}/>)}
		</ParameterCardGroup>
	)
}


export { WidgetSettings, WidgetSettingsGroup }