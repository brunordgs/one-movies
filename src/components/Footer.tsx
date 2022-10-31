import Link from 'next/link';
import { Container } from './ui/Container';

export function Footer() {
	return (
		<footer className="bg-black">
			<Container className="text-sm py-6">
				UI design inspired by{' '}
				<Link
					href="https://astro.build"
					className="underline hover:text-slate-200"
					target="_blank"
					rel="noreferrer noopener"
				>
					Astro
				</Link>{' '}
				and built with{' '}
				<Link
					href="https://tailwindcss.com"
					className="underline hover:text-slate-200"
					target="_blank"
					rel="noreferrer noopener"
				>
					Tailwind CSS.
				</Link>
			</Container>
		</footer>
	);
}
