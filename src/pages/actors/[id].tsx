import { Container } from '@/components/ui/Container';
import { axios } from '@/services/axios';
import { Actor } from '@/shared/interfaces/Actor';
import { formatDate } from '@/utils/format';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FaBirthdayCake, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

interface Props {
	actor: Actor;
}

export default function ActorsId({
	actor: { name, biography, profile_path, birthday, place_of_birth, credits, social, castMovies },
}: Props) {
	const birthdayDate = formatDate(birthday);
	const actorAge = new Date().getFullYear() - +birthday.slice(0, 4);

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
									src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
									className="rounded"
									alt=""
								/>
							</picture>

							<ul className="flex items-center mt-4 gap-6 px-6">
								{social.facebook_id && (
									<li>
										<Link
											href={`https://www.facebook.com/${social.facebook_id}`}
											className="text-slate-300 hover:text-white transition ease-in-out"
											target="_blank"
											rel="noreferrer noopener"
											title="Facebook"
										>
											<FaFacebook size={24} />
										</Link>
									</li>
								)}

								{social.instagram_id && (
									<li>
										<Link
											href={`https://www.instagram.com/${social.instagram_id}`}
											className="text-slate-300 hover:text-white transition ease-in-out"
											target="_blank"
											rel="noreferrer noopener"
											title="Instagram"
										>
											<FaInstagram size={24} />
										</Link>
									</li>
								)}

								{social.twitter_id && (
									<li>
										<Link
											href={`https://www.twitter.com/${social.twitter_id}`}
											className="text-slate-300 hover:text-white transition ease-in-out"
											target="_blank"
											rel="noreferrer noopener"
											title="Twitter"
										>
											<FaTwitter size={24} />
										</Link>
									</li>
								)}
							</ul>
						</div>

						<div>
							<h2 className="text-4xl mt-4 md:mt-0 mb-2 font-bold">{name}</h2>
							<div className="flex flex-wrap items-center text-slate-300 text-sm">
								<FaBirthdayCake />
								<span className="ml-2">
									{birthdayDate} ({actorAge} years old) in {place_of_birth}
								</span>
							</div>

							<p className="text-slate-200 mt-8">{biography}</p>

							<div className="mt-12">
								<h3 className="font-bold">Known For</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
									{castMovies
										.sort((a, b) => b.popularity - a.popularity)
										.slice(0, 5)
										.map(({ id, name, title, poster_path }) => (
											<Link key={id} href={`/movies/${id}`} className="group" passHref>
												<picture>
													<img
														src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
														className="group-hover:opacity-75 transition ease-in-out rounded mt-4"
														alt=""
													/>
												</picture>
												<span className="text-slate-300 text-sm mt-1 block">
													{name || title || 'Untitled'}
												</span>
											</Link>
										))}
								</div>
							</div>
						</div>
					</Container>
				</section>

				<section>
					<Container className="py-16 border-t border-secondary">
						<h2 className="text-4xl font-bold">Credits</h2>

						<ul className="list-disc leading-loose pl-5 mt-8">
							{credits
								.sort((a, b) => {
									const aReleaseDate = new Date(a.release_date).getFullYear();
									const bReleaseDate = new Date(b.release_date).getFullYear();

									// Sort credit movies by descending order
									return aReleaseDate > bReleaseDate || !a.release_date
										? -1
										: aReleaseDate < bReleaseDate
										? 1
										: 0;
								})
								.map(({ id, title, release_date, character }) => (
									<li key={id}>
										{release_date ? new Date(release_date).getFullYear() : 'Future'} ??{' '}
										<span className="font-black">{title}</span> as {character || 'Unknown'}
									</li>
								))}
						</ul>
					</Container>
				</section>
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { data } = await axios.get(`/person/${query.id}`, {
		params: {
			append_to_response: 'external_ids,combined_credits',
		},
	});

	const { data: credits } = await axios.get(`/person/${query.id}/movie_credits`);

	return {
		props: {
			actor: {
				...data,
				castMovies: data.combined_credits.cast,
				social: data.external_ids,
				credits: credits.cast,
			},
		},
	};
};
