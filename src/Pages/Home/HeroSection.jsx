import { Link } from "react-scroll"; 
// Importing the Link component from react-scroll

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, this is</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Christy Ho</span>{""}
                    </h1>
                    <p className="hero--section-description">
                        Welcome to my portfolio!
                    </p>
                </div>
                <Link
                     activeClass="navbar--active-content"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                     to="Contact"
                     className="btn btn-primary"
                >
                Get In Touch
                </Link>
        
            </div>
            <div className="hero--section--img">
                <img src="./img/christy2.jpg" alt="Hero Section" />
            </div>
        </section>
    );
}
