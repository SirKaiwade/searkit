import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, Package, Edit, Palette, Type, Info, Instagram, Facebook, Globe, Plus, Minus } from 'lucide-react';
import html2canvas from 'html2canvas';
import { setPageTitle } from '../utils/pageTitle';

const downloadDesign = async (previewRef) => {
  if (!previewRef.current) return;

  try {
    const canvas = await html2canvas(previewRef.current, {
      scale: 2,
      backgroundColor: null,
      logging: false,
      useCORS: true
    });

    const link = document.createElement('a');
    link.download = 'searkit-design.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('Error generating image:', error);
  }
};

const CustomizationTool = () => {
  useEffect(() => {
    setPageTitle('For Restaurants');
  }, []);

  // State for customization options
  const [taglines, setTaglines] = useState(['Your Brand Here']);
  const [taglineSizes, setTaglineSizes] = useState(['medium']);
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [selectedPalette, setSelectedPalette] = useState({
    background: '#000000',
    text: '#FFFFFF'
  });
  const [selectedFont, setSelectedFont] = useState('Cal Sans');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState('');
  
  // Refs
  const fileInputRef = useRef(null);
  const previewRef = useRef(null);
  
  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onload = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleTaglineChange = (index, value) => {
    const newTaglines = [...taglines];
    newTaglines[index] = value;
    setTaglines(newTaglines);
  };

  const handleSizeChange = (index, size) => {
    const newSizes = [...taglineSizes];
    newSizes[index] = size;
    setTaglineSizes(newSizes);
  };

  const addTagline = () => {
    if (taglines.length < 3) {
      setTaglines([...taglines, '']);
      setTaglineSizes([...taglineSizes, 'medium']);
    }
  };

  const removeTagline = (index) => {
    const newTaglines = taglines.filter((_, i) => i !== index);
    const newSizes = taglineSizes.filter((_, i) => i !== index);
    setTaglines(newTaglines);
    setTaglineSizes(newSizes);
  };

  const getTaglineSize = (size) => {
    switch (size) {
      case 'small': return 'text-2xl';
      case 'large': return 'text-4xl';
      default: return 'text-3xl';
    }
  };

  const colorPalettes = [
    { name: 'Classic', background: '#000000', text: '#FFFFFF' },
    { name: 'Light', background: '#FFFFFF', text: '#000000' },
    { name: 'Ocean', background: '#1B4965', text: '#FFFFFF' },
    { name: 'Forest', background: '#2D3A3A', text: '#E8F1F2' },
    { name: 'Sunset', background: '#2B1B17', text: '#E8A87C' },
    { name: 'Desert', background: '#8B4513', text: '#F5DEB3' },
  ];

  return (
    <div className="pt-36">
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[hsl(var(--coffee))]">Customize Your SearKit</h1>
            <p className="text-xl text-gray-600">
              Brand your own grill kit with your restaurant's colors, logo, and signature sauces.
              See changes in real-time with our preview tool.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Panel - Customization Controls */}
              <div className="lg:w-1/2 p-6 lg:p-8 bg-gray-50 border-r border-gray-200">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Edit size={20} className="mr-2 text-orange-500" />
                  Customization Options
                </h2>
                
                {/* Logo Upload */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <UploadCloud size={18} className="mr-2 text-gray-600" />
                    Upload Logo
                  </h3>
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-orange-500 transition-colors"
                    onClick={() => fileInputRef.current.click()}
                  >
                    {logoPreview ? (
                      <div className="flex flex-col items-center">
                        <img 
                          src={logoPreview} 
                          alt="Uploaded logo" 
                          className="h-24 object-contain"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setLogoPreview('');
                            setLogo(null);
                            if (fileInputRef.current) {
                              fileInputRef.current.value = '';
                            }
                          }}
                          className="mt-4 text-red-500 hover:text-red-600 text-sm font-medium flex items-center"
                        >
                          Remove Logo
                        </button>
                      </div>
                    ) : (
                      <div>
                        <UploadCloud size={40} className="mx-auto text-gray-400 mb-2" />
                        <p className="text-gray-600">Click to upload your logo</p>
                        <p className="text-sm text-gray-500 mt-1">PNG with transparent background recommended</p>
                      </div>
                    )}
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      className="hidden" 
                      accept="image/*"
                      onChange={handleLogoUpload}
                    />
                  </div>
                </div>
                
                {/* Brand Name */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Type size={18} className="mr-2 text-gray-600" />
                    Taglines
                  </h3>
                  <div className="space-y-4">
                    {taglines.map((tagline, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input 
                          type="text" 
                          value={tagline} 
                          onChange={(e) => handleTaglineChange(index, e.target.value)}
                          className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder={`Tagline ${index + 1}`}
                        />
                        <div className="flex gap-2">
                          {['small', 'medium', 'large'].map((size) => (
                            <button
                              key={size}
                              onClick={() => handleSizeChange(index, size)}
                              className={`px-3 py-1 rounded-md capitalize text-sm ${
                                taglineSizes[index] === size
                                  ? 'bg-orange-500 text-white'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                        {index > 0 && (
                          <button
                            onClick={() => removeTagline(index)}
                            className="p-2 text-gray-500 hover:text-red-500"
                          >
                            <Minus size={20} />
                          </button>
                        )}
                      </div>
                    ))}
                    {taglines.length < 3 && (
                      <button
                        onClick={addTagline}
                        className="flex items-center text-sm text-orange-500 hover:text-orange-600"
                      >
                        <Plus size={16} className="mr-1" />
                        Add another line
                      </button>
                    )}
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Palette size={18} className="mr-2 text-gray-600" />
                    Colors
                  </h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {colorPalettes.map((palette, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setBackgroundColor(palette.background);
                          setTextColor(palette.text);
                          setSelectedPalette(palette);
                        }}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedPalette.background === palette.background
                            ? 'border-orange-500 scale-105'
                            : 'border-transparent hover:border-gray-300'
                        }`}
                      >
                        <div 
                          className="w-full h-12 rounded-md mb-2" 
                          style={{ backgroundColor: palette.background }}
                        >
                          <div 
                            className="w-full h-full flex items-center justify-center text-sm font-medium"
                            style={{ color: palette.text }}
                          >
                            Aa
                          </div>
                        </div>
                        <p className="text-sm text-center">{palette.name}</p>
                      </button>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Background Color
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={backgroundColor}
                          onChange={(e) => setBackgroundColor(e.target.value)}
                          className="h-10 w-10 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={backgroundColor}
                          onChange={(e) => setBackgroundColor(e.target.value)}
                          className="flex-grow px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Text Color
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="h-10 w-10 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="flex-grow px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Font Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Type size={18} className="mr-2 text-gray-600" />
                    Font Style
                  </h3>
                  <div>
                    <select
                      value={selectedFont}
                      onChange={(e) => setSelectedFont(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="Cal Sans" style={{ fontFamily: 'Cal Sans' }}>Cal Sans (Modern)</option>
                      <option value="Playfair Display" style={{ fontFamily: 'Playfair Display' }}>Playfair Display (Elegant)</option>
                      <option value="Montserrat" style={{ fontFamily: 'Montserrat' }}>Montserrat (Clean)</option>
                      <option value="Oswald" style={{ fontFamily: 'Oswald' }}>Oswald (Bold)</option>
                      <option value="Lora" style={{ fontFamily: 'Lora' }}>Lora (Sophisticated)</option>
                      <option value="Merriweather" style={{ fontFamily: 'Merriweather' }}>Merriweather (Classic)</option>
                      <option value="Roboto Slab" style={{ fontFamily: 'Roboto Slab' }}>Roboto Slab (Modern Serif)</option>
                      <option value="Source Sans Pro" style={{ fontFamily: 'Source Sans Pro' }}>Source Sans Pro (Professional)</option>
                      <option value="Poppins" style={{ fontFamily: 'Poppins' }}>Poppins (Contemporary)</option>
                      <option value="EB Garamond" style={{ fontFamily: 'EB Garamond' }}>EB Garamond (Traditional)</option>
                    </select>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Globe size={18} className="mr-2 text-gray-600" />
                    Social Media & Website
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Website URL
                        <span className="text-gray-500 text-xs ml-1">(e.g., www.restaurant.com)</span>
                      </label>
                      <input 
                        type="text" 
                        value={websiteUrl} 
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="www.restaurant.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instagram Profile
                        <span className="text-gray-500 text-xs ml-1">(without @)</span>
                      </label>
                      <input 
                        type="text" 
                        value={instagramUrl} 
                        onChange={(e) => setInstagramUrl(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="yourrestaurant"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Facebook Page
                        <span className="text-gray-500 text-xs ml-1">(e.g., facebook.com/restaurant)</span>
                      </label>
                      <input 
                        type="text" 
                        value={facebookUrl} 
                        onChange={(e) => setFacebookUrl(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="facebook.com/restaurant"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Panel - Preview */}
              <div className="lg:w-1/2 p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Package size={20} className="mr-2 text-orange-500" />
                  Live Preview
                </h2>
                
                <div ref={previewRef} className="border border-gray-200 rounded-lg p-4">
                  <div className="rounded-lg p-8" style={{ backgroundColor }}>
                    {/* Logo Section */}
                    {logoPreview ? (
                      <img 
                        src={logoPreview} 
                        alt="Restaurant logo" 
                        className="w-full h-48 object-contain mb-6"
                      />
                    ) : (
                      <div className="w-full h-48 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-lg mb-6">
                        <span className="text-gray-500">Upload your logo</span>
                      </div>
                    )}
                    
                    {/* Brand Name */}
                    <div className={`text-center font-bold mb-4 space-y-2`} style={{ fontFamily: selectedFont, color: textColor }}>
                      {taglines.map((tagline, index) => (
                        tagline && (
                          <div key={index} className={`${getTaglineSize(taglineSizes[index])}`}>
                            {tagline}
                          </div>
                        )
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 text-gray-400">
                      {websiteUrl && (
                        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                          <Globe size={20} />
                          <span className="ml-2">{websiteUrl}</span>
                        </a>
                      )}
                      {instagramUrl && (
                        <a href={`https://instagram.com/${instagramUrl}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                          <Instagram size={20} />
                          <span className="ml-2">{instagramUrl}</span>
                        </a>
                      )}
                      {facebookUrl && (
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                          <Facebook size={20} />
                          <span className="ml-2">{facebookUrl}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex items-start">
                    <Info size={20} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">
                      This preview gives you an idea of how your branded kit will look. The actual product may vary slightly. 
                      Once you're satisfied with your customization, our team will contact you to discuss partnership details.
                    </p>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <button 
                      onClick={() => downloadDesign(previewRef)}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-md"
                    >
                      Download Your Design
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Partner With Us</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Join our network of restaurants offering the SearKit experience to your customers.
              Here's what you can expect from our partnership:
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0">1</span>
                  <p className="text-gray-700">
                    <strong>You cook.</strong> Use your kitchen to prep the ingredients that make your restaurant special.
                  </p>
                </li>
                <li className="flex">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0">2</span>
                  <p className="text-gray-700">
                    <strong>We package.</strong> We provide the SearKit system and handle the packaging with your branding.
                  </p>
                </li>
                <li className="flex">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0">3</span>
                  <p className="text-gray-700">
                    <strong>We deliver.</strong> Our logistics network ensures your food reaches customers in perfect condition.
                  </p>
                </li>
                <li className="flex">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 flex-shrink-0">4</span>
                  <p className="text-gray-700">
                    <strong>Everyone profits.</strong> You expand your reach, customers get a unique experience, we handle the infrastructure.
                  </p>
                </li>
              </ol>
            </div>
            
            <div className="text-center">
              <a href="#contact-form" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Get More Information
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomizationTool;