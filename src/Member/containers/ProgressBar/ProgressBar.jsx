import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./ProgressBar.css"; // Make sure to create this CSS file

const steps = [
  {
    id: 1,
    title: "Join Us",
    description: "Join now to become a valued member of our organization and be a driving force for positive change globally. Unite with us in our mission to transform the planet into a greener, healthier sanctuary. Receive regular updates on our initiatives and access hands-on tree planting training sessions along with a certificate for your GreenHeart. No expertise required – just the will to learn and contribute to a greener Earth. Whether you're a student, parent, teacher, or even a CEO of a multimillion-dollar company, there are no restrictions on location or background. Your journey with us begins here, and we'll guide you every step of the way until you become a proficient tree planter. Let's make a significant impact together.",
  },
  {
    id: 2,
    title: "Welcome Email",
    description: "At Green at Heart, our membership knows no bounds – no experience needed, no location restrictions. However, we value clarity and understanding. To properly welcome you into our organization, we send a confirmation email. Clear communication is key, making the process more accessible and understandable. We are here to assist you every step of the way, ensuring a seamless and supportive journey. Welcome aboard!",
  },
  {
    id: 3,
    title: "Plant Trees",
    description: "Your time is invaluable to us, and your support is deeply appreciated. Once an order is received, we'll invite you to dedicate a small part of your week to plant seeds or saplings, contributing to the growth of greenery. Expect detailed guides via email on the tree planting process, and for additional assistance, we host training sessions with accessible recordings. Plant the seeds or saplings in any location you feel could use a touch of green, even if it's just your backyard. Each tree or plant you nurture holds significance. Capture the journey with pictures and videos for our generous donors and share them with us. Together, let's make a lasting impact on our environment.",
  },
  {
    id: 4,
    title: "GreenHeart Certificate",
    description: "Upon planting your first tree, we express our gratitude by awarding you a Greenheart Certificate, acknowledging your dedicated efforts in protecting the planet. Your commitment to our cause is invaluable, and this certificate is a token of our appreciation for your GreenHearted endeavors. Thank you for being an essential part of our mission to create a more sustainable and greener world. Additionally, after a period of time, you may also become eligible for personalized letters of recommendation, highlighting your significant contributions.",
  },
];

const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="progress-bar-container">
      <h1>PROCESS</h1>
      <div className="step-progress">
        <div className="lap-nav-btn">
          <div className="navigation">
            <GrFormPrevious className="nav-icon" onClick={prevStep} />
          </div>
        </div>

        <div className="progress-bar">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step ${currentStep > index ? "completed" : ""}`}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-title">{step.title}</div>
            </div>
          ))}
        </div>
        <div className="lap-nav-btn">
          <div className="navigation">
            <GrFormNext className="nav-icon" onClick={nextStep} />
          </div>
        </div>
      </div>

      <div className="step-card">
        <h3>{steps[currentStep - 1].title}</h3>
        <p>{steps[currentStep - 1].description}</p>
      </div>

      <div className="phone-nav-btn">
        <div className="navigation">
          <GrFormPrevious className="nav-icon" onClick={prevStep} />
        </div>
        <div className="navigation">
          <GrFormNext className="nav-icon" onClick={nextStep} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
