<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<span
	class="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
>
	{label}
</span>
