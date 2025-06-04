
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Science Behind Steam Cleaning: Why It's Superior",
      description: "Discover how steam cleaning technology revolutionizes car detailing by sanitizing and cleaning without harsh chemicals.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80",
      date: "June 1, 2024",
      category: "Technology"
    },
    {
      id: 2,
      title: "Mobile Detailing: Convenience Meets Professional Quality",
      description: "Learn why mobile car detailing is becoming the preferred choice for busy professionals and car enthusiasts alike.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
      date: "May 28, 2024",
      category: "Services"
    },
    {
      id: 3,
      title: "Seasonal Car Care: Protecting Your Investment Year-Round",
      description: "Essential tips for maintaining your vehicle's appearance and value through different weather conditions and seasons.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
      date: "May 25, 2024",
      category: "Tips"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Posts</h3>
          <p className="text-lg text-gray-600">Hand-picked articles from our automotive experts</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-gray-500">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.description}
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
