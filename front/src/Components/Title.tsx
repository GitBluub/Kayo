import * as React from 'react';


const CardTitle = (props: any) => {
	return <h1 style={{fontWeight: 700, color: "#979797", flex: 3}}>
		{props.children}
	</h1>
}

export default CardTitle;