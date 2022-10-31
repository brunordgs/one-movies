import Link from 'next/link';
import { Container } from '../ui/Container';
import { HiMenuAlt3 } from 'react-icons/hi';

export function MobileNavbar() {
	return (
		<nav className="sticky top-0 right-0 left-0 bg-gradient-to-b from-black/50 via-black/20 to-primary bg-primary py-6 z-20 md:hidden">
			<Container className="flex items-center justify-between">
				<ul>
					<li>
						<Link href="/" className="font-black text-xl text-white hover:brightness-90">
							one <span className="text-sky-500">movies</span>
						</Link>
					</li>
				</ul>

				<div>
					<button type="button">
						<HiMenuAlt3 size={24} />
					</button>
				</div>
			</Container>
		</nav>
	);
}
