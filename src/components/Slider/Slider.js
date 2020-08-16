import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);
 
 
const Slider =()=>{
	 return(
  <AutoplaySlider cssModule={AwesomeSliderStyles} animation="cubeAnimation"
 		 play={true}
   	 cancelOnInteraction={false} // should stop playing on user interaction
   	 interval={6000}
    media={[
      {
        	source: 'https://1.bp.blogspot.com/-DwWS1bta2CE/XY0dnG6LUlI/AAAAAAAABAA/4DmGgsonrXsbd60TNG6QaG32QsHx1g1GACLcBGAsYHQ/s1600/829760.jpg',
      },
      {
        	source: 'https://www.supermama.me/system/App/Entities/Article/images/000/033/708/watermarked/%D9%85%D8%B3%D8%AA%D8%AD%D8%B6%D8%B1%D8%A7%D8%AA-%D8%AA%D8%AC%D9%85%D9%8A%D9%84-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9.jpg',
      },
      {
			source: 'https://www.almrsal.com/wp-content/uploads/2016/03/Natural-cosmetics.jpg',  
     },
     {
			source: 'https://3.bp.blogspot.com/-eaZywH0r4bY/VMo_RYBoztI/AAAAAAAAKIY/iPgifpDWSnc/s1600/13906_large.jpg',  
     },
     {
      source: 'https://www.carthagemarket.com/c/46-category_default/-.jpg',  
     },
     {
      source:'https://www.roro44.net/wp-content/uploads/2016/07/lkjhgds.jpg',
     }
    ]}
    >
   </AutoplaySlider>
);
}

export default Slider;