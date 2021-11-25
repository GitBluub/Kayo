import * as React from 'react';
import ParameterCardTitle from '../Components/ParameterCard/ParameterCardTitle';
import Grid from '@mui/material/Grid/Grid';
import ParameterCard from '../Components/ParameterCard/ParameterCard';
import ParameterCardGroup from '../Components/ParameterCard/ParameterCardGroup';
import ParameterCardButton from '../Components/ParameterCard/ParameterCardButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField/TextField'


const ManageWidgets = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<ParameterCardTitle>Manage Widgets</ParameterCardTitle>
			<ParameterCardGroup title="Spotify">
				<ParameterCard name="Most listened">
					<TextField id="filled-basic" label="What" variant="filled" value="Artist"/>
					<ParameterCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></ParameterCardButton>
				</ParameterCard>
			</ParameterCardGroup>
			<ParameterCardGroup title="COVID">
				<ParameterCard name="Infection rate">
					<TextField id="filled-basic" label="Country" variant="filled" value="France"/>
					<ParameterCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></ParameterCardButton>
				</ParameterCard>
				<ParameterCard name="Decease rate">
					<TextField id="filled-basic" label="Country" variant="filled" value="France"/>
					<ParameterCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></ParameterCardButton>
				</ParameterCard>
			</ParameterCardGroup>
			<ParameterCardGroup title="Stock Market">
				<ParameterCard name="Stocks">
					<TextField id="filled-basic" label="Stocker" variant="filled" value="AAPL"/>
					<ParameterCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></ParameterCardButton>
				</ParameterCard>
			</ParameterCardGroup>
			<ParameterCardGroup title="Weather">
				<ParameterCard name="Temperature">
					<TextField id="filled-basic" label="City" variant="filled" value="Blou"/>
					<ParameterCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></ParameterCardButton>
				</ParameterCard>
				<ParameterCard name="Precipitations">
					<TextField id="filled-basic" label="City" variant="filled" value="Washington DC"/>
					<ParameterCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></ParameterCardButton>
				</ParameterCard>
			</ParameterCardGroup>
			
		</Grid>
}

export default ManageWidgets;