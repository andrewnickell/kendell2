import React from 'react'
import { Truck } from 'lucide-react'

const DumpTrailerRental = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-8 text-green-800">Dump Trailer Rental Services</h1>
        <div className="flex justify-center mb-8">
          <Truck className="w-16 h-16 text-green-600" />
        </div>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Need extra hauling capacity for your project? Our dump trailer rental service provides a convenient and cost-effective solution for your landscaping, construction, or cleanup needs.
        </p>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4 text-green-700">Why Rent a Dump Trailer?</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Perfect for home renovation projects and yard cleanups</li>
            <li>Ideal for construction sites and debris removal</li>
            <li>Great for transporting landscaping materials like soil, mulch, or gravel</li>
            <li>More cost-effective than hiring a full-service hauling company</li>
            <li>Flexible rental periods to suit your project timeline</li>
          </ul>
          <h2 className="font-display text-3xl font-semibold mb-4 text-green-700">Our Dump Trailer Rental Service Includes:</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Well-maintained, reliable dump trailers in various sizes</li>
            <li>Clear instructions on proper use and safety guidelines</li>
            <li>Flexible pickup and drop-off times</li>
            <li>Competitive pricing with daily and weekly rental options</li>
            <li>Optional delivery and pickup service (additional fee may apply)</li>
          </ul>
          <p className="mb-8">
            Whether you're a homeowner tackling a big cleanup project or a contractor needing extra hauling capacity, our dump trailer rentals offer a convenient and affordable solution. We provide clean, well-maintained trailers that are easy to use and perfect for a variety of jobs.
          </p>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="font-display text-2xl font-semibold mb-4 text-green-800">How to Rent a Dump Trailer:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact us to check availability and discuss your needs</li>
              <li>Choose the appropriate trailer size for your project</li>
              <li>Select your rental period (daily or weekly rates available)</li>
              <li>Schedule your pickup or delivery time</li>
              <li>Receive a brief orientation on trailer use and safety</li>
              <li>Complete your project with ease!</li>
              <li>Return the trailer clean and in good condition</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DumpTrailerRental