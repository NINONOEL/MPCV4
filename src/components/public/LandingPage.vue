<template>
<div class="min-h-screen bg-white overflow-x-hidden">
<nav class="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg z-50 transition-all duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Reduced navbar height from h-14 md:h-16 to h-12 md:h-14 -->
    <div class="flex justify-between items-center h-12 md:h-14">
      <div class="flex items-center space-x-3 group cursor-pointer" @click="scrollToSection('home')">
        <!-- Reduced logo size from w-8 h-8 md:w-10 md:h-10 to w-7 h-7 md:w-9 md:h-9 -->
        <div class="w-7 h-7 md:w-9 md:h-9 bg-gradient-to-br from-customer-primary-600 to-customer-secondary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
          <PaletteIcon class="h-3 w-3 md:h-4 md:w-4 text-white" />
        </div>
        <div>
          <!-- Reduced text sizes slightly -->
          <h1 class="text-xs md:text-base font-black text-neutral-900">BARCELONA</h1>
          <p class="text-xs md:text-sm text-neutral-600 font-semibold -mt-1">PAINT CENTER</p>
        </div>
      </div>
      
      <div class="hidden lg:flex items-center space-x-5">
        <a href="#home" class="text-neutral-700 hover:text-customer-primary-600 font-semibold px-2 py-1 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-sm">Home</a>
        <a href="#services" class="text-neutral-700 hover:text-customer-primary-600 font-semibold px-2 py-1 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-sm">Services</a>
        <a href="#about" class="text-neutral-700 hover:text-customer-primary-600 font-semibold px-2 py-1 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-sm">About</a>
        
        <router-link to="/login" class="btn-customer-secondary text-sm">
          <UserIcon class="h-4 w-4 mr-2" />
          Login
        </router-link>
        
        <button @click="scrollToSection('contact')" class="btn-customer-primary text-sm">
          <SparklesIcon class="h-4 w-4 mr-2" />
          Get Quote
        </button>
      </div>
      
      <div class="lg:hidden">
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
          <MenuIcon v-if="!mobileMenuOpen" class="h-5 w-5" />
          <XIcon v-else class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
  
  <div v-if="mobileMenuOpen" class="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
    <div class="px-4 py-3 space-y-2">
      <a href="#home" @click="mobileMenuOpen = false" class="block text-neutral-700 hover:text-customer-primary-600 font-semibold py-2 px-3 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-sm">Home</a>
      <a href="#services" @click="mobileMenuOpen = false" class="block text-neutral-700 hover:text-customer-primary-600 font-semibold py-2 px-3 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-sm">Services</a>
      <a href="#about" @click="mobileMenuOpen = false" class="block text-neutral-700 hover:text-customer-primary-600 font-semibold py-2 px-3 rounded-lg transition-all duration-300 hover:bg-customer-primary-50 text-sm">About</a>
      
      <router-link to="/login" @click="mobileMenuOpen = false" class="w-full btn-customer-secondary text-sm mt-2 block text-center">
        <UserIcon class="h-4 w-4 mr-2" />
        Login
      </router-link>
      
      <button @click="scrollToSection('contact'); mobileMenuOpen = false" class="w-full btn-customer-primary text-sm mt-2">
        <SparklesIcon class="h-4 w-4 mr-2" />
        Get Quote
      </button>
    </div>
  </div>
</nav>

