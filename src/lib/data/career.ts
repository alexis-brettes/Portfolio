import type { CareerStage } from '#lib/types';

export const career: CareerStage[] = [
	{
		when: 'My past',
		title: 'Foundations',
		description:
			'A scientific Baccalaureate, then a BUT in Networks and Telecommunications with a specialization in cybersecurity at the Blagnac Institute of Technology — building a solid base in network administration, infrastructure and security standards.'
	},
	{
		when: 'My present',
		title: 'Specialization',
		description:
			'A Computer Science engineering degree at ENSEEIHT, combined with an apprenticeship as a Cloud Engineer at Orange — bringing new technologies and AI into a Kubernetes-as-a-Service platform.'
	},
	{
		when: 'My future',
		title: 'The goal',
		description:
			'Graduating in 2028 as a fully qualified engineer, deepening my expertise in cloud infrastructure, DevOps and cybersecurity.'
	}
];

export const applicationKit: {
	title: string;
	subtitle: string;
	files: { label: string; url: string }[];
} = {
	title: 'Application kit',
	subtitle: 'My CVs in French and English, and my profile online.',
	files: [
		{ label: 'CV (FR)', url: '/files/cv-fr.pdf' },
		{ label: 'CV (EN)', url: '/files/cv-en.pdf' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexis-brettes-6835ab258' }
	]
};
