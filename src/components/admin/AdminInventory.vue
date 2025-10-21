<template>
  <div class="min-h-screen bg-gray-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-blue-200 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Enhanced responsive sidebar with better mobile support -->
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
        <nav class="flex-1 p-3 xl:p-4 space-y-1 xl:space-y-2 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
            :class="{ 'shadow-sm border border-blue-200 transform scale-105': isActive('/admin/dashboard') }"
          >
            <LayoutDashboardIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700"
            :class="{ 'shadow-sm border border-green-200 transform scale-105': isActive('/admin/staff') }"
          >
            <UsersIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 shadow-sm border border-purple-200 transform scale-105"
            :class="{ 'hover:bg-purple-100 hover:text-purple-700': !isActive('/admin/inventory') }"
          >
            <PackageIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': isActive('/admin/house-paint-recommender') }"
          >
            <HomeIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border border-pink-200 transform scale-105': isActive('/admin/paint-mixing') }"
          >
            <PaletteIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border border-teal-200 transform scale-105': isActive('/admin/sales-analytics') }"
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
            :class="{ 'shadow-sm border border-amber-200 transform scale-105': isActive('/admin/settings') }"
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
              <p class="text-xs xl:text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-600 truncate">admin@example.com</p>
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

      <!-- Enhanced mobile sidebar toggle with better positioning -->
      <!-- Mobile Sidebar Toggle -->
      <div class="fixed top-4 left-4 z-30 lg:hidden">
        <button 
          @click="toggleMobileSidebar"
          class="p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Toggle navigation menu"
        >
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <XIcon v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <!-- Enhanced mobile sidebar overlay and design -->
      <!-- Mobile Sidebar Overlay -->
      <div 
        v-if="mobileSidebarOpen" 
        class="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 lg:hidden"
        @click="toggleMobileSidebar"
      ></div>

      <!-- Mobile Sidebar -->
      <aside 
        v-if="mobileSidebarOpen"
        class="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 z-30 lg:hidden shadow-2xl flex flex-col"
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

        <!-- Mobile Navigation - Scrollable -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100"
            :class="{ 'shadow-lg border border-blue-200 scale-105': isActive('/admin/dashboard') }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100"
            :class="{ 'shadow-lg border border-green-200 scale-105': isActive('/admin/staff') }"
            @click="mobileSidebarOpen = false"
          >
            <UsersIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 shadow-lg border border-purple-200 scale-105"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100"
            :class="{ 'shadow-lg border border-orange-200 scale-105': isActive('/admin/house-paint-recommender') }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100"
            :class="{ 'shadow-lg border border-pink-200 scale-105': isActive('/admin/paint-mixing') }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100"
            :class="{ 'shadow-lg border border-teal-200 scale-105': isActive('/admin/sales-analytics') }"
            @click="mobileSidebarOpen = false"
          >
            <TrendingUpIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
            :class="{ 'shadow-lg border border-indigo-200 scale-105': isActive('/admin/reports') }"
            @click="mobileSidebarOpen = false"
          >
            <ClipboardIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100"
            :class="{ 'shadow-lg border border-amber-200 scale-105': isActive('/admin/settings') }"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50 hover:bg-red-100"
            :class="{ 'shadow-lg border border-red-200 scale-105': isActive('/admin/security') }"
            @click="mobileSidebarOpen = false"
          >
            <ShieldIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Security</span>
          </router-link>

          <div class="h-4"></div>
        </nav>

        <!-- Mobile User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <UserIcon class="w-6 h-6 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-600 truncate">admin@example.com</p>
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
      <main class="flex-1 overflow-auto">
        <!-- Enhanced responsive header with better mobile layout -->
        <!-- Header -->
        <header class="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="pl-16 lg:pl-0">
              <h1 class="text-xl sm:text-2xl font-bold text-gray-900">Inventory Management</h1>
              <p class="text-sm sm:text-base text-gray-600">Manage your paint products and stock levels</p>
            </div>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div class="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                <CalendarIcon class="w-4 sm:w-5 h-4 sm:h-5 text-purple-500 flex-shrink-0" />
                <span class="truncate">{{ currentDate }}</span>
              </div>
              <div class="hidden sm:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-sm sm:text-base text-gray-900 truncate">Welcome, Admin</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 sm:p-6 lg:p-8">
          <!-- Error Alert -->
          <div 
            v-if="error" 
            class="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <AlertTriangleIcon class="w-5 h-5 text-red-600" />
              <span class="text-red-800">{{ error }}</span>
            </div>
            <button 
              @click="error = null"
              class="text-red-600 hover:text-red-800"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
          <div v-if="error" class="text-center mb-6">
            <button
              @click="fetchProducts"
              class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <RefreshCwIcon class="w-5 h-5" />
              Retry Loading Products
            </button>
          </div>

          <!-- Enhanced responsive action buttons -->
          <!-- Action Button -->
          <div class="flex flex-col sm:flex-row justify-end gap-3 mb-6">
            <button 
              @click="showOrderModal = true"
              class="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base"
            >
              <ShoppingCartIcon class="w-5 h-5" />
              <span>Order Product</span>
            </button>
            <button 
              @click="showAddModal = true"
              class="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base"
            >
              <PlusIcon class="w-5 h-5" />
              <span>Add Product</span>
            </button>
          </div>

          <!-- Enhanced responsive stats cards with better mobile layout -->
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <!-- Total Products -->
            <div 
              class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative cursor-pointer h-28 sm:h-32"
              @click="clearAllFilters"
            >
              <div class="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-6 h-full flex flex-col">
                <div class="flex justify-start mb-2">
                  <div class="p-1.5 sm:p-2 rounded-lg shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                    <PackageIcon class="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-center">
                  <p class="text-xs text-gray-600 mb-1">Total Products</p>
                  <p class="text-lg sm:text-xl font-bold text-gray-900">{{ totalProducts }}</p>
                </div>
              </div>
            </div>

            <!-- Low Stock -->
            <div 
              class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative cursor-pointer h-28 sm:h-32"
              @click="filterByLowStock"
            >
              <div class="bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-6 h-full flex flex-col">
                <div class="flex justify-start mb-2">
                  <div class="p-1.5 sm:p-2 rounded-lg shadow-lg bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 transform hover:scale-110 transition-transform duration-200">
                    <AlertTriangleIcon class="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-center">
                  <p class="text-xs text-gray-600 mb-1">Low Stock Items</p>
                  <p class="text-lg sm:text-xl font-bold text-gray-900">{{ lowStockCount }}</p>
                </div>
              </div>
            </div>

            <!-- Out of Stock -->
            <div 
              class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative cursor-pointer h-28 sm:h-32"
              @click="filterByOutOfStock"
            >
              <div class="bg-gradient-to-br from-red-400 via-pink-500 to-rose-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-6 h-full flex flex-col">
                <div class="flex justify-start mb-2">
                  <div class="p-1.5 sm:p-2 rounded-lg shadow-lg bg-gradient-to-br from-red-400 via-pink-500 to-rose-600 transform hover:scale-110 transition-transform duration-200">
                    <XCircleIcon class="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-center">
                  <p class="text-xs text-gray-600 mb-1">Out of Stock</p>
                  <p class="text-lg sm:text-xl font-bold text-gray-900">{{ outOfStockCount }}</p>
                </div>
              </div>
            </div>

            <!-- Total Value -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative h-28 sm:h-32">
              <div class="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-6 h-full flex flex-col">
                <div class="flex justify-start mb-2">
                  <div class="p-1.5 sm:p-2 rounded-lg shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                    <span class="text-white font-bold text-base sm:text-lg">₱</span>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-center">
                  <p class="text-xs text-gray-600 mb-1">Total Value</p>
                  <p class="text-sm sm:text-lg font-bold text-gray-900">₱{{ totalValue.toLocaleString() }}</p>
                </div>
              </div>
            </div>

            <!-- Total Unit Price Value -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative h-28 sm:h-32">
              <div class="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-6 h-full flex flex-col">
                <div class="flex justify-start mb-2">
                  <div class="p-1.5 sm:p-2 rounded-lg shadow-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <span class="text-white font-bold text-base sm:text-lg">₱</span>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-center">
                  <p class="text-xs text-gray-600 mb-1">Unit Price Value</p>
                  <p class="text-sm sm:text-lg font-bold text-gray-900">₱{{ totalUnitPriceValue.toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Enhanced responsive search and filter bar -->
          <!-- Search and Filter Bar -->
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div class="flex flex-col lg:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search products..."
                    class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <select 
                  v-model="filterCategory"
                  class="px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 text-sm sm:text-base"
                >
                  <option value="">All Categories</option>
                  <option value="interior">Interior Paint</option>
                  <option value="exterior">Exterior Paint</option>
                  <option value="primer">Primers</option>
                  <option value="specialty">Specialty Paints</option>
                </select>
                <select 
                  v-model="filterStock"
                  class="px-3 sm:px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 text-sm sm:text-base"
                >
                  <option value="">All Stock Levels</option>
                  <option value="in-stock">In Stock</option>
                  <option value="low-stock">Low Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Products Table -->
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg overflow-hidden">
            <!-- Loading State -->
            <div v-if="loading && products.length === 0" class="p-8 text-center">
              <LoaderIcon class="w-8 h-8 text-gray-400 animate-spin mx-auto mb-4" />
              <p class="text-gray-600">Loading inventory data...</p>
            </div>

            <!-- Empty State -->
            <div v-if="!loading && products.length === 0" class="p-8 text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <PackageIcon class="w-8 h-8 text-purple-600" />
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p class="text-gray-600 mb-4">Get started by adding your first product to the inventory.</p>
              <button 
                @click="showAddModal = true"
                class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <PlusIcon class="w-5 h-5" />
                Add Product
              </button>
            </div>

            <!-- Enhanced responsive mobile view with better touch interactions -->
            <!-- Mobile View -->
            <div v-else-if="products.length > 0" class="block lg:hidden">
              <div v-for="product in paginatedProducts" :key="product.id" class="p-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-3 flex-1 min-w-0">
                    <div class="w-12 h-12 rounded-lg shadow-lg overflow-hidden flex items-center justify-center flex-shrink-0"
                         :class="product.image ? 'bg-white border border-gray-200' : 'bg-gradient-to-br from-purple-500 to-pink-500'">
                      <img 
                        v-if="product.image" 
                        :src="product.image" 
                        :alt="product.name"
                        class="w-full h-full object-cover"
                      />
                      <PackageIcon v-else class="w-6 h-6 text-white" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-gray-900 truncate">{{ product.name }}</p>
                      <p class="text-sm text-gray-600 truncate">{{ formatCategory(product.category) }}</p>
                      <p class="text-xs text-gray-500">SKU: {{ product.sku }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 flex-shrink-0">
                    <button 
                      @click="editProduct(product)"
                      class="p-2 hover:bg-blue-50 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <EditIcon class="w-5 h-5" />
                    </button>
                    <button 
                      @click="confirmDelete(product)"
                      class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Trash2Icon class="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span 
                    class="px-2 py-1 rounded-full text-xs sm:text-sm"
                    :class="getStockLevelClass(product.stockLevel)"
                  >
                    {{ formatStockLevel(product.stockLevel) }}
                  </span>
                  <span class="text-xs sm:text-sm text-gray-600">
                    Price: ₱{{ product.price.toLocaleString() }}
                  </span>
                  <span class="text-xs sm:text-sm text-gray-600">
                    Unit: ₱{{ product.unitPrice ? product.unitPrice.toLocaleString() : '0' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Enhanced responsive desktop view with better table layout -->
            <!-- Desktop View -->
            <div v-if="products.length > 0" class="hidden lg:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-100">
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Product</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Category</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Stock Level</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Price</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Unit Price</th>
                    <th class="text-right p-4 text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading" class="border-b border-gray-100">
                    <td colspan="6" class="p-8 text-center">
                      <LoaderIcon class="w-6 h-6 text-gray-400 animate-spin mx-auto" />
                    </td>
                  </tr>
                  <tr v-else-if="paginatedProducts.length === 0" class="border-b border-gray-100">
                    <td colspan="6" class="p-8 text-center text-gray-600">
                      No products found
                    </td>
                  </tr>
                  <tr 
                    v-for="product in paginatedProducts" 
                    :key="product.id" 
                    class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-lg shadow-lg overflow-hidden flex items-center justify-center"
                             :class="product.image ? 'bg-white border border-gray-200' : 'bg-gradient-to-br from-purple-500 to-pink-500'">
                          <img 
                            v-if="product.image" 
                            :src="product.image" 
                            :alt="product.name"
                            class="w-full h-full object-cover"
                          />
                          <PackageIcon v-else class="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p class="font-medium text-gray-900">{{ product.name }}</p>
                          <p class="text-sm text-gray-600">SKU: {{ product.sku }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <span class="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800 border border-purple-200">
                        {{ formatCategory(product.category) }}
                      </span>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-3 py-1 rounded-full text-sm"
                        :class="getStockLevelClass(product.stockLevel)"
                      >
                        {{ formatStockLevel(product.stockLevel) }}
                      </span>
                    </td>
                    <td class="p-4 text-gray-900">
                      ₱{{ product.price.toLocaleString() }}
                    </td>
                    <td class="p-4 text-gray-900">
                      ₱{{ product.unitPrice ? product.unitPrice.toLocaleString() : '0' }}
                    </td>
                    <td class="p-4">
                      <div class="flex items-center justify-end gap-2">
                        <button 
                          @click="editProduct(product)"
                          class="p-2 hover:bg-blue-50 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                          title="Edit Product"
                        >
                          <EditIcon class="w-5 h-5" />
                        </button>
                        <button 
                          @click="confirmDelete(product)"
                          class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
                          title="Delete Product"
                        >
                          <Trash2Icon class="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Enhanced responsive pagination -->
            <!-- Pagination -->
            <div v-if="products.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t border-gray-100">
              <div class="flex items-center gap-2">
                <select 
                  v-model="perPage"
                  class="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-900"
                >
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-sm text-gray-600">
                  Showing {{ paginationStart }} - {{ paginationEnd }} of {{ filteredProducts.length }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-700"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm text-gray-700">Page {{ currentPage }} of {{ totalPages || 1 }}</span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage >= totalPages"
                  class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-700"
                >
                  <ChevronRightIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Enhanced responsive modals with better mobile support -->
    <!-- Add/Edit Product Modal -->
    <div v-if="showAddModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl w-full max-w-lg max-h-[90vh] shadow-2xl flex flex-col">
        <div class="p-4 border-b border-gray-200 flex-shrink-0">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-gray-900">
              {{ editingProduct ? 'Edit Product' : 'Add Product' }}
            </h3>
            <button 
              @click="closeModal"
              class="p-1 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <form @submit.prevent="handleSubmit" class="flex flex-col flex-1 min-h-0">
          <div class="flex-1 overflow-y-auto p-4">
            <div class="space-y-3">
              <!-- Image upload section -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
                
                <!-- Image Preview -->
                <div v-if="imagePreview" class="mb-3">
                  <div class="relative inline-block">
                    <img 
                      :src="imagePreview" 
                      alt="Product preview" 
                      class="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-sm"
                    />
                    <button 
                      type="button"
                      @click="removeImage"
                      class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <XIcon class="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <!-- Upload and Adjust Buttons -->
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <input 
                    ref="imageInput"
                    type="file" 
                    accept="image/*" 
                    @change="handleImageUpload"
                    class="hidden"
                  />
                  <button 
                    type="button"
                    @click="imageInput?.click()"
                    class="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                  >
                    <UploadIcon class="w-4 h-4" />
                    {{ imagePreview ? 'Change Image' : 'Upload Image' }}
                  </button>
                  <button 
                    v-if="imagePreview"
                    type="button"
                    @click="openImageEditor"
                    class="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Crop Image
                  </button>
                  <span class="text-xs text-gray-500">Max 100MB, JPG/PNG</span>
                </div>
              </div>

              <!-- Name -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input 
                  type="text"
                  v-model="productForm.name"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                  placeholder="Enter product name"
                />
              </div>

              <!-- SKU -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                <input 
                  type="text"
                  v-model="productForm.sku"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                  placeholder="Enter SKU"
                />
              </div>

              <!-- Category -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  v-model="productForm.category"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 text-sm"
                >
                  <option value="interior">Interior Paint</option>
                  <option value="exterior">Exterior Paint</option>
                  <option value="primer">Primers</option>
                  <option value="specialty">Specialty Paints</option>
                </select>
              </div>

              <!-- Price and Unit Price in one row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">₱</span>
                    <input 
                      type="number"
                      v-model="productForm.price"
                      required
                      min="0"
                      step="0.01"
                      class="w-full pl-7 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Unit Price</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">₱</span>
                    <input 
                      type="number"
                      v-model="productForm.unitPrice"
                      required
                      min="0"
                      step="0.01"
                      class="w-full pl-7 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              <!-- Stock Level -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Stock Level</label>
                <input 
                  type="number"
                  v-model="productForm.stockLevel"
                  required
                  min="0"
                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                  placeholder="Enter stock level"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-end gap-3 p-4 border-t border-gray-200 flex-shrink-0">
            <button 
              type="button"
              @click="closeModal"
              class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm order-2 sm:order-1"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg text-sm order-1 sm:order-2"
              :disabled="modalLoading"
            >
              <span v-if="modalLoading" class="flex items-center justify-center gap-2">
                <LoaderIcon class="w-4 h-4 animate-spin" />
                Saving...
              </span>
              <span v-else>
                {{ editingProduct ? 'Save Changes' : 'Add Product' }}
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
          <h3 class="text-xl font-bold text-gray-900 text-center mb-2">Delete Product</h3>
          <p class="text-gray-600 text-center mb-6">
            Are you sure you want to delete {{ selectedProduct?.name }}? This action cannot be undone.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-3">
            <button 
              @click="showDeleteModal = false"
              class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors order-2 sm:order-1"
            >
              Cancel
            </button>
            <button 
              @click="deleteProduct"
              class="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 order-1 sm:order-2"
              :disabled="modalLoading"
            >
              <span v-if="modalLoading" class="flex items-center justify-center gap-2">
                <LoaderIcon class="w-5 h-5 animate-spin" />
                Deleting...
              </span>
              <span v-else>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Notification -->
    <div
      v-if="showNotification"
      class="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-[60] transition-all duration-300"
      :class="{
        'opacity-0 pointer-events-none': !showNotification,
        'opacity-100': showNotification
      }"
    >
      <div 
        class="bg-white rounded-xl shadow-2xl border max-w-sm mx-4 transform transition-all duration-300 ease-out"
        :class="{
          'scale-95 opacity-0 translate-y-4': !showNotification,
          'scale-100 opacity-100 translate-y-0': showNotification,
          'border-green-200': notificationType === 'success',
          'border-red-200': notificationType === 'error'
        }"
      >
        <div class="p-6 text-center">
          <div 
            class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
            :class="{
              'bg-green-100': notificationType === 'success',
              'bg-red-100': notificationType === 'error'
            }"
          >
            <CheckCircle2Icon v-if="notificationType === 'success'" class="w-8 h-8 text-green-600" />
            <XCircleIcon v-else class="w-8 h-8 text-red-600" />
          </div>
          <h3 
            class="text-lg font-semibold mb-2"
            :class="{
              'text-green-800': notificationType === 'success',
              'text-red-800': notificationType === 'error'
            }"
          >
            {{ notificationType === 'success' ? 'Success!' : 'Error!' }}
          </h3>
          <p 
            class="text-gray-600 mb-4"
          >
            {{ notificationMessage }}
          </p>
          <button 
            @click="showNotification = false"
            class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Enhanced responsive order modal with better mobile layout -->
    <!-- Order Product Modal -->
    <div v-if="showOrderModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col">
        <div class="p-4 border-b border-gray-200 flex-shrink-0">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-gray-900">Order Products from Supplier</h3>
            <button 
              @click="closeOrderModal"
              class="p-1 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div class="flex flex-col lg:flex-row flex-1 min-h-0">
          <!-- Left Panel - Create New Order -->
          <div class="w-full lg:w-1/2 p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
            <h4 class="text-md font-semibold text-gray-800 mb-4">Create New Order</h4>
            <form @submit.prevent="handleOrderSubmit" class="space-y-4">
              <!-- Product Selection -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Select Product</label>
                <select 
                  v-model="orderForm.productId"
                  @change="updateSelectedProduct"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm"
                >
                  <option value="">Choose a product...</option>
                  <option v-for="product in products" :key="product.id" :value="product.id">
                    {{ product.name }} ({{ product.sku }}) - Current Stock: {{ product.stockLevel }}
                  </option>
                </select>
              </div>

              <!-- Supplier Name Field -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Supplier Name</label>
                <input 
                  type="text"
                  v-model="orderForm.supplierName"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                  placeholder="Enter supplier name (e.g., Davies Paints Philippines)"
                />
              </div>

              <!-- Quantity -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Order Quantity</label>
                <input 
                  type="number"
                  v-model="orderForm.quantity"
                  required
                  min="1"
                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                  placeholder="Enter quantity to order"
                />
              </div>

              <!-- Status -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Order Status</label>
                <select 
                  v-model="orderForm.status"
                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm"
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>

              <button 
                type="submit"
                class="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg text-sm"
                :disabled="modalLoading"
              >
                <span v-if="modalLoading" class="flex items-center justify-center gap-2">
                  <LoaderIcon class="w-4 h-4 animate-spin" />
                  Creating Order...
                </span>
                <span v-else>Create Order</span>
              </button>
            </form>
          </div>

          <!-- Right Panel - Orders List -->
          <div class="w-full lg:w-1/2 p-4 flex flex-col">
            <h4 class="text-md font-semibold text-gray-800 mb-4">Current Orders</h4>
            <div class="flex-1 overflow-y-auto space-y-3">
              <div v-if="orders.length === 0" class="text-center py-8 text-gray-500">
                No orders yet. Create your first order!
              </div>
              <div v-for="order in orders" :key="order.id" class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <div class="flex-1">
                    <p class="font-medium text-gray-900">{{ order.productName }}</p>
                    <p class="text-sm text-gray-600">Supplier: {{ order.supplierName }}</p>
                    <p class="text-sm text-gray-600">Quantity: {{ order.quantity }}</p>
                    <p class="text-xs text-gray-500">{{ formatDate(order.createdAt) }}</p>
                  </div>
                  <div class="flex items-center gap-2 flex-shrink-0">
                    <select 
                      :value="order.status"
                      @change="updateOrderStatus(order.id, $event.target.value)"
                      class="px-2 py-1 rounded text-xs border border-gray-300 bg-white"
                      :class="{
                        'text-orange-700 bg-orange-50 border-orange-200': order.status === 'incomplete',
                        'text-green-700 bg-green-50 border-green-200': order.status === 'delivered'
                      }"
                    >
                      <option value="incomplete">Incomplete</option>
                      <option value="delivered">Delivered</option>
                    </select>
                    <button 
                      @click="deleteOrder(order.id)"
                      class="p-1 hover:bg-red-50 rounded text-red-600 hover:text-red-700 transition-colors"
                      title="Delete Order"
                    >
                      <Trash2Icon class="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span 
                    class="px-2 py-1 rounded-full text-xs"
                    :class="{
                      'bg-orange-100 text-orange-800': order.status === 'incomplete',
                      'bg-green-100 text-green-800': order.status === 'delivered'
                    }"
                  >
                    <TruckIcon class="w-3 h-3 inline mr-1" />
                    {{ order.status === 'incomplete' ? 'Pending Delivery' : 'Delivered' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced responsive image editor modal -->
    <!-- Simplified image editor modal with side handle cropping -->
    <div v-if="showImageEditor" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg p-4 sm:p-6 w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">Crop Image</h3>
          <button @click="closeImageEditor" class="text-gray-500 hover:text-gray-700">
            <XIcon class="w-6 h-6" />
          </button>
        </div>
        
        <div class="space-y-4">
          <!-- Crop area -->
          <div class="relative border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
            <div class="relative inline-block">
              <img 
                ref="cropImage"
                :src="currentImage"
                class="max-w-full max-h-96 block"
                @load="initializeCropHandles"
              />
              
              <!-- Crop overlay with side handles -->
              <div 
                class="absolute border-2 border-blue-500 bg-blue-500 bg-opacity-10"
                :style="{
                  left: cropBounds.left + 'px',
                  top: cropBounds.top + 'px',
                  width: cropBounds.width + 'px',
                  height: cropBounds.height + 'px'
                }"
              >
                <!-- Handles for cropping -->
                <div 
                  class="absolute w-full h-2 bg-blue-500 cursor-ns-resize -top-1"
                  @mousedown="startResize('top', $event)"
                ></div>
                <div 
                  class="absolute w-full h-2 bg-blue-500 cursor-ns-resize -bottom-1"
                  @mousedown="startResize('bottom', $event)"
                ></div>
                <div 
                  class="absolute h-full w-2 bg-blue-500 cursor-ew-resize -left-1"
                  @mousedown="startResize('left', $event)"
                ></div>
                <div 
                  class="absolute h-full w-2 bg-blue-500 cursor-ew-resize -right-1"
                  @mousedown="startResize('right', $event)"
                ></div>
                <div 
                  class="absolute w-3 h-3 bg-blue-600 cursor-nw-resize -top-1 -left-1"
                  @mousedown="startResize('top-left', $event)"
                ></div>
                <div 
                  class="absolute w-3 h-3 bg-blue-600 cursor-ne-resize -top-1 -right-1"
                  @mousedown="startResize('top-right', $event)"
                ></div>
                <div 
                  class="absolute w-3 h-3 bg-blue-600 cursor-sw-resize -bottom-1 -left-1"
                  @mousedown="startResize('bottom-left', $event)"
                ></div>
                <div 
                  class="absolute w-3 h-3 bg-blue-600 cursor-se-resize -bottom-1 -right-1"
                  @mousedown="startResize('bottom-right', $event)"
                ></div>
              </div>
            </div>
          </div>
          
          <!-- Crop controls -->
          <div class="flex flex-col sm:flex-row gap-3">
            <button 
              @click="applyCropImage"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Apply Crop
            </button>
            <button 
              @click="resetCropImage"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Reset
            </button>
          </div>

          <!-- Action buttons -->
          <div class="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t">
            <button 
              @click="closeImageEditor"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 order-2 sm:order-1"
            >
              Cancel
            </button>
            <button 
              @click="saveImageChanges"
              class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 order-1 sm:order-2"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy,
  onSnapshot,
  where,
  serverTimestamp,
  getDoc
} from 'firebase/firestore'
import { db } from '../../config/firebase'
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
  Plus as PlusIcon,
  AlertTriangle as AlertTriangleIcon,
  XCircle as XCircleIcon,
  DollarSign as DollarSignIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Loader as LoaderIcon,
  RefreshCw as RefreshCwIcon,
  CheckCircle2 as CheckCircle2Icon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  ShoppingCart as ShoppingCartIcon,
  Truck as TruckIcon,
  Upload as UploadIcon,
  Image as ImageIcon,
  BarChart3 as BarChart3Icon
} from 'lucide-vue-next'

