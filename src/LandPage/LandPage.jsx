import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './LandPage.css'

export default function LandPage() {
    const navigate = useNavigate(); // Use useNavigate hook

  const handleGetStarted = () => {
    navigate('/signup'); // Navigate to the '/signup' page
  };

  const handleLearnMore = () => {
    navigate('/faq'); // Navigate to the '/faq' page
  };
  return (
    <>
    <Navbar/>

        <p className='content-text'>
        The page should contain sections/headings for: Welcome to Journaly, with some text under; How Journaly works, with some text under; and How to use Journaly, with some text under
After the above sections, there should be a Get Started Now button that leads to the Login/Signup page
      </p>
      <div className="content-btn">
      <button className="get-started-button" onClick={handleGetStarted}>
        Get Started
      </button>
      <button className="learn-more-button" onClick={handleLearnMore}>
        Learn More
      </button>
      </div>
      
        <div className="footer-content">
        <h1 className="Footer-text">Do Hard Things</h1>
        </div>
    </>
  
  )
}
