import * as React from 'react';
import type KayoComponentProps from './KayoComponent';

/**
 * Title for any Kayo Page
 * @param props 
 * @returns 
 */
const Title = (props: KayoComponentProps) => {
	return <h1 style={{fontWeight: 700, color: "#979797", flex: 3}}>
		{props.children}
	</h1>
}

/**
 * Subtitle for any Kayo Page
 * @param props 
 * @returns 
 */
const Subtitle = (props: KayoComponentProps) => {
	return <h3 style={{fontWeight: 700, color: "#979797", flex: 3}}>
		{props.children}
	</h3>
}

export default Title;
export {Subtitle}