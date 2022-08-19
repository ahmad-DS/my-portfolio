
import "./common.css";
import background from "../photos/Web_Programmer_01_generated.jpg"
const Home = () => {
	return (

		<div
		style={{ 
			backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/94/37/11/1000_F_294371110_kkfL65igE3zaw5oLf3cEaoZUe4bYORLy.jpg")` 
		  }} className="home">
			{/* <img className="bg" src="https://as2.ftcdn.net/v2/jpg/02/94/37/11/1000_F_294371110_kkfL65igE3zaw5oLf3cEaoZUe4bYORLy.jpg" alt="tech" /> */}
			<div className="intro">
				<h4>Hello!</h4>
				<h1 style={{ fontSize: "40px", fontWeight: "bolder" }} >I'm <span style={{
				fontFamily:"sans-serif",
				fontSize: "35px",
				letterSpacing: "2px",
				wordSpacing: "2px",
				fontWeight: "bold",
				textDecoration: "none",
				fontStyle:"",
				fontVariant: "normal",
				textTransform: "none",
 }}>Shakil Ahmad</span>
				</h1>
				<h1>A Full Stack Web Developer</h1>
			</div>
		</div>
	)
}
export { Home }