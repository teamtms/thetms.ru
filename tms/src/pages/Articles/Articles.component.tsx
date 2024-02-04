import { Container } from "@/components/Container/Container.component"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const MetaArticles = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/articles/1')
	}, [navigate])

	return (
		<Container>Redirecting</Container>
	)
}

export default MetaArticles