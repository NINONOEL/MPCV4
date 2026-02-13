<template>
  <!-- biome-ignore lint/correctness/useHookAtTopLevel: False positive - all hooks are at top level -->
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-gray-50 to-slate-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[480px] h-[480px] bg-gradient-to-br from-green-200/25 to-emerald-200/20 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full filter blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
    </div>

    <!-- Added keyboard shortcuts overlay -->
    <!-- Keyboard Shortcuts Help -->
    <div v-if="showKeyboardHelp" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl max-w-sm w-full shadow-xl border border-gray-200/80 overflow-hidden">
        <div class="h-1 w-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
        <div class="p-5">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold text-gray-900 tracking-tight">Keyboard Shortcuts</h3>
            <button @click="showKeyboardHelp = false" class="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <XIcon class="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div class="space-y-3 text-sm">
            <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
              <span class="text-gray-600">Search</span>
              <kbd class="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-medium">Ctrl + K</kbd>
            </div>
            <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
              <span class="text-gray-600">Refresh</span>
              <kbd class="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-medium">Ctrl + R</kbd>
            </div>
            <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
              <span class="text-gray-600">Help</span>
              <kbd class="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-medium">?</kbd>
            </div>
            <div class="flex justify-between items-center py-1.5">
              <span class="text-gray-600">Escape</span>
              <kbd class="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-medium">Esc</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error Boundary -->
    <div v-if="componentError" class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-gray-200/80">
        <div class="text-center">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center">
            <AlertTriangleIcon class="w-7 h-7 text-red-600" />
          </div>
          <h2 class="text-xl font-bold text-gray-900 mb-2">Component Error</h2>
          <p class="text-gray-600 text-sm mb-6">{{ componentError }}</p>
          <button 
            @click="reloadComponent"
            class="px-5 py-2.5 bg-red-500 text-white rounded-xl font-semibold text-sm hover:bg-red-600 transition-colors shadow-sm"
          >
            Reload Component
          </button>
        </div>
      </div>
    </div>

    <div v-else class="relative z-10 flex h-screen">
      <!-- Desktop Sidebar -->
      <aside class="w-64 bg-white/95 backdrop-blur-sm border-r border-gray-200/80 hidden lg:flex lg:flex-col shadow-sm">
        <!-- Logo/Brand -->
        <div class="p-4 xl:p-5 border-b border-gray-100 flex-shrink-0">
          <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight tracking-tight">Barcelona Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-green-500 to-emerald-500 px-2.5 xl:px-3 py-1.5 rounded-lg inline-flex items-center shadow-sm font-medium">
            <ShieldIcon class="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            Admin Portal
          </div>
        </div>

        <!-- Navigation - Scrollable Area -->
        <nav class="flex-1 p-3 xl:p-4 space-y-1 xl:space-2 overflow-y-auto">
          <!-- Added complete navigation menu from admin dashboard -->
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
            :class="{ 'shadow-sm border border-blue-200 transform scale-105': $route.path === '/admin/dashboard' }"
          >
            <LayoutDashboardIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-green-700 bg-green-100 shadow-sm border-l-4 border-green-500"
            :class="{ 'hover:bg-green-100 hover:text-green-800': $route.path !== '/admin/staff' }"
          >
            <UsersIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            :class="{ 'shadow-sm border border-purple-200 transform scale-105': $route.path === '/admin/inventory' }"
          >
            <PackageIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': $route.path === '/admin/house-paint-recommender' }"
          >
            <HomeIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border border-pink-200 transform scale-105': $route.path === '/admin/paint-mixing' }"
          >
            <PaletteIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border border-teal-200 transform scale-105': $route.path === '/admin/sales-analytics' }"
          >
            <TrendingUpIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Sales Analytics</span>
          </router-link>
          
          <router-link to="/admin/visualization" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 shadow-sm border border-indigo-200">
            <BarChart3Icon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Data Visualization</span>
          </router-link>
          
          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700"
            :class="{ 'shadow-sm border border-amber-200 transform scale-105': $route.path === '/admin/settings' }"
          >
            <SettingsIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Settings</span>
          </router-link>

          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-3 xl:p-4 border-t border-gray-100 bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-2 xl:gap-3">
            <div class="w-8 xl:w-10 h-8 xl:h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md flex-shrink-0">
              <UserIcon class="w-4 xl:w-5 h-4 xl:h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs xl:text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail }}</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-1.5 xl:p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0"
              title="Logout"
            >
              <LogOutIcon class="w-4 xl:w-5 h-4 xl:h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Mobile Sidebar Toggle -->
      <div class="fixed top-4 left-4 z-40 lg:hidden">
        <button 
          @click="toggleMobileSidebar"
          class="p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Toggle navigation menu"
        >
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <XIcon v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <!-- Mobile Sidebar Overlay -->
      <div 
        v-if="mobileSidebarOpen" 
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
        @click="toggleMobileSidebar"
      ></div>

      <!-- Mobile Sidebar -->
      <aside 
        v-if="mobileSidebarOpen"
        class="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 z-50 lg:hidden shadow-2xl flex flex-col transform transition-transform duration-300"
      >
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
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5 flex-shrink-0" />
            <span class="text-sm truncate">Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 shadow-sm border border-green-200"
            @click="mobileSidebarOpen = false"
          >
            <UsersIcon class="w-5 h-5 flex-shrink-0" />
            <span class="text-sm truncate">Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5 flex-shrink-0" />
            <span class="text-sm truncate">Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5 flex-shrink-0" />
            <span class="text-sm truncate">Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5 flex-shrink-0" />
            <span class="text-sm truncate">Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            @click="mobileSidebarOpen = false"
          >
            <TrendingUpIcon class="w-5 h-5 flex-shrink-0" />
            <span class="text-sm truncate">Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/visualization" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
            @click="mobileSidebarOpen = false"
          >
            <BarChart3Icon class="w-5 h-5 flex-shrink-0" />
            <span class="text-sm truncate">Data Visualization</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5 flex-shrink-0" />
            <span class="text-sm truncate">Settings</span>
          </router-link>

          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail }}</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0"
              title="Logout"
            >
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto w-full lg:w-auto">
        <!-- Header -->
        <header class="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
          <div class="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="pl-14 sm:pl-16 lg:pl-0">
                <h1 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Staff Management</h1>
                <p class="text-sm text-gray-500 mt-0.5">Manage staff members and roles</p>
              </div>
              <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100/80 text-gray-700 text-sm">
                  <CalendarIcon class="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span class="truncate font-medium">{{ currentDate }}</span>
                </div>
                <div class="hidden sm:block h-8 w-px bg-gray-200"></div>
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-green-50/80 text-gray-800 text-sm border border-green-100">
                  <span class="font-medium truncate">Welcome, Admin</span>
                  <BellIcon class="w-4 h-4 text-green-500 cursor-pointer hover:text-green-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6">
          <!-- Connection Status -->
          <div v-if="connectionStatus">
            <div 
              :class="[ 
                'rounded-2xl border p-4 flex items-center gap-4 shadow-sm',
                connectionStatus.success 
                  ? 'bg-emerald-50/90 border-emerald-200 text-emerald-800' 
                  : 'bg-red-50/90 border-red-200 text-red-800'
              ]"
            >
              <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" :class="connectionStatus.success ? 'bg-emerald-100' : 'bg-red-100'">
                <CheckCircleIcon v-if="connectionStatus.success" class="w-5 h-5 text-emerald-600" />
                <XCircleIcon v-else class="w-5 h-5 text-red-600" />
              </div>
              <div class="min-w-0">
                <h3 class="font-semibold">{{ connectionStatus.title }}</h3>
                <p class="text-sm opacity-90">{{ connectionStatus.message }}</p>
              </div>
            </div>
          </div>

          <!-- New Staff Notification -->
          <div v-if="newStaffNotification">
            <div class="rounded-2xl border border-blue-200 bg-blue-50/90 p-4 flex items-center gap-4 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                <span class="text-white text-sm font-bold">!</span>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-blue-900">New Staff Member Registered!</h3>
                <p class="text-sm text-blue-800">{{ newStaffNotification }}</p>
              </div>
              <button 
                @click="newStaffNotification = null"
                class="flex-shrink-0 p-2 rounded-xl text-blue-600 hover:bg-blue-100 transition-colors"
              >
                <XIcon class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <!-- Total Staff Card -->
            <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transform transition-all duration-200 overflow-hidden relative group h-28 sm:h-32">
              <div class="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-5 h-full flex flex-col">
                <div class="flex justify-between items-start mb-2">
                  <div class="p-2 rounded-xl bg-emerald-100 text-emerald-600 group-hover:scale-105 transition-transform">
                    <UsersIcon class="w-5 h-5" />
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-end">
                  <p class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">Total Staff</p>
                  <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ totalStaff }}</p>
                </div>
              </div>
            </div>

            <!-- Active Staff Card -->
            <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transform transition-all duration-200 overflow-hidden relative group h-28 sm:h-32">
              <div class="bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-5 h-full flex flex-col">
                <div class="flex justify-between items-start mb-2">
                  <div class="p-2 rounded-xl bg-cyan-100 text-cyan-600 group-hover:scale-105 transition-transform">
                    <UserCheckIcon class="w-5 h-5" />
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-end">
                  <p class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">Active Staff</p>
                  <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ activeStaff }}</p>
                </div>
              </div>
            </div>

            <!-- Regular Staff Card -->
            <div class="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transform transition-all duration-200 overflow-hidden relative group h-28 sm:h-32 sm:col-span-2 lg:col-span-1">
              <div class="bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 h-1.5 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-5 h-full flex flex-col">
                <div class="flex justify-between items-start mb-2">
                  <div class="p-2 rounded-xl bg-purple-100 text-purple-600 group-hover:scale-105 transition-transform">
                    <UserIcon class="w-5 h-5" />
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-end">
                  <p class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">Regular Staff</p>
                  <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ regularStaffCount }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- No Staff Debug -->
          <div v-if="staffMembers.length === 0 && !loading" class="rounded-2xl border border-amber-200 bg-amber-50/90 p-5 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <AlertTriangleIcon class="w-5 h-5 text-amber-600" />
              </div>
              <h3 class="font-semibold text-amber-800">No Staff Members Found</h3>
            </div>
            <p class="text-amber-700 text-sm mb-4">
              Staff members registered through the Staff Portal should appear here with real-time updates.
            </p>
            <div class="flex flex-col sm:flex-row gap-2">
              <button 
                @click="testConnection" 
                class="px-4 py-2.5 bg-amber-100 hover:bg-amber-200 rounded-xl text-amber-800 font-medium text-sm transition-colors border border-amber-200"
              >
                1. Test Firebase/Firestore connection
              </button>
              <button 
                @click="fetchStaffMembers" 
                class="px-4 py-2.5 bg-amber-100 hover:bg-amber-200 rounded-xl text-amber-800 font-medium text-sm transition-colors border border-amber-200"
              >
                2. Manual refresh
              </button>
            </div>
          </div>

          <!-- Search and Filter Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-5">
            <div class="flex flex-col lg:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search by name, email, or position..."
                    ref="searchInput"
                    class="w-full pl-11 pr-10 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50/50 text-gray-900 placeholder-gray-400 text-sm"
                  />
                  <button 
                    v-if="searchQuery" 
                    @click="searchQuery = ''"
                    class="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
                  >
                    <XIcon class="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-3">
                <select 
                  v-model="filterStatus"
                  class="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-900 text-sm font-medium min-w-[120px]"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <button 
                  @click="fetchStaffMembers"
                  class="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-green-500/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 min-w-[100px]"
                  :disabled="loading"
                >
                  <RefreshCwIcon class="w-4 h-4" :class="{ 'animate-spin': loading }" />
                  {{ loading ? 'Loading...' : 'Refresh' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Staff Table -->
          <div class="bg-white rounded-2xl shadow-md border border-gray-200/90 overflow-hidden">
            <!-- Mobile View -->
            <div class="block lg:hidden p-4 sm:p-5 space-y-4">
              <div v-if="loading" class="p-10 text-center">
                <div class="w-12 h-12 mx-auto mb-4 rounded-2xl bg-green-100 flex items-center justify-center">
                  <RefreshCwIcon class="w-6 h-6 text-green-600 animate-spin" />
                </div>
                <p class="text-gray-600 font-medium">Loading staff...</p>
              </div>
              <div v-else-if="paginatedStaff.length === 0" class="p-10 text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <UsersIcon class="w-8 h-8 text-gray-400" />
                </div>
                <p class="text-lg font-semibold text-gray-900 mb-1">No staff members found</p>
                <p class="text-sm text-gray-500">Try adjusting your search or filters</p>
              </div>
              <div v-else class="space-y-4">
                <div v-for="staff in paginatedStaff" :key="staff.id" class="bg-gray-50 rounded-xl p-4 border border-gray-200/80 hover:shadow-md transition-all">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center overflow-hidden shadow-md flex-shrink-0 ring-2 ring-white">
                      <img 
                        v-if="staff.photoURL" 
                        :src="staff.photoURL" 
                        :alt="`${getFullName(staff)} profile`" 
                        class="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <UserIcon v-else class="w-6 h-6 text-white" />
                    </div>
                    
                    <div class="flex-1 min-w-0">
                      <div class="flex items-start justify-between mb-2">
                        <div>
                          <p class="font-semibold text-gray-900 truncate">{{ getFullName(staff) }}</p>
                          <p class="text-sm text-gray-600 truncate">{{ staff.email }}</p>
                          <p class="text-xs text-gray-500 mt-1">{{ staff.position || 'Staff Member' }}</p>
                        </div>
                        <div class="flex gap-1.5 flex-shrink-0">
                          <button 
                            @click="editStaff(staff)"
                            class="p-2.5 hover:bg-blue-100 rounded-xl text-blue-600 transition-colors"
                            :title="`Edit ${getFullName(staff)}`"
                          >
                            <EditIcon class="w-4 h-4" />
                          </button>
                          <button 
                            @click="confirmDelete(staff)"
                            class="p-2.5 hover:bg-red-100 rounded-xl text-red-600 transition-colors"
                            :title="`Delete ${getFullName(staff)}`"
                          >
                            <Trash2Icon class="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-200/60">
                        <span 
                          class="px-2.5 py-1 rounded-lg text-xs font-medium"
                          :class="getRoleBadgeClass(staff.role)"
                        >
                          {{ formatRole(staff.role) }}
                        </span>
                        <span 
                          class="px-2.5 py-1 rounded-lg text-xs font-medium"
                          :class="getStatusBadgeClass(staff.status || 'active')"
                        >
                          {{ formatStatus(staff.status || 'active') }}
                        </span>
                        <span class="text-xs text-gray-500">{{ formatDate(staff.createdAt) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Desktop View -->
            <div class="hidden lg:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-gradient-to-r from-gray-50 to-slate-50 border-b border-gray-200">
                    <th class="pl-5 py-4 text-left w-10">
                      <input 
                        type="checkbox" 
                        :checked="isAllSelected" 
                        @change="toggleSelectAll" 
                        class="form-checkbox h-4 w-4 text-green-600 rounded focus:ring-green-500"
                      />
                    </th>
                    <th class="text-left px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Staff Member</th>
                    <th class="text-left px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Position</th>
                    <th class="text-left px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                    <th class="text-left px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th class="text-left px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Created</th>
                    <th class="text-right px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-if="loading" class="bg-white">
                    <td colspan="7" class="px-5 py-12 text-center">
                      <RefreshCwIcon class="w-6 h-6 text-green-500 animate-spin mx-auto" />
                    </td>
                  </tr>
                  <tr v-else-if="paginatedStaff.length === 0" class="bg-white">
                    <td colspan="7" class="px-5 py-12 text-center">
                      <div class="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gray-100 flex items-center justify-center">
                        <UsersIcon class="w-7 h-7 text-gray-400" />
                      </div>
                      <p class="font-medium text-gray-900">No staff members found</p>
                      <p class="text-sm text-gray-500 mt-1">Try adjusting your search or filters</p>
                    </td>
                  </tr>
                  <tr 
                    v-for="staff in paginatedStaff" 
                    :key="staff.id" 
                    class="bg-white hover:bg-green-50/30 transition-colors"
                  >
                    <td class="pl-5 py-4 w-10 align-middle">
                      <input 
                        type="checkbox" 
                        :checked="selectedStaffIds.includes(staff.id)" 
                        @change="toggleStaffSelection(staff.id)" 
                        class="form-checkbox h-4 w-4 text-green-600 rounded focus:ring-green-500"
                      />
                    </td>
                    <td class="px-5 py-4 align-middle">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center overflow-hidden ring-1 ring-gray-200/80 flex-shrink-0">
                          <img 
                            v-if="staff.photoURL" 
                            :src="staff.photoURL" 
                            :alt="`${getFullName(staff)} profile`" 
                            class="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <UserIcon v-else class="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p class="font-semibold text-gray-900">{{ getFullName(staff) }}</p>
                          <p class="text-sm text-gray-500">{{ staff.email }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-4 align-middle">
                      <span class="text-gray-900 font-medium whitespace-nowrap">{{ staff.position || 'Staff Member' }}</span>
                    </td>
                    <td class="px-5 py-4 align-middle">
                      <span 
                        class="inline-flex px-2.5 py-1 rounded-lg text-xs font-medium"
                        :class="getRoleBadgeClass(staff.role)"
                      >
                        {{ formatRole(staff.role) }}
                      </span>
                    </td>
                    <td class="px-5 py-4 align-middle">
                      <span 
                        class="inline-flex px-2.5 py-1 rounded-lg text-xs font-medium"
                        :class="getStatusBadgeClass(staff.status || 'active')"
                      >
                        {{ formatStatus(staff.status || 'active') }}
                      </span>
                    </td>
                    <td class="px-5 py-4 text-gray-600 text-sm font-medium whitespace-nowrap align-middle">
                      {{ formatDate(staff.createdAt) }}
                    </td>
                    <td class="px-5 py-4 align-middle">
                      <div class="flex items-center justify-end gap-1.5">
                        <button 
                          @click="editStaff(staff)"
                          class="p-2.5 hover:bg-blue-100 rounded-xl text-blue-600 transition-colors"
                          :title="`Edit ${getFullName(staff)}`"
                        >
                          <EditIcon class="w-4 h-4" />
                        </button>
                        <button 
                          @click="confirmDelete(staff)"
                          class="p-2.5 hover:bg-red-100 rounded-xl text-red-600 transition-colors"
                          :title="`Delete ${getFullName(staff)}`"
                        >
                          <Trash2Icon class="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Bulk Actions Bar -->
            <div v-if="selectedStaffIds.length > 0" class="bg-green-50 border-t border-green-200 px-5 py-3 flex flex-wrap justify-between items-center gap-3">
              <div class="flex items-center gap-3 flex-wrap">
                <span class="text-sm font-semibold text-green-800">
                  {{ selectedStaffIds.length }} selected
                </span>
                <button @click="bulkUpdateStatus('active')" class="px-3 py-1.5 rounded-lg bg-green-200/80 text-green-800 font-medium text-sm hover:bg-green-200 transition-colors">Activate</button>
                <button @click="bulkUpdateStatus('inactive')" class="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-300 transition-colors">Deactivate</button>
              </div>
              <button @click="selectedStaffIds = []" class="text-sm font-medium text-green-700 hover:text-green-800 hover:underline">Clear Selection</button>
            </div>

            <!-- Pagination -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border-t border-gray-200 bg-gray-50/50">
              <div class="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                <select 
                  v-model="perPage"
                  class="px-3 py-2 rounded-xl border border-gray-200 text-sm font-medium bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-sm text-gray-600 font-medium">
                  {{ paginationStart }} – {{ paginationEnd }} of {{ filteredStaff.length }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 transition-colors"
                  title="Previous page"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm font-medium text-gray-700 min-w-[80px] text-center">Page {{ currentPage }} of {{ totalPages }}</span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage >= totalPages"
                  class="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 transition-colors"
                  title="Next page"
                >
                  <ChevronRightIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- Edit Staff Modal -->
  <div v-if="showAddModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200/80">
      <div class="flex-shrink-0 px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-bold text-gray-900 tracking-tight">
            Edit Staff Member
          </h3>
          <button 
            @click="closeModal"
            class="p-2 rounded-xl hover:bg-white/80 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <form @submit.prevent="handleSubmit" class="flex-1 overflow-y-auto p-6">
        <div class="space-y-5">
          <!-- Profile Photo -->
          <div class="flex flex-col items-center gap-4 rounded-xl bg-gray-50 p-4 border border-gray-200/80">
            <div 
              class="relative group"
              @dragover.prevent="isDragOver = true"
              @dragleave.prevent="isDragOver = false"
              @drop.prevent="handlePhotoDrop"
            >
              <div 
                class="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center overflow-hidden shadow-md transition-all duration-200 ring-2 ring-white"
                :class="{ 'scale-105 ring-4 ring-green-200': isDragOver }"
              >
                <img v-if="staffForm.photoURL" :src="staffForm.photoURL" alt="Profile" class="w-full h-full object-cover" />
                <UserIcon v-else class="w-12 h-12 text-white" />
              </div>
              <div 
                v-if="isDragOver"
                class="absolute inset-0 rounded-2xl bg-green-500/20 flex items-center justify-center"
              >
                <span class="text-green-700 text-xs font-medium">Drop photo</span>
              </div>
              <input 
                type="file" 
                ref="photoInput" 
                accept="image/*" 
                class="hidden" 
                @change="handleStaffPhotoUpload"
              />
            </div>
            <div class="flex gap-2 flex-wrap justify-center">
              <button 
                type="button"
                @click="triggerPhotoInput" 
                class="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Change Photo
              </button>
              <button 
                v-if="staffForm.photoURL" 
                type="button"
                @click="removeStaffPhoto" 
                class="px-4 py-2 border border-red-200 bg-red-50 text-red-600 rounded-xl font-medium text-sm hover:bg-red-100 transition-colors"
              >
                Remove
              </button>
            </div>
            <p class="text-xs text-gray-500 text-center">Drag & drop or click to browse</p>
          </div>

          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
            <input 
              type="text"
              v-model="staffForm.name"
              required
              class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm"
              placeholder="Enter full name"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email"
              v-model="staffForm.email"
              required
              class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm"
              placeholder="Enter email address"
            />
          </div>

          <!-- Role -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select 
              v-model="staffForm.role"
              required
              class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-900 text-sm shadow-sm"
            >
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <!-- Status -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              v-model="staffForm.status"
              required
              class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-900 text-sm shadow-sm"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <!-- Position -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <input 
              type="text"
              v-model="staffForm.position"
              class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm"
              placeholder="Enter position"
            />
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200 bg-white">
          <button 
            type="button"
            @click="closeModal"
            class="px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg shadow-green-500/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60"
            :disabled="loading"
          >
            <span v-if="loading" class="flex items-center gap-2">
              <LoaderIcon class="w-5 h-5 animate-spin" />
              Saving...
            </span>
            <span v-else>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div v-if="showDeleteModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl w-full max-w-md shadow-xl border border-gray-200/80 overflow-hidden">
      <div class="h-1.5 w-full bg-gradient-to-r from-red-400 to-rose-500"></div>
      <div class="p-6">
        <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center">
          <AlertTriangleIcon class="w-7 h-7 text-red-600" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 text-center mb-2">Delete Staff Member</h3>
        <p class="text-gray-600 text-center mb-6 text-sm">
          Are you sure you want to delete {{ selectedStaff?.name || getFullName(selectedStaff) }}? This action cannot be undone.
        </p>
        <div class="flex justify-center gap-3">
          <button 
            @click="showDeleteModal = false"
            class="px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="deleteStaff"
            class="px-5 py-2.5 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 shadow-sm hover:shadow-md transition-all disabled:opacity-60"
            :disabled="loading"
          >
            <span v-if="loading" class="flex items-center gap-2">
              <LoaderIcon class="w-5 h-5 animate-spin" />
              Deleting...
            </span>
            <span v-else>Delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, onErrorCaptured, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { collection, getDocs, updateDoc, deleteDoc, doc, onSnapshot, getDoc } from 'firebase/firestore'
import { db, auth } from '@/config/firebase.js'
import { 
  LayoutDashboard as LayoutDashboardIcon,
  Users as UsersIcon,
  Package as PackageIcon,
  Home as HomeIcon,
  Palette as PaletteIcon,
  TrendingUp as TrendingUpIcon,
  Clipboard as ClipboardIcon,
  Settings as SettingsIcon,
  Shield as ShieldIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
  UserCheck as UserCheckIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  AlertTriangle as AlertTriangleIcon,
  Loader as LoaderIcon,
  RefreshCw as RefreshCwIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  BarChart3 as BarChart3Icon,
} from 'lucide-vue-next'

// State
const loading = ref(false)
const showAddModal = ref(false)
const showDeleteModal = ref(false)
const editingStaff = ref(null)
const selectedStaff = ref(null)
const searchQuery = ref('')
const filterStatus = ref('')
const currentPage = ref(1)
const perPage = ref(10)
const mobileSidebarOpen = ref(false)
const photoInput = ref(null)
const searchInput = ref(null)
const connectionStatus = ref(null)
const componentError = ref(null)
const newStaffNotification = ref(null)
const lastUpdated = ref(new Date().toLocaleTimeString())

// New enhanced features
const selectedStaffIds = ref([])
const sortBy = ref('name')
const sortOrder = ref('asc')
const showKeyboardHelp = ref(false)
const isDragOver = ref(false)

const router = useRouter()

// Staff data
const staffMembers = ref([])

// Real-time listener
let unsubscribeStaffListener = null

// Debounced search
const debouncedSearchQuery = ref('')
let searchTimeout = null

watch(searchQuery, (newValue) => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    debouncedSearchQuery.value = newValue
  }, 300)
})

// Keyboard shortcuts
const handleKeydown = (e) => {
  // Ctrl+K for search focus
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault()
    searchInput.value?.focus()
  }
  // Ctrl+R for refresh
  else if (e.ctrlKey && e.key === 'r') {
    e.preventDefault()
    fetchStaffMembers()
  }
  // ? for help
  else if (e.key === '?' && !e.ctrlKey && !e.altKey) {
    e.preventDefault()
    showKeyboardHelp.value = true
  }
  // Escape to close modals or clear search
  else if (e.key === 'Escape') {
    if (showKeyboardHelp.value) {
      showKeyboardHelp.value = false
    } else if (showAddModal.value) {
      closeModal()
    } else if (showDeleteModal.value) {
      showDeleteModal.value = false
    } else if (searchQuery.value) {
      searchQuery.value = ''
    }
  }
}

// Form state
const staffForm = ref({
  name: '',
  email: '',
  role: 'staff',
  status: 'active',
  photoURL: null,
  position: ''
})

// Current date computed property
const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

// Error handling
onErrorCaptured((error) => {
  console.error('❌ Component error:', error)
  componentError.value = error.message
  return false
})

const reloadComponent = () => {
  componentError.value = null
  window.location.reload()
}

// Normalize Firestore Timestamp or date to ISO string for consistent handling
const normalizeCreatedAt = (val) => {
  if (val == null) return null
  if (typeof val.toDate === 'function') return val.toDate().toISOString()
  if (val instanceof Date) return val.toISOString()
  return val
}

// Setup real-time listener for staff collection
const setupRealtimeListener = async () => {
  try {
    console.log('🔄 Setting up real-time listener for staff collection...')
    
    // Check if user is authenticated
    if (!auth || !auth.currentUser) {
      console.error('❌ User not authenticated, cannot setup real-time listener')
      connectionStatus.value = {
        success: false,
        title: 'Authentication Required',
        message: 'Please log in to access staff management.'
      }
      setTimeout(() => {
        connectionStatus.value = null
        router.push('/admin')
      }, 3000)
      return
    }
    
    // Verify user is an admin
    try {
      const adminDoc = await getDoc(doc(db, 'admins', auth.currentUser.uid))
      if (!adminDoc.exists()) {
        console.error('❌ User is not an admin, cannot setup real-time listener')
        connectionStatus.value = {
          success: false,
          title: 'Access Denied',
          message: 'You do not have admin privileges. Redirecting to login...'
        }
        setTimeout(() => {
          connectionStatus.value = null
          router.push('/admin')
        }, 3000)
        return
      }
      console.log('✅ Admin verification successful for real-time listener')
    } catch (adminCheckError) {
      console.error('❌ Error checking admin status:', adminCheckError)
      connectionStatus.value = {
        success: false,
        title: 'Verification Failed',
        message: 'Unable to verify admin status. Please try logging in again.'
      }
      setTimeout(() => {
        connectionStatus.value = null
        router.push('/admin')
      }, 3000)
      return
    }
    
    // Check if database is initialized
    if (!db) {
      console.error('❌ Database not initialized')
      connectionStatus.value = {
        success: false,
        title: 'Database Error',
        message: 'Firebase database is not initialized. Please refresh the page.'
      }
      setTimeout(() => {
        connectionStatus.value = null
      }, 5000)
      return
    }
    
    const staffCollection = collection(db, 'staff')
    
    unsubscribeStaffListener = onSnapshot(staffCollection, (snapshot) => {
      console.log('📡 Real-time update received! Changes:', snapshot.docChanges().length)
      
      const staffData = snapshot.docs.map(docSnap => {
        const data = docSnap.data()
        const createdAt = normalizeCreatedAt(data.createdAt) || new Date().toISOString()
        return {
          id: docSnap.id,
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          fullName: data.fullName || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
          email: data.email || '',
          role: data.role || 'staff',
          status: data.status || 'active',
          photoURL: data.photoURL || null,
          createdAt,
          position: data.position || 'Staff Member'
        }
      })
      
      // Check for new staff members
      const previousCount = staffMembers.value.length
      const newCount = staffData.length
      
      if (newCount > previousCount && previousCount > 0) {
        // Find the new staff member
        const newStaff = staffData.find(staff => 
          !staffMembers.value.some(existing => existing.id === staff.id)
        )
        
        if (newStaff) {
          newStaffNotification.value = `${newStaff.fullName} (${newStaff.email}) has registered and been added to the system.`
          
          // Auto-hide notification after 10 seconds
          setTimeout(() => {
            newStaffNotification.value = null
          }, 10000)
        }
      }
      
      staffMembers.value = staffData
      lastUpdated.value = new Date().toLocaleTimeString()
      
      console.log('✅ Real-time data updated:', staffData.length, 'staff members')
    }, (error) => {
      console.error('❌ Real-time listener error:', error)
      console.error('Error details:', error.code, error.message)
      
      // Provide more specific error messages
      let errorMessage = error?.message ?? 'Unknown error'
      if (error?.code === 'permission-denied') {
        errorMessage = 'Permission denied. Please ensure you are logged in as an admin and have proper access rights.'
      } else if (error?.code === 'unauthenticated') {
        errorMessage = 'Authentication required. Please log in again.'
        setTimeout(() => {
          router.push('/admin')
        }, 3000)
      } else if (error?.code === 'unavailable') {
        errorMessage = 'Firebase service is temporarily unavailable. Please try again later.'
      }
      
      connectionStatus.value = {
        success: false,
        title: 'Real-time Updates Failed',
        message: `Error: ${errorMessage}. Falling back to manual refresh.`
      }
      
      setTimeout(() => {
        connectionStatus.value = null
      }, 5000)
    })
    
    console.log('✅ Real-time listener setup successful')
  } catch (error) {
    console.error('❌ Error setting up real-time listener:', error)
  }
}

// Test connection function
const testConnection = async () => {
  try {
    loading.value = true
    console.log('🔍 Testing Firebase/Firestore connection...')
    
    // Simple connection test
    const staffCollection = collection(db, 'staff')
    await getDocs(staffCollection)
    
    connectionStatus.value = {
      success: true,
      title: 'Connection Successful',
      message: 'Firebase and Firestore are working properly. Real-time updates are active.'
    }
    
    // Auto-hide status after 5 seconds
    setTimeout(() => {
      connectionStatus.value = null
    }, 5000)
    
  } catch (error) {
    console.error('❌ Connection test failed:', error)
    connectionStatus.value = {
      success: false,
      title: 'Connection Failed',
      message: `Connection failed: ${error.message}`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 5000)
  } finally {
    loading.value = false
  }
}

// Fetch staff members from Firestore (manual refresh)
const fetchStaffMembers = async () => {
  try {
    loading.value = true
    console.log('📊 Manual refresh: Fetching staff members from Firestore...')
    
    // Check if user is authenticated
    if (!auth || !auth.currentUser) {
      console.error('❌ User not authenticated')
      connectionStatus.value = {
        success: false,
        title: 'Authentication Required',
        message: 'Please log in to access staff management. Redirecting to login...'
      }
      
      setTimeout(() => {
        connectionStatus.value = null
        router.push('/admin')
      }, 3000)
      return
    }
    
    // Verify user is an admin
    try {
      const adminDoc = await getDoc(doc(db, 'admins', auth.currentUser.uid))
      if (!adminDoc.exists()) {
        console.error('❌ User is not an admin')
        connectionStatus.value = {
          success: false,
          title: 'Access Denied',
          message: 'You do not have admin privileges. Redirecting to login...'
        }
        
        setTimeout(() => {
          connectionStatus.value = null
          router.push('/admin')
        }, 3000)
        return
      }
      console.log('✅ Admin verification successful')
    } catch (adminCheckError) {
      console.error('❌ Error checking admin status:', adminCheckError)
      connectionStatus.value = {
        success: false,
        title: 'Verification Failed',
        message: 'Unable to verify admin status. Please try logging in again.'
      }
      
      setTimeout(() => {
        connectionStatus.value = null
        router.push('/admin')
      }, 3000)
      return
    }
    
    // Check if database is initialized
    if (!db) {
      console.error('❌ Database not initialized')
      connectionStatus.value = {
        success: false,
        title: 'Database Error',
        message: 'Firebase database is not initialized. Please refresh the page.'
      }
      
      setTimeout(() => {
        connectionStatus.value = null
      }, 5000)
      return
    }
    
    const staffCollection = collection(db, 'staff')
    const staffSnapshot = await getDocs(staffCollection)
    
    console.log('📈 Staff snapshot size:', staffSnapshot.size)
    
    const staffData = staffSnapshot.docs.map(docSnap => {
      const data = docSnap.data()
      const createdAt = normalizeCreatedAt(data.createdAt) || new Date().toISOString()
      return {
        id: docSnap.id,
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        fullName: data.fullName || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
        email: data.email || '',
        role: data.role || 'staff',
        status: data.status || 'active',
        photoURL: data.photoURL || null,
        createdAt,
        position: data.position || 'Staff Member'
      }
    })
    
    staffMembers.value = staffData
    lastUpdated.value = new Date().toLocaleTimeString()
    console.log('✅ Manual refresh completed:', staffData.length, 'members')
    
    connectionStatus.value = {
      success: true,
      title: 'Manual Refresh Complete',
      message: `Loaded ${staffData.length} staff member${staffData.length !== 1 ? 's' : ''} from the database.`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 3000)
    
  } catch (error) {
    console.error('❌ Error fetching staff members:', error)
    console.error('Error details:', error.code, error.message)
    
    // Provide more specific error messages and retry logic
    let errorMessage = error?.message ?? 'Unknown error'
    let shouldRetry = false

    if (error?.code === 'permission-denied') {
      // Double-check admin status before showing error
      try {
        if (auth.currentUser) {
          const adminDoc = await getDoc(doc(db, 'admins', auth.currentUser.uid))
          if (!adminDoc.exists()) {
            errorMessage = 'You are not authorized as an admin. Please contact the system administrator.'
            setTimeout(() => {
              router.push('/admin')
            }, 3000)
          } else {
            errorMessage = 'Permission denied. This may be a Firestore security rules issue. Please check your Firebase console settings.'
            shouldRetry = true
          }
        } else {
          errorMessage = 'Please log in again to refresh your session.'
          setTimeout(() => {
            router.push('/admin')
          }, 3000)
        }
      } catch (checkError) {
        errorMessage = 'Unable to verify permissions. Please try logging out and logging back in.'
      }
    } else if (error?.code === 'unauthenticated') {
      errorMessage = 'Your session has expired. Please log in again.'
      setTimeout(() => {
        router.push('/admin')
      }, 3000)
    } else if (error?.code === 'unavailable') {
      errorMessage = 'Firebase service is temporarily unavailable. Please try again in a few moments.'
      shouldRetry = true
    } else if (error?.code === 'failed-precondition') {
      errorMessage = 'Database connection issue. Please refresh the page and try again.'
      shouldRetry = true
    }
    
    connectionStatus.value = {
      success: false,
      title: 'Manual Refresh Failed',
      message: `Error: ${errorMessage}${shouldRetry ? ' You can try clicking Refresh again.' : ''}`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 8000)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  try {
    console.log('🚀 AdminStaffManagement component mounted')
    
    // Setup keyboard shortcuts
    document.addEventListener('keydown', handleKeydown)
    
    // Setup real-time listener first
    setupRealtimeListener()
    
    // Also do an initial fetch
    await fetchStaffMembers()
  } catch (error) {
    console.error('❌ Error during component initialization:', error)
    componentError.value = `Initialization failed: ${error.message}`
  }
})

onUnmounted(() => {
  // Remove keyboard event listener
  document.removeEventListener('keydown', handleKeydown)
  
  // Cleanup real-time listener
  if (unsubscribeStaffListener) {
    console.log('🔄 Cleaning up real-time listener')
    unsubscribeStaffListener()
  }
})

// Helper function to get full name
const getFullName = (staff) => {
  if (!staff) return ''
  if (staff.fullName) return staff.fullName
  return `${staff.firstName || ''} ${staff.lastName || ''}`.trim()
}

// Methods
const handleSubmit = async () => {
  try {
    loading.value = true
    
    // Split the name into firstName and lastName (guard against empty/undefined)
    const nameStr = (staffForm.value.name || '').trim()
    const nameParts = nameStr ? nameStr.split(/\s+/) : ['']
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''
    
    const staffData = {
      firstName,
      lastName,
      fullName: nameStr || 'Unnamed',
      email: staffForm.value.email,
      role: staffForm.value.role,
      status: staffForm.value.status,
      photoURL: staffForm.value.photoURL,
      position: staffForm.value.position || 'Staff Member',
      updatedAt: new Date().toISOString()
    }
    
    if (editingStaff.value) {
      // Update existing staff
      staffData.createdAt = editingStaff.value.createdAt
      const staffRef = doc(db, 'staff', editingStaff.value.id)
      await updateDoc(staffRef, staffData)
      console.log('✅ Staff updated successfully:', staffData)
    }
    
    // Real-time listener will automatically update the UI
    closeModal()
    
    connectionStatus.value = {
      success: true,
      title: 'Staff Updated',
      message: 'Staff member updated successfully!'
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 3000)
    
  } catch (error) {
    console.error('❌ Error saving staff:', error)
    connectionStatus.value = {
      success: false,
      title: 'Update Failed',
      message: `Error updating staff: ${error.message}`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 5000)
  } finally {
    loading.value = false
  }
}

// Added photo upload with drag and drop support
const handlePhotoDrop = (e) => {
  isDragOver.value = false
  const files = e.dataTransfer.files
  if (files.length > 0) {
    const file = files[0]
    if (file.type.startsWith('image/')) {
      processPhotoFile(file)
    }
  }
}

const processPhotoFile = (file) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    staffForm.value.photoURL = e.target.result
  }
  reader.readAsDataURL(file)
}

const handleStaffPhotoUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return
  processPhotoFile(file)
}

const removeStaffPhoto = () => {
  staffForm.value.photoURL = null
}

const triggerPhotoInput = () => {
  photoInput.value?.click()
}

// Bulk operations
const bulkUpdateStatus = async (status) => {
  if (selectedStaffIds.value.length === 0) return
  
  try {
    loading.value = true
    
    const updatePromises = selectedStaffIds.value.map(async (staffId) => {
      const staffRef = doc(db, 'staff', staffId)
      return updateDoc(staffRef, {
        status,
        updatedAt: new Date().toISOString()
      })
    })
    
    await Promise.all(updatePromises)
    
    connectionStatus.value = {
      success: true,
      title: 'Bulk Update Complete',
      message: `Updated ${selectedStaffIds.value.length} staff member${selectedStaffIds.value.length !== 1 ? 's' : ''} to ${status}.`
    }
    
    selectedStaffIds.value = []
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 3000)
    
  } catch (error) {
    console.error('❌ Error in bulk update:', error)
    connectionStatus.value = {
      success: false,
      title: 'Bulk Update Failed',
      message: `Error updating staff: ${error.message}`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 5000)
  } finally {
    loading.value = false
  }
}

// Computed properties
const filteredStaff = computed(() => {
  let filtered = [...staffMembers.value]

  // Apply search filter with debounced query
  if (debouncedSearchQuery.value) {
    const query = debouncedSearchQuery.value.toLowerCase()
    filtered = filtered.filter(staff =>
      getFullName(staff).toLowerCase().includes(query) ||
      (staff.email || '').toLowerCase().includes(query) ||
      (staff.position || '').toLowerCase().includes(query)
    )
  }

  // Apply status filter
  if (filterStatus.value) {
    filtered = filtered.filter(staff => (staff.status || 'active') === filterStatus.value)
  }

  // Apply sorting
  filtered.sort((a, b) => {
    let aValue, bValue
    
    switch (sortBy.value) {
      case 'name':
        aValue = getFullName(a).toLowerCase()
        bValue = getFullName(b).toLowerCase()
        break
      case 'email':
        aValue = a.email.toLowerCase()
        bValue = b.email.toLowerCase()
        break
      case 'role':
        aValue = a.role || 'staff'
        bValue = b.role || 'staff'
        break
      case 'status':
        aValue = a.status || 'active'
        bValue = b.status || 'active'
        break
      case 'created':
        aValue = new Date(a.createdAt || 0)
        bValue = new Date(b.createdAt || 0)
        break
      default:
        return 0
    }
    
    if (sortBy.value === 'created') {
      return sortOrder.value === 'asc' ? aValue - bValue : bValue - aValue
    }
    
    if (aValue < bValue) return sortOrder.value === 'asc' ? -1 : 1
    if (aValue > bValue) return sortOrder.value === 'asc' ? 1 : -1
    return 0
  })

  return filtered
})

