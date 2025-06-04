
export const RecentPosts = () => {
  const recentPosts = [
    {
      id: 1,
      title: "How Often Should You Detail Your Car?",
      excerpt: "Professional recommendations for maintaining your vehicle's appearance and protecting its value through regular detailing schedules.",
      date: "June 3, 2024"
    },
    {
      id: 2,
      title: "Eco-Friendly Car Care: Steam vs Traditional Methods",
      excerpt: "Compare the environmental impact of steam cleaning versus traditional car wash methods and why it matters.",
      date: "June 2, 2024"
    },
    {
      id: 3,
      title: "Interior Detailing: Beyond Just Cleaning",
      excerpt: "Discover the comprehensive approach to interior detailing that includes sanitization, protection, and restoration.",
      date: "May 30, 2024"
    },
    {
      id: 4,
      title: "Paint Protection: Ceramic Coatings Explained",
      excerpt: "Everything you need to know about ceramic coatings and how they provide long-lasting protection for your vehicle's paint.",
      date: "May 29, 2024"
    },
    {
      id: 5,
      title: "The Ultimate Guide to Car Wash Preparation",
      excerpt: "Essential steps to prepare your vehicle for professional detailing to ensure the best possible results.",
      date: "May 27, 2024"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Recent Posts</h3>
          <p className="text-lg text-gray-600">Stay updated with our latest insights and tips</p>
        </div>
        
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h4 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                  {post.title}
                </h4>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0">{post.date}</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Read More →
              </button>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};
