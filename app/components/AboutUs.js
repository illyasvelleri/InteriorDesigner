// import React from "react";

// export default function AboutUs() {
//     return (
//         <div className="bg-gray-800 py-12 px-6 md:px-20">
//             {/* Top Header */}
//             <h4 className="text-gray-100 uppercase mb-6 tracking-wider">About Us</h4>

//             {/* Stats Section */}
//             <div className="flex flex-col md:flex-row justify-around items-center gap-10 mb-12 px-4 py-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white shadow-lg">
//                 {[
//                     { count: "10+", label: "Years of Expertise" },
//                     { count: "100+", label: "Happy Clients" },
//                     { count: "10+", label: "Qualified Designers" }
//                 ].map((stat, index) => (
//                     <div key={index} className="text-center transition-transform duration-300 hover:scale-105">
//                         <h2 className="text-5xl font-bold mb-2">{stat.count}</h2>
//                         <p className="text-lg tracking-wide">{stat.label}</p>
//                     </div>
//                 ))}
//             </div>


//             {/* Expertise Section */}
//             <div className="flex flex-col md:flex-row items-center gap-8 text-gray-100">
//                 {/* Text Content */}
//                 <div className="md:w-1/2">
//                     <h3 className="text-2xl font-semibold mb-4">Who We Are?</h3>
//                     <p className="mb-6">
//                         With over a decade of crafting captivating interiors, we’ve transformed spaces for 100+ satisfied clients with the expertise of 10+ qualified designers. We don't just design rooms — we create atmospheres.
//                     </p>
//                     <a
//                         href="#"
//                         className="px-6 py-3 rounded-lg bg-black text-gray-100 font-semibold shadow-md transition hover:bg-gray-800"
//                     >
//                         Contact Us
//                     </a>
//                 </div>

//                 {/* Watch Video */}
//                 <div className="relative w-full md:w-1/2 h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
//                     <iframe
//                         src="https://www.youtube.com/embed/EPN3YghHPe0?si=FyYVsBqkkM6GN05I"
//                         title="Watch Video"
//                         className="absolute inset-0 w-full h-full"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         referrerPolicy="strict-origin-when-cross-origin"
//                         allowFullScreen
//                     ></iframe>
//                 </div>

//             </div>
//         </div>
//     );
// }
export default function AboutUs() {
    return (
      <section className="bg-primary text-white py-16 my-16">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 max-w-screen-lg">
          
          {/* Watch Video */}
                 <div className="relative w-full md:w-1/2 h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg border-2 border-dotted border-primary">
                  <iframe
                        src="https://www.youtube.com/embed/EPN3YghHPe0?si=FyYVsBqkkM6GN05I"
                        title="Watch Video"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
  
          {/* Right: Text Content */}
          <div className="md:w-1/2">
            <h4 className="text-secondary text-lg font-semibold uppercase mb-2">About Us</h4>
            <h2 className="text-4xl font-bold mb-4">Expertise in House Building</h2>
            <p className="text-gray-300 mb-6">
              With over 10 years of experience, our team of skilled designers and builders 
              transforms ideas into reality. From interiors to exteriors, we deliver 
              unparalleled quality and precision.
            </p>

  
            {/* Call-to-Action Buttons */}
            <div className="flex justify-center flex-col-1 md:flex-row gap-6">
              <a href="/about" className="px-6 py-3 bg-secondary text-gray-900 font-semibold rounded-lg shadow-md transition hover:bg-yellow-500">
                More About
              </a>
              <a href="/contact" className="px-6 py-3 bg-transparent border border-secondary text-secondary font-semibold rounded-lg shadow-md transition hover:bg-yellow-400 hover:text-gray-900">
                Contact Us
              </a>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  