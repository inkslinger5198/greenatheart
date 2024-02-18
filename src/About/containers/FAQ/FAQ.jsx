import React, { useEffect } from 'react';
import './faq.css';
import  { FaChevronDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const FAQ = () => {
    useEffect(() => {
        const faqItems = document.querySelectorAll('.faq');

        const toggleFaq = (event) => {
            event.currentTarget.classList.toggle('active');
        };

        faqItems.forEach(faq => faq.addEventListener('click', toggleFaq));

        return () => faqItems.forEach(faq => faq.removeEventListener('click', toggleFaq));
    }, []);

    const faqData = [
      {
        title: 'How much should I donate?',       
        content: 'Every contribution is significant to us, and we appreciate the value in each donation. Your donation amount is entirely at your discretion, and we are genuinely grateful for your support. Even if your donation falls below the minimum cost required to plant a tree, we welcome and appreciate your contribution. In such cases, we will patiently wait until the funds accumulate, and then collectively plant a tree in your name as a symbol of your generosity.',
      },
      {
        title: 'What payment methods are there?',
        content: 'We offer multiple payment methods including card and netbanking. If you have any questions or need assistance with your payment, please contact us at our <a href="/#/contact" style="color: #00aaff;">contact page</a>. We are here to help!',
      },
      {
        title: 'How can I get involved in tree planting initiatives?',
        content: 'You can get involved in tree planting initiatives by becoming a GreenHeart and a valuable member of our organisation. To join now click <a href="/#/member" style="color: #00aaff;">here</a> You can also help us spread the word about our cause by sharing our website and social media pages with your family and friends. Together, we can make a difference!',
      },
      {
        title: 'What types of trees are suitable for planting in my region?',
        content: 'The suitability of trees for planting depends on your region\'s climate, soil conditions, and local ecosystem. We have our own AI ML based plant recommnedation system called Flora under development, which takes all these various factors into consideration and recommends the best trees for your region. Additionally you can check out our blog for advice and updates.',
      },
      {
        title: 'Why should I plant a tree?',
        content: 'Planting a tree is a simple yet impactful way to contribute to a healthier planet. Trees absorb carbon dioxide, release oxygen, support biodiversity, and provide numerous environmental benefits. They improve air and water quality, prevent soil erosion, and enhance the overall well-being of communities. Additionally, tree planting is an investment in the future, creating sustainable environments for generations to come. Getting involved can be as easy as participating in local initiatives, planting a tree in your yard, or supporting organizations dedicated to reforestation. It\'s a small action that yields significant positive effects on the environment and our collective future. To read more about the benefits of tree planting, visit our blog.',
      },
      {
        title: 'How can I contact you?',
        content: 'You can contact us by sending an email to greenatheart.sup@gmail.com. You may also send us a message on our <a href="/#/contact" style="color: #00aaff;">contact page</a>. We are here to help and will respond to your inquiry as soon as possible.',
      }
    ];
    

    const FaqItem = ({ title, content }) => (
        <div className="faq">
          <div className='faq-content'>
            <h3 className="faq-title">{title}</h3>
            <p className="faq-text" dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
            <button className="faq-toggle">
                <i className="fas facdwn"><FaChevronDown /></i>
                <i className="fas fates"><FaTimes /></i>
            </button>
        </div>
    );

    return (
        <div className="FS__FAQ section__padding">
            <h1 className="FAQ-header">FREQUENTLY ASKED QUESTIONS</h1>
            <div className="faqs-container">
                {faqData.map((faq, index) => (
                    <FaqItem key={index} title={faq.title} content={faq.content} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