<!-- Reduced top padding from pt-14 md:pt-16 to pt-12 md:pt-14 -->
<section id="home" class="pt-12 md:pt-14 min-h-screen flex items-center bg-white">
  <!-- Reduced section padding from py-8 md:py-12 to py-6 md:py-10 -->
  <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 md:py-10">
    <!-- Reduced grid gap from gap-8 lg:gap-16 to gap-6 lg:gap-12 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
      <div class="text-center lg:text-left space-y-5">
        <!-- Reduced padding from px-4 py-2 to px-3 py-1 -->
        <div class="inline-flex items-center bg-gradient-to-r from-customer-primary-50 to-customer-secondary-50 border border-customer-primary-200/50 text-customer-primary-700 px-3 py-1 rounded-full text-sm font-semibold shadow-customer-sm">
          <TrophyIcon class="h-4 w-4 mr-2 text-customer-primary-600" />
          #1 Paint Center in Calapan City
        </div>
                
        <div class="space-y-3">
          <!-- Reduced heading sizes from text-3xl sm:text-4xl lg:text-5xl xl:text-6xl to text-2xl sm:text-3xl lg:text-4xl xl:text-5xl -->
          <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
            Perfect Paint Colors,
            <span class="text-customer-gradient">
              Every Time
            </span>
          </h1>
                    
          <!-- Reduced text size from text-lg md:text-xl to text-base md:text-lg -->
          <p class="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Transform your space with our <span class="text-customer-primary-600 font-semibold">precision color matching</span> and 
            <span class="text-admin-primary-600 font-semibold">expert consultation</span> services.
          </p>
        </div>
                
        <!-- Reduced button height from h-14 to h-12 -->
        <div class="flex flex-col sm:flex-row items-stretch gap-3 pt-2">
          <button @click="scrollToSection('services')" class="group btn-customer-primary flex-1 h-12">
            <PaletteIcon class="h-5 w-5 mr-2" />
            Explore Services
            <ArrowRightIcon class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        
          <button @click="scrollToSection('contact')" class="btn-customer-secondary flex-1 h-12 flex-col">
            <div class="flex items-center justify-center">
              <PhoneIcon class="h-4 w-4 mr-1" />
              <span class="text-sm font-bold">Call</span>
            </div>
            <span class="text-xs font-semibold">(02) 8123-4567</span>
          </button>
        </div>
                
        <!-- Reduced spacing and icon sizes -->
        <div class="flex flex-wrap items-center gap-5 pt-5 border-t border-neutral-200">
          <div class="flex items-center space-x-2">
            <div class="w-7 h-7 bg-gradient-to-br from-staff-primary-500 to-staff-accent-500 rounded-full flex items-center justify-center shadow-md">
              <CheckIcon class="h-3 w-3 text-white" />
            </div>
            <div>
              <div class="font-bold text-neutral-900 text-sm">20+ Years</div>
              <div class="text-xs text-neutral-600">Experience</div>
            </div>
          </div>
                    
          <div class="flex items-center space-x-2">
            <div class="w-7 h-7 bg-gradient-to-br from-admin-primary-500 to-admin-accent-500 rounded-full flex items-center justify-center shadow-md">
              <StarIcon class="h-3 w-3 text-white fill-current" />
            </div>
            <div>
              <div class="font-bold text-neutral-900 text-sm">99% Accuracy</div>
              <div class="text-xs text-neutral-600">Color Match</div>
            </div>
          </div>
                    
          <div class="flex items-center space-x-2">
            <div class="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
              <ClockIcon class="h-3 w-3 text-white" />
            </div>
            <div>
              <div class="font-bold text-neutral-900 text-sm">Same Day</div>
              <div class="text-xs text-neutral-600">Service</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="relative">
        <!-- Reduced card padding from p-6 md:p-8 to p-5 md:p-6 -->
        <div class="card-customer p-5 md:p-6">
          <div class="text-center space-y-5">
            <div class="flex justify-center">
              <!-- Reduced icon container size from w-16 h-16 to w-14 h-14 -->
              <div class="w-14 h-14 bg-customer-primary-gradient rounded-full flex items-center justify-center shadow-customer-lg">
                <PaletteIcon class="h-7 w-7 text-white" />
              </div>
            </div>
            
            <div class="space-y-3">
              <!-- Reduced heading size from text-lg to text-base -->
              <h3 class="text-base font-bold text-neutral-900">Professional Color Mixing</h3>
              <!-- Reduced color swatch heights slightly -->
              <div class="grid grid-cols-6 gap-2 max-w-sm mx-auto">
                <div class="h-10 bg-gradient-to-b from-customer-primary-400 to-customer-primary-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                <div class="h-12 bg-gradient-to-b from-admin-primary-400 to-admin-primary-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                <div class="h-14 bg-gradient-to-b from-customer-accent-400 to-customer-accent-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                <div class="h-12 bg-gradient-to-b from-staff-primary-400 to-staff-primary-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                <div class="h-10 bg-gradient-to-b from-admin-secondary-400 to-admin-secondary-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                <div class="h-10 bg-gradient-to-b from-pink-400 to-pink-600 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
              </div>
            </div>
            
            <!-- Reduced grid gap from gap-4 to gap-3 -->
            <div class="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-200/50">
              <div class="text-center">
                <!-- Reduced text size from text-xl to text-lg -->
                <div class="text-lg font-black text-customer-gradient">15K+</div>
                <div class="text-xs text-neutral-600">Customers</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-black text-admin-gradient">99%</div>
                <div class="text-xs text-neutral-600">Accuracy</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-black text-staff-gradient">24/7</div>
                <div class="text-xs text-neutral-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Reduced section padding from py-16 to py-12 -->