// Router hooks - always at top level
const router = useRouter()
const route = useRoute()

// Core state references - all declared at top level
const loading = ref(false)
const showAddModal = ref(false)
const showDeleteModal = ref(false)
const editingProduct = ref(null)
const selectedProduct = ref(null)
const searchQuery = ref('')
const filterCategory = ref('')
const filterStock = ref('')
const currentPage = ref(1)
const perPage = ref(10)
const mobileSidebarOpen = ref(false)
const error = ref(null)
const unsubscribe = ref(null)
const showNotification = ref(false)
const notificationMessage = ref('')
const notificationType = ref('success')
const stockUpdateInProgress = ref(false)
const modalLoading = ref(false)
const showOrderModal = ref(false)
const orders = ref([])
const products = ref([])

// Image handling references - all declared at top level
const imagePreview = ref('')
const imageInput = ref(null)
const showImageEditor = ref(false)
const imageCanvas = ref(null)
const originalImage = ref(null)
const currentImage = ref(null)
const editorCanvas = ref(null)
const cropImage = ref(null)

// Image adjustment references - all declared at top level
const imageAdjustments = ref({
  brightness: 100,
  contrast: 100,
  saturation: 100,
  rotation: 0
})

// Crop area references - all declared at top level
const cropArea = ref({
  active: false,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  startX: 0,
  startY: 0,
  isDragging: false,
  endX: 0,
  endY: 0
})

