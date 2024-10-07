import React from 'react'
import { Shovel } from 'lucide-react'

const LandscapeDesign = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-cover bg-center py-24" style={{backgroundImage: "url('https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Landscape Design Services</h1>
          <div className="flex justify-center mb-4">
            <Shovel className="w-16 h-16 text-green-400" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Transform your outdoor space with our professional landscape design services. We create beautiful, functional landscapes that reflect your style and enhance your property's value.
        </p>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4 text-green-700">Our Landscape Design Process:</h2>
          <ol className="list-decimal pl-6 mb-8 space-y-4">
            <li>
              <strong>Initial Consultation:</strong> We meet with you to discuss your vision, preferences, and budget. We'll assess your property and gather information about soil conditions, sunlight exposure, and existing features.
            </li>
            <li>
              <strong>Concept Development:</strong> Our designers create a custom landscape plan that incorporates your ideas and our professional recommendations. This may include 2D or 3D renderings to help you visualize the final result.
            </li>
            <li>
              <strong>Design Refinement:</strong> We review the initial design with you and make any necessary adjustments to ensure it meets your expectations.
            </li>
            <li>
              <strong>Installation Planning:</strong> Once the design is finalized, we create a detailed installation plan and timeline.
            </li>
            <li>
              <strong>Implementation:</strong> Our skilled team brings the design to life, carefully installing each element of your new landscape.
            </li>
          </ol>
          <h2 className="font-display text-3xl font-semibold mb-4 text-green-700">Our Landscape Design Services Include:</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Custom hardscape design (patios, walkways, retaining walls)</li>
            <li>Softscape design (plants, trees, shrubs, flower beds)</li>
            <li>Outdoor living spaces (kitchens, fire pits, seating areas)</li>
            <li>Water features (fountains, ponds, waterfalls)</li>
            <li>Lighting design for safety and ambiance</li>
            <li>Irrigation system design and installation</li>
            <li>Sustainable and low-maintenance landscape solutions</li>
          </ul>
          <p className="mb-8">
            Whether you're looking to create a serene backyard retreat, a vibrant garden, or an impressive front yard, our landscape design services can help you achieve your goals. We combine creativity with horticultural expertise to create landscapes that are not only beautiful but also sustainable and easy to maintain.
          </p>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="font-display text-2xl font-semibold mb-4 text-green-800">Why Choose Our Landscape Design Services?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Experienced designers with a keen eye for aesthetics and functionality</li>
              <li>Custom designs tailored to your specific needs and preferences</li>
              <li>Use of high-quality, locally-sourced materials and plants</li>
              <li>Consideration of long-term maintenance and sustainability</li>
              <li>Attention to detail in every aspect of the design and installation</li>
              <li>Commitment to staying within your budget while maximizing value</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandscapeDesign