import * as React from 'react';
import ParameterCard from '../Components/ParameterCard/ParameterCard';
import ParameterCardGroup from '../Components/ParameterCard/ParameterCardGroup';
import ParameterCardButton from '../Components/ParameterCard/ParameterCardButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField/TextField';
import IconButton from '@mui/material/IconButton/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button/Button';

import { useState } from 'react';
import API from '../Controllers/API/KayoAPI';
import type { WidgetInterface, WidgetParam } from '../Components/Widget';

interface WidgetSettingsProps {
	widget: WidgetInterface;
	service: string
}

const WidgetForm = ({ widget, service }: WidgetSettingsProps) => {
	const [params, setParamsState] = useState(widget.params);
	const [changed, setFilledChanged] = useState(false)
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
				<Button color="success" variant="contained" style={{ marginRight: 20, marginLeft: 20 }} onClick={() => { API.addWidget(service, widget.name, params) }}>
					<DoneIcon />
					Add Widget
				</Button>
				: <></>
			}
		</ParameterCard>
	)
}

const WidgetFormsGroup = (widgetGroup: any) => {
	return (
		<ParameterCardGroup key={widgetGroup.name} title={widgetGroup.name.toUpperCase()}>
			{widgetGroup.widgets.map((widget: WidgetInterface) => <WidgetForm key={widget.name} service={widgetGroup.name} widget={widget} />)}
		</ParameterCardGroup>
	)
}


export { WidgetForm, WidgetFormsGroup }