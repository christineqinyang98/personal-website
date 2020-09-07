import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Carousel from 'react-elastic-carousel';

const images = [
    {
        className: 'about-pic',
        src: 'images/about.jpg',
        altText: 'about pic'
    },
    {
        className: 'about-pic',
        src: 'images/Western.jpg',
        altText: 'western pic'
    },
    {
        className: 'about-pic',
        src: 'images/musicbox.jpeg',
        altText: 'musicbox pic'
    }
];

const interests = [
    {
        src: 'images/hobbies.jpg',
        altText: 'about pic'
    },
    {
        src: 'images/baking.jpg',
        altText: 'western pic'
    },
    {
        src: 'images/himym.jpg',
        altText: 'musicbox pic'
    },
    {
        src: 'images/office.jpg',
        altText: 'musicbox pic'
    },
    {
        src: 'images/oasis-1.jpg',
        altText: 'musicbox pic'
    },
    {
        src: 'images/nct.jpg',
        altText: 'musicbox pic'
    }
];

class About extends Component {
  render() {

    if(this.props.data){
        var bio = this.props.data.bio;
        var hobbies = this.props.data.hobbies;
        var hobbiespic = "images/hobbies.jpg";
    }

    return (
      <section id="about">
            <h1>About Me</h1>
            <div className="row">
                <div className="six columns">
                    <Carousel itemsToShow={1} showArrows={false} children={images.map(images => <img src={images.src}/>)}>
                    </Carousel>
                </div>
                <div className="six columns main-col">
                    <h2>Introduction</h2>
                    <p>{bio}</p>
                </div>
            </div>
            <div className="row 2">
                <div className="six columns main-col">
                    <h2 className="hobbies">Hobbies/Interests</h2>
                    <p className="hobbies">{hobbies}</p>
                </div>
                <div className="six columns">
                    <Carousel itemsToShow={1} showArrows={false} children={interests.map(interests => <img src={interests.src} />)}>
                    </Carousel>
                </div>
            </div>
      </section>
    );
  }
}

export default About;

