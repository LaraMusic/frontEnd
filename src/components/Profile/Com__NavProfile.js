import React from "react";
import userImage from "../../../assets/img/usuario.svg";
import Com__NavProfileStyle from "../Style/Profile/Com__NavProfileStyle";

const NavProfile = () => {
	return (
		<nav>
			<h2>Profile settings</h2>
			<div className='menu'>Account</div>
			<style jsx Com__NavProfileStyle>
				{Com__NavProfileStyle}
			</style>
		</nav>
	);
};

export default NavProfile;
