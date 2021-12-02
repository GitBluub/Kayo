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

interface WidgetSettingsProps {
	widget: WidgetInterface;
	service: string
}

const WidgetForm = ({ widget, service }: WidgetSettingsProps) => {
	const [params, setParamsState] = useState(widget.params);
	const [changed, setFilledChanged] = useState(false)
	const [validated, setValidated] = useState(false)
	if (validated)
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
				<Button href="#" color="success" variant="contained" style={{ marginRight: 20, marginLeft: 20, marginTop: 10 }} onClick={() => { API.addWidget(service, widget.name, params), setValidated(true); }}>
					<DoneIcon />
					Add Widget
				</Button>
				: <></>
			}
		</ParameterCard>
	)
}

const WidgetFormsGroup = (widgetGroup: WidgetGroupInterface) => {
	return (
		<ParameterCardGroup key={widgetGroup.serviceName} title={widgetGroup.serviceName.toUpperCase()}>
			{widgetGroup.widgets.map((widget: WidgetInterface) => <WidgetForm key={widget.name} service={widgetGroup.serviceName} widget={widget} />)}
		</ParameterCardGroup>
	)
}


export { WidgetForm, WidgetFormsGroup }