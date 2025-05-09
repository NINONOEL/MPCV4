<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Background Elements with Enhanced Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#051C45] to-[#0A3573] z-0">
      <!-- Animated Gradient Overlay -->
      <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzRCN0REMSIgc3RvcC1vcGFjaXR5PSIwLjIiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzJBNUVBNSIgc3RvcC1vcGFjaXR5PSIwLjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0QjdERDEiIHN0b3Atb3BhY2l0eT0iMC4yIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIvPjwvc3ZnPg==')]"></div>
      
      <!-- Enhanced Decorative Elements -->
      <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2A5EA5] opacity-10 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/3 animate-pulse-slow"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2A5EA5] opacity-10 rounded-full filter blur-3xl transform -translate-x-1/3 translate-y-1/3 animate-pulse-slow-delay"></div>
      
      <!-- Paint Splatter Decorations -->
      <div class="absolute top-[15%] left-[10%] w-24 h-24 bg-[#4B7DD1] opacity-20 rounded-full filter blur-xl animate-float-slow"></div>
      <div class="absolute top-[40%] right-[15%] w-32 h-32 bg-[#4B7DD1] opacity-20 rounded-full filter blur-xl animate-float-slow-delay"></div>
      <div class="absolute bottom-[20%] left-[30%] w-40 h-40 bg-[#7BA6E8] opacity-10 rounded-full filter blur-xl animate-float-slow"></div>

      <!-- Paint Drips -->
      <div class="absolute top-0 left-[20%] w-1 h-40 bg-gradient-to-b from-[#4B7DD1] to-transparent opacity-30 animate-drip"></div>
      <div class="absolute top-0 left-[25%] w-2 h-60 bg-gradient-to-b from-[#7BA6E8] to-transparent opacity-20 animate-drip-delay"></div>
      <div class="absolute top-0 right-[30%] w-1 h-32 bg-gradient-to-b from-[#4B7DD1] to-transparent opacity-30 animate-drip-slow"></div>
      <div class="absolute top-0 right-[35%] w-1.5 h-48 bg-gradient-to-b from-[#7BA6E8] to-transparent opacity-25 animate-drip-slower"></div>
      
      <!-- Particle Effect (Simulated) -->
      <div v-for="n in 20" :key="n" class="absolute rounded-full bg-white" 
           :class="getParticleClass(n)"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Hero Section with Enhanced Animations -->
      <section class="pt-16 pb-12">
        <div class="container mx-auto px-6 flex flex-col items-center">
          <div class="text-center mb-16 max-w-4xl mx-auto relative">
            <!-- Decorative Elements -->
            <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#4B7DD1] opacity-10 rounded-full filter blur-3xl animate-pulse-slow"></div>
            
            <!-- Main Title with Enhanced Animation -->
            <div class="relative">
              <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
                <span class="inline-block relative">
                  Mindoro
                  <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4B7DD1] to-transparent opacity-70"></span>
                </span>
                <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#4B7DD1] to-[#7BA6E8] mx-2 animate-shimmer">Paint</span>
                <span class="inline-block relative">
                  Center
                  <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4B7DD1] to-transparent opacity-70"></span>
                </span>
              </h1>
              
              <p class="text-xl md:text-2xl text-blue-100 leading-relaxed animate-fade-in-delay max-w-3xl mx-auto">
                Revolutionizing Paint Management with AI-Powered Solutions
              </p>
            </div>
          </div>

          <!-- Enhanced Portal Buttons -->
          <div class="flex flex-col md:flex-row justify-center gap-8 mb-20 w-full max-w-2xl mx-auto">
            <!-- Staff Portal Button -->
            <router-link 
              to="/staff"
              class="group relative flex-1 p-[2px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <!-- Animated Border -->
              <div class="absolute inset-0 bg-gradient-to-r from-[#4B7DD1] via-[#7BA6E8] to-[#4B7DD1] animate-gradient-x"></div>
              
              <!-- Card Content -->
              <div class="relative bg-white/95 rounded-lg p-6 h-full flex flex-col">
                <div class="flex flex-col items-center justify-center gap-4 flex-1">
                  <div class="w-16 h-16 bg-gradient-to-br from-[#E6EDF9] to-[#C5D5F2] rounded-full flex items-center justify-center shadow-inner">
                    <UserIcon class="h-8 w-8 text-[#0A3573]" />
                  </div>
                  <span class="text-xl font-bold text-[#0A3573]">Staff Portal</span>
                  <p class="text-[#0A3573]/70 text-sm text-center">Access inventory, paint mixing tools, and sales management</p>
                  
                  <!-- Enhanced Button -->
                  <div class="mt-4 flex items-center justify-center w-full">
                    <div class="group-hover:bg-[#4B7DD1] bg-[#E6EDF9] text-[#4B7DD1] group-hover:text-white px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 font-medium">
                      <span>Enter Portal</span>
                      <ChevronRightIcon class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
            
            <!-- Admin Portal Button -->
            <router-link 
              to="/admin"
              class="group relative flex-1 p-[2px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <!-- Animated Border -->
              <div class="absolute inset-0 bg-gradient-to-r from-[#0A3573] via-[#2A5EA5] to-[#0A3573] animate-gradient-x"></div>
              
              <!-- Card Content -->
              <div class="relative bg-gradient-to-br from-[#0A3573] to-[#051C45] rounded-lg p-6 h-full flex flex-col">
                <div class="flex flex-col items-center justify-center gap-4 flex-1">
                  <div class="w-16 h-16 bg-gradient-to-br from-[#2A5EA5]/30 to-[#051C45]/30 rounded-full flex items-center justify-center border border-white/20 shadow-inner">
                    <ShieldIcon class="h-8 w-8 text-white" />
                  </div>
                  <span class="text-xl font-bold text-white">Admin Portal</span>
                  <p class="text-white/70 text-sm text-center">Manage staff, reports, and system settings</p>
                  
                  <!-- Enhanced Button -->
                  <div class="mt-4 flex items-center justify-center w-full">
                    <div class="group-hover:bg-white bg-white/10 text-white group-hover:text-[#0A3573] px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 font-medium border border-white/20 group-hover:border-transparent">
                      <span>Enter Portal</span>
                      <ChevronRightIcon class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <!-- System Features with Enhanced Cards -->
          <div id="features" class="w-full max-w-5xl mx-auto mb-24">
            <div class="text-center mb-12">
              <div class="inline-block">
                <h2 class="text-3xl font-bold text-white mb-3 relative">
                  System Features
                  <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4B7DD1] to-transparent"></span>
                </h2>
              </div>
              <p class="text-blue-100/80 max-w-2xl mx-auto">Comprehensive tools designed for paint management professionals</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Feature Cards Row 1 with Enhanced Design -->
              <div class="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden relative">
                <!-- Hover Effect Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-[#4B7DD1]/20 to-[#0A3573]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <BoxIcon class="h-5 w-5 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-white">Inventory Management</h3>
                  </div>
                  <p class="text-blue-100 text-sm leading-relaxed">Real-time stock monitoring with automated reordering and low stock alerts</p>
                  
                  <!-- Feature Details -->
                  <ul class="mt-4 space-y-2">
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Barcode scanning integration</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Automated purchase orders</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Stock level predictions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden relative">
                <!-- Hover Effect Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-[#4B7DD1]/20 to-[#0A3573]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <PaintBucketIcon class="h-5 w-5 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-white">Paint Mixing</h3>
                  </div>
                  <p class="text-blue-100 text-sm leading-relaxed">AI-powered color matching with formula management and batch tracking</p>
                  
                  <!-- Feature Details -->
                  <ul class="mt-4 space-y-2">
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Spectrophotometer integration</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Custom formula storage</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Batch consistency analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden relative">
                <!-- Hover Effect Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-[#4B7DD1]/20 to-[#0A3573]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <LineChartIcon class="h-5 w-5 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-white">Sales Analytics</h3>
                  </div>
                  <p class="text-blue-100 text-sm leading-relaxed">Comprehensive reporting with revenue insights and trend forecasting</p>
                  
                  <!-- Feature Details -->
                  <ul class="mt-4 space-y-2">
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Interactive dashboards</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Customizable reports</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Predictive analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Feature Cards Row 2 -->
              <div class="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden relative">
                <!-- Hover Effect Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-[#4B7DD1]/20 to-[#0A3573]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <UsersIcon class="h-5 w-5 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-white">Staff Management</h3>
                  </div>
                  <p class="text-blue-100 text-sm leading-relaxed">Role-based access control with performance tracking and shift scheduling</p>
                  
                  <!-- Feature Details -->
                  <ul class="mt-4 space-y-2">
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Performance metrics</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Shift management</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Training tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden relative">
                <!-- Hover Effect Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-[#4B7DD1]/20 to-[#0A3573]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <FileTextIcon class="h-5 w-5 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-white">Reports</h3>
                  </div>
                  <p class="text-blue-100 text-sm leading-relaxed">Customizable reports with trend analysis and export capabilities</p>
                  
                  <!-- Feature Details -->
                  <ul class="mt-4 space-y-2">
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Multiple export formats</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Scheduled reporting</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Data visualization tools</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden relative">
                <!-- Hover Effect Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-[#4B7DD1]/20 to-[#0A3573]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <HomeIcon class="h-5 w-5 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-white">House Paint Recommender</h3>
                  </div>
                  <p class="text-blue-100 text-sm leading-relaxed">AI-driven color suggestions based on home architecture and environment</p>
                  
                  <!-- Feature Details -->
                  <ul class="mt-4 space-y-2">
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Photo analysis</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Virtual color preview</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-100/70">
                      <CheckCircleIcon class="h-3.5 w-3.5 text-[#4B7DD1]" />
                      <span>Style-based recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- System Settings Card (Premium Design) -->
            <div class="flex justify-center mt-8">
              <div class="group bg-gradient-to-br from-[#0A3573]/60 to-[#051C45]/60 p-[1px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 w-full md:w-1/2 relative">
                <!-- Animated Border -->
                <div class="absolute inset-0 bg-gradient-to-r from-[#4B7DD1]/30 via-[#7BA6E8]/30 to-[#4B7DD1]/30 opacity-0 group-hover:opacity-100 animate-gradient-x transition-opacity duration-500"></div>
                
                <div class="relative bg-[#051C45]/80 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="p-3 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <SettingsIcon class="h-5 w-5 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-white">System Settings</h3>
                  </div>
                  <p class="text-blue-100 text-sm">Flexible configuration with backup management and user preferences</p>
                  
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-white/10 rounded-full text-xs text-blue-100/80 border border-white/5">User Roles</span>
                    <span class="px-2 py-1 bg-white/10 rounded-full text-xs text-blue-100/80 border border-white/5">Backup & Restore</span>
                    <span class="px-2 py-1 bg-white/10 rounded-full text-xs text-blue-100/80 border border-white/5">Notifications</span>
                    <span class="px-2 py-1 bg-white/10 rounded-full text-xs text-blue-100/80 border border-white/5">Appearance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- System Highlights with Premium Design -->
          <div id="highlights" class="w-full max-w-5xl mx-auto mb-24">
            <div class="text-center mb-12">
              <div class="inline-block">
                <h2 class="text-3xl font-bold text-white mb-3 relative">
                  System Highlights
                  <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4B7DD1] to-transparent"></span>
                </h2>
              </div>
              <p class="text-blue-100/80 max-w-2xl mx-auto">Cutting-edge features that set our system apart</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="group flex flex-col items-center text-center p-8 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                <!-- Hover Glow Effect -->
                <div class="absolute inset-0 bg-[#4B7DD1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div class="relative">
                  <div class="w-20 h-20 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#4B7DD1]/30 transition-all duration-500 mx-auto">
                    <ZapIcon class="h-10 w-10 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-3">Fast & Efficient</h3>
                  <div class="w-12 h-1 bg-gradient-to-r from-[#4B7DD1] to-[#7BA6E8] mx-auto mb-4"></div>
                  <p class="text-blue-100 text-sm leading-relaxed">
                    Optimized for speed and performance with real-time updates and intelligent notifications
                  </p>
                  
                  <!-- Performance Metrics -->
                  <div class="mt-6 flex justify-center">
                    <div class="flex items-center gap-4">
                      <div class="text-center">
                        <div class="text-[#7BA6E8] text-xl font-bold">99.9%</div>
                        <div class="text-xs text-blue-100/70">Uptime</div>
                      </div>
                      <div class="h-8 w-px bg-white/10"></div>
                      <div class="text-center">
                        <div class="text-[#7BA6E8] text-xl font-bold">0.3s</div>
                        <div class="text-xs text-blue-100/70">Response</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="group flex flex-col items-center text-center p-8 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                <!-- Hover Glow Effect -->
                <div class="absolute inset-0 bg-[#4B7DD1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div class="relative">
                  <div class="w-20 h-20 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#4B7DD1]/30 transition-all duration-500 mx-auto">
                    <ShieldCheckIcon class="h-10 w-10 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-3">Secure & Reliable</h3>
                  <div class="w-12 h-1 bg-gradient-to-r from-[#4B7DD1] to-[#7BA6E8] mx-auto mb-4"></div>
                  <p class="text-blue-100 text-sm leading-relaxed">
                    Enterprise-grade security with role-based permissions, audit logging, and data encryption
                  </p>
                  
                  <!-- Security Features -->
                  <div class="mt-6 flex justify-center">
                    <div class="flex items-center gap-4">
                      <div class="text-center">
                        <div class="text-[#7BA6E8] text-xl font-bold">256-bit</div>
                        <div class="text-xs text-blue-100/70">Encryption</div>
                      </div>
                      <div class="h-8 w-px bg-white/10"></div>
                      <div class="text-center">
                        <div class="text-[#7BA6E8] text-xl font-bold">2FA</div>
                        <div class="text-xs text-blue-100/70">Authentication</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="group flex flex-col items-center text-center p-8 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                <!-- Hover Glow Effect -->
                <div class="absolute inset-0 bg-[#4B7DD1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div class="relative">
                  <div class="w-20 h-20 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#4B7DD1]/30 transition-all duration-500 mx-auto">
                    <BrainCircuitIcon class="h-10 w-10 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-3">AI-Powered</h3>
                  <div class="w-12 h-1 bg-gradient-to-r from-[#4B7DD1] to-[#7BA6E8] mx-auto mb-4"></div>
                  <p class="text-blue-100 text-sm leading-relaxed">
                    Advanced machine learning algorithms for intelligent recommendations and predictive analytics
                  </p>
                  
                  <!-- AI Features -->
                  <div class="mt-6 flex justify-center">
                    <div class="flex items-center gap-4">
                      <div class="text-center">
                        <div class="text-[#7BA6E8] text-xl font-bold">98%</div>
                        <div class="text-xs text-blue-100/70">Accuracy</div>
                      </div>
                      <div class="h-8 w-px bg-white/10"></div>
                      <div class="text-center">
                        <div class="text-[#7BA6E8] text-xl font-bold">24/7</div>
                        <div class="text-xs text-blue-100/70">Learning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- About System Section with Premium Design -->
          <div id="about" class="w-full max-w-5xl mx-auto mb-24 relative">
            <!-- Background Decoration -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#4B7DD1] opacity-10 rounded-full filter blur-3xl"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4B7DD1] opacity-10 rounded-full filter blur-3xl"></div>
            
            <!-- Content -->
            <div class="relative bg-gradient-to-br from-[#0A3573]/60 to-[#051C45]/80 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-xl">
              <div class="absolute top-0 right-0 w-40 h-40 bg-[#4B7DD1]/10 rounded-full filter blur-3xl"></div>
              
              <div class="relative">
                <div class="text-center mb-10">
                  <div class="inline-block">
                    <h2 class="text-3xl font-bold text-white mb-3 relative">
                      About The System
                      <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4B7DD1] to-transparent"></span>
                    </h2>
                  </div>
                  <p class="text-blue-100/80 max-w-2xl mx-auto">Designed for paint management professionals</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                      <ClipboardListIcon class="h-6 w-6 mr-3 text-[#7BA6E8]" />
                      System Overview
                    </h3>
                    <p class="text-blue-100 mb-4 leading-relaxed">
                      The Mindoro Paint Center Management System is designed specifically for internal operations, providing powerful tools for both administrative and staff roles.
                    </p>
                    <p class="text-blue-100 mb-4 leading-relaxed">
                      With dedicated portals for different user types, the system ensures that each team member has access to exactly what they need to perform their job efficiently.
                    </p>
                    <p class="text-blue-100 leading-relaxed">
                      Built with the latest technologies and AI capabilities, this system represents the next generation of paint management solutions.
                    </p>
                    
                    <!-- System Architecture Diagram -->
                    <div class="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                      <h4 class="text-sm font-medium text-white mb-3">System Architecture</h4>
                      <div class="aspect-[16/9] bg-[#051C45] rounded-lg border border-white/5 flex items-center justify-center p-4">
                        <div class="w-full max-w-xs">
                          <!-- Simple Architecture Diagram -->
                          <div class="flex flex-col items-center">
                            <div class="w-full p-2 bg-[#4B7DD1]/20 border border-[#4B7DD1]/30 rounded text-center text-xs text-white mb-2">
                              User Interface Layer
                            </div>
                            <ArrowDownIcon class="h-4 w-4 text-[#4B7DD1]/50 my-1" />
                            <div class="w-full p-2 bg-[#4B7DD1]/20 border border-[#4B7DD1]/30 rounded text-center text-xs text-white mb-2">
                              Business Logic Layer
                            </div>
                            <ArrowDownIcon class="h-4 w-4 text-[#4B7DD1]/50 my-1" />
                            <div class="w-full p-2 bg-[#4B7DD1]/20 border border-[#4B7DD1]/30 rounded text-center text-xs text-white mb-2">
                              Data Access Layer
                            </div>
                            <ArrowDownIcon class="h-4 w-4 text-[#4B7DD1]/50 my-1" />
                            <div class="w-full p-2 bg-[#4B7DD1]/20 border border-[#4B7DD1]/30 rounded text-center text-xs text-white">
                              Database Layer
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                      <CheckSquareIcon class="h-6 w-6 mr-3 text-[#7BA6E8]" />
                      Key Benefits
                    </h3>
                    
                    <!-- Enhanced Benefits List -->
                    <div class="space-y-5">
                      <div class="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                          <div class="p-1.5 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-full mt-0.5">
                            <CheckIcon class="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <h4 class="text-white font-medium mb-1">Streamlined Inventory Management</h4>
                            <p class="text-blue-100/80 text-sm">Automated alerts and reordering with barcode integration</p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                          <div class="p-1.5 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-full mt-0.5">
                            <CheckIcon class="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <h4 class="text-white font-medium mb-1">Precise Paint Mixing</h4>
                            <p class="text-blue-100/80 text-sm">AI-powered color matching with formula management</p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                          <div class="p-1.5 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-full mt-0.5">
                            <CheckIcon class="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <h4 class="text-white font-medium mb-1">Comprehensive Analytics</h4>
                            <p class="text-blue-100/80 text-sm">Data-driven decisions with predictive insights</p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                          <div class="p-1.5 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-full mt-0.5">
                            <CheckIcon class="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <h4 class="text-white font-medium mb-1">Secure Access Control</h4>
                            <p class="text-blue-100/80 text-sm">Role-based permissions with audit logging</p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                          <div class="p-1.5 bg-gradient-to-br from-[#4B7DD1] to-[#0A3573] rounded-full mt-0.5">
                            <CheckIcon class="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <h4 class="text-white font-medium mb-1">Intuitive Interface</h4>
                            <p class="text-blue-100/80 text-sm">Designed for efficiency and ease of use</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- System Version Info with Premium Design -->
                <div class="mt-12 pt-8 border-t border-white/10">
                  <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-6 md:mb-0">
                      <div class="flex items-center gap-3">
                        <div class="p-2 bg-[#0A3573] rounded-lg border border-[#4B7DD1]/30">
                          <CodeIcon class="h-5 w-5 text-[#7BA6E8]" />
                        </div>
                        <div>
                          <p class="text-white font-medium">Last Updated: May 5, 2025</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-4">
                      <button class="px-4 py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-lg text-white border border-white/10 flex items-center gap-2">
                        <ActivityIcon class="h-4 w-4" />
                        <span>System Status</span>
                      </button>
                      <button class="px-4 py-2 bg-gradient-to-r from-[#4B7DD1] to-[#2A5EA5] hover:from-[#5689E0] hover:to-[#3169B4] transition-colors rounded-lg text-white shadow-lg hover:shadow-[#4B7DD1]/20 flex items-center gap-2">
                        <FileTextIcon class="h-4 w-4" />
                        <span>Release Notes</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Enhanced Footer -->
          <footer class="w-full max-w-5xl mx-auto pt-8 border-t border-white/10 relative">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 bg-[#051C45] border border-white/10 rounded-full">
              <PaletteIcon class="h-5 w-5 text-[#4B7DD1]" />
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 class="text-white font-bold mb-4">Quick Links</h4>
                <ul class="space-y-2">
                  <li><a href="#features" class="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRightIcon class="h-3 w-3" /> Features</a></li>
                  <li><a href="#highlights" class="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRightIcon class="h-3 w-3" /> Highlights</a></li>
                  <li><a href="#about" class="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2"><ChevronRightIcon class="h-3 w-3" /> About</a></li>
                </ul>
              </div>
              
              <div>
                <h4 class="text-white font-bold mb-4">Resources</h4>
                <ul class="space-y-2">
                  <li><a href="#" class="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2"><BookOpenIcon class="h-3 w-3" /> Documentation</a></li>
                  <li><a href="#" class="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2"><HelpCircleIcon class="h-3 w-3" /> Support</a></li>
                  <li><a href="#" class="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2"><RefreshCwIcon class="h-3 w-3" /> Updates</a></li>
                </ul>
              </div>
              
              <div>
                <h4 class="text-white font-bold mb-4">Contact</h4>
                <ul class="space-y-2">
                  <li class="text-blue-100 text-sm flex items-center gap-2"><MailIcon class="h-3 w-3" /> support@mindoropaint.com</li>
                  <li class="text-blue-100 text-sm flex items-center gap-2"><PhoneIcon class="h-3 w-3" /> +63 (123) 456-7890</li>
                  <li class="text-blue-100 text-sm flex items-center gap-2"><MapPinIcon class="h-3 w-3" /> Mindoro, Philippines</li>
                </ul>
              </div>
            </div>
            
            <div class="text-center pt-6 border-t border-white/10">
              <div class="flex justify-center space-x-6 mb-4">
                <button class="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-blue-100 hover:text-white">
                  <HelpCircleIcon class="h-4 w-4" />
                </button>
                <button class="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-blue-100 hover:text-white">
                  <InfoIcon class="h-4 w-4" />
                </button>
                <button class="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-blue-100 hover:text-white">
                  <MailIcon class="h-4 w-4" />
                </button>
              </div>
              <p class="text-blue-100 mb-2">© 2025 Mindoro Paint Center. All rights reserved.</p>
              <p class="text-blue-200/50 text-sm">Internal Management System</p>
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

const particleClasses = ref([])

const generateParticleClasses = () => {
  const sizes = ['h-1 w-1', 'h-1.5 w-1.5', 'h-2 w-2', 'h-0.5 w-0.5']
  const opacities = ['opacity-10', 'opacity-20', 'opacity-30']
  const positions = [
    'top-[10%] left-[10%]', 'top-[20%] left-[20%]', 'top-[30%] left-[70%]', 
    'top-[40%] left-[25%]', 'top-[50%] left-[80%]', 'top-[60%] left-[40%]',
    'top-[70%] left-[30%]', 'top-[80%] left-[60%]', 'top-[90%] left-[50%]',
    'top-[15%] left-[85%]', 'top-[25%] left-[35%]', 'top-[35%] left-[65%]',
    'top-[45%] left-[15%]', 'top-[55%] left-[75%]', 'top-[65%] left-[45%]',
    'top-[75%] left-[25%]', 'top-[85%] left-[55%]', 'top-[95%] left-[85%]',
    'top-[5%] left-[45%]', 'top-[95%] left-[15%]'
  ]
  const animations = ['animate-float-slow', 'animate-float-slow-delay', 'animate-float-slower']

  particleClasses.value = Array.from({ length: 20 }, (_, i) => {
    const position = positions[i % positions.length]
    const size = sizes[i % sizes.length]
    const opacity = opacities[i % opacities.length]
    const animation = animations[i % animations.length]
    return `${position} ${size} ${opacity} ${animation}`
  })
}

generateParticleClasses()

const getParticleClass = (n) => {
  return particleClasses.value[n]
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

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 3s ease-in-out 1s infinite;
}

.animate-float-delay-2 {
  animation: float 3s ease-in-out 2s infinite;
}

.animate-float-slow {
  animation: float 10s ease-in-out infinite;
}

.animate-float-slow-delay {
  animation: float 10s ease-in-out 5s infinite;
}

.animate-float-slower {
  animation: float 15s ease-in-out infinite;
}

.animate-drip {
  animation: drip 10s linear infinite;
}

.animate-drip-delay {
  animation: drip 12s linear 2s infinite;
}

.animate-drip-slow {
  animation: drip 15s linear 1s infinite;
}

.animate-drip-slower {
  animation: drip 18s linear 3s infinite;
}

.animate-shimmer {
  background-size: 200% auto;
  animation: shimmer 2s linear infinite;
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
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
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
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes drip {
  0% {
    height: 0;
    opacity: 0;
  }
  5% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    height: 100vh;
    opacity: 0;
  }
}

@keyframes shimmer {
  to {
    background-position: 200% center;
  }
}
</style>