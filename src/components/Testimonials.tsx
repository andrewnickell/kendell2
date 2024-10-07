import React from 'react'

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

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-primary">What Our Clients Say</h2>
        
        {/* Featured Testimonial */}
        <div className="relative bg-cover bg-center py-16 mb-16 rounded-lg overflow-hidden" style={{backgroundImage: "url('https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"}}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            <p className="text-2xl italic mb-6">"{testimonials[0].quote}"</p>
            <p className="text-xl font-semibold">- {testimonials[0].author}</p>
          </div>
        </div>
        
        {/* Other Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(1).map((testimonial, index) => (
            <div key={index} className="card p-8">
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-primary font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials