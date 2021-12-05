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
import Tooltip from '@mui/material/Tooltip/Tooltip';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import WidgetFormField from './WidgetFormField';
/**
 * Properties of a widget form
 */
interface WidgetFormProps {
	// The widget
	widget: WidgetInterface;
	// The widget service
	service: string,
	// Callback on validate button press
	onValidate: () => void
}

/**
 * Form to set a widget's params
 * @param param0 
 * @returns 
 */
const WidgetForm = ({ widget, service, onValidate }: WidgetFormProps) => {
	const [params, setParamsState] = useState(widget.params);
	const [changed, setFilledChanged] = useState(false)
	return (
		<ParameterCard name={widget.name}>
			<Tooltip title={widget.description} style={{ marginTop: 4}}>
			  <IconButton>
			    <HelpOutlineRoundedIcon />
			  </IconButton>
			</Tooltip>
			{
				widget.params.map((_, index, __) =>
					<WidgetFormField key={index} label={params[index].name} defaultValue={params[index].value} type={params[index].type as string}
						onChange={(newValue) => setParamsState((paramsState: WidgetParam[]) => {
							setFilledChanged(true);
							paramsState[index].value = newValue.target.value;
							return paramsState
						})}
					/>
				)
			}
			{changed ?
				<Button href="#" color="success" variant="contained" style={{ marginRight: 20, marginLeft: 20, marginTop: 10 }} onClick={() => {
						API.addWidget(service, widget.name, params).then(_ =>  {
							onValidate();
						}) 
					}}>
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
			{widgetGroup.widgets.map((widget: WidgetInterface) => (
				<WidgetForm key={widget.name} service={widgetGroup.serviceName} widget={widget} onValidate={widgetGroup.onValidate as () => void} />
			))}
		</ParameterCardGroup>
	)
}


export { WidgetForm, WidgetFormsGroup }