import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./ProgressBar.css"; // Make sure to create this CSS file

const steps = [
  {
    id: 1,
    title: "Sign Up",
    description: "Sign up to help the cause.",
  },
  {
    id: 2,
    title: "Email Confirmation",
    description: "Check your email for confirmation.",
  },
  {
    id: 3,
    title: "Plant Trees",
    description: "Help Us Plant Trees, and save the planet.",
  },
  {
    id: 4,
    title: "GreenHeart Certificate",
    description: "Get a certificate of appreciation for having a GreenHeart.",
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
