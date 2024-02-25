// import styles from './Home.module.scss'
import { Container } from '@/components/Container/Container.component'
import { lazy } from 'react'
import { Helmet } from 'react-helmet'

const Eval = lazy(() => import('@/components/Eval/Eval.component'))
const LatestNews = lazy(() => import('./LatestNews/LatestNews.component'))

const Home = () => {

	return (
		<Container className="font-press-start-2p">
			<Helmet>
				<title>Главная - ТМС</title>
			</Helmet>
			<h1 className="text-3xl mb-4">Добро пожаловать в АД</h1>
			<p className="mt-2 mb-4">Кто-то называет это место ТМС, но слово ад сюда подходит точно больше</p>
			<span className="inline-block mt-2 p-1 px-2 bg-slate-200 text-black rounded-md">mc.thetms.ru</span>

			<div className="mt-16">
				<h2 className="text-2xl">Плюсы <del>их тут нет</del></h2>
			</div>
			<Eval className='mb-2 mt-4'>
				<ol>
					<li>интересный гейплей</li>
					<li>отзывчивая администрация</li>
					<li>топавый сюжет</li>
				</ol>
			</Eval>

			<div className="mt-16">
				<h2 className="text-2xl">Статистика</h2>
				<div className="flex flex-wrap gap-y-6 sm:gap-10 mt-4 ">
					<div className="border-s-2 pt-1 pb-1 pl-3 basis-36">
						<h3 className="text-xl">3</h3>
						<p className="flex flex-col justify-end h-8 text-xs">года<br />серверу</p>
					</div>
					<div className="border-s-2 pt-1 pb-1 pl-3 basis-36">
						<h3 className="text-xl">100+</h3>
						<p className="flex flex-col justify-end h-8 text-xs">зданий построено</p>
					</div>
					<div className="border-s-2 pt-1 pb-1 pl-3 basis-36">
						<h3 className="text-xl">10+</h3>
						<p className="flex flex-col justify-end h-8 text-xs">модов на сервере</p>
					</div>
					<div className="border-s-2 pt-1 pb-1 pl-3 basis-36">
						<h3 className="text-xl">0</h3>
						<p className="flex flex-col justify-end h-8 text-xs">дней без тупасти</p>
					</div>
				</div>
			</div>
			{localStorage['include-latest-news'] === 'include-latest-news' ?
				<LatestNews /> : ''}

			<div className="mt-16">
				<h2 className="text-2xl">Моменты</h2>
				<div className="grid gap-8 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mt-4">
					<img className="aspect-square object-cover rounded-md" src="https://www.fb24m.ru/tms/wp-content/uploads/2024/01/2024-01-07_00.30.32.png" alt="" />
					<img className="aspect-square object-cover rounded-md" src="https://www.fb24m.ru/tms/wp-content/uploads/2024/01/2024-01-08_21.22.02.png" alt="" />
					<img className="aspect-square object-cover rounded-md" src="https://www.fb24m.ru/tms/wp-content/uploads/2024/01/2024-01-08_21.05.29.png" alt="" />
					<img className="aspect-square object-cover rounded-md" src="https://www.fb24m.ru/tms/wp-content/uploads/2024/01/2024-01-08_21.03.28.png" alt="" />
					<img className="aspect-square object-cover rounded-md" src="https://www.fb24m.ru/tms/wp-content/uploads/2024/01/2024-01-06_23.54.02.png" alt="" />
					<img className="aspect-square object-cover rounded-md" src="https://www.fb24m.ru/tms/wp-content/uploads/2024/01/2024-01-08_21.06.41.png" alt="" />
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
		</Container>
	)
}

export default Home
