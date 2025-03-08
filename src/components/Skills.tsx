import React from 'react';

const skills = {
  'Frontend': ['React', 'Html', 'Css', 'JavaScript', 'QtCreator', 'Django'],
  'Backend': ['Node.js','Java'],
  'Programming & Tools': ['C', 'C++', 'Java', 'Python', 'GitHub']
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div 
              key={category} 
              className="bg-white p-6 rounded-lg shadow-lg animate-slide-up hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm hover:bg-pink-200 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;