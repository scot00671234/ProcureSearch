import React from 'react';
import { Shield, Users, BarChart3 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About ProcureSearch
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Connecting businesses with reliable suppliers worldwide
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Trusted Platform</h3>
              <p className="mt-2 text-base text-gray-500">
                We verify all suppliers and ensure high-quality standards for all listings
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Global Network</h3>
              <p className="mt-2 text-base text-gray-500">
                Connect with thousands of suppliers and procurement professionals worldwide
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <BarChart3 className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Market Intelligence</h3>
              <p className="mt-2 text-base text-gray-500">
                Access real-time market insights and procurement analytics
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            ProcureSearch is dedicated to revolutionizing the procurement process by creating
            a transparent, efficient, and reliable platform that connects businesses with
            qualified suppliers. Our goal is to streamline procurement operations and foster
            successful business relationships worldwide.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose ProcureSearch?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">For Procurement Teams</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Access to verified suppliers worldwide</li>
                <li>• Advanced search and filtering capabilities</li>
                <li>• Detailed supplier profiles and ratings</li>
                <li>• Market insights and analytics</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">For Suppliers</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Increased visibility to potential buyers</li>
                <li>• Easy-to-use listing management</li>
                <li>• Direct communication with buyers</li>
                <li>• Performance analytics and insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;