import type { Asset, Language, Passion, Profile } from '#lib/types';

export const profile: Profile = {
	name: 'Alexis Brettes',
	role: 'Computer Science Engineering Student',
	tagline:
		'Aspiring engineer pursuing a Computer Science degree at ENSEEIHT, after a BUT in Networks & Telecommunications specialized in cybersecurity — currently apprenticing as a Cloud Engineer at Orange on a Kubernetes-as-a-Service solution.',
	headline: 'From networks & cybersecurity to the cloud',
	about: [
		'I am pursuing a Computer Science engineering degree at ENSEEIHT in Toulouse, after a University Bachelor of Technology in Networks and Telecommunications with a specialization in cybersecurity at the Blagnac Institute of Technology.',
		'Alongside my studies, I work as an Apprentice Cloud Engineer at Orange, implementing new technologies and AI into a Kubernetes-as-a-Service platform. My path combines hands-on network integration experience with a growing expertise in cloud infrastructure and DevOps practices.'
	],
	socials: [],
	email: 'alexis.brts31@gmail.com',
	phone: '+33 7 84 22 79 72',
	location: 'Toulouse, France',
	assets: [
		{
			name: 'Sociability',
			description: 'Capable of working in a team and integrating easily.'
		},
		{
			name: 'Diligence',
			description: 'Consistent and invested in work.'
		},
		{
			name: 'Curiosity',
			description: 'Eager to discover new fields.'
		},
		{
			name: 'Versatility',
			description: 'Capable of handling both project management and technical tasks.'
		}
	]
};

export const languages: Language[] = [
	{ name: 'French', flag: '🇫🇷', level: 'Native' },
	{ name: 'English', flag: '🇬🇧', level: 'TOEIC 960/990' },
	{ name: 'Spanish', flag: '🇪🇸', level: 'Good comprehension' }
];

export const passions: Passion[] = [
	{ icon: '🎬', label: 'Cinema (Sci-Fi) & music' },
	{ icon: '🎾', label: 'Tennis — 12 years, now swimming & badminton' },
	{ icon: '🎮', label: 'Competitive & automation games' },
	{ icon: '🔬', label: 'New technologies, space & ecology' }
];
