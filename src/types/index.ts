export interface User {
  id: string;
  email: string;
  role: 'supplier' | 'procurement';
  companyName: string;
}

export interface Listing {
  id: string;
  title: string;
  company: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  location: string;
  shipmentMethod: string[];
  deliveryTime: string;
  creditTime: string;
  supplierId: string;
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: Date;
  category: string;
  image: string;
}

export interface SearchFilters {
  industry?: string;
  location?: string;
  shipmentMethod?: string;
  deliveryTime?: string;
  creditTime?: string;
  minRating?: number;
}