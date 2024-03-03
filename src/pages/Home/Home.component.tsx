// import styles from './Home.module.scss'
import { Container } from '@/components/Container/Container.component'
import { Post } from '@/components/Post/Post.component'
import { WpImage } from '@/components/WpImage/WpImage.component'
import { useStore } from '@/hooks/useStore.hook'
import { wordpress } from '@/services/wordpress'
import { Spinner } from '@fluentui/react-components'
import { useQuery } from '@tanstack/react-query'
import { lazy } from 'react'
import { Helmet } from 'react-helmet-async'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.scss'
import { KeenSliderInstance } from 'keen-slider'

const Eval = lazy(() => import('@/components/Eval/Eval.component'))
const LatestNews = lazy(() => import('./LatestNews/LatestNews.component'))

const autoplay = (slider: KeenSliderInstance) => {
	setInterval(() => {
		slider.next()
	}, 5000)
}

const Home = () => {
	const { siteTitle } = useStore()

	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 32
		}
	}, [autoplay])

	const { isLoading, data, error } = useQuery({
		queryKey: ['page_home'],
		queryFn: () => wordpress.getPageBySlug('tms')
	})

	const { data: posts, error: postsError, isLoading: isPostsLoading } = useQuery({
		queryKey: ['posts'],
		queryFn: () => wordpress.getPosts(1, 10),
	})

	return (
		<Container className="font-press-start-2p">
			<Helmet>
				<title>Главная - {siteTitle}</title>
			</Helmet>
			{isLoading ? <Spinner /> : ''}
			{error ? error.message : ''}
			{data
				? <>
					<h1 className="text-3xl mb-4">{data[0].acf.title}</h1>
					<p className="mt-2 mb-4">{data[0].acf.description}</p>
					<span className="inline-block mt-2 p-1 px-2 bg-slate-200 text-black rounded-md">{data[0].acf.ip}</span>

					<div className="mt-16">
						<h2 className="text-2xl">Плюсы <del>их тут нет</del></h2>
					</div>
					<Eval className='mb-2 mt-4'>
						<ol>
							{data[0].acf.pluses.split('\n').map((item) =>
								<li key={item}>{item}</li>
							)}
						</ol>
					</Eval>

					<div className="mt-16">
						<h2 className="text-2xl">Статистика</h2>
						<div className="flex flex-wrap gap-y-6 sm:gap-10 mt-4 ">
							{data[0].acf.stats.split('\n').map((item) =>
								<div key={item} className="border-s-2 pt-1 pb-1 pl-3 basis-36">
									<h3 className="text-xl">{item.split(':')[0]}</h3>
									<p className="flex flex-col justify-end h-8 text-xs">{item.split(':')[1]}</p>
								</div>
							)}
						</div>
					</div>
					{localStorage['include-latest-news'] === 'include-latest-news' ?
						<LatestNews /> : ''}

					{postsError ? postsError.message : ''}
					{isPostsLoading ? <Spinner /> : ''}
					{posts?.length
						? <>
							<h2 className="text-2xl mt-16">Последние новости</h2>
							<div className="keen-slider mt-4" ref={sliderRef}>
								{posts.map((item) => <div key={item.id} className="keen-slider__slide"><Post {...item} /></div>)}
							</div></>
						: ''}

					<div className="mt-16">
						<h2 className="text-2xl">Моменты</h2>
						<div className="grid gap-8 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mt-4">
							{data[0].acf.moments.length ? data[0].acf.moments.map((item) =>
								<WpImage className="aspect-square object-cover rounded-md" key={item} imageId={item} />
							) : ''}
						</div>
					</div>

					<div className="mt-16 flex items-center gap-12 flex-col md:flex-row">
						<div className="basis-1/2">
							<h2 className="text-2xl">Бюджетная больница</h2>
							<p className="mt-2 text-[13px] [word-spacing:-4px]">Добро пожаловать в бюджетную больницу Minecraft. Это медицинское учреждение обеспечивает
								игрокам и жителям города доступ к медицинским услугам по бесплатной цене. В нашей больнице одно отделение: палаты.</p>
						</div>
						<div className="basis-1/2 ">
							<img className="aspect-square object-cover rounded-md" src="https://www.fb24m.ru/tms/wp-content/uploads/2024/01/2024-01-08_21.05.29.png" alt="" />
						</div>
					</div>

					<div className="mt-8 flex items-center gap-12 flex-col-reverse md:flex-row">
						<div className="basis-1/2 ">
							<img className="aspect-square object-cover rounded-md" src="https://www.fb24m.ru/tms/wp-content/uploads/2024/01/2024-01-11_16.29.00.png" alt="" />
						</div>
						<div className="basis-1/2">
							<h2 className="text-2xl">Городской суд</h2>
							<p className="mt-2 text-[13px] [word-spacing:-4px]">
								Этот суд является корупционным органом, который занимается разрешением гражданских и уголовных дел. В нашем суде вы не можете получить правовую помощь и консультацию по любым юридическим вопросам.
							</p>
						</div>
					</div>
					<div className="mt-8 flex items-center gap-12 flex-col md:flex-row">
						<div className="basis-1/2">
							<h2 className="text-2xl">Больница Великого Джагфоенана в FakeCity</h2>
							<p className="mt-2 text-[13px] [word-spacing:-4px]">
								Добро пожаловать в самую лучшую премиум-больницу Minecraft. Мы гордимся тем, что предлагаем нашим пациентам высокий уровень медицинского обслуживания и комфорта.

								Наша больница оснащена самым современным оборудованием и технологиями, которые позволяют нам диагностировать и лечить самые сложные заболевания.
							</p>
						</div>
						<div className="basis-1/2 ">
							<img className="aspect-square object-cover rounded-md" src="https://www.fb24m.ru/tms/wp-content/uploads/2024/01/kruta-nu-eto-zh-kruta.png" alt="" />
						</div>
					</div>
				</>
				: ''}
		</Container>
	)
}

export default Home
