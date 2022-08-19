import "./common.css"

const About = () => {
	return (
		<div>
			<h1>About Me</h1>
			<div style={{width: "500px",margin:"auto" }}>
				<div className="info">
					<h3 className="address-left">Name:</h3>
					<h3 className="address-right"> Shakil Ahmad</h3>
				</div>
				<div className="info">
					<h3 className="address-left">Date of Birth:</h3>
					<h3 className="address-right">August 31,1997</h3>
				</div>
				<div className="info">
					<h3 className="address-left">Address:</h3>
					<h3 className="address-right">Deoghar,Jharkhand</h3>
				</div>
				<div className="info">
					<h3 className="address-left">Zip code:</h3>
					<h3 className="address-right">814146</h3>
				</div>
				<div className="info">
					<h3 className="address-left">Email:</h3>
					<h3 className="address-right">ahmad.shakil444@gmail.com</h3>
				</div>
				<div className="info">
					<h3 className="address-left">Phone:</h3>
					<h3 className="address-right">9771843653</h3>
				</div>
			</div>


		</div>
	)
}
export { About }