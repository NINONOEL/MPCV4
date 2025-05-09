<template>
  <div class="min-h-screen bg-[#001333] relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#0A3573] opacity-10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#0A3573] opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>
  
    <div class="relative z-10 flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-[#0A2159]/90 backdrop-blur-sm border-r border-white/10 hidden md:block">
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-white/10">
          <h1 class="text-xl font-bold text-white">Mindoro Paint Center</h1>
        </div>
  
        <!-- Navigation -->
        <nav class="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-10rem)]">
          <router-link 
            to="/staff/dashboard" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>
  
          <router-link 
            to="/staff/inventory" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>
  
          <router-link 
            to="/staff/paint-mixing" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>
  
          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>
  
          <router-link 
            to="/staff/settings" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
        </nav>
  
        <!-- User Menu -->
        <div class="absolute bottom-0 w-64 p-4 border-t border-white/10 bg-[#0A2159]/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">Staff User</p>
              <p class="text-xs text-white/60 truncate">staff@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
            >
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
  
      <!-- Mobile Sidebar Toggle -->
      <div class="fixed top-4 left-4 z-30 md:hidden">
        <button 
          @click="toggleMobileSidebar"
          class="p-2 bg-[#0A2159]/90 backdrop-blur-sm border border-white/10 rounded-lg shadow-sm"
          aria-label="Toggle navigation menu"
        >
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-white" />
          <XIcon v-else class="w-6 h-6 text-white" />
        </button>
      </div>
  
      <!-- Mobile Sidebar -->
      <div 
        v-if="mobileSidebarOpen" 
        class="fixed inset-0 bg-black/20 z-20 md:hidden"
        @click="toggleMobileSidebar"
      ></div>
  
      <aside 
        v-if="mobileSidebarOpen"
        class="fixed left-0 top-0 h-full w-64 bg-[#0A2159]/90 backdrop-blur-sm border-r border-white/10 z-20 md:hidden"
      >
        <!-- Same content as desktop sidebar -->
        <div class="p-6 border-b border-white/10">
          <h1 class="text-xl font-bold text-white">Mindoro Paint Center</h1>
        </div>
  
        <nav class="p-4 space-y-2">
          <router-link 
            to="/staff/dashboard" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/dashboard' }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>
  
          <router-link 
            to="/staff/inventory" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>
  
          <router-link 
            to="/staff/paint-mixing" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>
  
          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>
  
          <router-link 
            to="/staff/settings" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/settings' }"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
        </nav>
  
        <div class="absolute bottom-0 w-64 p-4 border-t border-white/10 bg-[#0A2159]/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">Staff User</p>
              <p class="text-xs text-white/60 truncate">staff@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
            >
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
  
      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Header -->
        <header class="bg-[#0A2159]/80 backdrop-blur-sm border-b border-white/10 px-8 py-4 shadow-md">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-2xl font-bold text-white">House Paint Recommender</h1>
              <p class="text-white/60">Get AI-powered paint color recommendations for your house</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-white/80">
                <CalendarIcon class="w-5 h-5" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-white/20"></div>
              <div class="flex items-center gap-3">
                <span class="text-white">Welcome, Staff</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-white cursor-pointer hover:text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </header>
  
        <div class="p-6 md:p-8">
          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Column: House Details -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <h2 class="text-2xl font-bold mb-6 text-white">House Details</h2>
              <p class="text-white/60 mb-6">Provide information about your house to get personalized recommendations</p>
              
              <form @submit.prevent="generateRecommendations" class="space-y-6">
                <!-- House Style -->
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-white">House Style</label>
                  <div class="relative">
                    <select 
                      v-model="formData.houseStyle"
                      class="w-full bg-[#002B73] border border-white/20 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40 appearance-none pr-10"
                    >
                      <option value="" disabled class="bg-[#0A2159] text-white">Select house style</option>
                      <option v-for="style in houseStyles" :key="style.id" :value="style.id" class="bg-[#0A2159] text-white">{{ style.name }}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <p class="text-xs text-white/60 mt-1">The architectural style of your house affects color recommendations</p>
                </div>
                
                <!-- House Size -->
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-white">House Size (sqm)</label>
                  <input 
                    type="number"
                    v-model="formData.size"
                    min="0"
                    class="w-full bg-[#002B73] border border-white/20 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40"
                    placeholder="Enter house size"
                  />
                  <p class="text-xs text-white/60 mt-1">Helps calculate the amount of paint needed for your project</p>
                </div>
                
                <!-- Surface Material -->
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-white">Primary Surface Material</label>
                  <div class="relative">
                    <select 
                      v-model="formData.surfaceMaterial"
                      class="w-full bg-[#002B73] border border-white/20 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40 appearance-none pr-10"
                    >
                      <option value="" disabled class="bg-[#0A2159] text-white">Select surface material</option>
                      <option v-for="material in surfaceMaterials" :key="material.id" :value="material.id" class="bg-[#0A2159] text-white">{{ material.name }}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <p class="text-xs text-white/60 mt-1">Different materials require specific paint formulations</p>
                </div>
                
                <!-- Color Preference -->
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-white">Color Preference</label>
                  <div class="relative">
                    <select 
                      v-model="formData.colorPreference"
                      class="w-full bg-[#002B73] border border-white/20 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40 appearance-none pr-10"
                    >
                      <option value="" disabled class="bg-[#0A2159] text-white">Select color preference</option>
                      <option v-for="color in colorPreferences" :key="color.id" :value="color.id" class="bg-[#0A2159] text-white">{{ color.name }}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <p class="text-xs text-white/60 mt-1">Your preferred color palette for recommendations</p>
                </div>
                
                <button 
                  type="submit"
                  class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-90 text-white py-4 px-6 rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
                >
                  <HomeIcon class="h-5 w-5" />
                  Get Recommendations
                </button>
              </form>
            </div>
            
            <!-- Right Column: Recommended Colors -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <h2 class="text-2xl font-bold mb-6 text-white">Recommended Colors</h2>
              <p class="text-white/60 mb-6">AI-generated color recommendations for your house</p>
              
              <div v-if="loading" class="flex flex-col items-center justify-center py-12">
                <div class="w-12 h-12 border-4 border-white/20 border-t-white/80 rounded-full animate-spin mb-4"></div>
                <p class="text-white/80">Generating recommendations...</p>
              </div>
              
              <div v-else-if="allRecommendations.length > 0" class="space-y-8">
                <!-- Tabs for different color schemes -->
                <div class="border-b border-white/10">
                  <div class="flex overflow-x-auto pb-1 hide-scrollbar">
                    <button 
                      v-for="(scheme, index) in allRecommendations" 
                      :key="index"
                      @click="activeSchemeIndex = index"
                      class="px-4 py-2 text-sm font-medium whitespace-nowrap mr-2 rounded-t-lg transition-colors"
                      :class="activeSchemeIndex === index ? 'bg-white/10 text-white border-b-2 border-blue-500' : 'text-white/60 hover:text-white hover:bg-white/5'"
                    >
                      Option {{ index + 1 }}
                    </button>
                  </div>
                </div>
                
                <!-- Active Color Scheme Preview -->
                <div class="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-semibold text-white flex items-center">
                      <PaletteIcon class="h-5 w-5 mr-2 text-white/70" />
                      Color Scheme {{ activeSchemeIndex + 1 }}
                    </h3>
                    <div class="flex space-x-2">
                      <button 
                        @click="prevScheme" 
                        class="p-1 rounded-full hover:bg-white/10"
                        :disabled="activeSchemeIndex === 0"
                        :class="activeSchemeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''"
                      >
                        <ChevronLeftIcon class="h-5 w-5 text-white/70" />
                      </button>
                      <button 
                        @click="nextScheme" 
                        class="p-1 rounded-full hover:bg-white/10"
                        :disabled="activeSchemeIndex === allRecommendations.length - 1"
                        :class="activeSchemeIndex === allRecommendations.length - 1 ? 'opacity-50 cursor-not-allowed' : ''"
                      >
                        <ChevronRightIcon class="h-5 w-5 text-white/70" />
                      </button>
                    </div>
                  </div>
                  
                  <!-- Color Swatches -->
                  <div class="grid grid-cols-2 gap-4 mb-6">
                    <div 
                      v-for="(color, index) in activeScheme" 
                      :key="index"
                      class="flex flex-col"
                    >
                      <div 
                        class="h-32 rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
                        :style="{ backgroundColor: color.hex }"
                        @click="copyColorToClipboard(color.hex)"
                      ></div>
                      <div class="mt-2 text-center">
                        <p class="font-medium text-white">{{ color.name }}</p>
                        <p class="text-sm text-white/60">{{ color.hex }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Color Harmony Visualization -->
                  <div class="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 class="text-lg font-medium text-white mb-3">Color Harmony</h4>
                    <div class="flex space-x-2 mb-4">
                      <div 
                        v-for="(color, index) in activeScheme" 
                        :key="index"
                        class="flex-1 h-8 first:rounded-l-full last:rounded-r-full"
                        :style="{ backgroundColor: color.hex }"
                      ></div>
                    </div>
                    <p class="text-sm text-white/60">{{ getColorHarmonyDescription() }}</p>
                  </div>
                </div>
                
                <!-- All Color Schemes Grid -->
                <div class="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 class="text-xl font-semibold text-white mb-4">All Recommendations</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      v-for="(scheme, schemeIndex) in allRecommendations" 
                      :key="schemeIndex"
                      @click="activeSchemeIndex = schemeIndex"
                      class="p-3 bg-white/5 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md"
                      :class="activeSchemeIndex === schemeIndex ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-white/10'"
                    >
                      <p class="text-sm font-medium text-white mb-2">Option {{ schemeIndex + 1 }}</p>
                      <div class="flex space-x-1 h-8">
                        <div 
                          v-for="(color, colorIndex) in scheme" 
                          :key="colorIndex"
                          class="flex-1 first:rounded-l-md last:rounded-r-md"
                          :style="{ backgroundColor: color.hex }"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Usage Suggestions -->
                <div class="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 class="text-xl font-semibold text-white mb-4">Suggested Usage</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      v-for="(suggestion, index) in getUsageSuggestions()" 
                      :key="index"
                      class="bg-white/5 p-3 rounded-lg border border-white/10"
                    >
                      <div class="flex items-center mb-2">
                        <div 
                          class="w-4 h-4 rounded-full mr-2"
                          :style="{ backgroundColor: suggestion.color.hex }"
                        ></div>
                        <p class="font-medium text-white">{{ suggestion.color.name }}</p>
                      </div>
                      <p class="text-sm text-white/60">{{ suggestion.usage }}</p>
                    </div>
                  </div>
                </div>
                
                <!-- House Preview Section - Enhanced version -->
                <div class="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
                    <HomeIcon class="h-5 w-5 mr-2 text-white/70" />
                    House Preview
                  </h3>
                  
                  <div class="relative h-96 bg-[#0A2159]/30 rounded-lg overflow-hidden">
                    <!-- Enhanced house SVG with the recommended colors -->
                    <svg viewBox="0 0 1200 700" class="w-full h-full">
                      <!-- Sky background with gradient -->
                      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#0A2159" />
                        <stop offset="100%" stop-color="#0A3573" />
                      </linearGradient>
                      <rect x="0" y="0" width="1200" height="700" fill="url(#skyGradient)" />
                      
                      <!-- Sun with glow effect -->
                      <radialGradient id="sunGlow" cx="85%" cy="15%" r="20%" fx="85%" fy="15%">
                        <stop offset="0%" stop-color="#FFD54F" stop-opacity="0.3" />
                        <stop offset="100%" stop-color="#FFD54F" stop-opacity="0" />
                      </radialGradient>
                      <circle cx="1020" cy="100" r="140" fill="url(#sunGlow)" />
                      <circle cx="1020" cy="100" r="60" fill="#FFD700" opacity="0.7" />
                      
                      <!-- Clouds -->
                      <g opacity="0.2">
                        <!-- Cloud group 1 -->
                        <ellipse cx="200" cy="120" rx="70" ry="40" fill="white" />
                        <ellipse cx="250" cy="100" rx="60" ry="35" fill="white" />
                        <ellipse cx="300" cy="120" rx="70" ry="40" fill="white" />
                        <ellipse cx="230" cy="140" rx="65" ry="35" fill="white" />
                        
                        <!-- Cloud group 2 -->
                        <ellipse cx="650" cy="150" rx="60" ry="30" fill="white" />
                        <ellipse cx="700" cy="130" rx="50" ry="25" fill="white" />
                        <ellipse cx="750" cy="150" rx="60" ry="30" fill="white" />
                        <ellipse cx="680" cy="160" rx="55" ry="25" fill="white" />
                      </g>
                      
                      <!-- Mountains in background -->
                      <polygon points="0,350 150,200 300,320 450,180 600,300 750,220 900,350" fill="#0A2159" opacity="0.6" />
                      <polygon points="850,350 950,250 1050,300 1150,220 1200,280 1200,350" fill="#0A2159" opacity="0.7" />
                      
                      <!-- Ground with gradient -->
                      <linearGradient id="groundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#0A2159" />
                        <stop offset="100%" stop-color="#001333" />
                      </linearGradient>
                      <rect x="0" y="450" width="1200" height="250" fill="url(#groundGradient)" />
                      
                      <!-- Driveway -->
                      <path d="M450 450 L550 700 L650 700 L750 450" fill="#0A2159" opacity="0.7" />
                      <line x1="500" y1="500" x2="700" y2="500" stroke="#0A3573" stroke-width="2" />
                      <line x1="520" y1="550" x2="680" y2="550" stroke="#0A3573" stroke-width="2" />
                      <line x1="540" y1="600" x2="660" y2="600" stroke="#0A3573" stroke-width="2" />
                      <line x1="550" y1="650" x2="650" y2="650" stroke="#0A3573" stroke-width="2" />
                      
                      <!-- Landscape elements -->
                      <!-- Large tree left -->
                      <ellipse cx="150" cy="450" rx="80" ry="10" fill="#0A2159" opacity="0.5" />
                      <rect x="140" y="350" width="20" height="100" fill="#0A3573" />
                      <ellipse cx="150" cy="320" rx="60" ry="70" fill="#0A3573" opacity="0.8" />
                      <ellipse cx="150" cy="280" rx="50" ry="60" fill="#0A3573" opacity="0.6" />
                      
                      <!-- Large tree right -->
                      <ellipse cx="1050" cy="450" rx="80" ry="10" fill="#0A2159" opacity="0.5" />
                      <rect x="1040" y="350" width="20" height="100" fill="#0A3573" />
                      <ellipse cx="1050" cy="320" rx="60" ry="70" fill="#0A3573" opacity="0.8" />
                      <ellipse cx="1050" cy="280" rx="50" ry="60" fill="#0A3573" opacity="0.6" />
                      
                      <!-- Smaller trees -->
                      <rect x="250" y="420" width="15" height="30" fill="#0A3573" />
                      <ellipse cx="257" cy="400" rx="25" ry="30" fill="#0A3573" opacity="0.7" />
                      
                      <rect x="950" y="420" width="15" height="30" fill="#0A3573" />
                      <ellipse cx="957" cy="400" rx="25" ry="30" fill="#0A3573" opacity="0.7" />
                      
                      <!-- Bushes -->
                      <ellipse cx="350" cy="450" rx="40" ry="20" fill="#0A3573" opacity="0.6" />
                      <ellipse cx="850" cy="450" rx="40" ry="20" fill="#0A3573" opacity="0.6" />
                      
                      <!-- Main House Structure -->
                      <!-- Foundation and shadow -->
                      <rect x="350" y="450" width="500" height="10" fill="#001333" />
                      <ellipse cx="600" cy="460" rx="300" ry="10" fill="#000B1E" opacity="0.3" />
                      
                      <!-- Main house body - Two-story structure -->
                      <!-- First floor - Primary color -->
                      <rect x="350" y="300" width="500" height="150" :fill="activeScheme[0]?.hex || '#a3a3a3'" />
                      
                      <!-- Second floor - Primary color with slight variation -->
                      <rect x="400" y="200" width="400" height="100" :fill="activeScheme[0]?.hex || '#a3a3a3'" />
                      
                      <!-- Roof - Accent color -->
                      <polygon points="350,200 600,100 850,200" :fill="activeScheme[2]?.hex || '#737373'" />
                      <polygon points="350,200 850,200 850,190 350,190" :fill="activeScheme[2]?.hex || '#737373'" />
                      
                      <!-- Roof details -->
                      <line x1="600" y1="100" x2="600" y2="190" stroke="#001333" stroke-width="3" />
                      <rect x="590" y="120" width="20" height="30" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      
                      <!-- Chimney -->
                      <rect x="750" y="120" width="40" height="80" :fill="activeScheme[0]?.hex || '#a3a3a3'" />
                      <rect x="745" y="120" width="50" height="10" :fill="activeScheme[2]?.hex || '#737373'" />
                      <rect x="750" y="110" width="40" height="10" fill="#E57373" />
                      
                      <!-- Windows - First floor -->
                      <!-- Left window group -->
                      <rect x="380" y="330" width="80" height="90" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <rect x="385" y="335" width="70" height="80" fill="rgba(240, 255, 255, 0.8)" />
                      <line x1="420" y1="335" x2="420" y2="415" stroke="#001333" stroke-width="2" />
                      <line x1="385" y1="375" x2="455" y2="375" stroke="#001333" stroke-width="2" />
                      
                      <!-- Middle window group -->
                      <rect x="560" y="330" width="80" height="90" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <rect x="565" y="335" width="70" height="80" fill="rgba(240, 255, 255, 0.8)" />
                      <line x1="600" y1="335" x2="600" y2="415" stroke="#001333" stroke-width="2" />
                      <line x1="565" y1="375" x2="635" y2="375" stroke="#001333" stroke-width="2" />
                      
                      <!-- Right window group -->
                      <rect x="740" y="330" width="80" height="90" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <rect x="745" y="335" width="70" height="80" fill="rgba(240, 255, 255, 0.8)" />
                      <line x1="780" y1="335" x2="780" y2="415" stroke="#001333" stroke-width="2" />
                      <line x1="745" y1="375" x2="815" y2="375" stroke="#001333" stroke-width="2" />
                      
                      <!-- Windows - Second floor -->
                      <!-- Left window -->
                      <rect x="430" y="220" width="60" height="70" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <rect x="435" y="225" width="50" height="60" fill="rgba(240, 255, 255, 0.8)" />
                      <line x1="460" y1="225" x2="460" y2="285" stroke="#001333" stroke-width="2" />
                      <line x1="435" y1="255" x2="485" y2="255" stroke="#001333" stroke-width="2" />
                      
                      <!-- Right window -->
                      <rect x="710" y="220" width="60" height="70" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <rect x="715" y="225" width="50" height="60" fill="rgba(240, 255, 255, 0.8)" />
                      <line x1="740" y1="225" x2="740" y2="285" stroke="#001333" stroke-width="2" />
                      <line x1="715" y1="255" x2="765" y2="255" stroke="#001333" stroke-width="2" />
                      
                      <!-- Center decorative window -->
                      <circle cx="600" cy="240" r="30" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <circle cx="600" cy="240" r="25" fill="rgba(240, 255, 255, 0.8)" />
                      <line x1="600" y1="215" x2="600" y2="265" stroke="#001333" stroke-width="2" />
                      <line x1="575" y1="240" x2="625" y2="240" stroke="#001333" stroke-width="2" />
                      
                      <!-- Front door with steps -->
                      <rect x="560" y="380" width="80" height="70" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <rect x="570" y="390" width="60" height="60" :fill="activeScheme[3]?.hex || '#525252'" />
                      <circle cx="615" cy="420" r="5" fill="#FFD700" />
                      
                      <!-- Door steps -->
                      <rect x="560" y="450" width="80" height="5" fill="#001333" />
                      <rect x="565" y="455" width="70" height="5" fill="#0A2159" />
                      <rect x="570" y="460" width="60" height="5" fill="#0A3573" />
                      
                      <!-- Garage -->
                      <rect x="350" y="350" width="150" height="100" :fill="activeScheme[0]?.hex || '#a3a3a3'" />
                      <rect x="360" y="360" width="130" height="80" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <line x1="360" y1="380" x2="490" y2="380" stroke="#001333" stroke-width="1" />
                      <line x1="360" y1="400" x2="490" y2="400" stroke="#001333" stroke-width="1" />
                      <line x1="360" y1="420" x2="490" y2="420" stroke="#001333" stroke-width="1" />
                      
                      <!-- Porch and columns -->
                      <rect x="640" y="450" width="210" height="10" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <rect x="650" y="380" width="15" height="70" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <rect x="825" y="380" width="15" height="70" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      
                      <!-- Column details -->
                      <rect x="648" y="380" width="19" height="5" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="648" y="445" width="19" height="5" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="823" y="380" width="19" height="5" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="823" y="445" width="19" height="5" :fill="activeScheme[3]?.hex || '#525252'" />
                      
                      <!-- Decorative elements -->
                      <!-- Shutters -->
                      <rect x="360" y="330" width="15" height="90" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="465" y="330" width="15" height="90" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="540" y="330" width="15" height="90" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="645" y="330" width="15" height="90" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="720" y="330" width="15" height="90" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="825" y="330" width="15" height="90" :fill="activeScheme[3]?.hex || '#525252'" />
                      
                      <!-- Second floor shutters -->
                      <rect x="410" y="220" width="15" height="70" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="495" y="220" width="15" height="70" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="690" y="220" width="15" height="70" :fill="activeScheme[3]?.hex || '#525252'" />
                      <rect x="775" y="220" width="15" height="70" :fill="activeScheme[3]?.hex || '#525252'" />
                      
                      <!-- Decorative trim -->
                      <rect x="350" y="300" width="500" height="10" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <rect x="400" y="200" width="400" height="10" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      
                      <!-- House number -->
                      <rect x="570" y="350" width="60" height="20" :fill="activeScheme[1]?.hex || '#e5e5e5'" />
                      <text x="600" y="365" font-family="Arial" font-size="14" font-weight="bold" fill="#001333" text-anchor="middle">123</text>
                    </svg>
                    
                    <div class="absolute bottom-4 left-4 right-4 bg-[#0A2159]/80 backdrop-blur-sm p-3 rounded-lg">
                      <p class="text-sm text-white/80">
                        This is how your house might look with the recommended color scheme.
                      </p>
                    </div>
                  </div>
                  
                  <!-- House style description -->
                  <div class="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 class="text-lg font-medium text-white mb-2">{{ getHouseStyleName() }}</h4>
                    <p class="text-sm text-white/60">{{ getHouseStyleDescription() }}</p>
                  </div>
                </div>
              </div>
              
              <div v-else class="flex flex-col items-center justify-center py-12 text-center">
                <div class="p-4 bg-white/5 rounded-full mb-4">
                  <HomeIcon class="h-12 w-12 text-white/40" />
                </div>
                <p class="text-white mb-2">Fill out the house details form to get personalized paint color recommendations</p>
                <p class="text-white/60 text-sm">Our AI will analyze your inputs to suggest the perfect colors for your home</p>
              </div>
              
              <!-- Recent History Section - Enhanced and Always Visible -->
              <div class="bg-white/5 p-6 rounded-lg border border-white/10 mt-8">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-xl font-semibold text-white flex items-center">
                    <HistoryIcon class="h-5 w-5 mr-2 text-white/70" />
                    Recent History
                  </h3>
                  <button 
                    @click="clearHistory" 
                    class="text-sm text-white/60 hover:text-white flex items-center gap-1"
                    v-if="recentHistory.length > 0"
                  >
                    <TrashIcon class="h-4 w-4" />
                    <span>Clear</span>
                  </button>
                </div>
                
                <div v-if="recentHistory.length > 0" class="space-y-3 max-h-80 overflow-y-auto pr-2">
                  <div 
                    v-for="(item, index) in recentHistory" 
                    :key="index"
                    @click="loadHistoryItem(item)"
                    class="bg-white/5 p-3 rounded-lg border border-white/10 hover:border-white/20 cursor-pointer transition-all"
                  >
                    <div class="flex justify-between items-start mb-2">
                      <div>
                        <h4 class="font-medium text-white">{{ getHouseStyleNameById(item.houseStyle) }}</h4>
                        <p class="text-xs text-white/60">{{ formatDate(item.createdAt) }}</p>
                      </div>
                      <span class="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                        {{ getColorPreferenceNameById(item.colorPreference) }}
                      </span>
                    </div>
                    
                    <div class="flex space-x-1 h-6 mb-2">
                      <div 
                        v-for="(color, colorIndex) in item.schemes[0]" 
                        :key="colorIndex"
                        class="flex-1 first:rounded-l-md last:rounded-r-md"
                        :style="{ backgroundColor: color.hex }"
                      ></div>
                    </div>
                    
                    <div class="flex justify-between text-xs text-white/60">
                      <span>{{ item.size }} sqm</span>
                      <span>{{ getSurfaceMaterialNameById(item.surfaceMaterial) }}</span>
                    </div>
                  </div>
                </div>
                
                <div v-else class="text-center py-8">
                  <div class="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-3">
                    <HistoryIcon class="h-6 w-6 text-white/40" />
                  </div>
                  <p class="text-white/60 mb-2">No history yet</p>
                  <p class="text-sm text-white/40">Generate recommendations to see your history here</p>
                </div>
                
                <div class="mt-4 flex justify-center">
                  <a 
                    href="/staff/history" 
                    class="text-white/80 hover:text-white flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <HistoryIcon class="h-4 w-4" />
                    <span>View All History</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  
  <!-- Toast notification for color copy -->
  <div 
    v-if="showToast" 
    class="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center"
  >
    <CheckIcon class="h-5 w-5 mr-2" />
    <span>{{ toastMessage }}</span>
  </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
  import {
    LayoutDashboard as LayoutDashboardIcon,
    Package as PackageIcon,
    Palette as PaletteIcon,
    Home as HomeIcon,
    Settings as SettingsIcon,
    User as UserIcon,
    LogOut as LogOutIcon,
    Menu as MenuIcon,
    X as XIcon,
    Check as CheckIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    ChevronDown as ChevronDownIcon,
    Calendar as CalendarIcon,
    Bell as BellIcon,
    History as HistoryIcon,
    Trash as TrashIcon
  } from 'lucide-vue-next';
  import { 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    orderBy, 
    limit,
    Timestamp,
    deleteDoc,
    where,
    doc,
    getDoc
  } from 'firebase/firestore';
  import { db, auth } from '../../config/firebase';
  
  const router = useRouter();
  const mobileSidebarOpen = ref(false);
  const loading = ref(false);
  const allRecommendations = ref([]);
  const activeSchemeIndex = ref(0);
  const showToast = ref(false);
  const toastMessage = ref('');
  const recentHistory = ref([]);
  
  // Current date
  const currentDate = computed(() => {
    return new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });
  
  // Computed property to get the active color scheme
  const activeScheme = computed(() => {
    if (allRecommendations.value.length === 0) return [];
    return allRecommendations.value[activeSchemeIndex.value];
  });
  
  // Navigation functions for color schemes
  const nextScheme = () => {
    if (activeSchemeIndex.value < allRecommendations.value.length - 1) {
      activeSchemeIndex.value++;
    }
  };
  
  const prevScheme = () => {
    if (activeSchemeIndex.value > 0) {
      activeSchemeIndex.value--;
    }
  };
  
  // House Styles
  const houseStyles = [
    { id: 'modern', name: 'Modern' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'mediterranean', name: 'Mediterranean' },
    { id: 'colonial', name: 'Colonial' },
    { id: 'contemporary', name: 'Contemporary' },
    { id: 'bungalow', name: 'Bungalow' },
    { id: 'minimalist', name: 'Minimalist' },
    { id: 'craftsman', name: 'Craftsman' },
    { id: 'victorian', name: 'Victorian' },
    { id: 'farmhouse', name: 'Farmhouse' },
  ];
  
  // Surface Materials
  const surfaceMaterials = [
    { id: 'concrete', name: 'Concrete/Cement' },
    { id: 'wood', name: 'Wood' },
    { id: 'brick', name: 'Brick' },
    { id: 'stucco', name: 'Stucco' },
    { id: 'vinyl', name: 'Vinyl Siding' },
    { id: 'metal', name: 'Metal' },
    { id: 'fiber_cement', name: 'Fiber Cement' },
  ];
  
  // Color Preferences
  const colorPreferences = [
    { id: 'warm', name: 'Warm Colors' },
    { id: 'cool', name: 'Cool Colors' },
    { id: 'neutral', name: 'Neutral Colors' },
    { id: 'bright', name: 'Bright Colors' },
    { id: 'pastel', name: 'Pastel Colors' },
    { id: 'earthy', name: 'Earthy Tones' },
    { id: 'monochromatic', name: 'Monochromatic' },
    { id: 'traditional', name: 'Traditional Filipino' },
  ];
  
  // Form Data
  const formData = reactive({
    houseStyle: '',
    size: '',
    surfaceMaterial: '',
    colorPreference: '',
  });
  
  // Generate Recommendations
    
    // Replace the generateRecommendations function with this improved version
    const generateRecommendations = async () => {
      if (!formData.houseStyle || !formData.size || !formData.colorPreference) {
        alert('Please fill out all required fields');
        return;
      }
      
      loading.value = true;
      activeSchemeIndex.value = 0;
      
      try {
        // Generate color schemes
        const schemes = generateMultipleColorSchemes();
        allRecommendations.value = schemes;
        
        // Save recommendation to local storage first as a fallback
        const recommendation = {
          houseStyle: formData.houseStyle,
          size: parseFloat(formData.size),
          surfaceMaterial: formData.surfaceMaterial,
          colorPreference: formData.colorPreference,
          schemes: schemes,
          createdAt: new Date().toISOString()
        };
        
        // Try to save to Firestore if available
        if (db) {
          try {
            // Check if user is authenticated
            if (!auth.currentUser) {
              console.log('User not authenticated, saving locally only');
              
              // Save to local storage as fallback
              const localHistory = JSON.parse(localStorage.getItem('paintRecommendations') || '[]');
              const localRec = {
                id: 'local_' + Date.now(),
                ...recommendation,
                createdBy: 'staff'
              };
              localHistory.unshift(localRec);
              localStorage.setItem('paintRecommendations', JSON.stringify(localHistory.slice(0, 20)));
              
              // Add to local history immediately
              recentHistory.value = [localRec, ...recentHistory.value].slice(0, 10);
              
              // Show success toast
              toastMessage.value = 'Recommendation saved locally (not logged in)';
              showToast.value = true;
              setTimeout(() => {
                showToast.value = false;
              }, 3000);
            } else {
              // User is authenticated, save to Firestore
              const recommendationsRef = collection(db, 'paintRecommendations');
              const newRecommendation = {
                ...recommendation,
                createdBy: 'staff',
                userId: auth.currentUser.uid,
                createdAt: Timestamp.now()
              };
              
              const docRef = await addDoc(recommendationsRef, newRecommendation);
              console.log('Recommendation saved to database with ID:', docRef.id);
              
              // Add to local history immediately
              const savedItem = {
                id: docRef.id,
                ...newRecommendation
              };
              
              // Update local history
              recentHistory.value = [savedItem, ...recentHistory.value].slice(0, 10);
              
              // Show success toast
              toastMessage.value = 'Recommendation saved successfully';
              showToast.value = true;
              setTimeout(() => {
                showToast.value = false;
              }, 3000);
            }
          } catch (firestoreError) {
            console.error('Firestore error:', firestoreError);
            
            // Fallback to local storage if Firestore fails
            const localHistory = JSON.parse(localStorage.getItem('paintRecommendations') || '[]');
            const localRec = {
              id: 'local_' + Date.now(),
              ...recommendation,
              createdBy: 'staff'
            };
            localHistory.unshift(localRec);
            localStorage.setItem('paintRecommendations', JSON.stringify(localHistory.slice(0, 20)));
            
            // Add to local history immediately
            recentHistory.value = [localRec, ...recentHistory.value].slice(0, 10);
            
            // Show warning toast
            toastMessage.value = 'Saved locally (database connection failed)';
            showToast.value = true;
            setTimeout(() => {
              showToast.value = false;
            }, 3000);
          }
        } else {
          // No database available, save to local storage
          const localHistory = JSON.parse(localStorage.getItem('paintRecommendations') || '[]');
          const localRec = {
            id: 'local_' + Date.now(),
            ...recommendation,
            createdBy: 'staff'
          };
          localHistory.unshift(localRec);
          localStorage.setItem('paintRecommendations', JSON.stringify(localHistory.slice(0, 20)));
          
          // Add to local history immediately
          recentHistory.value = [localRec, ...recentHistory.value].slice(0, 10);
          
          // Show success toast
          toastMessage.value = 'Recommendation saved locally';
          showToast.value = true;
          setTimeout(() => {
            showToast.value = false;
          }, 3000);
        }
      } catch (error) {
        console.error('Error generating or saving recommendation:', error);
        alert('Failed to save recommendation. Please try again.');
      } finally {
        loading.value = false;
      }
    };
  
  // Generate multiple color schemes based on form data
  const generateMultipleColorSchemes = () => {
    // Base color schemes for each preference
    const baseSchemes = {
      warm: [
        [
          { name: 'Terracotta', hex: '#E07A5F' },
          { name: 'Sandstone', hex: '#F2CC8F' },
          { name: 'Cream', hex: '#F4F1DE' },
          { name: 'Sage', hex: '#81B29A' },
        ],
        [
          { name: 'Rust', hex: '#C35831' },
          { name: 'Peach', hex: '#FFCDB2' },
          { name: 'Wheat', hex: '#E6CCB2' },
          { name: 'Olive', hex: '#606C38' },
        ],
        [
          { name: 'Sienna', hex: '#9A6348' },
          { name: 'Buff', hex: '#EED7C5' },
          { name: 'Ivory', hex: '#F8F4E3' },
          { name: 'Moss', hex: '#606C38' },
        ],
        [
          { name: 'Burnt Orange', hex: '#CC5500' },
          { name: 'Tan', hex: '#D2B48C' },
          { name: 'Eggshell', hex: '#F0EAD6' },
          { name: 'Forest', hex: '#3A5311' },
        ],
        [
          { name: 'Amber', hex: '#FFBF00' },
          { name: 'Camel', hex: '#C19A6B' },
          { name: 'Linen', hex: '#FAF0E6' },
          { name: 'Hunter Green', hex: '#355E3B' },
        ],
      ],
      cool: [
        [
          { name: 'Slate Blue', hex: '#3D405B' },
          { name: 'Sky Blue', hex: '#81B29A' },
          { name: 'Mint', hex: '#F1FAEE' },
          { name: 'Navy', hex: '#1D3557' },
        ],
        [
          { name: 'Steel Blue', hex: '#4682B4' },
          { name: 'Powder Blue', hex: '#B0E0E6' },
          { name: 'Frost', hex: '#E8F1F2' },
          { name: 'Indigo', hex: '#3A4A7D' },
        ],
        [
          { name: 'Teal', hex: '#008080' },
          { name: 'Aqua', hex: '#7FDBFF' },
          { name: 'Pearl', hex: '#EAEAEA' },
          { name: 'Midnight', hex: '#191970' },
        ],
        [
          { name: 'Cerulean', hex: '#007BA7' },
          { name: 'Baby Blue', hex: '#89CFF0' },
          { name: 'Cloud', hex: '#F7F9FB' },
          { name: 'Charcoal', hex: '#36454F' },
        ],
        [
          { name: 'Cobalt', hex: '#0047AB' },
          { name: 'Periwinkle', hex: '#CCCCFF' },
          { name: 'Snow', hex: '#FFFAFA' },
          { name: 'Oxford Blue', hex: '#002147' },
        ],
      ],
      neutral: [
        [
          { name: 'Taupe', hex: '#D6CCC2' },
          { name: 'Ivory', hex: '#F5EBE0' },
          { name: 'Charcoal', hex: '#5C5C5C' },
          { name: 'Beige', hex: '#E3D5CA' },
        ],
        [
          { name: 'Greige', hex: '#A9A9A9' },
          { name: 'Off-White', hex: '#FAF9F6' },
          { name: 'Slate', hex: '#708090' },
          { name: 'Sand', hex: '#C2B280' },
        ],
        [
          { name: 'Stone', hex: '#928E85' },
          { name: 'Alabaster', hex: '#EDEAE0' },
          { name: 'Graphite', hex: '#474A51' },
          { name: 'Khaki', hex: '#C3B091' },
        ],
        [
          { name: 'Mushroom', hex: '#B8A99A' },
          { name: 'Chalk', hex: '#F5F5F5' },
          { name: 'Pewter', hex: '#899499' },
          { name: 'Ecru', hex: '#CFC5A5' },
        ],
        [
          { name: 'Dove Gray', hex: '#6D6D6D' },
          { name: 'Eggshell', hex: '#F0EAD6' },
          { name: 'Gunmetal', hex: '#2A3439' },
          { name: 'Fawn', hex: '#E5AA70' },
        ],
      ],
      bright: [
        [
          { name: 'Coral', hex: '#FF6B6B' },
          { name: 'Turquoise', hex: '#4ECDC4' },
          { name: 'Sunshine', hex: '#FFD166' },
          { name: 'Lavender', hex: '#A5A4CB' },
        ],
        [
          { name: 'Magenta', hex: '#FF00FF' },
          { name: 'Cyan', hex: '#00FFFF' },
          { name: 'Lemon', hex: '#FFF44F' },
          { name: 'Violet', hex: '#8F00FF' },
        ],
        [
          { name: 'Crimson', hex: '#DC143C' },
          { name: 'Azure', hex: '#007FFF' },
          { name: 'Marigold', hex: '#FCBF49' },
          { name: 'Orchid', hex: '#DA70D6' },
        ],
        [
          { name: 'Ruby', hex: '#E0115F' },
          { name: 'Sapphire', hex: '#0F52BA' },
          { name: 'Canary', hex: '#FFFF8F' },
          { name: 'Amethyst', hex: '#9966CC' },
        ],
        [
          { name: 'Scarlet', hex: '#FF2400' },
          { name: 'Electric Blue', hex: '#7DF9FF' },
          { name: 'Goldenrod', hex: '#DAA520' },
          { name: 'Fuchsia', hex: '#FF00FF' },
        ],
      ],
      pastel: [
        [
          { name: 'Blush', hex: '#FFCAD4' },
          { name: 'Mint Green', hex: '#C1FFD7' },
          { name: 'Powder Blue', hex: '#B5DEFF' },
          { name: 'Lavender', hex: '#CAB8FF' },
        ],
        [
          { name: 'Peach', hex: '#FFE5B4' },
          { name: 'Pistachio', hex: '#D5EEBB' },
          { name: 'Sky', hex: '#CCECFF' },
          { name: 'Lilac', hex: '#C8A2C8' },
        ],
        [
          { name: 'Salmon', hex: '#FFB6B9' },
          { name: 'Honeydew', hex: '#E0FFE0' },
          { name: 'Baby Blue', hex: '#BFEFFF' },
          { name: 'Thistle', hex: '#D8BFD8' },
        ],
        [
          { name: 'Coral Pink', hex: '#F9A7B0' },
          { name: 'Celadon', hex: '#ACE1AF' },
          { name: 'Periwinkle', hex: '#CCCCFF' },
          { name: 'Mauve', hex: '#E0B0FF' },
        ],
        [
          { name: 'Rose', hex: '#FFD1DC' },
          { name: 'Seafoam', hex: '#8FE5D7' },
          { name: 'Cornflower', hex: '#ABCDEF' },
          { name: 'Wisteria', hex: '#C9A0DC' },
        ],
      ],
      earthy: [
        [
          { name: 'Olive', hex: '#606C38' },
          { name: 'Rust', hex: '#BC6C25' },
          { name: 'Clay', hex: '#DDA15E' },
          { name: 'Forest', hex: '#283618' },
        ],
        [
          { name: 'Moss', hex: '#8A9A5B' },
          { name: 'Terracotta', hex: '#CD5C5C' },
          { name: 'Sandstone', hex: '#C9AE5D' },
          { name: 'Pine', hex: '#01796F' },
        ],
        [
          { name: 'Sage', hex: '#9CAF88' },
          { name: 'Sienna', hex: '#A0522D' },
          { name: 'Wheat', hex: '#F5DEB3' },
          { name: 'Evergreen', hex: '#275E4D' },
        ],
        [
          { name: 'Fern', hex: '#4F7942' },
          { name: 'Cinnamon', hex: '#D2691E' },
          { name: 'Flax', hex: '#EEDC82' },
          { name: 'Hunter', hex: '#355E3B' },
        ],
        [
          { name: 'Avocado', hex: '#568203' },
          { name: 'Brick', hex: '#8B0000' },
          { name: 'Cream', hex: '#FFFDD0' },
          { name: 'Mahogany', hex: '#420D09' },
        ],
      ],
      monochromatic: [
        [
          { name: 'Light Gray', hex: '#E5E5E5' },
          { name: 'Medium Gray', hex: '#BDBDBD' },
          { name: 'Dark Gray', hex: '#757575' },
          { name: 'Charcoal', hex: '#424242' },
        ],
        [
          { name: 'Off-White', hex: '#F5F5F5' },
          { name: 'Silver', hex: '#C0C0C0' },
          { name: 'Slate', hex: '#708090' },
          { name: 'Onyx', hex: '#353839' },
        ],
        [
          { name: 'Ivory', hex: '#FFFFF0' },
          { name: 'Platinum', hex: '#E5E4E2' },
          { name: 'Pewter', hex: '#899499' },
          { name: 'Ebony', hex: '#555D50' },
        ],
        [
          { name: 'Snow', hex: '#FFFAFA' },
          { name: 'Gainsboro', hex: '#DCDCDC' },
          { name: 'Smoke', hex: '#848884' },
          { name: 'Jet', hex: '#343434' },
        ],
        [
          { name: 'White', hex: '#FFFFFF' },
          { name: 'Light Steel', hex: '#B0C4DE' },
          { name: 'Dim Gray', hex: '#696969' },
          { name: 'Black', hex: '#000000' },
        ],
      ],
      traditional: [
        [
          { name: 'Creamy White', hex: '#F8F8FF' },
          { name: 'Capiz Shell', hex: '#FFF5EE' },
          { name: 'Antique Wood', hex: '#8B4513' },
          { name: 'Terracotta', hex: '#E2725B' },
        ],
        [
          { name: 'Ivory Lace', hex: '#FAF0E6' },
          { name: 'Bamboo Green', hex: '#228B22' },
          { name: 'Woven Brown', hex: '#A0522D' },
          { name: 'Sunset Orange', hex: '#FF8C00' },
        ],
        [
          { name: 'Pearl White', hex: '#FFFAF0' },
          { name: 'Coconut Husk', hex: '#DEB887' },
          { name: 'Mahogany', hex: '#C04000' },
          { name: 'Golden Yellow', hex: '#FFD700' },
        ],
        [
          { name: 'Silk White', hex: '#FFFAFA' },
          { name: 'Rice Paddy', hex: '#3CB371' },
          { name: 'Dark Wood', hex: '#654321' },
          { name: 'Earthy Red', hex: '#B22222' },
        ],
        [
          { name: 'Paper White', hex: '#F5F5DC' },
          { name: 'Leaf Green', hex: '#008000' },
          { name: 'Chocolate Brown', hex: '#D2691E' },
          { name: 'Rustic Orange', hex: '#A0522D' },
        ],
      ],
    };
    
    // Return all schemes for the selected preference
    return baseSchemes[formData.colorPreference] || baseSchemes.neutral;
  };
  
  // Copy color hex to clipboard
  const copyColorToClipboard = (hex) => {
    navigator.clipboard.writeText(hex).then(() => {
      toastMessage.value = `Color ${hex} copied to clipboard!`;
      showToast.value = true;
      setTimeout(() => {
        showToast.value = false;
      }, 3000);
    });
  };
  
  // Get color harmony description based on color preference
  const getColorHarmonyDescription = () => {
    const descriptions = {
      warm: 'This warm color palette creates a cozy and inviting atmosphere, perfect for living rooms and dining areas.',
      cool: 'These cool tones promote a calm and relaxing environment, ideal for bedrooms and bathrooms.',
      neutral: 'A timeless neutral palette that provides versatility and elegance for any room in your home.',
      bright: 'These vibrant colors add energy and personality to your space, great for accent walls or creative areas.',
      pastel: 'Soft pastel colors create a gentle and soothing ambiance, perfect for nurseries and reading nooks.',
      earthy: 'Natural earth tones bring the outdoors in, creating a grounded and organic feel to your home.',
      monochromatic: 'This sophisticated monochromatic scheme creates visual harmony through variations of the same color.',
      traditional: 'Inspired by traditional Filipino architecture, these colors celebrate cultural heritage and natural materials.',
    };
    
    return descriptions[formData.colorPreference] || descriptions.neutral;
  };
  
  // Get usage suggestions for each color
  const getUsageSuggestions = () => {
    if (!activeScheme.value || activeScheme.value.length < 4) return [];
    
    return [
      {
        color: activeScheme.value[0],
        usage: 'Primary exterior walls and large surfaces'
      },
      {
        color: activeScheme.value[1],
        usage: 'Trim, ceilings, and interior walls'
      },
      {
        color: activeScheme.value[2],
        usage: 'Accent walls and architectural details'
      },
      {
        color: activeScheme.value[3],
        usage: 'Doors, shutters, and decorative elements'
      }
    ];
  };
  
  // Toggle Mobile Sidebar
  const toggleMobileSidebar = () => {
    mobileSidebarOpen.value = !mobileSidebarOpen.value;
  };
  
  // Handle Logout
  const handleLogout = () => {
    router.push('/staff');
  };
  
  // Get house style name
  const getHouseStyleName = () => {
    const style = houseStyles.find(style => style.id === formData.houseStyle);
    return style ? style.name : 'Custom';
  };
  
  // Get house style name by ID
  const getHouseStyleNameById = (styleId) => {
    const style = houseStyles.find(style => style.id === styleId);
    return style ? style.name : 'Custom';
  };
  
  // Get color preference name by ID
  const getColorPreferenceNameById = (preferenceId) => {
    const preference = colorPreferences.find(pref => pref.id === preferenceId);
    return preference ? preference.name : 'Custom';
  };
  
  // Get surface material name by ID
  const getSurfaceMaterialNameById = (materialId) => {
    const material = surfaceMaterials.find(mat => mat.id === materialId);
    return material ? material.name : 'Custom';
  };
  
  // Get house style description
  const getHouseStyleDescription = () => {
    const descriptions = {
      modern: 'Modern homes feature clean lines, simple proportions, and minimal decorative elements. The recommended colors enhance the contemporary aesthetic while maintaining visual interest.',
      traditional: 'Traditional homes have a timeless appeal with symmetrical facades and classic details. These colors respect the architectural heritage while providing a fresh update.',
      mediterranean: 'Mediterranean-style homes draw inspiration from coastal European architecture. The color palette reflects the sun-drenched landscapes of the Mediterranean region.',
      colonial: 'Colonial architecture is characterized by symmetry and formal design elements. These colors highlight the historical character while adding modern sensibility.',
      contemporary: 'Contemporary homes blend current trends with innovative design. This color scheme balances boldness with livability for a striking appearance.',
      bungalow: 'Bungalows are known for their cozy charm and craftsmanship. These colors enhance the welcoming nature of this architectural style.',
      minimalist: 'Minimalist homes emphasize simplicity and functionality. The color palette maintains clean aesthetics while adding subtle depth.',
      craftsman: 'Craftsman homes celebrate handcrafted details and natural materials. These colors complement the organic character of the architecture.',
      victorian: 'Victorian homes feature ornate details and decorative elements. This color scheme honors the style\'s elegance while updating it for modern sensibilities.',
      farmhouse: 'Farmhouse style combines rustic charm with practical design. These colors create a welcoming atmosphere that balances tradition with contemporary appeal.',
    };
    
    return descriptions[formData.houseStyle] || 'This custom color scheme is designed to enhance your home\'s unique architectural features while reflecting your personal style preferences.';
  };
  
  // Format date for display
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Load a history item
  const loadHistoryItem = (item) => {
    // Fill the form with the saved data
    formData.houseStyle = item.houseStyle;
    formData.size = item.size;
    formData.surfaceMaterial = item.surfaceMaterial;
    formData.colorPreference = item.colorPreference;
    
    // Load the color schemes
    allRecommendations.value = item.schemes;
    activeSchemeIndex.value = 0;
    
    // Show toast notification
    toastMessage.value = 'Previous recommendation loaded';
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 3000);
    
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Clear history
    const clearHistory = async () => {
      if (!confirm('Are you sure you want to clear your recommendation history?')) return;
      
      try {
        // Clear local history first
        recentHistory.value = [];
        localStorage.removeItem('paintRecommendations');
        
        // Then try to clear Firestore if available
        if (db && auth.currentUser) {
          try {
            const recommendationsRef = collection(db, 'paintRecommendations');
            const q = query(recommendationsRef, where('userId', '==', auth.currentUser.uid));
            const snapshot = await getDocs(q);
            
            // Delete each document one by one
            for (const doc of snapshot.docs) {
              await deleteDoc(doc.ref);
              console.log('Deleted document:', doc.id);
            }
          } catch (firestoreError) {
            console.error('Error clearing Firestore history:', firestoreError);
            // Still show success since we cleared local history
          }
        }
        
        // Show toast notification
        toastMessage.value = 'History cleared successfully';
        showToast.value = true;
        setTimeout(() => {
          showToast.value = false;
        }, 3000);
      } catch (error) {
        console.error('Error clearing history:', error);
        alert('Failed to clear history. Please try again.');
      }
    };
  
  // Replace the fetchRecentHistory function with this improved version that includes local storage fallback
    const fetchRecentHistory = async () => {
      try {
        // First, get any local recommendations
        const localHistory = JSON.parse(localStorage.getItem('paintRecommendations') || '[]');
        
        // If Firestore is available and user is authenticated, try to fetch from there too
        if (db && auth.currentUser) {
          try {
            console.log('Fetching history for user:', auth.currentUser.uid);
            
            const recommendationsRef = collection(db, 'paintRecommendations');
            const q = query(
              recommendationsRef, 
              where('userId', '==', auth.currentUser.uid),
              orderBy('createdAt', 'desc'),
              limit(10)
            );
            
            const snapshot = await getDocs(q);
            const firestoreItems = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            
            console.log(`Fetched ${firestoreItems.length} recommendations from Firestore`);
            
            // Combine Firestore and local items, prioritizing Firestore ones
            // and removing duplicates (based on having the same timestamp)
            const combinedHistory = [...firestoreItems];
            
            // Add local items that don't exist in Firestore
            for (const localItem of localHistory) {
              if (!localItem.id.startsWith('local_')) continue; // Skip non-local items
              
              // Add this local item
              combinedHistory.push(localItem);
            }
            
            // Sort by createdAt (newest first) and limit to 10 items
            recentHistory.value = combinedHistory
              .sort((a, b) => {
                const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt);
                const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt);
                return dateB - dateA;
              })
              .slice(0, 10);
          } catch (firestoreError) {
            console.error('Error fetching from Firestore:', firestoreError);
            // Fallback to local storage only
            recentHistory.value = localHistory.slice(0, 10);
          }
        } else {
          // No Firestore or not authenticated, use local storage only
          console.log('Using local storage for history (no Firestore or not authenticated)');
          recentHistory.value = localHistory.slice(0, 10);
        }
      } catch (error) {
        console.error('Error fetching recent history:', error);
        recentHistory.value = [];
      }
    };
  
  // Add this function to initialize Firebase Auth state listener
    const initializeAuthListener = () => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          console.log('User is authenticated:', user.uid);
          fetchRecentHistory();
        } else {
          console.log('User is not authenticated, using local storage only');
          fetchRecentHistory(); // Will use local storage fallback
        }
      });
      
      // Return unsubscribe function for cleanup
      return unsubscribe;
    };
  
  // Update the onMounted hook to use the auth listener
    // Replace the onMounted section with this improved version
    onMounted(() => {
      recentHistory.value = []; // Initialize as empty array
      
      // Initialize auth state listener
      const authUnsubscribe = initializeAuthListener();
      
      // Set up interval to refresh history every 5 minutes
      const historyRefreshInterval = setInterval(() => {
        fetchRecentHistory();
      }, 300000); // 5 minutes
      
      // Check for loadId in URL query parameters
      const loadIdFromUrl = async () => {
        const loadId = router.currentRoute.value.query.loadId;
        if (loadId) {
          try {
            // First check if it's a local item
            if (loadId.startsWith('local_')) {
              const localHistory = JSON.parse(localStorage.getItem('paintRecommendations') || '[]');
              const localItem = localHistory.find(item => item.id === loadId);
              
              if (localItem) {
                loadHistoryItem(localItem);
                return;
              }
            }
            
            // If not local or not found locally, try Firestore
            if (db) {
              const docRef = doc(db, 'paintRecommendations', loadId);
              const docSnap = await getDoc(docRef);
              
              if (docSnap.exists()) {
                const item = {
                  id: docSnap.id,
                  ...docSnap.data()
                };
                
                // Load the recommendation
                loadHistoryItem(item);
                
                // Show toast notification
                toastMessage.value = 'Recommendation loaded from history';
                showToast.value = true;
                setTimeout(() => {
                  showToast.value = false;
                }, 3000);
              }
            }
          } catch (error) {
            console.error('Error loading recommendation from URL:', error);
          }
        }
      };
      
      // Call the function to load from URL
      loadIdFromUrl();
      
      // Clean up on component unmount
      onUnmounted(() => {
        clearInterval(historyRefreshInterval);
        authUnsubscribe();
      });
    });
  </script>
  
  <style scoped>
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  /* Hide scrollbar for tabs but keep functionality */
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  .hide-scrollbar::-webkit-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
  
  /* Animation for toast */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(10px); }
  }
  
  div[v-if="showToast"] {
    animation: fadeIn 0.3s ease-out;
  }
  
  div[v-if="!showToast"] {
    animation: fadeOut 0.3s ease-in;
  }
  </style>