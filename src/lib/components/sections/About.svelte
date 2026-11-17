<script lang="ts">
	import Section from '#lib/components/layout/Section.svelte';
	import { profile, languages, passions } from '#lib/data/profile';
	import { education } from '#lib/data/education';
</script>

<Section id="about" eyebrow="About me" title={profile.headline}>
	<div class="grid gap-10 lg:grid-cols-2">
		<div>
			{#each profile.about as paragraph (paragraph)}
				<p class="mb-4 leading-relaxed text-muted">{paragraph}</p>
			{/each}

			<h3 class="mt-8 mb-4 text-lg font-semibold">Languages</h3>
			<ul class="space-y-2">
				{#each languages as lang (lang.name)}
					<li class="flex items-center gap-3 text-sm">
						<span aria-hidden="true">{lang.flag}</span>
						<span class="font-medium">{lang.name}</span>
						<span class="text-muted">· {lang.level}</span>
					</li>
				{/each}
			</ul>

			<h3 class="mt-8 mb-4 text-lg font-semibold">Passions & interests</h3>
			<div class="flex flex-wrap gap-2">
				{#each passions as passion (passion.label)}
					<span class="rounded-full border border-border px-3 py-1 text-sm text-muted">
						{passion.icon} {passion.label}
					</span>
				{/each}
			</div>

			<h3 class="mt-8 mb-4 text-lg font-semibold">Assets</h3>
			<div class="grid gap-3 sm:grid-cols-2">
				{#each profile.assets as asset (asset.name)}
					<div class="rounded-lg border border-border bg-surface p-4">
						<h4 class="text-sm font-semibold text-accent">{asset.name}</h4>
						<p class="mt-1 text-sm text-muted">{asset.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<div>
			<h3 class="mb-6 text-lg font-semibold">Education path</h3>
			<ol class="relative space-y-8 border-l border-border pl-6">
				{#each education as entry (entry.period)}
					<li class="relative">
						<span
							class="absolute -left-[1.72rem] top-1.5 h-3 w-3 rounded-full border-2 {entry.current
								? 'border-accent bg-accent'
								: 'border-border bg-bg'}"
							aria-hidden="true"
						></span>
						<p class="font-mono text-xs text-accent">{entry.period}</p>
						<h4 class="mt-1 font-semibold">{entry.degree}</h4>
						<p class="text-sm italic text-muted">{entry.school}</p>
						<p class="mt-2 text-sm text-muted">{entry.description}</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</Section>