// Crop bounds for side handle cropping - all declared at top level
const cropBounds = ref({
  left: 0,
  top: 0,
  width: 0,
  height: 0
})

// Resize state references - all declared at top level
const isResizing = ref(false)
const resizeDirection = ref('')
const startMousePos = ref({ x: 0, y: 0 })
const startBounds = ref({ left: 0, top: 0, width: 0, height: 0 })

// Form state references - all declared at top level
const productForm = ref({
  name: '',
  sku: '',
  category: 'interior',
  price: 0,
  unitPrice: 0,
  stockLevel: 0,
  image: ''
})

const orderForm = ref({
  productId: '',
  productName: '',
  supplierName: '',
  quantity: 0,
  status: 'incomplete'
})

// Constants - declared at top level
const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// Products collection reference - declared at top level with null check
const productsRef = db ? collection(db, 'products') : null

// Computed properties - all declared at top level
const filteredProducts = computed(() => {
  let filtered = [...products.value]

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.sku?.toLowerCase().includes(query)
    )
  }

  if (filterCategory.value) {
    filtered = filtered.filter(product => product.category === filterCategory.value)
  }

  if (filterStock.value) {
    switch (filterStock.value) {
      case 'in-stock':
        filtered = filtered.filter(product => product.stockLevel > 10)
        break
      case 'low-stock':
        filtered = filtered.filter(product => product.stockLevel > 0 && product.stockLevel <= 10)
        break
      case 'out-of-stock':
        filtered = filtered.filter(product => product.stockLevel === 0)
        break
    }
  }

  return filtered
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + parseInt(perPage.value)
  return filteredProducts.value.slice(start, end)
})

