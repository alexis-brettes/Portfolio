import type { Internship, MobilityTarget } from '#lib/types';

export const mobility: {
	intro: string;
	goal: string;
	internship: Internship;
	targets: MobilityTarget[];
} = {
	intro:
		'As part of my engineering degree at ENSEEIHT, I will spend an exchange semester abroad. Here is where I am headed next summer, and the three universities I am applying to for my exchange semester.',
	goal: 'Three wishes, one direction: cybersecurity, networks and an international outlook.',
	internship: {
		title: 'Network virtualization pedagogical platform',
		host: 'Czech Technical University in Prague (CTU)',
		location: 'Prague, Czech Republic 🇨🇿',
		period: 'Summer 2027',
		description:
			'A summer internship at CTU: building a network virtualization pedagogical platform used to teach students, and getting hands-on with the tools that make such platforms run.',
		skills: ['Ansible', 'Wazuh', 'Zabbix', 'Active Directory', 'Keycloak'],
		status: 'Planned'
	},
	targets: [
		{
			plan: 'Wish #1',
			country: 'Italy',
			flag: '🇮🇹',
			university: 'Politecnico di Torino',
			program: 'Exchange semester · Cybersecurity',
			description:
				'My first choice for its cybersecurity curriculum: a natural continuation of my BUT specialization and of the security standards (ANSSI, ISO 27001, EBIOS RM) I already work with, deepening the security side of my cloud-focused engineering degree.',
				link: { label: 'Cover letter', url: '/files/cover-letter-polito.pdf' }
		},
		{
			plan: 'Wish #2',
			country: 'Czech Republic',
			flag: '🇨🇿',
			university: 'Czech Technical University in Prague (CTU)',
			program: 'Exchange semester · Networks & security',
			description:
				'A natural continuation of my summer internship at CTU: after building a network virtualization pedagogical platform in Prague, I would consolidate that hands-on experience (Ansible, monitoring, identity management) in one of Europe\'s leading technical universities.'
		},
		{
			plan: 'Wish #3',
			country: 'Spain',
			flag: '🇪🇸',
			university: 'Universidad Politécnica de Madrid',
			program: 'Exchange semester · Telecommunications & IT',
			description:
				'A leading Spanish technical university that matches my background: my LEA studies in English and Spanish gave me a solid base in the language, and an exchange in Madrid would turn it into full professional fluency while following strong telecommunications engineering courses.'
		}
	]
};
