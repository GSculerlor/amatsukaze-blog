import React from 'react';
import P from './P';
import Wrapper from './Wrapper';

const Note = ({note}) => {
	return (
		<Wrapper>
			<P><b>note:</b> {note}</P>
		</Wrapper>
	);
};
export default Note;