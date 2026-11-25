export interface NavLink {
	id: string;
	label: string;
}

export interface SocialLink {
	label: string;
	url: string;
}

export interface Asset {
	name: string;
	description: string;
}

export interface Profile {
	name: string;
	role: string;
	tagline: string;
	headline: string;
	about: string[];
	socials: SocialLink[];
	email: string;
	phone: string;
	location: string;
	assets: Asset[];
}

export interface Language {
	name: string;
	flag: string;
	level: string;
}

export interface Passion {
	icon: string;
	label: string;
}

export interface EducationEntry {
	period: string;
	degree: string;
	school: string;
	description: string;
	current?: boolean;
}

export interface SkillGroup {
	title: string;
	subtitle: string;
	skills: string[];
}

export interface ExperienceEntry {
	period: string;
	location: string;
	role: string;
	company: string;
	summary: string;
	bullets: string[];
	takeaway?: string;
}

export interface Project {
	tags: string[];
	title: string;
	context: string;
	outcome: string;
	link?: { label: string; url: string };
}

export interface CareerStage {
	when: string;
	title: string;
	description: string;
}

export interface MobilityTarget {
	plan: string;
	country: string;
	flag: string;
	university: string;
	program: string;
	description: string;
	status?: string;
	link?: { label: string; url: string };
}

export interface Internship {
	title: string;
	host: string;
	location: string;
	period: string;
	description: string;
	skills: string[];
	status: string;
}

export interface SiteMeta {
	title: string;
	description: string;
	nav: NavLink[];
}
