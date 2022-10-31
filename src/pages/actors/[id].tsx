import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { FaBirthdayCake, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ActorsId() {
	return (
		<main className="md:h-screen">
			<section>
				<Container className="flex flex-col md:flex-row md:gap-x-24 pt-8 md:pt-16 pb-16">
					<div className="flex-none">
						<picture>
							<img
								src="https://image.tmdb.org/t/p/w300//fhwQWWTwl8r613puGYKMyf9H8mQ.jpg"
								className="rounded-sm"
								alt=""
							/>
						</picture>

						<ul className="flex items-center mt-4 gap-6 px-6">
							<li>
								<Link
									href="/"
									className="text-slate-300 hover:text-white transition ease-in-out"
									target="_blank"
									rel="noreferrer noopener"
								>
									<FaInstagram size={24} />
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-slate-300 hover:text-white transition ease-in-out"
									target="_blank"
									rel="noreferrer noopener"
								>
									<FaTwitter size={24} />
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h2 className="text-4xl mt-4 md:mt-0 mb-2 font-bold">Grace Caroline Currey</h2>
						<div className="flex flex-wrap items-center text-slate-300 text-sm">
							<FaBirthdayCake />
							<span className="ml-2">July 17, 1996 (26 years old) in USA</span>
						</div>

						<p className="text-slate-200 mt-8">
							Grace Caroline Currey (born July 17, 1996) is an American actress, best known for
							playing Young Melinda Gordon on Ghost Whisperer, Haley Farrel in Bones, and Young
							Natalie Wood in The Mystery of Natalie Wood. She also played the character Sydney
							Briggs in Home of the Brave. She starred in the television film Back When We Were
							Grownups, playing Young Biddy.
						</p>

						<div className="mt-12">
							<h3 className="font-bold">Known For</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
								<div className="mt-4">
									<Link href="/movies/1" className="group">
										<picture>
											<img
												src="https://image.tmdb.org/t/p/w185//spCAxD99U1A6jsiePFoqdEcY0dG.jpg"
												className="group-hover:opacity-75 transition ease-in-out rounded-sm"
												alt=""
											/>
										</picture>
										<span className="text-slate-300 text-sm mt-1 block">Fall</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</main>
	);
}
