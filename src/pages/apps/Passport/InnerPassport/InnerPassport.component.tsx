import { WpImage } from '@/components/WpImage/WpImage.component.tsx'
import type { InnerPassportProps } from './InnerPassport.props.ts'
import { Icon } from '@/components/Icon/Icon.component.tsx'
import { formatDate } from '@/functions/formatDate.ts'

export const InnerPassport = (props: InnerPassportProps) => {
	return (
		<div>
			<div className="">
				<h2 className="mb-4">Паспорт гражданина ТМС <span className="inline-block bg-app-accent text-sm px-2 py-1 -translate-y-0.5">#{props.user.id}</span></h2>
				<div className="flex gap-8">
					<WpImage imageId={props.user.acf.avatar} className="w-[200px] h-[200px] object-cover" />
					<div className="grow mt-2">
						<div className="mb-2">
							<span className="text-xl underline">{props.user.title.rendered} • <span className="text-sm">{formatDate(props.user.acf.birth_date)}</span></span>
						</div>
						<p className="text-sm mb-4">
							{props.user.acf.description}
						</p>
						<ul className="flex gap-2 gap-y-0.1 flex-wrap">
							<li className="flex gap-2 items-center py-1 px-2 bg-app-accent">
								<Icon>barefoot</Icon>
								<span className="text-sm">{props.user.acf.fraction}</span>
							</li>
							<li className="flex gap-2 items-center py-1 px-2 bg-app-accent">
								<Icon>work_history</Icon>
								<span className="text-sm">{props.user.acf.role}</span>
							</li>
							<li className="flex gap-2 items-center py-1 px-2 bg-app-accent">
								<Icon>security</Icon>
								<span className="text-sm">{props.user.acf.status === 'admin' ? 'Администратор' : 'Пользователь'}</span>
							</li>
							{props.user.acf.married
								? <li className="flex gap-2 items-center py-1 px-2 bg-app-accent">
									<Icon>favorite</Icon>
									<span className="text-sm">Женат</span>
								</li>
								: ''}
						</ul>
						<hr className="mt-4 block w-full border-[#333]" />
						<ul className="flex gap-4 gap-y-2 mt-4 flex-wrap">
							{props.user.acf.additions.split('\n').map((item: string) =>
								<li key={item[0] + item[1]} className="flex gap-2 bg-app-accent py-0.5 px-2">
									<Icon className="text-[32px]">{item.split(':')[0]}</Icon>
									<span className="text-[13px]"> {item.split(':')[1]}</span>
								</li>)}
						</ul>
						<span className="block mt-4 text-xs ml-1 underline">Информация о пользователе</span>
					</div>
				</div>
			</div>
		</div>
	)
}


