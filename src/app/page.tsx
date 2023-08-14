"use client";
import {FAQ} from "components/FAQ";
import {Services} from "components/Services";
import {DarkHero} from "components/Hero/DarkHero";
import {JoinCommunity} from "components/JoinCommunity";
import {Testimonial} from "components/Testimonial";
import {OfferCta} from "components/OfferCTA/OfferCTA";
import {TestCta} from "components/TestCta/TestCta";
import React, {ReactNode, useState} from "react";

interface TestimonialWrapperProps {
	children: ReactNode;
	keyID: string;
	isOpen?: boolean;
	toggle?: () => void;
}

const TestimonialWrapper = ({children, keyID}: TestimonialWrapperProps) => {
	return <div className="bg-gray-100" key={keyID}>{children}</div>;
};


const ClientFeedback = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<FAQ/>
			<TestimonialWrapper keyID="testimonial-wrapper">
				{!open ? <Testimonial show={4}/> : <Testimonial show={10}/>}
				<button
					className={"text-center text-green-50 mx-auto flex flex-col items-center  bg-gradient-to-tr from-green-400 to-green-500 rounded-md -mt-6 mb-4 p-2 w-12 h-12 shadow-lg transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-110 transform "}
					onClick={() => setOpen(prevState => !prevState)}>
					{open ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block animate-bounce " fill="none"
					             viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>

					</svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block animate-bounce " fill="none"
					              viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>

					</svg>}
				</button>
			</TestimonialWrapper>
		</>
	);
};

export default function Home() {
	return (
		<main id="page-content" className="flex flex-auto flex-col max-w-full">
			<DarkHero/>
			<Services/>
			<ClientFeedback/>
			<OfferCta/>
			<JoinCommunity/>
			<TestCta/>
		</main>
	);
}
