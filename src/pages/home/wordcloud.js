
import React from 'react';
import TagCloud from 'react3dtagcloud';

export class Demo extends React.Component {
  render() {
    const tagName = ['Baby-x-Vodka', "William's London Dry", "Sir Peri Winkle's", 
	'Lady Sophia','Thick & Dirty','Scoundrel Rumbum',
	'Baby-x-Vodka',"Sir Peri Winkle's", 'Thick & Dirty','Baby-x-Vodka',
	 "William's London Dry", "Sir Peri Winkle's",
	 'Lady Sophia','Scoundrel Rumbum',
	"William's London Dry",'Baby-x-Vodka',"Sir Peri Winkle's", 'Thick & Dirty','Baby-x-Vodka',
	 "William's London Dry", "Sir Peri Winkle's", 
	'Lady Sophia','Thick & Dirty','Scoundrel Rumbum','Lady Sophia'];
	  return (
		<div className='cloud'
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
		  alignItems:"center",
		  backgroundImage: `url(https://images.pexels.com/photos/6985045/pexels-photo-6985045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
		  paddingRight:"250px",
          top: "0"
        }}
      >
            <TagCloud tagName={tagName} url="https://hawkeprohibition.com/shop" radius={260}></TagCloud>
			
		</div>
		
		
	  );
   }
}