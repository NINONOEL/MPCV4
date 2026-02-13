<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-indigo-50/30 to-slate-100/80 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-[480px] h-[480px] bg-gradient-to-br from-indigo-200/30 to-purple-200/25 rounded-full filter blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-violet-200/25 to-indigo-200/20 rounded-full filter blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.08),transparent)]"></div>
    </div>

    <div class="relative z-10 flex flex-col lg:flex-row h-screen">
      <!-- Mobile Header -->
      <div class="lg:hidden bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
        <div>
          <h1 class="text-lg font-bold text-gray-900">Barcelona Paint Center</h1>
          <div class="text-xs text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-2.5 py-1.5 rounded-lg inline-flex items-center mt-1 font-medium">
            <ShieldIcon class="h-3.5 w-3.5 mr-1" />
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
            <div class="text-xs text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-2.5 py-1.5 rounded-lg inline-flex items-center mt-1 font-medium">
              <ShieldIcon class="h-3.5 w-3.5 mr-1" />
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

            <router-link to="/admin/visualization" @click="toggleMobileMenu" class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 shadow-sm border-l-4 border-indigo-500">
              <BarChart3Icon class="w-5 h-5 flex-shrink-0" />
              <span class="text-base">Data Visualization</span>
            </router-link>

            <router-link to="/admin/settings" @click="toggleMobileMenu" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100">
              <SettingsIcon class="w-5 h-5 flex-shrink-0" />
              <span class="text-base">Settings</span>
            </router-link>
          </nav>

          <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
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
      <aside class="w-64 bg-white/95 backdrop-blur-sm border-r border-gray-200/80 hidden lg:flex lg:flex-col shadow-sm">
        <div class="p-4 xl:p-5 border-b border-gray-100 flex-shrink-0">
          <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight tracking-tight">Barcelona Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-2.5 xl:px-3 py-1.5 rounded-lg inline-flex items-center shadow-sm font-medium">
            <ShieldIcon class="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            Admin Portal
          </div>
        </div>

        <nav class="flex-1 p-3 xl:p-4 space-y-1 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
          >
            <LayoutDashboardIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Dashboard</span>
          </router-link>

          <router-link to="/admin/staff" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700">
            <UsersIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Staff Management</span>
          </router-link>

          <router-link to="/admin/inventory" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700">
            <PackageIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Inventory</span>
          </router-link>

          <router-link to="/admin/house-paint-recommender" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700">
            <HomeIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Paint Recommender</span>
          </router-link>

          <router-link to="/admin/paint-mixing" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700">
            <PaletteIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Paint Mixing</span>
          </router-link>

          <router-link to="/admin/sales-analytics" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700">
            <TrendingUpIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Sales Analytics</span>
          </router-link>

          <router-link to="/admin/visualization" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 shadow-sm border-l-4 border-indigo-500">
            <BarChart3Icon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Data Visualization</span>
          </router-link>

          <router-link to="/admin/settings" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700">
            <SettingsIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Settings</span>
          </router-link>
        </nav>

        <div class="p-4 border-t border-gray-100 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
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
        <header class="relative bg-white/80 backdrop-blur-md border-b border-gray-200/90 px-4 sm:px-6 lg:px-8 py-5 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <BarChart3Icon class="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Data Visualization</h1>
                <p class="text-sm sm:text-base text-gray-500 mt-0.5">Visual analytics and business insights</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div class="flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-50/80 border border-indigo-100 text-indigo-700 text-sm font-medium">
                <CalendarIcon class="w-4 h-4 flex-shrink-0" />
                <span class="truncate">{{ currentDate }}</span>
              </div>
              <div class="hidden sm:block h-8 w-px bg-gray-200"></div>
              <div class="flex items-center gap-3">
                <span class="text-sm text-gray-700 truncate">Welcome, <strong class="text-gray-900">{{ userDisplayName || 'Admin' }}</strong></span>
                <button class="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors">
                  <BellIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <!-- Controls: time range + refresh -->
        <div class="bg-white/60 backdrop-blur-sm border-b border-gray-200/80 px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                <CalendarIcon class="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 class="text-base font-semibold text-gray-900">Analytics Dashboard</h3>
                <p class="text-xs text-gray-500">Select period and refresh to update charts</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <div class="relative">
                <select 
                  v-model="selectedRange" 
                  @change="fetchSalesData"
                  class="appearance-none pl-4 pr-10 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 hover:border-indigo-200 transition-all duration-200 w-full sm:w-auto shadow-sm min-w-[160px]"
                >
                  <option value="today">Today</option>
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="3m">Last 3 months</option>
                  <option value="1y">Last year</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDownIcon class="w-4 h-4 text-indigo-500" />
                </div>
              </div>
              <button 
                @click="refreshData" 
                class="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <RefreshCwIcon class="w-4 h-4" />
                <span>Refresh Data</span>
              </button>
            </div>
          </div>
        </div>

        <div class="p-4 sm:p-6 lg:p-8">
          <!-- Loading State -->
          <div v-if="loading" class="flex flex-col items-center justify-center py-20">
            <div class="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-4">
              <div class="animate-spin rounded-full h-8 w-8 border-2 border-indigo-500 border-t-transparent"></div>
            </div>
            <p class="text-gray-600 font-medium">Loading analytics...</p>
            <p class="text-sm text-gray-400 mt-1">Fetching sales data and building charts</p>
            <p v-if="loadProgress" class="text-xs text-indigo-500 mt-2">{{ loadProgress.loaded.toLocaleString() }} records loaded (batch {{ loadProgress.batches }})</p>
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="max-w-xl mx-auto bg-white rounded-2xl border-2 border-red-200 shadow-lg p-6 sm:p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle class="w-7 h-7 text-red-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Couldn't load data</h3>
            <p class="text-red-700 text-sm mb-4">{{ error }}</p>
            <button @click="fetchSalesData" class="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
              Try again
            </button>
          </div>

          <!-- Content -->
          <div v-else class="space-y-6 lg:space-y-8">
            <!-- Summary Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
              <div class="group bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 transition-all duration-300 p-5 sm:p-6 overflow-hidden relative">
                <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-bl-full"></div>
                <div class="flex items-start justify-between relative">
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Revenue</p>
                    <p class="text-xl sm:text-2xl font-bold text-gray-900 mt-1 truncate">{{ formatCurrency(totalRevenue) }}</p>
                    <p class="text-xs sm:text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">+12.5% vs last period</p>
                  </div>
                  <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 flex-shrink-0 ml-3 group-hover:scale-110 transition-transform duration-300">
                    <DollarSignIcon class="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div class="group bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 p-5 sm:p-6 overflow-hidden relative">
                <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full"></div>
                <div class="flex items-start justify-between relative">
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Orders</p>
                    <p class="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{{ formatLargeNumber(totalOrders) }}</p>
                    <p class="text-xs sm:text-sm text-blue-600 font-medium mt-2 flex items-center gap-1">+8.3% vs last period</p>
                  </div>
                  <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0 ml-3 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCartIcon class="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div class="group bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-200 transition-all duration-300 p-5 sm:p-6 overflow-hidden relative">
                <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-transparent rounded-bl-full"></div>
                <div class="flex items-start justify-between relative">
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">Products Sold</p>
                    <p class="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{{ formatLargeNumber(totalProductsSold) }}</p>
                    <p class="text-xs sm:text-sm text-purple-600 font-medium mt-2 flex items-center gap-1">+15.7% vs last period</p>
                  </div>
                  <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0 ml-3 group-hover:scale-110 transition-transform duration-300">
                    <PackageIcon class="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div class="group bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-200 transition-all duration-300 p-5 sm:p-6 overflow-hidden relative">
                <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-transparent rounded-bl-full"></div>
                <div class="flex items-start justify-between relative">
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">Avg Order Value</p>
                    <p class="text-xl sm:text-2xl font-bold text-gray-900 mt-1 truncate">{{ formatCurrency(averageOrderValue) }}</p>
                    <p class="text-xs sm:text-sm text-amber-600 font-medium mt-2 flex items-center gap-1">+3.2% vs last period</p>
                  </div>
                  <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 flex-shrink-0 ml-3 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUpIcon class="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Charts Section -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
              <div class="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span class="w-1 h-6 bg-indigo-500 rounded-full"></span>
                    Daily Sales Trend
                  </h3>
                  <button @click="toggleSalesChartType" class="text-xs sm:text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-3 py-2 rounded-xl transition-colors">
                    {{ salesChartType === 'line' ? 'Bar View' : 'Line View' }}
                  </button>
                </div>
                <div class="h-48 sm:h-64 relative rounded-xl bg-gray-50/50">
                  <canvas ref="salesChart" class="w-full h-full"></canvas>
                  <div v-if="dailySales.length === 0" class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm text-center px-4 rounded-xl bg-gray-50/80">
                    No sales data available for the selected period
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span class="w-1 h-6 bg-purple-500 rounded-full"></span>
                    Sales by Category
                  </h3>
                  <span class="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">{{ salesByCategory.length }} categories</span>
                </div>
                <div class="h-48 sm:h-64 relative rounded-xl bg-gray-50/50">
                  <canvas ref="categoryChart" class="w-full h-full"></canvas>
                  <div v-if="salesByCategory.length === 0" class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm text-center px-4 rounded-xl bg-gray-50/80">
                    No category data available
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Charts -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
              <div class="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span class="w-1 h-6 bg-emerald-500 rounded-full"></span>
                    Top Products Performance
                  </h3>
                  <span class="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">Top {{ topProducts.length }} products</span>
                </div>
                <div class="h-48 sm:h-64 relative rounded-xl bg-gray-50/50">
                  <canvas ref="productsChart" class="w-full h-full"></canvas>
                  <div v-if="topProducts.length === 0" class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm text-center px-4 rounded-xl bg-gray-50/80">
                    No product sales data available
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span class="w-1 h-6 bg-amber-500 rounded-full"></span>
                    Payment Methods Distribution
                  </h3>
                  <span class="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">{{ totalOrders }} transactions</span>
                </div>
                <div class="h-48 sm:h-64 relative rounded-xl bg-gray-50/50">
                  <canvas ref="paymentChart" class="w-full h-full"></canvas>
                  <div v-if="sales.length === 0" class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm text-center px-4 rounded-xl bg-gray-50/80">
                    No payment data available
                  </div>
                </div>
              </div>
            </div>

            <!-- Monthly Comparison Chart -->
            <div class="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 sm:p-6">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                  <span class="w-1 h-6 bg-violet-500 rounded-full"></span>
                  Monthly Revenue Comparison
                </h3>
                <span class="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">Last 12 months</span>
              </div>
              <div class="h-48 sm:h-64 relative rounded-xl bg-gray-50/50">
                <canvas ref="monthlyChart" class="w-full h-full"></canvas>
              </div>
            </div>

            <!-- Data Tables -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
              <div class="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span class="w-1 h-6 bg-indigo-500 rounded-full"></span>
                    Top Selling Products
                  </h3>
                  <button @click="exportProductData" class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-3 py-2 rounded-xl transition-colors">
                    Export Data
                  </button>
                </div>
                <div class="space-y-2 max-h-60 sm:max-h-80 overflow-y-auto pr-1">
                  <div v-for="(product, index) in topProducts" :key="product.id" class="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-indigo-50/50 border border-transparent hover:border-indigo-100 transition-all duration-200">
                    <div class="flex items-center gap-3 min-w-0 flex-1">
                      <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">
                        {{ index + 1 }}
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="font-semibold text-gray-900 text-sm sm:text-base truncate">{{ product.name }}</p>
                        <p class="text-xs text-gray-500 truncate">{{ product.category }}</p>
                      </div>
                    </div>
                    <div class="text-right flex-shrink-0 ml-3">
                      <p class="font-bold text-gray-900 text-sm">{{ formatLargeNumber(product.units) }} sold</p>
                      <p class="text-xs font-medium text-emerald-600">{{ formatCurrency(product.revenue) }}</p>
                    </div>
                  </div>
                  <div v-if="topProducts.length === 0" class="text-center py-10 text-gray-500 rounded-xl bg-gray-50/80">
                    <PackageIcon class="w-10 h-10 mx-auto mb-2 text-gray-300" />
                    <p class="text-sm font-medium">No product data available</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span class="w-1 h-6 bg-purple-500 rounded-full"></span>
                    Sales by Category
                  </h3>
                  <button @click="exportCategoryData" class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 hover:text-purple-800 hover:bg-purple-50 px-3 py-2 rounded-xl transition-colors">
                    Export Data
                  </button>
                </div>
                <div class="space-y-2 max-h-60 sm:max-h-80 overflow-y-auto pr-1">
                  <div v-for="(category, index) in salesByCategory" :key="category.name" class="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-purple-50/50 border border-transparent hover:border-purple-100 transition-all duration-200">
                    <div class="flex items-center gap-3 min-w-0 flex-1">
                      <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">
                        {{ index + 1 }}
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="font-semibold text-gray-900 text-sm sm:text-base truncate">{{ category.name }}</p>
                        <p class="text-xs text-gray-500">{{ formatLargeNumber(category.units) }} units sold</p>
                      </div>
                    </div>
                    <div class="text-right flex-shrink-0 ml-3">
                      <p class="font-bold text-gray-900 text-sm">{{ formatCurrency(category.revenue) }}</p>
                      <p class="text-xs font-medium text-blue-600">{{ formatLargeNumber(category.orders) }} orders</p>
                    </div>
                  </div>
                  <div v-if="salesByCategory.length === 0" class="text-center py-10 text-gray-500 rounded-xl bg-gray-50/80">
                    <BarChart3Icon class="w-10 h-10 mx-auto mb-2 text-gray-300" />
                    <p class="text-sm font-medium">No category data available</p>
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
  ChevronDown as ChevronDownIcon,
  AlertTriangle
} from 'lucide-vue-next'
import { collection, query, getDocs, orderBy, limit, startAfter } from 'firebase/firestore'
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
const loadProgress = ref(null) // { loaded: number, batches: number } when loading in batches

