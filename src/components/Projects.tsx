import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'Naruto AI',
    description: 'An AI built with QtCreator and Python',
    image: 'https://img.freepik.com/free-photo/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.jpg?t=st=1741452108~exp=1741455708~hmac=c908c2cdb09f3195766cbc5f379fa62dd917ffa9baa7ff4e8b823535a2fba78f&w=900',
    technologies: ['QtCreator', 'Python', 'Adobe Photoshop'],
    githubUrl: 'https://github.com/ASHLIN-JOHN/NARTUO-AI',
    longDescription: 'Naruto AI is designed to provide intelligent automation, natural language processing, and smart decision-making capabilities. It can assist users with various tasks such as answering queries, executing commands, providing recommendations, and integrating with different platforms for enhanced productivity.',
    features: [
      'Uses AI algorithms for smart decision-making and data analysis',
      'Automates tasks and executes commands efficiently',
      'Integrates with multiple platforms, including APIs and external tools',
      'OAuth2 authentication with multiple providers',
      'Continuously learns and improves through machine learning'
    ],
    challenges: [
      'Ensuring accurate and relevant responses to user inputs.',
      'Optimizing performance and efficiency in executing tasks',
      'Integrating with different platforms and external tools smoothly',
      'Improving adaptability for diverse use cases and future enhancements'
    ],
    outcome: 'Naruto AI successfully automates tasks, integrates with multiple platforms, and enhances user interaction, demonstrating efficiency and adaptability.'
  },
  {
    title: 'Smart Attendance System (SAS)',
    description: 'A Smart Attendance System with real-time updates',
    image: 'https://img.freepik.com/premium-photo/3d-face-recognition-illustration-concept-facial-recognition-face-id-system-biometric-identification-face-scan-system-cyber-security-concept-modern-vector-3d-style_839035-1807313.jpg?w=900',
    technologies: ['Python', 'MySql', 'Microsoft Excel'],
    githubUrl: 'https://github.com/ASHLIN-JOHN/SMART-ATTENDANCE-SYSTEM',
    longDescription: 'The Smart Attendance System uses face recognition to automate attendance tracking, ' +
        'reducing manual effort and errors. It securely stores records in a database, enabling real-time monitoring and easy access for administrators.',
    features: [
      'Automates attendance marking using face recognition with high accuracy',
      'Allows real-time tracking of attendance records',
      'Ensures secure and organized storage of attendance data',
      'Eliminates manual entry errors for improved reliability',
      'Provides easy access for administrators and teachers to manage records'
    ],
    challenges: [
      'Accuracy issues due to lighting and facial variations.',
      'Handling obstructions like masks and angles',
      'Optimizing real-time processing speed',
      'Ensuring secure database storage'
    ],
    outcome: 'The Smart Attendance System ensures accurate, automated tracking with secure storage, reducing manual effort and improving efficiency.'
  },
  {
    title: 'Price Distribution Graph',
    description: 'A real-time pie chart with price distributive analysis',
    image: 'https://img.freepik.com/premium-photo/abstract-colored-pie-chart-3d-rendering_808337-14788.jpg?ga=GA1.1.1205572316.1741452336&semt=ais_hybrid',
    technologies: ['Python', 'Json'],
    githubUrl: 'https://github.com/ASHLIN-JOHN/DASHBOARD',
    longDescription: 'The graphs illustrate changes in price distribution over time, highlighting significant increases, decreases, and stable trends. The bar chart visually represents these differences, with green indicating price hikes and red showing reductions.',
    features: [
      'Visual comparison of price distribution using pie charts',
      'Clear representation of price differences with a bar chart',
      'Color-coded indicators for increases (green) and decreases (red)',
      'Easy identification of stable, rising, and falling trends',
      'Efficiently highlights market trends and shifts over time'
    ],
    challenges: [
      'Variations in data accuracy over time',
      'Difficulty in visualizing minor price changes',
      'Ensuring proper color differentiation for clarity',
      'Handling overlapping labels in pie charts'
    ],
    outcome: 'The analysis provides clear insights into price trends, highlighting increases, decreases, and stability over time.'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-scale-up hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-600 hover:text-pink-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-600 hover:text-pink-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
