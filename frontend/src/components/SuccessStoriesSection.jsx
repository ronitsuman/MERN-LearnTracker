const SuccessStoriesSection = () => {
    const testimonials = [
      {
        name: 'Alex Morgan',
        role: 'Frontend Developer',
        testimonial: '"100Days helped me stay consistent with my coding practice. After completing the challenge, I landed my first developer job!"',
        initials: 'AM',
      },
      {
        name: 'Samira Patel',
        role: 'Data Scientist',
        testimonial: '"I used this platform to track my machine learning studies. The progress visualization kept me motivated throughout my journey."',
        initials: 'SP',
      },
  
      {
        name: 'Ronit Suman',
        role: 'Mern Stack Developer',
        testimonial: '"consistency was my biggest challenge. This tool helped me form a daily coding habit that transformed my skills."',
        initials: 'RS',
      },
    ];
  
    return (
      <section className="py-12 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Success Stories</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            See how others have transformed their skills and achieved their goals with 100Days.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 text-blue-700 rounded-full font-bold">
                  {testimonial.initials}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white mr-3">
                    {testimonial.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SuccessStoriesSection;