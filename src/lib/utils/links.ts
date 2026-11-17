import { asset } from '$app/paths';

/**
 * Prefixes internal paths (e.g. `/files/cv.pdf`) with the configured base path,
 * and passes external URLs through unchanged.
 */
export function link(url: string): string {
	if (/^https?:\/\//.test(url) || url.startsWith('#') || url.startsWith('mailto:')) {
		return url;
	}
	return asset(url.replace(/^\//, '') as Parameters<typeof asset>[0]);
}
