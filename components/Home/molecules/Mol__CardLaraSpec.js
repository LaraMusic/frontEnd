import React from "react";

import cardLaraSpecStyle from "./styles/cardLaraSpecStyle";

function CardLaraSpec() {
	return (
		<>
			<div className='card'>
				<img src='../../assets/img/spec-1.png' alt='' />
				<p>We are in all devices</p>
			</div>
			<div className='card'>
				<img src='../../assets/img/spec-2.png' alt='' />
				<p>Whitout advertising</p>
			</div>
			<div className='card'>
				<img src='../../assets/img/spec-3.png' alt='' />
				<p>Total access</p>
			</div>

			<style jsx cardLaraSpecStyle>
				{cardLaraSpecStyle}
			</style>
		</>
	);
}
export default CardLaraSpec;