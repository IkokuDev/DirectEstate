import React, { useState } from 'react';
import { Upload, ShieldAlert, CheckCircle2, FileText, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/card';

export default function AddProperty() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">List Your Property</h1>
        <p className="text-gray-500 mt-1">Upload details and verify ownership to reach buyers directly.</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 -z-10 transition-all duration-500" style={{ width: `${(step - 1) * 50}%` }}></div>
        
        {[1, 2, 3].map((i) => (
          <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 ${step >= i ? 'bg-blue-600 border-blue-100 text-white' : 'bg-white border-gray-200 text-gray-400'}`}>
            {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && "Property Details"}
            {step === 2 && "Media & Photos"}
            {step === 3 && "Verification Documents"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Basic information about your property."}
            {step === 2 && "Upload high-quality photos to attract buyers."}
            {step === 3 && "Upload title documents and ID for the 'Verified' badge."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Listing Type</label>
                  <select className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                    <option>For Sale</option>
                    <option>For Rent</option>
                    <option>Fractional Investment</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Property Type</label>
                  <select className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                    <option>House / Villa</option>
                    <option>Apartment</option>
                    <option>Commercial</option>
                    <option>Land</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Property Title</label>
                <Input placeholder="e.g. Modern 4 Bedroom Duplex in Lekki" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <Input placeholder="Full address or neighborhood" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Price ($)</label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Bedrooms</label>
                  <Input type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Bathrooms</label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea 
                  className="flex min-h-[100px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  placeholder="Describe the key features and selling points..."
                ></textarea>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Click to upload photos</h3>
                <p className="text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-800">
                <ShieldAlert className="w-6 h-6 shrink-0" />
                <p className="text-sm">
                  To get the <strong>Verified Badge</strong>, you must upload valid title documents (e.g., C of O, Deed of Assignment) and a valid Government ID. This builds trust and helps your property sell faster.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg"><FileText className="w-5 h-5 text-gray-600" /></div>
                    <div>
                      <p className="font-medium text-gray-900">Title Document</p>
                      <p className="text-xs text-gray-500">C of O, Deed, etc. (PDF)</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2"><Upload className="w-4 h-4" /> Upload</Button>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg"><FileText className="w-5 h-5 text-gray-600" /></div>
                    <div>
                      <p className="font-medium text-gray-900">Government ID</p>
                      <p className="text-xs text-gray-500">Passport, Driver's License</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2"><Upload className="w-4 h-4" /> Upload</Button>
                </div>
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-gray-100 flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              Back
            </Button>
            <Button 
              onClick={() => {
                if (step < 3) setStep(step + 1);
                else alert('Property submitted for verification!');
              }}
            >
              {step === 3 ? 'Submit Listing' : 'Continue'}
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
