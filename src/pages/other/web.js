import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import { Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);
const card1 = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
      Android App Development
      </Typography>
      <br></br>
      <Typography variant="body2">
      We build high-performance, secure, 
      and intuitive Android mobile applications to provide the ultimate user experience, 
      help businesses improve their conversion rates, and boost customer loyalty. 
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href="https://en.wikipedia.org/wiki/Java_(programming_language)" rel="noopener noreferrer" target= "_blank">Learn More</Button>
    </CardActions>
  </React.Fragment>
);
const card2 = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
      iOS App Development 
      </Typography>
      <br></br>
      <Typography variant="body2">
        Develop, host, optimize high-preformance crossplatform application 
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href="https://en.wikipedia.org/wiki/Progressive_web_application" rel="noopener noreferrer" target= "_blank">Learn More</Button>
    </CardActions>
  </React.Fragment>
);
const card3 = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
      Windows App Development 
      </Typography>
      <br></br>
      <Typography variant="body2">
        Develop, host, optimize high-preformance crossplatform application 
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href="https://en.wikipedia.org/wiki/Progressive_web_application" rel="noopener noreferrer" target= "_blank">Learn More</Button>
    </CardActions>
  </React.Fragment>
);
const card4 = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
      PWS App Development
      </Typography>
      <br></br>
      <Typography variant="body2">
        Develop, host, optimize high-preformance cross-platform application 
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href="https://en.wikipedia.org/wiki/Progressive_web_application" rel="noopener noreferrer" target= "_blank">Learn More</Button>
    </CardActions>
  </React.Fragment>
);
const card5 = (
  <React.Fragment>
  <CardContent>
    <Typography variant="h5" component="div">
    Website Development
    </Typography>
    <Typography variant="body2">
      Develop, host, optimize high-preformance website Development, SEO 
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" href="https://en.wikipedia.org/wiki/Progressive_web_application" rel="noopener noreferrer" target= "_blank">Learn More</Button>
  </CardActions>
</React.Fragment>
);
const card6 = (
  <React.Fragment>
  <CardContent>
    <Typography variant="h5" component="div">
    Programming language Service
    </Typography>
    <br></br>
    <Typography variant="body2">
      We provide Service for Python, Java, JavaScript, C++, 
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" href="https://en.wikipedia.org/wiki/Progressive_web_application" rel="noopener noreferrer" target= "_blank">Learn More</Button>
  </CardActions>
</React.Fragment>
);
const card7 = (
  <React.Fragment>
  <CardContent>
    <Typography variant="h5" component="div">
    Frame Work
    </Typography>
    <Typography variant="body2">
      
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" href="https://en.wikipedia.org/wiki/Progressive_web_application" rel="noopener noreferrer" target= "_blank">Learn More</Button>
  </CardActions>
</React.Fragment>
);

const Web = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Hawke Prohibition Distilleries | Web Services </title>
        <meta
          name="description"
          content="Web Services page of Hawke Prohibition Distilleries."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Web Services
      </BreadcrumbsItem>
     
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <p style={{margin: "100px"}}></p>
        <Stack spacing={5}>
        <Stack direction={{ xs: 'column', sm: 'row'}} spacing={{ xs: 1, sm: 2, md: 8 }}>
        <Item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card1}</Card>
          </Box>
        </Item>
        <Item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card2}</Card>
          </Box>
        </Item>
        <Item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card3}</Card>
          </Box>
        </Item>
        <Item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card4}</Card>
          </Box>
        </Item>
        <Item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card5}</Card>
          </Box>
        </Item>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row'}} spacing={{ xs: 1, sm: 2, md: 8 }}>
        <Item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card6}</Card>
          </Box>
        </Item>
        <Item>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card7}</Card>
          </Box>
        </Item>
        </Stack>
        </Stack>
        <p style={{margin: "100px"}}></p>  
        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

Web.propTypes = {
  location: PropTypes.object
};

export default Web;
