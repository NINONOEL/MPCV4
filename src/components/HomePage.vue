<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Enhanced Paint-Themed Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-red-100 via-orange-50 via-yellow-50 via-green-50 via-blue-50 via-purple-50 to-pink-100 z-0">
      <!-- Animated Paint Splash Overlay -->
      <div class="absolute inset-0 opacity-30">
        <!-- Colorful Paint Splashes -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-200 via-orange-200 to-yellow-200 opacity-40 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 opacity-40 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse-slow-delay"></div>
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 opacity-30 rounded-full filter blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-cyan-200 via-teal-200 to-emerald-200 opacity-25 rounded-full filter blur-xl animate-float-slow"></div>
        <div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-violet-200 via-purple-200 to-fuchsia-200 opacity-25 rounded-full filter blur-xl animate-float-slow-delay"></div>
      </div>
      
      <!-- Floating Paint Drops -->
      <div class="absolute inset-0">
        <div v-for="n in 12" :key="n" :class="`absolute bg-gradient-to-b ${getDropColor(n)} rounded-full animate-float-slow opacity-20 ${getDropPosition(n)}`"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Hero Section with Paint Theme -->
      <section class="pt-16 pb-12">
        <div class="container mx-auto px-6 flex flex-col items-center">
          <div class="text-center mb-16 max-w-4xl mx-auto relative">
            <!-- Decorative Paint Palette -->
            <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-br from-red-300 via-yellow-300 to-blue-300 opacity-20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            
            <!-- Enhanced Paint-Themed Title (REMOVED UNDERLINES) -->
            <div class="relative">
              <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
                <span class="inline-block">
                  <span class="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Barcelona</span>
                </span>
                <span class="inline-block bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mx-2">Paint</span>
                <span class="inline-block">
                  <span class="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">Center</span>
                </span>
              </h1>
              
              <p class="text-xl md:text-2xl leading-relaxed animate-fade-in-delay max-w-3xl mx-auto">
                <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                  Revolutionizing Paint Management with AI-Powered Solutions
                </span>
              </p>
              
              <!-- Colorful Paint Dots -->
              <div class="flex justify-center items-center gap-3 mt-6">
                <div class="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div class="w-4 h-4 bg-orange-500 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
                <div class="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
                <div class="w-4 h-4 bg-green-500 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>
                <div class="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 0.8s;"></div>
                <div class="w-4 h-4 bg-purple-500 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
                <div class="w-4 h-4 bg-pink-500 rounded-full animate-pulse" style="animation-delay: 1.2s;"></div>
              </div>
            </div>
          </div>

          <!-- Enhanced Paint-Themed Portal Buttons (NOW MATCHING!) -->
          <div class="flex flex-col md:flex-row justify-center gap-8 mb-20 w-full max-w-2xl mx-auto">
            <!-- Staff Portal Button -->
            <router-link 
              to="/staff"
              class="group relative flex-1 p-[3px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <!-- Rainbow Animated Border -->
              <div class="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-pink-400 animate-gradient-x"></div>
              
              <!-- Card Content -->
              <div class="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 rounded-lg p-6 h-full flex flex-col">
                <div class="flex flex-col items-center justify-center gap-4 flex-1">
                  <div class="w-16 h-16 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full flex items-center justify-center shadow-lg border-2 border-orange-300">
                    <UserIcon class="h-8 w-8 text-orange-600" />
                  </div>
                  <span class="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Staff Portal</span>
                  <p class="text-orange-700 text-sm text-center font-medium">Access inventory, paint mixing tools, and sales management</p>
                  
                  <!-- Enhanced Button -->
                  <div class="mt-4 flex items-center justify-center w-full">
                    <div class="group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-500 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-600 group-hover:text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-bold shadow-lg border-2 border-orange-200 group-hover:border-transparent">
                      <span>Enter Portal</span>
                      <ChevronRightIcon class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
            
            <!-- Admin Portal Button (NOW MATCHING STAFF PORTAL STYLE!) -->
            <router-link 
              to="/admin"
              class="group relative flex-1 p-[3px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <!-- Rainbow Animated Border -->
              <div class="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-pink-400 animate-gradient-x"></div>
              
              <!-- Card Content (SAME LIGHT BACKGROUND AS STAFF PORTAL) -->
              <div class="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 rounded-lg p-6 h-full flex flex-col">
                <div class="flex flex-col items-center justify-center gap-4 flex-1">
                  <div class="w-16 h-16 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full flex items-center justify-center shadow-lg border-2 border-orange-300">
                    <ShieldIcon class="h-8 w-8 text-orange-600" />
                  </div>
                  <span class="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Admin Portal</span>
                  <p class="text-orange-700 text-sm text-center font-medium">Manage staff, reports, and system settings</p>
                  
                  <!-- Enhanced Button (SAME STYLE AS STAFF PORTAL) -->
                  <div class="mt-4 flex items-center justify-center w-full">
                    <div class="group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-500 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-600 group-hover:text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-bold shadow-lg border-2 border-orange-200 group-hover:border-transparent">
                      <span>Enter Portal</span>
                      <ChevronRightIcon class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <!-- System Features with Paint Theme -->
          <div id="features" class="w-full max-w-6xl mx-auto mb-24">
            <div class="text-center mb-12">
              <div class="inline-block">
                <h2 class="text-4xl font-bold mb-3 relative">
                  <span class="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    System Features
                  </span>
                  <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
                </h2>
              </div>
              <p class="text-gray-700 max-w-2xl mx-auto font-medium mt-4">Comprehensive tools designed for paint management professionals</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Feature Cards with Paint Colors -->
              <div class="group bg-white/90 backdrop-blur-sm p-6 rounded-xl border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                <!-- Hover Effect Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <BoxIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-red-700">Inventory Management</h3>
                  </div>
                  <p class="text-red-600 text-sm leading-relaxed mb-4">Real-time stock monitoring with automated reordering and low stock alerts</p>
                  
                  <!-- Feature Details -->
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-red-600">
                      <CheckCircleIcon class="h-4 w-4 text-red-500" />
                      <span>Barcode scanning integration</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-red-600">
                      <CheckCircleIcon class="h-4 w-4 text-red-500" />
                      <span>Automated purchase orders</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-red-600">
                      <CheckCircleIcon class="h-4 w-4 text-red-500" />
                      <span>Stock level predictions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/90 backdrop-blur-sm p-6 rounded-xl border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <PaintBucketIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-orange-700">Paint Mixing</h3>
                  </div>
                  <p class="text-orange-600 text-sm leading-relaxed mb-4">AI-powered color matching with formula management and batch tracking</p>
                  
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-orange-600">
                      <CheckCircleIcon class="h-4 w-4 text-orange-500" />
                      <span>Spectrophotometer integration</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-orange-600">
                      <CheckCircleIcon class="h-4 w-4 text-orange-500" />
                      <span>Custom formula storage</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-orange-600">
                      <CheckCircleIcon class="h-4 w-4 text-orange-500" />
                      <span>Batch consistency analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/90 backdrop-blur-sm p-6 rounded-xl border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <LineChartIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-green-700">Sales Analytics</h3>
                  </div>
                  <p class="text-green-600 text-sm leading-relaxed mb-4">Comprehensive reporting with revenue insights and trend forecasting</p>
                  
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-green-600">
                      <CheckCircleIcon class="h-4 w-4 text-green-500" />
                      <span>Interactive dashboards</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-green-600">
                      <CheckCircleIcon class="h-4 w-4 text-green-500" />
                      <span>Customizable reports</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-green-600">
                      <CheckCircleIcon class="h-4 w-4 text-green-500" />
                      <span>Predictive analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Second Row -->
              <div class="group bg-white/90 backdrop-blur-sm p-6 rounded-xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <UsersIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-blue-700">Staff Management</h3>
                  </div>
                  <p class="text-blue-600 text-sm leading-relaxed mb-4">Role-based access control with performance tracking and shift scheduling</p>
                  
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-blue-600">
                      <CheckCircleIcon class="h-4 w-4 text-blue-500" />
                      <span>Performance metrics</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-600">
                      <CheckCircleIcon class="h-4 w-4 text-blue-500" />
                      <span>Shift management</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-600">
                      <CheckCircleIcon class="h-4 w-4 text-blue-500" />
                      <span>Training tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/90 backdrop-blur-sm p-6 rounded-xl border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <FileTextIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-purple-700">Reports</h3>
                  </div>
                  <p class="text-purple-600 text-sm leading-relaxed mb-4">Customizable reports with trend analysis and export capabilities</p>
                  
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-purple-600">
                      <CheckCircleIcon class="h-4 w-4 text-purple-500" />
                      <span>Multiple export formats</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-purple-600">
                      <CheckCircleIcon class="h-4 w-4 text-purple-500" />
                      <span>Scheduled reporting</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-purple-600">
                      <CheckCircleIcon class="h-4 w-4 text-purple-500" />
                      <span>Data visualization tools</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/90 backdrop-blur-sm p-6 rounded-xl border-2 border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <HomeIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-pink-700">House Paint Recommender</h3>
                  </div>
                  <p class="text-pink-600 text-sm leading-relaxed mb-4">AI-driven color suggestions based on home architecture and environment</p>
                  
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-pink-600">
                      <CheckCircleIcon class="h-4 w-4 text-pink-500" />
                      <span>Photo analysis</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-pink-600">
                      <CheckCircleIcon class="h-4 w-4 text-pink-500" />
                      <span>Virtual color preview</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-pink-600">
                      <CheckCircleIcon class="h-4 w-4 text-pink-500" />
                      <span>Style-based recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- System Settings Card (Rainbow Design) -->
            <div class="flex justify-center mt-8">
              <div class="group bg-gradient-to-r from-red-200 via-orange-200 via-yellow-200 via-green-200 via-blue-200 via-purple-200 to-pink-200 p-[2px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 w-full md:w-1/2 relative">
                <div class="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-white/20 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <SettingsIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-white">System Settings</h3>
                  </div>
                  <p class="text-white/90 text-sm mb-4">Flexible configuration with backup management and user preferences</p>
                  
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-white/20 rounded-full text-xs text-white border border-white/30">User Roles</span>
                    <span class="px-3 py-1 bg-white/20 rounded-full text-xs text-white border border-white/30">Backup & Restore</span>
                    <span class="px-3 py-1 bg-white/20 rounded-full text-xs text-white border border-white/30">Notifications</span>
                    <span class="px-3 py-1 bg-white/20 rounded-full text-xs text-white border border-white/30">Appearance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- System Highlights with Rainbow Theme -->
          <div id="highlights" class="w-full max-w-6xl mx-auto mb-24">
            <div class="text-center mb-12">
              <div class="inline-block">
                <h2 class="text-4xl font-bold mb-3 relative">
                  <span class="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    System Highlights
                  </span>
                  <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
                </h2>
              </div>
              <p class="text-gray-700 max-w-2xl mx-auto font-medium mt-4">Cutting-edge features that set our system apart</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="group flex flex-col items-center text-center p-8 bg-gradient-to-b from-red-50 to-orange-50 rounded-xl border-2 border-red-200 hover:-translate-y-3 transition-transform duration-500 relative overflow-hidden shadow-xl">
                <div class="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div class="relative">
                  <div class="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:shadow-red-300 transition-all duration-500 mx-auto">
                    <ZapIcon class="h-10 w-10 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold text-red-700 mb-3">Fast & Efficient</h3>
                  <div class="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-4 rounded-full"></div>
                  <p class="text-red-600 text-sm leading-relaxed">
                    Optimized for speed and performance with real-time updates and intelligent notifications
                  </p>
                  
                  <div class="mt-6 flex justify-center">
                    <div class="flex items-center gap-4">
                      <div class="text-center">
                        <div class="text-orange-600 text-xl font-bold">99.9%</div>
                        <div class="text-xs text-red-600">Uptime</div>
                      </div>
                      <div class="h-8 w-px bg-red-300"></div>
                      <div class="text-center">
                        <div class="text-orange-600 text-xl font-bold">0.3s</div>
                        <div class="text-xs text-red-600">Response</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="group flex flex-col items-center text-center p-8 bg-gradient-to-b from-green-50 to-blue-50 rounded-xl border-2 border-green-200 hover:-translate-y-3 transition-transform duration-500 relative overflow-hidden shadow-xl">
                <div class="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div class="relative">
                  <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:shadow-green-300 transition-all duration-500 mx-auto">
                    <ShieldCheckIcon class="h-10 w-10 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold text-green-700 mb-3">Secure & Reliable</h3>
                  <div class="w-12 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4 rounded-full"></div>
                  <p class="text-green-600 text-sm leading-relaxed">
                    Enterprise-grade security with role-based permissions, audit logging, and data encryption
                  </p>
                  
                  <div class="mt-6 flex justify-center">
                    <div class="flex items-center gap-4">
                      <div class="text-center">
                        <div class="text-blue-600 text-xl font-bold">256-bit</div>
                        <div class="text-xs text-green-600">Encryption</div>
                      </div>
                      <div class="h-8 w-px bg-green-300"></div>
                      <div class="text-center">
                        <div class="text-blue-600 text-xl font-bold">2FA</div>
                        <div class="text-xs text-green-600">Authentication</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="group flex flex-col items-center text-center p-8 bg-gradient-to-b from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 hover:-translate-y-3 transition-transform duration-500 relative overflow-hidden shadow-xl">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div class="relative">
                  <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:shadow-purple-300 transition-all duration-500 mx-auto">
                    <BrainCircuitIcon class="h-10 w-10 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold text-purple-700 mb-3">AI-Powered</h3>
                  <div class="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 rounded-full"></div>
                  <p class="text-purple-600 text-sm leading-relaxed">
                    Advanced machine learning algorithms for intelligent recommendations and predictive analytics
                  </p>
                  
                  <div class="mt-6 flex justify-center">
                    <div class="flex items-center gap-4">
                      <div class="text-center">
                        <div class="text-pink-600 text-xl font-bold">98%</div>
                        <div class="text-xs text-purple-600">Accuracy</div>
                      </div>
                      <div class="h-8 w-px bg-purple-300"></div>
                      <div class="text-center">
                        <div class="text-pink-600 text-xl font-bold">24/7</div>
                        <div class="text-xs text-purple-600">Learning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- About System Section with Paint Theme -->
          <div id="about" class="w-full max-w-6xl mx-auto mb-24 relative">
            <!-- Background Paint Splashes -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-red-200 to-orange-200 opacity-30 rounded-full filter blur-3xl"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 opacity-30 rounded-full filter blur-3xl"></div>
            
            <!-- Content -->
            <div class="relative bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md p-10 rounded-2xl border-2 border-gray-200 shadow-2xl">
              <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-200 to-green-200 opacity-20 rounded-full filter blur-3xl"></div>
              
              <div class="relative">
                <div class="text-center mb-10">
                  <div class="inline-block">
                    <h2 class="text-4xl font-bold mb-3 relative">
                      <span class="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        About The System
                      </span>
                      <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
                    </h2>
                  </div>
                  <p class="text-gray-600 max-w-2xl mx-auto font-medium mt-4">Designed for paint management professionals</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 class="text-2xl font-bold mb-6 flex items-center">
                      <ClipboardListIcon class="h-6 w-6 mr-3 text-blue-500" />
                      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">System Overview</span>
                    </h3>
                    <p class="text-gray-700 mb-4 leading-relaxed">
                      The Mindoro Paint Center Management System is designed specifically for internal operations, providing powerful tools for both administrative and staff roles.
                    </p>
                    <p class="text-gray-700 mb-4 leading-relaxed">
                      With dedicated portals for different user types, the system ensures that each team member has access to exactly what they need to perform their job efficiently.
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                      Built with the latest technologies and AI capabilities, this system represents the next generation of paint management solutions.
                    </p>
                    
                    <!-- System Architecture Diagram -->
                    <div class="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
                      <h4 class="text-sm font-bold text-blue-700 mb-3">System Architecture</h4>
                      <div class="aspect-[16/9] bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg border-2 border-blue-300 flex items-center justify-center p-4">
                        <div class="w-full max-w-xs">
                          <div class="flex flex-col items-center">
                            <div class="w-full p-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white border border-blue-500 rounded text-center text-xs mb-2">
                              User Interface Layer
                            </div>
                            <ArrowDownIcon class="h-4 w-4 text-blue-500 my-1" />
                            <div class="w-full p-2 bg-gradient-to-r from-green-400 to-blue-400 text-white border border-green-500 rounded text-center text-xs mb-2">
                              Business Logic Layer
                            </div>
                            <ArrowDownIcon class="h-4 w-4 text-green-500 my-1" />
                            <div class="w-full p-2 bg-gradient-to-r from-yellow-400 to-green-400 text-white border border-yellow-500 rounded text-center text-xs mb-2">
                              Data Access Layer
                            </div>
                            <ArrowDownIcon class="h-4 w-4 text-yellow-500 my-1" />
                            <div class="w-full p-2 bg-gradient-to-r from-red-400 to-yellow-400 text-white border border-red-500 rounded text-center text-xs">
                              Database Layer
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-2xl font-bold mb-6 flex items-center">
                      <CheckSquareIcon class="h-6 w-6 mr-3 text-green-500" />
                      <span class="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Key Benefits</span>
                    </h3>
                    
                    <!-- Enhanced Benefits List -->
                    <div class="space-y-5">
                      <div class="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border-2 border-red-200 hover:border-red-300 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                          <div class="p-1.5 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mt-0.5">
                            <CheckIcon class="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <h4 class="text-red-700 font-bold mb-1">Streamlined Inventory Management</h4>
                            <p class="text-red-600 text-sm">Automated alerts and reordering with barcode integration</p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border-2 border-orange-200 hover:border-orange-300 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                          <div class="p-1.5 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mt-0.5">
                            <CheckIcon class="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <h4 class="text-orange-700 font-bold mb-1">Precise Paint Mixing</h4>
                            <p class="text-orange-600 text-sm">AI-powered color matching with formula management</p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-2 border-green-200 hover:border-green-300 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                          <div class="p-1.5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mt-0.5">
                            <CheckIcon class="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <h4 class="text-green-700 font-bold mb-1">Comprehensive Analytics</h4>
                            <p class="text-green-600 text-sm">Data-driven decisions with predictive insights</p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-2 border-blue-200 hover:border-blue-300 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                          <div class="p-1.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mt-0.5">
                            <CheckIcon class="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <h4 class="text-blue-700 font-bold mb-1">Secure Access Control</h4>
                            <p class="text-blue-600 text-sm">Role-based permissions with audit logging</p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-2 border-purple-200 hover:border-purple-300 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                          <div class="p-1.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mt-0.5">
                            <CheckIcon class="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <h4 class="text-purple-700 font-bold mb-1">Intuitive Interface</h4>
                            <p class="text-purple-600 text-sm">Designed for efficiency and ease of use</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- System Version Info with Rainbow Design -->
                <div class="mt-12 pt-8 border-t-2 border-gray-200">
                  <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-6 md:mb-0">
                      <div class="flex items-center gap-3">
                        <div class="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg border-2 border-blue-300">
                          <CodeIcon class="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p class="text-gray-700 font-bold">Last Updated: May 5, 2025</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-4">
                      <button class="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-colors rounded-lg text-gray-700 border-2 border-gray-300 flex items-center gap-2 font-medium">
                        <ActivityIcon class="h-4 w-4" />
                        <span>System Status</span>
                      </button>
                      <button class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-colors rounded-lg text-white shadow-lg hover:shadow-xl flex items-center gap-2 font-bold">
                        <FileTextIcon class="h-4 w-4" />
                        <span>Release Notes</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Enhanced Rainbow Footer -->
          <footer class="w-full max-w-6xl mx-auto pt-8 border-t-2 border-gray-200 relative">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-pink-400 border-2 border-white rounded-full shadow-lg">
              <PaletteIcon class="h-5 w-5 text-white" />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 class="text-gray-800 font-bold mb-4">Quick Links</h4>
                <ul class="space-y-2">
                  <li><a href="#features" class="text-gray-600 hover:text-red-500 transition-colors text-sm flex items-center gap-2 font-medium"><ChevronRightIcon class="h-3 w-3" /> Features</a></li>
                  <li><a href="#highlights" class="text-gray-600 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 font-medium"><ChevronRightIcon class="h-3 w-3" /> Highlights</a></li>
                  <li><a href="#about" class="text-gray-600 hover:text-green-500 transition-colors text-sm flex items-center gap-2 font-medium"><ChevronRightIcon class="h-3 w-3" /> About</a></li>
                </ul>
              </div>
              
              <div>
                <h4 class="text-gray-800 font-bold mb-4">Resources</h4>
                <ul class="space-y-2">
                  <li><a href="#" class="text-gray-600 hover:text-blue-500 transition-colors text-sm flex items-center gap-2 font-medium"><BookOpenIcon class="h-3 w-3" /> Documentation</a></li>
                  <li><a href="#" class="text-gray-600 hover:text-purple-500 transition-colors text-sm flex items-center gap-2 font-medium"><HelpCircleIcon class="h-3 w-3" /> Support</a></li>
                  <li><a href="#" class="text-gray-600 hover:text-pink-500 transition-colors text-sm flex items-center gap-2 font-medium"><RefreshCwIcon class="h-3 w-3" /> Updates</a></li>
                </ul>
              </div>
              
              <div>
                <h4 class="text-gray-800 font-bold mb-4">Contact</h4>
                <ul class="space-y-2">
                  <li class="text-gray-600 text-sm flex items-center gap-2 font-medium"><MailIcon class="h-3 w-3 text-red-500" /> support@mindoropaint.com</li>
                  <li class="text-gray-600 text-sm flex items-center gap-2 font-medium"><PhoneIcon class="h-3 w-3 text-green-500" /> +63 (123) 456-7890</li>
                  <li class="text-gray-600 text-sm flex items-center gap-2 font-medium"><MapPinIcon class="h-3 w-3 text-blue-500" /> Mindoro, Philippines</li>
                </ul>
              </div>
            </div>
            
            <div class="text-center pt-6 border-t-2 border-gray-200">
              <div class="flex justify-center space-x-6 mb-4">
                <button class="p-2 rounded-full bg-gradient-to-r from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200 transition-colors border-2 border-red-200 text-red-600 hover:text-red-700">
                  <HelpCircleIcon class="h-4 w-4" />
                </button>
                <button class="p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 transition-colors border-2 border-blue-200 text-blue-600 hover:text-blue-700">
                  <InfoIcon class="h-4 w-4" />
                </button>
                <button class="p-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 transition-colors border-2 border-green-200 text-green-600 hover:text-green-700">
                  <MailIcon class="h-4 w-4" />
                </button>
              </div>
              <p class="text-gray-700 mb-2 font-bold">© 2025 Barcelona Paint Center. All rights reserved.</p>
              <p class="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-sm font-bold">
                Internal Management System - Paint Your Success! 🎨
              </p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  User as UserIcon,
  Shield as ShieldIcon,
  Box as BoxIcon,
  PaintBucket as PaintBucketIcon,
  LineChart as LineChartIcon,
  Users as UsersIcon,
  FileText as FileTextIcon,
  Settings as SettingsIcon,
  Zap as ZapIcon,
  ShieldCheck as ShieldCheckIcon,
  BrainCircuit as BrainCircuitIcon,
  Home as HomeIcon,
  ChevronRight as ChevronRightIcon,
  Palette as PaletteIcon,
  Check as CheckIcon,
  CheckCircle as CheckCircleIcon,
  HelpCircle as HelpCircleIcon,
  Info as InfoIcon,
  Mail as MailIcon,
  Bell as BellIcon,
  ClipboardList as ClipboardListIcon,
  CheckSquare as CheckSquareIcon,
  ArrowDown as ArrowDownIcon,
  Code as CodeIcon,
  Activity as ActivityIcon,
  BookOpen as BookOpenIcon,
  RefreshCw as RefreshCwIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-vue-next'

