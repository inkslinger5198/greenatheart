import React, {useEffect} from 'react';
import './member.css';

import { FAQ, Header, ProgressBar } from './containers';

const Member = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'Join Now | GreenAtHeart';
    
    // Optionally, reset the title when the component unmounts
    return () => {
      document.title = 'GreenAtHeart';
    };
  }, []);
  return (
    <div className="Member">
      <Header />
      <ProgressBar />
      <FAQ />
    </div>
  )
}

export default Member
