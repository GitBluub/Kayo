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
import API from '../../Controllers/API/KayoAPI';
import type { WidgetInterface, WidgetParam } from '../../Models/Widget';
import type { WidgetGroupInterface } from './Widget';

interface WidgetSettingsProps {
	widget: WidgetInterface;
}

const WidgetSettings = ({ widget }: WidgetSettingsProps) => {
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
				<Button color="success" variant="contained" style={{ marginRight: 20, marginLeft: 20 }} onClick={() => { API.updateWidgetParams(widget.id, params) }}>
					<DoneIcon />
					Update
				</Button>
				: <></>
			}
			<ParameterCardButton onClick={() => API.deleteWidget(widget.id)} href="/widgets/manage">
				<DeleteOutlineIcon sx={{ color: "red", fontSize: 35 }} />
			</ParameterCardButton>
		</ParameterCard>
	)
}

const WidgetSettingsGroup = (widgetGroup: WidgetGroupInterface) => {
	return (
		<ParameterCardGroup key={widgetGroup.serviceName} title={widgetGroup.serviceName.toUpperCase()}>
			{widgetGroup.widgets.map((widget: WidgetInterface) => <WidgetSettings key={widget.id} widget={widget} />)}
		</ParameterCardGroup>
	)
}


export { WidgetSettings, WidgetSettingsGroup }