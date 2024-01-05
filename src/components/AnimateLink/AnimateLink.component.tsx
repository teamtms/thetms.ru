import { flushSync } from 'react-dom'
import type { AnimateLinkProps } from './AnimateLink.props.ts'
import { useNavigate } from 'react-router-dom'

export const AnimateLink = ({ ...props }: AnimateLinkProps) => {
	const navigate = useNavigate()

	return (
		<button
			onClick={(e) => {
				e.preventDefault()

				document.startViewTransition(() => {
					flushSync(() => {
						navigate(props.href)
					})
				})
			}} {...props}></button>
	)
}
