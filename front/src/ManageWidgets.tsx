import * as React from 'react';
import CardTitle from './Components/Title';
import Grid from '@mui/material/Grid/Grid';
import { KayoCard, KayoCardGroup, KayoCardButton } from './Components/Card';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ManageWidgets = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<CardTitle>Manage Widgets</CardTitle>
			<KayoCardGroup title="Spotify">
				<KayoCard name="Most listened">
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
			</KayoCardGroup>
			<KayoCardGroup title="COVID">
				<KayoCard name="Infection rate">
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
				<KayoCard name="Decease rate">
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
			</KayoCardGroup>
			<KayoCardGroup title="Stock Market">
				<KayoCard name="Stocks">
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
			</KayoCardGroup>
			<KayoCardGroup title="Weather">
				<KayoCard name="Temperature">
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
				<KayoCard name="Precipitations">
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
			</KayoCardGroup>
			
		</Grid>
}

export default ManageWidgets;