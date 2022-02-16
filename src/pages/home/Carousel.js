import React,{Component} from 'react';
import Carousel from "react-spring-3d-carousel";
import  { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import './Carousel.css';





export default class Example extends Component {
	state = {
	  goToSlide: 0,
	  offsetRadius: 2,
	  showNavigation: false,
	  config: config.gentle
	};
  
	slides = [
	  {
		key: uuidv4(),
		content: <img src='/assets/img/Product1.webp' alt="1" />
	  },
	  {
		key: uuidv4(),
		content: <img src='/assets/img/Product2.webp' alt="2" />
	  },
	  {
		key: uuidv4(),
		content: <img src='/assets/img/Product3.webp' alt="3" />
	  },
	  {
		key: uuidv4(),
		content: <img src='/assets/img/Product1.webp' alt="4" />
	  },
	  {
		key: uuidv4(),
		content: <img src='/assets/img/Product2.webp' alt="5" />
	  },
	  {
		key: uuidv4(),
		content: <img src='/assets/img/Product3.webp' alt="6" />
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
		<div style={{width: "100%", height: "500px",backgroundImage: `url('/assets/img/test.jpg')`}}>
		<div style={{ width: "50%", height: "500px", margin: "0 auto", backgroundImage: `url('/assets/img/test.jpg')`}}>
			<Carousel
				slides={this.slides}
				goToSlide={this.state.goToSlide}
				offsetRadius={this.state.offsetRadius}
				showNavigation={this.state.showNavigation}
				animationConfig={this.state.config}
				
			/>
			<div class="startContainer">
				<form action="/shop-list-standard">

  				<button class="button pulseBox button3">BUY</button>
				</form>
			</div>
			
		</div>
		</div>
	  );
	}
  }
  