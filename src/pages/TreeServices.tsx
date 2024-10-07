import React from 'react'
import { Palmtree } from 'lucide-react'

const TreeServices = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-cover bg-center py-24" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Tree Trimming & Removal Services</h1>
          <div className="flex justify-center mb-4">
            <Palmtree className="w-16 h-16 text-green-400" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Maintain the health, safety, and beauty of your trees with our professional tree services. From routine trimming to complete tree removal, we have the expertise to handle all your tree care needs.
        </p>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4 text-green-700">Our Tree Services Include:</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Tree trimming and pruning</li>
            <li>Dead wooding and crown thinning</li>
            <li>Tree removal and stump grinding</li>
            <li>Emergency tree services</li>
            <li>Tree health assessments</li>
            <li>Disease and pest management</li>
            <li>Cabling and bracing for structural support</li>
            <li>Tree planting and transplanting</li>
          </ul>
          <h2 className="font-display text-3xl font-semibold mb-4 text-green-700">Why Professional Tree Care Matters:</h2>
          <p className="mb-4">
            Proper tree care is essential for maintaining the health, safety, and aesthetic value of your property. Our certified arborists have the knowledge and experience to:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Identify and treat tree diseases and pest infestations</li>
            <li>Improve tree structure to reduce the risk of falling branches</li>
            <li>Enhance the appearance and shape of trees through proper pruning</li>
            <li>Safely remove hazardous or unwanted trees</li>
            <li>Provide expert advice on tree selection and placement</li>
          </ul>
          <p className="mb-8">
            Whether you need routine maintenance or have concerns about a specific tree, our team is equipped to provide comprehensive care. We use modern techniques and equipment to ensure the job is done safely and efficiently, with minimal impact on your property.
          </p>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="font-display text-2xl font-semibold mb-4 text-green-800">Benefits of Our Tree Services:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improved tree health and longevity</li>
              <li>Enhanced property value and curb appeal</li>
              <li>Reduced risk of property damage from falling branches or trees</li>
              <li>Increased sunlight and air circulation in your landscape</li>
              <li>Expert care that complies with local regulations and best practices</li>
              <li>Peace of mind knowing your trees are in good hands</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreeServices