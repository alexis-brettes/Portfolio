<script lang="ts">
	import Section from '#lib/components/layout/Section.svelte';
	import Card from '#lib/components/ui/Card.svelte';
	import { career } from '#lib/data/career';
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
</Section>