const totalProducts = computed(() => products.value.length)
const lowStockCount = computed(() => products.value.filter(p => p.stockLevel > 0 && p.stockLevel <= 10).length)
const outOfStockCount = computed(() => products.value.filter(p => p.stockLevel === 0).length)
const totalValue = computed(() => products.value.reduce((sum, product) => sum + (product.price * product.stockLevel), 0))
const totalUnitPriceValue = computed(() => products.value.reduce((sum, product) => sum + ((product.unitPrice || 0) * product.stockLevel), 0))

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / perPage.value) || 1)
const paginationStart = computed(() => filteredProducts.value.length ? ((currentPage.value - 1) * perPage.value) + 1 : 0)
const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, filteredProducts.value.length))

// Utility functions - all declared at top level
const isActive = (path) => {
  return route.path === path
}

// Image handling methods
const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      error.value = 'Please select a valid image file'
      return
    }
    
    if (file.size > 100 * 1024 * 1024) {
      error.value = 'Image size must be less than 100MB'
      return
    }
    
    const reader = new FileReader()
    reader.onload = (e) => {
      const base64Image = e.target.result
      productForm.value.image = base64Image
      imagePreview.value = base64Image
      originalImage.value = base64Image
      currentImage.value = base64Image
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = () => {
  productForm.value.image = ''
  imagePreview.value = ''
  if (imageInput.value) {
    imageInput.value.value = ''
  }
}

// Database methods
const fetchProducts = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    // Ensure db is properly initialized
    if (!db || !productsRef) {
      throw new Error('Database not initialized');
    }

    // Create query with error handling
    const q = query(productsRef);
    
    // Set up real-time listener
    if (unsubscribe.value) {
      unsubscribe.value();
    }

    unsubscribe.value = onSnapshot(
      q,
      (snapshot) => {
        products.value = snapshot.docs.map(doc => {
          const data = doc.data();
          // Ensure we use the correct stock value (check both fields)
          const stockValue = data.stock !== undefined ? Number(data.stock) : 
                            data.stockLevel !== undefined ? Number(data.stockLevel) : 0;
          
          return {
            id: doc.id,
            ...data,
            price: Number(data.price) || 0,
            unitPrice: Number(data.unitPrice) || 0,
            stockLevel: stockValue,
            stock: stockValue
          };
        });
        
        loading.value = false;
        error.value = null;
        console.log('Fetched products with real-time updates:', products.value);
      },
      (err) => {
        console.error('Firestore error:', err);
        loading.value = false;
        error.value = 'Unable to connect to database. Please try again.';
        products.value = [];
      }
    );
  } catch (err) {
    console.error('Error in fetchProducts:', err);
    loading.value = false;
    error.value = 'Database connection failed. Please refresh the page.';
    products.value = [];
  }
};

