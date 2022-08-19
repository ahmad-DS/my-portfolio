import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import apollo1 from "../projects/Apollo1.png"
import apollo2 from "../projects/Apollo2.png"
import apollo3 from "../projects/Apollo3.png"
import hp1 from "../projects/Headphone1.jpeg";
import hp2 from "../projects/Headphone2.jpeg";
import hp3 from "../projects/Headphone3.jpeg";
import {Link} from 'react-router-dom';

const apollo = [apollo1, apollo2, apollo3];
const headpones=[hp1,hp3,hp3];
console.log("shakil ",hp1)

console.log(apollo1)
const Projects = () => {
	const navigate=useNavigate()
	const [curr, setCurr] = useState(0);
	
	useEffect(() => {
		
		setTimeout(() => {
			if (curr == 2) {
				setCurr(0);
				
			}else{
			setCurr(c=>c+1);
			
			}
			console.log(curr)
		},2000)
	}, [curr])

	return (
		<div >
			<h1>My Projects</h1>
			<div style={{ width: "400px",textAlign:"left",border:"1px red solid"}}>
				<h2>May 2022</h2>
				<img className="project-img" src={apollo[curr]} alt="home" />
				<h2>Apollo 24X7 </h2>
				<p>
					This website is clone of Apollo pharmacy 24X7
					finished in a week with four other members;
					I worked in the cart page to make fully functional
				</p>
				<div style={{display:"flex",justifyContent:"space-around"}}>
					<button onClick={()=>{
					window.location.href="https://github.com/ahmad-DS/WEB18-APOLLO24X7"
					}}>Github</button>
					<a href="https://www.google.com">Google</a>
					<button
					onClick={()=>{
						window.location.href="https://calm-alpaca-414005.netlify.app/"
						}}
					>Deployment Link</button>
				</div>
			</div>

			<div style={{ width: "400px",textAlign:"left",border:"1px red solid"}}>
				<h2>May 2022</h2>
				<img className="project-img" src={headpones[curr]} alt="home" />
				<h2>Apollo 24X7 </h2>
				<p>
					This website is clone of Apollo pharmacy 24X7
					finished in a week with four other members;
					I worked in the cart page to make fully functional
				</p>
				<div style={{display:"flex",justifyContent:"space-around"}}>
					<button>Deployment Link</button>
					<button>Github</button>
				</div>
			</div>
		</div>
	)
}
export { Projects }