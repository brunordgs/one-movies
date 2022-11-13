import { Container } from '@/components/ui/Container';
import { Modal } from '@/components/ui/Modal';
import { axios } from '@/services/axios';
import { TvShow } from '@/shared/interfaces/TvShow';
import { formatDate } from '@/utils/format';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoPlayCircleOutline } from 'react-icons/io5';

interface Props {
	tvShow: TvShow;
}

export default function TvId({
	tvShow: {
		poster_path,
		name,
		overview,
		first_air_date,
		vote_average,
		genres,
		trailer,
		cast,
		images,
		created_by,
	},
}: Props) {
	const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
	const [backdropModal, setBackdropModal] = useState({
		open: false,
		url: '',
	});

	const voteAverage = (vote_average * 10).toFixed(2);
	const firstAirDate = formatDate(first_air_date);

	return (
		<>
			<Head>
				<title>{name} - One Movies</title>
			</Head>

			<main>
				<section>
					<Container className="flex flex-col md:flex-row md:gap-x-24 pt-8 md:pt-16 pb-16">
						<div className="flex-none">
							<picture>
								<img
									src={`https://image.tmdb.org/t/p/original${poster_path}`}
									className="rounded w-64 lg:w-96"
									alt={name}
								/>
							</picture>
						</div>

						<div>
							<h2 className="text-4xl mt-4 md:mt-0 mb-2 font-bold">{name}</h2>
							<div className="flex flex-wrap items-center text-slate-300 text-sm">
								<AiFillStar className="text-yellow-200" />
								<span className="ml-1">{voteAverage}%</span>
								<span className="mx-2">|</span>
								<span>{firstAirDate}</span>
								<span className="mx-2">|</span>
								<span>{genres.map(({ name }) => name).join(', ')}</span>
							</div>

							<p className="text-slate-200 mt-8">{overview}</p>

							<div className="mt-12">
								<h3 className="font-bold">Featured Crew</h3>

								<div className="mt-4">
									<p>{created_by[0].name}</p>
									<p className="text-sm text-slate-300">Creator</p>
								</div>

								{trailer.id && (
									<button
										type="button"
										className="inline-flex items-center gap-2 bg-sky-500 rounded font-bold px-5 py-4 transition ease-in-out hover:bg-sky-600 mt-12"
										onClick={() => setIsTrailerModalOpen(true)}
									>
										<IoPlayCircleOutline size={24} />
										Play trailer
									</button>
								)}
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
									<Link href={`/actors/${id}`} passHref>
										<picture>
											<img
												src={`https://image.tmdb.org/t/p/original${profile_path}`}
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
							{images.map(({ file_path }) => (
								<div key={file_path} className="mt-8">
									<button
										type="button"
										onClick={() =>
											setBackdropModal({
												open: true,
												url: file_path,
											})
										}
									>
										<picture>
											<img
												src={`https://image.tmdb.org/t/p/original${file_path}`}
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

				{isTrailerModalOpen && (
					<Modal open={isTrailerModalOpen} onOpen={setIsTrailerModalOpen}>
						<iframe
							src={
								trailer.site === 'YouTube'
									? `https://www.youtube.com/embed/${trailer.id}`
									: `https://player.vimeo.com/video/${trailer.id}`
							}
							className="w-full aspect-video"
							allow="autoplay; encrypted-media"
						/>
					</Modal>
				)}

				{backdropModal.open && (
					<Modal open={backdropModal.open} onOpen={setBackdropModal}>
						<picture>
							<img
								src={`https://image.tmdb.org/t/p/original${backdropModal.url}`}
								className="rounded"
								loading="lazy"
								alt=""
							/>
						</picture>
					</Modal>
				)}
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { data } = await axios.get(`/tv/${query.id}`, {
		params: {
			append_to_response: 'credits,videos,images',
		},
	});

	const images = data.images.backdrops.splice(0, 9);
	const cast = data.credits.cast.splice(0, 5);
	const trailer = data.videos.results.find(({ type }: { type: string }) => type === 'Trailer');

	return {
		props: {
			tvShow: {
				...data,
				trailer: {
					id: trailer.key ?? null,
					site: trailer.site,
				},
				cast,
				images,
			},
		},
	};
};