// Update product stock level
const updateProductStock = async (productId, newStockLevel) => {
  try {
    if (stockUpdateInProgress.value) {
      console.log('Stock update already in progress, skipping...')
      return false
    }
    
    stockUpdateInProgress.value = true
    
    // Get the product document reference
    const productRef = doc(db, 'products', productId)
    
    // Get current product data to ensure we have the latest
    const productDoc = await getDoc(productRef)
    if (!productDoc.exists()) {
      throw new Error(`Product with ID ${productId} not found`)
    }
    
    // Get current product data
    const productData = productDoc.data()
    
    // Ensure stock level is a number and not negative
    const updatedStockLevel = Math.max(0, Number(newStockLevel))
    
    // Update both stockLevel and stock fields for compatibility
    await updateDoc(productRef, {
      stockLevel: updatedStockLevel,
      stock: updatedStockLevel, // Update 'stock' field used by sales component
      updatedAt: serverTimestamp()
    })
    
    console.log(`Stock updated for product ${productId}: ${updatedStockLevel}`)
    
    // Show notification
    notificationMessage.value = `Stock updated for ${productData.name}`
    notificationType.value = 'success'
    showNotification.value = true
    
    // Auto hide notification after 3 seconds
    setTimeout(() => {
      showNotification.value = false
    }, 3000)
    
    return true
  } catch (err) {
    console.error('Error updating product stock:', err)
    
    // Show error notification
    notificationMessage.value = `Failed to update stock: ${err.message}`
    notificationType.value = 'error'
    showNotification.value = true
    
    return false
  } finally {
    stockUpdateInProgress.value = false
  }
}

