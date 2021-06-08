import React from 'react'


const Card = ({name,email,id})=>{

	return (

		<div className='tc purple bg-light-green dib br4 pa1 ma1 grow w-22 b--solid b--hot-pink bw1 shadow-5'>
			<img alt="robots" src={`https://robohash.org/${id}?100x100`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

		);
}

export default Card;