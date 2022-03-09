import * as React from 'react';
import {Stack, Divider} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function SimpleAccordion() {
  return (
    <div>
      <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      >
      
      <img src="assets/img/recipes/1.webp" alt="recipes"/>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           
            <p style={{margin: "100px"}}></p>
            <Typography fontSize="20px">Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          combine the gin, lemon juice, and simple syrup with ice into a shaker and shake until chilled. Strain into a glass filled with crushed or pebble ice, then add the crème de mûre. Garnish with a lemon wheel and a blackberry.

          </Typography>
        </AccordionDetails>
      </Accordion>
    
      </Stack>

      <p style={{margin: "100px"}}></p>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <img src="assets/img/recipes/2.webp" alt="recipes"/>
            <p style={{margin: "100px"}}></p>
            <Typography fontSize="20px">Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <p style={{margin: "100px"}}></p>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
            <img src="assets/img/recipes/3.webp" alt="recipes"/>
            <p style={{margin: "100px"}}></p>
            <Typography fontSize="20px">Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <p style={{margin: "100px"}}></p>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <img src="assets/img/recipes/4.webp" alt="recipes"/>
            <p style={{margin: "100px"}}></p>
            <Typography fontSize="20px">Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <p style={{margin: "100px"}}></p>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
            <img src="assets/img/recipes/5.webp" alt="recipes"/>
            <p style={{margin: "100px"}}></p>
            <Typography fontSize="20px">Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <p style={{margin: "100px"}}></p>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <img src="assets/img/recipes/6.webp" alt="recipes"/>
            <p style={{margin: "100px"}}></p>
            <Typography fontSize="20px">Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <p style={{margin: "100px"}}></p>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <img src="assets/img/recipes/7.webp" alt="recipes"/>
            <p style={{margin: "100px"}}></p>
            <Typography fontSize="20px">Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          combine all of the ingredients in a mixing glass and stir with ice until chilled. Strain into a chilled glass, and garnish with your choice of a lemon twist or olive.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <p style={{margin: "100px"}}></p>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <img src="assets/img/recipes/8.webp" alt="recipes"/>
            <p style={{margin: "100px"}}></p>
            <Typography fontSize="20px">Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <p style={{margin: "100px"}}></p>
     
    </div>
  );
}