const router = useRouter()

// Paint drop colors for floating elements
const dropColors = [
  'from-red-300 to-red-400',
  'from-orange-300 to-orange-400', 
  'from-yellow-300 to-yellow-400',
  'from-green-300 to-green-400',
  'from-blue-300 to-blue-400',
  'from-purple-300 to-purple-400',
  'from-pink-300 to-pink-400',
  'from-cyan-300 to-cyan-400',
  'from-emerald-300 to-emerald-400',
  'from-violet-300 to-violet-400',
  'from-rose-300 to-rose-400',
  'from-indigo-300 to-indigo-400'
]

const dropPositions = [
  'top-[10%] left-[10%] w-3 h-3',
  'top-[20%] left-[80%] w-2 h-2',
  'top-[30%] left-[30%] w-4 h-4',
  'top-[40%] left-[70%] w-2 h-2',
  'top-[50%] left-[15%] w-3 h-3',
  'top-[60%] left-[85%] w-2 h-2',
  'top-[70%] left-[40%] w-3 h-3',
  'top-[80%] left-[60%] w-2 h-2',
  'top-[15%] left-[50%] w-2 h-2',
  'top-[35%] left-[90%] w-3 h-3',
  'top-[55%] left-[5%] w-2 h-2',
  'top-[75%] left-[25%] w-3 h-3'
]

const getDropColor = (n) => {
  return dropColors[(n - 1) % dropColors.length]
}

const getDropPosition = (n) => {
  return dropPositions[(n - 1) % dropPositions.length]
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}

.animate-pulse-slow {
  animation: pulse 8s ease-in-out infinite;
}

.animate-pulse-slow-delay {
  animation: pulse 8s ease-in-out 4s infinite;
}

.animate-gradient-x {
  animation: gradientX 3s ease infinite;
  background-size: 200% 200%;
}

.animate-float-slow {
  animation: float 10s ease-in-out infinite;
}

.animate-float-slow-delay {
  animation: float 10s ease-in-out 5s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.05);
  }
}

@keyframes gradientX {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
}
</style>