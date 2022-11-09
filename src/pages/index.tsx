import { Container } from '@/components/ui/Container';
import { axios } from '@/services/axios';
import { Movie } from '@/shared/interfaces/Movie';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

interface Props {
	movies: Movie[];
}

export default function Home({ movies }: Props) {
	return (
		<main>
			<Head>
				<title>One Movies</title>
			</Head>

			<section>
				<Container className="pt-8 md:pt-16 pb-16">
					<h2 className="text-slate-200 uppercase font-bold tracking-wide text-lg">
						Popular movies
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{movies.map(({ id, poster_path, title, release_date, vote_average }) => (
							<div key={id} className="mt-8">
								<Link href={`/movies/${id}`}>
									<picture>
										<img
											src={`https://image.tmdb.org/t/p/original/${poster_path}`}
											className="rounded hover:opacity-75 transition ease-in-out duration-150"
											loading="lazy"
											alt={title}
										/>
									</picture>
								</Link>

								<div className="mt-2">
									<Link
										href={`/movies/${id}`}
										className="text-base xl:text-lg mt-2 hover:text-slate-200"
									>
										{title}
									</Link>
									<div className="flex items-center text-slate-300 text-sm mt-1">
										<AiFillStar className="text-yellow-200" />
										<span className="ml-1">{vote_average}</span>
										<span className="mx-2">|</span>
										<span>{release_date}</span>
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
	const { data } = await axios.get('/movie/popular');

	return {
		props: {
			movies: data.results,
		},
		revalidate: 10,
	};
};
