import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="h-12 w-12 text-teal-200 mx-auto mb-8" />
        <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
          "Khan Academy has been a game changer for my students. They can learn at their own pace,
          review concepts they struggle with, and get instant feedback. It's transformed my
          classroom."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Teacher"
            className="w-16 h-16 rounded-full border-4 border-white"
          />
          <div className="text-left">
            <div className="font-semibold text-white text-lg">Sarah Johnson</div>
            <div className="text-teal-100">8th Grade Math Teacher, California</div>
          </div>
        </div>
      </div>
    </section>
  );
}
