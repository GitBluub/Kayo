import TextField from '@mui/material/TextField/TextField'
import Select from '@mui/material/Select/Select'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import React from 'react'
import FormControl from '@mui/material/FormControl/FormControl'
import InputLabel from '@mui/material/InputLabel/InputLabel'

interface WidgetFormField {
	label: string,
	defaultValue: string,
	type: string
	onChange: (newValue: any) => void
}

/**
 * Factory for a widget form field
 */
const WidgetFormField = ({ label, defaultValue, type, onChange }: WidgetFormField) => {
	if (type === "string") {
		return (
			<TextField id="filled-basic" label={label} variant="filled" defaultValue={defaultValue}
				onChange={onChange} style={{ marginLeft: 8 }}
			/>
		)
	} else if (type.startsWith("options ")) {
		const options = type.split(' ').slice(1)
		return (
			<FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
			<InputLabel>{label}</InputLabel>
			<Select value={defaultValue} label={label} onChange={onChange} labelId="demo-simple-select-label">
				{
					options.map(option => (
						<MenuItem value={option}>{option}</MenuItem>
					))
				}
			</Select>
			</FormControl>
		)
	}
	return <></>
}

export default WidgetFormField