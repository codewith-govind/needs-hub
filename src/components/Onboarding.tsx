import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Onboarding = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for Next, -1 for Previous

  const steps = [
    {
      title: 'Welcome to My App',
      description: 'Experience the next level of personalization.',
      image: 'https://via.placeholder.com/300x200?text=Welcome+Image',
    },
    {
      title: 'Discover Features',
      description: 'Explore tools that fit your needs effortlessly.',
      image: 'https://via.placeholder.com/300x200?text=Features+Image',
    },
    {
      title: 'Stay Connected',
      description: 'Add to your home screen and access with a tap.',
      image: 'https://via.placeholder.com/300x200?text=Home+Screen+Image',
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1); // Next: Move from right to left
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setDirection(-1); // Previous: Move from left to right
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleComplete = () => {
    localStorage.setItem('onboardingComplete', 'true');
    onComplete();
  };

  return (
    <div
      className="flex flex-col justify-between h-screen w-full text-gray-900 relative overflow-hidden"
      style={{
        background: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 800\'><circle cx=\'50\' cy=\'50\' r=\'30\' stroke=\'#000\' stroke-width=\'4\' fill=\'transparent\' /><circle cx=\'150\' cy=\'150\' r=\'30\' stroke=\'#000\' stroke-width=\'4\' fill=\'transparent\' /><path d=\'M100,100 L200,200 M200,100 L300,200\' stroke=\'#000\' stroke-width=\'2\' fill=\'transparent\' /></svg>")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 px-4 py-2 text-sm font-semibold bg-transparent border border-gray-400 rounded-full text-gray-900 hover:bg-gray-100 transition"
      >
        Skip
      </button>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }} // Slide effect for entry
            animate={{ opacity: 1, x: 0 }} // Centering the content with opacity fade-in
            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }} // Exit animation in reverse direction
            transition={{ type: 'spring', stiffness: 200, damping: 25 }} // Smooth spring transition for sliding
            className="flex flex-col items-center text-center px-6"
          >
            {/* Image */}
            <motion.img
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              className="w-full max-w-sm mb-6"
            />
            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">{steps[currentStep].title}</h1>
            {/* Description */}
            <p className="text-lg mb-8 text-gray-700">{steps[currentStep].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-between px-6 py-6 border-t border-gray-200">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className={`px-6 py-3 text-sm font-semibold border border-gray-400 rounded-lg transition ${
            currentStep === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'text-gray-900 hover:bg-gray-100'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 text-sm font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
