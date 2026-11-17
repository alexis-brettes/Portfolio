<script lang="ts">
	import Section from '#lib/components/layout/Section.svelte';
	import Card from '#lib/components/ui/Card.svelte';
	import Tag from '#lib/components/ui/Tag.svelte';
	import { skills } from '#lib/data/skills';
</script>

<Section id="skills" eyebrow="Skills" title="The toolbox">
	<div class="grid gap-6 md:grid-cols-3">
		{#each skills as group (group.title)}
			<Card>
				<h3 class="font-semibold">{group.title}</h3>
				<p class="mb-4 text-sm text-muted">{group.subtitle}</p>
				<div class="flex flex-wrap gap-2">
					{#each group.skills as skill (skill)}
						<Tag label={skill} />
					{/each}
				</div>
			</Card>
		{/each}
	</div>
</Section>
