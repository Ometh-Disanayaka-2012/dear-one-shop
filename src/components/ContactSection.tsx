import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './contact-section.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      alert('Message sent! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="contact-section w-full bg-gradient-to-b from-white via-stone-50 to-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-stone-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Get In Touch
          </h2>
          <p className="text-xl text-stone-600" style={{ fontFamily: 'Georgia, serif' }}>
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-10 border border-stone-200">
            <h3 className="text-2xl font-serif text-stone-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Send us a message
            </h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-stone-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                  placeholder="Custom order inquiry"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your personalized gift idea..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-stone-700 hover:bg-stone-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg p-8 border border-stone-200">
              <h3 className="text-2xl font-serif text-stone-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-stone-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Email Us</h4>
                    <a href="mailto:hello@personalgifts.com" className="text-stone-600 hover:text-stone-800 transition-colors">
                      hello@personalgifts.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-stone-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Call Us</h4>
                    <a href="tel:+1234567890" className="text-stone-600 hover:text-stone-800 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-stone-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Visit Us</h4>
                    <p className="text-stone-600">
                      123 Gift Street<br />
                      Craft City, CC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg p-8 border border-stone-200">
              <h3 className="text-2xl font-serif text-stone-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Business Hours
              </h3>
              
              <div className="space-y-3 text-stone-600">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-red-600">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;