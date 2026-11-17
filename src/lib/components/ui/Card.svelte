<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, hover = false }: { children: Snippet; hover?: boolean } = $props();
</script>

<div
	class="rounded-lg border border-border bg-surface p-6 transition-colors {hover
		? 'hover:border-accent/50'
		: ''}"
>
	{@render children()}
</div>
