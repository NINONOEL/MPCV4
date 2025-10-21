<template>
  <!-- biome-ignore lint/correctness/useHookAtTopLevel: False positive - all hooks are at top level -->
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-blue-200 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <!-- Added keyboard shortcuts overlay -->
    <!-- Keyboard Shortcuts Help -->
    <div v-if="showKeyboardHelp" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl max-w-md w-full shadow-2xl">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold text-gray-900">Keyboard Shortcuts</h3>
            <button @click="showKeyboardHelp = false" class="p-1 hover:bg-gray-100 rounded">
              <XIcon class="w-5 h-5" />
            </button>
          </div>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Search</span>
              <kbd class="px-2 py-1 bg-gray-100 rounded text-xs">Ctrl + K</kbd>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Refresh</span>
              <kbd class="px-2 py-1 bg-gray-100 rounded text-xs">Ctrl + R</kbd>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Help</span>
              <kbd class="px-2 py-1 bg-gray-100 rounded text-xs">?</kbd>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Escape</span>
              <kbd class="px-2 py-1 bg-gray-100 rounded text-xs">Esc</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error Boundary -->
    <div v-if="componentError" class="fixed inset-0 bg-red-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-4">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangleIcon class="w-8 h-8 text-red-600" />
          </div>
          <h2 class="text-xl font-bold text-gray-900 mb-2">Component Error</h2>
          <p class="text-gray-600 mb-4">{{ componentError }}</p>
          <button 
            @click="reloadComponent"
            class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Reload Component
          </button>
        </div>
      </div>
    </div>

    <div v-else class="relative z-10 flex h-screen">
      <!-- Desktop Sidebar -->
      <aside class="w-64 bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 hidden lg:flex lg:flex-col shadow-lg">
        <!-- Logo/Brand -->
        <div class="p-4 xl:p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-2 xl:px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <ShieldIcon class="h-3 w-3 mr-1" />
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
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 shadow-sm border border-green-200 transform scale-105"
            :class="{ 'hover:bg-green-100 hover:text-green-700': $route.path !== '/admin/staff' }"
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
        <div class="p-3 xl:p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-2 xl:gap-3">
            <div class="w-8 xl:w-10 h-8 xl:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
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
        <!-- Improved responsive header layout -->
        <!-- Header -->
        <header class="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="pl-16 lg:pl-0">
              <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Staff Management</h1>
              <p class="text-sm sm:text-base text-gray-600 mt-1">Manage your staff members and their roles</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden sm:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-green-500" />
                <span class="text-sm lg:text-base">{{ currentDate }}</span>
              </div>
              <div class="hidden sm:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900 text-sm lg:text-base">Welcome, Admin</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-green-500 cursor-pointer hover:text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 sm:p-6 lg:p-8 space-y-6">
          <!-- Connection Status -->
          <div v-if="connectionStatus" class="mb-6">
            <div 
              :class="[ 
                'p-4 rounded-lg border-2 flex items-center gap-3',
                connectionStatus.success 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : 'bg-red-50 border-red-200 text-red-800'
              ]"
            >
              <CheckCircleIcon v-if="connectionStatus.success" class="w-6 h-6 text-green-600" />
              <XCircleIcon v-else class="w-6 h-6 text-red-600" />
              <div>
                <h3 class="font-medium">{{ connectionStatus.title }}</h3>
                <p class="text-sm">{{ connectionStatus.message }}</p>
              </div>
            </div>
          </div>

          <!-- New Staff Notification -->
          <div v-if="newStaffNotification" class="mb-6">
            <div class="p-4 rounded-lg border-2 bg-blue-50 border-blue-200 text-blue-800 flex items-center gap-3">
              <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-bold">!</span>
              </div>
              <div>
                <h3 class="font-medium">New Staff Member Registered!</h3>
                <p class="text-sm">{{ newStaffNotification }}</p>
              </div>
              <button 
                @click="newStaffNotification = null"
                class="ml-auto p-1 hover:bg-blue-100 rounded"
              >
                <XIcon class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Improved responsive stats cards layout -->
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <!-- Total Staff Card -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-6">
                <div class="flex items-center gap-3 sm:gap-4">
                  <div class="p-2 sm:p-3 rounded-xl shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                    <UsersIcon class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-xs sm:text-sm text-gray-600">Total Staff</p>
                    <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ totalStaff }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Active Staff Card -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-6">
                <div class="flex items-center gap-3 sm:gap-4">
                  <div class="p-2 sm:p-3 rounded-xl shadow-lg bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <UserCheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-xs sm:text-sm text-gray-600">Active Staff</p>
                    <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ activeStaff }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Regular Staff Card -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative sm:col-span-2 lg:col-span-1">
              <div class="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-6">
                <div class="flex items-center gap-3 sm:gap-4">
                  <div class="p-2 sm:p-3 rounded-xl shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                    <UserIcon class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-xs sm:text-sm text-gray-600">Regular Staff</p>
                    <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ regularStaffCount }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Debug Info -->
          <div v-if="staffMembers.length === 0 && !loading" class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div class="flex items-center gap-2 mb-2">
              <AlertTriangleIcon class="w-5 h-5 text-yellow-600" />
              <h3 class="font-medium text-yellow-800">No Staff Members Found</h3>
            </div>
            <p class="text-yellow-700 text-sm mb-3">
              Staff members registered through the Staff Portal should appear here automatically with real-time updates.
            </p>
            <div class="space-y-2 text-sm">
              <button 
                @click="testConnection" 
                class="block w-full text-left px-3 py-2 bg-yellow-100 hover:bg-yellow-200 rounded border border-yellow-300 transition-colors"
              >
                1. Test Firebase/Firestore connection
              </button>
              <button 
                @click="fetchStaffMembers" 
                class="block w-full text-left px-3 py-2 bg-yellow-100 hover:bg-yellow-200 rounded border border-yellow-300 transition-colors"
              >
                2. Manual refresh to check for new staff registrations
              </button>
            </div>
          </div>

          <!-- Enhanced search and filter bar with bulk operations -->
          <!-- Improved responsive search and filter bar -->
          <!-- Search and Filter Bar -->
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6 mb-8">
            <div class="flex flex-col lg:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search by name, email, or position..."
                    ref="searchInput"
                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 transition-all duration-200"
                  />
                  <button 
                    v-if="searchQuery" 
                    @click="searchQuery = ''"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <XIcon class="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <select 
                  v-model="filterStatus"
                  class="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 min-w-[120px]"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                
                <button 
                  @click="fetchStaffMembers"
                  class="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm font-medium min-w-[100px]"
                  :disabled="loading"
                >
                  <RefreshCwIcon class="w-4 h-4" :class="{ 'animate-spin': loading }" />
                  <span class="hidden sm:inline">{{ loading ? 'Loading...' : 'Refresh' }}</span>
                  <span class="sm:hidden">{{ loading ? '...' : 'Refresh' }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Enhanced staff table with better mobile responsiveness and bulk selection -->
          <!-- Improved responsive staff table -->
          <!-- Staff Table -->
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg overflow-hidden">
            <!-- Mobile View -->
            <div class="block lg:hidden">
              <div v-if="loading" class="p-8 text-center">
                <div class="flex flex-col items-center gap-4">
                  <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <p class="text-gray-600">Loading staff members...</p>
                </div>
              </div>
              <div v-else-if="paginatedStaff.length === 0" class="p-8 text-center text-gray-600">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <UsersIcon class="w-8 h-8 text-gray-400" />
                </div>
                <p class="text-lg font-medium mb-2">No staff members found</p>
                <p class="text-sm">Try adjusting your search or filters</p>
              </div>
              <div v-else class="divide-y divide-gray-100">
                <div v-for="staff in paginatedStaff" :key="staff.id" class="p-4 hover:bg-gray-50/50 transition-colors">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0">
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
                        <!-- Made action buttons always visible and properly aligned to the right -->
                        <div class="flex gap-1 flex-shrink-0">
                          <button 
                            @click="editStaff(staff)"
                            class="p-2 hover:bg-blue-50 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                            :title="`Edit ${getFullName(staff)}`"
                          >
                            <EditIcon class="w-4 h-4" />
                          </button>
                          <button 
                            @click="confirmDelete(staff)"
                            class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
                            :title="`Delete ${getFullName(staff)}`"
                          >
                            <Trash2Icon class="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <span 
                          class="px-2 py-1 rounded-full text-xs font-medium"
                          :class="getRoleBadgeClass(staff.role)"
                        >
                          {{ formatRole(staff.role) }}
                        </span>
                        <span 
                          class="px-2 py-1 rounded-full text-xs font-medium"
                          :class="getStatusBadgeClass(staff.status || 'active')"
                        >
                          {{ formatStatus(staff.status || 'active') }}
                        </span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {{ formatDate(staff.createdAt) }}
                        </span>
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
                  <tr class="border-b border-gray-100 bg-gray-50/50">
                    <!-- Checkbox for bulk selection -->
                    <th class="pl-4 py-3 text-left text-sm font-semibold text-gray-700 w-10">
                      <input 
                        type="checkbox" 
                        :checked="isAllSelected" 
                        @change="toggleSelectAll" 
                        class="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Staff Member</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Position</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Role</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Status</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Created</th>
                    <th class="text-right p-4 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading">
                    <td colspan="7" class="p-8 text-center">
                      <div class="flex flex-col items-center gap-4">
                        <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <p class="text-gray-600">Loading staff members...</p>
                      </div>
                    </td>
                  </tr>
                  <tr v-else-if="paginatedStaff.length === 0">
                    <td colspan="7" class="p-12 text-center text-gray-600">
                      <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                        <UsersIcon class="w-8 h-8 text-gray-400" />
                      </div>
                      <p class="text-lg font-medium mb-2">No staff members found</p>
                      <p class="text-sm">Try adjusting your search or filters</p>
                    </td>
                  </tr>
                  <tr 
                    v-for="staff in paginatedStaff" 
                    :key="staff.id" 
                    class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group"
                  >
                    <!-- Checkbox for individual row selection -->
                    <td class="pl-4 py-3 w-10">
                      <input 
                        type="checkbox" 
                        :checked="selectedStaffIds.includes(staff.id)" 
                        @change="toggleStaffSelection(staff.id)" 
                        class="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-lg">
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
                          <p class="text-sm text-gray-600">{{ staff.email }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <span class="text-gray-900 font-medium">{{ staff.position || 'Staff Member' }}</span>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-3 py-1 rounded-full text-sm font-medium"
                        :class="getRoleBadgeClass(staff.role)"
                      >
                        {{ formatRole(staff.role) }}
                      </span>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-3 py-1 rounded-full text-sm font-medium"
                        :class="getStatusBadgeClass(staff.status || 'active')"
                      >
                        {{ formatStatus(staff.status || 'active') }}
                      </span>
                    </td>
                    <td class="p-4 text-gray-600 font-medium">
                      {{ formatDate(staff.createdAt) }}
                    </td>
                    <td class="p-4">
                      <!-- Made desktop action buttons always visible and properly aligned -->
                      <div class="flex items-center justify-end gap-1">
                        <button 
                          @click="editStaff(staff)"
                          class="p-2 hover:bg-blue-50 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                          :title="`Edit ${getFullName(staff)}`"
                        >
                          <EditIcon class="w-4 h-4" />
                        </button>
                        <button 
                          @click="confirmDelete(staff)"
                          class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
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
            <div v-if="selectedStaffIds.length > 0" class="bg-blue-50 border-t border-blue-200 p-3 flex justify-between items-center">
              <div class="flex items-center gap-3">
                <span class="text-sm font-medium text-blue-700">
                  {{ selectedStaffIds.length }} selected
                </span>
                <button @click="bulkUpdateStatus('active')" class="text-sm text-blue-700 font-medium hover:underline">Activate</button>
                <button @click="bulkUpdateStatus('inactive')" class="text-sm text-blue-700 font-medium hover:underline">Deactivate</button>
              </div>
              <button @click="selectedStaffIds = []" class="text-sm text-blue-700 font-medium hover:underline">Clear Selection</button>
            </div>

            <!-- Improved responsive pagination -->
            <!-- Pagination -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t border-gray-100 bg-gray-50/30">
              <div class="flex items-center gap-2 sm:gap-4 text-sm">
                <select 
                  v-model="perPage"
                  class="px-2 sm:px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-gray-600 text-xs sm:text-sm">
                  {{ paginationStart }} - {{ paginationEnd }} of {{ filteredStaff.length }}
                </span>
              </div>
              <div class="flex items-center gap-1 sm:gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 transition-colors"
                  title="Previous page"
                >
                  <ChevronLeftIcon class="w-4 h-4" />
                </button>
                <span class="text-sm text-gray-700 px-2 sm:px-3 py-2 bg-white rounded-lg border border-gray-200 font-medium min-w-[60px] text-center">
                  {{ currentPage }} / {{ totalPages }}
                </span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage >= totalPages"
                  class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 transition-colors"
                  title="Next page"
                >
                  <ChevronRightIcon class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- Enhanced modal with drag and drop photo upload -->
  <!-- Edit Staff Modal -->
  <div v-if="showAddModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
      <div class="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white rounded-t-xl">
        <h3 class="text-xl font-bold text-gray-900">
          Edit Staff Member
        </h3>
        <button 
          @click="closeModal"
          class="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <XIcon class="w-5 h-5" />
        </button>
      </div>
      
      <form @submit.prevent="handleSubmit" class="p-6">
        <div class="space-y-6">
          <!-- Enhanced photo upload with drag and drop -->
          <!-- Profile Photo with Drag & Drop -->
          <div class="flex flex-col items-center gap-4">
            <div 
              class="relative group"
              @dragover.prevent="isDragOver = true"
              @dragleave.prevent="isDragOver = false"
              @drop.prevent="handlePhotoDrop"
            >
              <div 
                class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-lg transition-all duration-200"
                :class="{ 'scale-105 ring-4 ring-blue-200': isDragOver }"
              >
                <img v-if="staffForm.photoURL" :src="staffForm.photoURL" alt="Profile" class="w-full h-full object-cover" />
                <UserIcon v-else class="w-12 h-12 text-white" />
              </div>
              <div 
                v-if="isDragOver"
                class="absolute inset-0 rounded-full bg-blue-500/20 flex items-center justify-center"
              >
                <span class="text-blue-600 text-xs font-medium">Drop photo</span>
              </div>
              <input 
                type="file" 
                ref="photoInput" 
                accept="image/*" 
                class="hidden" 
                @change="handleStaffPhotoUpload"
              />
            </div>
            <div class="flex gap-2">
              <button 
                type="button"
                @click="$refs.photoInput.click()" 
                class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
              >
                Change Photo
              </button>
              <button 
                v-if="staffForm.photoURL" 
                type="button"
                @click="removeStaffPhoto" 
                class="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
              >
                Remove
              </button>
            </div>
            <p class="text-xs text-gray-500 text-center">
              Drag & drop an image or click to browse
            </p>
          </div>

          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text"
              v-model="staffForm.name"
              required
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
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
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter email address"
            />
          </div>

          <!-- Role -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select 
              v-model="staffForm.role"
              required
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
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
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
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
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter position"
            />
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6 border-t border-gray-200 pt-6 sticky bottom-0 bg-white">
          <button 
            type="button"
            @click="closeModal"
            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg font-medium"
            :disabled="loading"
          >
            <span v-if="loading" class="flex items-center gap-2">
              <LoaderIcon class="w-5 h-5 animate-spin" />
              Saving...
            </span>
            <span v-else>
              Save Changes
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div v-if="showDeleteModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md shadow-2xl">
      <div class="p-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
          <AlertTriangleIcon class="w-8 h-8 text-red-600" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 text-center mb-2">Delete Staff Member</h3>
        <p class="text-gray-600 text-center mb-6">
          Are you sure you want to delete {{ selectedStaff?.name || getFullName(selectedStaff) }}? This action cannot be undone.
        </p>
        <div class="flex justify-center gap-3">
          <button 
            @click="showDeleteModal = false"
            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="deleteStaff"
            class="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
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
import { collection, getDocs, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/config/firebase.js'
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

// Setup real-time listener for staff collection
const setupRealtimeListener = () => {
  try {
    console.log('🔄 Setting up real-time listener for staff collection...')
    
    const staffCollection = collection(db, 'staff')
    
    unsubscribeStaffListener = onSnapshot(staffCollection, (snapshot) => {
      console.log('📡 Real-time update received! Changes:', snapshot.docChanges().length)
      
      const staffData = snapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          fullName: data.fullName || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
          email: data.email || '',
          role: data.role || 'staff',
          status: data.status || 'active',
          photoURL: data.photoURL || null,
          createdAt: data.createdAt || new Date().toISOString(),
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
      connectionStatus.value = {
        success: false,
        title: 'Real-time Updates Failed',
        message: `Error: ${error.message}. Falling back to manual refresh.`
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
    
    const staffCollection = collection(db, 'staff')
    const staffSnapshot = await getDocs(staffCollection)
    
    console.log('📈 Staff snapshot size:', staffSnapshot.size)
    
    const staffData = staffSnapshot.docs.map(doc => {
      const data = doc.data()
      console.log('👤 Staff document:', doc.id, data)
      
      return {
        id: doc.id,
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        fullName: data.fullName || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
        email: data.email || '',
        role: data.role || 'staff',
        status: data.status || 'active',
        photoURL: data.photoURL || null,
        createdAt: data.createdAt || new Date().toISOString(),
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
    
    connectionStatus.value = {
      success: false,
      title: 'Manual Refresh Failed',
      message: `Error: ${error.message}. Please check your Firebase configuration.`
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
    
    // Split the name into firstName and lastName
    const nameParts = staffForm.value.name.split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''
    
    const staffData = {
      firstName,
      lastName,
      fullName: staffForm.value.name.trim(),
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
      staff.email.toLowerCase().includes(query) ||
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
  const classes = {
    admin: 'bg-purple-100 text-purple-800 border border-purple-200',
    staff: 'bg-blue-100 text-blue-800 border border-blue-200'
  }
  return classes[role] || 'bg-gray-100 text-gray-800 border border-gray-200'
}

const getStatusBadgeClass = (status) => {
  const classes = {
    active: 'bg-green-100 text-green-800 border border-green-200',
    inactive: 'bg-red-100 text-red-800 border border-red-200'
  }
  return classes[status] || 'bg-gray-100 text-gray-800 border border-gray-200'
}

const formatRole = (role) => {
  const roles = {
    admin: 'Admin',
    staff: 'Staff'
  }
  return roles[role] || role
}

const formatStatus = (status) => {
  const statuses = {
    active: 'Active',
    inactive: 'Inactive'
  }
  return statuses[status] || status
}

const formatDate = (date) => {
  if (!date) return 'Never'
  return new Date(date).toLocaleDateString()
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
  editingStaff.value = staff
  staffForm.value = {
    name: getFullName(staff),
    email: staff.email,
    role: staff.role || 'staff',
    status: staff.status || 'active',
    photoURL: staff.photoURL || null,
    position: staff.position || ''
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
      message: `Error deleting staff: ${error.message}`
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
