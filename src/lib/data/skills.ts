import type { SkillGroup } from '#lib/types';

export const skills: SkillGroup[] = [
	{
		title: 'Networks & security',
		subtitle: 'Administration & standards',
		skills: [
			'Network administration',
			'Switches & routers',
			'Firewalls',
			'Zabbix',
			'Wazuh',
			'ANSSI',
			'ISO 27001',
			'EBIOS Risk Manager'
		]
	},
	{
		title: 'DevOps & tools',
		subtitle: 'GitOps process',
		skills: ['Docker', 'Kubernetes', 'GitLab', 'Git', 'Linux']
	},
	{
		title: 'Computing & programming',
		subtitle: 'Languages, services & data',
		skills: ['C', 'Bash', 'Ada', 'Python', 'HTML', 'CSS', 'PHP', 'Oracle SQL', 'Arduino']
	}
];
