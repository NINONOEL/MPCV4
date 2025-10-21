<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-blue-200 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="relative z-10 flex flex-col lg:flex-row h-screen">
      <!-- Mobile Header -->
      <div class="lg:hidden bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
        <div>
          <h1 class="text-lg font-bold text-gray-900">Barcelona Paint Center</h1>
          <div class="text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-2 py-1 rounded-full inline-flex items-center mt-1">
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>
        <button @click="toggleMobileMenu" class="p-2 rounded-lg hover:bg-gray-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div v-if="showMobileMenu" class="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" @click="toggleMobileMenu">
        <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-xl" @click.stop>
          <div class="p-4 border-b border-gray-200">
            <h1 class="text-lg font-bold text-gray-900">Barcelona Paint Center</h1>
            <div class="text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-2 py-1 rounded-full inline-flex items-center mt-1">
              <ShieldIcon class="h-3 w-3 mr-1" />
              Admin Portal
            </div>
          </div>
          
          <nav class="p-4 space-y-2">
            <!-- Made navigation links responsive for mobile -->
            <router-link 
              to="/admin/dashboard" 
              @click="toggleMobileMenu"
              class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100"
            >
              <LayoutDashboardIcon class="w-5 h-5 flex-shrink-0" />
              <span class="text-base">Dashboard</span>
            </router-link>

            <router-link to="/admin/staff" @click="toggleMobileMenu" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100">
              <UsersIcon class="w-5 h-5 flex-shrink-0" />
              <span class="text-base">Staff Management</span>
            </router-link>

            <router-link to="/admin/inventory" @click="toggleMobileMenu" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100">
              <PackageIcon class="w-5 h-5 flex-shrink-0" />
              <span class="text-base">Inventory</span>
            </router-link>

            <router-link to="/admin/house-paint-recommender" @click="toggleMobileMenu" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100">
              <HomeIcon class="w-5 h-5 flex-shrink-0" />
              <span class="text-base">Paint Recommender</span>
            </router-link>

            <router-link to="/admin/paint-mixing" @click="toggleMobileMenu" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100">
              <PaletteIcon class="w-5 h-5 flex-shrink-0" />
              <span class="text-base">Paint Mixing</span>
            </router-link>

            <router-link to="/admin/sales-analytics" @click="toggleMobileMenu" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100">
              <TrendingUpIcon class="w-5 h-5 flex-shrink-0" />
              <span class="text-base">Sales Analytics</span>
            </router-link>

            <router-link to="/admin/visualization" @click="toggleMobileMenu" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 shadow-sm border border-indigo-200">
              <BarChart3Icon class="w-5 h-5 flex-shrink-0" />
              <span class="text-base">Data Visualization</span>
            </router-link>

            <router-link to="/admin/settings" @click="toggleMobileMenu" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100">
              <SettingsIcon class="w-5 h-5 flex-shrink-0" />
              <span class="text-base">Settings</span>
            </router-link>
          </nav>

          <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <UserIcon class="w-5 h-5 text-white" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
                <p class="text-xs text-gray-600 truncate">{{ userEmail }}</p>
              </div>
              <button @click="handleLogout" class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0" title="Logout">
                <LogOutIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Sidebar -->
      <aside class="w-64 bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 hidden lg:flex lg:flex-col shadow-lg">
        <div class="p-4 xl:p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-2 xl:px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>

        <nav class="flex-1 p-3 xl:p-4 space-y-1 xl:space-y-2 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
          >
            <LayoutDashboardIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Dashboard</span>
          </router-link>

          <router-link to="/admin/staff" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700">
            <UsersIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Staff Management</span>
          </router-link>

          <router-link to="/admin/inventory" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700">
            <PackageIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Inventory</span>
          </router-link>

          <router-link to="/admin/house-paint-recommender" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700">
            <HomeIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Paint Recommender</span>
          </router-link>

          <router-link to="/admin/paint-mixing" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700">
            <PaletteIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Paint Mixing</span>
          </router-link>

          <router-link to="/admin/sales-analytics" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700">
            <TrendingUpIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Sales Analytics</span>
          </router-link>

          <router-link to="/admin/visualization" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 shadow-sm border border-indigo-200">
            <BarChart3Icon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Data Visualization</span>
          </router-link>

          <router-link to="/admin/settings" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700">
            <SettingsIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Settings</span>
          </router-link>
        </nav>

        <div class="p-3 xl:p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-2 xl:gap-3">
            <div class="w-8 xl:w-10 h-8 xl:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <UserIcon class="w-4 xl:w-5 h-4 xl:h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs xl:text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail }}</p>
            </div>
            <button @click="handleLogout" class="p-1.5 xl:p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0" title="Logout">
              <LogOutIcon class="w-4 xl:w-5 h-4 xl:h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <header class="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="lg:pl-0">
              <h1 class="text-xl sm:text-2xl font-bold text-gray-900">Data Visualization</h1>
              <p class="text-sm sm:text-base text-gray-600">Visual analytics and business insights</p>
            </div>
            <!-- Updated to match AdminDashboard header format with calendar icon, proper date formatting, and dynamic user name -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div class="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                <CalendarIcon class="w-4 sm:w-5 h-4 sm:h-5 text-blue-500 flex-shrink-0" />
                <span class="truncate">{{ currentDate }}</span>
              </div>
              <div class="hidden sm:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-sm sm:text-base text-gray-900 truncate">Welcome, {{ userDisplayName || 'Admin' }}</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- Enhanced controls section with better UI and TODAY option -->
        <div class="bg-gradient-to-r from-white to-gray-50 border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
            <div class="flex items-center gap-2">
              <CalendarIcon class="w-5 h-5 text-indigo-600" />
              <h3 class="text-lg font-semibold text-gray-800">Analytics Dashboard</h3>
            </div>
            
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <!-- Enhanced dropdown with TODAY option and better styling -->
              <div class="relative">
                <select 
                  v-model="selectedRange" 
                  @change="fetchSalesData"
                  class="appearance-none px-4 py-2.5 pr-10 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-gray-300 transition-all duration-200 w-full sm:w-auto shadow-sm"
                >
                  <option value="today">📅 Today</option>
                  <option value="7d">📊 Last 7 days</option>
                  <option value="30d">📈 Last 30 days</option>
                  <option value="3m">📉 Last 3 months</option>
                  <option value="1y">🗓️ Last year</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDownIcon class="w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <!-- Enhanced refresh button with better styling -->
              <button 
                @click="refreshData" 
                class="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
              >
                <RefreshCwIcon class="w-4 h-4" />
                <span>Refresh Data</span>
              </button>
            </div>
          </div>
        </div>

        <div class="p-3 sm:p-4 lg:p-6 xl:p-8">
          <!-- Loading State -->
          <div v-if="loading" class="flex items-center justify-center py-12">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <span class="ml-2 text-gray-600">Loading data...</span>
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p class="text-red-800">{{ error }}</p>
            <button @click="fetchSalesData" class="mt-2 text-red-600 hover:text-red-800 underline">Try again</button>
          </div>

          <!-- Content -->
          <div v-else>
            <!-- Summary Cards -->
            <!-- Improved responsive grid for summary cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6">
                <div class="flex items-center justify-between">
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-medium text-gray-600 truncate">Total Revenue</p>
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ formatCurrency(totalRevenue) }}</p>
                    <p class="text-xs sm:text-sm text-green-600 mt-1">+12.5% from last period</p>
                  </div>
                  <div class="p-2 sm:p-3 bg-green-100 rounded-full flex-shrink-0 ml-2">
                    <DollarSignIcon class="w-4 sm:w-6 h-4 sm:h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6">
                <div class="flex items-center justify-between">
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-medium text-gray-600 truncate">Total Orders</p>
                    <p class="text-lg sm:text-xl font-bold text-gray-900">{{ formatLargeNumber(totalOrders) }}</p>
                    <p class="text-xs sm:text-sm text-blue-600 mt-1">+8.3% from last period</p>
                  </div>
                  <div class="p-2 sm:p-3 bg-blue-100 rounded-full flex-shrink-0 ml-2">
                    <ShoppingCartIcon class="w-4 sm:w-6 h-4 sm:h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6">
                <div class="flex items-center justify-between">
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-medium text-gray-600 truncate">Products Sold</p>
                    <p class="text-lg sm:text-xl font-bold text-gray-900">{{ formatLargeNumber(totalProductsSold) }}</p>
                    <p class="text-xs sm:text-sm text-purple-600 mt-1">+15.7% from last period</p>
                  </div>
                  <div class="p-2 sm:p-3 bg-purple-100 rounded-full flex-shrink-0 ml-2">
                    <PackageIcon class="w-4 sm:w-6 h-4 sm:h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6">
                <div class="flex items-center justify-between">
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-medium text-gray-600 truncate">Avg Order Value</p>
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ formatCurrency(averageOrderValue) }}</p>
                    <p class="text-xs sm:text-sm text-orange-600 mt-1">+3.2% from last period</p>
                  </div>
                  <div class="p-2 sm:p-3 bg-orange-100 rounded-full flex-shrink-0 ml-2">
                    <TrendingUpIcon class="w-4 sm:w-6 h-4 sm:h-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Charts Section -->
            <!-- Made charts responsive with better mobile layout -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900">Daily Sales Trend</h3>
                  <div class="flex items-center gap-2">
                    <button @click="toggleSalesChartType" class="text-xs sm:text-sm text-blue-600 hover:text-blue-800 px-2 py-1 rounded">
                      {{ salesChartType === 'line' ? 'Bar View' : 'Line View' }}
                    </button>
                  </div>
                </div>
                <div class="h-48 sm:h-64 relative">
                  <canvas ref="salesChart" class="w-full h-full"></canvas>
                  <div v-if="dailySales.length === 0" class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm text-center px-4">
                    No sales data available for the selected period
                  </div>
                </div>
              </div>

              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900">Sales by Category</h3>
                  <span class="text-xs sm:text-sm text-gray-600">{{ salesByCategory.length }} categories</span>
                </div>
                <div class="h-48 sm:h-64 relative">
                  <canvas ref="categoryChart" class="w-full h-full"></canvas>
                  <div v-if="salesByCategory.length === 0" class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm text-center px-4">
                    No category data available
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Charts -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900">Top Products Performance</h3>
                  <span class="text-xs sm:text-sm text-gray-600">Top {{ topProducts.length }} products</span>
                </div>
                <div class="h-48 sm:h-64 relative">
                  <canvas ref="productsChart" class="w-full h-full"></canvas>
                  <div v-if="topProducts.length === 0" class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm text-center px-4">
                    No product sales data available
                  </div>
                </div>
              </div>

              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900">Payment Methods Distribution</h3>
                  <span class="text-xs sm:text-sm text-gray-600">{{ totalOrders }} transactions</span>
                </div>
                <div class="h-48 sm:h-64 relative">
                  <canvas ref="paymentChart" class="w-full h-full"></canvas>
                  <div v-if="sales.length === 0" class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm text-center px-4">
                    No payment data available
                  </div>
                </div>
              </div>
            </div>

            <!-- Monthly Comparison Chart -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6 mb-6 lg:mb-8">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <h3 class="text-base sm:text-lg font-bold text-gray-900">Monthly Revenue Comparison</h3>
                <span class="text-xs sm:text-sm text-gray-600">Last 12 months</span>
              </div>
              <div class="h-48 sm:h-64 relative">
                <canvas ref="monthlyChart" class="w-full h-full"></canvas>
              </div>
            </div>

            <!-- Data Tables -->
            <!-- Made data tables responsive with horizontal scrolling on mobile -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900">Top Selling Products</h3>
                  <button @click="exportProductData" class="text-xs sm:text-sm text-blue-600 hover:text-blue-800 px-2 py-1 rounded self-start sm:self-auto">
                    Export Data
                  </button>
                </div>
                <div class="space-y-2 sm:space-y-3 max-h-60 sm:max-h-80 overflow-y-auto">
                  <div v-for="(product, index) in topProducts" :key="product.id" class="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div class="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div class="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                        {{ index + 1 }}
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="font-medium text-gray-900 text-sm sm:text-base truncate">{{ product.name }}</p>
                        <p class="text-xs sm:text-sm text-gray-600 truncate">{{ product.category }}</p>
                      </div>
                    </div>
                    <div class="text-right flex-shrink-0 ml-2">
                      <p class="font-bold text-gray-900 text-sm sm:text-base">{{ formatLargeNumber(product.units) }} sold</p>
                      <p class="text-xs sm:text-sm text-green-600">{{ formatCurrency(product.revenue) }}</p>
                    </div>
                  </div>
                  <div v-if="topProducts.length === 0" class="text-center py-6 sm:py-8 text-gray-500">
                    <PackageIcon class="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 text-gray-300" />
                    <p class="text-sm">No product data available</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900">Sales by Category</h3>
                  <button @click="exportCategoryData" class="text-xs sm:text-sm text-blue-600 hover:text-blue-800 px-2 py-1 rounded self-start sm:self-auto">
                    Export Data
                  </button>
                </div>
                <div class="space-y-2 sm:space-y-3 max-h-60 sm:max-h-80 overflow-y-auto">
                  <div v-for="(category, index) in salesByCategory" :key="category.name" class="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div class="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div class="w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                        {{ index + 1 }}
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="font-medium text-gray-900 text-sm sm:text-base truncate">{{ category.name }}</p>
                        <p class="text-xs sm:text-sm text-gray-600">{{ formatLargeNumber(category.units) }} units sold</p>
                      </div>
                    </div>
                    <div class="text-right flex-shrink-0 ml-2">
                      <p class="font-bold text-gray-900 text-sm sm:text-base">{{ formatCurrency(category.revenue) }}</p>
                      <p class="text-xs sm:text-sm text-blue-600">{{ formatLargeNumber(category.orders) }} orders</p>
                    </div>
                  </div>
                  <div v-if="salesByCategory.length === 0" class="text-center py-6 sm:py-8 text-gray-500">
                    <BarChart3Icon class="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 text-gray-300" />
                    <p class="text-sm">No category data available</p>
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
import { ref, onMounted, nextTick, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  LayoutDashboard as LayoutDashboardIcon,
  Users as UsersIcon,
  Package as PackageIcon,
  Home as HomeIcon,
  Palette as PaletteIcon,
  TrendingUp as TrendingUpIcon,
  Settings as SettingsIcon,
  Shield as ShieldIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  BarChart3 as BarChart3Icon,
  RefreshCw as RefreshCwIcon,
  DollarSign as DollarSignIcon,
  ShoppingCart as ShoppingCartIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  ChevronDown as ChevronDownIcon
} from 'lucide-vue-next'
import { collection, query, getDocs, orderBy, onSnapshot, where } from 'firebase/firestore'
import { db, auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'
import Chart from 'chart.js/auto'

const showMobileMenu = ref(false)
const router = useRouter()
const salesChart = ref(null)
const categoryChart = ref(null)
const productsChart = ref(null)
const paymentChart = ref(null)
const monthlyChart = ref(null)
const loading = ref(true)
const error = ref(null)
const selectedRange = ref('30d')
const salesChartType = ref('line')
const totalRevenue = ref(0)
const totalOrders = ref(0)
const totalProductsSold = ref(0)
const averageOrderValue = ref(0)
const userEmail = ref('')
const userDisplayName = ref('')
const sales = ref([])
const topProducts = ref([])
const salesByCategory = ref([])
const dailySales = ref([])
const monthlySales = ref([])
const pageSize = ref(100)
const currentPage = ref(0)
const totalSalesCount = ref(0)

const dataCache = new Map()
const calculationCache = new Map()
let salesChartInstance = null
let categoryChartInstance = null
let productsChartInstance = null
let paymentChartInstance = null
let monthlyChartInstance = null
let unsubscribe = null

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const formatLargeNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toLocaleString()
}

const formatCurrency = (num) => {
  if (num >= 1000000) {
    return '₱' + (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return '₱' + (num / 1000).toFixed(1) + 'K'
  }
  return '₱' + num.toLocaleString()
}

const getDateRange = () => {
  const now = new Date()
  let startDate = new Date()
  
  switch(selectedRange.value) {
    case 'today':
      startDate.setHours(0, 0, 0, 0)
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
  
  return { startDate, endDate: now }
}

const fetchUserInfo = () => {
  const user = auth.currentUser
  if (user) {
    userEmail.value = user.email || ''
    userDisplayName.value = user.displayName || 'Admin'
  }
}

const fetchSalesData = async () => {
  try {
    loading.value = true
    error.value = null

    const { startDate, endDate } = getDateRange()
    const cacheKey = `${selectedRange.value}_${startDate.getTime()}`

    if (dataCache.has(cacheKey)) {
      const cachedData = dataCache.get(cacheKey)
      sales.value = cachedData
      processData(cachedData)
      loading.value = false
      return
    }

    const salesRef = collection(db, 'sales')
    const q = query(salesRef, orderBy('date', 'desc'))

    if (unsubscribe) {
      unsubscribe()
    }

    unsubscribe = onSnapshot(q, (snapshot) => {
      const salesData = []
      let revenue = 0
      let productsSold = 0
      
      snapshot.forEach((doc) => {
        const data = doc.data()
        const sale = { 
          id: doc.id,
          orderId: data.orderId || `ORD-${doc.id.substring(0, 8)}`,
          customerName: data.customerName || 'Unknown Customer',
          products: data.products || [],
          total: Number(data.total) || 0,
          status: data.status || 'completed',
          paymentMethod: data.paymentMethod || 'cash',
          date: data.date
        }
        
        if (sale.date && typeof sale.date.toDate === 'function') {
          sale.date = sale.date.toDate()
        } else if (!sale.date) {
          sale.date = new Date()
        }
        
        if (sale.date >= startDate && sale.date <= endDate) {
          salesData.push(sale)
          revenue += Number(sale.total) || 0
          
          const soldItems = sale.products?.reduce((sum, product) => {
            return sum + (Number(product.quantity) || 0)
          }, 0) || 0
          
          productsSold += soldItems
        }
      })

      dataCache.set(cacheKey, salesData)
      sales.value = salesData
      totalSalesCount.value = salesData.length
      
      processData(salesData)
      loading.value = false
      
      nextTick(() => {
        createCharts()
      })
    }, (err) => {
      console.error('Error fetching sales:', err)
      error.value = 'Failed to load sales data: ' + err.message
      loading.value = false
    })

  } catch (err) {
    console.error('Error in fetchSalesData:', err)
    error.value = 'Failed to fetch sales data: ' + err.message
    loading.value = false
  }
}

const processData = (salesData) => {
  const cacheKey = `process_${selectedRange.value}`
  
  if (calculationCache.has(cacheKey)) {
    const cached = calculationCache.get(cacheKey)
    totalRevenue.value = cached.revenue
    totalOrders.value = cached.orders
    totalProductsSold.value = cached.productsSold
    averageOrderValue.value = cached.avgOrderValue
    topProducts.value = cached.topProducts
    salesByCategory.value = cached.salesByCategory
    dailySales.value = cached.dailySales
    monthlySales.value = cached.monthlySales
    return
  }

  let revenue = 0
  let productsSold = 0
  
  const maxProcessRecords = 50000
  const recordsToProcess = salesData.slice(0, maxProcessRecords)
  
  recordsToProcess.forEach(sale => {
    revenue += Number(sale.total) || 0
    const soldItems = sale.products?.reduce((sum, product) => {
      return sum + (Number(product.quantity) || 0)
    }, 0) || 0
    productsSold += soldItems
  })

  const avgOrderValue = recordsToProcess.length ? Math.round(revenue / recordsToProcess.length) : 0
  
  totalRevenue.value = revenue
  totalOrders.value = recordsToProcess.length
  totalProductsSold.value = productsSold
  averageOrderValue.value = avgOrderValue
  
  calculateTopProducts(recordsToProcess)
  calculateSalesByCategory(recordsToProcess)
  calculateDailySales(recordsToProcess)
  calculateMonthlySales(recordsToProcess)

  calculationCache.set(cacheKey, {
    revenue,
    orders: recordsToProcess.length,
    productsSold,
    avgOrderValue,
    topProducts: topProducts.value,
    salesByCategory: salesByCategory.value,
    dailySales: dailySales.value,
    monthlySales: monthlySales.value
  })
}

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
    .slice(0, 15)
}

const calculateSalesByCategory = (salesData) => {
  const categoryMap = new Map()
  
  salesData.forEach(sale => {
    sale.products.forEach(product => {
      const category = product.category || 'Uncategorized'
      const existing = categoryMap.get(category) || {
        name: category,
        revenue: 0,
        units: 0,
        orders: 0
      }
      
      existing.revenue += Number(product.price) * Number(product.quantity)
      existing.units += Number(product.quantity)
      existing.orders += 1
      categoryMap.set(category, existing)
    })
  })

  salesByCategory.value = Array.from(categoryMap.values())
    .sort((a, b) => b.revenue - a.revenue)
}

const calculateDailySales = (salesData) => {
  const dailySalesMap = new Map()
  const now = new Date()
  
  for (let i = 13; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    dailySalesMap.set(dateStr, {
      date: dateStr,
      revenue: 0,
      orders: 0
    })
  }

  salesData.forEach(sale => {
    const dateStr = sale.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    if (dailySalesMap.has(dateStr)) {
      const existing = dailySalesMap.get(dateStr)
      existing.revenue += Number(sale.total)
      existing.orders += 1
    }
  })

  dailySales.value = Array.from(dailySalesMap.values())
}

const calculateMonthlySales = (salesData) => {
  const monthlySalesMap = new Map()
  const now = new Date()
  
  for (let i = 11; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const monthStr = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    monthlySalesMap.set(monthStr, {
      month: monthStr,
      revenue: 0,
      orders: 0
    })
  }

  salesData.forEach(sale => {
    const monthStr = sale.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    if (monthlySalesMap.has(monthStr)) {
      const existing = monthlySalesMap.get(monthStr)
      existing.revenue += Number(sale.total)
      existing.orders += 1
    }
  })

  monthlySales.value = Array.from(monthlySalesMap.values())
}

const destroyCharts = () => {
  if (salesChartInstance) {
    salesChartInstance.destroy()
    salesChartInstance = null
  }
  if (categoryChartInstance) {
    categoryChartInstance.destroy()
    categoryChartInstance = null
  }
  if (productsChartInstance) {
    productsChartInstance.destroy()
    productsChartInstance = null
  }
  if (paymentChartInstance) {
    paymentChartInstance.destroy()
    paymentChartInstance = null
  }
  if (monthlyChartInstance) {
    monthlyChartInstance.destroy()
    monthlyChartInstance = null
  }
}

const createSalesChart = () => {
  if (!salesChart.value || dailySales.value.length === 0) return
  
  const decimatedData = dailySales.value.length > 30 
    ? dailySales.value.filter((_, i) => i % Math.ceil(dailySales.value.length / 30) === 0)
    : dailySales.value
  
  const ctx = salesChart.value.getContext('2d')
  salesChartInstance = new Chart(ctx, {
    type: salesChartType.value,
    data: {
      labels: decimatedData.map(d => d.date),
      datasets: [{
        label: 'Daily Revenue',
        data: decimatedData.map(d => d.revenue),
        borderColor: '#3B82F6',
        backgroundColor: salesChartType.value === 'line' ? 'rgba(59, 130, 246, 0.1)' : '#3B82F6',
        tension: 0.4,
        fill: salesChartType.value === 'line',
        pointRadius: 3,
        pointHoverRadius: 5,
        segment: {
          borderColor: ctx => ctx.p0DataIndex % 2 === 0 ? '#3B82F6' : '#3B82F6'
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: dailySales.value.length > 100 ? false : { duration: 300 },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Revenue: ${formatCurrency(context.parsed.y)}`
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              if (value >= 1000000) {
                return '₱' + (value / 1000000).toFixed(0) + 'M'
              } else if (value >= 1000) {
                return '₱' + (value / 1000).toFixed(0) + 'K'
              }
              return '₱' + value.toLocaleString()
            }
          }
        }
      }
    }
  })
}

const createCategoryChart = () => {
  if (!categoryChart.value || salesByCategory.value.length === 0) return
  
  const topCategories = salesByCategory.value.slice(0, 8)
  
  const ctx = categoryChart.value.getContext('2d')
  categoryChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: topCategories.map(c => c.name),
      datasets: [{
        data: topCategories.map(c => c.revenue),
        backgroundColor: [
          '#3B82F6',
          '#8B5CF6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#6B7280',
          '#EC4899',
          '#14B8A6'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  })
}

const createProductsChart = () => {
  if (!productsChart.value || topProducts.value.length === 0) return
  
  const ctx = productsChart.value.getContext('2d')
  productsChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: topProducts.value.map(p => p.name.substring(0, 15)),
      datasets: [{
        label: 'Units Sold',
        data: topProducts.value.map(p => p.units),
        backgroundColor: '#8B5CF6'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Units: ${formatLargeNumber(context.parsed.y)}`
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return formatLargeNumber(value)
            }
          }
        }
      }
    }
  })
}

const createPaymentChart = () => {
  if (!paymentChart.value || sales.value.length === 0) return
  
  const paymentMethods = {}
  sales.value.forEach(sale => {
    const method = sale.paymentMethod || 'cash'
    paymentMethods[method] = (paymentMethods[method] || 0) + 1
  })
  
  const ctx = paymentChart.value.getContext('2d')
  paymentChartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(paymentMethods),
      datasets: [{
        data: Object.values(paymentMethods),
        backgroundColor: [
          '#10B981',
          '#3B82F6',
          '#F59E0B',
          '#EF4444'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  })
}

const createMonthlyChart = () => {
  if (!monthlyChart.value || monthlySales.value.length === 0) return
  
  const ctx = monthlyChart.value.getContext('2d')
  monthlyChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: monthlySales.value.map(m => m.month),
      datasets: [{
        label: 'Monthly Revenue',
        data: monthlySales.value.map(m => m.revenue),
        backgroundColor: 'rgba(139, 92, 246, 0.8)',
        borderColor: '#8B5CF6',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Revenue: ${formatCurrency(context.parsed.y)}`
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return formatCurrency(value)
            }
          }
        }
      }
    }
  })
}

const createCharts = () => {
  nextTick(() => {
    destroyCharts()
    
    setTimeout(() => {
      createSalesChart()
      createCategoryChart()
      createProductsChart()
      createPaymentChart()
      createMonthlyChart()
    }, 100)
  })
}

const refreshData = async () => {
  calculationCache.clear()
  await fetchSalesData()
}

const handleLogout = async () => {
  try {
    await signOut(auth)
    router.push('/')
  } catch (error) {
    console.error('Error signing out:', error)
  }
}

const toggleSalesChartType = () => {
  salesChartType.value = salesChartType.value === 'line' ? 'bar' : 'line'
  createSalesChart()
}

const exportProductData = () => {
  const csvContent = "data:text/csv;charset=utf-8," 
    + "Rank,Product Name,Category,Units Sold,Revenue\n"
    + topProducts.value.map((product, index) => 
        `${index + 1},"${product.name}","${product.category}",${product.units},${product.revenue}`
      ).join("\n")
  
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement("a")
  link.setAttribute("href", encodedUri)
  link.setAttribute("download", "top_products.csv")
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const exportCategoryData = () => {
  const csvContent = "data:text/csv;charset=utf-8," 
    + "Rank,Category,Units Sold,Revenue,Orders\n"
    + salesByCategory.value.map((category, index) => 
        `${index + 1},"${category.name}",${category.units},${category.revenue},${category.orders}`
      ).join("\n")
  
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement("a")
  link.setAttribute("href", encodedUri)
  link.setAttribute("download", "sales_by_category.csv")
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

onMounted(() => {
  fetchUserInfo()
  fetchSalesData()
})

onUnmounted(() => {
  destroyCharts()
  if (unsubscribe) unsubscribe()
  dataCache.clear()
  calculationCache.clear()
})
</script>

<style scoped>
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

/* Added responsive chart styles */
@media (max-width: 640px) {
  canvas {
    max-height: 200px !important;
  }
}

/* Improved mobile scrollbar styling */
@media (max-width: 768px) {
  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f8fafc;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 2px;
  }
}
</style>
