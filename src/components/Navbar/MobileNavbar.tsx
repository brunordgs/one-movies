import Link from 'next/link';
import { Container } from '../ui/Container';

export function MobileNavbar() {
	return (
		<nav>
			<Container className="flex items-center justify-between md:hidden">
				<ul>
					<li>
						<Link href="/" className="font-black text-xl text-white">
							one <span className="text-sky-500">movies</span>
						</Link>
					</li>
				</ul>
			</Container>
		</nav>
	);
}
