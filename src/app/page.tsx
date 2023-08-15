"use client";
import React from "react";
import {AboutMeSection} from "components/AboutMe";
import {DarkHero} from "components/Hero/DarkHero";
import {JoinCommunity} from "components/JoinCommunity";
import {VideoIntroToExistentialism} from "components/OfferCTA/VideoIntroToExistentialism";
import {PsychologyTest} from "components/TestCta/PsychologyTest";
import {TestimonialSection} from 'components/HomePage/Testimonial';
import {FaqSection} from 'components/FAQ';
import {HavingDoubt} from 'components/OfferCTA/HavingDoubt';

export default function Home() {
	return (
		<main id="page-content" className="flex flex-auto flex-col max-w-full">
			<DarkHero/>
			<AboutMeSection/>
			<FaqSection/>
			<TestimonialSection/>
			<VideoIntroToExistentialism/>
			<PsychologyTest/>
			<HavingDoubt/>
			<JoinCommunity/>
		</main>
	);
}
