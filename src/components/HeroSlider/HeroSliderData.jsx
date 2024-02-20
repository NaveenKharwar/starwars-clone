import MandoImage from "../../../public/images/hero-slider/mando-4k-updatemodule-hero-desktop.jpeg";
import MandoThumb from "../../../public/images/hero-slider/mando-4k-updatemodule-hero-thumb.jpeg";
import AshokaImage from "../../../public/images/hero-slider/quiz-how-well-do-you-know-ahsoka-sw2-hero-desktop.jpeg";
import AshokaThumb from "../../../public/images/hero-slider/quiz-how-well-do-you-know-ahsoka-sw2-hero-thumb.jpeg";
import Starwars from "../../../public/images/hero-slider/best-of-sw-2023-hero-desktop.jpeg";
import StarwarsThumb from "../../../public/images/hero-slider/best-of-sw-2023-hero-thumb.jpeg";

const HeroSliderData = [
	{
		id: 0,
		image: AshokaImage,
		thumbnail: AshokaThumb,
		title: `<i><span>The Mandalorian</span></i>Seasons 1 and 2 Blast Onto 4K Ultra HD and Blu-ray`,
		description: "For collectors, this is the way.",
		ContentRight: true,
		PrimaryButtonLink: "/read-more",
		SecondaryButtonLink: "/discover",
	},
	{
		id: 1,
		image: MandoImage,
		thumbnail: MandoThumb,
		title:
			"<i><span>The Mandalorian</span></i>Seasons 1 and 2 Blast Onto 4K Ultra HD and Blu-ray",
		description: "For collectors, this is the way.",
		ContentRight: false,
		PrimaryButtonLink: "/read-more",
	},
	{
		id: 2,
		image: Starwars,
		thumbnail: StarwarsThumb,
		title:
			"<i><span>The Mandalorian</span></i>Seasons 1 and 2 Blast Onto 4K Ultra HD and Blu-ray",
		description: "For collectors, this is the way.",
		ContentRight: false,
		PrimaryButtonLink: "/read-more",
	},
];

export default HeroSliderData;
