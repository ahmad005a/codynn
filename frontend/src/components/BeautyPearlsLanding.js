import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, Phone, Mail, MapPin, Menu, X, Scissors, Heart, Award, Clock } from 'lucide-react';

const BeautyPearlsLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Navigation Component
  const Navigation = () => (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Scissors className="w-8 h-8 text-rose-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Beauty Pearls
            </span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: '#e11d48' }}
                className="text-gray-700 hover:text-rose-600 transition-all duration-300 font-medium"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Consultation
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-rose-600 py-2 font-medium transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }, 100);
                  }}
                >
                  {item}
                </a>
              ))}
              <button 
                className="w-full bg-gradient-to-r from-rose-600 to-purple-600 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ opacity: backgroundOpacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50"></div>
        <img 
          src="https://images.unsplash.com/photo-1580421383958-5a3c06575a5b" 
          alt="Elegant Wedding Dress"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-rose-800 to-purple-800 bg-clip-text text-transparent leading-tight"
          >
            Crafting Dreams
            <br />
            <span className="text-4xl md:text-6xl">Into Reality</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            From exquisite wedding gowns to everyday elegance, Beauty Pearls transforms your vision into perfectly tailored masterpieces that celebrate your unique style.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-gray-600" />
      </motion.div>
    </section>
  );

  // Services Section
  const ServicesSection = () => {
    const services = [
      {
        icon: <Heart className="w-8 h-8" />,
        title: "Wedding Gowns",
        description: "Breathtaking custom wedding dresses designed to make your special day unforgettable",
        image: "https://images.pexels.com/photos/3738095/pexels-photo-3738095.jpeg"
      },
      {
        icon: <Scissors className="w-8 h-8" />,
        title: "Custom Tailoring",
        description: "Precision-crafted garments tailored to your exact measurements and preferences",
        image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg"
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: "Evening Gowns",
        description: "Elegant evening wear that makes you shine at every special occasion",
        image: "https://images.unsplash.com/photo-1701964620877-5653b8a7280e"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "Alterations",
        description: "Expert alterations to ensure the perfect fit for all your existing garments",
        image: "https://images.pexels.com/photos/32551071/pexels-photo-32551071.jpeg"
      }
    ];

    return (
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-rose-800 bg-clip-text text-transparent">
              Our Exquisite Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From dream wedding gowns to everyday elegance, we create garments that celebrate your unique beauty and style
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl text-rose-600 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Portfolio Section
  const PortfolioSection = () => (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-rose-800 bg-clip-text text-transparent">
            Our Stunning Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each creation tells a story of craftsmanship, elegance, and the unique beauty of every woman who wears our designs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              src: "https://images.pexels.com/photos/32551071/pexels-photo-32551071.jpeg", 
              title: "Bridal Elegance",
              category: "Wedding Gown"
            },
            { 
              src: "https://images.unsplash.com/photo-1502955422409-06e43fd3eff3", 
              title: "Garden Romance",
              category: "Bridal Collection"
            },
            { 
              src: "https://images.unsplash.com/photo-1580421383958-5a3c06575a5b", 
              title: "Timeless Beauty",
              category: "Custom Design"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => {
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "Bride",
        image: "https://images.unsplash.com/photo-1502955422409-06e43fd3eff3",
        text: "Beauty Pearls created the wedding dress of my dreams. The attention to detail and craftsmanship exceeded all my expectations. I felt like a princess on my special day!"
      },
      {
        name: "Emily Rodriguez",
        role: "Fashion Enthusiast",
        image: "https://images.pexels.com/photos/32551071/pexels-photo-32551071.jpeg",
        text: "The custom evening gown I ordered was absolutely stunning. The fit was perfect, and I received so many compliments. Beauty Pearls truly understands elegance."
      },
      {
        name: "Maria Thompson",
        role: "Regular Customer",
        image: "https://images.unsplash.com/photo-1580421383958-5a3c06575a5b",
        text: "I've been coming to Beauty Pearls for years for alterations and custom pieces. Their work is always impeccable, and the staff treats you like family."
      }
    ];

    return (
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-rose-800 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from the amazing women who have experienced the Beauty Pearls difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // About Section
  const AboutSection = () => (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg"
                alt="Professional Seamstress"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-rose-800 bg-clip-text text-transparent">
              Craftsmanship Meets Passion
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in haute couture and bridal design, Beauty Pearls has been creating extraordinary garments that celebrate the unique beauty of every woman.
            </p>
            <div className="space-y-6">
              {[
                { number: "500+", label: "Happy Brides" },
                { number: "1000+", label: "Custom Creations" },
                { number: "15+", label: "Years of Excellence" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="text-3xl font-bold text-rose-600">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Contact Section
  const ContactSection = () => (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-rose-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1701964620877-5653b8a7280e"
          alt="Elegant Fabric Pattern"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Contact us today to schedule your personal consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/10 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="opacity-90">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/10 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="opacity-90">hello@beautypearls.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/10 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Visit Our Atelier</h3>
                <p className="opacity-90">123 Fashion District, Style City, SC 12345</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-rose-400 transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-rose-400 transition-colors duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-rose-400 transition-colors duration-300"
              />
              <textarea
                rows="5"
                placeholder="Tell us about your dream dress..."
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-rose-400 transition-colors duration-300 resize-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-rose-600 to-purple-600 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 mb-6"
          >
            <Scissors className="w-8 h-8 text-rose-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Beauty Pearls
            </span>
          </motion.div>
          <p className="text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Creating beautiful, bespoke garments that celebrate your unique style and make every occasion memorable.
          </p>
          <div className="border-t border-gray-800 pt-8 w-full text-center">
            <p className="text-gray-500">
              © 2025 Beauty Pearls. All rights reserved. | Crafted with ❤️ for beautiful women everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default BeautyPearlsLanding;