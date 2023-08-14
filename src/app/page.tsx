"use client";
import {AboutMeSection} from "components/AboutMe";
import {DarkHero} from "components/Hero/DarkHero";
import {JoinCommunity} from "components/JoinCommunity";
import {OfferCta} from "components/OfferCTA/OfferCTA";
import {TestCta} from "components/TestCta/TestCta";
import React from "react";
import {ClientFeedback} from 'components/HomePage/Testimonial';


export default function Home() {
	return (
		<main id="page-content" className="flex flex-auto flex-col max-w-full">
			<DarkHero/>
			<AboutMeSection/>
			<ClientFeedback/>
			<OfferCta/>
			<JoinCommunity/>
			<TestCta/>
		</main>
	);
}
