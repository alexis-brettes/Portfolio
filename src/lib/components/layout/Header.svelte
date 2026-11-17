<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/data/site';
	import { profile } from '#lib/data/profile';

	let open = $state(false);
	let scrolled = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 8;
	}

	const base = page.url.pathname.replace(/\/$/, '');
	const href = (id: string) => `${base}/#${id}`;
</script>

<svelte:window onscroll={onScroll} />

<header
	class="fixed inset-x-0 top-0 z-50 border-b transition-colors {scrolled || open
		? 'border-border bg-bg/90 backdrop-blur'
		: 'border-transparent bg-transparent'}"
>
	<nav class="mx-auto flex h-16 max-w-5xl items-center justify-between px-4" aria-label="Main">
		<a
			href={href('about')}
			class="font-mono text-sm font-semibold text-accent"
			onclick={() => (open = false)}
		>
			{profile.name}
		</a>

		<ul class="hidden items-center gap-6 md:flex">
			{#each site.nav as item (item.id)}
				<li>
					<a href={href(item.id)} class="text-sm text-muted transition-colors hover:text-accent">
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<button
			type="button"
			class="flex h-9 w-9 items-center justify-center rounded border border-border md:hidden"
			aria-expanded={open}
			aria-label="Toggle navigation"
			onclick={() => (open = !open)}
		>
			<span class="text-lg" aria-hidden="true">{open ? '✕' : '☰'}</span>
		</button>
	</nav>

	{#if open}
		<ul class="border-t border-border px-4 pb-4 md:hidden">
			{#each site.nav as item (item.id)}
				<li>
					<a
						href={href(item.id)}
						class="block py-2 text-sm text-muted hover:text-accent"
						onclick={() => (open = false)}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>
