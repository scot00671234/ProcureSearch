import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      title: 'Enterprise Procurement Solutions',
      company: 'TechPro Solutions',
      description: 'Comprehensive procurement management system for large enterprises',
      rating: 4.8,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Healthcare Supply Chain Management',
      company: 'MedSupply Pro',
      description: 'Specialized procurement solutions for healthcare institutions',
      rating: 4.7,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500',
      category: 'Healthcare'
    },
    {
      id: 3,
      title: 'Manufacturing Resource Planning',
      company: 'IndustryFlow',
      description: 'End-to-end procurement and resource planning for manufacturers',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1565343429117-cf8d9a937d76?auto=format&fit=crop&q=80&w=500',
      category: 'Manufacturing'
    }
  ];

  const handleContactClick = (listing: typeof listings[0]) => {
    alert(`Opening contact form for ${listing.title} by ${listing.company}`);
  };

  const handleListingClick = (listing: typeof listings[0]) => {
    alert(`Navigating to detailed view of ${listing.title}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {listings.map((listing) => (
        <div 
          key={listing.id} 
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
        >
          <div 
            onClick={() => handleListingClick(listing)}
            className="cursor-pointer"
          >
            <img 
              src={listing.image} 
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-blue-600 font-medium mb-2">{listing.category}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{listing.title}</h3>
              <p className="text-gray-600 mb-4">{listing.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{listing.rating}</span>
                  <span className="text-gray-500">({listing.reviews})</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick(listing);
                  }}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedListings;