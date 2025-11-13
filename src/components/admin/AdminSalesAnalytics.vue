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
            <Shield class="h-3 w-3 mr-1" />
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
            <LayoutDashboard class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link
            to="/admin/staff"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700"
            :class="{ 'shadow-sm border border-green-200 transform scale-105': $route.path === '/admin/staff' }"
          >
            <Users class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link
            to="/admin/inventory"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            :class="{ 'shadow-sm border border-purple-200 transform scale-105': $route.path === '/admin/inventory' }"
          >
            <Package class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link
            to="/admin/house-paint-recommender"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': $route.path === '/admin/house-paint-recommender' }"
          >
            <Home class="w-5 h-5" />
            <span>Paint Recommender</span>
          </router-link>

          <router-link
            to="/admin/paint-mixing"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border border-pink-200 transform scale-105': $route.path === '/admin/paint-mixing' }"
          >
            <Palette class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link
            to="/admin/sales-analytics"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 shadow-sm border border-teal-200 transform scale-105"
            :class="{ 'hover:bg-teal-100 hover:text-teal-700': $route.path !== '/admin/sales-analytics' }"
          >
            <TrendingUp class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link to="/admin/visualization" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 shadow-sm border border-indigo-200">
            <BarChart3 class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Data Visualization</span>
          </router-link>

          <router-link
            to="/admin/settings"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700"
            :class="{ 'shadow-sm border border-amber-200 transform scale-105': $route.path === '/admin/settings' }"
          >
            <Settings class="w-5 h-5" />
            <span>Settings</span>
          </router-link>

          <!-- Perfect spacing -->
          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <User class="w-5 h-5 text-white" />
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
              <LogOut class="w-5 h-5" />
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
          <Menu v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <X v-else class="w-6 h-6 text-gray-700" />
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
            <Shield class="h-3 w-3 mr-1" />
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
            <LayoutDashboard class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link
            to="/admin/staff"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50"
            :class="{ 'shadow-sm border border-green-200': $route.path === '/admin/staff' }"
            @click="mobileSidebarOpen = false"
          >
            <Users class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link
            to="/admin/inventory"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50"
            :class="{ 'shadow-sm border border-purple-200': $route.path === '/admin/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <Package class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link
            to="/admin/house-paint-recommender"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50"
            :class="{ 'shadow-sm border border-orange-200': $route.path === '/admin/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <Home class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link
            to="/admin/paint-mixing"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50"
            :class="{ 'shadow-sm border border-pink-200': $route.path === '/admin/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <Palette class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link
            to="/admin/sales-analytics"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 shadow-sm border border-teal-200"
            @click="mobileSidebarOpen = false"
          >
            <TrendingUp class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link
            to="/admin/reports"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50"
            :class="{ 'shadow-sm border border-indigo-200': $route.path === '/admin/reports' }"
            @click="mobileSidebarOpen = false"
          >
            <Clipboard class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link
            to="/admin/settings"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50"
            :class="{ 'shadow-sm border border-amber-200': $route.path === '/admin/settings' }"
            @click="mobileSidebarOpen = false"
          >
            <Settings class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link
            to="/admin/security"
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50"
            :class="{ 'shadow-sm border border-red-200': $route.path === '/admin/security' }"
            @click="mobileSidebarOpen = false"
          >
            <Shield class="w-5 h-5" />
            <span>Security</span>
          </router-link>

          <!-- Perfect spacing for mobile too -->
          <div class="h-4"></div>
        </nav>

        <!-- Mobile User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <User class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-600 truncate">admin@example.com</p>
            </div>
            <button
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut class="w-5 h-5" />
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
                <Calendar class="w-5 h-5 text-teal-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900">Welcome, Admin</span>
                <div class="relative">
                  <Bell class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
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
                <Plus class="w-5 h-5" />
                Add Sale
              </button>

              <!-- Daily Report Button -->
              <button
                @click="generateDailyReport"
                class="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <Clipboard class="w-5 h-5" />
                Daily Report
              </button>

              <!-- Delete All Sales Button -->
              <button
                @click="confirmDeleteAllSales"
                class="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <Trash2 class="w-5 h-5" />
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
            <Loader class="w-8 h-8 text-gray-400 animate-spin mx-auto mb-4" />
            <p class="text-gray-600">Loading sales data...</p>
          </div>

          <!-- Error State -->
          <div v-if="error" class="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <AlertTriangle class="w-5 h-5 text-red-600" />
              <span class="text-red-800">{{ error }}</span>
            </div>
            <button
              @click="fetchSalesData"
              class="text-red-600 hover:text-red-700"
            >
              <RefreshCw class="w-5 h-5" />
            </button>
          </div>

          <!-- Stats Cards -->
          <div v-if="!loading || sales.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <!-- Total Revenue -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4">
                <div class="flex items-center gap-3">
                  <div class="p-2 rounded-lg shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                    <DollarSign class="w-5 h-5 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs sm:text-sm text-gray-600">Total Revenue</p>
                    <!-- reduced font size from text-2xl to text-lg to handle millions -->
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ formatCurrency(totalRevenue) }}</p>
                    <div class="flex items-center gap-1 mt-1">
                      <TrendingUp class="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                      <span class="text-xs font-medium text-green-600">12.5%</span>
                      <span class="text-xs text-gray-600">vs last period</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Total Orders -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4">
                <div class="flex items-center gap-3">
                  <div class="p-2 rounded-lg shadow-lg bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <ShoppingCart class="w-5 h-5 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs sm:text-sm text-gray-600">Total Orders</p>
                    <!-- reduced font size from text-2xl to text-lg to handle millions -->
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ totalOrders }}</p>
                    <div class="flex items-center gap-1 mt-1">
                      <TrendingUp class="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      <span class="text-xs font-medium text-blue-600">8.2%</span>
                      <span class="text-xs text-gray-600">vs last period</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Products Sold -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4">
                <div class="flex items-center gap-3">
                  <div class="p-2 rounded-lg shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                    <Package class="w-5 h-5 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs sm:text-sm text-gray-600">Products Sold</p>
                    <!-- reduced font size from text-2xl to text-lg to handle millions -->
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ totalProductsSold }}</p>
                    <div class="flex items-center gap-1 mt-1">
                      <TrendingDown class="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                      <span class="text-xs font-medium text-red-600">3.1%</span>
                      <span class="text-xs text-gray-600">vs last period</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Average Order Value -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-4">
                <div class="flex items-center gap-3">
                  <div class="p-2 rounded-lg shadow-lg bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 transform hover:scale-110 transition-transform duration-200">
                    <TrendingUp class="w-5 h-5 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs sm:text-sm text-gray-600">Average Order Value</p>
                    <!-- reduced font size from text-2xl to text-lg to handle millions -->
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ formatCurrency(averageOrderValue) }}</p>
                    <div class="flex items-center gap-1 mt-1">
                      <TrendingUp class="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                      <span class="text-xs font-medium text-amber-600">5.3%</span>
                      <span class="text-xs text-gray-600">vs last period</span>
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
                <Package class="w-10 h-10 text-green-600" />
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
              <Package class="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p class="text-gray-600">No product data available</p>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="!loading && sales.length === 0" class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 mb-8 text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
              <ShoppingCart class="w-8 h-8 text-teal-600" />
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No sales data yet</h3>
            <p class="text-gray-600 mb-4">Start recording sales to see analytics and insights.</p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                @click="showAddSaleModal = true"
                class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Plus class="w-5 h-5" />
                Record Sale
              </button>
              <button
                @click="createSampleSale"
                class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Clipboard class="w-5 h-5" />
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
                    <Package class="w-6 h-6 text-purple-600" />
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
                  <Package class="w-8 h-8 text-gray-300 mx-auto mb-2" />
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
                    :is="category.trend > 0 ? TrendingUp : TrendingDown"
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
                <Palette class="w-8 h-8 text-gray-300 mx-auto mb-2" />
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
                  <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                          <User class="w-4 h-4 text-blue-600" />
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
                        <Trash2 class="w-4 h-4" />
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
                  <ChevronLeft class="w-5 h-5" />
                </button>
                <span class="text-sm text-gray-700">Page {{ currentPage }} of {{ totalPages }}</span>
                <button
                  @click="currentPage++"
                  :disabled="currentPage === totalPages"
                  class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-700"
                >
                  <ChevronRight class="w-5 h-5" />
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
    <div class="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
      <div class="p-6 border-b border-gray-200">
        <h3 class="text-xl font-bold text-gray-900">Record New Sale</h3>
      </div>

      <form @submit.prevent="handleAddSale" class="p-4 md:p-6">
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
                <Plus class="w-4 h-4" />
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
                  <X class="w-4 h-4" />
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
              <option value=" gcash">GCash</option>
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
              <Loader class="w-5 h-5 animate-spin" />
              Saving...
            </span>
            <span v-else>Record Sale</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Daily Sales Report Modal -->
  <div v-if="showDailyReportModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900">Daily Sales Report</h3>
          <button
            @click="showDailyReportModal = false"
            class="text-gray-400 hover:text-gray-600"
          >
            <X class="w-6 h-6" />
          </button>
        </div>
      </div>

      <div class="p-4 md:p-6">
        <!-- Daily Sales Report Preview -->
        <div id="daily-report-content" class="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg mb-4 text-sm">
          <div class="text-center mb-6">
            <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <TrendingUp class="w-8 h-8 text-white" />
            </div>
            <h2 class="text-xl font-bold text-gray-900">Barcelona Paint Center</h2>
            <p class="text-blue-600 font-medium">Admin Daily Sales Report</p>
            <p class="text-xs text-gray-500 mt-1">{{ formatDateTime(new Date()) }}</p>
          </div>

          <!-- Admin Information -->
          <div class="bg-white/80 rounded-lg p-4 mb-4 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center">
              <Shield class="w-4 h-4 mr-2 text-blue-600" />
              Admin Report
            </h3>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span class="text-gray-600">Admin:</span>
                <span class="font-medium ml-1">Admin User</span>
              </div>
              <div>
                <span class="text-gray-600">Date:</span>
                <span class="font-medium ml-1">{{ todayFormatted }}</span>
              </div>
              <div>
                <span class="text-gray-600">Period:</span>
                <span class="font-medium ml-1">{{ selectedRange.toUpperCase() }}</span>
              </div>
              <div>
                <span class="text-gray-600">Status:</span>
                <span class="font-medium ml-1 text-green-600">Active</span>
              </div>
            </div>
          </div>

          <!-- Performance Summary -->
          <div class="bg-white/80 rounded-lg p-4 mb-4 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <DollarSign class="w-4 h-4 mr-2 text-green-600" />
              Overall Performance ({{ selectedRange.toUpperCase() }})
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                <p class="text-xs text-green-700 font-medium">Total Revenue</p>
                <p class="text-lg font-bold text-green-800">{{ formatCurrency(totalRevenue) }}</p>
              </div>
              <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-200">
                <p class="text-xs text-blue-700 font-medium">Total Orders</p>
                <p class="text-lg font-bold text-blue-800">{{ totalOrders }}</p>
              </div>
              <div class="bg-gradient-to-r from-purple-50 to-violet-50 p-3 rounded-lg border border-purple-200">
                <p class="text-xs text-purple-700 font-medium">Items Sold</p>
                <p class="text-lg font-bold text-purple-800">{{ totalProductsSold }}</p>
              </div>
              <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg border border-orange-200">
                <p class="text-xs text-orange-700 font-medium">Avg Order</p>
                <p class="text-lg font-bold text-orange-800">{{ formatCurrency(averageOrderValue) }}</p>
              </div>
            </div>
          </div>

          <!-- Top Products -->
          <div class="bg-white/80 rounded-lg p-4 mb-4 border border-gray-200" v-if="sortedTopProducts.length > 0">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <Package class="w-4 h-4 mr-2 text-purple-600" />
              Top Products ({{ selectedRange.toUpperCase() }})
            </h3>
            <div class="space-y-3">
              <div
                v-for="(product, index) in sortedTopProducts.slice(0, 5)"
                :key="product.id"
                class="grid grid-cols-12 gap-3 p-3 bg-gray-50 rounded text-xs border border-gray-100 items-center"
              >
                <!-- Rank -->
                <div class="col-span-1">
                  <span class="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs flex items-center justify-center font-bold">{{ index + 1 }}</span>
                </div>

                <!-- Product Info -->
                <div class="col-span-3">
                  <div class="font-bold text-gray-900 text-sm">{{ product.name }}</div>
                  <div class="text-gray-600 text-xs">{{ product.category || 'N/A' }}</div>
                </div>

                <!-- Units -->
                <div class="col-span-2 text-center">
                  <div class="text-purple-600 text-sm font-bold">{{ product.units }}</div>
                  <div class="text-gray-600 text-xs">units sold</div>
                </div>

                <!-- Revenue -->
                <div class="col-span-3 text-center">
                  <div class="font-bold text-green-700 text-sm">{{ formatCurrency(product.revenue) }}</div>
                  <div class="text-gray-600 text-xs">total revenue</div>
                </div>

                <!-- Amount (Average Price) -->
                <div class="col-span-2 text-center">
                  <div class="font-bold text-blue-700 text-sm">{{ formatCurrency(product.units > 0 ? product.revenue / product.units : 0) }}</div>
                  <div class="text-gray-600 text-xs">per unit</div>
                </div>

                <!-- Percentage -->
                <div class="col-span-1 text-right">
                  <div class="text-purple-600 text-xs font-medium">{{ totalRevenue > 0 ? ((product.revenue / totalRevenue) * 100).toFixed(1) : 0 }}%</div>
                  <div class="text-gray-600 text-xs">of total</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Sales -->
          <div class="bg-white/80 rounded-lg p-4 mb-4 border border-gray-200" v-if="sales.length > 0">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <ShoppingCart class="w-4 h-4 mr-2 text-blue-600" />
              Recent Transactions (Last 5)
            </h3>
            <div class="space-y-3">
              <div
                v-for="sale in sales.slice(0, 5)"
                :key="sale.id"
                class="p-3 bg-gray-50 rounded border border-gray-100"
              >
                <!-- First Row: Order ID and Amount -->
                <div class="flex justify-between items-center mb-2">
                  <div class="flex items-center gap-6">
                    <span class="font-bold text-gray-900 text-sm min-w-[120px]">{{ sale.orderId }}</span>
                    <span class="text-gray-600 text-xs min-w-[80px]">{{ formatTime(sale.date) }}</span>
                  </div>
                  <span class="font-bold text-green-700 text-lg">{{ formatCurrency(sale.total) }}</span>
                </div>

                <!-- Second Row: Customer and Contact -->
                <div class="flex justify-between items-center mb-2">
                  <div class="flex items-center gap-4">
                    <span class="text-gray-700 text-sm font-medium min-w-[120px]">{{ sale.customerName }}</span>
                    <span class="text-gray-600 text-xs">{{ sale.customerContactNo || 'No contact' }}</span>
                  </div>
                  <div class="text-right">
                    <span class="text-blue-600 text-sm font-medium">{{ sale.products.length }} items</span>
                  </div>
                </div>

                <!-- Third Row: Product, Payment, Status -->
                <div class="flex justify-between items-center">
                  <span class="text-gray-600 text-sm min-w-[150px]">{{ sale.products[0]?.name || 'N/A' }}</span>
                  <div class="flex items-center gap-4">
                    <span class="text-purple-600 text-sm">{{ formatPaymentMethod(sale.paymentMethod) }}</span>
                    <span class="px-2 py-1 rounded-full text-xs font-medium"
                          :class="{
                            'bg-green-100 text-green-700': sale.status === 'completed',
                            'bg-yellow-100 text-yellow-700': sale.status === 'pending',
                            'bg-red-100 text-red-700': sale.status === 'cancelled'
                          }">
                      {{ sale.status.toUpperCase() }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="text-center pt-4 border-t border-gray-200">
            <p class="text-xs text-gray-600 mb-1">Report generated for admin review</p>
            <p class="text-xs text-gray-500">Barcelona Paint Center Admin Portal</p>
            <div class="mt-2 flex items-center justify-center">
              <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span class="text-xs text-blue-600 font-medium">All sales data verified and current</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-3">
        <button
          @click="downloadDailyReport"
          class="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
        >
          <Download class="w-5 h-5" />
          Save as Image
        </button>
        <button
          @click="printDailyReport"
          class="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
        >
          <Printer class="w-5 h-5" />
          Print
        </button>
      </div>
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
            <X class="w-6 h-6" />
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
            <Download class="w-5 h-5" />
            Download
          </button>
          <button
            @click="printReceipt"
            class="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
          >
            <Printer class="w-5 h-5" />
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
          <AlertTriangle class="w-8 h-8 text-red-600" />
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
          <AlertTriangle class="w-8 h-8 text-red-600" />
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
import { auth } from '../../config/firebase'

// Icons Import
import {
  Palette, TrendingUp, BarChart3, Settings, User, Menu, X, Calendar, Bell,
  Plus, Trash2, Search, ChevronLeft, ChevronRight, Loader, AlertTriangle,
  RefreshCw, ShoppingCart, TrendingDown, Droplets, Paintbrush, Clipboard,
  Download, Printer, LogOut, DollarSign, Shield, LayoutDashboard, Users,
  Package, Home
} from 'lucide-vue-next'

const currentDate = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

const todayFormatted = new Date().toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

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
const showDailyReportModal = ref(false)
const isSubmitting = ref(false)
const mobileSidebarOpen = ref(false)
const router = useRouter()
const route = useRoute()
const lastSaleData = ref({})
const showDeleteModal = ref(false)
const saleToDelete = ref(null)
const showDeleteAllModal = ref(false)
const dailySales = ref([])
let unsubscribeSales = null

const dateRanges = [
  { label: '1D', value: '1d' },
  { label: '7D', value: '7d' },
  { label: '30D', value: '30d' },
  { label: '3M', value: '3m' },
  { label: '1Y', value: '1y' },
]
const selectedRange = ref('30d')
const selectedProductMetric = ref('revenue')
const selectedCategoryView = ref('revenue')
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 10

const saleForm = ref({
  orderId: '',
  customerId: '',
  customerName: '',
  customerContactNo: '',
  products: [],
  total: 0,
  status: 'completed',
  paymentMethod: 'cash'
})

onMounted(() => {
  console.log("Component mounted, initializing data...")
  fetchAvailableProducts()
  unsubscribeSales = fetchSalesData()
})

onUnmounted(() => {
  console.log("Component unmounting, cleaning up...")
  if (typeof unsubscribeSales === 'function') {
    unsubscribeSales()
  }
})

watch(selectedRange, () => {
  fetchSalesData()
})

watch(searchQuery, () => {
  currentPage.value = 1
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
          customerContactNo: data.customerContactNo || '',
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
      calculateDailySales(salesData)

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

// Format time for sales
const formatTime = (date) => {
  if (!date) return 'N/A'

  const dateObj = date instanceof Date ? date : new Date(date)
  return dateObj.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
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
    ' gcash': 'GCash'
  }
  return methods[method] || method
}

// Get icon for category
const getCategoryIcon = (category) => {
  const icons = {
    'Interior': Droplets,
    'Exterior': Paintbrush,
    'Primers': Package, // Using Lucide icons for some
    'Specialty': Palette // Using Lucide icons for some
  }

  return icons[category] || Package // Default to Lucide Package
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

// Generate daily sales report
const generateDailyReport = () => {
  const reportData = {
    date: new Date(),
    totalRevenue: totalRevenue.value,
    totalOrders: totalOrders.value,
    totalProductsSold: totalProductsSold.value,
    averageOrderValue: averageOrderValue.value,
    topProducts: sortedTopProducts.value.slice(0, 3),
    recentSales: sales.value.slice(0, 3),
    totalSales: sales.value.length
  }

  lastSaleData.value = reportData
  showDailyReportModal.value = true
}

// Download daily report as image with complete details
const downloadDailyReport = async () => {
  try {
    const reportElement = document.getElementById('daily-report-content')
    if (!reportElement) {
      alert('Report content not found')
      return
    }

    // Create a canvas element with better dimensions for complete details
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    // Set canvas size for complete report
    canvas.width = 800
    canvas.height = 1600 // Increased height for better spacing
    
    // Add subtle pattern/texture
    ctx.fillStyle = 'rgba(148, 163, 184, 0.1)'
    for (let i = 0; i < canvas.width; i += 20) {
      for (let j = 0; j < canvas.height; j += 20) {
        if ((i + j) % 40 === 0) {
          ctx.fillRect(i, j, 2, 2)
        }
      }
    }

    // Header section with company branding
    const headerHeight = 130
    const headerGradient = ctx.createLinearGradient(0, 0, 0, headerHeight)
    headerGradient.addColorStop(0, '#3b82f6')
    headerGradient.addColorStop(1, '#8b5cf6')
    ctx.fillStyle = headerGradient
    ctx.fillRect(0, 0, canvas.width, headerHeight)

    // Company name
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 32px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('BARCELONA PAINT CENTER', canvas.width / 2, 45)

    // Report title
    ctx.fillStyle = '#a7f3d0'
    ctx.font = 'bold 20px Arial'
    ctx.fillText('ADMIN DAILY SALES REPORT', canvas.width / 2, 75)

    // Date and time
    ctx.fillStyle = '#e6fffa'
    ctx.font = '16px Arial'
    ctx.fillText(formatDateTime(new Date()), canvas.width / 2, 100)

    // Report ID
    ctx.fillStyle = '#cbd5e1'
    ctx.font = '12px Arial'
    ctx.fillText(`Report ID: ADM-${Date.now().toString().slice(-8)}`, canvas.width / 2, 120)

    let currentY = headerHeight + 25

    // Admin Report Section - Complete Details
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(25, currentY, canvas.width - 50, 100)
    ctx.strokeStyle = '#e2e8f0'
    ctx.lineWidth = 2
    ctx.strokeRect(25, currentY, canvas.width - 50, 100)

    // Admin section header
    ctx.fillStyle = '#3b82f6'
    ctx.font = 'bold 18px Arial'
    ctx.textAlign = 'left'
    ctx.fillText('🛡️ ADMIN INFORMATION', 45, currentY + 25)

    // Admin details - Complete
    ctx.fillStyle = '#374151'
    ctx.font = '14px Arial'
    ctx.fillText(`Admin: Admin User`, 45, currentY + 50)
    ctx.fillText(`Admin ID: ADM-001`, 45, currentY + 70)
    ctx.fillText(`Date: ${todayFormatted}`, 350, currentY + 50)
    ctx.fillText(`Period: ${selectedRange.value.toUpperCase()}`, 350, currentY + 70)

    // Status badge
    ctx.fillStyle = '#059669'
    ctx.fillRect(45, currentY + 80, 120, 15)
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 12px Arial'
    ctx.fillText('✓ SYSTEM ACTIVE', 50, currentY + 90)

    currentY += 120

    // Performance Section - Complete Metrics
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(25, currentY, canvas.width - 50, 160)
    ctx.strokeStyle = '#e2e8f0'
    ctx.lineWidth = 2
    ctx.strokeRect(25, currentY, canvas.width - 50, 160)

    // Performance header
    ctx.fillStyle = '#059669'
    ctx.font = 'bold 18px Arial'
    ctx.fillText(`💰 OVERALL PERFORMANCE (${selectedRange.value.toUpperCase()})`, 45, currentY + 25)

    // Performance metrics in a detailed grid
    const metrics = [
      { label: 'Total Revenue', value: formatCurrency(totalRevenue.value), color: '#059669', icon: '💰' },
      { label: 'Total Orders', value: `${totalOrders.value} orders`, color: '#0891b2', icon: '📋' },
      { label: 'Items Sold', value: `${totalProductsSold.value} pieces`, color: '#7c3aed', icon: '📦' },
      { label: 'Average Order', value: formatCurrency(averageOrderValue.value), color: '#ea580c', icon: '📊' }
    ]

    metrics.forEach((metric, index) => {
      const x = 45 + (index % 2) * 280
      const y = currentY + 55 + Math.floor(index / 2) * 50

      // Metric background with border
      ctx.fillStyle = metric.color + '15'
      ctx.fillRect(x - 5, y - 25, 270, 45)
      ctx.strokeStyle = metric.color + '40'
      ctx.lineWidth = 1
      ctx.strokeRect(x - 5, y - 25, 270, 45)

      // Icon
      ctx.fillStyle = metric.color
      ctx.font = '16px Arial'
      ctx.fillText(metric.icon, x, y - 5)

      // Metric label
      ctx.fillStyle = '#6b7280'
      ctx.font = '13px Arial'
      ctx.fillText(metric.label, x + 25, y - 5)

      // Metric value
      ctx.fillStyle = metric.color
      ctx.font = 'bold 20px Arial'
      ctx.fillText(metric.value, x + 25, y + 15)
    })

    currentY += 180

    // Top Products Section - Complete Details with Fixed Layout
    if (sortedTopProducts.value.length > 0) {
      const productsToShow = Math.min(sortedTopProducts.value.length, 5)
      const sectionHeight = productsToShow * 80 + 120 // Increased spacing between rows
      
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(25, currentY, canvas.width - 50, sectionHeight)
      ctx.strokeStyle = '#e2e8f0'
      ctx.lineWidth = 2
      ctx.strokeRect(25, currentY, canvas.width - 50, sectionHeight)
      
      // Top products header
      ctx.fillStyle = '#7c3aed'
      ctx.font = 'bold 18px Arial'
      ctx.fillText(`🏆 TOP PRODUCTS (${selectedRange.value.toUpperCase()})`, 45, currentY + 25)
      
      // Column headers with proper spacing
      ctx.fillStyle = '#6b7280'
      ctx.font = 'bold 11px Arial'
      ctx.textAlign = 'left'
      ctx.fillText('RANK', 50, currentY + 55)
      ctx.fillText('PRODUCT NAME', 100, currentY + 55)
      ctx.fillText('CATEGORY', 280, currentY + 55)
      ctx.fillText('UNITS', 380, currentY + 55)
      ctx.fillText('REVENUE', 460, currentY + 55)
      ctx.fillText('AMOUNT', 580, currentY + 55)
      ctx.fillText('%', 680, currentY + 55)
      
      // Draw header line
      ctx.strokeStyle = '#e2e8f0'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(45, currentY + 60)
      ctx.lineTo(canvas.width - 45, currentY + 60)
      ctx.stroke()
      
      // Products list with improved layout and no overlapping
      sortedTopProducts.value.slice(0, productsToShow).forEach((product, index) => {
        const y = currentY + 85 + (index * 80) // Increased spacing between rows
      
        // Alternating row background
        if (index % 2 === 0) {
          ctx.fillStyle = '#f8fafc'
          ctx.fillRect(35, y - 30, canvas.width - 70, 75)
        }
      
        // Rank circle with gradient
        const rankGradient = ctx.createRadialGradient(70, y, 0, 70, y, 18)
        rankGradient.addColorStop(0, '#7c3aed')
        rankGradient.addColorStop(1, '#5b21b6')
        ctx.fillStyle = rankGradient
        ctx.beginPath()
        ctx.arc(70, y, 18, 0, 2 * Math.PI)
        ctx.fill()
      
        // Rank number
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 16px Arial'
        ctx.textAlign = 'center'
        ctx.fillText((index + 1).toString(), 70, y + 6)
      
        // Product name (truncate if needed)
        ctx.fillStyle = '#374151'
        ctx.font = 'bold 13px Arial'
        ctx.textAlign = 'left'
        const productName = product.name.length > 18 ? product.name.substring(0, 18) + '...' : product.name
        ctx.fillText(productName, 100, y - 10)
      
        // Category
        ctx.fillStyle = '#7c3aed'
        ctx.font = '11px Arial'
        ctx.fillText(product.category || 'N/A', 280, y - 10)
      
        // Units sold
        ctx.fillStyle = '#374151'
        ctx.font = 'bold 14px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(`${product.units}`, 400, y - 10)
        ctx.fillStyle = '#6b7280'
        ctx.font = '10px Arial'
        ctx.fillText('units', 400, y + 5)
      
        // Revenue
        ctx.fillStyle = '#059669'
        ctx.font = 'bold 13px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(formatCurrency(product.revenue), 500, y - 10)
        ctx.fillStyle = '#6b7280'
        ctx.font = '9px Arial'
        ctx.fillText('total revenue', 500, y + 5)
      
        // Amount (Price per unit)
        const avgPrice = product.units > 0 ? product.revenue / product.units : 0
        ctx.fillStyle = '#0891b2'
        ctx.font = 'bold 13px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(formatCurrency(avgPrice), 610, y - 10)
        ctx.fillStyle = '#6b7280'
        ctx.font = '9px Arial'
        ctx.fillText('per unit', 610, y + 5)
      
        // Percentage of total
        ctx.fillStyle = '#ea580c'
        ctx.font = 'bold 12px Arial'
        ctx.textAlign = 'center'
        const percentage = totalRevenue.value > 0 ? ((product.revenue / totalRevenue.value) * 100).toFixed(1) : 0
        ctx.fillText(`${percentage}%`, 700, y - 10)
        ctx.fillStyle = '#6b7280'
        ctx.font = '9px Arial'
        ctx.fillText('of total', 700, y + 5)
      
        // Additional product details on second line
        ctx.fillStyle = '#6b7280'
        ctx.font = '10px Arial'
        ctx.textAlign = 'left'
        ctx.fillText(`Stock ID: ${product.id.substring(0, 8)}`, 100, y + 20)
      })
    
      currentY += sectionHeight + 30
    }
    
    // Sales Summary by Payment Method
    if (sales.value.length > 0) {
      const paymentMethods = {}
      sales.value.forEach(sale => {
        const method = sale.paymentMethod || 'cash'
        if (!paymentMethods[method]) {
          paymentMethods[method] = { count: 0, total: 0 }
        }
        paymentMethods[method].count++
        paymentMethods[method].total += sale.total
      })
      
      const sectionHeight = 120
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(25, currentY, canvas.width - 50, sectionHeight)
      ctx.strokeStyle = '#e2e8f0'
      ctx.lineWidth = 2
      ctx.strokeRect(25, currentY, canvas.width - 50, sectionHeight)
      
      // Payment methods header
      ctx.fillStyle = '#0891b2'
      ctx.font = 'bold 18px Arial'
      ctx.textAlign = 'left'
      ctx.fillText('💳 PAYMENT METHODS BREAKDOWN', 45, currentY + 25)
      
      let methodY = currentY + 50
      Object.entries(paymentMethods).forEach(([method, data], index) => {
        const x = 45 + (index % 2) * 280
        const y = methodY + Math.floor(index / 2) * 30
        
        // Payment method details
        ctx.fillStyle = '#374151'
        ctx.font = 'bold 14px Arial'
        ctx.fillText(formatPaymentMethod(method), x, y)
        
        ctx.fillStyle = '#6b7280'
        ctx.font = '12px Arial'
        ctx.fillText(`${data.count} orders • ${formatCurrency(data.total)}`, x, y + 15)
      })
      
      currentY += sectionHeight + 30
    }
    
    // Recent Sales Section - Fixed Layout with No Overlapping
    if (sales.value.length > 0) {
      const salesToShow = Math.min(sales.value.length, 5)
      const sectionHeight = salesToShow * 100 + 120 // Fixed height per transaction
      
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(25, currentY, canvas.width - 50, sectionHeight)
      ctx.strokeStyle = '#e2e8f0'
      ctx.lineWidth = 2
      ctx.strokeRect(25, currentY, canvas.width - 50, sectionHeight)
      
      // Recent sales header
      ctx.fillStyle = '#0891b2'
      ctx.font = 'bold 18px Arial'
      ctx.fillText('🛒 RECENT TRANSACTIONS (COMPLETE DETAILS)', 45, currentY + 25)
      
      // Column headers with better spacing
      ctx.fillStyle = '#6b7280'
      ctx.font = 'bold 11px Arial'
      ctx.textAlign = 'left'
      ctx.fillText('ORDER ID', 50, currentY + 55)
      ctx.fillText('TIME', 150, currentY + 55)
      ctx.fillText('CUSTOMER', 220, currentY + 55)
      ctx.fillText('CONTACT', 350, currentY + 55)
      ctx.fillText('ITEMS', 450, currentY + 55)
      ctx.fillText('PAYMENT', 520, currentY + 55)
      ctx.fillText('AMOUNT', 650, currentY + 55)
      
      // Draw header line
      ctx.strokeStyle = '#e2e8f0'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(45, currentY + 60)
      ctx.lineTo(canvas.width - 45, currentY + 60)
      ctx.stroke()
      
      // Sales list with proper spacing and no overlapping
      sales.value.slice(0, salesToShow).forEach((sale, index) => {
        const y = currentY + 85 + (index * 100) // Fixed spacing between transactions
        
        // Alternating row background
        if (index % 2 === 0) {
          ctx.fillStyle = '#f8fafc'
          ctx.fillRect(35, y - 25, canvas.width - 70, 95)
        }
        
        // Transaction border
        ctx.strokeStyle = '#e5e7eb'
        ctx.lineWidth = 1
        ctx.strokeRect(40, y - 25, canvas.width - 80, 85)
        
        // Row 1: Order ID and Time (Fixed spacing)
        ctx.fillStyle = '#374151'
        ctx.font = 'bold 14px Arial'
        ctx.textAlign = 'left'
        ctx.fillText(sale.orderId, 50, y - 5)
        
        ctx.fillStyle = '#6b7280'
        ctx.font = '12px Arial'
        ctx.fillText(formatTime(sale.date), 150, y - 5)
        
        // Amount (right aligned)
        ctx.fillStyle = '#059669'
        ctx.font = 'bold 18px Arial'
        ctx.textAlign = 'right'
        ctx.fillText(formatCurrency(sale.total), canvas.width - 50, y)
        
        // Row 2: Customer and Contact (with proper spacing)
        ctx.fillStyle = '#374151'
        ctx.font = 'bold 13px Arial'
        ctx.textAlign = 'left'
        const customerName = sale.customerName.length > 15 ? sale.customerName.substring(0, 15) + '...' : sale.customerName
        ctx.fillText(customerName, 50, y + 20)
        
        ctx.fillStyle = '#6b7280'
        ctx.font = '11px Arial'
        const contact = sale.customerContactNo || 'No contact'
        const contactText = contact.length > 15 ? contact.substring(0, 15) + '...' : contact
        ctx.fillText(contactText, 220, y + 20)
        
        // Items count
        ctx.fillStyle = '#7c3aed'
        ctx.font = 'bold 12px Arial'
        ctx.fillText(`${sale.products.length} items`, 350, y + 20)
        
        // Payment method
        ctx.fillStyle = '#0891b2'
        ctx.font = '11px Arial'
        ctx.fillText(formatPaymentMethod(sale.paymentMethod), 450, y + 20)
        
        // Row 3: Product details and Status (with more spacing)
        ctx.fillStyle = '#6b7280'
        ctx.font = '11px Arial'
        const firstProduct = sale.products[0]?.name || 'N/A'
        const productText = firstProduct.length > 20 ? firstProduct.substring(0, 20) + '...' : firstProduct
        ctx.fillText(`Product: ${productText}`, 50, y + 45)
        
        // Status with colored background
        const statusColor = sale.status === 'completed' ? '#059669' : sale.status === 'pending' ? '#ea580c' : '#dc2626'
        const statusBgColor = sale.status === 'completed' ? '#d1fae5' : sale.status === 'pending' ? '#fed7aa' : '#fecaca'
        
        // Status background
        ctx.fillStyle = statusBgColor
        ctx.fillRect(450, y + 30, 80, 20)
        ctx.strokeStyle = statusColor
        ctx.lineWidth = 1
        ctx.strokeRect(450, y + 30, 80, 20)
        
        // Status text
        ctx.fillStyle = statusColor
        ctx.font = 'bold 10px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(sale.status.toUpperCase(), 490, y + 42)
        
        // Percentage of total (right side)
        ctx.fillStyle = '#6b7280'
        ctx.font = '10px Arial'
        ctx.textAlign = 'right'
        const percentage = totalRevenue.value > 0 ? ((sale.total / totalRevenue.value) * 100).toFixed(1) : 0
        ctx.fillText(`${percentage}% of total`, canvas.width - 50, y + 45)
      })
      
      currentY += sectionHeight + 30
    }
    
    // Footer section with complete information
    const footerY = canvas.height - 120
    ctx.fillStyle = '#f1f5f9'
    ctx.fillRect(0, footerY, canvas.width, 120)
    
    // Footer border
    ctx.strokeStyle = '#e2e8f0'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(0, footerY)
    ctx.lineTo(canvas.width, footerY)
    ctx.stroke()
    
    // Footer content
    ctx.fillStyle = '#374151'
    ctx.font = 'bold 14px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('ADMIN REPORT SUMMARY', canvas.width / 2, footerY + 25)
    
    ctx.fillStyle = '#6b7280'
    ctx.font = '12px Arial'
    ctx.fillText(`Generated on: ${formatDateTime(new Date())}`, canvas.width / 2, footerY + 45)
    ctx.fillText('Barcelona Paint Center Admin Portal', canvas.width / 2, footerY + 65)
    
    // Verification status
    ctx.fillStyle = '#3b82f6'
    ctx.font = 'bold 12px Arial'
    ctx.fillText('✓ ALL DATA VERIFIED AND CURRENT', canvas.width / 2, footerY + 85)
    
    // Digital signature
    ctx.fillStyle = '#6b7280'
    ctx.font = '10px Arial'
    ctx.fillText(`Digital Report • Admin: Admin User • Period: ${selectedRange.value.toUpperCase()}`, canvas.width / 2, footerY + 105)
    
    // Convert to blob and download
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = `admin-sales-report-${selectedRange.value}-${todayFormatted.replace(/\s+/g, '-')}.png`
      link.href = url
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      URL.revokeObjectURL(url)
      
      alert('Admin sales report saved successfully! 📋✅')
    }, 'image/png', 0.95)

  } catch (err) {
    console.error('Error generating admin report:', err)
    alert('Failed to generate admin report. Please try again.')
  }
}

// Print daily report
const printDailyReport = () => {
  const reportContent = document.getElementById('daily-report-content')
  if (!reportContent) {
    alert('Daily report content not found.')
    return
  }
  
  const printWindow = window.open('', '_blank')
  if (!printWindow) {
    alert('Please allow pop-ups to print the report.')
    return
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Daily Sales Report</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.5; }
        .report-header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px; }
        .report-header h2 { font-size: 24px; font-weight: bold; color: #1e40af; margin-bottom: 5px; }
        .report-header p { font-size: 14px; color: #0891b2; font-weight: 600; }
        .report-header .date { font-size: 12px; color: #6b7280; margin-top: 5px; }
        .report-content { font-size: 12px; line-height: 1.6; }
        .section { margin-bottom: 15px; }
        .section-title { font-weight: bold; color: #1e40af; margin-bottom: 8px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f3f4f6; font-weight: bold; }
        .footer { text-align: center; margin-top: 20px; font-size: 10px; color: #666; border-top: 1px solid #ddd; padding-top: 10px; }
        .admin-info, .performance, .top-products, .recent-transactions { 
          background-color: rgba(255, 255, 255, 0.8); 
          border: 1px solid #e2e8f0; 
          border-radius: 8px; 
          padding: 15px; 
          margin-bottom: 20px; 
        }
        .section-title { font-size: 16px; font-weight: 700; color: #1e3a8a; margin-bottom: 15px; display: flex; align-items: center; }
        .section-title svg { margin-right: 8px; color: #0891b2; width: 18px; height: 18px;}
        .grid-cols-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
        .grid-cols-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 15px; }
        .metric-box { padding: 10px; border-radius: 6px; display: flex; align-items: center; }
        .metric-label { font-size: 11px; color: #4b5563; font-weight: 600; margin-bottom: 3px;}
        .metric-value { font-size: 18px; font-weight: 800; }
        .product-item, .sale-item { border-bottom: 1px dashed #e5e7eb; padding-bottom: 8px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; }
        .product-item:last-child, .sale-item:last-child { border-bottom: none; margin-bottom: 0; }
        .product-name { font-weight: 600; color: #1f2937; }
        .product-category { font-size: 11px; color: #6b7280; }
        .product-units, .product-revenue, .product-amount, .product-percent { text-align: center; }
        .product-units .value, .product-revenue .value, .product-amount .value { font-weight: 700; }
        .product-units .label, .product-revenue .label, .product-amount .label, .product-percent .label { font-size: 10px; color: #6b7280; }
        .status-badge { padding: 3px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; display: inline-block; }
        .status-completed { background-color: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
        .status-pending { background-color: #ffedd5; color: #92400e; border: 1px solid #fecaca; }
        .status-cancelled { background-color: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; }
        
        @media print {
          body { margin: 0; }
          .report-container { border: none; box-shadow: none; max-width: 100%; padding: 10px; }
          .section-title svg { display: none; } /* Hide icons for print */
          button { display: none; } /* Hide buttons */
        }
      </style>
    </head>
    <body>
      <div class="report-container">
        <div class="report-header">
          <h2>Barcelona Paint Center</h2>
          <p>Admin Daily Sales Report</p>
          <p class="date">${formatDateTime(new Date())}</p>
        </div>
        <div class="report-content">
          ${reportContent.innerHTML}
        </div>
        <div class="footer">
          <p>Report generated for admin review</p>
          <p>Barcelona Paint Center Admin Portal</p>
        </div>
      </div>
    </body>
    </html>
  `)

  printWindow.document.close()
  printWindow.focus() // Required for some browsers to print correctly
  printWindow.print()
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
    
    if (!auth.currentUser) {
      console.error("[v0] Authentication failed: No user currently logged in")
      alert('Authentication failed. Please log in again.')
      isSubmitting.value = false
      return
    }
    
    console.log("[v0] Current user authenticated:", auth.currentUser.uid)
    
    // Validate form
    if (saleForm.value.products.length === 0) {
      alert('Please add at least one product')
      isSubmitting.value = false
      return
    }

    // Validate stock
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
      customerContactNo: saleForm.value.customerContactNo,
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
      date: serverTimestamp(),
      createdBy: auth.currentUser.uid,
      createdAt: serverTimestamp()
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

    try {
      console.log("[v0] Attempting to write to sales collection...")
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
      
      fetchSalesData()
      
    } catch (firestoreError) {
      console.error('[v0] Firestore write error:', firestoreError)
      console.error('[v0] Error code:', firestoreError.code)
      console.error('[v0] Error message:', firestoreError.message)
      
      if (firestoreError.code === 'permission-denied') {
        alert('Permission denied: You do not have permission to add sales. Please contact an administrator.')
      } else if (firestoreError.code === 'unauthenticated') {
        alert('Authentication required: Please log in again.')
      } else {
        alert('Failed to record sale: ' + firestoreError.message)
      }
    }
    
  } catch (err) {
    console.error('[v0] Error in handleAddSale:', err)
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
