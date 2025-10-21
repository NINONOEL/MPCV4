<template>
<div class="min-h-screen bg-white overflow-x-hidden">
<nav class="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg z-50 transition-all duration-300">
  <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-5">
    <div class="flex justify-between items-center h-11 md:h-12">
      <div class="flex items-center space-x-2 group cursor-pointer" @click="scrollToSection('home')">
        <div class="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-customer-primary-600 to-customer-secondary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
          <PaletteIcon class="h-3 w-3 md:h-3.5 md:w-3.5 text-white" />
        </div>
        <div>
          <h1 class="text-xs md:text-sm font-black text-neutral-900">BARCELONA</h1>
          <p class="text-xs md:text-xs text-neutral-600 font-semibold -mt-0.5">PAINT CENTER</p>
        </div>
      </div>
      
      <div class="hidden lg:flex items-center space-x-4">
        <a href="#home" class="text-neutral-700 hover:text-customer-primary-600 font-semibold px-2 py-1 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-xs">Home</a>
        <a href="#services" class="text-neutral-700 hover:text-customer-primary-600 font-semibold px-2 py-1 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-xs">Services</a>
        <a href="#about" class="text-neutral-700 hover:text-customer-primary-600 font-semibold px-2 py-1 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-xs">About</a>
        
        <router-link to="/login" class="btn-customer-secondary text-xs">
          <UserIcon class="h-3.5 w-3.5 mr-1.5" />
          Login
        </router-link>
        
        <button @click="scrollToSection('contact')" class="btn-customer-primary text-xs">
          <SparklesIcon class="h-3.5 w-3.5 mr-1.5" />
          Get Quote
        </button>
      </div>
      
      <div class="lg:hidden">
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-1.5 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
          <MenuIcon v-if="!mobileMenuOpen" class="h-4 w-4" />
          <XIcon v-else class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
  
  <div v-if="mobileMenuOpen" class="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
    <div class="px-3 py-2 space-y-1.5">
      <a href="#home" @click="mobileMenuOpen = false" class="block text-neutral-700 hover:text-customer-primary-600 font-semibold py-1.5 px-2 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-xs">Home</a>
      <a href="#services" @click="mobileMenuOpen = false" class="block text-neutral-700 hover:text-customer-primary-600 font-semibold py-1.5 px-2 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-xs">Services</a>
      <a href="#about" @click="mobileMenuOpen = false" class="block text-neutral-700 hover:text-customer-primary-600 font-semibold py-1.5 px-2 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-xs">About</a>
      
      <router-link to="/login" @click="mobileMenuOpen = false" class="w-full btn-customer-secondary text-xs mt-1.5 block text-center">
        <UserIcon class="h-3.5 w-3.5 mr-1" />
        Login
      </router-link>
      
      <button @click="scrollToSection('contact'); mobileMenuOpen = false" class="w-full btn-customer-primary text-xs mt-1.5">
        <SparklesIcon class="h-3.5 w-3.5 mr-1" />
        Get Quote
      </button>
    </div>
  </div>
</nav>