// Filter methods
const filterByLowStock = () => {
  filterStock.value = 'low-stock'
  searchQuery.value = ''
  filterCategory.value = ''
  currentPage.value = 1
  
  // Show notification
  notificationMessage.value = `Showing ${lowStockCount.value} low stock items`
  notificationType.value = 'success'
  showNotification.value = true
  
  setTimeout(() => {
    showNotification.value = false
  }, 3000)
}

const filterByOutOfStock = () => {
  filterStock.value = 'out-of-stock'
  searchQuery.value = ''
  filterCategory.value = ''
  currentPage.value = 1
  
  // Show notification
  notificationMessage.value = `Showing ${outOfStockCount.value} out of stock items`
  notificationType.value = 'success'
  showNotification.value = true
  
  setTimeout(() => {
    showNotification.value = false
  }, 3000)
}

const clearAllFilters = () => {
  filterStock.value = ''
  searchQuery.value = ''
  filterCategory.value = ''
  currentPage.value = 1
  
  // Show notification
  notificationMessage.value = `Showing all ${totalProducts.value} products`
  notificationType.value = 'success'
  showNotification.value = true
  
  setTimeout(() => {
    showNotification.value = false
  }, 3000)
}

// Form submission methods
const handleSubmit = async () => {
  try {
    modalLoading.value = true
    error.value = null
    
    if (!db) {
      throw new Error('Firestore is not initialized')
    }
    
    const productData = {
      ...productForm.value,
      price: Number(productForm.value.price),
      unitPrice: Number(productForm.value.unitPrice),
      stockLevel: Number(productForm.value.stockLevel),
      stock: Number(productForm.value.stockLevel),
      // Include image in product data
      image: productForm.value.image
    }
    
    console.log('Submitting product data:', productData)
    
    if (editingProduct.value) {
      // Update existing product
      const productRef = doc(db, 'products', editingProduct.value.id)
      await updateDoc(productRef, {
        ...productData,
        updatedAt: serverTimestamp()
      })
      showSuccessNotification('Product updated successfully!')
    } else {
      // Add new product
      const docRef = await addDoc(productsRef, {
        ...productData,
        createdAt: serverTimestamp()
      })
      showSuccessNotification('Product added successfully!')
    }
    
    closeModal()
  } catch (err) {
    console.error('Error saving product:', err)
    error.value = 'Failed to save product. Please try again.'
    notificationMessage.value = 'Failed to save product'
    notificationType.value = 'error'
    showNotification.value = true
  } finally {
    modalLoading.value = false
  }
}

const editProduct = (product) => {
  editingProduct.value = product
  productForm.value = { ...product }
  imagePreview.value = product.image || ''
  showAddModal.value = true
}

const confirmDelete = (product) => {
  selectedProduct.value = product
  showDeleteModal.value = true
}

const deleteProduct = async () => {
  try {
    modalLoading.value = true
    error.value = null
    
    // Delete product from Firestore
    const productRef = doc(db, 'products', selectedProduct.value.id)
    await deleteDoc(productRef)
    
    showDeleteModal.value = false
    showSuccessNotification('Product deleted successfully!')
  } catch (err) {
    console.error('Error deleting product:', err)
    error.value = 'Failed to delete product'
    notificationMessage.value = 'Failed to delete product'
    notificationType.value = 'error'
    showNotification.value = true
  } finally {
    modalLoading.value = false
  }
}

const closeModal = () => {
  showAddModal.value = false
  editingProduct.value = null
  error.value = null
  imagePreview.value = ''
  if (imageInput.value) {
    imageInput.value.value = ''
  }
  productForm.value = {
    name: '',
    sku: '',
    category: 'interior',
    price: 0,
    unitPrice: 0,
    stockLevel: 0,
    image: ''
  }
}

const showSuccessNotification = (message) => {
  notificationMessage.value = message
  notificationType.value = 'success'
  showNotification.value = true

  // Auto hide after 4 seconds (longer for better UX)
  setTimeout(() => {
    showNotification.value = false
  }, 4000)
}

const getStockLevelClass = (stockLevel) => {
  if (stockLevel === 0) return 'bg-red-100 text-red-800 border border-red-200'
  if (stockLevel <= 10) return 'bg-amber-100 text-amber-800 border border-amber-200'
  return 'bg-green-100 text-green-800 border border-green-200'
}

const formatStockLevel = (stockLevel) => {
  if (stockLevel === 0) return 'Out of Stock'
  if (stockLevel <= 10) return `Low Stock (${stockLevel})`
  return `In Stock (${stockLevel})`
}

