import React from "react";
import CardLaraSpec from "./molecules/CardLaraSpec";
import FeatureImg from "../../../assets/img/hero-cell.png";
import HomeStyle from "../Style/Home/HomeStyle";

function LaraSpecs() {
	return (
		<section className='lara__specs'>
			<div className='container'>
				<div className='lara__specs__description'>
					<div className='description__section'>
						<h1 className='description__title'>
							Listen your favorites artists anytime, anywhere
						</h1>
						<p className='description__p'>
							Play your favorite music and discover new music everyday.
						</p>
					</div>
					<div className='lara__specs__description__cards'>
						<CardLaraSpec></CardLaraSpec>
					</div>
				</div>
				<div className='lara__specs__img'>
					<img src={FeatureImg} alt='lara-features' />
					<p></p>
				</div>
			</div>

			<style jsx HomeStyle>
				{HomeStyle}
			</style>
		</section>
	);
}
export default LaraSpecs;
