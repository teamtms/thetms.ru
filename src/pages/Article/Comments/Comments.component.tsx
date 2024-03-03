import { useMutation, useQuery } from '@tanstack/react-query'
import type { CommentsProps } from './Comments.props.ts'
import { FormEvent } from 'react'
import { wordpress } from '@/services/wordpress.ts'

const addComment = async (e: FormEvent<HTMLFormElement>, postId: number, refetch: () => void) => {
	e.preventDefault()

	const formData = new FormData(e.target as HTMLFormElement)

	const rawData = {
		email: formData.get('email')! as string,
		name: formData.get('name')! as string,
		comment: formData.get('comment')! as string,
	}

	const response = await fetch(`https://fb24m.ru/tms/wp-json/wp/v2/comments?post=${postId}&author_name=${rawData.name}&author_email=${rawData.email}&content=${rawData.comment}`, {
		method: 'POST',
		headers: {
			'Authorization': `Basic ${btoa('Fakem1ner:9oYK_fEp7_HgRl_dwSD_WP2O_cKWi')}`
		}
	})

	const json = await response.json()

	refetch()

	return json
}

export const Comments = (props: CommentsProps) => {
	const { isLoading, data, refetch } = useQuery({
		queryKey: ['comments', props.postId],
		queryFn: () => wordpress.getCommentsByPostId(props.postId)
	})

	const { mutate } = useMutation({
		mutationKey: ['comments', props.postId],
		mutationFn: (e: FormEvent<HTMLFormElement>) => addComment(e, props.postId, refetch)
	})

	return (
		<>
			<form onSubmit={(e) => { mutate(e) }} className="mb-2">
				<div className="flex gap-2 mb-2">
					<input name="name" autoComplete="username" className="basis-1/2 focus:bg-app-accent  hover:bg-app-accent bg-app-card text-[#fff] p-3 w-full" type="text" placeholder='Ваше имя' />
					<input name="email" autoComplete="login" className="basis-1/2 focus:bg-app-accent hover:bg-app-accent bg-app-card text-[#fff] p-3 w-full" type="email" placeholder='Электронная почта' />
				</div>
				<div className="flex gap-2">
					<input name="comment" className=" focus:bg-app-accenthover:bg-app-accent bg-app-card text-[#fff] p-3 w-full" type="text" placeholder='Your comment' />
					<button className="hover:bg-app-accent bg-app-card text-[#fff] p-3">Отправить</button>
				</div>
			</form>
			{isLoading ? 'Комментарии загружаются' : ''}
			<ul className="comment flex flex-col gap-2">
				{data ? data.map((comment) => <li key={comment.id} className="bg-app-card flex gap-4 p-3 text-[#fff]">
					<img src={comment.author_avatar_urls[48]} className="w-12 h-12" alt="" />

					<div className="flex flex-col">
						<span className="mb-2">{comment.author_name}</span>
						<div className="text-xs" dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
					</div>
				</li>) : ''}
			</ul>
		</>
	)
}


