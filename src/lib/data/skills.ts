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
			'Grafana',
			'ANSSI',
			'ISO 27001',
			'EBIOS Risk Manager'
		]
	},
	{
		title: 'DevOps & Cloud',
		subtitle: 'GitOps & Kubernetes',
		skills: ['Git', 'CI/CD pipelines', 'ArgoCD', 'Kubernetes', 'kubectl', 'Rancher', 'Cilium', 'Kyverno', 'Docker']
	},
	{
		title: 'Computing & programming',
		subtitle: 'Languages, services & data',
		skills: [
			'C',
			'Bash',
			'Ada',
			'Java',
			'Python',
			'VueJS',
			'ExpressJS',
			'HTML',
			'CSS',
			'PHP',
			'Oracle SQL',
			'PostgreSQL',
			'Arduino',
			'MQTT'
		]
	}
];