<section id="home" class="pt-10 md:pt-11 min-h-screen flex items-center bg-white">
  <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-5 py-5 md:py-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
      <div class="text-center lg:text-left space-y-4">
        <div class="inline-flex items-center bg-gradient-to-r from-customer-primary-50 to-customer-secondary-50 border border-customer-primary-200/50 text-customer-primary-700 px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-customer-sm">
          <TrophyIcon class="h-3 w-3 mr-1.5 text-customer-primary-600" />
          #1 Paint Center in Calapan City
        </div>
                
        <div class="space-y-2.5">
          <h1 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-neutral-900 leading-tight tracking-tight">
            Perfect Paint Colors,
            <span class="text-customer-gradient">
              Every Time Made Just for You
            </span>
          </h1>
                    
          <p class="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Transform your space with our <span class="text-customer-primary-600 font-semibold">precision color matching</span> and 
            <span class="text-admin-primary-600 font-semibold">expert consultation</span> services.
          </p>
        </div>
                
        <div class="flex flex-col sm:flex-row items-stretch gap-2.5 pt-1.5">
          <button @click="scrollToSection('services')" class="group btn-customer-primary flex-1 h-10">
            <PaletteIcon class="h-4 w-4 mr-1.5" />
            Explore Services
            <ArrowRightIcon class="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        
          <button @click="scrollToSection('contact')" class="btn-customer-secondary flex-1 h-10 flex-col">
            <div class="flex items-center justify-center">
              <PhoneIcon class="h-3.5 w-3.5 mr-1" />
              <span class="text-xs font-bold">Call</span>
            </div>
          </button>
        </div>
                
        <div class="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-200">
          <div class="flex items-center space-x-1.5">
            <div class="w-6 h-6 bg-gradient-to-br from-staff-primary-500 to-staff-accent-500 rounded-full flex items-center justify-center shadow-md">
              <CheckIcon class="h-2.5 w-2.5 text-white" />
            </div>
            <div>
              <div class="font-bold text-neutral-900 text-xs">20+ Years</div>
              <div class="text-xs text-neutral-600">Experience</div>
            </div>
          </div>
                    
          <div class="flex items-center space-x-1.5">
            <div class="w-6 h-6 bg-gradient-to-br from-admin-primary-500 to-admin-accent-500 rounded-full flex items-center justify-center shadow-md">
              <StarIcon class="h-2.5 w-2.5 text-white fill-current" />
            </div>
            <div>
              <div class="font-bold text-neutral-900 text-xs">99% Accuracy</div>
              <div class="text-xs text-neutral-600">Color Match</div>
            </div>
          </div>
                    
          <div class="flex items-center space-x-1.5">
            <div class="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
              <ClockIcon class="h-2.5 w-2.5 text-white" />
            </div>
            <div>
              <div class="font-bold text-neutral-900 text-xs">Same Day</div>
              <div class="text-xs text-neutral-600">Service</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="relative">
        <div class="card-customer p-4 md:p-5">
          <div class="text-center space-y-4">
            <div class="flex justify-center">
              <div class="w-12 h-12 bg-customer-primary-gradient rounded-full flex items-center justify-center shadow-customer-lg">
                <PaletteIcon class="h-6 w-6 text-white" />
              </div>
            </div>
            
            <div class="space-y-2.5">
              <h3 class="text-sm font-bold text-neutral-900">Professional Color Mixing</h3>
              <div class="grid grid-cols-6 gap-1.5 max-w-sm mx-auto">
                <div class="h-9 bg-gradient-to-b from-customer-primary-400 to-customer-primary-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                <div class="h-10 bg-gradient-to-b from-admin-primary-400 to-admin-primary-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                <div class="h-11 bg-gradient-to-b from-customer-accent-400 to-customer-accent-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                <div class="h-10 bg-gradient-to-b from-staff-primary-400 to-staff-primary-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                <div class="h-9 bg-gradient-to-b from-admin-secondary-400 to-admin-secondary-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                <div class="h-9 bg-gradient-to-b from-pink-400 to-pink-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 gap-2.5 pt-2.5 border-t border-neutral-200/50">
              <div class="text-center">
                <div class="text-base font-black text-customer-gradient">15K+</div>
                <div class="text-xs text-neutral-600">Customers</div>
              </div>
              <div class="text-center">
                <div class="text-base font-black text-admin-gradient">99%</div>
                <div class="text-xs text-neutral-600">Accuracy</div>
              </div>
              <div class="text-center">
                <div class="text-base font-black text-staff-gradient">24/7</div>
                <div class="text-xs text-neutral-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="services" class="py-10 bg-gradient-to-b from-white to-neutral-50">
  <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-5">
    <div class="text-center mb-8">
      <div class="inline-flex items-center bg-gradient-to-r from-admin-primary-50 to-admin-secondary-50 border border-admin-primary-200/50 text-admin-primary-700 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2.5">
        <SparklesIcon class="h-3 w-3 mr-1.5" />
        Our Services
      </div>
      <h2 class="text-xl md:text-2xl font-black text-neutral-900 mb-2.5 tracking-tight">
        Our Expert <span class="text-customer-gradient">Services</span>
      </h2>
      <p class="text-sm md:text-base text-neutral-600 max-w-4xl mx-auto leading-relaxed">
        From precision color matching to professional consultation, we provide comprehensive paint solutions.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
      <div class="group card-customer p-4">
        <div class="relative z-10">
          <div class="w-11 h-11 bg-customer-primary-gradient rounded-2xl flex items-center justify-center shadow-customer-md group-hover:scale-110 transition-transform duration-300 mb-4">
            <PaletteIcon class="h-5.5 w-5.5 text-white" />
          </div>
                    
          <h3 class="text-base md:text-lg font-black text-neutral-900 mb-2.5">Custom Paint Mixing</h3>
          <p class="text-neutral-600 mb-4 leading-relaxed text-sm">
            Precision color matching using advanced spectrophotometer technology. Bring any sample and we'll create the perfect match with 99% accuracy guarantee.
          </p>
                    
          <div class="space-y-1.5 mb-4">
            <div class="flex items-center">
              <div class="w-3.5 h-3.5 bg-gradient-to-br from-staff-primary-500 to-staff-accent-500 rounded-full flex items-center justify-center mr-2.5">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-xs">99% color accuracy guarantee</span>
            </div>
            <div class="flex items-center">
              <div class="w-3.5 h-3.5 bg-gradient-to-br from-admin-primary-500 to-admin-accent-500 rounded-full flex items-center justify-center mr-2.5">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-xs">Any brand, any finish available</span>
            </div>
            <div class="flex items-center">
              <div class="w-3.5 h-3.5 bg-gradient-to-br from-admin-secondary-500 to-pink-500 rounded-full flex items-center justify-center mr-2.5">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-xs">Same-day service available</span>
            </div>
          </div>
                    
          <button @click="scrollToSection('contact')" class="w-full btn-customer-primary text-xs">
            <PaletteIcon class="h-3.5 w-3.5 mr-1.5" />
            Get Color Match
          </button>
        </div>
      </div>
      
      <div class="group card-admin p-4">
        <div class="relative z-10">
          <div class="w-11 h-11 bg-admin-primary-gradient rounded-2xl flex items-center justify-center shadow-admin-md group-hover:scale-110 transition-transform duration-300 mb-4">
            <HomeIcon class="h-5.5 w-5.5 text-white" />
          </div>
                    
          <h3 class="text-base md:text-lg font-black text-neutral-900 mb-2.5">House Color Recommender</h3>
          <p class="text-neutral-600 mb-4 leading-relaxed text-sm">
            Professional color consultation for interior and exterior projects. Our certified experts help you choose the perfect palette that matches your house color style.
          </p>
                    
          <div class="space-y-1.5 mb-4">
            <div class="flex items-center">
              <div class="w-3.5 h-3.5 bg-gradient-to-br from-staff-primary-500 to-staff-accent-500 rounded-full flex items-center justify-center mr-2.5">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-xs">Certified color consultants</span>
            </div>
            <div class="flex items-center">
              <div class="w-3.5 h-3.5 bg-gradient-to-br from-admin-primary-500 to-admin-accent-500 rounded-full flex items-center justify-center mr-2.5">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-xs">Interior & exterior expertise</span>
            </div>
            <div class="flex items-center">
              <div class="w-3.5 h-3.5 bg-gradient-to-br from-admin-secondary-500 to-pink-500 rounded-full flex items-center justify-center mr-2.5">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-xs">3D visualization available</span>
            </div>
          </div>
                    
          <button @click="scrollToSection('contact')" class="w-full btn-admin-primary text-xs">
            <HomeIcon class="h-3.5 w-3.5 mr-1.5" />
            Get Recommendation
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about" class="py-10 bg-gradient-to-b from-neutral-50 to-white">
  <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-5">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div>
        <div class="inline-flex items-center bg-gradient-to-r from-customer-primary-50 to-customer-secondary-50 border border-customer-primary-200/50 text-customer-primary-700 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-4">
          <AwardIcon class="h-3 w-3 mr-1.5" />
          About Us
        </div>
                
        <h2 class="text-lg sm:text-xl lg:text-2xl font-black text-neutral-900 mb-4 tracking-tight">
          About <span class="text-customer-gradient">Barcelona Paint Center</span>
        </h2>
                
        <p class="text-sm md:text-base text-neutral-600 mb-5 leading-relaxed">
          For over two decades, we've been the Philippines' most trusted partner for premium paint solutions and expert color consultation.
        </p>
                
        <div class="space-y-4">
          <div class="flex items-start space-x-2.5">
            <div class="w-9 h-9 bg-customer-primary-gradient rounded-xl flex items-center justify-center shadow-customer-md flex-shrink-0">
              <AwardIcon class="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-neutral-900 mb-0.5">20+ Years of Excellence</h3>
              <p class="text-neutral-600 leading-relaxed text-xs">Two decades of serving homeowners, designers, and contractors with unmatched quality and precision.</p>
            </div>
          </div>
                    
          <div class="flex items-start space-x-2.5">
            <div class="w-9 h-9 bg-admin-primary-gradient rounded-xl flex items-center justify-center shadow-admin-md flex-shrink-0">
              <UsersIcon class="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-neutral-900 mb-0.5">15,000+ Happy Customers</h3>
              <p class="text-neutral-600 leading-relaxed text-xs">Trusted by thousands of satisfied customers across Metro Manila and beyond.</p>
            </div>
          </div>
                    
          <div class="flex items-start space-x-2.5">
            <div class="w-9 h-9 bg-staff-primary-gradient rounded-xl flex items-center justify-center shadow-staff-md flex-shrink-0">
              <ShieldCheckIcon class="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-neutral-900 mb-0.5">99% Color Accuracy</h3>
              <p class="text-neutral-600 leading-relaxed text-xs">Industry-leading precision with our advanced color matching technology and expert technicians.</p>
            </div>
          </div>
        </div>
      </div>
            
      <div class="card-customer p-5">
        <h3 class="text-lg font-bold text-neutral-900 mb-5 mt-2 text-center">Why Choose Us?</h3>
                
        <div class="space-y-2.5">
          <div class="flex items-center">
            <div class="w-4.5 h-4.5 bg-gradient-to-br from-staff-primary-500 to-staff-accent-500 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0">
              <CheckIcon class="h-2.5 w-2.5 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-xs">Advanced spectrophotometer technology</span>
          </div>
                    
          <div class="flex items-center">
            <div class="w-4.5 h-4.5 bg-gradient-to-br from-admin-primary-500 to-admin-accent-500 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0">
              <CheckIcon class="h-2.5 w-2.5 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-xs">Certified color consultation experts</span>
          </div>
                    
          <div class="flex items-center">
            <div class="w-4.5 h-4.5 bg-gradient-to-br from-admin-secondary-500 to-pink-500 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0">
              <CheckIcon class="h-2.5 w-2.5 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-xs">Same-day service available</span>
          </div>
                    
          <div class="flex items-center">
            <div class="w-4.5 h-4.5 bg-gradient-to-br from-customer-primary-500 to-customer-secondary-500 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0">
              <CheckIcon class="h-2.5 w-2.5 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-xs">All major paint brands supported</span>
          </div>
                    
          <div class="flex items-center">
            <div class="w-4.5 h-4.5 bg-gradient-to-br from-customer-accent-500 to-yellow-500 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0">
              <CheckIcon class="h-2.5 w-2.5 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-xs">Professional project management</span>
          </div>
                    
          <div class="flex items-center">
            <div class="w-4.5 h-4.5 bg-gradient-to-br from-indigo-500 to-admin-secondary-500 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0">
              <CheckIcon class="h-2.5 w-2.5 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-xs">100% satisfaction guarantee</span>
          </div>
        </div>
                
        <div class="mt-5 text-center">
          <button @click="scrollToSection('contact')" class="btn-customer-primary w-full text-xs">
            <SparklesIcon class="h-3.5 w-3.5 mr-1.5" />
            Experience the Difference
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact" class="py-10 bg-gradient-to-b from-white to-neutral-50">
  <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-5">
    <div class="text-center mb-8">
      <div class="inline-flex items-center bg-gradient-to-r from-staff-primary-50 to-staff-secondary-50 border border-staff-primary-200/50 text-staff-primary-700 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2.5">
        <PhoneIcon class="h-3 w-3 mr-1.5" />
        Get In Touch
      </div>
      <h2 class="text-xl md:text-2xl font-black text-neutral-900 mb-2.5 tracking-tight">
        Ready to Start Your <span class="text-staff-gradient">Project?</span>
      </h2>
      <p class="text-sm md:text-base text-neutral-600 max-w-4xl mx-auto leading-relaxed">
        Contact us today for expert consultation and perfect color solutions.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-customer-primary-50/30 to-customer-secondary-50/30 rounded-2xl"></div>
        <div class="absolute top-0 right-0 w-32 h-32 bg-customer-primary-100/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div class="absolute bottom-0 left-0 w-24 h-24 bg-customer-secondary-100/20 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div class="relative card-customer p-4 md:p-5 border-2 border-customer-primary-100/50">
          <div class="text-center mb-4">
            <h3 class="text-lg md:text-xl font-black text-neutral-900 mb-1.5">Get Your Free Quote</h3>
            <p class="text-neutral-600 leading-relaxed text-xs">Tell us about your project and we'll provide a personalized consultation</p>
          </div>
                  
          <form @submit.prevent="submitForm" class="space-y-2.5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div class="space-y-1">
                <label for="firstName" class="block text-xs font-bold text-neutral-800">First Name *</label>
                <input 
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  class="input-field-customer"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div class="space-y-1">
                <label for="lastName" class="block text-xs font-bold text-neutral-800">Last Name *</label>
                <input 
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  class="input-field-customer"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
                      
            <div class="space-y-1">
              <label for="email" class="block text-xs font-bold text-neutral-800">Email Address *</label>
              <input 
                type="email"
                id="email"
                v-model="form.email"
                class="input-field-customer"
                placeholder="your.email@gmail.com"
                required
              />
            </div>
                      
            <div class="space-y-1">
              <label for="service" class="block text-xs font-bold text-neutral-800">Service Needed *</label>
              <select 
                id="service"
                v-model="form.service"
                class="input-field-customer"
                required
              >
                <option value="">Choose your service</option>
                <option value="color-matching">Custom Color Matching</option>
                <option value="consultation">House Color Consultation</option>
                <option value="other">Other Services</option>
              </select>
            </div>

            <div class="space-y-1">
              <label for="message" class="block text-xs font-bold text-neutral-800">Message / Concerns</label>
              <textarea 
                id="message" 
                rows="2"
                v-model="form.message"
                class="input-field-customer"
                placeholder="Please describe your project, the colors you are considering, or any questions you have."
              ></textarea>
            </div>
                      
            <button 
              type="submit"
              class="w-full btn-customer-primary text-xs py-2.5 shadow-customer-lg hover:shadow-customer-xl"
            >
              <SparklesIcon class="h-4 w-4 mr-1.5" />
              Send Message & Get FREE Quote
            </button>
                      
            <div class="flex items-center justify-center space-x-1.5 text-xs">
              <div class="w-1.5 h-1.5 bg-staff-primary-500 rounded-full animate-pulse"></div>
              <p class="text-neutral-600 font-medium">We respond within 2 hours during business hours</p>
            </div>
          </form>
        </div>
      </div>
      
      <div class="space-y-4">
        <div class="card-customer p-4">
          <div class="flex items-start">
            <div class="w-9 h-9 bg-customer-primary-gradient rounded-xl flex items-center justify-center mr-3 shadow-customer-md flex-shrink-0">
              <MapPinIcon class="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-neutral-900 mb-1.5">Visit Our Store</h3>
              <p class="text-neutral-600 mb-0.5 text-xs">123 Paint Street, Barcelona District</p>
              <p class="text-neutral-600 mb-2 text-xs">Manila, Philippines 1000</p>
              <div class="space-y-0.5 text-xs">
                <p class="text-neutral-500">Mon-Sat: 8:00 AM - 6:00 PM</p>
                <p class="text-neutral-500">Sunday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card-admin p-4">
          <div class="flex items-start">
            <div class="w-9 h-9 bg-admin-primary-gradient rounded-xl flex items-center justify-center mr-3 shadow-admin-md flex-shrink-0">
              <PhoneIcon class="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-neutral-900 mb-1.5">Call Us</h3>
              <p class="text-neutral-600 mb-0.5 text-xs">Landline: +63 2 8123 4567</p>
              <p class="text-neutral-600 mb-1 text-xs">Mobile: +63 917 123 4567</p>
              <p class="text-neutral-500 text-xs mt-1.5">Available during store hours</p>
            </div>
          </div>
        </div>
        
        <div class="card-staff p-4">
          <div class="flex items-start">
            <div class="w-9 h-9 bg-staff-primary-gradient rounded-xl flex items-center justify-center mr-3 shadow-staff-md flex-shrink-0">
              <MailIcon class="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-neutral-900 mb-1.5">Email Us</h3>
              <p class="text-neutral-600 mb-0.5 text-xs">info@barcelonapaint.com</p>
              <p class="text-neutral-600 mb-1 text-xs">quotes@barcelonapaint.com</p>
              <p class="text-neutral-500 text-xs mt-1.5">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="bg-gradient-to-b from-neutral-900 to-black text-white py-8">
  <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-5">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div class="col-span-1 md:col-span-2">
        <div class="flex items-center space-x-2.5 mb-4">
          <div class="w-8 h-8 bg-customer-primary-gradient rounded-xl flex items-center justify-center shadow-customer-md">
            <PaletteIcon class="h-3.5 w-3.5 text-white" />
          </div>
          <div>
            <h3 class="text-sm font-black">BARCELONA</h3>
            <p class="text-xs text-neutral-300 -mt-0.5">PAINT CENTER</p>
          </div>
        </div>
                
        <p class="text-neutral-300 mb-4 max-w-md leading-relaxed text-xs">
          Your trusted partner for premium paint solutions and expert color consultation. Serving the Philippines for over 20 years.
        </p>
                
        <div class="flex space-x-2.5">
          <a href="#" class="w-6 h-6 bg-neutral-800 hover:bg-customer-primary-600 rounded-lg flex items-center justify-center transition-colors">
            <FacebookIcon class="h-2.5 w-2.5" />
          </a>
          <a href="#" class="w-6 h-6 bg-neutral-800 hover:bg-customer-primary-600 rounded-lg flex items-center justify-center transition-colors">
            <TwitterIcon class="h-2.5 w-2.5" />
          </a>
          <a href="#" class="w-6 h-6 bg-neutral-800 hover:bg-customer-primary-600 rounded-lg flex items-center justify-center transition-colors">
            <InstagramIcon class="h-2.5 w-2.5" />
          </a>
        </div>
      </div>
      
      <div>
        <h4 class="text-sm font-bold mb-2.5">Quick Links</h4>
        <ul class="space-y-1.5">
          <li><a href="#home" class="text-neutral-300 hover:text-white transition-colors duration-300 text-xs">Home</a></li>
          <li><a href="#services" class="text-neutral-300 hover:text-white transition-colors duration-300 text-xs">Services</a></li>
          <li><a href="#about" class="text-neutral-300 hover:text-white transition-colors duration-300 text-xs">About</a></li>
          <li><a href="#contact" class="text-neutral-300 hover:text-white transition-colors duration-300 text-xs">Contact</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-sm font-bold mb-2.5">Our Services</h4>
        <ul class="space-y-1.5">
          <li><a href="#services" class="text-neutral-300 hover:text-white transition-colors duration-300 text-xs">Custom Paint Mixing</a></li>
          <li><a href="#services" class="text-neutral-300 hover:text-white transition-colors duration-300 text-xs">Color Consultation</a></li>
          <li><a href="#contact" class="text-neutral-300 hover:text-white transition-colors duration-300 text-xs">Free Estimates</a></li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-neutral-800 mt-5 pt-4 text-center">
      <p class="text-neutral-400 text-xs">
        © 2025 Barcelona Paint Center. All rights reserved.
      </p>
    </div>
  </div>
