export default function Stats() {
  const stats = [
    { value: '120M+', label: 'Learners' },
    { value: '190+', label: 'Countries' },
    { value: '46', label: 'Languages' },
    { value: '100%', label: 'Free' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
