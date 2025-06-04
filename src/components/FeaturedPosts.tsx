
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Revolutionary Steam Technology: The Future of Car Care",
      description: "Explore how our advanced steam cleaning methods deliver superior results while being environmentally conscious and chemical-free.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80",
      date: "June 1, 2024",
      category: "Innovation"
    },
    {
      id: 2,
      title: "Mobile Excellence: Bringing Premium Service to Your Location",
      description: "Why mobile detailing represents the perfect blend of convenience and professional-grade automotive care for modern lifestyles.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
      date: "May 28, 2024",
      category: "Services"
    },
    {
      id: 3,
      title: "Year-Round Protection: Mastering Seasonal Vehicle Care",
      description: "Expert strategies for protecting your automotive investment through every season with professional maintenance schedules.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
      date: "May 25, 2024",
      category: "Care Tips"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Featured Content
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Expert Insights</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Curated articles from our automotive care specialists</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-emerald-600 font-medium">{post.date}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.description}
                </p>
                <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors group">
                  Read Full Article 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
