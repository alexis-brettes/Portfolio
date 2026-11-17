<script lang="ts">
	import Section from '#lib/components/layout/Section.svelte';
	import Card from '#lib/components/ui/Card.svelte';
	import Tag from '#lib/components/ui/Tag.svelte';
	import { link } from '#lib/utils/links';
	import { projects } from '#lib/data/projects';
</script>

<Section id="projects" eyebrow="Academic & personal projects" title="Things I have built">
	<div class="grid gap-6 md:grid-cols-2">
		{#each projects as project, i (i)}
			<Card hover>
				<div class="mb-3 flex flex-wrap gap-2">
					{#each project.tags as tag (tag)}
						<Tag label={tag} />
					{/each}
				</div>
				<h3 class="font-semibold">{project.title}</h3>
				<p class="mt-2 text-sm text-muted">{project.context}</p>
				<p class="mt-2 text-sm text-muted">{project.outcome}</p>
				{#if project.link}
					<a
						href={link(project.link.url)}
						target="_blank"
						rel="noreferrer"
						class="mt-4 inline-block font-mono text-sm text-accent hover:underline"
					>
						{project.link.label} →
					</a>
				{/if}
			</Card>
		{/each}
	</div>
</Section>
