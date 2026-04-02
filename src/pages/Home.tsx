import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Filter, ShieldCheck, Bed, Bath, Square } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Card, CardContent, CardFooter } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';

// Mock Data
const MOCK_PROPERTIES = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    type: 'Buy',
    price: 850000,
    location: 'Lekki Phase 1, Lagos',
    beds: 4,
    baths: 5,
    sqft: 3200,
    image: 'https://picsum.photos/seed/villa1/800/600',
    verified: true,
  },
  {
    id: '2',
    title: 'Spacious 2BR Apartment',
    type: 'Rent',
    price: 25000, // per year
    location: 'Victoria Island, Lagos',
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: 'https://picsum.photos/seed/apt1/800/600',
    verified: true,
  },
  {
    id: '3',
    title: 'Commercial Office Space',
    type: 'Invest',
    price: 1200000,
    location: 'Ikoyi, Lagos',
    beds: 0,
    baths: 4,
    sqft: 5000,
    image: 'https://picsum.photos/seed/office1/800/600',
    verified: false,
  },
  {
    id: '4',
    title: 'Cozy Studio Apartment',
    type: 'Rent',
    price: 12000,
    location: 'Yaba, Lagos',
    beds: 1,
    baths: 1,
    sqft: 450,
    image: 'https://picsum.photos/seed/studio1/800/600',
    verified: true,
  },
  {
    id: '5',
    title: 'Fractional Beachfront Condo',
    type: 'Invest',
    price: 50000, // per fraction
    location: 'Epe, Lagos',
    beds: 3,
    baths: 3,
    sqft: 1800,
    image: 'https://picsum.photos/seed/condo1/800/600',
    verified: true,
  },
  {
    id: '6',
    title: 'Suburban Family Home',
    type: 'Buy',
    price: 450000,
    location: 'Ikeja GRA, Lagos',
    beds: 5,
    baths: 4,
    sqft: 2800,
    image: 'https://picsum.photos/seed/house1/800/600',
    verified: true,
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = MOCK_PROPERTIES.filter(p => 
    (activeTab === 'All' || p.type === activeTab) &&
    (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Hero Search Section */}
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Find your next <span className="text-blue-600">property</span> directly.
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Connect directly with owners. Verified listings, secure escrow payments, and zero unnecessary middleman fees.
        </p>

        <div className="max-w-3xl mx-auto bg-gray-50 p-2 rounded-2xl flex flex-col md:flex-row gap-2">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search location or property..." 
              className="pl-10 h-12 bg-white border-none shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-12 px-6 bg-white border-none shadow-sm gap-2">
            <Filter className="w-4 h-4" /> Filters
          </Button>
          <Button className="h-12 px-8 text-base">
            Search
          </Button>
        </div>

        {/* Smart Search Tabs */}
        <div className="flex justify-center gap-2 pt-4">
          {['All', 'Rent', 'Buy', 'Invest'].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'default' : 'outline'}
              className="rounded-full px-6"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </section>

      {/* Listings Grid */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Verified Properties</h2>
            <p className="text-gray-500">Direct from owners, verified by our team.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <Card className="overflow-hidden hover:shadow-md transition-all group cursor-pointer border-gray-200">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="default" className="bg-white/90 text-gray-900 hover:bg-white backdrop-blur-sm">
                      {property.type}
                    </Badge>
                    {property.verified && (
                      <Badge variant="success" className="bg-green-500/90 text-white hover:bg-green-500 backdrop-blur-sm gap-1">
                        <ShieldCheck className="w-3 h-3" /> Verified
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-gray-900/80 text-white hover:bg-gray-900 backdrop-blur-sm">
                      ${property.price.toLocaleString()}{property.type === 'Rent' ? '/yr' : ''}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{property.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mt-1 gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {property.location}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                    {property.beds > 0 && (
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-gray-400" />
                        <span>{property.beds} Beds</span>
                      </div>
                    )}
                    {property.baths > 0 && (
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-gray-400" />
                        <span>{property.baths} Baths</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <Square className="w-4 h-4 text-gray-400" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No properties found matching your criteria.
          </div>
        )}
      </section>
    </div>
  );
}
