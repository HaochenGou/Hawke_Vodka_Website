import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactPlayer from 'react-player';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
      
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
            <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
               <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
                <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
          <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
          <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
          aria-controls="panel11a-content"
          id="panel11a-header"
        >
          <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
          aria-controls="panel12a-content"
          id="panel12a-header"
        >
          <ReactPlayer url='https://www.youtube.com/watch?v=q0hyYWKXF0Q' 
            playing = {true}
            muted = {true}
            width = '400px'
            height='380px'/>
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
