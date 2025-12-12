import { BookOpen, Calculator, Beaker, Globe, Code, Palette } from 'lucide-react';

export default function Subjects() {
  const subjects = [
    {
      icon: Calculator,
      title: 'Math',
      description: 'Pre-K through calculus',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Beaker,
      title: 'Science',
      description: 'Biology, chemistry, physics',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Code,
      title: 'Computing',
      description: 'Programming and computer science',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Globe,
      title: 'History',
      description: 'US history, world history',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Palette,
      title: 'Arts & Humanities',
      description: 'Art history, music',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: BookOpen,
      title: 'Economics',
      description: 'Micro and macroeconomics',
      color: 'bg-teal-100 text-teal-600',
    },
  ];

  return (
    <section id="subjects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn anything you want
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore subjects ranging from math to art, all in one place. Our content library is
            constantly expanding.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-400 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-xl ${subject.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <subject.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{subject.title}</h3>
              <p className="text-gray-600">{subject.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-all hover:shadow-lg">
            Browse all courses
          </button>
        </div>
      </div>
    </section>
  );
}
