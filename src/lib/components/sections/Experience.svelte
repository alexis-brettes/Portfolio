<script lang="ts">
	import Section from '#lib/components/layout/Section.svelte';
	import Card from '#lib/components/ui/Card.svelte';
	import { experience } from '#lib/data/experience';
</script>

<Section id="experience" eyebrow="Professional experience" title="Where I have worked">
	<div class="space-y-6">
		{#each experience as job (job.company + job.period)}
			<Card>
				<div class="flex flex-wrap items-baseline justify-between gap-2">
					<h3 class="font-semibold">{job.role} — {job.company}</h3>
					<p class="font-mono text-sm text-muted">{job.period} · {job.location}</p>
				</div>
				<p class="mt-1 text-sm text-muted">{job.summary}</p>
				<ul class="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
					{#each job.bullets as bullet (bullet)}
						<li>{bullet}</li>
					{/each}
				</ul>
				{#if job.takeaway}
					<p class="mt-4 border-l-2 border-accent pl-3 text-sm italic text-muted">
						{job.takeaway}
					</p>
				{/if}
			</Card>
		{/each}
	</div>
</Section>
