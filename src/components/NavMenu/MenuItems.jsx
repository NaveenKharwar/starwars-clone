const MenuItems = [
	{
		label: "news + features",
		href: "/news",
		subitems: [
			{ label: "the latest", href: "/news" },
			{ label: "ashoka", href: "/news/category/ahsoka" },
			{ label: "community", href: "/community" },
			{ label: "quizzes + polls", href: "/news/category/quizzes-+-polls" },
			{ label: "books + comics", href: "/news/category/books-+-comics" },
			{ label: "recipes", href: "/news/category/recipes" },
		],
	},
	{
		label: "video",
		href: "/video",
		subitems: [
			{ label: "all video", href: "/video" },
			{ label: "this week! in star wars", href: "/this-week-in-star-wars" },
		],
	},
	{
		label: "films",
		href: "/films",
	},
	{
		label: "series",
		href: "/series",
		subitems: [
			{ label: "all series", href: "/series" },
			{ label: "ahsoka", href: "/series/star-wars-ahsoka" },
			{ label: "the mandalorian", href: "/series/the-mandalorian" },
			{ label: "andor", href: "/series/andor" },
			{ label: "the bad batch", href: "/series/star-wars-the-bad-batch" },
			{ label: "star wars rebels", href: "/series/star-wars-rebels" },
		],
	},
	{
		label: "games + interactive",
		href: "/interactive",
		subitems: [
			{ label: "view all", href: "/interactive" },
			{
				label: "star wars jedi: survivor",
				href: "/games-apps/star-wars-jedi-survivor",
			},
			{ label: "games + apps", href: "/games-apps" },
			{ label: "vr + immersive", href: "/interactive/virtual-reality" },
		],
	},
	{
		label: "databank",
		href: "/databank",
		subitems: [
			{ label: "all databank", href: "/databank" },
			{ label: "eras", href: "/eras" },
		],
	},
	{
		label: "disney+",
		href: "/brand/star-wars?cid=DTCI-Synergy-StarWars-Site-Acquisition-Library-US-StarWars-NA-EN-NavPipe-StarWars_NavPipe_StarWarsStreamingAnytimeonDisneyPlus_Evergreen-NA",
		subitems: [
			{
				label: "stream now",
				href: "/brand/star-wars?cid=DTCI-Synergy-StarWars-Site-Acquisition-Library-US-StarWars-NA-EN-NavPipe-StarWars_NavPipe_StarWarsStreamingAnytimeonDisneyPlus_Evergreen-NA",
			},
			{ label: "explore", href: "/disneyplus" },
			{
				label: "the disney bundle",
				href: "/welcome/a/disney-hulu-espn-bundle",
			},
		],
	},
];

export default MenuItems;