const dataCache = new Map()
const calculationCache = new Map()
const BATCH_SIZE = 3000
const MAX_TOTAL_SALES = 200000
let salesChartInstance = null
let categoryChartInstance = null
let productsChartInstance = null
let paymentChartInstance = null
let monthlyChartInstance = null

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

const normalizeSaleDate = (dateVal) => {
  if (!dateVal) return new Date()
  if (typeof dateVal.toDate === 'function') return dateVal.toDate()
  if (dateVal instanceof Date) return dateVal
  return new Date(dateVal)
}

const fetchSalesData = async () => {
  try {
    loading.value = true
    error.value = null
    loadProgress.value = { loaded: 0, batches: 0 }

    const { startDate, endDate } = getDateRange()
    const cacheKey = `${selectedRange.value}_${startDate.getTime()}`

    if (dataCache.has(cacheKey)) {
      const cachedData = dataCache.get(cacheKey)
      sales.value = cachedData
      totalSalesCount.value = cachedData.length
      loadProgress.value = null
      processData(cachedData)
      loading.value = false
      nextTick(() => createCharts())
      return
    }

    const salesRef = collection(db, 'sales')
    const salesData = []
    let lastDoc = null
    let batchNum = 0

    while (true) {
      batchNum += 1
      let q = query(salesRef, orderBy('date', 'desc'), limit(BATCH_SIZE))
      if (lastDoc) q = query(salesRef, orderBy('date', 'desc'), startAfter(lastDoc), limit(BATCH_SIZE))

      const snapshot = await getDocs(q)
      if (snapshot.empty) break

      let passedRange = false
      snapshot.docs.forEach((docSnap) => {
        const data = docSnap.data()
        const sale = {
          id: docSnap.id,
          orderId: data.orderId || `ORD-${docSnap.id.substring(0, 8)}`,
          customerName: data.customerName || 'Unknown Customer',
          products: Array.isArray(data.products) ? data.products : [],
          total: Number(data.total) || 0,
          status: data.status || 'completed',
          paymentMethod: data.paymentMethod || 'cash',
          date: normalizeSaleDate(data.date)
        }

        if (sale.date < startDate) {
          passedRange = true
          return
        }
        if (sale.date >= startDate && sale.date <= endDate) {
          salesData.push(sale)
        }
      })

      loadProgress.value = { loaded: salesData.length, batches: batchNum }
      lastDoc = snapshot.docs[snapshot.docs.length - 1]

      if (passedRange || snapshot.docs.length < BATCH_SIZE) break
      if (salesData.length >= MAX_TOTAL_SALES) break
    }

    loadProgress.value = null
    dataCache.set(cacheKey, salesData)
    sales.value = salesData
    totalSalesCount.value = salesData.length
    processData(salesData)
    loading.value = false
    nextTick(() => createCharts())
  } catch (err) {
    console.error('Error in fetchSalesData:', err)
    error.value = 'Failed to fetch sales data: ' + (err?.message ?? 'Unknown error')
    loadProgress.value = null
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
  
  const maxProcessRecords = 200000
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
    if (!sale.products || !Array.isArray(sale.products)) return
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
    if (!sale.products || !Array.isArray(sale.products)) return
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
    const d = sale.date instanceof Date ? sale.date : new Date(sale.date)
    const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
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
    const d = sale.date instanceof Date ? sale.date : new Date(sale.date)
    const monthStr = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
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
      labels: topProducts.value.map(p => (p.name || 'Unknown').substring(0, 15)),
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
  dataCache.clear()
  calculationCache.clear()
})
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
}

@media (max-width: 640px) {
  canvas {
    max-height: 200px !important;
  }
}

@media (max-width: 768px) {
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f8fafc;
  }

  ::-webkit-scrollbar-thumb {
    background: #c4b5fd;
    border-radius: 2px;
  }
}
</style>
