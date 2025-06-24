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
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 shadow-sm border border-teal-200 transform scale-105"
            :class="{ 'hover:bg-teal-100 hover:text-teal-700': $route.path !== '/admin/sales-analytics' }"
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
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 shadow-sm border border-teal-200"
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
      <main class="flex-1 overflow-auto">
        <!-- Header -->
        <header class="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-8 py-4 shadow-sm">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Sales Analytics</h1>
              <p class="text-gray-600">Monitor your sales performance and trends</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-teal-500" />
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

        <div class="p-6 md:p-8">
          <!-- Action Buttons and Date Range -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div class="flex items-center gap-3">
              <!-- Add Sale Button -->
              <button
                @click="showAddSaleModal = true"
                class="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <PlusIcon class="w-5 h-5" />
                Add Sale
              </button>
              
              <!-- Delete All Sales Button -->
              <button
                @click="confirmDeleteAllSales"
                class="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <Trash2Icon class="w-5 h-5" />
                Delete All Sales
              </button>
            </div>
            
            <!-- Date Range Selector -->
            <div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 p-1 shadow-sm">
              <button 
                v-for="range in dateRanges" 
                :key="range.value"
                @click="selectedRange = range.value"
                class="px-3 py-1 rounded-md text-sm transition-colors"
                :class="selectedRange === range.value ? 'bg-teal-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'"
              >
                {{ range.label }}
              </button>
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="loading && !error" class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 mb-6 text-center">
            <LoaderIcon class="w-8 h-8 text-gray-400 animate-spin mx-auto mb-4" />
            <p class="text-gray-600">Loading sales data...</p>
          </div>

          <!-- Error State -->
          <div v-if="error" class="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <AlertTriangleIcon class="w-5 h-5 text-red-600" />
              <span class="text-red-800">{{ error }}</span>
            </div>
            <button 
              @click="fetchSalesData"
              class="text-red-600 hover:text-red-700"
            >
              <RefreshCwIcon class="w-5 h-5" />
            </button>
          </div>

          <!-- Stats Cards -->
          <div v-if="!loading || sales.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- Total Revenue -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                    <DollarSignIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Total Revenue</p>
                    <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(totalRevenue) }}</p>
                    <div class="flex items-center gap-1 mt-1">
                      <TrendingUpIcon class="w-4 h-4 text-green-600" />
                      <span class="text-sm font-medium text-green-600">12.5%</span>
                      <span class="text-sm text-gray-600">vs last period</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Total Orders -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <ShoppingCartIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Total Orders</p>
                    <p class="text-2xl font-bold text-gray-900">{{ totalOrders }}</p>
                    <div class="flex items-center gap-1 mt-1">
                      <TrendingUpIcon class="w-4 h-4 text-blue-600" />
                      <span class="text-sm font-medium text-blue-600">8.2%</span>
                      <span class="text-sm text-gray-600">vs last period</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Products Sold -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                    <PackageIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Products Sold</p>
                    <p class="text-2xl font-bold text-gray-900">{{ totalProductsSold }}</p>
                    <div class="flex items-center gap-1 mt-1">
                      <TrendingDownIcon class="w-4 h-4 text-red-600" />
                      <span class="text-sm font-medium text-red-600">3.1%</span>
                      <span class="text-sm text-gray-600">vs last period</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Average Order Value -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 transform hover:scale-110 transition-transform duration-200">
                    <TrendingUpIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Average Order Value</p>
                    <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(averageOrderValue) }}</p>
                    <div class="flex items-center gap-1 mt-1">
                      <TrendingUpIcon class="w-4 h-4 text-amber-600" />
                      <span class="text-sm font-medium text-amber-600">5.3%</span>
                      <span class="text-sm text-gray-600">vs last period</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Best Seller Section -->
          <div v-if="!loading && topProducts.length > 0" class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6 mb-8">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Best Seller</h2>
            <div v-if="sortedTopProducts.length > 0" class="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div class="w-20 h-20 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center shadow-sm">
                <PackageIcon class="w-10 h-10 text-green-600" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">{{ sortedTopProducts[0].name }}</h3>
                    <p class="text-gray-600">{{ sortedTopProducts[0].category }}</p>
                  </div>
                  <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
                    Top Seller
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p class="text-sm text-gray-600">Total Revenue</p>
                    <p class="text-xl font-bold text-gray-900">{{ formatCurrency(sortedTopProducts[0].revenue) }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Units Sold</p>
                    <p class="text-xl font-bold text-gray-900">{{ sortedTopProducts[0].units }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="text-center py-8">
              <PackageIcon class="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p class="text-gray-600">No product data available</p>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="!loading && sales.length === 0" class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 mb-8 text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
              <ShoppingCartIcon class="w-8 h-8 text-teal-600" />
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No sales data yet</h3>
            <p class="text-gray-600 mb-4">Start recording sales to see analytics and insights.</p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                @click="showAddSaleModal = true"
                class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <PlusIcon class="w-5 h-5" />
                Record Sale
              </button>
              <button 
                @click="createSampleSale"
                class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <ClipboardIcon class="w-5 h-5" />
                Create Sample Sale
              </button>
            </div>
          </div>

          <!-- Charts Section -->
          <div v-if="!loading && sales.length > 0" class="mb-8">
            <!-- Top Products Chart -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 class="text-lg font-semibold text-gray-900">Top Products</h2>
                <select 
                  v-model="selectedProductMetric"
                  class="px-3 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="revenue">By Revenue</option>
                  <option value="units">By Units Sold</option>
                </select>
              </div>
              <div class="space-y-4">
                <div 
                  v-for="product in sortedTopProducts" 
                  :key="product.id"
                  class="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <PackageIcon class="w-6 h-6 text-purple-600" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-gray-900 truncate">{{ product.name }}</p>
                    <p class="text-sm text-gray-600">{{ product.category }}</p>
                  </div>
                  <div class="text-right">
                    <p class="font-medium text-gray-900">{{ formatCurrency(product.revenue) }}</p>
                    <p class="text-sm text-gray-600">{{ product.units }} units</p>
                  </div>
                </div>
                
                <!-- Empty state for top products -->
                <div v-if="topProducts.length === 0" class="text-center py-8">
                  <PackageIcon class="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p class="text-gray-600">No product data available</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sales by Category -->
          <div v-if="!loading && sales.length > 0" class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6 mb-8">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 class="text-lg font-semibold text-gray-900">Sales by Category</h2>
              <select 
                v-model="selectedCategoryView"
                class="px-3 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="revenue">Revenue</option>
                <option value="units">Units Sold</option>
                <option value="orders">Number of Orders</option>
              </select>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div 
                v-for="category in salesByCategory" 
                :key="category.name"
                class="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div class="flex items-center gap-3 mb-3">
                  <div class="p-2 rounded-md bg-gradient-to-br from-blue-100 to-purple-100">
                    <component :is="getCategoryIcon(category.name)" class="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 class="font-medium text-gray-900">{{ category.name }}</h3>
                </div>
                <p class="text-2xl font-bold text-gray-900 mb-2">
                  {{ selectedCategoryView === 'revenue' ? formatCurrency(category.revenue) : 
                     selectedCategoryView === 'units' ? `${category.units} units` : 
                     `${category.orders} orders` }}
                </p>
                <div class="flex items-center gap-1">
                  <component 
                    :is="category.trend > 0 ? TrendingUpIcon : TrendingDownIcon" 
                    class="w-4 h-4"
                    :class="category.trend > 0 ? 'text-green-600' : 'text-red-600'"
                  />
                  <span 
                    class="text-sm font-medium"
                    :class="category.trend > 0 ? 'text-green-600' : 'text-red-600'"
                  >
                    {{ Math.abs(category.trend) }}%
                  </span>
                </div>
              </div>
              
              <!-- Empty state for categories -->
              <div v-if="salesByCategory.length === 0" class="col-span-4 text-center py-8">
                <PaletteIcon class="w-8 h-8 text-gray-300 mx-auto mb-2" />
                <p class="text-gray-600">No category data available</p>
              </div>
            </div>
          </div>

          <!-- Recent Sales Table -->
          <div v-if="!loading && sales.length > 0" class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg overflow-hidden">
            <div class="p-6 border-b border-gray-200">
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 class="text-lg font-semibold text-gray-900">Recent Sales</h2>
                <div class="relative">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search sales..."
                    class="pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-500"
                  />
                </div>
              </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Order ID</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Customer</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Products</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Total</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Date</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="sale in filteredSales" 
                    :key="sale.id"
                    class="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td class="p-4">
                      <span class="font-medium text-gray-900">{{ sale.orderId }}</span>
                    </td>
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                          <UserIcon class="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p class="font-medium text-gray-900">{{ sale.customerName }}</p>
                          <p class="text-sm text-gray-600">{{ sale.customerContactNo }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <p class="text-gray-900">{{ sale.products.length }} items</p>
                      <p class="text-sm text-gray-600">{{ sale.products[0]?.name || 'N/A' }}</p>
                    </td>
                    <td class="p-4">
                      <p class="font-medium text-gray-900">{{ formatCurrency(sale.total) }}</p>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-2 py-1 rounded-full text-sm font-medium"
                        :class="{
                          'bg-green-100 text-green-800 border border-green-200': sale.status === 'completed',
                          'bg-yellow-100 text-yellow-800 border border-yellow-200': sale.status === 'pending',
                          'bg-red-100 text-red-800 border border-red-200': sale.status === 'cancelled'
                        }"
                      >
                        {{ sale.status.charAt(0).toUpperCase() + sale.status.slice(1) }}
                      </span>
                    </td>
                    <td class="p-4 text-gray-600">
                      {{ formatDate(sale.date) }}
                    </td>
                    <td class="p-4">
                      <button 
                        @click="confirmDeleteSale(sale)"
                        class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
                        title="Delete Sale"
                      >
                        <Trash2Icon class="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="flex items-center justify-between p-4 border-t border-gray-200">
              <p class="text-sm text-gray-600">
                Showing {{ paginationStart }} to {{ paginationEnd }} of {{ filteredSales.length }} results
              </p>
              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-700"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm text-gray-700">Page {{ currentPage }} of {{ totalPages }}</span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage === totalPages"
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
  </div>
  
  <!-- Add Sale Modal -->
  <div v-if="showAddSaleModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-lg shadow-2xl">
      <div class="p-6 border-b border-gray-200">
        <h3 class="text-xl font-bold text-gray-900">Record New Sale</h3>
      </div>
      
      <form @submit.prevent="handleAddSale" class="p-6">
        <div class="space-y-4">
          <!-- Customer Information -->
          <div>
            <h4 class="text-sm font-medium text-gray-900 mb-3">Customer Information</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm text-gray-600 mb-1">Customer Name</label>
                <input 
                  type="text"
                  v-model="saleForm.customerName"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">Contact No.</label>
                <input 
                  type="tel"
                  v-model="saleForm.customerContactNo"
                  placeholder="09XX-XXX-XXXX"
                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          <!-- Products -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-medium text-gray-900">Products</h4>
              <button 
                type="button"
                @click="addProductToSale"
                class="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1"
              >
                <PlusIcon class="w-4 h-4" />
                Add Product
              </button>
            </div>
            
            <div v-for="(product, index) in saleForm.products" :key="index" class="mb-3 p-3 border border-gray-200 rounded-lg bg-gray-50">
              <div class="flex justify-between mb-2">
                <h5 class="text-sm font-medium text-gray-900">Product {{ index + 1 }}</h5>
                <button 
                  type="button"
                  @click="removeProductFromSale(index)"
                  class="text-red-600 hover:text-red-700"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="md:col-span-3">
                  <label class="block text-xs text-gray-600 mb-1">Product</label>
                  <select 
                    v-model="product.id"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-900"
                    @change="updateProductDetails(index)"
                  >
                    <option value="">Select a product</option>
                    <option v-for="p in availableProducts" :key="p.id" :value="p.id">
                      {{ p.name }} - {{ formatCurrency(p.price) }} (Stock: {{ p.stock || 0 }})
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs text-gray-600 mb-1">Quantity</label>
                  <input 
                    type="number"
                    v-model.number="product.quantity"
                    min="1"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-900"
                    @input="calculateTotal"
                  />
                </div>
                <div>
                  <label class="block text-xs text-gray-600 mb-1">Price</label>
                  <input 
                    type="number"
                    v-model.number="product.price"
                    min="0"
                    step="0.01"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-900"
                    @input="calculateTotal"
                  />
                </div>
                <div>
                  <label class="block text-xs text-gray-600 mb-1">Subtotal</label>
                  <input 
                    type="text"
                    :value="formatCurrency(product.price * product.quantity)"
                    readonly
                    class="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-100 text-gray-700"
                  />
                </div>
              </div>
            </div>
            
            <div v-if="saleForm.products.length === 0" class="text-center p-4 border border-dashed border-gray-300 rounded-lg">
              <p class="text-gray-600">No products added yet</p>
            </div>
          </div>

          <!-- Sale Details -->
          
          <div>
            <label class="block text-sm text-gray-600 mb-1">Payment Method</label>
            <select 
              v-model="saleForm.paymentMethod"
              required
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-900"
            >
              <option value="cash">Cash</option>
              <option value="credit_card">Credit Card</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="gcash">GCash</option>
            </select>
          </div>

          <!-- Total -->
          <div class="border-t border-gray-200 pt-4">
            <div class="flex justify-between items-center">
              <span class="text-gray-900 font-medium">Total Amount:</span>
              <span class="text-xl font-bold text-gray-900">{{ formatCurrency(saleForm.total) }}</span>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6">
          <button 
            type="button"
            @click="showAddSaleModal = false"
            class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting" class="flex items-center gap-2">
              <LoaderIcon class="w-5 h-5 animate-spin" />
              Saving...
            </span>
            <span v-else>Record Sale</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Receipt Modal -->
  <div v-if="showReceiptModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md shadow-2xl">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900">Receipt Generated</h3>
          <button 
            @click="showReceiptModal = false"
            class="text-gray-400 hover:text-gray-600"
          >
            <XIcon class="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div class="p-6">
        <!-- Receipt Preview -->
        <div id="receipt-content" class="bg-white p-6 border border-gray-200 rounded-lg mb-4 text-sm">
          <div class="text-center mb-4">
            <h2 class="text-lg font-bold">Barcelona Paint Center</h2>
            <p class="text-gray-600">Sales Receipt</p>
            <p class="text-xs text-gray-500">{{ formatDateTime(new Date()) }}</p>
          </div>
          
          <div class="border-t border-gray-200 pt-4 mb-4">
            <div class="flex justify-between mb-2">
              <span class="font-medium">Order ID:</span>
              <span>{{ lastSaleData.orderId }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span class="font-medium">Customer:</span>
              <span>{{ lastSaleData.customerName }}</span>
            </div>
            <div class="flex justify-between mb-2" v-if="lastSaleData.customerContactNo">
              <span class="font-medium">Contact:</span>
              <span>{{ lastSaleData.customerContactNo }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span class="font-medium">Payment:</span>
              <span>{{ formatPaymentMethod(lastSaleData.paymentMethod) }}</span>
            </div>
          </div>
          
          <div class="border-t border-gray-200 pt-4 mb-4">
            <h3 class="font-medium mb-2">Items:</h3>
            <div v-for="product in lastSaleData.products" :key="product.id" class="flex justify-between mb-1">
              <div class="flex-1">
                <div class="font-medium">{{ product.name }}</div>
                <div class="text-xs text-gray-600">{{ product.quantity }} x {{ formatCurrency(product.price) }}</div>
              </div>
              <div class="font-medium">{{ formatCurrency(product.price * product.quantity) }}</div>
            </div>
          </div>
          
          <div class="border-t border-gray-200 pt-4">
            <div class="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>{{ formatCurrency(lastSaleData.total) }}</span>
            </div>
          </div>
          
          <div class="text-center mt-4 text-xs text-gray-500">
            <p>Thank you for your business!</p>
            <p>Visit us again soon.</p>
          </div>
        </div>
        
        <div class="flex gap-3">
          <button 
            @click="downloadReceipt"
            class="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
          >
            <DownloadIcon class="w-5 h-5" />
            Download
          </button>
          <button 
            @click="printReceipt"
            class="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
          >
            <PrinterIcon class="w-5 h-5" />
            Print
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Sale Confirmation Modal -->
  <div v-if="showDeleteModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md shadow-2xl">
      <div class="p-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
          <AlertTriangleIcon class="w-8 h-8 text-red-600" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 text-center mb-2">Delete Sale</h3>
        <p class="text-gray-600 text-center mb-6">
          Are you sure you want to delete sale <strong>{{ saleToDelete?.orderId }}</strong>? 
          This will restore the product stock and cannot be undone.
        </p>
        <div class="flex justify-center gap-3">
          <button 
            @click="showDeleteModal = false"
            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="deleteSale"
            class="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Delete Sale
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete All Sales Confirmation Modal -->
  <div v-if="showDeleteAllModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md shadow-2xl">
      <div class="p-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
          <AlertTriangleIcon class="w-8 h-8 text-red-600" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 text-center mb-2">Delete All Sales</h3>
        <p class="text-gray-600 text-center mb-6">
          Are you sure you want to delete <strong>ALL {{ sales.length }} sales</strong>? 
          This will restore all product stock and cannot be undone.
        </p>
        <div class="flex justify-center gap-3">
          <button 
            @click="showDeleteAllModal = false"
            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="deleteAllSales"
            class="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Delete All Sales
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs,
  onSnapshot,
  Timestamp,
  addDoc,
  serverTimestamp,
  getDoc,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import {
  LayoutDashboard as LayoutDashboardIcon,
  Users as UsersIcon,
  Package as PackageIcon,
  Home as HomeIcon,
  Palette as PaletteIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Clipboard as ClipboardIcon,
  Settings as SettingsIcon,
  Shield as ShieldIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
  DollarSign as DollarSignIcon,
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Droplets as DropletsIcon,
  Paintbrush as PaintbrushIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  Plus as PlusIcon,
  AlertTriangle as AlertTriangleIcon,
  RefreshCw as RefreshCwIcon,
  Loader as LoaderIcon,
  Trash2 as Trash2Icon,
  Download as DownloadIcon,
  Printer as PrinterIcon
} from 'lucide-vue-next'

// Current date
const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// State
const sales = ref([])
const loading = ref(true)
const error = ref(null)
const totalRevenue = ref(0)
const totalOrders = ref(0)
const totalProductsSold = ref(0)
const averageOrderValue = ref(0)
const topProducts = ref([])
const salesByCategory = ref([])
const availableProducts = ref([])
const showAddSaleModal = ref(false)
const showReceiptModal = ref(false)
const isSubmitting = ref(false)
const mobileSidebarOpen = ref(false)
const router = useRouter()
const route = useRoute()
const overrideStockCheck = ref(false) // For stock validation override
const lastSaleData = ref({}) // Store last sale data for receipt
const showDeleteModal = ref(false)
const saleToDelete = ref(null)
const showDeleteAllModal = ref(false)
const dailySales = ref([]) // ADD THIS LINE

// Date range selector
const dateRanges = [
  { label: '1D', value: '1d' },
  { label: '7D', value: '7d' },
  { label: '30D', value: '30d' },
  { label: '3M', value: '3m' },
  { label: '1Y', value: '1y' },
]
const selectedRange = ref('30d')

// Chart controls
const selectedProductMetric = ref('revenue')
const selectedCategoryView = ref('revenue')

// Recent sales table
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 10

// Sale form
const saleForm = ref({
  orderId: '',
  customerId: '',
  customerName: '',
  customerContactNo: '', // Changed from customerEmail to customerContactNo
  products: [],
  total: 0,
  status: 'completed', // Default to completed
  paymentMethod: 'cash'
})

// Calculate daily sales
const calculateDailySales = (salesData) => {
  const dailySalesMap = new Map()

  salesData.forEach(sale => {
    const date = sale.date.toLocaleDateString()
    const existing = dailySalesMap.get(date) || {
      date: date,
      revenue: 0,
      orders: 0
    }

    existing.revenue += Number(sale.total)
    existing.orders += 1
    dailySalesMap.set(date, existing)
  })

  dailySales.value = Array.from(dailySalesMap.values()).sort((a, b) => new Date(a.date) - new Date(b.date))
  console.log(`Calculated daily sales for ${dailySales.value.length} days`)
}

// Fetch sales data based on date range
const fetchSalesData = async () => {
  try {
    loading.value = true
    error.value = null
    console.log("Fetching sales data...")

    // Calculate date range
    const now = new Date()
    let startDate = new Date()
    
    switch(selectedRange.value) {
      case '1d':
        startDate.setDate(now.getDate() - 1)
        break
      case '7d':
        startDate.setDate(now.getDate() - 7)
        break
      case '30d':
        startDate.setDate(now.getDate() - 30)
        break
      case '3m':
        startDate.setMonth(now.getMonth() - 3)
        break
      case '1y':
        startDate.setFullYear(now.getFullYear() - 1)
        break
    }

    // Create query without date filters initially
    const salesRef = collection(db, 'sales')
    const q = query(
      salesRef,
      orderBy('date', 'desc')
    )

    console.log("Query created, setting up listener...")

    // Set up real-time listener
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log(`Received ${snapshot.docs.length} sales documents`)
      const salesData = []
      let revenue = 0
      let productsSold = 0
      
      snapshot.forEach((doc) => {
        const data = doc.data()
        console.log(`Processing sale document: ${doc.id}`, data)
        
        // Create sale object with proper data conversion
        const sale = { 
          id: doc.id,
          orderId: data.orderId || `ORD-${doc.id.substring(0, 8)}`,
          customerName: data.customerName || 'Unknown Customer',
          customerContactNo: data.customerContactNo || '', // Changed from customerEmail
          products: data.products || [],
          total: Number(data.total) || 0,
          status: data.status || 'completed',
          paymentMethod: data.paymentMethod || 'cash',
          date: data.date
        }
        
        // Convert Firestore timestamp to JS Date
        if (sale.date && typeof sale.date.toDate === 'function') {
          sale.date = sale.date.toDate()
        } else if (!sale.date) {
          sale.date = new Date() // Default to current date if missing
        }
        
        // Filter by date range in memory
        if (sale.date >= startDate && sale.date <= now) {
          salesData.push(sale)
          revenue += Number(sale.total) || 0
          
          // Calculate products sold
          const soldItems = sale.products?.reduce((sum, product) => {
            return sum + (Number(product.quantity) || 0)
          }, 0) || 0
          
          productsSold += soldItems
          console.log(`Added sale ${sale.orderId} with ${soldItems} items, total: ${sale.total}`)
        }
      })

      console.log(`Processed ${salesData.length} sales within date range`)
      console.log(`Total revenue: ${revenue}, Products sold: ${productsSold}`)

      // Update reactive refs
      sales.value = salesData
      totalRevenue.value = revenue
      totalOrders.value = salesData.length
      totalProductsSold.value = productsSold
      averageOrderValue.value = salesData.length ? revenue / salesData.length : 0
      
      // Calculate derived data
      calculateTopProducts(salesData)
      calculateSalesByCategory(salesData)
      calculateDailySales(salesData) // ADD THIS LINE
      
      loading.value = false
    }, (err) => {
      console.error('Error fetching sales:', err)
      error.value = 'Failed to load sales data: ' + err.message
      loading.value = false
    })

    // Return unsubscribe function
    return unsubscribe
  } catch (err) {
    console.error('Error in fetchSalesData:', err)
    error.value = 'Failed to fetch sales data: ' + err.message
    loading.value = false
    return () => {}
  }
}

// Fetch available products for the add sale form
const fetchAvailableProducts = async () => {
  try {
    console.log("Fetching available products...")
    const productsRef = collection(db, 'products')
    const q = query(productsRef, orderBy('name'))
    const snapshot = await getDocs(q)
    
    console.log(`Found ${snapshot.docs.length} products`)
    
    availableProducts.value = snapshot.docs.map(doc => {
      const data = doc.data()
      console.log(`Product ${data.name}, price: ${data.price}, stock: ${data.stock}`)
      return {
        id: doc.id,
        name: data.name || 'Unnamed Product',
        price: Number(data.price) || 0,
        category: data.category || 'Uncategorized',
        stock: Number(data.stock) || 0
      }
    })
    
    console.log("Available products loaded successfully")
  } catch (err) {
    console.error('Error fetching products:', err)
    alert('Failed to load products. Please refresh the page.')
  }
}

// Calculate top products
const calculateTopProducts = (salesData) => {
  const productMap = new Map()
  
  salesData.forEach(sale => {
    sale.products.forEach(product => {
      const existing = productMap.get(product.id) || {
        id: product.id,
        name: product.name || 'Unknown Product',
        category: product.category || 'Uncategorized',
        revenue: 0,
        units: 0
      }
      
      existing.revenue += Number(product.price) * Number(product.quantity)
      existing.units += Number(product.quantity)
      productMap.set(product.id, existing)
    })
  })

  topProducts.value = Array.from(productMap.values())
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 4)
    
  console.log(`Calculated ${topProducts.value.length} top products`)
}

// Calculate sales by category
const calculateSalesByCategory = (salesData) => {
  const categoryMap = new Map()
  
  salesData.forEach(sale => {
    sale.products.forEach(product => {
      const category = product.category || 'Uncategorized'
      const existing = categoryMap.get(category) || {
        name: category,
        revenue: 0,
        units: 0,
        orders: 0,
        trend: Math.floor(Math.random() * 20) - 5 // Random trend for demo
      }
      
      existing.revenue += Number(product.price) * Number(product.quantity)
      existing.units += Number(product.quantity)
      existing.orders += 1
      categoryMap.set(category, existing)
    })
  })

  salesByCategory.value = Array.from(categoryMap.values())
  console.log(`Calculated sales for ${salesByCategory.value.length} categories`)
}

// Confirm delete sale
const confirmDeleteSale = (sale) => {
  saleToDelete.value = sale
  showDeleteModal.value = true
}

// Delete sale
const deleteSale = async () => {
  try {
    if (!saleToDelete.value) return
    
    // Delete from Firestore
    const saleRef = doc(db, 'sales', saleToDelete.value.id)
    await deleteDoc(saleRef)
    
    // Restore stock for deleted sale products
    for (const product of saleToDelete.value.products) {
      if (product.id && product.id !== 'sample-product') {
        const productRef = doc(db, 'products', product.id)
        const productDoc = await getDoc(productRef)
        
        if (productDoc.exists()) {
          const currentStock = productDoc.data().stock || 0
          const restoredStock = currentStock + product.quantity
          
          await updateDoc(productRef, {
            stock: restoredStock,
            lastUpdated: serverTimestamp()
          })
          
          console.log(`Restored stock for ${product.name}: ${currentStock} -> ${restoredStock}`)
        }
      }
    }
    
    alert('Sale deleted successfully and stock restored!')
    showDeleteModal.value = false
    saleToDelete.value = null
    
  } catch (err) {
    console.error('Error deleting sale:', err)
    alert('Failed to delete sale: ' + err.message)
  }
}

// Confirm delete all sales
const confirmDeleteAllSales = () => {
  if (sales.value.length === 0) {
    alert('No sales to delete')
    return
  }
  showDeleteAllModal.value = true
}

// Delete all sales
const deleteAllSales = async () => {
  try {
    if (sales.value.length === 0) return
    
    // Delete all sales and restore stock
    for (const sale of sales.value) {
      // Delete from Firestore
      const saleRef = doc(db, 'sales', sale.id)
      await deleteDoc(saleRef)
      
      // Restore stock for each product in the sale
      for (const product of sale.products) {
        if (product.id && product.id !== 'sample-product') {
          const productRef = doc(db, 'products', product.id)
          const productDoc = await getDoc(productRef)
          
          if (productDoc.exists()) {
            const currentStock = productDoc.data().stock || 0
            const restoredStock = currentStock + product.quantity
            
            await updateDoc(productRef, {
              stock: restoredStock,
              lastUpdated: serverTimestamp()
            })
          }
        }
      }
    }
    
    alert(`Successfully deleted ${sales.value.length} sales and restored all stock!`)
    showDeleteAllModal.value = false
    
  } catch (err) {
    console.error('Error deleting all sales:', err)
    alert('Failed to delete all sales: ' + err.message)
  }
}

// Format currency
const formatCurrency = (value) => {
  return `₱${Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  
  const date = dateString instanceof Date ? dateString : new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Format date and time for receipt
const formatDateTime = (date) => {
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Format payment method
const formatPaymentMethod = (method) => {
  const methods = {
    'cash': 'Cash',
    'credit_card': 'Credit Card',
    'bank_transfer': 'Bank Transfer',
    'gcash': 'GCash'
  }
  return methods[method] || method
}

// Get icon for category
const getCategoryIcon = (category) => {
  const icons = {
    'Interior': DropletsIcon,
    'Exterior': PaintbrushIcon,
    'Primers': PackageIcon,
    'Specialty': PaletteIcon
  }
  
  return icons[category] || PackageIcon
}

// Sorted top products based on selected metric
const sortedTopProducts = computed(() => {
  return [...topProducts.value].sort((a, b) => {
    if (selectedProductMetric.value === 'revenue') {
      return b.revenue - a.revenue
    } else {
      return b.units - a.units
    }
  })
})

// Filtered sales for the table
const filteredSales = computed(() => {
  let filtered = [...sales.value]
  
  // Apply search filter only
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(sale => 
      sale.orderId?.toLowerCase().includes(query) ||
      sale.customerName?.toLowerCase().includes(query) ||
      sale.customerContactNo?.toLowerCase().includes(query)
    )
  }
  
  // Apply pagination
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  
  return filtered.slice(start, end)
})

// Pagination
const totalPages = computed(() => Math.ceil(sales.value.length / itemsPerPage) || 1)
const paginationStart = computed(() => sales.value.length ? ((currentPage.value - 1) * itemsPerPage) + 1 : 0)
const paginationEnd = computed(() => Math.min(currentPage.value * itemsPerPage, sales.value.length))

// Add product to sale form
const addProductToSale = () => {
  saleForm.value.products.push({
    id: '',
    name: '',
    quantity: 1,
    price: 0,
    category: ''
  })
}

// Remove product from sale form
const removeProductFromSale = (index) => {
  saleForm.value.products.splice(index, 1)
  calculateTotal()
}

// Update product details when product is selected
const updateProductDetails = (index) => {
  const productId = saleForm.value.products[index].id
  if (!productId) return
  
  const product = availableProducts.value.find(p => p.id === productId)
  if (product) {
    console.log(`Selected product: ${product.name}, price: ${product.price}, stock: ${product.stock}`)
    saleForm.value.products[index] = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      quantity: 1,
      stock: product.stock
    }
    calculateTotal()
  }
}

// Calculate total
const calculateTotal = () => {
  saleForm.value.total = saleForm.value.products.reduce((sum, product) => {
    return sum + (product.price * product.quantity)
  }, 0)
}

// Generate order ID
const generateOrderId = () => {
  const date = new Date()
  const year = date.getFullYear().toString().slice(-2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  
  return `ORD-${year}${month}${day}-${random}`
}

// Generate and download receipt
const generateReceipt = (saleData) => {
  lastSaleData.value = saleData
  showReceiptModal.value = true
}

// Download receipt as text file instead of image
const downloadReceipt = () => {
  try {
    // Create receipt content as text
    const receiptText = generateReceiptText()
    
    // Create blob and download
    const blob = new Blob([receiptText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.download = `receipt-${lastSaleData.value.orderId}.txt`
    link.href = url
    
    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Clean up
    URL.revokeObjectURL(url)
    
    console.log('Receipt downloaded successfully')
  } catch (err) {
    console.error('Error downloading receipt:', err)
    alert('Failed to download receipt. Please try again.')
  }
}

// Generate receipt as text
const generateReceiptText = () => {
  const receipt = `
========================================
        BARCELONA PAINT CENTER
           SALES RECEIPT
========================================

Date: ${formatDateTime(new Date())}
Order ID: ${lastSaleData.value.orderId}
Customer: ${lastSaleData.value.customerName}
${lastSaleData.value.customerContactNo ? `Contact: ${lastSaleData.value.customerContactNo}` : ''}
Payment: ${formatPaymentMethod(lastSaleData.value.paymentMethod)}

========================================
                ITEMS
========================================

${lastSaleData.value.products.map(product => 
  `${product.name}
  ${product.quantity} x ${formatCurrency(product.price)} = ${formatCurrency(product.price * product.quantity)}`
).join('\n\n')}

========================================
TOTAL: ${formatCurrency(lastSaleData.value.total)}
========================================

Thank you for your business!
Visit us again soon.

========================================
  `
  return receipt
}

// Print receipt
const printReceipt = () => {
  const receiptContent = document.getElementById('receipt-content')
  if (!receiptContent) {
    alert('Receipt content not found')
    return
  }

  const printWindow = window.open('', '_blank')
  printWindow.document.write(`
    <html>
      <head>
        <title>Receipt - ${lastSaleData.value.orderId}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .receipt { max-width: 300px; margin: 0 auto; }
        </style>
      </head>
      <body>
        <div class="receipt">
          ${receiptContent.innerHTML}
        </div>
      </body>
    </html>
  `)
  
  printWindow.document.close()
  printWindow.print()
}

// Handle add sale
const handleAddSale = async () => {
  try {
    isSubmitting.value = true
    console.log("Processing sale submission...")
    
    // Validate form
    if (saleForm.value.products.length === 0) {
      alert('Please add at least one product')
      isSubmitting.value = false
      return
    }

    // Remove the if (!overrideStockCheck.value) condition and always validate stock
    for (const product of saleForm.value.products) {
      if (product.id && product.id !== 'sample-product') {
        const productRef = doc(db, 'products', product.id)
        const productDoc = await getDoc(productRef)
        
        if (!productDoc.exists()) {
          alert(`Product ${product.name} not found in inventory`)
          isSubmitting.value = false
          return
        }

        const currentStock = productDoc.data().stock || 0
        console.log(`Checking stock for ${product.name}: ${currentStock} available, ${product.quantity} requested`)
        
        if (currentStock < product.quantity) {
          alert(`Insufficient stock for ${product.name}. Available: ${currentStock}`)
          isSubmitting.value = false
          return
        }
      }
    }
    
    // Generate order ID if not provided
    if (!saleForm.value.orderId) {
      saleForm.value.orderId = generateOrderId()
    }
    
    // Generate customer ID if not provided
    if (!saleForm.value.customerId) {
      saleForm.value.customerId = `CUST-${Date.now()}`
    }
    
    // Prepare sale data
    const saleData = {
      orderId: saleForm.value.orderId,
      customerId: saleForm.value.customerId,
      customerName: saleForm.value.customerName,
      customerContactNo: saleForm.value.customerContactNo, // Changed from customerEmail
      products: saleForm.value.products.map(p => ({
        id: p.id,
        name: p.name,
        quantity: Number(p.quantity),
        price: Number(p.price),
        category: p.category || 'Uncategorized'
      })),
      total: Number(saleForm.value.total),
      status: saleForm.value.status,
      paymentMethod: saleForm.value.paymentMethod,
      date: serverTimestamp()
    }
    
    console.log("Sale data prepared:", saleData)
    
    // Update inventory stock for each product first (even with override)
    for (const product of saleForm.value.products) {
      if (product.id && product.id !== 'sample-product') {
        const productRef = doc(db, 'products', product.id)
        const productDoc = await getDoc(productRef)
        
        if (productDoc.exists()) {
          const currentStock = productDoc.data().stock || 0
          const newStock = Math.max(0, currentStock - product.quantity)
          
          // Update the product stock in Firestore
          await updateDoc(productRef, {
            stock: newStock,
            lastUpdated: serverTimestamp()
          })
          
          console.log(`Updated stock for product ${product.name}: ${currentStock} -> ${newStock}`)
        }
      }
    }

    // Add sale to Firestore after stock updates
    const salesRef = collection(db, 'sales')
    const docRef = await addDoc(salesRef, saleData)
    
    console.log('Sale added successfully with ID:', docRef.id)
    
    // Show success message
    alert('Sale recorded successfully and inventory updated!')
    
    // Generate receipt
    generateReceipt({
      ...saleData,
      date: new Date() // Use current date for receipt display
    })
    
    // Reset form and close modal
    resetSaleForm()
    showAddSaleModal.value = false
    
  } catch (err) {
    console.error('Error adding sale:', err)
    alert('Failed to add sale. Please try again. Error: ' + err.message)
  } finally {
    isSubmitting.value = false
  }
}

// Reset sale form
const resetSaleForm = () => {
  saleForm.value = {
    orderId: '',
    customerId: '',
    customerName: '',
    customerContactNo: '', // Changed from customerEmail
    products: [],
    total: 0,
    status: 'completed', // Default to completed
    paymentMethod: 'cash'
  }
  // Remove: overrideStockCheck.value = false
}

// Create sample sale
const createSampleSale = () => {
  // Reset the form first
  resetSaleForm()
  
  // Set sample data
  saleForm.value.customerName = 'Sample Customer'
  saleForm.value.customerContactNo = '09XX-XXX-XXXX' // Changed from email
  saleForm.value.status = 'completed'
  saleForm.value.paymentMethod = 'cash'
  
  // Add a sample product if we have products available
  if (availableProducts.value.length > 0) {
    const sampleProduct = availableProducts.value[0]
    saleForm.value.products.push({
      id: sampleProduct.id,
      name: sampleProduct.name,
      quantity: 1,
      price: sampleProduct.price,
      category: sampleProduct.category
    })
    calculateTotal()
  } else {
    // Add a generic product if no products are available
    saleForm.value.products.push({
      id: 'sample-product',
      name: 'Sample Product',
      quantity: 1,
      price: 1000,
      category: 'Interior'
    })
    calculateTotal()
  }
  
  // Show the modal
  showAddSaleModal.value = true
}

// Watch for date range changes
watch(selectedRange, () => {
  fetchSalesData()
})

// Watch for search query and filter changes
watch(searchQuery, () => {
  currentPage.value = 1
})

// Initialize data on component mount
onMounted(() => {
  console.log("Component mounted, initializing data...")
  fetchAvailableProducts()
  const unsubscribe = fetchSalesData()
  
  // Clean up on unmount
  onUnmounted(() => {
    console.log("Component unmounting, cleaning up...")
    if (typeof unsubscribe === 'function') {
      unsubscribe()
    }
  })
})

// Toggle mobile sidebar
const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

// Handle logout
const handleLogout = () => {
  router.push('/admin')
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { 
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
