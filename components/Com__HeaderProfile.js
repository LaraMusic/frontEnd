import React from "react";

//import "../assets/style/componentStyle/com__HeaderProfile.scss";

const HeaderProfile = () => {
	return (
		<header>
			<img src='https://i.imgur.com/Y7qbB7g.png' alt='' />
			<div className='perfil'>
				<img src='https://i.imgur.com/rQ73ETF.jpg' alt='' />
				<div>
					<h4>Anna Fernandez</h4>
					<p>Log Out</p>
				</div>
			</div>
		</header>
	);
};

export default HeaderProfile;
