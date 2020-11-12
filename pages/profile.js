import React from "react";
import Header from "../src/components/Header/HeaderPage";
import SectionProfile from "../src/components/Profile/SectionProfile.js";
import Footer from "../src/components/Home/FooterPage";

const profile = () => {
	return (
		<>
			<Header />
			<SectionProfile />
			<Footer />
		</>
	);
};

export default profile;
