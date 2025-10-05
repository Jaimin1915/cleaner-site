import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Expert Cleaners" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#1E3A8A]/5 to-[#2563EB]/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-primary mb-8">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#2563EB]">
                TRUE SHINE
              </span>
              ?
            </h2>

            <p className="text-lg text-secondary mb-8 leading-relaxed">
              With over 15 years of experience in the cleaning industry, we've built our reputation on reliability,
              quality, and customer satisfaction. Our team of trained professionals uses eco-friendly products and
              advanced techniques to deliver exceptional results.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-white" size={24} />
                </div>
                <span className="text-lg font-semibold text-primary">Fully Insured & Bonded</span>
              </div>

              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={24} />
                </div>
                <span className="text-lg font-semibold text-primary">Award-Winning Service</span>
              </div>

              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <span className="text-lg font-semibold text-primary">100% Satisfaction Guarantee</span>
              </div>
            </div>

            <button className="btn-accent px-10 py-4 rounded-xl font-semibold shadow-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Learn More About Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200/40"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] mb-3">
                  {stat.number}
                </div>
                <div className="text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
