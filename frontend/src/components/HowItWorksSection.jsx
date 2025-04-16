import { FaCheckCircle } from 'react-icons/fa';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Sign up',
      description: 'Create your account to start your 100-day journey and access all tracking features.',
    },
    {
      number: '02',
      title: 'Set your goals',
      description: 'Define what you want to achieve in your 100-day challenge, whether it\'s coding, learning, or both.',
    },
    {
      number: '03',
      title: 'Track daily',
      description: 'Log your progress each day, including code snippets, learning materials, and important notes.',
    },
    {
      number: '04',
      title: 'Stay consistent',
      description: 'Build a streak and maintain your momentum with daily reminders and progress visualization.',
    },
    {
      number: '05',
      title: 'Analyze your journey',
      description: 'Review your progress, identify patterns, and celebrate milestones along the way.',
    },
    {
      number: '06',
      title: 'Complete your challenge',
      description: 'Finish your 100 days and see the transformation in your skills and knowledge.',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-gray-600 mb-2">HOW IT WORKS</h2>
        <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
          Your journey to consistent growth
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Following these simple steps will help you transform your skills and habits over 100 days.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 text-blue-700 rounded-full font-bold">
                {step.number}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
              <FaCheckCircle className="text-gray-400 mt-4" size={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;