import * as React from 'react';


const Title = (props: any) => {
	return <h1 style={{fontWeight: 700, color: "#979797", flex: 3}}>
		{props.children}
	</h1>
}

const Subtitle = (props: any) => {
	return <h3 style={{fontWeight: 700, color: "#979797", flex: 3}}>
		{props.children}
	</h3>
}

export default Title;
export {Subtitle}