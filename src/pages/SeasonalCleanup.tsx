import React from 'react'
import { Leaf } from 'lucide-react'

const SeasonalCleanup = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-cover bg-center py-24" style={{backgroundImage: "url('https://images.unsplash.com/photo-1508896694512-1eade558679c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Spring and Fall Cleanup Services</h1>
          <div className="flex justify-center mb-4">
            <Leaf className="w-16 h-16 text-green-400" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Prepare your property for the changing seasons with our comprehensive spring and fall cleanup services. We'll ensure your landscape looks its best year-round.
        </p>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4 text-green-700">Our Seasonal Cleanup Services Include:</h2>
          <div className="mb-8">
            <h3 className="font-display text-2xl font-semibold mb-2 text-green-600">Spring Cleanup</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Removing debris, leaves, and branches accumulated over winter</li>
              <li>Pruning and trimming shrubs and trees</li>
              <li>Cleaning and edging flower beds</li>
              <li>Lawn dethatching and aeration</li>
              <li>Applying pre-emergent weed control</li>
              <li>Mulch application to beds and tree rings</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="font-display text-2xl font-semibold mb-2 text-green-600">Fall Cleanup</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Leaf removal and disposal</li>
              <li>Cutting back perennials and removing annuals</li>
              <li>Final mowing and edging of the season</li>
              <li>Winterizing irrigation systems</li>
              <li>Applying fall fertilizer to prepare for winter</li>
              <li>Protecting sensitive plants for winter</li>
            </ul>
          </div>
          <p className="mb-8">
            Our seasonal cleanup services are designed to protect your landscape investment and prepare your property for the upcoming season. We use efficient techniques and equipment to thoroughly clean and prepare your outdoor spaces, saving you time and effort.
          </p>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="font-display text-2xl font-semibold mb-4 text-green-800">Benefits of Our Seasonal Cleanup Services:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Promotes healthy growth of your lawn and plants</li>
              <li>Prevents pest infestations and disease</li>
              <li>Improves curb appeal and property value</li>
              <li>Prepares your landscape for optimal performance in the coming season</li>
              <li>Saves you time and physical labor</li>
              <li>Ensures proper care and maintenance of your outdoor spaces</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeasonalCleanup