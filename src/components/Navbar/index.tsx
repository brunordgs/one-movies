import Link from 'next/link';
import { Container } from '../ui/Container';
import { MobileNavbar } from './MobileNavbar';

export function Navbar() {
	return (
		<>
			<nav className="sticky top-0 left-0 right-0 py-6 bg-gradient-to-b from-black/50 via-black/20 to-primary hidden md:block bg-primary z-20">
				<Container>
					<ul className="flex items-center gap-6 h-10 font-bold text-slate-200">
						<li>
							<Link href="/" className="font-black text-xl text-white hover:brightness-90">
								one <span className="text-sky-500">movies</span>
							</Link>
						</li>
						<li className="ml-10 hover:text-white">
							<Link href="/">Movies</Link>
						</li>
						<li className="hover:text-white">
							<Link href="/tv">TV Shows</Link>
						</li>
					</ul>
				</Container>
			</nav>

			<MobileNavbar />
		</>
	);
}
