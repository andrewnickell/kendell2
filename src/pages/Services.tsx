import React from 'react'
import { Link } from 'react-router-dom'
import { Scissors, Leaf, Shovel, Snowflake, Truck, Palmtree } from 'lucide-react'

const services = [
  { icon: Scissors, name: 'Lawn Care', description: 'Professional mowing, trimming, and maintenance for a pristine lawn.', path: '/services/lawn-care' },
  { icon: Leaf, name: 'Spring and Fall Cleanup', description: 'Comprehensive seasonal cleanup to keep your property looking its best.', path: '/services/seasonal-cleanup' },
  { icon: Shovel, name: 'Landscape Design', description: 'Custom landscape design and installation to transform your outdoor space.', path: '/services/landscape-design' },
  { icon: Snowflake, name: 'Snow Removal', description: 'Reliable snow removal services to keep your property safe and accessible.', path: '/services/snow-removal' },
  { icon: Palmtree, name: 'Tree Trimming & Removal', description: 'Expert tree care services to maintain the health and beauty of your trees.', path: '/services/tree-services' },
  { icon: Truck, name: 'Dump Trailer Rental', description: 'Convenient dump trailer rentals for your landscaping and construction projects.', path: '/services/dump-trailer-rental' },
]

const testimonials = [
  {
    quote: "I'm very lucky to have my yard taken care of by Kendall Professional Services. I recommend them to people who need help with their yard. I will hire them back every Summer.",
    author: "Deena Otero"
  },
  {
    quote: "Kendell Landscaping transformed our backyard into a beautiful oasis. Their attention to detail and professionalism is unmatched.",
    author: "John Smith"
  },
  {
    quote: "The team at Kendell Landscaping is reliable, efficient, and always goes above and beyond. Our lawn has never looked better!",
    author: "Sarah Johnson"
  }
]

const Services = () => {
  return (
    <div>
      <div className="bg-green-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
            At Kendell Landscaping, we offer a comprehensive range of professional landscaping and lawn care services. 
            From routine maintenance to complete landscape transformations, we have the expertise to meet all your outdoor needs.
          </p>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Link to={service.path} key={index} className="group">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-green-200/50">
                  <service.icon className="w-12 h-12 text-green-600 mb-4" />
                  <h2 className="font-display text-2xl font-semibold mb-2">{service.name}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-green-600 font-semibold">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-green-600 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services