const paginatedStaff = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return filteredStaff.value.slice(start, end)
})

const totalStaff = computed(() => staffMembers.value.length)
const activeStaff = computed(() => staffMembers.value.filter(s => (s.status || 'active') === 'active').length)
const regularStaffCount = computed(() => staffMembers.value.filter(s => s.role === 'staff').length)

const totalPages = computed(() => Math.max(1, Math.ceil(filteredStaff.value.length / perPage.value)))
const paginationStart = computed(() => filteredStaff.value.length === 0 ? 0 : ((currentPage.value - 1) * perPage.value) + 1)
const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, filteredStaff.value.length))

const isAllSelected = computed(() => {
  return paginatedStaff.value.length > 0 && 
         paginatedStaff.value.every(staff => selectedStaffIds.value.includes(staff.id))
})

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    // Deselect all on current page
    selectedStaffIds.value = selectedStaffIds.value.filter(id => 
      !paginatedStaff.value.some(staff => staff.id === id)
    )
  } else {
    // Select all on current page
    const currentPageIds = paginatedStaff.value.map(staff => staff.id)
    selectedStaffIds.value = [...new Set([...selectedStaffIds.value, ...currentPageIds])]
  }
}

const toggleStaffSelection = (staffId) => {
  const index = selectedStaffIds.value.indexOf(staffId)
  if (index > -1) {
    selectedStaffIds.value.splice(index, 1)
  } else {
    selectedStaffIds.value.push(staffId)
  }
}

