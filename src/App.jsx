import './App.css';
import About from "./features/About";
import Experience from "./features/Experience/Experience";
import Footer from "./features/Footer";
import Landing from "./features/Landing";
import Navbar from "./features/Navbar";
import Projects from "./features/Projects/Projects";

function App() {
	return (
		<section className="px-8">
			<Navbar />
			<Landing />
			<About />
			<Experience />
			<Projects />
			<Footer />
		</section>
	);
}

export default App
