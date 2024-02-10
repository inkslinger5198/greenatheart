import React, {useEffect} from 'react';
import './contact.css';

import { Header } from './containers';

const Contact = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'Contact | GreenAtHeart';
    
    // Optionally, reset the title when the component unmounts
    return () => {
      document.title = 'GreenAtHeart';
    };
  }, []);
  return (
    <div>
      <Header />
    </div>
  )
}

export default Contact
