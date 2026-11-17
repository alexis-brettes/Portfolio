<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		eyebrow,
		title,
		subtitle,
		children
	}: {
		id: string;
		eyebrow: string;
		title: string;
		subtitle?: string;
		children: Snippet;
	} = $props();
</script>

<section {id} class="scroll-mt-20 py-20">
	<div class="mx-auto max-w-5xl px-4">
		<p class="mb-2 font-mono text-sm text-accent">{eyebrow}</p>
		<h2 class="text-3xl font-bold tracking-tight">{title}</h2>
		{#if subtitle}
			<p class="mt-3 max-w-2xl text-muted">{subtitle}</p>
		{/if}
		<div class="mt-10">
			{@render children()}
		</div>
	</div>
</section>
