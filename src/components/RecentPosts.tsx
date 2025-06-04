
export const RecentPosts = () => {
  const recentPosts = [
    {
      id: 1,
      title: "Optimal Detailing Frequency: Professional Recommendations",
      excerpt: "Expert guidance on establishing the perfect maintenance schedule to preserve your vehicle's appearance and maximize its resale value.",
      date: "June 3, 2024"
    },
    {
      id: 2,
      title: "Sustainable Car Care: Steam vs Traditional Washing Methods",
      excerpt: "An in-depth analysis of environmental benefits and superior cleaning performance of steam technology compared to conventional methods.",
      date: "June 2, 2024"
    },
    {
      id: 3,
      title: "Complete Interior Restoration: Beyond Surface Cleaning",
      excerpt: "Comprehensive interior care including deep sanitization, protection treatments, and restoration techniques for lasting results.",
      date: "May 30, 2024"
    },
    {
      id: 4,
      title: "Advanced Paint Protection: Ceramic Coating Mastery",
      excerpt: "Complete guide to ceramic coating applications and their long-term benefits for maintaining your vehicle's pristine finish.",
      date: "May 29, 2024"
    },
    {
      id: 5,
      title: "Pre-Service Preparation: Maximizing Detailing Results",
      excerpt: "Essential preparation steps to ensure optimal outcomes from your professional detailing service appointment.",
      date: "May 27, 2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Latest Updates
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Recent Articles</h3>
          <p className="text-xl text-gray-600">Stay informed with our latest automotive care insights</p>
        </div>
        
        <div className="space-y-8">
          {recentPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h4 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 cursor-pointer transition-colors duration-300 flex-1">
                  {post.title}
                </h4>
                <span className="text-sm text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                  {post.date}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {post.excerpt}
              </p>
              <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors group">
                Continue Reading 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Articles
          </button>
        </div>
      </div>
    </section>
  );
};
