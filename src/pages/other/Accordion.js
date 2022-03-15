import * as React from 'react';
import {Stack} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';


export default function SimpleAccordion() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Stack
      direction="row"
      spacing={5}
      >
      <Item>
      <img src="assets/img/recipes/1.webp" alt="recipes"/>
      </Item>
      <Stack style={{width:'40%'}}>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>BRAMBLE Ingredients</b><br></br>
        <p style={{fontSize:"20px"}}> <i className="fa fa-circle" /> 2 oz. gin<br></br>
        <i className="fa fa-circle" /> 1 oz. lemon juice<br></br>
        <i className="fa fa-circle" /> ¾ oz. crème de mûre<br></br>
        <i className="fa fa-circle" /> ½ oz. simple syrup<br></br>
        <i className="fa fa-circle" /> Garnish: Lemon wheel, blackberry
        </p><br></br>
        </Stack>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           
        <Typography fontSize="25px">Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="20px">
          Combine the gin, lemon juice, and simple syrup with ice into a shaker and shake until chilled. Strain into a glass filled with crushed or pebble ice, then add the crème de mûre. Garnish with a lemon wheel and a blackberry.

          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>
    
      </Stack>

      <p style={{margin: "100px"}}></p>


      <Stack
      direction="row"
      spacing={5}
      >
      <Item>
      <img src="assets/img/recipes/2.webp" alt="recipes"/>
      </Item>
      <Stack style={{width:'40%'}}>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>GIN & TONIC Ingredients</b><br></br>
        <p style={{fontSize:"20px"}}> <i className="fa fa-circle" /> 25 ml William’s London Dry Gin<br></br>
        <i className="fa fa-circle" /> 75 ml ml Tonic Watere<br></br>
        <i className="fa fa-circle" /> lemon and a sprig of rosemary<br></br>
        </p><br></br>
        </Stack>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           
        <Typography fontSize="25px">Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="20px">
            1. Pour the gin followed by the tonic into a glass filled with ice.<br></br>
            2. Serve with a slice of lemon and a sprig of rosemary.
         
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>
    
      </Stack>

      <p style={{margin: "100px"}}></p>

      <Stack
      direction="row"
      spacing={5}
      >
      <Item>
      <img src="assets/img/recipes/3.webp" alt="recipes"/>
      </Item>
      <Stack style={{width:'40%'}}>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>GIN FIZZ Ingredients</b><br></br>
        <p style={{fontSize:"20px"}}> <i className="fa fa-circle" /> 2 oz. gin<br></br>
        <i className="fa fa-circle" /> ¾ oz. simple syrup<br></br>
        <i className="fa fa-circle" /> ¾ oz. heavy cream<br></br>
        <i className="fa fa-circle" /> ½ oz. lime juice<br></br>
        <i className="fa fa-circle" /> ½ oz. lemon juice<br></br>
        <i className="fa fa-circle" /> 2 drops of orange flower water<br></br>
        <i className="fa fa-circle" /> 1 egg white<br></br>
        <i className="fa fa-circle" /> Club soda<br></br>
        </p><br></br>
        </Stack>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           
        <Typography fontSize="25px">Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="20px">
          Combine all ingredients except for the soda into a cocktail shaker without ice and shake for fifteen to twenty seconds until the ingredients are thoroughly combined. Then add ice and shake for another fifteen to twenty seconds until fully diluted and chilled. Pour into a glass and slowly top with the soda water, creating a thick foam at the top of the glass. Optionally, add two drops of orange flower water to the top of the foam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>
    
      </Stack>

      <p style={{margin: "100px"}}></p>


      <Stack
      direction="row"
      spacing={5}
      >
      <Item>
      <img src="assets/img/recipes/4.webp" alt="recipes"/>
      </Item>
      <Stack style={{width:'40%'}}>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>GIN MARTINI Ingredients</b><br></br>
        <p style={{fontSize:"20px"}}> <i className="fa fa-circle" /> 2 oz. gin<br></br>
        <i className="fa fa-circle" /> 1 oz. dry vermouth<br></br>
        <i className="fa fa-circle" /> Garnish: Lemon twist or olive
        </p><br></br>
        </Stack>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           
        <Typography fontSize="25px">Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="20px">
          Combine all of the ingredients in a mixing glass and stir with ice until chilled. Strain into a chilled glass, and garnish with your choice of a lemon twist or olive.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>
    
      </Stack>

      <p style={{margin: "100px"}}></p>


      <Stack
      direction="row"
      spacing={5}
      >
      <Item>
      <img src="assets/img/recipes/5.webp" alt="recipes"/>
      </Item>
      <Stack style={{width:'40%'}}>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>NEGRONI Ingredients</b><br></br>
        <p style={{fontSize:"20px"}}> <i className="fa fa-circle" /> 1 oz. gin<br></br>
        <i className="fa fa-circle" /> 1 oz. Campari<br></br>
        <i className="fa fa-circle" /> 1 oz. sweet vermouth<br></br>
        <i className="fa fa-circle" /> Garnish: orange peel
        </p><br></br>
        </Stack>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           
        <Typography fontSize="25px">Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="20px">
          To make a classic Negroni, mix equal parts gin, Campari, and sweet vermouth with ice. Strain over ice into a rocks glass and garnish with an orange twist.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>
    
      </Stack>

      <p style={{margin: "100px"}}></p>


      <Stack
      direction="row"
      spacing={5}
      >
      <Item>
      <img src="assets/img/recipes/6.webp" alt="recipes"/>
      </Item>
      <Stack style={{width:"40%"}}>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>PURPLE SUMMER KISS Ingredients</b><br></br>
        <p style={{fontSize:"20px"}}> <i className="fa fa-circle" /> 2 oz. gin<br></br>
        <i className="fa fa-circle" /> 1 oz. lemon juice<br></br>
        <i className="fa fa-circle" /> ¾ oz. crème de mûre<br></br>
        <i className="fa fa-circle" /> ½ oz. simple syrup<br></br>
        <i className="fa fa-circle" /> Garnish: Lemon wheel, blackberry
        </p><br></br>
        </Stack>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           
        <Typography fontSize="25px">Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="20px">
          Combine the gin, lemon juice, and simple syrup with ice into a shaker and shake until chilled. Strain into a glass filled with crushed or pebble ice, then add the crème de mûre. Garnish with a lemon wheel and a blackberry.

          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>
    
      </Stack>

      <p style={{margin: "100px"}}></p>


      <Stack
      direction="row"
      spacing={5}
      >
      <Item>
      <img src="assets/img/recipes/7.webp" alt="recipes"/>
      </Item>
      <Stack style={{width:"40%"}}>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>TOM COLLINS Ingredients</b><br></br>
        <p style={{fontSize:"20px"}}> <i className="fa fa-circle" /> 50 ml William’s London Dry Gin<br></br>
        <i className="fa fa-circle" /> 25 ml lemon juice<br></br>
        <i className="fa fa-circle" /> 15 ml sugar syrup<br></br>
        <i className="fa fa-circle" /> Soda water<br></br>
        <i className="fa fa-circle" /> Lemon
        </p><br></br>
        </Stack>
      
      <Accordion> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           
        <Typography fontSize="25px">Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="20px">
          1. Mix the gin, lemon juice and sugar syrup over ice.<br></br>
          2. Pour into a tall glass and top with soda water.<br></br>
          3. Garnish with a lemon slice.<br></br>

          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>
    
      </Stack>

      <p style={{margin: "100px"}}></p>


      <Stack
      direction="row"
      spacing={5}
      >
      <Item>
      <img src="assets/img/recipes/8.webp" alt="recipes"/>
      </Item>
      <Stack style={{width:"40%"}}>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>WINKLE 75 Ingredients</b><br></br>
        <p style={{fontSize:"20px"}}> <i className="fa fa-circle" /> 1 oz. gin<br></br>
        <i className="fa fa-circle" /> 2 oz. champagne<br></br>
        <i className="fa fa-circle" /> ½ oz. simple syrup<br></br>
        <i className="fa fa-circle" /> ½ oz. lemon juice<br></br>
        <i className="fa fa-circle" /> Garnish: Lemon twist
        </p><br></br>
        </Stack>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           
        <Typography fontSize="25px">Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="20px">
          Combine the lemon juice, simple syrup, and gin in a shaker and shake with ice. Strain into a chilled glass and top with champagne and a lemon twist.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>
    
      </Stack>

      <p style={{margin: "100px"}}></p>
     
    </div>
  );
}
