import { FaCode, FaBook, FaStickyNote, FaCalendarAlt, FaChartLine, FaTrophy } from 'react-icons/fa';

const FeatureSection = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Track your code',
      description: 'Record daily coding progress, save snippets, and monitor your programming journey.',
    },
    {
      icon: FaBook,
      title: 'Document learning',
      description: 'Keep track of new concepts, skills, and knowledge you acquire each day.',
    },
    {
      icon: FaStickyNote,
      title: 'Store important notes',
      description: 'Never lose important insights with a dedicated space for your daily notes.',
    },
    {
      icon: FaCalendarAlt,
      title: 'Maintain consistency',
      description: 'Build a daily habit with streak tracking and calendar visualization.',
    },
    {
      icon: FaChartLine,
      title: 'Visualize progress',
      description: 'See your growth with charts and analytics that show your journey over time.',
    },
    {
      icon: FaTrophy,
      title: 'Achieve milestones',
      description: 'Celebrate key achievements as you reach important milestones in your 100-day journey.',
    },
  ];

  return (
    <section id='#feature' className="py-12 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">FEATURES</h2>
        <h3 className="text-4xl font-extrabold text-gray-900 mt-8 mb-8">
          Everything you need for your 100-day journey
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Our platform provides all the tools to help you stay consistent, track your progress, and
          achieve your goals over 100 days.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="text-blue-500 mb-4" size={40} />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;