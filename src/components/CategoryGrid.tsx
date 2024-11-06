import React from 'react';
import { Monitor, Stethoscope, Factory, Building, ShoppingBag, Briefcase } from 'lucide-react';

const CategoryGrid = () => {
  const categories = [
    { id: 1, name: 'Technology', icon: Monitor, count: 1250 },
    { id: 2, name: 'Healthcare', icon: Stethoscope, count: 850 },
    { id: 3, name: 'Manufacturing', icon: Factory, count: 1100 },
    { id: 4, name: 'Real Estate', icon: Building, count: 650 },
    { id: 5, name: 'Retail', icon: ShoppingBag, count: 920 },
    { id: 6, name: 'Professional Services', icon: Briefcase, count: 780 }
  ];

  const handleCategoryClick = (categoryName: string) => {
    alert(`Navigating to ${categoryName} category page`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count.toLocaleString()} listings</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryGrid;