<script lang="ts">
	import Section from '#lib/components/layout/Section.svelte';
	import Card from '#lib/components/ui/Card.svelte';
	import Tag from '#lib/components/ui/Tag.svelte';
	import { link } from '#lib/utils/links';
	import { mobility } from '#lib/data/mobility';
</script>

<Section id="mobility" eyebrow="International mobility" title="Going abroad" subtitle={mobility.intro}>
	<div class="mb-10 rounded-lg border border-accent/40 bg-surface p-6">
		<p class="font-mono text-xs text-accent">
			{mobility.internship.period} · {mobility.internship.location} · {mobility.internship.status}
		</p>
		<h3 class="mt-2 font-semibold">{mobility.internship.title}</h3>
		<p class="text-sm font-medium">{mobility.internship.host}</p>
		<p class="mt-3 text-sm text-muted">{mobility.internship.description}</p>
		<div class="mt-4 flex flex-wrap gap-2">
			{#each mobility.internship.skills as skill (skill)}
				<Tag label={skill} />
			{/each}
		</div>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		{#each mobility.targets as target (target.university)}
			<Card hover>
				<p class="font-mono text-xs text-accent">
					{target.plan} · {target.country} {target.flag}
				</p>
				<h3 class="mt-2 font-semibold">{target.university}</h3>
				<p class="text-sm text-muted">{target.program}</p>
				<p class="mt-3 text-sm text-muted">{target.description}</p>
				{#if target.link}
					<a
						href={link(target.link.url)}
						target="_blank"
						rel="noreferrer"
						class="mt-4 inline-block font-mono text-sm text-accent hover:underline"
					>
						{target.link.label} →
					</a>
				{/if}
			</Card>
		{/each}
	</div>

	<p class="mt-6 text-sm text-muted">{mobility.goal}</p>
</Section>
