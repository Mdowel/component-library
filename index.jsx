import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import BadgeList from "./components/Badge/BadgeList"
import Badge from './components/Badge/Badge';
import BannerList from './components/Banner/BannerList';
import Banner from './components/Banner/index';
import CardList from './components/Card/CardList';
import Card from './components/Card/index';
import TestimonialList from './components/Testimonial/TestimonialList';
import TestimonialWithPic from './components/Testimonial/indexWithPic';
import TestimonialNoPic from './components/Testimonial/indexNoPic';
import ButtonList from './components/Button/ButtonList';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <h1 className="section-heading">Badges</h1>
      <BadgeList>
        <Badge shape="square" color="white"></Badge>
        <Badge shape="square" color="red"></Badge>
        <Badge shape="square" color="yellow"></Badge>
        <Badge shape="square" color="green"></Badge>
        <Badge shape="square" color="blue"></Badge>
        <Badge shape="square" color="indigo"></Badge>
        <Badge shape="square" color="purple"></Badge>
        <Badge shape="square" color="pink"></Badge>
      </BadgeList>
      <BadgeList showCode={true}>
        <Badge shape="pill" color="white"></Badge>
        <Badge shape="pill" color="red"></Badge>
        <Badge shape="pill" color="yellow"></Badge>
        <Badge shape="pill" color="green"></Badge>
        <Badge shape="pill" color="blue"></Badge>
        <Badge shape="pill" color="indigo"></Badge>
        <Badge shape="pill" color="purple"></Badge>
        <Badge shape="pill" color="pink"></Badge>
      </BadgeList>

      <h1 className="section-heading">Banners</h1>
      <BannerList>
        <Banner variant="success">
          <Banner.Heading></Banner.Heading>
          <Banner.Text></Banner.Text>
        </Banner>
        <Banner variant="success">
          <Banner.Heading></Banner.Heading>
        </Banner>
        <Banner variant="warning">
          <Banner.Heading></Banner.Heading>
          <Banner.Text></Banner.Text>        
        </Banner>
        <Banner variant="warning">
          <Banner.Heading></Banner.Heading>
        </Banner>
        <Banner variant="error">
          <Banner.Heading></Banner.Heading>
          <Banner.Text></Banner.Text>        
        </Banner>
        <Banner variant="error">
          <Banner.Heading></Banner.Heading>
        </Banner>
        <Banner variant="neutral">
          <Banner.Heading></Banner.Heading>
          <Banner.Text></Banner.Text>        
        </Banner>
        <Banner variant="neutral">
          <Banner.Heading></Banner.Heading>
        </Banner>
      </BannerList>

      <h1 className="section-heading">Cards</h1>
      <CardList>
        <Card>
          <Card.Icon></Card.Icon>
          <Card.Heading></Card.Heading>
          <Card.Text></Card.Text>
        </Card>
        <Card>
          <Card.Icon></Card.Icon>
          <Card.Heading></Card.Heading>
          <Card.Text></Card.Text>
        </Card>
      </CardList>

      <h1 className="section-heading">Testimonials</h1>
      <TestimonialList>
        <TestimonialWithPic 
          orientation="horizontal" 
          backgroundColor="#2545B8" 
          textColor="#FFFFFF" 
          boxShadow="0 0 10px rgb(49, 22, 173)"
          imageSrc=""
          imageAltText="">
          <TestimonialWithPic.Quote></TestimonialWithPic.Quote>
          <TestimonialWithPic.Footer authorName="" authorTitle="" companyName=""></TestimonialWithPic.Footer>
        </TestimonialWithPic>
        <TestimonialWithPic 
          orientation="vertical" 
          backgroundColor="#2545B8" 
          textColor="#FFFFFF" 
          boxShadow="0 0 10px rgb(49, 22, 173)"
          imageSrc=""
          imageAltText="">
          <TestimonialWithPic.Quote></TestimonialWithPic.Quote>
          <TestimonialWithPic.Footer authorName="" authorTitle="" companyName=""></TestimonialWithPic.Footer>
        </TestimonialWithPic>
      </TestimonialList>

      <TestimonialList showCode="true">
        <TestimonialNoPic 
          orientation="horizontal" 
          backgroundColor="#F3F4F6" 
          textColor="#1F2937" >
          <TestimonialNoPic.Header logo="" companyName=""></TestimonialNoPic.Header>
          <TestimonialNoPic.Quote></TestimonialNoPic.Quote>
          <TestimonialNoPic.Footer authorName="" authorTitle="" companyName=""></TestimonialNoPic.Footer>
        </TestimonialNoPic>
        <TestimonialNoPic 
          orientation="vertical" 
          backgroundColor="#F3F4F6"
          textColor="#1F2937">
          <TestimonialNoPic.Header logo="" companyName=""></TestimonialNoPic.Header>
          <TestimonialNoPic.Quote></TestimonialNoPic.Quote>
          <TestimonialNoPic.Footer authorName="" authorTitle="" companyName=""></TestimonialNoPic.Footer>
        </TestimonialNoPic>
      </TestimonialList>
      
      <h1 className="section-heading">Menu</h1>
      <br></br>
      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Option 1</Menu.Item>
          <Menu.Item>Option 2</Menu.Item>
          <Menu.Item>Option 3</Menu.Item>
          <Menu.Item>Option 4</Menu.Item>
          <Menu.Item>Option 5</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <h1 className="section-heading">Buttons</h1>
      <ButtonList>
        <Button size="sm" variant="success">success</Button>
        <Button size="" variant="warning">warning</Button>
        <Button size="lg" variant="danger">danger</Button>
      </ButtonList>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
