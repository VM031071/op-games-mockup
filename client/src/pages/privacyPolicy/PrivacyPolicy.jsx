import { Link } from 'react-router';

function PrivacyPolicy() {
  try {
    // Debugging lines. *DELETE*
    console.log("Hello world! (PrivacyPolicy.jsx)");
    //ErrorFunction();
  
    return (
      <>
        <div className="privacyPolicyRoot">
          <h1>
            Privacy Policy of <Link to="../">https://overpowered-games.com</Link>
          </h1>
          <p>
            Last updated: June 2025
          </p>
          <p>
            We are Overpowered Games. This privacy policy outlines how we collect, use, and protect your personal
            information when you use our services. 
          </p>
          <p>
            You can contact us at admin@overpowered-games.com.
          </p>

          <h2>
            Table of Contents
          </h2>
          <ul>
            <li><a href="#ppSec1">Introduction</a></li>
            <li><a href="#ppSec2">Contact information</a></li>
            <li><a href="#ppSec3">Types of data collected</a></li>
            <li><a href="#ppSec4">Mode and place of processing personal data</a></li>
            <li><a href="#ppSec5">Detailed information on the processing of personal data</a></li>
            <li><a href="#ppSec6">Further information</a></li>
            <li><a href="#ppSec7">Your rights based on the General Data Protection Regulation (GDPR)</a></li>
            <li><a href="#ppSec8">Further information if you reside in Switzerland</a></li>
            <li><a href="#ppSec9">Further information if you reside in Brazil</a></li>
            <li><a href="#ppSec10">Further information if you reside in California</a></li>
            <li><a href="#ppSec11">Further information if you reside in Virginia</a></li>
            <li><a href="#ppSec12">Further information if you reside in Colorado</a></li>
            <li><a href="#ppSec13">Further information if you reside in Connecticut</a></li>
            <li><a href="#ppSec14">Further information if you reside in Utah</a></li>
            <li><a href="#ppSec15">Additional information about data collection and processing</a></li>
            <li><a href="#ppSec16">Definitions and legal references</a></li>
          </ul>

          <h2 id="ppSec1">
            Introduction
          </h2>
          <p>
            <strong>What is this policy about?</strong>
          <br></br>
            This document explains how this website collects, uses, and protects your personal data to achieve the
            purposes outlined in this document.
          </p>
          <p>
            <strong>What is personal data?</strong>
          <br></br>
            Personal data refers to information that can be used to identify you directly or indirectly. This
            includes details such as first name, last name, email address, tracking technologies (like cookies or
            tracking pixels), user activity, and device information. You can find detailed information on each
            type of personal data collected in dedicated sections of this privacy policy or in text shown before
            data is collected.
          </p>

          <h2 id="ppSec2">
            Contact Information
          </h2>
          <p>
            <strong>Address:</strong>
            <br></br>
            P.O. Box 158
            <br></br>
            Brookshire, Texas  77423-0158
            <br></br>
            United States
          </p>
          <p>
            <strong>Email:</strong> admin@overpowered-games.com
          </p>
          <p>
            <strong>Phone:</strong> (832)-436-3293
          </p>

          <h2 id="ppSec3">
            Types of data collected
          </h2>
          <p>
            The types of personal data that this website collects, by itself or through third parties, may include: 
          </p>
          <ul>
            <li>first name;</li>
            <li>last name;</li>
            <li>email address;</li>
            <li>trackers;</li>
            <li>usage data</li>
          </ul>
          <p>
            Complete details on each type of personal data collected are provided in the dedicated sections of this
            privacy policy or by specific explanation texts displayed prior to the data collection. personal data
            may be freely provided by you, or, in case of Usage data, collected automatically when using this
            website. Unless specified otherwise, all data requested by this website is mandatory and failure to
            provide this data may make it impossible for this website to provide its services. 
          </p>
          <p>
            In cases where this website specifically states that some personal data is not mandatory, you are free
            not to communicate this data without consequences to the availability or the functioning of the service. 
          </p>
          <p>
            Any use of cookies – or of other tracking tools — by this website or by the owners of third-party
            services used by this website serves the purpose of providing the service required by you, in addition
            to any other purposes described in the present document.
          </p>
          <p>
            You are responsible for any third-party personal data obtained, published or shared through this website.
          </p>
        </div>
      </>
    );
  } catch (error) {
    console.error("error at PrivacyPolicy");
  };
};

export default PrivacyPolicy;