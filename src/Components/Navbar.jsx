import { useRef, useState } from "react"
import "./Navbar.css"

const tabs = ["Home", "About", "Resume", "Skills", "Projects", "Contact"]
export default function () {
	const [active, setActive] = useState("")


	return (

		<div className="nav">
			<div className="logo">
				<h1>Shakil Ahmad</h1>
			</div>
			<div className="tabs">
				{tabs.map((el, i) => {
					return (<h3
						className={active == i ? "active" : ""}
						key={i}
						onMouseOver={(e) => {
							console.log(e.target)
							setActive(i)
						}
						}
					>{el}</h3>)
				})}
			</div>

		</div>
	)
}