// Watch for page changes to reset current page if needed
watch([filteredStaff, perPage], () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = Math.max(1, totalPages.value)
  }
})

const closeModal = () => {
  showAddModal.value = false
  editingStaff.value = null
  staffForm.value = {
    name: '',
    email: '',
    role: 'staff',
    status: 'active',
    photoURL: null,
    position: ''
  }
  selectedStaffIds.value = [] // Clear selection on modal close
}

const getRoleBadgeClass = (role) => {
  if (role == null || role === '') return 'bg-gray-100 text-gray-800 border border-gray-200'
  const classes = {
    admin: 'bg-purple-100 text-purple-800 border border-purple-200',
    staff: 'bg-blue-100 text-blue-800 border border-blue-200'
  }
  return classes[role] || 'bg-gray-100 text-gray-800 border border-gray-200'
}

const getStatusBadgeClass = (status) => {
  if (status == null || status === '') return 'bg-gray-100 text-gray-800 border border-gray-200'
  const classes = {
    active: 'bg-green-100 text-green-800 border border-green-200',
    inactive: 'bg-red-100 text-red-800 border border-red-200'
  }
  return classes[status] || 'bg-gray-100 text-gray-800 border border-gray-200'
}

const formatRole = (role) => {
  if (role == null || role === '') return '—'
  const roles = {
    admin: 'Admin',
    staff: 'Staff'
  }
  return roles[role] || String(role)
}

