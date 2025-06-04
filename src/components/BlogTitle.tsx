
export const BlogTitle = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-emerald-50 to-green-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-400 rounded-full"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6">
          <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
            Our Blog
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          VAP'D DASHSTEAM
          <span className="text-emerald-600 block">Insights & Tips</span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
          Dive into our expert knowledge base featuring the latest automotive care techniques, industry innovations, and professional insights. Discover the secrets behind maintaining your vehicle's pristine condition with our advanced steam cleaning methods and mobile detailing expertise.
        </p>
      </div>
    </section>
  );
};
