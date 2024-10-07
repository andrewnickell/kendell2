import React from 'react'
import { Snowflake } from 'lucide-react'

const SnowRemoval = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-cover bg-center py-24" style={{backgroundImage: "url('https://images.unsplash.com/photo-1516431883659-655d41c09bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Snow Removal Services</h1>
          <div className="flex justify-center mb-4">
            <Snowflake className="w-16 h-16 text-blue-300" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Keep your property safe and accessible during winter with our reliable snow removal services. We provide prompt and efficient snow clearing for residential and commercial properties.
        </p>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4 text-green-700">Our Snow Removal Services Include:</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Snow plowing for driveways, parking lots, and roads</li>
            <li>Snow blowing for walkways and entrances</li>
            <li>Hand shoveling for stairs and tight spaces</li>
            <li>De-icing and salt application</li>
            <li>Snow hauling and relocation</li>
            <li>Roof snow removal to prevent ice dams and structural damage</li>
          </ul>
          <h2 className="font-display text-3xl font-semibold mb-4 text-green-700">Our Approach:</h2>
          <p className="mb-4">
            We understand that snow and ice can create hazardous conditions and disrupt daily activities. That's why we offer:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>24/7 emergency snow removal services</li>
            <li>Customized snow removal plans tailored to your property's needs</li>
            <li>State-of-the-art equipment for efficient and thorough snow clearing</li>
            <li>Experienced and trained snow removal professionals</li>
            <li>Environmentally friendly de-icing products when possible</li>
            <li>Proactive monitoring of weather conditions to anticipate needs</li>
          </ul>
          <p className="mb-8">
            Whether you need one-time snow removal or want to set up a seasonal contract, we're here to ensure your property remains safe and accessible throughout the winter months. Our team is equipped to handle snowfall of any magnitude, from light dustings to heavy blizzards.
          </p>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="font-display text-2xl font-semibold mb-4 text-green-800">Benefits of Professional Snow Removal:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensures safety for residents, employees, and visitors</li>
              <li>Reduces liability risks associated with snow and ice accidents</li>
              <li>Saves time and physical effort, especially for large properties</li>
              <li>Prevents damage to pavement and landscaping from improper snow removal</li>
              <li>Allows for uninterrupted business operations during winter weather</li>
              <li>Provides peace of mind knowing your property will be taken care of promptly after snowfall</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SnowRemoval