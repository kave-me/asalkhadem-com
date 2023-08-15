"use client";
import React from "react";
import {AboutMeSection} from "components/AboutMe";
import {DarkHero} from "components/Hero/DarkHero";
import {EssenceAndExistenceSection} from "components/JoinCommunity";
import {VideoIntroToExistentialism} from "components/OfferCTA/VideoIntroToExistentialism";
import {PsychologyTest} from "components/TestCta/PsychologyTest";
import {TestimonialSection} from 'components/HomePage/Testimonial';
import {FaqSection} from 'components/FAQ';
import {HavingDoubt} from 'components/OfferCTA/HavingDoubt';
import favicon from '../../public/favicon.ico';
import {
	FaAddressBook,
	FaInstagram,
	FaPhone,
	FaQuestionCircle,
	FaSkype, FaTelegram,
	FaUserFriends,
	FaWhatsapp
} from 'react-icons/fa';
import {QRCodeSVG} from 'qrcode.react';

function ContactMeSection() {
	return <section className="bg-gray-100 py-16  ">






		<div
			className={`container mx-auto px-4 py-16 lg:px-8 lg:py-32 space-y-10 bg-indigo-100  border-dashed border-indigo-200 border-2 max-w-max  `}>
			<div className="text-center">
				<p className="text-sm  font-bold  mb-10 text-blue-700 opacity-80  ">تماس با من</p>

			</div>
			<div className="text-center">
				<h3 className="text-3xl md:text-4xl font-extrabold mb-6">تمایل دارید با من در ارتباط باشید؟</h3>
				<p className="text-base  md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto pb-16">
					می‌توانید از طریق پیام کوتاه و شبکه‌های اجتماعی زیر با من در ارتباط باشید.
				</p>


					<ul className="text-center text-6xl mx-auto flex justify-center gap-5 flex-wrap items-center bg-teal-200 p-8 rounded-lg shadow max-w-max  bg-opacity-30 ">
						<li className="inline-block">
							<a href="https://wa.me/00989389194334" target="_blank" rel="noreferrer">
								<FaWhatsapp className="text-6xl text-green-400 hover:text-green-600 drop-shadow hover:scale-105 "/>
							</a>
						</li>
						<li className="inline-block">
							<a href="https://t.me/asalkhadem" target="_blank" rel="noreferrer">
								<FaInstagram className="text-6xl text-fuchsia-500 hover:text-fuchsia-500 drop-shadow hover:scale-105 "/>
							</a>
						</li>
						<li className="inline-block">
							<a href="https://t.me/asalkhadem" target="_blank" rel="noreferrer">
								<FaTelegram className="text-6xl text-blue-400 hover:text-blue-500 drop-shadow hover:scale-105 "/>
							</a>
						</li>
						<li className="inline-block">
							<a href="skype:live:.cid.4631ac0e43848cd6?chat" target="_blank" rel="noreferrer">
								<FaSkype className="text-6xl text-blue-400/90 hover:text-blue-500 drop-shadow hover:scale-105 "/>
							</a>
						</li>
						<li className="inline-block">
							<a href="tel:00989201425226" target="_blank" rel="noreferrer">
								<FaPhone className="text-6xl text-blue-400 hover:text-blue-500 drop-shadow hover:scale-105 "/>
							</a>
						</li>
						<li className="inline-block">
							<a href="tel:00989389194334" target="_blank" rel="noreferrer">
								<FaPhone className="text-6xl text-green-400 hover:text-green-500 drop-shadow hover:scale-105 "/>
							</a>
						</li>

					</ul>
							<QRCodeSVG
								className={"mx-auto mt-24 rounded shadow-lg"}
								value={"tel:00989389194334"}
								size={128}
								bgColor={"#ffffff"}
								fgColor={"#000000"}
								level={"L"}
								includeMargin={false}
								imageSettings={{
									src: favicon.src,
									x: undefined,
									y: undefined,
									height: 24,
									width: 24,
									excavate: true,
								}}
							/>




			</div>
		</div>
	</section>
}

export default function Home() {
	return (
		<main id="page-content" className="flex flex-auto flex-col max-w-full">
			<DarkHero/>
			<AboutMeSection/>
			<FaqSection/>
			<TestimonialSection/>
			<ContactMeSection/>
			<VideoIntroToExistentialism/>
			{/*<PsychologyTest/>*/}
			<HavingDoubt/>
			<EssenceAndExistenceSection/>
		</main>
	);
}
