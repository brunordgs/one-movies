import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { IoPlayCircleOutline } from 'react-icons/io5';

export default function MoviesId() {
	return (
		<main>
			<section>
				<Container className="flex flex-col md:flex-row md:gap-x-24 pt-8 md:pt-16 pb-16">
					<div className="flex-none">
						<picture>
							<img
								src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg"
								className="rounded-sm w-64 lg:w-96"
								alt=""
							/>
						</picture>
					</div>

					<div>
						<h2 className="text-4xl mt-4 md:mt-0 mb-2 font-bold">Fall</h2>
						<div className="flex flex-wrap items-center text-slate-300 text-sm">
							<AiFillStar className="text-yellow-200" />
							<span className="ml-1">73.50%</span>
							<span className="mx-2">|</span>
							<span>August 11, 2022</span>
							<span className="mx-2">|</span>
							<span>Thriller</span>
						</div>

						<p className="text-slate-200 mt-8">
							For best friends Becky and Hunter, life is all about conquering fears and pushing
							limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower,
							they find themselves stranded with no way down. Now Becky and Hunter&apos;s expert
							climbing skills will be put to the ultimate test as they desperately fight to survive
							the elements, a lack of supplies, and vertigo-inducing heights
						</p>

						<div className="mt-12">
							<h3 className="font-bold">Featured Crew</h3>
							<div className="flex mt-4 gap-8">
								<div>
									<p>Scott Mann</p>
									<p className="text-sm text-slate-300">Director</p>
								</div>
								<div>
									<p>Scott Mann</p>
									<p className="text-sm text-slate-300">Director</p>
								</div>
								<div>
									<p>Scott Mann</p>
									<p className="text-sm text-slate-300">Director</p>
								</div>
							</div>

							<button
								type="button"
								className="inline-flex items-center gap-2 bg-sky-500 rounded font-bold px-5 py-4 transition ease-in-out hover:bg-sky-600 mt-12"
							>
								<IoPlayCircleOutline size={24} />
								Play trailer
							</button>
						</div>
					</div>
				</Container>
			</section>

			<section>
				<Container className="py-16 border-t border-secondary">
					<h2 className="text-4xl font-bold">Cast</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{Array.from({ length: 5 }, (_, index) => (
							<div key={index} className="mt-8">
								<Link href="/actors/1">
									<picture>
										<img
											src="https://image.tmdb.org/t/p/w300//fhwQWWTwl8r613puGYKMyf9H8mQ.jpg"
											className="hover:opacity-75 transition ease-in-out rounded-sm"
											alt=""
										/>
									</picture>
								</Link>

								<div className="mt-2">
									<Link href="/" className="text-lg hover:text-slate-200">
										Grace Caroline Currey
									</Link>
									<p className="text-sm text-slate-300">Becky</p>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			<section>
				<Container className="py-16 border-t border-secondary">
					<h2 className="text-4xl font-bold">Images</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{Array.from({ length: 9 }, (_, index) => (
							<div key={index} className="mt-8">
								<button type="button">
									<picture>
										<img
											src="https://image.tmdb.org/t/p/w500/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg"
											className="hover:opacity-75 transition ease-in-out rounded-sm"
											loading="lazy"
											alt=""
										/>
									</picture>
								</button>
							</div>
						))}
					</div>
				</Container>
			</section>
		</main>
	);
}
