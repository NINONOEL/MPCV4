<template>
  <!-- Toast notification -->
  <div 
    v-if="showToast"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div class="bg-black/50 fixed inset-0" @click="showToast = false"></div>
    <div class="bg-white text-gray-800 px-6 py-4 rounded-lg shadow-lg flex items-center z-10 max-w-md animate-bounce-in border border-green-200">
      <CheckIcon class="h-6 w-6 mr-3 text-green-600" />
      <span class="text-lg font-medium">{{ toastMessage }}</span>
    </div>
  </div>

  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-blue-200 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 hidden md:flex md:flex-col shadow-lg">
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>

        <!-- Navigation - Scrollable Area -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
            :class="{ 'shadow-sm border border-blue-200 transform scale-105': $route.path === '/admin/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700"
            :class="{ 'shadow-sm border border-green-200 transform scale-105': $route.path === '/admin/staff' }"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            :class="{ 'shadow-sm border border-purple-200 transform scale-105': $route.path === '/admin/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 shadow-sm border border-orange-200 transform scale-105"
            :class="{ 'hover:bg-orange-100 hover:text-orange-700': $route.path !== '/admin/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border border-pink-200 transform scale-105': $route.path === '/admin/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border border-teal-200 transform scale-105': $route.path === '/admin/sales-analytics' }"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
            :class="{ 'shadow-sm border border-indigo-200 transform scale-105': $route.path === '/admin/reports' }"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700"
            :class="{ 'shadow-sm border border-amber-200 transform scale-105': $route.path === '/admin/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700"
            :class="{ 'shadow-sm border border-red-200 transform scale-105': $route.path === '/admin/security' }"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>

          <!-- Perfect spacing -->
          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-600 truncate">admin@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors"
              title="Logout"
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
          class="p-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg"
          aria-label="Toggle navigation menu"
        >
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <XIcon v-else class="w-6 h-6 text-gray-700" />
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
        class="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 z-20 md:hidden shadow-xl flex flex-col"
      >
        <!-- Same mobile sidebar content as desktop -->
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>

        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <!-- Mobile navigation links with same styling -->
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50"
            :class="{ 'shadow-sm border border-blue-200': $route.path === '/admin/dashboard' }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50"
            :class="{ 'shadow-sm border border-green-200': $route.path === '/admin/staff' }"
            @click="mobileSidebarOpen = false"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50"
            :class="{ 'shadow-sm border border-purple-200': $route.path === '/admin/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 shadow-sm border border-orange-200"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <!-- Other mobile nav links... -->
        </nav>

        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-600 truncate">admin@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
    
      <!-- Main Content -->
      <main class="flex-1 flex flex-col overflow-auto">
        <!-- Header -->
        <header class="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-8 py-4 shadow-sm">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">House Paint Recommender</h1>
              <p class="text-gray-600">Get personalized paint color recommendations for your house</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-orange-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900">Welcome, Admin</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="flex-1 p-0">
          <!-- Tabs -->
          <div class="bg-white/60 backdrop-blur-sm border-b border-gray-200">
            <div class="flex">
              <button 
                @click="activeTab = 'recommender'"
                class="px-6 py-3 font-medium transition-all relative"
                :class="activeTab === 'recommender' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-500'"
              >
                <span class="flex items-center gap-2">
                  <PaintBucketIcon class="w-5 h-5" />
                  Recommender
                </span>
                <div 
                  v-if="activeTab === 'recommender'" 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-pink-500"
                ></div>
              </button>
              <button 
                @click="activeTab = 'history'"
                class="px-6 py-3 font-medium transition-all relative"
                :class="activeTab === 'history' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-500'"
              >
                <span class="flex items-center gap-2">
                  <HistoryIcon class="w-5 h-5" />
                  History
                </span>
                <div 
                  v-if="activeTab === 'history'" 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-pink-500"
                ></div>
              </button>
            </div>
          </div>

          <!-- Recommender Tab -->
          <div v-if="activeTab === 'recommender'" class="flex flex-1">
            <!-- Left side - Form -->
            <div class="w-1/3 p-6 border-r border-gray-200">
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">House Details</h2>
                
                <form @submit.prevent="getRecommendations" class="space-y-6">
                  <!-- House Style -->
                  <div>
                    <label for="houseStyle" class="block text-gray-700 font-medium mb-2">House Style</label>
                    <select 
                      id="houseStyle" 
                      v-model="formData.houseStyle"
                      class="w-full bg-white border border-gray-300 rounded-lg text-gray-700 px-4 py-3 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all"
                      required
                    >
                      <option value="" disabled>Select a house style</option>
                      <option v-for="style in houseStyles" :key="style.id" :value="style.id">{{ style.name }}</option>
                    </select>
                  </div>
                  
                  <!-- Surface Material -->
                  <div>
                    <label for="surfaceMaterial" class="block text-gray-700 font-medium mb-2">Surface Material</label>
                    <select 
                      id="surfaceMaterial" 
                      v-model="formData.surfaceMaterial"
                      class="w-full bg-white border border-gray-300 rounded-lg text-gray-700 px-4 py-3 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all"
                      required
                    >
                      <option value="" disabled>Select a surface material</option>
                      <option v-for="material in surfaceMaterials" :key="material.id" :value="material.id">{{ material.name }}</option>
                    </select>
                  </div>
                  
                  <!-- Color Preference -->
                  <div>
                    <label for="colorPreference" class="block text-gray-700 font-medium mb-2">Color Preference</label>
                    <select 
                      id="colorPreference" 
                      v-model="formData.colorPreference"
                      class="w-full bg-white border border-gray-300 rounded-lg text-gray-700 px-4 py-3 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all"
                      required
                    >
                      <option value="" disabled>Select a color preference</option>
                      <option v-for="preference in colorPreferences" :key="preference.id" :value="preference.id">{{ preference.name }}</option>
                    </select>
                  </div>
                  
                  <!-- Submit Button -->
                  <button 
                    type="submit"
                    class="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-6 shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                    :disabled="loading"
                  >
                    <span v-if="loading" class="flex items-center justify-center">
                      <div class="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                      Generating...
                    </span>
                    <span v-else class="flex items-center justify-center">
                      <PaintBucketIcon class="w-5 h-5 mr-2" />
                      Get Recommendations
                    </span>
                  </button>
                </form>
              </div>
            </div>
            
            <!-- Right side - Results -->
            <div class="w-2/3 p-6">
              <div v-if="loading" class="flex flex-col items-center justify-center h-full">
                <div class="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-6"></div>
                <h3 class="text-xl font-medium text-gray-800 mb-2">Generating Recommendations</h3>
                <p class="text-gray-600 text-center max-w-md">We're creating personalized paint color schemes based on your preferences...</p>
              </div>
              
              <div v-else-if="!recommendations.length" class="flex flex-col items-center justify-center h-full">
                <div class="mb-8">
                  <PaintBucketIcon class="h-24 w-24 text-gray-300 mx-auto" />
                </div>
                <h3 class="text-2xl font-medium text-gray-800 mb-4">No Recommendations Yet</h3>
                <p class="text-gray-600 text-center max-w-md mb-8">
                  Fill out the form and click "Get Recommendations" to see personalized paint color schemes for your house.
                </p>
                
                <div class="grid grid-cols-3 gap-6 w-full max-w-2xl">
                  <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 text-center hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
                    <HomeIcon class="h-8 w-8 text-orange-400 mx-auto mb-2" />
                    <h4 class="text-gray-700 font-medium">House Style</h4>
                  </div>
                  
                  <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 text-center hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
                    <PaletteIcon class="h-8 w-8 text-pink-400 mx-auto mb-2" />
                    <h4 class="text-gray-700 font-medium">Color Preference</h4>
                  </div>
                  
                  <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 text-center hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
                    <LayersIcon class="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <h4 class="text-gray-700 font-medium">Surface Material</h4>
                  </div>
                </div>
              </div>
              
              <div v-else>
                <div class="flex justify-between items-center mb-6">
                  <h2 class="text-xl font-bold text-gray-800">Recommended Color Schemes</h2>
                  
                  <div class="flex items-center gap-3">
                    <button 
                      @click="saveRecommendation" 
                      class="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                      :disabled="saving"
                    >
                      <div v-if="saving" class="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <SaveIcon v-else class="h-4 w-4" />
                      <span>Save</span>
                    </button>
                    
                    <button 
                      @click="printRecommendation" 
                      class="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                    >
                      <PrinterIcon class="h-4 w-4" />
                      <span>Print</span>
                    </button>
                  </div>
                </div>
                
                <!-- House Preview -->
                <div class="mb-8 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
                  <h3 class="text-lg font-medium text-gray-800 mb-4">House Preview</h3>
                  
                  <div class="relative h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden">
                    <!-- SVG House Visualization -->
                    <svg viewBox="0 0 1200 700" class="w-full h-full">
                      <!-- Sky background with gradient -->
                      <defs>
                        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#dbeafe" />
                          <stop offset="100%" stopColor="#bfdbfe" />
                        </linearGradient>
                        <radialGradient id="sunGlow" cx="85%" cy="15%" r="20%" fx="85%" fy="15%">
                          <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#FFD54F" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="groundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#dcfce7" />
                          <stop offset="100%" stopColor="#bbf7d0" />
                        </linearGradient>
                      </defs>

                      <rect x="0" y="0" width="1200" height="700" fill="url(#skyGradient)" />

                      <!-- Sun with glow effect -->
                      <circle cx="1020" cy="100" r="140" fill="url(#sunGlow)" />
                      <circle cx="1020" cy="100" r="60" fill="#FFD700" opacity="0.7" />

                      <!-- Clouds -->
                      <g opacity="0.6">
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
                      <polygon points="0,350 150,200 300,320 450,180 600,300 750,220 900,350" fill="#a7f3d0" opacity="0.6" />
                      <polygon points="850,350 950,250 1050,300 1150,220 1200,280 1200,350" fill="#86efac" opacity="0.7" />

                      <!-- Ground with gradient -->
                      <rect x="0" y="450" width="1200" height="250" fill="url(#groundGradient)" />

                      <!-- Rice fields in background (for Filipino context) -->
                      <path d="M0,450 Q300,430 600,450 Q900,470 1200,450 L1200,500 L0,500 Z" fill="#3a5a40" opacity="0.5" />
                      <path d="M0,480 Q300,460 600,480 Q900,500 1200,480 L1200,520 L0,520 Z" fill="#588157" opacity="0.4" />
                      <path d="M0,500 Q300,480 600,500 Q900,520 1200,500 L1200,540 L0,540 Z" fill="#a3b18a" opacity="0.3" />

                      <!-- Driveway -->
                      <path d="M450 450 L550 700 L650 700 L750 450" fill="#e5e7eb" opacity="0.7" />
                      <line x1="500" y1="500" x2="700" y2="500" stroke="#d1d5db" strokeWidth="2" />
                      <line x1="520" y1="550" x2="680" y2="550" stroke="#d1d5db" strokeWidth="2" />
                      <line x1="540" y1="600" x2="660" y2="600" stroke="#d1d5db" strokeWidth="2" />
                      <line x1="550" y1="650" x2="650" y2="650" stroke="#d1d5db" strokeWidth="2" />

                      <!-- Landscape elements -->
                      <!-- Large tree left - Coconut tree for Filipino context -->
                      <rect x="140" y="350" width="20" height="100" fill="#6b4423" rx="2" ry="2" />
                      <ellipse cx="150" cy="320" rx="60" ry="70" fill="#3a5a40" opacity="0.8" />
                      <ellipse cx="150" cy="280" rx="50" ry="60" fill="#3a5a40" opacity="0.6" />
                      <ellipse cx="150" cy="450" rx="80" ry="10" fill="#86efac" opacity="0.5" />
                      <!-- Coconut fruits -->
                      <circle cx="120" cy="330" r="8" fill="#d4a373" />
                      <circle cx="180" cy="340" r="8" fill="#d4a373" />
                      <circle cx="150" cy="310" r="8" fill="#d4a373" />

                      <!-- Large tree right - Banana tree for Filipino context -->
                      <rect x="1040" y="350" width="20" height="100" fill="#6b4423" rx="2" ry="2" />
                      <path d="M1050,350 C1020,300 1000,320 990,290 L1000,285 C1010,315 1030,295 1060,345 Z" fill="#588157" />
                      <path d="M1050,350 C1080,300 1100,320 1110,290 L1100,285 C1090,315 1070,295 1040,345 Z" fill="#588157" />
                      <path d="M1050,330 C1020,280 1000,300 990,270 L1000,265 C1010,295 1030,275 1060,325 Z" fill="#588157" />
                      <path d="M1050,330 C1080,280 1100,300 1110,270 L1100,265 C1090,295 1070,275 1040,325 Z" fill="#588157" />
                      <ellipse cx="1050" cy="450" rx="80" ry="10" fill="#86efac" opacity="0.5" />

                      <!-- Smaller trees - Bamboo for Filipino context -->
                      <rect x="250" y="420" width="5" height="30" fill="#6b4423" rx="1" ry="1" />
                      <rect x="260" y="410" width="5" height="40" fill="#6b4423" rx="1" ry="1" />
                      <rect x="270" y="415" width="5" height="35" fill="#6b4423" rx="1" ry="1" />
                      <ellipse cx="257" cy="400" rx="25" ry="30" fill="#588157" opacity="0.7" />

                      <rect x="950" y="420" width="5" height="30" fill="#6b4423" rx="1" ry="1" />
                      <rect x="960" y="410" width="5" height="40" fill="#6b4423" rx="1" ry="1" />
                      <rect x="970" y="415" width="5" height="35" fill="#6b4423" rx="1" ry="1" />
                      <ellipse cx="957" cy="400" rx="25" ry="30" fill="#588157" opacity="0.7" />

                      <!-- Bushes - Native Filipino plants -->
                      <ellipse cx="350" cy="450" rx="40" ry="20" fill="#3a5a40" opacity="0.6" />
                      <ellipse cx="850" cy="450" rx="40" ry="20" fill="#3a5a40" opacity="0.6" />

                      <!-- Main House Structure - Modern Filipino style -->
                      <!-- Foundation and shadow -->
                      <rect x="350" y="450" width="500" height="10" fill="#9ca3af" rx="2" ry="2" />
                      <ellipse cx="600" cy="460" rx="300" ry="10" fill="#6b7280" opacity="0.3" />

                      <!-- Main house body - Two-story structure with rounded corners -->
                      <!-- First floor - Primary color -->
                      <rect x="350" y="300" width="500" height="150" :fill="activeScheme[0]?.hex || '#FFFFFF'" rx="5" ry="5" />

                      <!-- Second floor - Primary color with slight variation -->
                      <rect x="400" y="200" width="400" height="100" :fill="activeScheme[0]?.hex || '#FFFFFF'" rx="5" ry="5" />

                      <!-- Roof - Roof color from Davies Roofshield -->
                      <polygon points="350,200 600,100 850,200" :fill="activeScheme[3]?.hex || '#FF0000'" />
                      <rect x="350" y="190" width="500" height="10" :fill="activeScheme[3]?.hex || '#FF0000'" rx="2" ry="2" />

                      <!-- Solar panels on roof -->
                      <rect x="550" y="140" width="100" height="40" fill="#1a237e" opacity="0.8" rx="2" ry="2" />
                      <rect x="555" y="145" width="90" height="30" fill="#3949ab" opacity="0.9" rx="2" ry="2" />
                      <line x1="555" y1="155" x2="645" y2="155" stroke="#374151" strokeWidth="1" opacity="0.5" />
                      <line x1="555" y1="165" x2="645" y2="165" stroke="#374151" strokeWidth="1" opacity="0.5" />
                      <line x1="575" y1="145" x2="575" y2="175" stroke="#374151" strokeWidth="1" opacity="0.5" />
                      <line x1="595" y1="145" x2="595" y2="175" stroke="#374151" strokeWidth="1" opacity="0.5" />
                      <line x1="615" y1="145" x2="615" y2="175" stroke="#374151" strokeWidth="1" opacity="0.5" />
                      <line x1="635" y1="145" x2="635" y2="175" stroke="#374151" strokeWidth="1" opacity="0.5" />

                      <!-- Chimney -->
                      <rect x="750" y="120" width="40" height="80" :fill="activeScheme[0]?.hex || '#FFFFFF'" rx="2" ry="2" />
                      <rect x="745" y="120" width="50" height="10" :fill="activeScheme[3]?.hex || '#FF0000'" rx="2" ry="2" />
                      <rect x="750" y="110" width="40" height="10" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />

                      <!-- Windows - First floor - Modern Capiz style -->
                      <!-- Left window group -->
                      <rect x="380" y="330" width="80" height="90" :fill="activeScheme[1]?.hex || '#FF7043'" rx="3" ry="3" />
                      <rect x="385" y="335" width="70" height="80" fill="rgba(240, 255, 255, 0.8)" rx="2" ry="2" />
                      <line x1="420" y1="335" x2="420" y2="415" stroke="#374151" strokeWidth="2" />
                      <line x1="385" y1="375" x2="455" y2="375" stroke="#374151" strokeWidth="2" />
                      <!-- Capiz shell pattern -->
                      <rect x="385" y="335" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="420" y="335" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="385" y="375" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="420" y="375" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />

                      <!-- Middle window group -->
                      <rect x="560" y="330" width="80" height="90" :fill="activeScheme[1]?.hex || '#FF7043'" rx="3" ry="3" />
                      <rect x="565" y="335" width="70" height="80" fill="rgba(240, 255, 255, 0.8)" rx="2" ry="2" />
                      <line x1="600" y1="335" x2="600" y2="415" stroke="#374151" strokeWidth="2" />
                      <line x1="565" y1="375" x2="635" y2="375" stroke="#374151" strokeWidth="2" />
                      <!-- Capiz shell pattern -->
                      <rect x="565" y="335" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="600" y="335" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="565" y="375" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="600" y="375" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />

                      <!-- Right window group -->
                      <rect x="740" y="330" width="80" height="90" :fill="activeScheme[1]?.hex || '#FF7043'" rx="3" ry="3" />
                      <rect x="745" y="335" width="70" height="80" fill="rgba(240, 255, 255, 0.8)" rx="2" ry="2" />
                      <line x1="780" y1="335" x2="780" y2="415" stroke="#374151" strokeWidth="2" />
                      <line x1="745" y1="375" x2="815" y2="375" stroke="#374151" strokeWidth="2" />
                      <!-- Capiz shell pattern -->
                      <rect x="745" y="335" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="780" y="335" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="745" y="375" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="780" y="375" width="35" height="40" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />

                      <!-- Windows - Second floor - Modern Capiz style -->
                      <!-- Left window -->
                      <rect x="430" y="220" width="60" height="70" :fill="activeScheme[1]?.hex || '#FF7043'" rx="3" ry="3" />
                      <rect x="435" y="225" width="50" height="60" fill="rgba(240, 255, 255, 0.8)" rx="2" ry="2" />
                      <line x1="460" y1="225" x2="460" y2="285" stroke="#374151" strokeWidth="2" />
                      <line x1="435" y1="255" x2="485" y2="255" stroke="#374151" strokeWidth="2" />
                      <!-- Capiz shell pattern -->
                      <rect x="435" y="225" width="25" height="30" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="460" y="225" width="25" height="30" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="435" y="255" width="25" height="30" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="460" y="255" width="25" height="30" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />

                      <!-- Right window -->
                      <rect x="710" y="220" width="60" height="70" :fill="activeScheme[1]?.hex || '#FF7043'" rx="3" ry="3" />
                      <rect x="715" y="225" width="50" height="60" fill="rgba(240, 255, 255, 0.8)" rx="2" ry="2" />
                      <line x1="740" y1="225" x2="740" y2="285" stroke="#374151" strokeWidth="2" />
                      <line x1="715" y1="255" x2="765" y2="255" stroke="#374151" strokeWidth="2" />
                      <!-- Capiz shell pattern -->
                      <rect x="715" y="225" width="25" height="30" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="740" y="225" width="25" height="30" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="715" y="255" width="25" height="30" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />
                      <rect x="740" y="255" width="25" height="30" fill="rgba(255, 255, 255, 0.9)" stroke="#374151" strokeWidth="0.5" rx="2" ry="2" />

                      <!-- Center decorative window - Modern circular window -->
                      <circle cx="600" cy="240" r="30" :fill="activeScheme[1]?.hex || '#FF7043'" />
                      <circle cx="600" cy="240" r="25" fill="rgba(240, 255, 255, 0.8)" />
                      <!-- Modern pattern -->
                      <circle cx="600" cy="240" r="15" fill="none" stroke="#374151" strokeWidth="1" />
                      <circle cx="600" cy="240" r="10" fill="none" stroke="#374151" strokeWidth="1" />
                      <line x1="585" y1="240" x2="615" y2="240" stroke="#374151" strokeWidth="1" />
                      <line x1="600" y1="225" x2="600" y2="255" stroke="#374151" strokeWidth="1" />

                      <!-- Front door with steps - Modern style -->
                      <rect x="560" y="380" width="80" height="70" :fill="activeScheme[1]?.hex || '#FF7043'" rx="5" ry="5" />
                      <rect x="570" y="390" width="60" height="60" :fill="activeScheme[2]?.hex || '#8B4513'" rx="3" ry="3" />
                      <!-- Modern door pattern -->
                      <rect x="580" y="400" width="40" height="40" fill="none" stroke="#374151" strokeWidth="1" rx="2" ry="2" />
                      <circle cx="600" cy="420" r="15" fill="none" stroke="#374151" strokeWidth="1" />
                      <circle cx="600" cy="420" r="10" fill="none" stroke="#374151" strokeWidth="1" />
                      <circle cx="615" cy="405" r="5" fill="#FFD700" />

                      <!-- Door steps -->
                      <rect x="560" y="450" width="80" height="5" fill="#9ca3af" rx="2" ry="2" />
                      <rect x="565" y="455" width="70" height="5" fill="#6b7280" rx="2" ry="2" />
                      <rect x="570" y="460" width="60" height="5" fill="#4b5563" rx="2" ry="2" />

                      <!-- Garage - Modern style -->
                      <rect x="350" y="350" width="150" height="100" :fill="activeScheme[0]?.hex || '#FFFFFF'" rx="5" ry="5" />
                      <rect x="360" y="360" width="130" height="80" :fill="activeScheme[1]?.hex || '#FF7043'" rx="3" ry="3" />
                      <!-- Modern garage door pattern -->
                      <line x1="360" y1="380" x2="490" y2="380" stroke="#374151" strokeWidth="1" />
                      <line x1="360" y1="400" x2="490" y2="400" stroke="#374151" strokeWidth="1" />
                      <line x1="360" y1="420" x2="490" y2="420" stroke="#374151" strokeWidth="1" />
                      <line x1="390" y1="360" x2="390" y2="440" stroke="#374151" strokeWidth="1" />
                      <line x1="420" y1="360" x2="420" y2="440" stroke="#374151" strokeWidth="1" />
                      <line x1="450" y1="360" x2="450" y2="440" stroke="#374151" strokeWidth="1" />

                      <!-- Porch and columns - Modern style -->
                      <rect x="640" y="450" width="210" height="10" :fill="activeScheme[1]?.hex || '#FF7043'" rx="2" ry="2" />
                      <rect x="650" y="380" width="15" height="70" :fill="activeScheme[1]?.hex || '#FF7043'" rx="2" ry="2" />
                      <rect x="825" y="380" width="15" height="70" :fill="activeScheme[1]?.hex || '#FF7043'" rx="2" ry="2" />

                      <!-- Modern balcony with glass railing -->
                      <rect x="650" y="300" width="190" height="5" :fill="activeScheme[1]?.hex || '#FF7043'" rx="1" ry="1" />
                      <rect x="650" y="280" width="190" height="5" :fill="activeScheme[1]?.hex || '#FF7043'" rx="1" ry="1" />
                      <rect x="650" y="280" width="5" height="25" :fill="activeScheme[1]?.hex || '#FF7043'" rx="1" ry="1" />
                      <rect x="680" y="280" width="5" height="25" :fill="activeScheme[1]?.hex || '#FF7043'" rx="1" ry="1" />
                      <rect x="710" y="280" width="5" height="25" :fill="activeScheme[1]?.hex || '#FF7043'" rx="1" ry="1" />
                      <rect x="740" y="280" width="5" height="25" :fill="activeScheme[1]?.hex || '#FF7043'" rx="1" ry="1" />
                      <rect x="770" y="280" width="5" height="25" :fill="activeScheme[1]?.hex || '#FF7043'" rx="1" ry="1" />
                      <rect x="800" y="280" width="5" height="25" :fill="activeScheme[1]?.hex || '#FF7043'" rx="1" ry="1" />
                      <rect x="830" y="280" width="5" height="25" :fill="activeScheme[1]?.hex || '#FF7043'" rx="1" ry="1" />
                      <rect x="655" y="285" width="175" height="15" fill="rgba(200, 230, 255, 0.5)" rx="1" ry="1" />

                      <!-- Column details - Modern style -->
                      <rect x="648" y="380" width="19" height="5" :fill="activeScheme[2]?.hex || '#8B4513'" rx="1" ry="1" />
                      <rect x="648" y="445" width="19" height="5" :fill="activeScheme[2]?.hex || '#8B4513'" rx="1" ry="1" />
                      <rect x="648" y="390" width="19" height="5" :fill="activeScheme[2]?.hex || '#8B4513'" rx="1" ry="1" />
                      <rect x="648" y="435" width="19" height="5" :fill="activeScheme[2]?.hex || '#8B4513'" rx="1" ry="1" />
                      <rect x="823" y="380" width="19" height="5" :fill="activeScheme[2]?.hex || '#8B4513'" rx="1" ry="1" />
                      <rect x="823" y="445" width="19" height="5" :fill="activeScheme[2]?.hex || '#8B4513'" rx="1" ry="1" />
                      <rect x="823" y="390" width="19" height="5" :fill="activeScheme[2]?.hex || '#8B4513'" rx="1" ry="1" />
                      <rect x="823" y="435" width="19" height="5" :fill="activeScheme[2]?.hex || '#8B4513'" rx="1" ry="1" />

                      <!-- Decorative elements - Modern Filipino motifs -->
                      <!-- Shutters -->
                      <rect x="360" y="330" width="15" height="90" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />
                      <rect x="465" y="330" width="15" height="90" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />
                      <rect x="540" y="330" width="15" height="90" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />
                      <rect x="645" y="330" width="15" height="90" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />
                      <rect x="720" y="330" width="15" height="90" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />
                      <rect x="825" y="330" width="15" height="90" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />

                      <!-- Second floor shutters -->
                      <rect x="410" y="220" width="15" height="70" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />
                      <rect x="495" y="220" width="15" height="70" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />
                      <rect x="690" y="220" width="15" height="70" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />
                      <rect x="775" y="220" width="15" height="70" :fill="activeScheme[2]?.hex || '#8B4513'" rx="2" ry="2" />

                      <!-- Decorative trim - Modern style -->
                      <rect x="350" y="300" width="500" height="10" :fill="activeScheme[1]?.hex || '#FF7043'" rx="2" ry="2" />
                      <rect x="400" y="200" width="400" height="10" :fill="activeScheme[1]?.hex || '#FF7043'" rx="2" ry="2" />

                      <!-- Modern outdoor lighting -->
                      <circle cx="540" cy="320" r="5" fill="#FFECB3" />
                      <circle cx="660" cy="320" r="5" fill="#FFECB3" />
                      <circle cx="780" cy="320" r="5" fill="#FFECB3" />
                      <circle cx="420" cy="210" r="4" fill="#FFECB3" />
                      <circle cx="780" cy="210" r="4" fill="#FFECB3" />

                      <!-- House number - Modern style -->
                      <rect x="570" y="350" width="60" height="20" :fill="activeScheme[1]?.hex || '#FF7043'" rx="10" ry="10" />
                      <text x="600" y="365" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">123</text>

                      <!-- Pathway lights -->
                      <circle cx="500" cy="500" r="3" fill="#FFECB3" />
                      <circle cx="550" cy="550" r="3" fill="#FFECB3" />
                      <circle cx="600" cy="600" r="3" fill="#FFECB3" />
                      <circle cx="650" cy="550" r="3" fill="#FFECB3" />
                      <circle cx="700" cy="500" r="3" fill="#FFECB3" />

                      <!-- Modern Filipino accent colors -->
                      <rect x="350" y="290" width="500" height="5" fill="#0038a8" rx="2.5" ry="2.5" />
                      <rect x="350" y="295" width="500" height="5" fill="#ce1126" rx="2.5" ry="2.5" />
                    </svg>
                    
                    <div class="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-gray-200">
                      <p class="text-sm text-gray-700">
                        {{ getHouseStyleNameById(formData.houseStyle) }} - This is how your house might look with the recommended color scheme.
                      </p>
                    </div>
                  </div>
                </div>
                
                <!-- Style Description -->
                <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-5 mb-8 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
                  <h3 class="text-lg font-medium text-gray-800 mb-2">{{ getHouseStyleNameById(formData.houseStyle) }}</h3>
                  <p class="text-gray-600">{{ getHouseStyleDescriptionById(formData.houseStyle) }}</p>
                </div>
                
                <!-- Color Schemes -->
                <div class="space-y-6">
                  <div 
                    v-for="(scheme, schemeIndex) in recommendations" 
                    :key="schemeIndex"
                    class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-5 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 cursor-pointer"
                    @click="activeSchemeIndex = schemeIndex"
                    :class="{ 'border-orange-400 ring-2 ring-orange-200': activeSchemeIndex === schemeIndex }"
                  >
                    <div class="flex justify-between items-center mb-4">
                      <h3 class="text-lg font-medium text-gray-800">Color Scheme {{ schemeIndex + 1 }}</h3>
                      <div class="flex items-center gap-2">
                        <span class="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 border border-orange-200">
                          {{ getColorPreferenceNameById(formData.colorPreference) }}
                        </span>
                      </div>
                    </div>
                    
                    <div class="grid grid-cols-4 gap-4 mb-4">
                      <div 
                        v-for="(color, colorIndex) in scheme" 
                        :key="colorIndex"
                        class="bg-gray-50 p-3 rounded-lg border border-gray-200"
                      >
                        <div 
                          class="h-20 rounded-md mb-3 cursor-pointer border border-gray-200"
                          :style="{ backgroundColor: color.hex }"
                          @click="copyColorToClipboard(color.hex)"
                          title="Click to copy color code"
                        ></div>
                        <div class="flex justify-between items-center">
                          <span class="text-gray-800 font-medium">{{ color.name }}</span>
                          <span class="text-gray-600 text-sm">{{ color.hex.toUpperCase() }}</span>
                        </div>
                        <div class="text-gray-500 text-xs mt-1">{{ getColorUsageByIndex(colorIndex) }}</div>
                      </div>
                    </div>
                    
                    <div class="flex justify-between items-center text-sm text-gray-600">
                      <span>{{ getSurfaceMaterialNameById(formData.surfaceMaterial) }}</span>
                      <span>{{ getColorPreferenceNameById(formData.colorPreference) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- History Tab -->
          <div v-if="activeTab === 'history'" class="p-6 h-full overflow-auto">
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 h-full flex flex-col">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800 flex items-center">
                  <HistoryIcon class="h-6 w-6 mr-2 text-orange-500" />
                  Paint Recommendation History
                </h2>
                
                <div class="flex items-center gap-3">
                  <button 
                    @click="clearAllHistory" 
                    class="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                    :disabled="historyLoading || historyItems.length === 0"
                    :class="{ 'opacity-50 cursor-not-allowed': historyLoading || historyItems.length === 0 }"
                  >
                    <TrashIcon class="h-4 w-4" />
                    <span>Clear All</span>
                  </button>
                  
                  <button 
                    @click="activeTab = 'recommender'"
                    class="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                  >
                    <PlusIcon class="h-4 w-4" />
                    <span>New Recommendation</span>
                  </button>
                </div>
              </div>
              
              <!-- Filters -->
              <div class="flex gap-4 mb-6">
                <div class="flex-1">
                  <input 
                    type="text" 
                    v-model="searchQuery" 
                    placeholder="Search recommendations..." 
                    class="w-full bg-white border border-gray-300 rounded-lg text-gray-700 px-4 py-3 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all placeholder-gray-400"
                  />
                </div>
                
                <div class="flex gap-3">
                  <div class="relative">
                    <select 
                      v-model="filterUser"
                      class="bg-white border border-gray-300 rounded-lg text-gray-700 px-4 py-3 pr-10 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all appearance-none"
                    >
                      <option value="">All Users</option>
                      <option value="admin">Admin</option>
                      <option value="staff">Staff</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                      <ChevronDownIcon class="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- History Items Container with proper scrolling -->
              <div class="flex-1 overflow-auto">
                <div v-if="historyLoading" class="flex items-center justify-center py-12">
                  <div class="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                </div>
                
                <div v-else-if="filteredHistory.length === 0" class="py-12 text-center">
                  <h3 class="text-xl font-medium text-gray-800 mb-2">No Recommendations Found</h3>
                  <p class="text-gray-600">Try adjusting your search or filter criteria.</p>
                </div>
                
                <!-- History Items -->
                
<div v-else class="space-y-6 pb-6">
  <div 
    v-for="item in filteredHistory" 
    :key="item.id"
    class="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:border-orange-300 transition-all"
  >
    <div class="flex gap-6">
      <!-- Left side - Info and Colors -->
      <div class="flex-1">
        <div class="flex justify-between items-start mb-3">
          <div>
            <h3 class="text-lg font-medium text-gray-800">{{ getHouseStyleNameById(item.houseStyle) }}</h3>
            <p class="text-sm text-gray-600">{{ formatDate(item.createdAt) }}</p>
            <div class="mt-1">
              <span 
                class="text-xs px-2 py-0.5 rounded-full border" 
                :class="item.userType === 'admin' ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-green-100 text-green-700 border-green-200'"
              >
                <span v-if="item.userType === 'admin'">
                  <ShieldIcon class="h-3 w-3 inline mr-1" />
                  Admin
                </span>
                <span v-else>
                  <UserIcon class="h-3 w-3 inline mr-1" />
                  Staff
                </span>
              </span>
            </div>
          </div>
          
          <button 
            @click="deleteHistoryItem(item.id)"
            class="p-2 rounded-lg hover:bg-red-50 text-gray-600 hover:text-red-600 transition-colors border border-transparent hover:border-red-200"
          >
            <TrashIcon class="w-4 h-4" />
          </button>
        </div>
        
        <!-- Compact Color Grid -->
        <div class="grid grid-cols-4 gap-2 mb-4">
          <div 
            v-for="(color, colorIndex) in item.scheme" 
            :key="colorIndex"
            class="bg-white p-2 rounded-lg border border-gray-200"
          >
            <div 
              class="h-8 rounded-md mb-1 cursor-pointer border border-gray-200"
              :style="{ backgroundColor: color.hex }"
              @click="copyColorToClipboard(color.hex)"
              title="Click to copy color code"
            ></div>
            <div class="text-center">
              <span class="text-gray-800 font-medium text-xs block truncate">{{ color.name }}</span>
              <span class="text-gray-600 text-xs">{{ color.hex.toUpperCase() }}</span>
            </div>
          </div>
        </div>
        
        <div class="flex justify-between items-center text-sm text-gray-600">
          <span>{{ getSurfaceMaterialNameById(item.surfaceMaterial) }}</span>
          <span>{{ getColorPreferenceNameById(item.colorPreference) }}</span>
        </div>
      </div>
      
      <!-- Right side - House Preview -->
      <div class="w-80 flex-shrink-0">
        <div class="bg-white rounded-lg border border-gray-200 p-3">
          <h4 class="text-sm font-medium text-gray-700 mb-2">House Preview</h4>
          <div class="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden">
            <!-- Enhanced SVG House Visualization -->
            <svg viewBox="0 0 800 500" class="w-full h-full">
              <!-- Sky background -->
              <defs>
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e0f2fe" />
                  <stop offset="100%" stopColor="#bae6fd" />
                </linearGradient>
                <radialGradient id="sunGlow" cx="80%" cy="20%" r="15%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect x="0" y="0" width="800" height="500" fill="url(#skyGradient)" />
              
              <!-- Sun -->
              <circle cx="640" cy="80" r="80" fill="url(#sunGlow)" />
              <circle cx="640" cy="80" r="35" fill="#fbbf24" opacity="0.9" />

              <!-- Clouds -->
              <g opacity="0.7">
                <ellipse cx="150" cy="90" rx="40" ry="20" fill="white" />
                <ellipse cx="180" cy="80" rx="35" ry="18" fill="white" />
                <ellipse cx="210" cy="90" rx="40" ry="20" fill="white" />
                
                <ellipse cx="450" cy="110" rx="35" ry="15" fill="white" />
                <ellipse cx="480" cy="100" rx="30" ry="12" fill="white" />
                <ellipse cx="510" cy="110" rx="35" ry="15" fill="white" />
              </g>

              <!-- Ground -->
              <rect x="0" y="320" width="800" height="180" fill="#86efac" />
              
              <!-- Trees and landscape -->
              <!-- Left coconut tree -->
              <rect x="80" y="250" width="12" height="70" fill="#8b4513" />
              <ellipse cx="86" cy="230" rx="35" ry="40" fill="#22c55e" opacity="0.8" />
              <circle cx="70" cy="240" r="5" fill="#d4a373" />
              <circle cx="102" cy="245" r="5" fill="#d4a373" />
              
              <!-- Right tree -->
              <rect x="680" y="260" width="10" height="60" fill="#8b4513" />
              <ellipse cx="685" cy="245" rx="30" ry="35" fill="#22c55e" opacity="0.8" />

              <!-- Main House Structure -->
              <!-- Foundation -->
              <rect x="250" y="320" width="300" height="8" fill="#9ca3af" />
              
              <!-- Main house body -->
              <rect x="250" y="220" width="300" height="100" :fill="item.scheme[0]?.hex || '#FFFFFF'" rx="3" />
              
              <!-- Second floor -->
              <rect x="280" y="160" width="240" height="60" :fill="item.scheme[0]?.hex || '#FFFFFF'" rx="3" />
              
              <!-- Roof -->
              <polygon points="250,160 400,100 550,160" :fill="item.scheme[3]?.hex || '#dc2626'" />
              <rect x="250" y="155" width="300" height="8" :fill="item.scheme[3]?.hex || '#dc2626'" />
              
              <!-- Windows - First floor -->
              <rect x="270" y="240" width="50" height="60" :fill="item.scheme[1]?.hex || '#3b82f6'" rx="2" />
              <rect x="275" y="245" width="40" height="50" fill="rgba(255,255,255,0.9)" rx="1" />
              <line x1="295" y1="245" x2="295" y2="295" stroke="#374151" strokeWidth="1" />
              <line x1="275" y1="270" x2="315" y2="270" stroke="#374151" strokeWidth="1" />
              
              <rect x="340" y="240" width="50" height="60" :fill="item.scheme[1]?.hex || '#3b82f6'" rx="2" />
              <rect x="345" y="245" width="40" height="50" fill="rgba(255,255,255,0.9)" rx="1" />
              <line x1="365" y1="245" x2="365" y2="295" stroke="#374151" strokeWidth="1" />
              <line x1="345" y1="270" x2="385" y2="270" stroke="#374151" strokeWidth="1" />
              
              <rect x="480" y="240" width="50" height="60" :fill="item.scheme[1]?.hex || '#3b82f6'" rx="2" />
              <rect x="485" y="245" width="40" height="50" fill="rgba(255,255,255,0.9)" rx="1" />
              <line x1="505" y1="245" x2="505" y2="295" stroke="#374151" strokeWidth="1" />
              <line x1="485" y1="270" x2="525" y2="270" stroke="#374151" strokeWidth="1" />
              
              <!-- Windows - Second floor -->
              <rect x="300" y="170" width="40" height="40" :fill="item.scheme[1]?.hex || '#3b82f6'" rx="2" />
              <rect x="305" y="175" width="30" height="30" fill="rgba(255,255,255,0.9)" rx="1" />
              <line x1="320" y1="175" x2="320" y2="205" stroke="#374151" strokeWidth="1" />
              <line x1="305" y1="190" x2="335" y2="190" stroke="#374151" strokeWidth="1" />
              
              <rect x="460" y="170" width="40" height="40" :fill="item.scheme[1]?.hex || '#3b82f6'" rx="2" />
              <rect x="465" y="175" width="30" height="30" fill="rgba(255,255,255,0.9)" rx="1" />
              <line x1="480" y1="175" x2="480" y2="205" stroke="#374151" strokeWidth="1" />
              <line x1="465" y1="190" x2="495" y2="190" stroke="#374151" strokeWidth="1" />
              
              <!-- Center decorative window -->
              <circle cx="400" cy="185" r="18" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              <circle cx="400" cy="185" r="15" fill="rgba(255,255,255,0.9)" />
              <circle cx="400" cy="185" r="8" fill="none" stroke="#374151" strokeWidth="1" />
              
              <!-- Front door -->
              <rect x="380" y="270" width="40" height="50" :fill="item.scheme[1]?.hex || '#3b82f6'" rx="3" />
              <rect x="385" y="275" width="30" height="45" :fill="item.scheme[2]?.hex || '#8b4513'" rx="2" />
              <circle cx="410" cy="295" r="2" fill="#fbbf24" />
              
              <!-- Door steps -->
              <rect x="380" y="320" width="40" height="3" fill="#9ca3af" />
              <rect x="382" y="323" width="36" height="3" fill="#6b7280" />
              
              <!-- Decorative elements -->
              <!-- Shutters -->
              <rect x="260" y="240" width="8" height="60" :fill="item.scheme[2]?.hex || '#8b4513'" rx="1" />
              <rect x="322" y="240" width="8" height="60" :fill="item.scheme[2]?.hex || '#8b4513'" rx="1" />
              <rect x="392" y="240" width="8" height="60" :fill="item.scheme[2]?.hex || '#8b4513'" rx="1" />
              <rect x="532" y="240" width="8" height="60" :fill="item.scheme[2]?.hex || '#8b4513'" rx="1" />
              
              <!-- Balcony -->
              <rect x="430" y="220" width="120" height="5" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              <rect x="430" y="200" width="5" height="25" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              <rect x="450" y="200" width="5" height="25" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              <rect x="470" y="200" width="5" height="25" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              <rect x="490" y="200" width="5" height="25" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              <rect x="510" y="200" width="5" height="25" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              <rect x="530" y="200" width="5" height="25" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              <rect x="545" y="200" width="5" height="25" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              
              <!-- Glass railing -->
              <rect x="435" y="205" width="110" height="15" fill="rgba(200,230,255,0.4)" />
              
              <!-- Decorative trim -->
              <rect x="250" y="215" width="300" height="5" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              <rect x="280" y="155" width="240" height="5" :fill="item.scheme[1]?.hex || '#3b82f6'" />
              
              <!-- Outdoor lighting -->
              <circle cx="320" cy="230" r="3" fill="#fbbf24" opacity="0.8" />
              <circle cx="480" cy="230" r="3" fill="#fbbf24" opacity="0.8" />
              
              <!-- House number -->
              <rect x="370" y="250" width="30" height="12" :fill="item.scheme[1]?.hex || '#3b82f6'" rx="6" />
              <text x="385" y="260" fontFamily="Arial" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">123</text>
              
              <!-- Filipino flag accent -->
              <rect x="250" y="210" width="300" height="3" fill="#0038a8" />
              <rect x="250" y="213" width="300" height="2" fill="#ce1126" />
            </svg>
          </div>
          <p class="text-xs text-gray-600 mt-2 text-center">
            {{ getHouseStyleNameById(item.houseStyle) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import {
  LayoutDashboard as LayoutDashboardIcon,
  Home as HomeIcon,
  Palette as PaletteIcon,
  Shield as ShieldIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
  PaintBucket as PaintBucketIcon,
  History as HistoryIcon,
  Save as SaveIcon,
  Printer as PrinterIcon,
  Check as CheckIcon,
  Trash as TrashIcon,
  Plus as PlusIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  Layers as LayersIcon,
  ChevronDown as ChevronDownIcon,
  TrendingUp as TrendingUpIcon,
  Clipboard as ClipboardIcon,
  Settings as SettingsIcon,
  Package as PackageIcon,
  Users as UsersIcon
} from "lucide-vue-next";
import { collection, addDoc, getDocs, deleteDoc, doc, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";

const router = useRouter();

// Toast state
const showToast = ref(false);
const toastMessage = ref("");

// Show success toast
const showSuccessToast = (message) => {
  toastMessage.value = message;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

// Date
const currentDate = ref(
  new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);

// Sidebar state
const mobileSidebarOpen = ref(false);
const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value;
};

// Logout
const handleLogout = () => {
  localStorage.removeItem("vue-router-auth");
  router.push("/login");
};

// Tabs
const activeTab = ref("recommender");

// Form data
const formData = ref({
  houseStyle: "",
  surfaceMaterial: "",
  colorPreference: "",
});

// House Styles - Philippines specific
const houseStyles = [
  { id: "bahay_kubo", name: "Bahay Kubo" },
  { id: "bahay_na_bato", name: "Bahay na Bato" },
  { id: "modern_filipino", name: "Modern Filipino" },
  { id: "contemporary_tropical", name: "Contemporary Tropical" },
  { id: "bungalow", name: "Filipino Bungalow" },
];

// Surface Materials - Philippines specific
const surfaceMaterials = [
  { id: "concrete", name: "Concrete/Cement" },
  { id: "hollow_blocks", name: "Hollow Blocks" },
  { id: "wood", name: "Wood/Kahoy" },
  { id: "metal", name: "Metal/Yero" },
  { id: "stone", name: "Stone/Bato" },
];

// Color Preferences - Philippines specific
const colorPreferences = [
  { id: "warm_earth", name: "Warm Earth Tones" },
  { id: "cool_blues", name: "Cool Blues & Greens" },
  { id: "vibrant_tropical", name: "Vibrant Tropical" },
  { id: "neutral_whites", name: "Neutral Whites & Creams" },
  { id: "bold_colors", name: "Bold Statement Colors" },
];

// Paint Colors from Davies catalog - organized by categories
const paintColors = {
  // Reds & Pinks
  reds_pinks: [
    { name: "Lady Candy", hex: "#E8B5B5", code: "SR-106" },
    { name: "Nifty Pink", hex: "#D67B7B", code: "SR-132" },
    { name: "Valentine Pink", hex: "#E8C5D1", code: "SR-102" },
    { name: "Berry Rouge", hex: "#C85A5A", code: "SR-105" },
    { name: "Mad Magenta", hex: "#B83D6E", code: "SR-107" },
    { name: "Fire Opal", hex: "#D2524A", code: "SR-103" },
    { name: "Mascot Red", hex: "#B22222", code: "SR-110" },
    { name: "Cathay Red", hex: "#DC143C", code: "SR-111" },
    { name: "Happy Red", hex: "#8B1538", code: "SR-109" },
    { name: "Terra Cotta", hex: "#8B4513", code: "SR-101" },
    { name: "Adobe Red", hex: "#5D2E1F", code: "SR-108" }
  ],

  // Violets & Purples
  violets_purples: [
    { name: "Light Wisteria", hex: "#C8A2C8", code: "SR-214" },
    { name: "Purple Passion", hex: "#9966CC", code: "SR-213" },
    { name: "Violet Essence", hex: "#6A5ACD", code: "SR-211" },
    { name: "Imagine Violet", hex: "#663399", code: "SR-216" }
  ],

  // Blacks & Grays
  blacks_grays: [
    { name: "Tinge of Gray", hex: "#D3D3D3", code: "SR-060" },
    { name: "Smoke Gray", hex: "#708090", code: "SR-601" },
    { name: "Gray Delight", hex: "#A9A9A9", code: "SR-609" },
    { name: "Seal Gray", hex: "#2F4F4F", code: "SR-608" },
    { name: "Black", hex: "#000000", code: "SR-660" }
  ],

  // Blues
  blues: [
    { name: "Summer Sea", hex: "#87CEEB", code: "SR-207" },
    { name: "Calm Sky", hex: "#87CEFA", code: "SR-208" },
    { name: "Blue Ocean", hex: "#4169E1", code: "SR-223" },
    { name: "Blue Jeans", hex: "#1E90FF", code: "SR-212" },
    { name: "Azure Blue", hex: "#0080FF", code: "SR-220" },
    { name: "King Cerulean", hex: "#191970", code: "SR-203" },
    { name: "Flirty Lavender", hex: "#9370DB", code: "SR-215" }
  ],

  // Whites & Off-Whites
  whites_offwhites: [
    { name: "Winter Morning", hex: "#F8F8FF", code: "SR-011" },
    { name: "Alabaster", hex: "#F0F8FF", code: "SR-008" },
    { name: "Tulle White", hex: "#FFFAFA", code: "SR-021" },
    { name: "Whitewash", hex: "#F5F5F5", code: "SR-013" },
    { name: "Rose White", hex: "#FFF0F5", code: "SR-001" },
    { name: "Paper Mache", hex: "#FAEBD7", code: "SR-004" },
    { name: "Cornsilk", hex: "#FFF8DC", code: "SR-005" },
    { name: "Milky Way", hex: "#F5F5DC", code: "SR-012" },
    { name: "Lip Tint", hex: "#FFE4E1", code: "SR-015" },
    { name: "Tinkerbelle", hex: "#F0E68C", code: "SR-040" },
    { name: "White", hex: "#FFFFFF", code: "SR-100" }
  ],

  // Oranges & Peaches
  oranges_peaches: [
    { name: "Infinite Peach", hex: "#FFDAB9", code: "SR-513" },
    { name: "Orange Spray", hex: "#FF8C00", code: "SR-506" },
    { name: "Angel Blush", hex: "#FFB6C1", code: "SR-509" },
    { name: "Peach", hex: "#FFCBA4", code: "SR-501" },
    { name: "Zesty Orange", hex: "#FF6347", code: "SR-507" },
    { name: "Sexy Salmon", hex: "#FA8072", code: "SR-508" },
    { name: "Jolly Orange", hex: "#FF4500", code: "SR-504" },
    { name: "Terraza Orange", hex: "#CD5C5C", code: "SR-593" },
    { name: "Flamingo Sweet", hex: "#DC143C", code: "SR-505" }
  ],

  // Yellows & Creams
  yellows_creams: [
    { name: "Linen Cream", hex: "#FAF0E6", code: "SR-083" },
    { name: "Cream Surprise", hex: "#F5DEB3", code: "SR-411" },
    { name: "Ivory", hex: "#FFFFF0", code: "SR-462" },
    { name: "Lotus Peach", hex: "#FFEFD5", code: "SR-429" },
    { name: "Smiley Yellow", hex: "#FFFF99", code: "SR-409" },
    { name: "Calamansi", hex: "#FFD700", code: "SR-433" },
    { name: "Yellow Breeze", hex: "#F0E68C", code: "SR-481" },
    { name: "Sunny Day", hex: "#FFD700", code: "SR-472" },
    { name: "Lovely Days", hex: "#FFFF00", code: "SR-418" },
    { name: "Cheezee Yellow", hex: "#DAA520", code: "SR-413" },
    { name: "Maiz Con Hielo", hex: "#DEB887", code: "SR-408" },
    { name: "Clarion Yellow", hex: "#B8860B", code: "SR-482" }
  ],

  // Greens
  greens: [
    { name: "Burst of Green", hex: "#90EE90", code: "SR-309" },
    { name: "Menthol", hex: "#98FB98", code: "SR-323" },
    { name: "My Chartreuse", hex: "#7FFF00", code: "SR-307" },
    { name: "Matcha", hex: "#9ACD32", code: "SR-318" },
    { name: "Cool Mint", hex: "#8FBC8F", code: "SR-329" },
    { name: "Pale Nile", hex: "#6B8E23", code: "SR-304" },
    { name: "Asparagus", hex: "#87A96B", code: "SR-338" },
    { name: "Green Tree", hex: "#228B22", code: "SR-305" },
    { name: "Green Salad", hex: "#32CD32", code: "SR-310" },
    { name: "Bright Green", hex: "#00FF00", code: "SR-328" },
    { name: "Baguio Green", hex: "#006400", code: "SR-333" },
    { name: "Clear Promise", hex: "#40E0D0", code: "SR-306" },
    { name: "Chill Water", hex: "#00CED1", code: "SR-398" },
    { name: "Aquamarine", hex: "#7FFFD4", code: "SR-355" }
  ],

  // Browns & Beiges
  browns_beiges: [
    { name: "Apricot White", hex: "#F5F5DC", code: "SR-020" },
    { name: "Bone Ivory", hex: "#F5F5DC", code: "SR-425" },
    { name: "Mocha Blanch", hex: "#DEB887", code: "SR-902" },
    { name: "Sand Beige", hex: "#D2B48C", code: "SR-901" },
    { name: "Double Mustard", hex: "#CD853F", code: "SR-414" },
    { name: "Cotton Candy", hex: "#F8BBD9", code: "SR-967" },
    { name: "Big Bacon Beige", hex: "#D2691E", code: "SR-912" },
    { name: "Tasty Tan", hex: "#D2B48C", code: "SR-913" },
    { name: "Mud O' Pie", hex: "#8B7355", code: "SR-914" },
    { name: "Burger Brown", hex: "#8B4513", code: "SR-911" },
    { name: "Choco Brown", hex: "#654321", code: "SR-933" }
  ],

  // Roof Colors (Davies Roofshield)
  roof_colors: [
    { name: "Cathay Red", hex: "#DC143C", code: "DV 50-16" },
    { name: "Spanish Red", hex: "#8B4513", code: "DV 50-13" },
    { name: "Colonial Red", hex: "#A0522D", code: "DV 50-10" },
    { name: "Spanish Red", hex: "#CD853F", code: "DV 50-12" },
    { name: "Russet Brown", hex: "#80461B", code: "DV 50-91" },
    { name: "Orange Clay", hex: "#FF8C00", code: "DV 50-58" },
    { name: "Terra Cotta", hex: "#E2725B", code: "DV 50-15" },
    { name: "Brick Red", hex: "#B22222", code: "DV 50-11" },
    { name: "Ivy Green", hex: "#228B22", code: "DV 50-30" },
    { name: "Baguio Green", hex: "#006400", code: "DV 50-33" },
    { name: "Inca Gold", hex: "#DAA520", code: "DV 50-40" },
    { name: "Sahara Beige", hex: "#F4A460", code: "DV 50-90" },
    { name: "Azure Blue", hex: "#007FFF", code: "DV 50-20" },
    { name: "Casa Blue", hex: "#4169E1", code: "DV 50-28" },
    { name: "Delft Blue", hex: "#1E3A8A", code: "DV 50-22" },
    { name: "Coastlight", hex: "#F5F5DC", code: "DV 50-92" },
    { name: "Stone Slate", hex: "#708090", code: "DV 50-96" },
    { name: "Velvet Gray", hex: "#696969", code: "DV 50-61" },
    { name: "White", hex: "#FFFFFF", code: "DV 50-00" }
  ]
};

// Recommendations
const recommendations = ref([]);
const loading = ref(false);
const saving = ref(false);
const activeSchemeIndex = ref(0);

// Get active scheme
const activeScheme = computed(() => {
  return recommendations.value[activeSchemeIndex.value] || [];
});

// Get house style name by ID
const getHouseStyleNameById = (styleId) => {
  const style = houseStyles.find((s) => s.id === styleId);
  return style ? style.name : "Unknown Style";
};

// Get surface material name by ID
const getSurfaceMaterialNameById = (materialId) => {
  const material = surfaceMaterials.find((m) => m.id === materialId);
  return material ? material.name : "Unknown Material";
};

// Get color preference name by ID
const getColorPreferenceNameById = (preferenceId) => {
  const preference = colorPreferences.find((p) => p.id === preferenceId);
  return preference ? preference.name : "Unknown Preference";
};

// Get house style description by ID
const getHouseStyleDescriptionById = (styleId) => {
  const descriptions = {
    bahay_kubo:
      "The traditional Filipino Bahay Kubo (Nipa Hut) features natural materials and an elevated structure. This color scheme highlights the rustic charm and natural elements of this iconic Filipino dwelling.",
    bahay_na_bato:
      "The Bahay na Bato combines Spanish and Filipino elements with stone and wood construction. This color palette emphasizes the historical elegance and cultural heritage of these ancestral houses.",
    modern_filipino:
      "Modern Filipino architecture blends contemporary design with traditional Filipino elements. This color palette balances modern aesthetics with cultural influences for a uniquely Filipino look.",
    contemporary_tropical:
      "Contemporary Tropical homes are designed for the Philippine climate with open spaces and natural ventilation. These colors enhance the indoor-outdoor living experience typical in tropical settings.",
    bungalow:
      "Filipino Bungalow homes are single-story structures with practical layouts and typically feature a porch or veranda. This color scheme enhances the simple, functional charm of these popular Filipino homes.",
  };

  return (
    descriptions[styleId] || "A personalized color scheme designed to enhance the architectural features of your home."
  );
};

// Get color usage by index
const getColorUsageByIndex = (index) => {
  const usages = ["Main Color", "Accent Color", "Trim Color", "Roof Color"];
  return usages[index] || "Additional Color";
};

const copyColorToClipboard = (colorCode) => {
  navigator.clipboard.writeText(colorCode).then(() => {
    showSuccessToast(`Color code ${colorCode} copied to clipboard!`);
  });
};

// Generate recommendations based on actual Davies paint colors
const getRecommendations = async () => {
  if (!formData.value.houseStyle || !formData.value.surfaceMaterial || !formData.value.colorPreference) {
    showSuccessToast("Please fill out all fields.");
    return;
  }

  loading.value = true;
  recommendations.value = [];

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const schemes = [];

    // Generate 5 color schemes based on color preference and house style
    for (let i = 0; i < 5; i++) {
      const scheme = generateColorScheme(formData.value.colorPreference, formData.value.houseStyle, formData.value.surfaceMaterial, i);
      schemes.push(scheme);
    }

    recommendations.value = schemes;
  } catch (error) {
    console.error("Error generating recommendations:", error);
    showSuccessToast("Failed to generate recommendations. Please try again.");
  } finally {
    loading.value = false;
  }
};

// Generate color scheme based on preferences using actual Davies colors
const generateColorScheme = (colorPreference, houseStyle, surfaceMaterial, schemeIndex) => {
  let mainColors, accentColors, trimColors;
  
  // Primary selection based on color preference
  switch (colorPreference) {
    case "warm_earth":
      mainColors = [...paintColors.browns_beiges, ...paintColors.oranges_peaches];
      accentColors = [...paintColors.yellows_creams, ...paintColors.reds_pinks];
      trimColors = [...paintColors.browns_beiges];
      break;
      
    case "cool_blues":
      mainColors = [...paintColors.blues, ...paintColors.greens];
      accentColors = [...paintColors.whites_offwhites, ...paintColors.blues];
      trimColors = [...paintColors.blacks_grays];
      break;
      
    case "vibrant_tropical":
      mainColors = [...paintColors.oranges_peaches, ...paintColors.yellows_creams];
      accentColors = [...paintColors.reds_pinks, ...paintColors.violets_purples];
      trimColors = [...paintColors.greens];
      break;
      
    case "neutral_whites":
      mainColors = [...paintColors.whites_offwhites];
      accentColors = [...paintColors.browns_beiges, ...paintColors.blacks_grays];
      trimColors = [...paintColors.browns_beiges];
      break;
      
    case "bold_colors":
      mainColors = [...paintColors.reds_pinks, ...paintColors.violets_purples];
      accentColors = [...paintColors.oranges_peaches, ...paintColors.yellows_creams];
      trimColors = [...paintColors.blacks_grays];
      break;
      
    default:
      mainColors = [...paintColors.whites_offwhites];
      accentColors = [...paintColors.browns_beiges];
      trimColors = [...paintColors.blacks_grays];
  }

  // Secondary adjustment based on house style
  if (houseStyle === "bahay_kubo") {
    // Traditional Filipino - prefer natural, earthy colors
    mainColors = [...paintColors.browns_beiges, ...paintColors.yellows_creams];
    accentColors = [...paintColors.greens, ...paintColors.oranges_peaches];
    trimColors = [...paintColors.browns_beiges];
  } else if (houseStyle === "bahay_na_bato") {
    // Spanish colonial - prefer whites with rich accents
    mainColors = [...paintColors.whites_offwhites, ...paintColors.browns_beiges];
    accentColors = [...paintColors.reds_pinks, ...paintColors.browns_beiges];
    trimColors = [...paintColors.browns_beiges];
  } else if (houseStyle === "modern_filipino") {
    // Modern - can use any colors but prefer clean combinations
    // Keep the color preference selection but ensure good contrast
  } else if (houseStyle === "contemporary_tropical") {
    // Tropical - prefer bright, vibrant colors
    if (colorPreference === "neutral_whites") {
      accentColors = [...paintColors.greens, ...paintColors.blues];
    }
  } else if (houseStyle === "bungalow") {
    // Bungalow - prefer warm, welcoming colors
    if (colorPreference === "cool_blues") {
      mainColors = [...paintColors.blues, ...paintColors.whites_offwhites];
    }
  }

  // Tertiary adjustment based on surface material
  if (surfaceMaterial === "wood") {
    // Wood surfaces - prefer natural wood tones for trim
    trimColors = [...paintColors.browns_beiges];
  } else if (surfaceMaterial === "metal") {
    // Metal surfaces - prefer darker, more durable colors for trim
    trimColors = [...paintColors.blacks_grays];
  } else if (surfaceMaterial === "concrete") {
    // Concrete - can handle any color but prefer neutral trims
    if (trimColors.length === 0) {
      trimColors = [...paintColors.blacks_grays, ...paintColors.browns_beiges];
    }
  } else if (surfaceMaterial === "hollow_blocks") {
    // Hollow blocks - similar to concrete
    if (trimColors.length === 0) {
      trimColors = [...paintColors.blacks_grays, ...paintColors.whites_offwhites];
    }
  } else if (surfaceMaterial === "stone") {
    // Stone - prefer earthy, natural colors
    trimColors = [...paintColors.browns_beiges, ...paintColors.blacks_grays];
  }

  // Select specific colors for this scheme
  const scheme = [
    mainColors[schemeIndex % mainColors.length], // Main color
    accentColors[schemeIndex % accentColors.length], // Accent color
    trimColors[schemeIndex % trimColors.length], // Trim color
    paintColors.roof_colors[schemeIndex % paintColors.roof_colors.length] // Roof color (always from roof collection)
  ];

  return scheme;
};

// Save recommendation
const saveRecommendation = async () => {
  if (!recommendations.value.length) {
    showSuccessToast("No recommendations to save");
    return;
  }

  saving.value = true;

  try {
    if (!db) {
      console.error("Firestore is not initialized");
      showSuccessToast("Failed to save: Database not connected");
      saving.value = false;
      return;
    }

    const activeSchemeData = {};
    activeScheme.value.forEach((color, colorIndex) => {
      activeSchemeData[`color_${colorIndex}`] = {
        name: color.name,
        hex: color.hex,
        code: color.code,
        index: colorIndex,
      };
    });

    const recommendationData = {
      houseStyle: formData.value.houseStyle,
      surfaceMaterial: formData.value.surfaceMaterial,
      colorPreference: formData.value.colorPreference,
      activeScheme: activeSchemeData,
      activeSchemeIndex: activeSchemeIndex.value,
      createdAt: serverTimestamp(),
      userType: "admin",
    };

    const paintRecommendationsRef = collection(db, "paintRecommendations");
    const docRef = await addDoc(paintRecommendationsRef, recommendationData);
    console.log("Recommendation saved with ID:", docRef.id);
    showSuccessToast("Recommendation saved successfully");

    if (activeTab.value === "history") {
      fetchAllHistory();
    }
  } catch (error) {
    console.error("Error saving recommendation:", error);
    showSuccessToast(`Failed to save recommendation: ${error.message}`);
  } finally {
    saving.value = false;
  }
};

// Print recommendation
const printRecommendation = () => {
  window.print();
};

// History Tab
const historyItems = ref([]);
const historyLoading = ref(false);
const searchQuery = ref("");
const filterUser = ref("");

// Fetch all history
const fetchAllHistory = async () => {
  historyLoading.value = true;

  try {
    if (db) {
      const recommendationsRef = collection(db, "paintRecommendations");
      const q = query(recommendationsRef, orderBy("createdAt", "desc"));

      const snapshot = await getDocs(q);
      historyItems.value = snapshot.docs.map((doc) => {
        const data = doc.data();

        let scheme = [];
        if (data.activeScheme) {
          scheme = Object.keys(data.activeScheme)
            .sort()
            .map((colorKey) => data.activeScheme[colorKey]);
        } else if (data.schemes) {
          const schemeIndex = data.activeSchemeIndex || 0;
          if (typeof data.schemes === "object" && !Array.isArray(data.schemes)) {
            const schemeKey = `scheme_${schemeIndex}`;
            if (data.schemes[schemeKey]) {
              scheme = Object.keys(data.schemes[schemeKey])
                .sort()
                .map((colorKey) => data.schemes[schemeKey][colorKey]);
            }
          } else if (Array.isArray(data.schemes) && data.schemes.length > 0) {
            scheme = data.schemes[schemeIndex] || [];
          }
        }

        return {
          id: doc.id,
          ...data,
          scheme: scheme,
        };
      });
    } else {
      console.error("Firestore is not initialized");
      historyItems.value = [];
    }
  } catch (error) {
    console.error("Error fetching history:", error);
    historyItems.value = [];
  } finally {
    historyLoading.value = false;
  }
};

// Delete history item
const deleteHistoryItem = async (itemId) => {
  try {
    if (db) {
      await deleteDoc(doc(db, "paintRecommendations", itemId));
      showSuccessToast("Recommendation deleted successfully");
      fetchAllHistory();
    } else {
      console.error("Firestore is not initialized");
      showSuccessToast("Failed to delete: Database not connected");
    }
  } catch (error) {
    console.error("Error deleting recommendation:", error);
    showSuccessToast("Failed to delete recommendation. Please try again.");
  }
};

// Clear all history
const clearAllHistory = async () => {
  if (!historyItems.value.length) return;

  historyLoading.value = true;

  try {
    if (db) {
      const recommendationsRef = collection(db, "paintRecommendations");
      const q = query(recommendationsRef);
      const snapshot = await getDocs(q);

      const deletePromises = snapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      showSuccessToast("All recommendations cleared successfully");
      fetchAllHistory();
    } else {
      console.error("Firestore is not initialized");
      showSuccessToast("Failed to clear history: Database not connected");
    }
  } catch (error) {
    console.error("Error clearing history:", error);
    showSuccessToast("Failed to clear history. Please try again.");
  } finally {
    historyLoading.value = false;
  }
};

// Format date
const formatDate = (timestamp) => {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Filtered history
const filteredHistory = computed(() => {
  let filtered = [...historyItems.value];

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter((item) => {
      const houseStyleName = getHouseStyleNameById(item.houseStyle).toLowerCase();
      const colorPreferenceName = getColorPreferenceNameById(item.colorPreference).toLowerCase();
      return houseStyleName.includes(query) || colorPreferenceName.includes(query);
    });
  }

  if (filterUser.value) {
    filtered = filtered.filter((item) => item.userType === filterUser.value);
  }

  return filtered;
});

// Initialize history
const initializeHistory = async () => {
  if (activeTab.value === "history") {
    await fetchAllHistory();
  }
};

// Watch for tab changes to load history data
watch(activeTab, async (newTab) => {
  if (newTab === "history") {
    await fetchAllHistory();
  }
});

onMounted(async () => {
  if (!db) {
    console.error("Firebase DB is not initialized");
    showSuccessToast("Warning: Database connection not established");
  } else {
    console.log("Firebase DB is initialized correctly");
    await initializeHistory();
  }
});
</script>

<style>
.animate-bounce-in {
  animation: bounce-in 0.5s ease;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(-20px);
  }
  50% {
    opacity: 1;
    transform: scale(1.05) translateY(0);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
}
</style>
