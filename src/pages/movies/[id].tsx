import { Container } from '@/components/ui/Container';
import { Modal } from '@/components/ui/Modal';
import { axios } from '@/services/axios';
import { Movie } from '@/shared/interfaces/Movie';
import { formatDate } from '@/utils/format';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoPlayCircleOutline } from 'react-icons/io5';

interface Props {
	movie: Movie;
}

export default function MoviesId({
	movie: { poster_path, title, overview, release_date, vote_average, genres, trailerId, cast },
}: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const voteAverage = (vote_average * 10).toFixed(2);
	const releaseDate = formatDate(release_date);

	return (
		<>
			<Head>
				<title>{title} - One Movies</title>
			</Head>

			<main>
				<section>
					<Container className="flex flex-col md:flex-row md:gap-x-24 pt-8 md:pt-16 pb-16">
						<div className="flex-none">
							<picture>
								<img
									src={`https://image.tmdb.org/t/p/original/${poster_path}`}
									className="rounded w-64 lg:w-96"
									alt={title}
								/>
							</picture>
						</div>

						<div>
							<h2 className="text-4xl mt-4 md:mt-0 mb-2 font-bold">{title}</h2>
							<div className="flex flex-wrap items-center text-slate-300 text-sm">
								<AiFillStar className="text-yellow-200" />
								<span className="ml-1">{voteAverage}%</span>
								<span className="mx-2">|</span>
								<span>{releaseDate}</span>
								<span className="mx-2">|</span>
								<span>{genres.map(({ name }) => name).join(', ')}</span>
							</div>

							<p className="text-slate-200 mt-8">{overview}</p>

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
									onClick={() => setIsModalOpen(true)}
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
							{cast.map(({ id, name, character, profile_path }) => (
								<div key={id} className="mt-8">
									<Link href={`/actors/${id}`}>
										<picture>
											<img
												src={`https://image.tmdb.org/t/p/original/${profile_path}`}
												className="hover:opacity-75 transition ease-in-out rounded"
												alt={name}
											/>
										</picture>
									</Link>

									<div className="mt-2">
										<Link href={`/actors/${id}`} className="text-lg hover:text-slate-200">
											{name}
										</Link>
										<p className="text-sm text-slate-300">{character}</p>
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
												src="https://image.tmdb.org/t/p/original/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg"
												className="hover:opacity-75 transition ease-in-out rounded"
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

				{isModalOpen && (
					<Modal open={isModalOpen} onOpen={setIsModalOpen}>
						<iframe
							src={`https://www.youtube.com/embed/${trailerId}`}
							className="w-full aspect-video"
							allow="autoplay; encrypted-media"
						/>
					</Modal>
				)}
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { data } = await axios.get(`/movie/${query.id}`);
	const { data: videos } = await axios.get(`/movie/${query.id}/videos`);
	const {
		data: { cast: allCast },
	} = await axios.get(`/movie/${query.id}/credits`);

	const cast = allCast.splice(0, 5);

	const trailerId = videos.results.find(
		({ name }: { name: string }) => name === 'Official Trailer',
	).key;

	return {
		props: {
			movie: {
				...data,
				trailerId,
				cast,
			},
		},
	};
};
