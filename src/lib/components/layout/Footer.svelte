<script lang="ts">
	import { profile } from '#lib/data/profile';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-border py-8">
	<div class="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-center">
		<p class="text-sm text-muted">
			© {year}
			{profile.name} · {profile.location}
		</p>
		<p class="text-xs text-muted/60">
			Built with SvelteKit — <a class="hover:text-accent" href="#top">back to top ↑</a>
		</p>
	</div>
</footer>
