import React from 'react'

const Searchbox =({searchfield, onSearchchange}) =>{
	return(
		<div className='box pa3 center'>
			<input 
			className='f4 pa2 br3 w-15 georgia '
			type='search' 
			placeholder='robots name'
			value={searchfield}
			onChange={ onSearchchange }
			/>
		</div>
		);
}
export default Searchbox;