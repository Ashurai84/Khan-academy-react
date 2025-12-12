import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
            <div className="relative z-10">
              <img
                src="https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_2x.png"
                alt="Student learning online"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Free world-class education for anyone, anywhere
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Khan Academy is a nonprofit with the mission to provide a free, world-class education
              for anyone, anywhere. Learn for free about math, art, computer programming, economics,
              physics, chemistry, biology, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#1865f2] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1865f2] transition-all hover:shadow-lg flex items-center justify-center gap-2">
                Learners, start here
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white text-[#1865f2] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#1865f2] hover:bg-teal-50 transition-all flex items-center justify-center gap-2">
                Teachers, start here
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
