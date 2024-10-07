import React from 'react'
import { Link } from 'react-router-dom'
import { Scissors, Leaf, Shovel, Snowflake, Truck, Palmtree } from 'lucide-react'

const services = [
  { icon: Scissors, name: 'Lawn Care', description: 'Mowing, trimming, and blowing for a well-manicured lawn.', path: '/services/lawn-care' },
  { icon: Leaf, name: 'Spring and Fall Cleanup', description: 'Easy exterior cleanup for seasonal changes.', path: '/services/seasonal-cleanup' },
  { icon: Shovel, name: 'Landscape Design', description: 'Upgrade your space with professional installations.', path: '/services/landscape-design' },
  { icon: Snowflake, name: 'Snow Removal', description: 'Clear driveways, roads, and parking lots of snow.', path: '/services/snow-removal' },
  { icon: Palmtree, name: 'Tree Trimming & Removal', description: 'Includes trimming, assessments, stump grinding, and more.', path: '/services/tree-services' },
  { icon: Truck, name: 'Dump Trailer Rental', description: 'Perfect for cleanups, construction, and debris removal.', path: '/services/dump-trailer-rental' },
]

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.path} key={index} className="group">
              <div className="card p-8 h-full flex flex-col justify-between">
                <div>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-display text-2xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <span className="text-primary font-semibold mt-4 inline-block group-hover:underline">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services