</footer>
</div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Menu as MenuIcon,
  X as XIcon,
  Palette as PaletteIcon,
  Home as HomeIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Star as StarIcon,
  Check as CheckIcon,
  Award as AwardIcon,
  Users as UsersIcon,
  ShieldCheck as ShieldCheckIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Sparkles as SparklesIcon,
  ArrowRight as ArrowRightIcon,
  Trophy as TrophyIcon,
  Clock as ClockIcon,
  User as UserIcon
} from 'lucide-vue-next'
import { quoteService } from '../../../services/quoteService'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Contact form state
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  service: '',
  message: ''
})

// Add loading state for form submission
const isSubmitting = ref(false)

// Submit contact form handler
const submitForm = async () => {
  isSubmitting.value = true
  try {
    const result = await quoteService.saveQuote(form.value)
    
    if (result.success) {
      // Reset form
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
      }
      alert('Thank you for your message! We will contact you within 2 hours with a personalized quote and consultation.')
    } else {
      alert('Error submitting form. Please try again.')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Error submitting form. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

// Smooth scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    mobileMenuOpen.value = false
  }
}
</script>

<style scoped>
/* Remove all @apply directives to fix CSS warnings */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar using standard CSS */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #ef4444, #f97316);
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #dc2626, #ea580c);
}

