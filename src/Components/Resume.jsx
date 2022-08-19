import resume from "../photos/resume.jpg"

const Resume=()=>{
	return (
		<div style={{marginTop:"1rem"}}>
			<h1>Resume</h1>
			<img style={{width:"60%"}} src={resume} alt="shakil" />
		</div>
	)
}
export {Resume}