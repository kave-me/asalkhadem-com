import {FAQ} from "components/FAQ";
import {Services} from "components/Services";
import {DarkHero} from "components/Hero/DarkHero";
import {JoinCommunity} from "components/JoinCommunity";
import {Testimonial} from "components/Testimonial";
import {OfferCta} from 'components/OfferCTA/OfferCTA';
import {TestCta} from 'components/TestCta/TestCta';

export default function Home() {
	return (
		<main id="page-content" className="flex flex-auto flex-col max-w-full">
			<DarkHero/>
			<Services/>
			<Testimonial/>
			<OfferCta/>
			<FAQ/>
			<JoinCommunity/>
			<TestCta/>
		</main>
	);
}
