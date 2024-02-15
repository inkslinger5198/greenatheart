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
        title: 'How does tree planting contribute to the environment?',
        content: 'Tree planting contributes to the environment by absorbing carbon dioxide, releasing oxygen, providing habitat for wildlife, preventing soil erosion, and promoting overall biodiversity. It\'s an essential activity for environmental conservation and sustainability.',
      },
      {
        title: 'What are the benefits of planting trees in urban areas?',
        content: 'Planting trees in urban areas helps improve air quality, reduce urban heat islands, enhance aesthetics, and create healthier living environments. Urban tree planting is crucial for creating sustainable and resilient cities.',
      },
      {
        title: 'How can I get involved in tree planting initiatives?',
        content: 'You can get involved in tree planting initiatives by joining local environmental organizations, participating in community tree planting events, or supporting reforestation projects. Many organizations organize tree planting activities to engage volunteers in environmental conservation.',
      },
      {
        title: 'What types of trees are suitable for planting in my region?',
        content: 'The suitability of trees for planting depends on your region\'s climate, soil conditions, and local ecosystem. Consult with local arborists or environmental experts to choose native tree species that thrive in your area and contribute to the local ecosystem.',
      },
      {
        title: 'How does agroforestry benefit both the environment and agriculture?',
        content: 'Agroforestry is a sustainable land-use system that combines agriculture and tree cultivation. It benefits the environment by promoting biodiversity, reducing soil erosion, and enhancing water quality. Additionally, agroforestry improves agricultural productivity by providing shade, windbreaks, and nutrient cycling, making it a win-win for both the environment and agriculture.',
      },
    ];
    

    const FaqItem = ({ title, content }) => (
        <div className="faq">
          <div className='faq-content'>
            <h3 className="faq-title">{title}</h3>
            <p className="faq-text">{content}</p>
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
