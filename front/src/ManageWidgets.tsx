import * as React from 'react';
import CardTitle from './Components/Title';
import Grid from '@mui/material/Grid/Grid';
import { KayoCard, KayoCardGroup, KayoCardButton } from './Components/Card';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField/TextField'


const ManageWidgets = () => {
	return <Grid container alignItems="center" justifyContent="center" direction="column">
			<CardTitle>Manage Widgets</CardTitle>
			<KayoCardGroup title="Spotify">
				<KayoCard name="Most listened">
					<TextField id="filled-basic" label="What" variant="filled" value="Artist"/>
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
			</KayoCardGroup>
			<KayoCardGroup title="COVID">
				<KayoCard name="Infection rate">
					<TextField id="filled-basic" label="Country" variant="filled" value="France"/>
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
				<KayoCard name="Decease rate">
					<TextField id="filled-basic" label="Country" variant="filled" value="France"/>
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
			</KayoCardGroup>
			<KayoCardGroup title="Stock Market">
				<KayoCard name="Stocks">
					<TextField id="filled-basic" label="Stocker" variant="filled" value="AAPL"/>
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
			</KayoCardGroup>
			<KayoCardGroup title="Weather">
				<KayoCard name="Temperature">
					<TextField id="filled-basic" label="City" variant="filled" value="Blou"/>
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
				<KayoCard name="Precipitations">
					<TextField id="filled-basic" label="City" variant="filled" value="Washington DC"/>
					<KayoCardButton><DeleteOutlineIcon sx={{ color: "red", fontSize: 35}}/></KayoCardButton>
				</KayoCard>
			</KayoCardGroup>
			
		</Grid>
}

export default ManageWidgets;