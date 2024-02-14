import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./ProgressBar.css"; // Make sure to create this CSS file

const steps = [
  {
    id: 1,
    title: "Donate",
    description: "Support our mission at Green at Heart by making a meaningful contribution. Help us grow a greener world with your donation, and in return, receive real-time updates sent to your registered email. From the moment you confirm your contribution to the actual planting of a tree in your name, we believe in transparency every step of the way. Your financial support ensures a sustainable future, and we'll provide you with photos of the planted tree and a Greenheart certificate as a token of our appreciation. Join us on this eco-friendly journey – donate now.",
  },
  {
    id: 2,
    title: "Email Updates",
    description: "Once your generous donation is received, expect an immediate email confirmation. From there, embark on a journey with us as we share regular updates on how your contribution is actively contributing to creating a greener tomorrow. We'll guide you through each significant step of our eco-friendly initiatives, ensuring you stay connected and informed about the positive impact your support is making. Together, let's cultivate a sustainable future – one update at a time.",
  },
  {
    id: 3,
    title: "Photos",
    description: "In this crucial step, we carefully select seeds or saplings, finding the perfect environment for them to thrive. We firmly believe that each plant contributes to safeguarding our planet and its life for current and future generations. Your contribution, regardless of its size, plays a vital role in this endeavor. Upon planting your tree, we'll promptly share captivating pictures, capturing the moment of its new home, accompanied by detailed information about the specific plant.",
  },
  {
    id: 4,
    title: "Green Certificate",
    description: "After your tree finds it roots in the soil, we extend our heartfelt gratitude for your kindness and environmental care. To honor your contribution, we present you with a personalised Green Certificate. This certificate not only recognises your kind heart commitment towards creating a greener tomorrow but also expresses our sincere thanks for your generous support. Display your certificate proudly, knowing you have made a significant impact on our planet's future.",
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
