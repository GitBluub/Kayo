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
import API from '../Controllers/API';
import type { WidgetInterface, WidgetParam } from '../Components/Widget';

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

const WidgetSettingsGroup = (widgetGroup: any) => {
	return (
		<ParameterCardGroup key={widgetGroup.name} title={widgetGroup.name.toUpperCase()}>
			{widgetGroup.widgets.map((widget: WidgetInterface) => <WidgetSettings key={widget.name} widget={widget} />)}
		</ParameterCardGroup>
	)
}


export { WidgetSettings, WidgetSettingsGroup }