<section id="services" class="py-12 bg-gradient-to-b from-white to-neutral-50">
  <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
    <!-- Reduced bottom margin from mb-12 to mb-10 -->
    <div class="text-center mb-10">
      <div class="inline-flex items-center bg-gradient-to-r from-admin-primary-50 to-admin-secondary-50 border border-admin-primary-200/50 text-admin-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
        <SparklesIcon class="h-4 w-4 mr-2" />
        Our Services
      </div>
      <!-- Reduced heading sizes from text-3xl md:text-4xl to text-2xl md:text-3xl -->
      <h2 class="text-2xl md:text-3xl font-black text-neutral-900 mb-3 tracking-tight">
        Our Expert <span class="text-customer-gradient">Services</span>
      </h2>
      <!-- Reduced text size from text-lg md:text-xl to text-base md:text-lg -->
      <p class="text-base md:text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
        From precision color matching to professional consultation, we provide comprehensive paint solutions.
      </p>
    </div>
    
    <!-- Reduced grid gap from gap-8 to gap-6 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      <!-- Reduced card padding from p-6 to p-5 -->
      <div class="group card-customer p-5">
        <div class="relative z-10">
          <!-- Reduced icon container size from w-14 h-14 to w-12 h-12 -->
          <div class="w-12 h-12 bg-customer-primary-gradient rounded-2xl flex items-center justify-center shadow-customer-md group-hover:scale-110 transition-transform duration-300 mb-5">
            <PaletteIcon class="h-6 w-6 text-white" />
          </div>
                    
          <!-- Reduced heading sizes from text-xl md:text-2xl to text-lg md:text-xl -->
          <h3 class="text-lg md:text-xl font-black text-neutral-900 mb-3">Custom Paint Mixing</h3>
          <p class="text-neutral-600 mb-5 leading-relaxed">
            Precision color matching using advanced spectrophotometer technology. Bring any sample and we'll create the perfect match with 99% accuracy guarantee.
          </p>
                    
          <!-- Reduced spacing from space-y-3 mb-6 to space-y-2 mb-5 -->
          <div class="space-y-2 mb-5">
            <div class="flex items-center">
              <div class="w-4 h-4 bg-gradient-to-br from-staff-primary-500 to-staff-accent-500 rounded-full flex items-center justify-center mr-3">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-sm">99% color accuracy guarantee</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 bg-gradient-to-br from-admin-primary-500 to-admin-accent-500 rounded-full flex items-center justify-center mr-3">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-sm">Any brand, any finish available</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 bg-gradient-to-br from-admin-secondary-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-sm">Same-day service available</span>
            </div>
          </div>
                    
          <button @click="scrollToSection('contact')" class="w-full btn-customer-primary">
            <PaletteIcon class="h-4 w-4 mr-2" />
            Get Color Match
          </button>
        </div>
      </div>
      
      <div class="group card-admin p-5">
        <div class="relative z-10">
          <div class="w-12 h-12 bg-admin-primary-gradient rounded-2xl flex items-center justify-center shadow-admin-md group-hover:scale-110 transition-transform duration-300 mb-5">
            <HomeIcon class="h-6 w-6 text-white" />
          </div>
                    
          <h3 class="text-lg md:text-xl font-black text-neutral-900 mb-3">House Color Recommender</h3>
          <p class="text-neutral-600 mb-5 leading-relaxed">
            Professional color consultation for interior and exterior projects. Our certified experts help you choose the perfect palette that matches your house color style.
          </p>
                    
          <div class="space-y-2 mb-5">
            <div class="flex items-center">
              <div class="w-4 h-4 bg-gradient-to-br from-staff-primary-500 to-staff-accent-500 rounded-full flex items-center justify-center mr-3">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-sm">Certified color consultants</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 bg-gradient-to-br from-admin-primary-500 to-admin-accent-500 rounded-full flex items-center justify-center mr-3">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-sm">Interior & exterior expertise</span>
            </div>
            <div class="flex items-center">
              <div class="w-4 h-4 bg-gradient-to-br from-admin-secondary-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <CheckIcon class="h-2 w-2 text-white" />
              </div>
              <span class="text-neutral-700 font-medium text-sm">3D visualization available</span>
            </div>
          </div>
                    
          <button @click="scrollToSection('contact')" class="w-full btn-admin-primary">
            <HomeIcon class="h-4 w-4 mr-2" />
            Get Recommendation
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about" class="py-12 bg-gradient-to-b from-neutral-50 to-white">
  <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
    <!-- Reduced grid gap from gap-12 lg:gap-20 to gap-10 lg:gap-16 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <div class="inline-flex items-center bg-gradient-to-r from-customer-primary-50 to-customer-secondary-50 border border-customer-primary-200/50 text-customer-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-5">
          <AwardIcon class="h-4 w-4 mr-2" />
          About Us
        </div>
                
        <!-- Reduced heading sizes from text-2xl sm:text-3xl lg:text-4xl to text-xl sm:text-2xl lg:text-3xl -->
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 mb-5 tracking-tight">
          About <span class="text-customer-gradient">Barcelona Paint Center</span>
        </h2>
                
        <!-- Reduced text size and margin from text-lg md:text-xl mb-8 to text-base md:text-lg mb-6 -->
        <p class="text-base md:text-lg text-neutral-600 mb-6 leading-relaxed">
          For over two decades, we've been the Philippines' most trusted partner for premium paint solutions and expert color consultation.
        </p>
                
        <!-- Reduced spacing from space-y-6 to space-y-5 -->
        <div class="space-y-5">
          <div class="flex items-start space-x-3">
            <!-- Reduced icon container size from w-12 h-12 to w-10 h-10 -->
            <div class="w-10 h-10 bg-customer-primary-gradient rounded-xl flex items-center justify-center shadow-customer-md">
              <AwardIcon class="h-5 w-5 text-white" />
            </div>
            <div>
              <!-- Reduced heading size from text-lg to text-base -->
              <h3 class="text-base font-bold text-neutral-900 mb-1">20+ Years of Excellence</h3>
              <p class="text-neutral-600 leading-relaxed text-sm">Two decades of serving homeowners, designers, and contractors with unmatched quality and precision.</p>
            </div>
          </div>
                    
          <div class="flex items-start space-x-3">
            <div class="w-10 h-10 bg-admin-primary-gradient rounded-xl flex items-center justify-center shadow-admin-md">
              <UsersIcon class="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 class="text-base font-bold text-neutral-900 mb-1">15,000+ Happy Customers</h3>
              <p class="text-neutral-600 leading-relaxed text-sm">Trusted by thousands of satisfied customers across Metro Manila and beyond.</p>
            </div>
          </div>
                    
          <div class="flex items-start space-x-3">
            <div class="w-10 h-10 bg-staff-primary-gradient rounded-xl flex items-center justify-center shadow-staff-md">
              <ShieldCheckIcon class="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 class="text-base font-bold text-neutral-900 mb-1">99% Color Accuracy</h3>
              <p class="text-neutral-600 leading-relaxed text-sm">Industry-leading precision with our advanced color matching technology and expert technicians.</p>
            </div>
          </div>
        </div>
      </div>
            
      <!-- Reduced card padding from p-8 to p-6 -->
      <div class="card-customer p-6">
        <!-- Reduced heading size and margins from text-2xl mb-8 mt-4 to text-xl mb-6 mt-3 -->
        <h3 class="text-xl font-bold text-neutral-900 mb-6 mt-3 text-center">Why Choose Us?</h3>
                
        <!-- Reduced spacing from space-y-4 to space-y-3 -->
        <div class="space-y-3">
          <div class="flex items-center">
            <!-- Reduced icon size from w-6 h-6 to w-5 h-5 -->
            <div class="w-5 h-5 bg-gradient-to-br from-staff-primary-500 to-staff-accent-500 rounded-full flex items-center justify-center mr-3">
              <CheckIcon class="h-3 w-3 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-sm">Advanced spectrophotometer technology</span>
          </div>
                    
          <div class="flex items-center">
            <div class="w-5 h-5 bg-gradient-to-br from-admin-primary-500 to-admin-accent-500 rounded-full flex items-center justify-center mr-3">
              <CheckIcon class="h-3 w-3 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-sm">Certified color consultation experts</span>
          </div>
                    
          <div class="flex items-center">
            <div class="w-5 h-5 bg-gradient-to-br from-admin-secondary-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
              <CheckIcon class="h-3 w-3 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-sm">Same-day service available</span>
          </div>
                    
          <div class="flex items-center">
            <div class="w-5 h-5 bg-gradient-to-br from-customer-primary-500 to-customer-secondary-500 rounded-full flex items-center justify-center mr-3">
              <CheckIcon class="h-3 w-3 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-sm">All major paint brands supported</span>
          </div>
                    
          <div class="flex items-center">
            <div class="w-5 h-5 bg-gradient-to-br from-customer-accent-500 to-yellow-500 rounded-full flex items-center justify-center mr-3">
              <CheckIcon class="h-3 w-3 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-sm">Professional project management</span>
          </div>
                    
          <div class="flex items-center">
            <div class="w-5 h-5 bg-gradient-to-br from-indigo-500 to-admin-secondary-500 rounded-full flex items-center justify-center mr-3">
              <CheckIcon class="h-3 w-3 text-white" />
            </div>
            <span class="text-neutral-700 font-medium text-sm">100% satisfaction guarantee</span>
          </div>
        </div>
                
        <!-- Reduced margin from mt-8 to mt-6 -->
        <div class="mt-6 text-center">
          <button @click="scrollToSection('contact')" class="btn-customer-primary w-full text-sm">
            <SparklesIcon class="h-4 w-4 mr-2" />
            Experience the Difference
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact" class="py-12 bg-gradient-to-b from-white to-neutral-50">
  <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
    <div class="text-center mb-10">
      <div class="inline-flex items-center bg-gradient-to-r from-staff-primary-50 to-staff-secondary-50 border border-staff-primary-200/50 text-staff-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
        <PhoneIcon class="h-4 w-4 mr-2" />
        Get In Touch
      </div>
      <h2 class="text-2xl md:text-3xl font-black text-neutral-900 mb-3 tracking-tight">
        Ready to Start Your <span class="text-staff-gradient">Project?</span>
      </h2>
      <p class="text-base md:text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
        Contact us today for expert consultation and perfect color solutions.
      </p>
    </div>
    
    <!-- Reduced grid gap from gap-12 to gap-10 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-customer-primary-50/30 to-customer-secondary-50/30 rounded-2xl"></div>
        <div class="absolute top-0 right-0 w-32 h-32 bg-customer-primary-100/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div class="absolute bottom-0 left-0 w-24 h-24 bg-customer-secondary-100/20 rounded-full translate-y-12 -translate-x-12"></div>
        
        <!-- Reduced card padding from p-6 md:p-8 to p-5 md:p-6 -->
        <div class="relative card-customer p-5 md:p-6 border-2 border-customer-primary-100/50">
          <div class="text-center mb-5">
            <!-- Reduced heading sizes from text-2xl md:text-3xl to text-xl md:text-2xl -->
            <h3 class="text-xl md:text-2xl font-black text-neutral-900 mb-2">Get Your Free Quote</h3>
            <p class="text-neutral-600 leading-relaxed text-sm">Tell us about your project and we'll provide a personalized consultation</p>
          </div>
                  
          <!-- Reduced form spacing from space-y-4 to space-y-3 -->
          <form @submit.prevent="submitForm" class="space-y-3">
            <!-- Reduced grid gap from gap-4 to gap-3 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="space-y-1">
                <label for="firstName" class="block text-sm font-bold text-neutral-800">First Name *</label>
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
                <label for="lastName" class="block text-sm font-bold text-neutral-800">Last Name *</label>
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
              <label for="email" class="block text-sm font-bold text-neutral-800">Email Address *</label>
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
              <label for="service" class="block text-sm font-bold text-neutral-800">Service Needed *</label>
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
              <label for="message" class="block text-sm font-bold text-neutral-800">Message / Concerns</label>
              <textarea 
                id="message" 
                rows="3"
                v-model="form.message"
                class="input-field-customer"
                placeholder="Please describe your project, the colors you are considering, or any questions you have."
              ></textarea>
            </div>
                      
            <!-- Reduced button padding from py-4 to py-3 -->
            <button 
              type="submit"
              class="w-full btn-customer-primary text-base py-3 shadow-customer-lg hover:shadow-customer-xl"
            >
              <SparklesIcon class="h-5 w-5 mr-2" />
              Send Message & Get FREE Quote
            </button>
                      
            <div class="flex items-center justify-center space-x-2 text-sm">
              <div class="w-2 h-2 bg-staff-primary-500 rounded-full animate-pulse"></div>
              <p class="text-neutral-600 font-medium">We respond within 2 hours during business hours</p>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Reduced spacing from space-y-6 to space-y-5 -->
      <div class="space-y-5">
        <!-- Reduced card padding from p-6 to p-5 -->
        <div class="card-customer p-5">
          <div class="flex items-start">
            <!-- Reduced icon container size from w-12 h-12 to w-10 h-10 -->
            <div class="w-10 h-10 bg-customer-primary-gradient rounded-xl flex items-center justify-center mr-4 shadow-customer-md">
              <MapPinIcon class="h-5 w-5 text-white" />
            </div>
            <div>
              <!-- Reduced heading size from text-lg to text-base -->
              <h3 class="text-base font-bold text-neutral-900 mb-2">Visit Our Store</h3>
              <p class="text-neutral-600 mb-1 text-sm">123 Paint Street, Barcelona District</p>
              <p class="text-neutral-600 mb-3 text-sm">Manila, Philippines 1000</p>
              <div class="space-y-1 text-sm">
                <p class="text-neutral-500">Mon-Sat: 8:00 AM - 6:00 PM</p>
                <p class="text-neutral-500">Sunday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card-admin p-5">
          <div class="flex items-start">
            <div class="w-10 h-10 bg-admin-primary-gradient rounded-xl flex items-center justify-center mr-4 shadow-admin-md">
              <PhoneIcon class="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 class="text-base font-bold text-neutral-900 mb-2">Call Us</h3>
              <p class="text-neutral-600 mb-1 text-sm">Landline: +63 2 8123 4567</p>
              <p class="text-neutral-600 mb-1 text-sm">Mobile: +63 917 123 4567</p>
              <p class="text-neutral-500 text-sm mt-2">Available during store hours</p>
            </div>
          </div>
        </div>
        
        <div class="card-staff p-5">
          <div class="flex items-start">
            <div class="w-10 h-10 bg-staff-primary-gradient rounded-xl flex items-center justify-center mr-4 shadow-staff-md">
              <MailIcon class="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 class="text-base font-bold text-neutral-900 mb-2">Email Us</h3>
              <p class="text-neutral-600 mb-1 text-sm">info@barcelonapaint.com</p>
              <p class="text-neutral-600 mb-1 text-sm">quotes@barcelonapaint.com</p>
              <p class="text-neutral-500 text-sm mt-2">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Reduced footer padding from py-12 to py-10 -->
