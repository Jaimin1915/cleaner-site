import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah Johnson", role: "Homeowner", content: "True-Shine has been cleaning our home for over 2 years now. Their attention to detail is incredible, and they always leave our house spotless. Highly recommended!", rating: 5 },
    { name: "Michael Chen", role: "Office Manager", content: "We've been using True-Shine for our office cleaning needs for the past year. They're reliable, professional, and always do an excellent job. Our employees love the clean environment.", rating: 5 },
    { name: "Emily Rodriguez", role: "Restaurant Owner", content: "As a restaurant owner, cleanliness is crucial. True-Shine provides exceptional commercial cleaning services that help us maintain the highest hygiene standards.", rating: 5 }
  ];

  return (
    <section id="testimonials" className="py-16 bg-[var(--bg-soft)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-secondary">Don't just take our word for it — hear from our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md ring-1 ring-blue-100">
              <div className="flex items-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-secondary mb-4 italic">"{t.content}"</p>
              <div className="border-t border-blue-100 pt-4">
                <h4 className="font-bold text-primary">{t.name}</h4>
                <p className="text-sm text-secondary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
