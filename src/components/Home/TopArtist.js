import React from "react";
import CardArtist from "./molecules/CardArtist";
import HomeStyle from "../Style/Home/HomeStyle";

function TopArtist() {
	return (
		<section className='artist'>
			<div className='container'>
				<div className='artist__info'>
					<h1>Top artists</h1>
					<p>The most popular today.</p>
				</div>
				<div className='container__grid'>
					<div className='grid__container__artist'>
						<CardArtist></CardArtist>
					</div>
				</div>
			</div>

			<style jsx HomeStyle>
				{HomeStyle}
			</style>
		</section>
	);
}
export default TopArtist;
