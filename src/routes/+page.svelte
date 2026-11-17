<script lang="ts">
	import { site } from '#lib/data/site';
	import Hero from '#lib/components/sections/Hero.svelte';
	import About from '#lib/components/sections/About.svelte';
	import Skills from '#lib/components/sections/Skills.svelte';
	import Experience from '#lib/components/sections/Experience.svelte';
	import Projects from '#lib/components/sections/Projects.svelte';
	import Career from '#lib/components/sections/Career.svelte';
	import Mobility from '#lib/components/sections/Mobility.svelte';
	import Contact from '#lib/components/sections/Contact.svelte';

	const { title, description } = site;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<Hero />
<About />
<Skills />
<Experience />
<Projects />
<Career />
<Mobility />
<Contact />
