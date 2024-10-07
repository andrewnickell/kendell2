import React from 'react'
import { Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Kendell Landscaping</h3>
            <p>Transforming outdoor spaces since 2015</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Service Areas</h3>
            <p>Proudly serving Southeastern Idaho, including:</p>
            <p>Pocatello, McCammon, Inkom, Chubbuck, American Falls, Burley, Rupert, Idaho Falls, and more.</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p>658 S 9th Ave, Pocatello, ID 83201</p>
            <p>Phone: (208) 221-4199</p>
            <p>Email: KendellOffice@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/kendellprofessionalserviceslandscapingandlawncare/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Kendell Landscaping and Professional Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer