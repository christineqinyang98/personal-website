import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/about.jpg',
    },
    {
        original: "images/Western.jpg",
    },
    {
        original: "images/musicbox.jpg",
    }
];


class About extends Component {
  render() {

    if(this.props.data){
        var aboutpic = "images/about.jpg";
        var bio = this.props.data.bio;
        var hobbies = this.props.data.hobbies;
        var hobbiespic = "images/hobbies.jpg";
    }

    return (
      <section id="about">
            <h1>About Me</h1>
            <div className="row">
                <div className="six columns">
                    <img className="about-pic" src={aboutpic} alt="stock image of relaxation" />
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
                    <img className="hobbies-pic" src={hobbiespic} alt="stock image of relaxation" />
                </div>
            </div>
      </section>
    );
  }
}

export default About;

