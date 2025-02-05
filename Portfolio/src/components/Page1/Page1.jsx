// React Portfolio with Navy Blue and White Theme
import React, { useState, useEffect } from 'react';
import './Page1.css';
import profileImage from './mustafa.jpg'


const Page1 = () => {
  
    const sentences = [
        'Mustafa Hussain. ',
        'a Frontend Developer.',
        'a Software Engineer.',
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      const [currentText, setCurrentText] = useState('');
      const [isDeleting, setIsDeleting] = useState(false);
    
      const typingSpeed = 50; // Speed of typing
      const pauseDuration = 50; // Pause before deleting
    
      useEffect(() => {
        const currentSentence = sentences[currentIndex];
    
        let typingTimeout;
    
        if (isDeleting) {
          typingTimeout = setTimeout(() => {
            setCurrentText((prev) => prev.substring(0, prev.length - 1));
          }, typingSpeed);
        } else {
          typingTimeout = setTimeout(() => {
            setCurrentText((prev) => currentSentence.substring(0, prev.length + 1));
          }, typingSpeed);
        }
    
        if (!isDeleting && currentText === currentSentence) {
          typingTimeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % sentences.length);
        }
    
        return () => clearTimeout(typingTimeout);
      }, [currentText, isDeleting, currentIndex, sentences]);
    
  return (
    
    
    <div className="Page1" id='Page1'>
        
        <main className="main-content">
        <div className="text-section">
          <h2 className='welcome'>Welcome to My Portfolio</h2>
          <h1>
      <p className='effect'>Hi, I'm  
       <span className="typing-effect"> {currentText}</span>
      <span className="cursor">|</span>
      </p>
    </h1>
    <p className='button'><a href="mailto:mustafaHussain3030@gmail.com" className="email-button">
            Email Me
          </a></p>

        </div>
        <div className="image-section">
          <img src={profileImage} alt="" />
        </div>
      </main>
      <br />
      <br />
      <br />
    </div>
    
  );
};

export default Page1;