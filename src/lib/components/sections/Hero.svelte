<script lang="ts">
	import { link } from '#lib/utils/links';
	import { profile } from '#lib/data/profile';
</script>

<section id="top" class="flex min-h-screen items-center pt-16">
	<div class="mx-auto w-full max-w-5xl px-4">
		<p class="mb-4 font-mono text-accent">Hi, my name is</p>
		<h1 class="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
		<p class="mt-3 text-2xl font-semibold text-muted sm:text-3xl">{profile.role}</p>
		<p class="mt-6 max-w-2xl text-lg">{profile.tagline}</p>

		<div class="mt-8 flex flex-wrap gap-4">
			<a
				href="mailto:{profile.email}"
				class="rounded border border-accent px-5 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
			>
				Get in touch
			</a>
			{#each profile.socials as social (social.label)}
				<a
					href={link(social.url)}
					target="_blank"
					rel="noreferrer"
					class="rounded border border-border px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent"
				>
					{social.label}
				</a>
			{/each}
		</div>
	</div>
</section>
