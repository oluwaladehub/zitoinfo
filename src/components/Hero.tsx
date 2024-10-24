import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Innovating <br />
              <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              For an Excellent Experience. We help businesses transform through technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#about"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                About Company
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/463555991_875280958003495_9170956887090085023_n.jpg?ccb=11-4&oh=01_Q5AaIApAOBR0CSetKUvSeVDuzwkR_yQDvXJb-DacP361G_p2&oe=6725FF60&_nc_sid=5e03e0&_nc_cat=110"
              alt="ZitoInfoTech" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}