import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, RefreshCw } from 'lucide-react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setError(`Failed to send message: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
    setError('');
  };

  return (
    <section id="contact" className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out!
            </p>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <span>bryanram2024@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <span>bryanram@usc.edu</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <span>+1 (626) 391-0502</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span>Los Angeles, California</span>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <p className="text-xl font-semibold">Thank you for your message! I will get back to you soon.</p>
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Another Inquiry
                  <RefreshCw className="ml-2 h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}