const formatCategory = (category) => {
  const categories = {
    interior: 'Interior Paint',
    exterior: 'Exterior Paint',
    primer: 'Primers',
    specialty: 'Specialty Paints'
  }
  return categories[category] || category
}

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

const handleLogout = () => {
  router.push('/admin')
}

// Order management methods
const fetchOrders = async () => {
  try {
    if (!db) {
      console.log('Database not initialized, skipping orders fetch');
      return;
    }
    
    console.log('Setting up orders listener...');
    const ordersCollection = collection(db, 'orders');
    const q = query(ordersCollection, orderBy('createdAt', 'desc'));
    
    // Set up real-time listener with better error handling
    const unsubscribeOrders = onSnapshot(q, 
      (snapshot) => {
        console.log('Orders snapshot received, docs count:', snapshot.docs.length);
        orders.value = snapshot.docs.map(doc => {
          const data = doc.data();
          console.log('Order data:', data);
          return {
            id: doc.id,
            ...data,
            // Handle different timestamp formats
            createdAt: data.createdAt || new Date(),
            updatedAt: data.updatedAt || new Date()
          };
        });
        console.log('Orders updated:', orders.value);
      }, 
      (error) => {
        console.error('Error in orders listener:', error);
        // If it's a permission error or collection doesn't exist, try without orderBy
        if (error.code === 'failed-precondition' || error.code === 'permission-denied') {
          console.log('Trying to fetch orders without orderBy...');
          const simpleQuery = collection(db, 'orders');
          const fallbackUnsubscribe = onSnapshot(simpleQuery, 
            (snapshot) => {
              console.log('Fallback orders snapshot received:', snapshot.docs.length);
              orders.value = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt || new Date(),
                updatedAt: doc.data().updatedAt || new Date()
              }));
              console.log('Fallback orders loaded:', orders.value);
            },
            (fallbackError) => {
              console.error('Fallback orders error:', fallbackError);
              orders.value = [];
            }
          );
        } else {
          orders.value = [];
        }
      }
    );
    
    // Store unsubscribe function for cleanup
    window.ordersUnsubscribe = unsubscribeOrders;
    
  } catch (err) {
    console.error('Error setting up orders listener:', err);
    orders.value = [];
  }
};

