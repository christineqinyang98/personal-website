import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.province;
      var country = this.props.data.address.country;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
        var message = this.props.data.contactmessage;
        var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

                <h1><span>Get In Touch.</span></h1>

            </div>
            <div className="columns contact-details">
                    <h2>Contact Details</h2>
                <p className="address">
                    <span>{name}</span><br />
                    <span>{city}, {state}, {country}</span> <br />
                    <span>{phone}</span><br />
                    <span>{email}</span>
                </p>
            </div>
            <div className="columns download">
                <p>
                    <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
            </div>
    </div>
    <div className="widget widget_contact">
				
    </div>
      </section>
    );
  }
}

export default Contact;
