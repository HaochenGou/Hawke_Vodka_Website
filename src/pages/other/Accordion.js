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
        <b style={{ color: "#3498db", fontSize: "30px" }}>Ingredients</b><br></br>
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
      spacing={2}
      >
      <Item>
      <img src="assets/img/recipes/2.webp" alt="recipes"/>
      </Item>
      <Stack>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>Ingredients</b><br></br>
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
      spacing={2}
      >
      <Item>
      <img src="assets/img/recipes/3.webp" alt="recipes"/>
      </Item>
      <Stack>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>Ingredients</b><br></br>
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
      spacing={2}
      >
      <Item>
      <img src="assets/img/recipes/4.webp" alt="recipes"/>
      </Item>
      <Stack>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>Ingredients</b><br></br>
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
      <img src="assets/img/recipes/5.webp" alt="recipes"/>
      </Item>
      <Stack style={{width:'40%'}}>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>Ingredients</b><br></br>
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
      <img src="assets/img/recipes/6.webp" alt="recipes"/>
      </Item>
      <Stack style={{width:"40%"}}>
        <Stack>
        <b style={{ color: "#3498db", fontSize: "30px" }}>Ingredients</b><br></br>
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
        <b style={{ color: "#3498db", fontSize: "30px" }}>Ingredients</b><br></br>
        <p style={{fontSize:"20px"}}> <i className="fa fa-circle" /> 50 ml Hope On Hopkins London Dry Gin<br></br>
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
        <b style={{ color: "#3498db", fontSize: "30px" }}>Ingredients</b><br></br>
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
