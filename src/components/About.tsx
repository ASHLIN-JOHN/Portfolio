import { Code2, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">Biography</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEH_4BOfeOXXw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727972596796?e=1746662400&v=beta&t=tp211Yoyky8p4Utjoms2a43iUE0RNvVZRaleo_W5fY8"
                alt="Your Name"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a student at St. Joseph's Institute of Technology, specializing in Artificial Intelligence and Data Science.
                Passionate about technology, I have strong problem-solving skills and a relentless drive to overcome challenges. With a determined mindset,
                I never give up easily and always strive for excellence.
              </p>
            </div>

            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Code2 className="text-pink-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Technical Expertise</h4>
                  <p className="text-gray-600 mt-2">
                    I am proficient in Python and Java, with a strong foundation in AI, Machine Learning, and Data Analytics.
                    I have experience with Arduino, Roblox Studio (Lua), and NLP integration. My skills include app development, LMS design, and game development on Roblox. Additionally,
                    I have a solid understanding of advanced computer networking and problem-solving.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Briefcase className="text-pink-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Professional Experience</h4>
                  <p className="text-gray-600 mt-2">
                    I have experience in studying Artificial Intelligence and Data Science, focusing on hands-on learning.
                    While I haven't worked professionally yet, I contribute to open-source projects to apply my skills.
                    I am passionate about practical implementation and staying updated with emerging technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <GraduationCap className="text-pink-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600 mt-2">
                    Pursuing a Bachelor's degree in Artificial Intelligence and Data Science at St. Joseph's Institute of Technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;