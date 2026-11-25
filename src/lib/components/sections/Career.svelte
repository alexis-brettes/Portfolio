<script lang="ts">
	import { link } from '#lib/utils/links';
	import Section from '#lib/components/layout/Section.svelte';
	import Card from '#lib/components/ui/Card.svelte';
	import { career, applicationKit } from '#lib/data/career';
</script>

<Section id="career" eyebrow="Career project" title="Past, present, future">
	<div class="grid gap-6 md:grid-cols-3">
		{#each career as stage (stage.when)}
			<Card>
				<p class="font-mono text-xs text-accent">{stage.when}</p>
				<h3 class="mt-2 font-semibold">{stage.title}</h3>
				<p class="mt-2 text-sm text-muted">{stage.description}</p>
			</Card>
		{/each}
	</div>

	<div class="mt-10 rounded-lg border border-border bg-surface p-6">
		<h3 class="font-semibold">{applicationKit.title}</h3>
		<p class="mb-4 text-sm text-muted">{applicationKit.subtitle}</p>
		<div class="flex flex-wrap gap-3">
			{#each applicationKit.files as file (file.label)}
				<a
					href={link(file.url)}
					target="_blank"
					rel="noreferrer"
					class="rounded border border-border px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent"
				>
					{file.label}
				</a>
			{/each}
		</div>
	</div>
</Section>
