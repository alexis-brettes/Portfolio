<script lang="ts">
	import Section from '#lib/components/layout/Section.svelte';
	import Card from '#lib/components/ui/Card.svelte';
	import { link } from '#lib/utils/links';
	import { mobility, applicationKit } from '#lib/data/mobility';
</script>

<Section id="mobility" eyebrow="International mobility" title="Going abroad" subtitle={mobility.intro}>
	<div class="grid gap-6 md:grid-cols-2">
		{#each mobility.targets as target (target.university)}
			<Card hover>
				<p class="font-mono text-xs text-accent">
					{target.plan} · {target.country} {target.flag}
				</p>
				<h3 class="mt-2 font-semibold">{target.university}</h3>
				<p class="text-sm text-muted">{target.program}</p>
				<p class="mt-3 text-sm text-muted">{target.description}</p>
				<div class="mt-4 flex flex-wrap items-center gap-3">
					{#if target.link}
						<a
							href={link(target.link.url)}
							target="_blank"
							rel="noreferrer"
							class="font-mono text-sm text-accent hover:underline"
						>
							{target.link.label} →
						</a>
					{/if}
					<span
						class="rounded-full border border-accent/40 px-3 py-0.5 text-xs text-accent"
					>
						{target.status}
					</span>
				</div>
			</Card>
		{/each}
	</div>

	<p class="mt-6 text-sm text-muted">{mobility.goal}</p>

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
