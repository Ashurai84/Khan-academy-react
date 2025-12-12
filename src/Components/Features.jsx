
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Target,
      title: 'Personalized learning',
      description:
        'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.',
    },
    {
      icon: Users,
      title: 'Trusted content',
      description:
        'Created by experts, Khan Academy\'s library of trusted practice and lessons covers math, science, and more.',
    },
    {
      icon: Award,
      title: 'Tools to empower teachers',
      description:
        'With Khan Academy, teachers can identify gaps in their students\' understanding and tailor instruction.',
    },
    {
      icon: TrendingUp,
      title: 'Measurable results',
      description:
        'Studies show that Khan Academy helps students succeed in school and on standardized tests.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Khan Academy works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We empower learners to take ownership of their education and develop the skills they need
            to succeed in school and in life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