const handleOrderSubmit = async () => {
  try {
    modalLoading.value = true;
    
    if (!orderForm.value.productId || !orderForm.value.quantity || !orderForm.value.supplierName) {
      throw new Error('Please fill in all required fields including supplier name');
    }

    // Ensure db and ordersRef are available
    if (!db) {
      throw new Error('Database not initialized');
    }

    // Create orders collection reference if it doesn't exist
    const ordersCollection = collection(db, 'orders');

    const orderData = {
      productId: orderForm.value.productId,
      productName: orderForm.value.productName,
      supplierName: orderForm.value.supplierName,
      quantity: Number(orderForm.value.quantity),
      status: orderForm.value.status,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    console.log('Creating order with data:', orderData);

    // Add order to Firestore
    const docRef = await addDoc(ordersCollection, orderData);
    console.log('Order created with ID:', docRef.id);

    // If status is delivered, update product stock immediately
    if (orderForm.value.status === 'delivered') {
      await updateProductStockFromOrder(orderForm.value.productId, Number(orderForm.value.quantity));
    }

    showSuccessNotification('Order created successfully!');
    resetOrderForm();
  } catch (err) {
    console.error('Error creating order:', err);
    
    // More specific error messages
    let errorMessage = 'Failed to create order';
    if (err.code === 'permission-denied') {
      errorMessage = 'Permission denied. Please check Firestore security rules.';
    } else if (err.message) {
      errorMessage = err.message;
    }
    
    notificationMessage.value = errorMessage;
    notificationType.value = 'error';
    showNotification.value = true;
  } finally {
    modalLoading.value = false;
  }
};

const updateSelectedProduct = () => {
  const selectedProduct = products.value.find(p => p.id === orderForm.value.productId);
  if (selectedProduct) {
    orderForm.value.productName = selectedProduct.name;
  }
};

const updateOrderStatus = async (orderId, newStatus) => {
  try {
    if (!db) {
      throw new Error('Database not initialized');
    }

    const orderRef = doc(db, 'orders', orderId);
    const order = orders.value.find(o => o.id === orderId);
    
    await updateDoc(orderRef, {
      status: newStatus,
      updatedAt: new Date()
    });

    // If changing to delivered, update product stock
    if (newStatus === 'delivered' && order.status === 'incomplete') {
      await updateProductStockFromOrder(order.productId, order.quantity);
      showSuccessNotification(`Order delivered! Stock updated for ${order.productName}`);
    }
  } catch (err) {
    console.error('Error updating order status:', err);
    notificationMessage.value = 'Failed to update order status: ' + (err.message || 'Unknown error');
    notificationType.value = 'error';
    showNotification.value = true;
  }
};

const updateProductStockFromOrder = async (productId, quantity) => {
  try {
    const productRef = doc(db, 'products', productId);
    const productDoc = await getDoc(productRef);
    
    if (productDoc.exists()) {
      const currentStock = productDoc.data().stockLevel || 0;
      const newStock = currentStock + quantity;
      
      await updateDoc(productRef, {
        stockLevel: newStock,
        stock: newStock,
        updatedAt: serverTimestamp()
      });
    }
  } catch (err) {
    console.error('Error updating product stock from order:', err);
    throw err;
  }
};

const deleteOrder = async (orderId) => {
  try {
    const orderRef = doc(db, 'orders', orderId);
    await deleteDoc(orderRef);
    showSuccessNotification('Order deleted successfully!');
  } catch (err) {
    console.error('Error deleting order:', err);
    notificationMessage.value = 'Failed to delete order';
    notificationType.value = 'error';
    showNotification.value = true;
  }
};

const closeOrderModal = () => {
  showOrderModal.value = false;
  resetOrderForm();
};

const resetOrderForm = () => {
  orderForm.value = {
    productId: '',
    productName: '',
    supplierName: '',
    quantity: 0,
    status: 'incomplete'
  };
};

const formatDate = (timestamp) => {
  if (!timestamp) return '';
  
  let date;
  if (timestamp.toDate) {
    // Firestore Timestamp
    date = timestamp.toDate();
  } else if (timestamp instanceof Date) {
    // Regular Date object
    date = timestamp;
  } else {
    // String or other format
    date = new Date(timestamp);
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const openImageEditor = () => {
  if (imagePreview.value) {
    currentImage.value = imagePreview.value
    originalImage.value = imagePreview.value
    showImageEditor.value = true
    // Initialize crop bounds after modal opens
    nextTick(() => {
      initializeCropHandles()
    })
  }
}

const initializeCropHandles = () => {
  if (!cropImage.value) return
  
  const img = cropImage.value
  const rect = img.getBoundingClientRect()
  
  // Set initial crop bounds to cover the entire image
  cropBounds.value = {
    left: 0,
    top: 0,
    width: img.offsetWidth,
    height: img.offsetHeight
  }
}

const startResize = (direction, event) => {
  event.preventDefault()
  isResizing.value = true
  resizeDirection.value = direction
  startMousePos.value = { x: event.clientX, y: event.clientY }
  startBounds.value = { ...cropBounds.value }
  
  document.addEventListener('mousemove', handleResize)
  document.addEventListener('mouseup', stopResize)
}

const handleResize = (event) => {
  if (!isResizing.value) return
  
  const deltaX = event.clientX - startMousePos.value.x
  const deltaY = event.clientY - startMousePos.value.y
  const img = cropImage.value
  
  if (!img) return
  
  const imgWidth = img.offsetWidth
  const imgHeight = img.offsetHeight
  
  let newBounds = { ...startBounds.value }
  
  switch (resizeDirection.value) {
    case 'top':
      newBounds.top = Math.max(0, Math.min(startBounds.value.top + deltaY, startBounds.value.top + startBounds.value.height - 20))
      newBounds.height = startBounds.value.height - (newBounds.top - newBounds.value.top)
      break
    case 'bottom':
      newBounds.height = Math.max(20, Math.min(startBounds.value.height + deltaY, imgHeight - startBounds.value.top))
      break
    case 'left':
      newBounds.left = Math.max(0, Math.min(startBounds.value.left + deltaX, startBounds.value.left + startBounds.value.width - 20))
      newBounds.width = startBounds.value.width - (newBounds.left - newBounds.value.left)
      break
    case 'right':
      newBounds.width = Math.max(20, Math.min(startBounds.value.width + deltaX, imgWidth - startBounds.value.left))
      break
    case 'top-left':
      newBounds.top = Math.max(0, Math.min(startBounds.value.top + deltaY, startBounds.value.top + startBounds.value.height - 20))
      newBounds.left = Math.max(0, Math.min(startBounds.value.left + deltaX, startBounds.value.left + startBounds.value.width - 20))
      newBounds.height = startBounds.value.height - (newBounds.top - newBounds.top)
      newBounds.width = startBounds.value.width - (newBounds.left - newBounds.left)
      break
    case 'top-right':
      newBounds.top = Math.max(0, Math.min(startBounds.value.top + deltaY, startBounds.value.top + startBounds.value.height - 20))
      newBounds.height = startBounds.value.height - (newBounds.top - newBounds.top)
      newBounds.width = Math.max(20, Math.min(startBounds.value.width + deltaX, imgWidth - startBounds.value.left))
      break
    case 'bottom-left':
      newBounds.left = Math.max(0, Math.min(startBounds.value.left + deltaX, startBounds.value.left + startBounds.value.width - 20))
      newBounds.width = startBounds.value.width - (newBounds.left - newBounds.left)
      newBounds.height = Math.max(20, Math.min(startBounds.value.height + deltaY, imgHeight - startBounds.value.top))
      break
    case 'bottom-right':
      newBounds.width = Math.max(20, Math.min(startBounds.value.width + deltaX, imgWidth - startBounds.value.left))
      newBounds.height = Math.max(20, Math.min(startBounds.value.height + deltaY, imgHeight - startBounds.value.top))
      break
  }
  
  cropBounds.value = newBounds
}

const stopResize = () => {
  isResizing.value = false
  resizeDirection.value = ''
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
}

const applyCropImage = () => {
  if (!cropImage.value || !currentImage.value) return
  
  const img = cropImage.value
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  // Calculate the actual image dimensions vs displayed dimensions
  const scaleX = img.naturalWidth / img.offsetWidth
  const scaleY = img.naturalHeight / img.offsetHeight
  
  // Set canvas size to crop area
  canvas.width = cropBounds.value.width * scaleX
  canvas.height = cropBounds.value.height * scaleY
  
  // Create image object to draw from
  const sourceImg = new Image()
  sourceImg.onload = () => {
    // Draw the cropped portion
    ctx.drawImage(
      sourceImg,
      cropBounds.value.left * scaleX,
      cropBounds.value.top * scaleY,
      cropBounds.value.width * scaleX,
      cropBounds.value.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    )
    
    // Update the current image with cropped version
    currentImage.value = canvas.toDataURL('image/jpeg', 0.9)
    
    // Reset crop bounds to full image
    initializeCropHandles()
  }
  sourceImg.src = currentImage.value
}

const resetCropImage = () => {
  currentImage.value = originalImage.value
  initializeCropHandles()
}

const saveImageChanges = () => {
  // Update form and preview with final image
  productForm.value.image = currentImage.value
  imagePreview.value = currentImage.value
  closeImageEditor()
}

const closeImageEditor = () => {
  showImageEditor.value = false
  // Reset image adjustments
  imageAdjustments.value = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    rotation: 0
  }
  // Reset crop bounds
  cropBounds.value = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }
}

// Lifecycle hooks - declared at top level
onMounted(() => {
  console.log('Component mounted, initializing...');
  fetchProducts().catch(err => {
    console.error('Mount error:', err)
    error.value = 'Failed to initialize inventory. Please refresh the page.'
  });
  
  // Add a small delay to ensure Firebase is ready
  setTimeout(() => {
    fetchOrders();
  }, 1000);
})

// Clean up listeners on component unmount
onUnmounted(() => {
  if (unsubscribe.value) {
    unsubscribe.value()
  }
  if (window.ordersUnsubscribe) {
    window.ordersUnsubscribe()
  }
})

// Export methods for other components to use
defineExpose({
  updateProductStock
})

</script>

<style scoped>
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

/* Enhanced hover effects and responsive touch interactions */
/* Add hover effect for clickable cards */
.cursor-pointer:hover {
  transform: translateY(-2px) scale(1.02);
}

/* Enhanced mobile touch interactions */
@media (max-width: 1024px) {
  .cursor-pointer:active {
    transform: translateY(0) scale(0.98);
  }
  
  /* Better touch targets for mobile */
  button {
    min-height: 44px;
  }
  
  /* Improved mobile table spacing */
  .lg\:hidden .p-4 {
    padding: 1rem;
  }
}

/* Responsive text scaling */
@media (max-width: 640px) {
  .text-xl {
    font-size: 1.125rem;
  }
  
  .text-2xl {
    font-size: 1.25rem;
  }
}
</style>