const formatStatus = (status) => {
  if (status == null || status === '') return '—'
  const statuses = {
    active: 'Active',
    inactive: 'Inactive'
  }
  return statuses[status] || String(status)
}

const formatDate = (date) => {
  if (date == null) return 'Never'
  try {
    const d = typeof date.toDate === 'function' ? date.toDate() : new Date(date)
    return isNaN(d.getTime()) ? 'Never' : d.toLocaleDateString()
  } catch {
    return 'Never'
  }
}

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

const handleLogout = () => {
  router.push('/admin')
}

const userDisplayName = computed(() => 'Admin User');
const userEmail = computed(() => 'admin@example.com');

// Add missing methods that were referenced but not defined
const editStaff = (staff) => {
  if (!staff) return
  editingStaff.value = staff
  staffForm.value = {
    name: getFullName(staff),
    email: staff.email ?? '',
    role: staff.role || 'staff',
    status: staff.status || 'active',
    photoURL: staff.photoURL || null,
    position: staff.position ?? ''
  }
  showAddModal.value = true
}

const confirmDelete = (staff) => {
  selectedStaff.value = staff
  showDeleteModal.value = true
}

const deleteStaff = async () => {
  if (!selectedStaff.value) return
  
  try {
    loading.value = true
    
    const staffRef = doc(db, 'staff', selectedStaff.value.id)
    await deleteDoc(staffRef)
    
    console.log('✅ Staff deleted successfully:', selectedStaff.value.id)
    
    connectionStatus.value = {
      success: true,
      title: 'Staff Deleted',
      message: `${getFullName(selectedStaff.value)} has been removed from the system.`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 3000)
    
  } catch (error) {
    console.error('❌ Error deleting staff:', error)
    connectionStatus.value = {
      success: false,
      title: 'Delete Failed',
      message: `Error deleting staff: ${error?.message ?? 'Unknown error'}`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 5000)
  } finally {
    loading.value = false
    showDeleteModal.value = false
    selectedStaff.value = null
  }
}
</script>

<style scoped>
/* Enhanced custom scrollbar and animations */
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
}

/* Enhanced animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in {
  animation: slideIn 0.3s ease-out;
}

/* Focus styles */
input:focus, select:focus, button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Hover effects */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Loading skeleton */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
