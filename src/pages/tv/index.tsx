import { Container } from '@/components/ui/Container';
import { axios } from '@/services/axios';
import { TvShow } from '@/shared/interfaces/TvShow';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

interface Props {
	tvShows: TvShow[];
}

export default function Tv({ tvShows }: Props) {
	return (
		<main>
			<Head>
				<title>TV - One Movies</title>
			</Head>

			<section>
				<Container className="pt-8 md:pt-16 pb-16">
					<h2 className="text-slate-200 uppercase font-bold tracking-wide text-lg">
						Popular shows
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{tvShows.map(({ id, poster_path, name, first_air_date, vote_average }) => (
							<div key={id} className="mt-8">
								<Link href={`/tv/${id}`}>
									<picture>
										<img
											src={`https://image.tmdb.org/t/p/original${poster_path}`}
											className="rounded hover:opacity-75 transition ease-in-out duration-150"
											loading="lazy"
											alt={name}
										/>
									</picture>
								</Link>

								<div className="mt-2">
									<Link
										href={`/movies/${id}`}
										className="text-base xl:text-lg mt-2 hover:text-slate-200"
									>
										{name}
									</Link>
									<div className="flex items-center text-slate-300 text-sm mt-1">
										<AiFillStar className="text-yellow-200" />
										<span className="ml-1">{vote_average}</span>
										<span className="mx-2">|</span>
										<span>{first_air_date}</span>
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

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await axios.get('/tv/popular');

	return {
		props: {
			tvShows: data.results,
		},
		revalidate: 10,
	};
};