/* Input field styles */
.input-field-customer {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: white;
  transition: all 0.2s ease;
}

.input-field-customer:focus {
  outline: none;
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Button styles */
.btn-customer-primary {
  background: linear-gradient(135deg, #ef4444, #f97316);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-customer-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
}

.btn-customer-secondary {
  background: white;
  color: #ef4444;
  border: 2px solid #ef4444;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.btn-customer-secondary:hover {
  background: #ef4444;
  color: white;
  transform: translateY(-1px);
}

.btn-admin-primary {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-admin-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

/* Card styles */
.card-customer {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.1);
}

.card-admin {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.card-staff {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.1);
}

/* Gradient text styles */
.text-customer-gradient {
  background: linear-gradient(135deg, #ef4444, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-admin-gradient {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-staff-gradient {
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Gradient background styles */
.bg-customer-primary-gradient {
  background: linear-gradient(135deg, #ef4444, #f97316);
}

.bg-admin-primary-gradient {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
}

.bg-staff-primary-gradient {
  background: linear-gradient(135deg, #10b981, #059669);
}

/* Shadow styles */
.shadow-customer-sm {
  box-shadow: 0 1px 2px 0 rgba(239, 68, 68, 0.05);
}

.shadow-customer-md {
  box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -1px rgba(239, 68, 68, 0.06);
}

.shadow-customer-lg {
  box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.1), 0 4px 6px -2px rgba(239, 68, 68, 0.05);
}

.shadow-customer-xl {
  box-shadow: 0 20px 25px -5px rgba(239, 68, 68, 0.1), 0 10px 10px -5px rgba(239, 68, 68, 0.04);
}

.shadow-admin-md {
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
}

.shadow-staff-md {
  box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06);
}

/* Mobile optimizations using standard CSS */
@media (max-width: 768px) {
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

/* Tablet optimizations */
@media (min-width: 768px) and (max-width: 1024px) {
  .compact-button {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
}

/* Desktop optimizations */
@media (min-width: 1024px) {
  .max-w-7xl {
    max-width: 80rem;
  }
}

/* Smooth transitions */
* {
  transition: all 0.2s ease;
}
</style>
