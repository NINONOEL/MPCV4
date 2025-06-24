<template>
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
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 shadow-sm border border-blue-200"
            :class="{ 'transform scale-105': $route.path === '/admin/dashboard' }"
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
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': $route.path === '/admin/house-paint-recommender' }"
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

          <!-- Perfect spacing - just enough to ensure user section is accessible -->
          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail }}</p>
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
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50"
            :class="{ 'shadow-sm border border-orange-200': $route.path === '/admin/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50"
            :class="{ 'shadow-sm border border-pink-200': $route.path === '/admin/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50"
            :class="{ 'shadow-sm border border-teal-200': $route.path === '/admin/sales-analytics' }"
            @click="mobileSidebarOpen = false"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50"
            :class="{ 'shadow-sm border border-indigo-200': $route.path === '/admin/reports' }"
            @click="mobileSidebarOpen = false"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50"
            :class="{ 'shadow-sm border border-amber-200': $route.path === '/admin/settings' }"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50"
            :class="{ 'shadow-sm border border-red-200': $route.path === '/admin/security' }"
            @click="mobileSidebarOpen = false"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>

          <!-- Perfect spacing for mobile too -->
          <div class="h-4"></div>
        </nav>

        <!-- Mobile User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail }}</p>
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

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Header -->
        <header class="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-8 py-4 shadow-sm">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p class="text-gray-600">Welcome to your admin dashboard</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-blue-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900">Welcome, {{ userDisplayName || 'Admin' }}</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-6 md:p-8">
          <!-- Welcome Section -->
          <div class="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl shadow-lg p-6 mb-6 border-l-4 border-l-blue-500">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div class="flex items-center space-x-2 mb-2">
                  <h2 class="text-xl font-bold text-gray-900">Welcome to your Dashboard!</h2>
                  <span class="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full border-0">New</span>
                </div>
                <p class="text-gray-600">Get started by setting up your paint store.</p>
              </div>
              <button 
                @click="showSetupGuide = true"
                class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Setup Guide
              </button>
            </div>
          </div>

          <!-- Dashboard Summary Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- Total Sales Card -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-900">Total Sales</h3>
                  <div class="p-2 rounded-xl shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                    <DollarSignIcon class="h-5 w-5 text-white" />
                  </div>
                </div>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-3xl font-bold text-gray-900">₱{{ totalSales.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
                    <p class="text-sm text-gray-600">{{ salesStatus }}</p>
                    <span class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full border border-green-200">+12.5%</span>
                  </div>
                  <div class="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                    <ArrowRightIcon class="w-4 h-4 mr-1" />
                    <span class="text-sm font-medium">Start selling</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Orders Card -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-900">Orders</h3>
                  <div class="p-2 rounded-xl shadow-lg bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <ShoppingCartIcon class="h-5 w-5 text-white" />
                  </div>
                </div>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-3xl font-bold text-gray-900">{{ totalOrders }}</p>
                    <p class="text-sm text-gray-600">{{ totalOrders === 0 ? 'No orders yet' : 'Orders processed' }}</p>
                    <span class="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full border border-blue-200">+3</span>
                  </div>
                  <div class="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                    <ClipboardIcon class="w-4 h-4 mr-1" />
                    <span class="text-sm font-medium">Create order</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Products Card -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-900">Products</h3>
                  <div class="p-2 rounded-xl shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                    <PackageIcon class="h-5 w-5 text-white" />
                  </div>
                </div>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-3xl font-bold text-gray-900">{{ totalProducts }}</p>
                    <p class="text-sm text-gray-600">Total products</p>
                    <span class="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full border border-gray-200">New</span>
                  </div>
                  <div class="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                    <PackagePlusIcon class="w-4 h-4 mr-1" />
                    <span class="text-sm font-medium">Add product</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Staff Card -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-orange-400 via-amber-500 to-red-500 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-900">Staff</h3>
                  <div class="p-2 rounded-xl shadow-lg bg-gradient-to-br from-orange-400 via-amber-500 to-red-500 transform hover:scale-110 transition-transform duration-200">
                    <UsersIcon class="h-5 w-5 text-white" />
                  </div>
                </div>
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-3xl font-bold text-gray-900">{{ totalStaff }}</p>
                    <p class="text-sm text-gray-600">Total staff members</p>
                    <span class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full border border-green-200">Active</span>
                  </div>
                  <div class="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                    <UserPlusIcon class="w-4 h-4 mr-1" />
                    <span class="text-sm font-medium">Add staff</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Getting Started Section -->
          <div class="mt-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900">Getting Started</h2>
              <span class="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full border-0">2 of 3 completed</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Add Products Card -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 relative overflow-hidden">
                <div class="p-6 text-center relative">
                  <div class="absolute top-4 right-4">
                    <span class="bg-gray-100 text-gray-800 border border-gray-200 text-xs font-semibold px-2 py-1 rounded-full">○</span>
                  </div>
                  <div class="flex justify-center mb-6">
                    <div class="w-12 h-12 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200">
                      <PackageIcon class="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">1. Add Products</h3>
                  <p class="text-sm text-gray-600 mb-4">Start by adding your paint products to the inventory</p>
                  <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div class="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 h-2 rounded-full transition-all duration-500" style="width: 0%"></div>
                  </div>
                  <router-link 
                    to="/admin/inventory" 
                    class="bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full text-center inline-block"
                  >
                    Add Products
                  </router-link>
                </div>
              </div>

              <!-- Add Staff Card -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 relative overflow-hidden">
                <div class="p-6 text-center relative">
                  <div class="absolute top-4 right-4">
                    <span class="bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs font-semibold px-2 py-1 rounded-full">⏳</span>
                  </div>
                  <div class="flex justify-center mb-6">
                    <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200">
                      <UsersIcon class="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">2. Add Staff</h3>
                  <p class="text-sm text-gray-600 mb-4">Create accounts for your staff members</p>
                  <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div class="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500" style="width: 60%"></div>
                  </div>
                  <router-link 
                    to="/admin/staff" 
                    class="bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full text-center inline-block"
                  >
                    Manage Staff
                  </router-link>
                </div>
              </div>

              <!-- Configure Settings Card -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 relative overflow-hidden">
                <div class="p-6 text-center relative">
                  <div class="absolute top-4 right-4">
                    <span class="bg-green-100 text-green-800 border border-green-200 text-xs font-semibold px-2 py-1 rounded-full">✓</span>
                  </div>
                  <div class="flex justify-center mb-6">
                    <div class="w-12 h-12 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200">
                      <SettingsIcon class="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">3. Configure Settings</h3>
                  <p class="text-sm text-gray-600 mb-4">Set up your store preferences and system settings</p>
                  <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div class="bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600 h-2 rounded-full transition-all duration-500" style="width: 100%"></div>
                  </div>
                  <router-link 
                    to="/admin/settings" 
                    class="bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full text-center inline-block"
                  >
                    System Settings
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- Setup Guide Modal -->
  <div v-if="showSetupGuide" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-2xl max-h-[80vh] overflow-auto border border-gray-200 shadow-2xl">
      <div class="p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-bold text-gray-900">Setup Guide</h3>
          <button 
            @click="showSetupGuide = false"
            class="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div class="p-6">
        <div class="space-y-6">
          <div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">1. Add Products</h4>
            <p class="text-gray-600 mb-4">Start by adding your paint products to the inventory.</p>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Go to the Inventory page</li>
              <li>Click "Add Product" button</li>
              <li>Fill in the product details (name, category, price, etc.)</li>
              <li>Upload product images if available</li>
              <li>Save the product</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">2. Add Staff Members</h4>
            <p class="text-gray-600 mb-4">Create accounts for your staff members.</p>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Go to the Staff Management page</li>
              <li>Click "Add Staff Member" button</li>
              <li>Fill in the staff details (name, email, role, etc.)</li>
              <li>Set a temporary password</li>
              <li>Save the staff member</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">3. Configure System Settings</h4>
            <p class="text-gray-600 mb-4">Set up your store preferences and system settings.</p>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Go to the System Settings page</li>
              <li>Configure store information (name, address, contact details)</li>
              <li>Set up tax rates and currency preferences</li>
              <li>Configure email notifications</li>
              <li>Save your settings</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">4. Record Sales</h4>
            <p class="text-gray-600 mb-4">Start recording sales and managing orders.</p>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Go to the Sales Analytics page</li>
              <li>Click "Add Sale" button</li>
              <li>Select products and quantities</li>
              <li>Add customer information</li>
              <li>Complete the sale</li>
            </ul>
          </div>
        </div>

        <div class="mt-8 flex justify-end">
          <button 
            @click="showSetupGuide = false"
            class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Logout Confirmation Modal -->
  <div v-if="showLogoutConfirmation" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md border border-gray-200 shadow-2xl p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-4">Confirm Logout</h3>
      <p class="text-gray-700 mb-6">Are you sure you want to log out of your account?</p>
      <div class="flex justify-end gap-3">
        <button 
          @click="showLogoutConfirmation = false"
          class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button 
          @click="confirmLogout"
          class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
          :disabled="isLoggingOut"
        >
          <LoaderIcon v-if="isLoggingOut" class="animate-spin w-4 h-4 mr-2" />
          <span>{{ isLoggingOut ? 'Logging out...' : 'Logout' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
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
  ArrowRight as ArrowRightIcon,
  BarChart as BarChartIcon,
  Activity as ActivityIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  DollarSign as DollarSignIcon,
  ShoppingCart as ShoppingCartIcon,
  Clock as ClockIcon,
  UserPlus as UserPlusIcon,
  AlertTriangle as AlertTriangleIcon,
  PackagePlus as PackagePlusIcon,
  FileText as FileTextIcon,
  CheckCircle as CheckCircleIcon,
  BookOpen as BookOpenIcon,
  Loader as LoaderIcon
} from 'lucide-vue-next'
import { collection, query, getDocs, orderBy } from 'firebase/firestore'
import { db, auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'

const router = useRouter()
const route = useRoute()
const mobileSidebarOpen = ref(false)
const totalSales = ref(0)
const totalProducts = ref(0)
const totalStaff = ref(0)
const totalOrders = ref(0)
const showSetupGuide = ref(false)
const showLogoutConfirmation = ref(false)
const isLoggingOut = ref(false)
const userEmail = ref('')
const userDisplayName = ref('')

// Fetch product count from Firestore
const fetchProductCount = async () => {
  try {
    const productsRef = collection(db, 'products')
    const q = query(productsRef)
    const querySnapshot = await getDocs(q)
    totalProducts.value = querySnapshot.size
    console.log('Fetched product count:', totalProducts.value)
  } catch (err) {
    console.error('Error fetching product count:', err)
  }
}

// Fetch staff count from Firestore
const fetchStaffCount = async () => {
  try {
    const staffRef = collection(db, 'staff')
    const q = query(staffRef)
    const querySnapshot = await getDocs(q)
    totalStaff.value = querySnapshot.size
  } catch (err) {
    console.error('Error fetching staff count:', err)
  }
}

// Fetch sales data from Firestore
const fetchSalesData = async () => {
  try {
    console.log("Fetching sales data for dashboard...")
    
    // Try to fetch from 'sales' collection first (used by AdminSalesAnalytics)
    const salesRef = collection(db, 'sales')
    const salesQuery = query(salesRef, orderBy('date', 'desc'))
    const salesSnapshot = await getDocs(salesQuery)
    
    let salesTotal = 0
    let ordersCount = 0
    
    salesSnapshot.forEach((doc) => {
      const data = doc.data()
      salesTotal += Number(data.total) || 0
      ordersCount++
    })
    
    // If we found sales data, use it
    if (ordersCount > 0) {
      totalSales.value = salesTotal
      totalOrders.value = ordersCount
      console.log(`Fetched sales data from 'sales' collection: ${ordersCount} orders, total: ${salesTotal}`)
      return
    }
    
    // If no data in 'sales', try 'orders' collection as fallback
    const ordersRef = collection(db, 'orders')
    const ordersQuery = query(ordersRef)
    const ordersSnapshot = await getDocs(ordersQuery)
    
    let ordersTotal = 0
    
    ordersSnapshot.forEach((doc) => {
      const data = doc.data()
      ordersTotal += Number(data.totalAmount) || 0
      ordersCount++
    })
    
    totalSales.value = ordersTotal
    totalOrders.value = ordersCount
    console.log(`Fetched sales data from 'orders' collection: ${ordersCount} orders, total: ${ordersTotal}`)
    
  } catch (err) {
    console.error('Error fetching sales data:', err)
  }
}

// Get current user info
const fetchUserInfo = () => {
  const user = auth.currentUser
  if (user) {
    userEmail.value = user.email || ''
    userDisplayName.value = user.displayName || 'Admin'
  }
}

const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

const salesStatus = computed(() => {
  return totalSales.value === 0 ? 'No sales yet' : 'Sales this month'
})

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

// Show logout confirmation dialog
const handleLogout = () => {
  showLogoutConfirmation.value = true
}

// Perform actual logout after confirmation
const confirmLogout = async () => {
  try {
    isLoggingOut.value = true
    
    // Sign out from Firebase Auth
    await signOut(auth)
    console.log('User signed out successfully')
    
    // Redirect to homepage (root path)
    router.push('/')
  } catch (error) {
    console.error('Error signing out:', error)
  } finally {
    isLoggingOut.value = false
    showLogoutConfirmation.value = false
  }
}

// Load data on component mount
onMounted(() => {
  fetchProductCount()
  fetchStaffCount()
  fetchSalesData()
  fetchUserInfo()
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
</style>
