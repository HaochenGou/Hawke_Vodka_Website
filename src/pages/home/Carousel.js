import React,{Component} from 'react';
import Carousel from "react-spring-3d-carousel";
import  { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import './Carousel.css';





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
		content:<a href={process.env.PUBLIC_URL +"/product/" +37852889809047}><img width="380" height="400"src='/assets/img/Product1.webp' alt="1"/></a>
	  },
	  {
		key: uuidv4(),
		content: <a href={process.env.PUBLIC_URL +"/product/" + 41435485995159}><img width="380" height="400" src='/assets/img/Product2.webp' alt="2"/></a>
	  },
	  {
		key: uuidv4(),
		content:  <a href={process.env.PUBLIC_URL +"/product/" + 41435507064983}><img width="380" height="400" src='/assets/img/Product3.webp' alt="3"/></a>
	  },
	  {
		key: uuidv4(),
		content: <a href={process.env.PUBLIC_URL +"/product/" +41873399251095}><img width="380" height="400"src='/assets/img/Product4.webp' alt="4"/></a>
	  },
	  {
		key: uuidv4(),
		content:  <a href={process.env.PUBLIC_URL +"/product/" + 41907321995415}><img width="380" height="400" src='/assets/img/Product5.webp' alt="5"/></a>
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
		<div style={{ width: "40%", height: "500px", margin: "0 auto", backgroundImage: `url('/assets/img/test.jpg')`}}>
		<div class="startContainer">
				<form action="/shop">

  				<button class="button pulseBox button3">BUY</button>
				</form>
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
  