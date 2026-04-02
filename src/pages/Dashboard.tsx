import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, PieChart, Activity, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/card';

const priceData = [
  { month: 'Jan', price: 400000 },
  { month: 'Feb', price: 410000 },
  { month: 'Mar', price: 405000 },
  { month: 'Apr', price: 420000 },
  { month: 'May', price: 435000 },
  { month: 'Jun', price: 450000 },
];

const yieldData = [
  { location: 'Lekki', yield: 6.5 },
  { location: 'Ikoyi', yield: 5.2 },
  { location: 'VI', yield: 5.8 },
  { location: 'Ikeja', yield: 7.1 },
  { location: 'Yaba', yield: 8.4 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Analytics & Investments</h1>
        <p className="text-gray-500 mt-1">Track market trends, rental yields, and your fractional portfolio.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Market Trend</p>
              <h3 className="text-2xl font-bold text-gray-900">+12.5%</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Avg Rental Yield</p>
              <h3 className="text-2xl font-bold text-gray-900">6.8%</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
              <PieChart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Your Fractions</p>
              <h3 className="text-2xl font-bold text-gray-900">3</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Portfolio Value</p>
              <h3 className="text-2xl font-bold text-gray-900">$145k</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Trends Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Property Price Trends</CardTitle>
            <CardDescription>Average property prices over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Avg Price']}
                  />
                  <Area type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Rental Yield Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Estimated Rental Yields</CardTitle>
            <CardDescription>Average ROI percentage by location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yieldData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="location" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} tickFormatter={(value) => `${value}%`} />
                  <Tooltip 
                    cursor={{ fill: '#f3f4f6' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`${value}%`, 'Yield']}
                  />
                  <Bar dataKey="yield" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fractional Investments */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Fractional Portfolio</h2>
        <Card>
          <div className="divide-y divide-gray-100">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/seed/invest${i}/200/200`} alt="Property" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Luxury Condo Fraction {i}</h4>
                    <p className="text-sm text-gray-500">Epe, Lagos • 5% Ownership</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-bold text-gray-900">$25,000</p>
                  <p className="text-sm text-green-600 font-medium">+4.2% this year</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