<footer class="bg-gradient-to-b from-neutral-900 to-black text-white py-10">
  <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
    <!-- Reduced grid gap from gap-8 to gap-6 -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="col-span-1 md:col-span-2">
        <!-- Reduced spacing and icon sizes -->
        <div class="flex items-center space-x-3 mb-5">
          <div class="w-9 h-9 bg-customer-primary-gradient rounded-xl flex items-center justify-center shadow-customer-md">
            <PaletteIcon class="h-4 w-4 text-white" />
          </div>
          <div>
            <!-- Reduced text size from text-lg to text-base -->
            <h3 class="text-base font-black">BARCELONA</h3>
            <p class="text-sm text-neutral-300 -mt-1">PAINT CENTER</p>
          </div>
        </div>
                
        <!-- Reduced margin from mb-6 to mb-5 -->
        <p class="text-neutral-300 mb-5 max-w-md leading-relaxed text-sm">
          Your trusted partner for premium paint solutions and expert color consultation. Serving the Philippines for over 20 years.
        </p>
                
        <div class="flex space-x-3">
          <!-- Reduced social icon sizes from w-8 h-8 to w-7 h-7 -->
          <a href="#" class="w-7 h-7 bg-neutral-800 hover:bg-customer-primary-600 rounded-lg flex items-center justify-center transition-colors">
            <FacebookIcon class="h-3 w-3" />
          </a>
          <a href="#" class="w-7 h-7 bg-neutral-800 hover:bg-customer-primary-600 rounded-lg flex items-center justify-center transition-colors">
            <TwitterIcon class="h-3 w-3" />
          </a>
          <a href="#" class="w-7 h-7 bg-neutral-800 hover:bg-customer-primary-600 rounded-lg flex items-center justify-center transition-colors">
            <InstagramIcon class="h-3 w-3" />
          </a>
        </div>
      </div>
      
      <div>
        <!-- Reduced heading size from text-lg to text-base -->
        <h4 class="text-base font-bold mb-3">Quick Links</h4>
        <ul class="space-y-2">
          <li><a href="#home" class="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Home</a></li>
          <li><a href="#services" class="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Services</a></li>
          <li><a href="#about" class="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">About</a></li>
          <li><a href="#contact" class="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Contact</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-base font-bold mb-3">Our Services</h4>
        <ul class="space-y-2">
          <li><a href="#services" class="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Custom Paint Mixing</a></li>
          <li><a href="#services" class="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Color Consultation</a></li>
          <li><a href="#contact" class="text-neutral-300 hover:text-white transition-colors duration-300 text-sm">Free Estimates</a></li>
        </ul>
      </div>
    </div>
    
    <!-- Reduced margins from mt-8 pt-6 to mt-6 pt-5 -->
    <div class="border-t border-neutral-800 mt-6 pt-5 text-center">
      <p class="text-neutral-400 text-sm">
        © 2024 Barcelona Paint Center. All rights reserved.
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

// Submit contact form handler
const submitForm = () => {
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  }
  alert('Thank you for your message! We will contact you within 2 hours with a personalized quote and consultation.')
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
