import { Container } from '@/components/ui/Container';
import Head from 'next/head';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

export default function Home() {
	return (
		<main>
			<Head>
				<title>One movies</title>
			</Head>

			<section>
				<Container className="pt-8 md:pt-16 pb-16">
					<h2 className="text-slate-200 uppercase font-bold tracking-wide text-lg">Popular movies</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{Array.from({ length: 20 }, (_, index) => (
							<div key={index} className="mt-8">
								<Link href="/movies/1">
									<picture>
										<img
											src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg"
											className="rounded-sm hover:opacity-75 transition ease-in-out duration-150"
											alt=""
										/>
									</picture>
								</Link>

								<div className="mt-2">
									<Link href="/movies/1" className="text-lg mt-2 hover:text-slate-200">
										Fall
									</Link>
									<div className="flex items-center text-slate-300 text-sm mt-1">
										<AiFillStar className="text-yellow-200" />
										<span className="ml-1">7.4</span>
										<span className="mx-2">|</span>
										<span>2022-10-06</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>
		</main>
	);
}
