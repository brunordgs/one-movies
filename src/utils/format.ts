export function formatDate(date: string) {
	return new Intl.DateTimeFormat('en-US', {
		dateStyle: 'long',
		timeZone: 'utc',
	}).format(new Date(date));
}
