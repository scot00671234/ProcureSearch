import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get access to our full platform features
          </p>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:divide-x lg:divide-gray-200">
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-gray-900">Procurement Teams</h3>
            <p className="mt-4 text-gray-600">
              Full access to supplier database and procurement tools
            </p>
            <div className="mt-6">
              <div className="flex items-baseline text-5xl font-extrabold text-gray-900">
                $1,000
                <span className="ml-1 text-2xl font-medium text-gray-500">/month</span>
              </div>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                {[
                  'Unlimited supplier searches',
                  'Advanced filtering options',
                  'Direct supplier contact',
                  'Market insights access',
                  'Analytics dashboard',
                  'Priority support'
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Get started
              </button>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-gray-900">Suppliers</h3>
            <p className="mt-4 text-gray-600">
              Create and manage your product listings
            </p>
            <div className="mt-6">
              <div className="flex items-baseline text-5xl font-extrabold text-gray-900">
                Free
              </div>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                {[
                  'Company profile',
                  'Product listings',
                  'Basic analytics',
                  'Customer inquiries',
                  'Standard support',
                  'Listing management tools'
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Register now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Need a custom plan? <a href="#" className="text-blue-600 hover:text-blue-700">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;