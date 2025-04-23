import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Card from '../components/ui/Card';

const Contact: React.FC = () => {
  const [showCallPopup, setShowCallPopup] = useState(false); // State for call confirmation popup

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '7993976247',
      link: 'tel:7993976247', // Add tel: link for phone
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'ankamgarisheshank@gmail.com',
      link: 'mailto:ankamgarisheshank@gmail.com', // Add mailto: link for email
    },
  ];

  const handlePhoneClick = () => {
    setShowCallPopup(true); // Show the call confirmation popup
  };

  const handleCallConfirm = () => {
    setShowCallPopup(false); // Close the popup
    window.location.href = 'tel:7993976247'; // Trigger the phone call
  };

  const handleCallCancel = () => {
    setShowCallPopup(false); // Close the popup
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Me A Message</h3>
              <ContactForm />
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="flex items-start">
                {info.title === 'Phone' ? (
                  <button
                    onClick={handlePhoneClick} // Trigger the popup for phone
                    className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                    aria-label={`Contact via ${info.title}`}
                  >
                    {info.icon}
                  </button>
                ) : (
                  <a
                    href={info.link} // Use the link for email
                    className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                    aria-label={`Contact via ${info.title}`}
                  >
                    {info.icon}
                  </a>
                )}
                <div>
                  <h4 className="text-lg font-bold text-white">{info.title}</h4>
                  <p className="text-gray-300">{info.content}</p>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call Confirmation Popup */}
      {showCallPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-dark-200 p-6 rounded-lg shadow-lg text-center">
            <p className="text-white text-lg mb-4">Call 7993976247?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleCallConfirm}
                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
              >
                Yes
              </button>
              <button
                onClick={handleCallCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;