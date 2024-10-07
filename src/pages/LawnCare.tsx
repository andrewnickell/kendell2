import React from 'react'
import { Scissors } from 'lucide-react'

const LawnCare = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-cover bg-center py-24" style={{backgroundImage: "url('https://images.unsplash.com/photo-1592185285645-5b9d0b13743c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Lawn Care Services</h1>
          <div className="flex justify-center mb-4">
            <Scissors className="w-16 h-16 text-green-400" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Keep your lawn looking its best with our professional lawn care services. We provide comprehensive care to ensure a healthy, vibrant, and well-manicured lawn all season long.
        </p>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4 text-green-700">Our Lawn Care Services Include:</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Regular mowing and edging to maintain the ideal grass height</li>
            <li>Trimming around trees, fences, and other obstacles</li>
            <li>Leaf and debris removal to keep your lawn clean and healthy</li>
            <li>Fertilization and weed control treatments</li>
            <li>Aeration and overseeding to promote thick, lush grass growth</li>
            <li>Pest control to protect your lawn from harmful insects</li>
          </ul>
          <p className="mb-8">
            Our experienced team uses state-of-the-art equipment and environmentally friendly practices to deliver exceptional results. We tailor our services to meet the specific needs of your lawn, taking into account factors such as grass type, soil condition, and local climate.
          </p>
          <p className="mb-8">
            Whether you need weekly maintenance or a one-time lawn rescue, we're here to help. Our goal is to create a beautiful, healthy lawn that you can enjoy and be proud of.
          </p>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="font-display text-2xl font-semibold mb-4 text-green-800">Why Choose Our Lawn Care Services?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customized care plans tailored to your lawn's specific needs</li>
              <li>Trained and experienced lawn care professionals</li>
              <li>Use of high-quality, eco-friendly products</li>
              <li>Consistent, reliable service you can count on</li>
              <li>Competitive pricing with no hidden fees</li>
              <li>100% satisfaction guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LawnCare