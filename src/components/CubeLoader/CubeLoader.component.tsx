import { useEffect } from 'react'
import './CubeLoader.scss'

export const CubeLoader = () => {

	useEffect(() => {
		const sourceIdNames = ["Rectangle_1_1", "Rectangle_3_3"];

		const candidateElement = document.getElementById("Rectangle_1_1")!
		candidateElement.addEventListener("animationend", (event) => {
			if (event.animationName === "animation_Rectangle_1_1_flow_5") {

				sourceIdNames.forEach((id) => {
					const element = document.getElementById(id)!

					const animation = element.style.animation

					element.style.animation = 'none'
					setTimeout(() => {
						element.style.animation = animation
					}, 5)
				})
			}
		})
	}, [])

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="795" height="811" viewBox="0 0 795 811" fill="none">
			<g id="Frame_15_0">
				<rect width="795" height="811" fill="#11141D" id="Frame_15_0_0" x="0" y="0" transform="rotate(0 397.5 405.5)"></rect>
				<rect id="Rectangle_1_1" x="111" y="337" width="137" height="137" fill="white" transform="rotate(0 179.5 405.5)"></rect>
				<rect id="Rectangle_2_2" x="328" y="337" width="138" height="137" fill="white" transform="rotate(0 397 405.5)"></rect>
				<rect id="Rectangle_3_3" x="465" y="337" width="137" height="137" fill="white" transform="rotate(0 533.5 405.5)"></rect>
			</g>
		</svg>
	)
}


