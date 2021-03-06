import React,{Component} from 'react';
import Carousel from "react-spring-3d-carousel";
import  { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { Link } from "react-router-dom";
import "./button.css";




export default class Example extends Component {
	state = {
	  goToSlide: 0,
	  offsetRadius: 2,
	  showNavigation: true,
	  config: config.gentle
	};
  
	slides = [
	  {
		key: uuidv4(),
		content:<Link to={process.env.PUBLIC_URL +"/product/" + 41435507064983}><img width="380" height="400"src='/assets/img/Product1.webp' alt="1" loading="lazy"/></Link>
	  },
	  {
		key: uuidv4(),
		content: <Link to={process.env.PUBLIC_URL +"/product/" + 37852889809047}><img width="380" height="400" src='/assets/img/Product2.webp' alt="2"loading="lazy"/></Link>
	  },
	  {
		key: uuidv4(),
		content:  <Link to={process.env.PUBLIC_URL +"/product/" + 41435485995159}><img width="380" height="400" src='/assets/img/Product3.webp' alt="3" loading="lazy"/></Link>
	  },
	  {
		key: uuidv4(),
		content: <Link to={process.env.PUBLIC_URL +"/product/" +41873399251095}><img width="380" height="400"src='/assets/img/Product4.webp' alt="4" loading="lazy"/></Link>
	  },
	  {
		key: uuidv4(),
		content:  <Link to={process.env.PUBLIC_URL +"/product/" + 41907321995415}><img width="380" height="400" src='/assets/img/Product5.webp' alt="5" loading="lazy"/></Link>
	  },
	  {
		key: uuidv4(),
		content:  <Link to={process.env.PUBLIC_URL +"/product/" + 41981615636631}><img width="380" height="400" src='/assets/img/Product6.webp' alt="6" loading="lazy"/></Link>
	  },
	 
	].map((slide, index) => {
	  return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
	});
  
	onChangeInput = (e) => {
	  this.setState({
		[e.target.name]: parseInt(e.target.value, 10) || 0
	  });
	};
  
	render() {
	  return (
		<div style={{ width: "100%", height: "500px",backgroundImage: `url('/assets/img/test.jpg')`}}>
		<div style={{ width: "45%", height: "100%", margin: "0 auto", backgroundImage: `url('/assets/img/test.jpg')`}}>
		<div className="container">
        <div className="row">
		<div className="bnt">
		<div className="single-testimonial text-center">
		<div className="col-lg-6 col-md-6 col-12 col-sm-6">
        <div className="slider-content-7 slider-animated-1">
		<div className="slider-btn-9 btn-hover">
            <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + "/shop"}
                >
                  BUY
            </Link>
        </div>
		</div>
		</div>
		</div>
		</div>
		</div>
		</div>
		
			<Carousel
				slides={this.slides}
				goToSlide={this.state.goToSlide}
				offsetRadius={this.state.offsetRadius}
				showNavigation={this.state.showNavigation}
				animationConfig={this.state.config}
				
			/>
			
		</div>
		</div>
	  );
	}
  }
  