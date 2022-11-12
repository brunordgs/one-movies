import Link from 'next/link';
import { Container } from '../ui/Container';
import { BiCameraMovie } from 'react-icons/bi';
import { IoTvOutline } from 'react-icons/io5';

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

				<div className="flex items-center gap-4">
					<Link
						href="/"
						className="text-slate-300 hover:text-white transition-colors ease-in-out"
						title="Movies"
					>
						<BiCameraMovie size={24} />
					</Link>

					<Link
						href="/tv"
						title="TV Shows"
						className="text-slate-300 hover:text-white transition-colors ease-in-out"
					>
						<IoTvOutline size={24} />
					</Link>
				</div>
			</Container>
		</nav>
	);
}
