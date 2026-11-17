<script lang="ts">
	import { link } from '#lib/utils/links';
	import Section from '#lib/components/layout/Section.svelte';
	import { profile } from '#lib/data/profile';
</script>

<Section
	id="contact"
	eyebrow="Contact"
	title="Let's connect"
	subtitle="Whether it's an opportunity, a question or just a chat about my field — my inbox is always open."
>
	<div class="flex flex-col items-start gap-6">
		<div class="flex flex-wrap gap-4">
			<a
				href="mailto:{profile.email}"
				class="rounded border border-accent px-6 py-3 font-mono text-accent transition-colors hover:bg-accent/10"
			>
				Say hello
			</a>
			<a
				href={link('/files/cv-en.pdf')}
				target="_blank"
				rel="noreferrer"
				class="rounded border border-border px-6 py-3 font-mono text-muted transition-colors hover:border-accent hover:text-accent"
			>
				Download my CV (PDF)
			</a>
		</div>

		<div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
			<p>{profile.email}</p>
			<p>{profile.phone}</p>
			<p>{profile.location}</p>
		</div>

		{#if profile.socials.length > 0}
			<div class="flex flex-wrap gap-4">
				{#each profile.socials as social (social.label)}
					<a
						href={link(social.url)}
						target="_blank"
						rel="noreferrer"
						class="text-sm text-muted transition-colors hover:text-accent"
					>
						{social.label} ↗
					</a>
				{/each}
			</div>
		{/if}
	</div>
</Section>
