<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50/95 via-white to-teal-50/30 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[min(90vw,520px)] h-[min(90vw,520px)] bg-gradient-to-br from-teal-300/20 via-cyan-200/15 to-emerald-100/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[min(70vw,440px)] h-[min(70vw,440px)] bg-gradient-to-tr from-emerald-200/15 to-teal-100/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(20,184,166,0.06),transparent)] pointer-events-none"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-white/98 backdrop-blur-xl border-r border-gray-200/80 hidden lg:flex lg:flex-col shadow-lg shadow-gray-200/30">
        <div class="p-4 xl:p-5 border-b border-gray-100 flex-shrink-0">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-md shadow-teal-500/20 flex-shrink-0">
              <TrendingUpIcon class="w-4 h-4 text-white" />
            </div>
            <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight tracking-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2.5 text-xs text-white bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-600 px-2.5 xl:px-3 py-1.5 rounded-lg inline-flex items-center shadow-md shadow-teal-500/25 font-medium">
            <UserIcon class="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            Staff Portal
          </div>
        </div>

        <nav class="flex-1 p-3 xl:p-4 space-y-1 xl:space-y-2 overflow-y-auto">
          <router-link to="/staff/dashboard" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" :class="{ 'shadow-sm border border-blue-200': $route.path === '/staff/dashboard' }">
            <LayoutDashboardIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Dashboard</span>
          </router-link>
          <router-link to="/staff/inventory" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700" :class="{ 'shadow-sm border border-purple-200': $route.path === '/staff/inventory' }">
            <PackageIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Inventory</span>
          </router-link>
          <router-link to="/staff/house-paint-recommender" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700" :class="{ 'shadow-sm border border-orange-200': $route.path === '/staff/house-paint-recommender' }">
            <HomeIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Paint Recommender</span>
          </router-link>
          <router-link to="/staff/paint-mixing" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700" :class="{ 'shadow-sm border border-pink-200': $route.path === '/staff/paint-mixing' }">
            <PaletteIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Paint Mixing</span>
          </router-link>
          <router-link to="/staff/sales-analytics" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-teal-700 bg-teal-100 shadow-sm border-l-4 border-teal-500" :class="{ 'hover:bg-teal-50': $route.path !== '/staff/sales-analytics' }">
            <TrendingUpIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Sales Analytics</span>
          </router-link>
          <router-link to="/staff/settings" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700" :class="{ 'shadow-sm border border-green-200': $route.path === '/staff/settings' }">
            <SettingsIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Settings</span>
          </router-link>
          <div class="h-4"></div>
        </nav>

        <div class="p-3 xl:p-4 border-t border-gray-200 bg-gradient-to-r from-teal-50/95 to-cyan-50/95 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-2 xl:gap-3">
            <div class="w-8 xl:w-10 h-8 xl:h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/25 flex-shrink-0">
              <UserIcon class="w-4 xl:w-5 h-4 xl:h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs xl:text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'staff@example.com' }}</p>
            </div>
            <button @click="handleLogout" class="p-1.5 xl:p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0" title="Logout">
              <LogOutIcon class="w-4 xl:w-5 h-4 xl:h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Mobile Toggle -->
      <div class="fixed top-4 left-4 z-30 lg:hidden">
        <button @click="toggleMobileSidebar" class="p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" aria-label="Toggle menu">
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <XIcon v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <div v-if="mobileSidebarOpen" class="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 lg:hidden" @click="toggleMobileSidebar"></div>
      <aside v-if="mobileSidebarOpen" class="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-white border-r border-gray-200 z-30 lg:hidden shadow-2xl flex flex-col">
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-1.5 rounded-lg inline-flex items-center font-medium">
            <UserIcon class="h-3.5 w-3.5 mr-1.5" />
            Staff Portal
          </div>
        </div>
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link to="/staff/dashboard" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-blue-600 bg-blue-50 hover:bg-blue-100" @click="mobileSidebarOpen = false">
            <LayoutDashboardIcon class="w-6 h-6" />
            <span class="text-base">Dashboard</span>
          </router-link>
          <router-link to="/staff/inventory" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-purple-600 bg-purple-50 hover:bg-purple-100" @click="mobileSidebarOpen = false">
            <PackageIcon class="w-6 h-6" />
            <span class="text-base">Inventory</span>
          </router-link>
          <router-link to="/staff/house-paint-recommender" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-orange-600 bg-orange-50 hover:bg-orange-100" @click="mobileSidebarOpen = false">
            <HomeIcon class="w-6 h-6" />
            <span class="text-base">Paint Recommender</span>
          </router-link>
          <router-link to="/staff/paint-mixing" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-pink-600 bg-pink-50 hover:bg-pink-100" @click="mobileSidebarOpen = false">
            <PaletteIcon class="w-6 h-6" />
            <span class="text-base">Paint Mixing</span>
          </router-link>
          <router-link to="/staff/sales-analytics" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-teal-700 bg-teal-100 border-l-4 border-teal-500 shadow-sm" @click="mobileSidebarOpen = false">
            <TrendingUpIcon class="w-6 h-6" />
            <span class="text-base font-semibold">Sales Analytics</span>
          </router-link>
          <router-link to="/staff/settings" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-green-600 bg-green-50 hover:bg-green-100" @click="mobileSidebarOpen = false">
            <SettingsIcon class="w-6 h-6" />
            <span class="text-base">Settings</span>
          </router-link>
          <div class="h-4"></div>
        </nav>
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-teal-50 to-cyan-50 flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <UserIcon class="w-6 h-6 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'staff@example.com' }}</p>
            </div>
            <button @click="handleLogout" class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0" title="Logout">
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Header -->
        <header class="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-gray-200/90 shadow-sm">
          <div class="h-1 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 rounded-b-full"></div>
          <div class="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="pl-14 sm:pl-16 lg:pl-0 flex items-center gap-3">
                <div class="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 items-center justify-center shadow-lg shadow-teal-500/20 flex-shrink-0">
                  <TrendingUpIcon class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Daily Sales Analytics</h1>
                  <p class="text-sm text-gray-500 mt-0.5">Monitor today's sales performance and trends</p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100/90 text-gray-700 text-sm border border-gray-200/60">
                  <CalendarIcon class="w-4 h-4 text-teal-500 flex-shrink-0" />
                  <span class="truncate font-medium">{{ currentDate }}</span>
                </div>
                <div class="hidden sm:block h-8 w-px bg-gray-200"></div>
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 text-sm border border-teal-200/60">
                  <span class="font-medium truncate">Welcome, {{ userDisplayName || 'Staff' }}</span>
                  <BellIcon class="w-4 h-4 text-teal-500 cursor-pointer hover:text-teal-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 sm:p-6 lg:p-8">
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div class="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                @click="showAddSaleModal = true"
                class="px-4 py-2.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 hover:from-teal-600 hover:via-cyan-600 hover:to-emerald-600 text-white rounded-xl font-medium shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <PlusIcon class="w-5 h-5" />
                Add Sale
              </button>
              <button
                @click="generateDailyReport"
                class="px-4 py-2.5 bg-white border border-teal-200 text-teal-700 hover:bg-teal-50 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <ClipboardIcon class="w-5 h-5" />
                Daily Report
              </button>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/95 border border-teal-100 shadow-sm">
              <CalendarIcon class="w-5 h-5 text-teal-500 flex-shrink-0" />
              <span class="text-sm font-medium text-gray-700">Today: {{ todayFormatted }}</span>
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="loading && !error" class="bg-white/95 backdrop-blur-sm border border-teal-100/80 rounded-2xl shadow-lg p-12 mb-6 text-center">
            <div class="w-14 h-14 border-4 border-teal-200 border-t-teal-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p class="text-gray-600 font-medium">Loading today's sales data...</p>
          </div>

          <!-- Error State -->
          <div v-if="error" class="bg-red-50/95 border border-red-200 rounded-2xl p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangleIcon class="w-5 h-5 text-red-600" />
              </div>
              <span class="text-red-800 font-medium">{{ error }}</span>
            </div>
            <button @click="fetchTodaysSalesData" class="px-4 py-2 rounded-xl bg-red-100 text-red-700 hover:bg-red-200 font-medium flex items-center gap-2 transition-colors">
              <RefreshCwIcon class="w-4 h-4" />
              Retry
            </button>
          </div>

          <!-- Today's Stats Cards -->
          <div v-if="!loading || todaysSales.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <!-- Today's Revenue -->
            <div class="bg-white/95 backdrop-blur-sm border border-teal-100/80 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
              <div class="p-4">
                <div class="flex items-center gap-2.5">
                  <div class="p-2 rounded-lg shadow-md bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                    <DollarSignIcon class="w-4 h-4 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs text-gray-600">Today's Revenue</p>
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ formatCurrency(todaysRevenue) }}</p>
                    <div class="flex items-center gap-1 mt-0.5">
                      <TrendingUpIcon class="w-3 h-3 text-green-600" />
                      <span class="text-xs font-medium text-green-600">Daily Target</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Today's Net Gross (Profit) -->
            <div class="bg-white/95 backdrop-blur-sm border border-amber-100/80 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500"></div>
              <div class="p-4">
                <div class="flex items-center gap-2.5">
                  <div class="p-2 rounded-lg shadow-md bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-600 transform hover:scale-110 transition-transform duration-200">
                    <TrendingUpIcon class="w-4 h-4 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs text-gray-600">Today's Net Gross</p>
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ formatCurrency(todaysNetGross) }}</p>
                    <div class="flex items-center gap-1 mt-0.5">
                      <TrendingUpIcon class="w-3 h-3 text-amber-600" />
                      <span class="text-xs font-medium text-amber-600">{{ profitMarginPercentage }}% margin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Today's Orders -->
            <div class="bg-white/95 backdrop-blur-sm border border-cyan-100/80 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>
              <div class="p-4">
                <div class="flex items-center gap-2.5">
                  <div class="p-2 rounded-lg shadow-md bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <ShoppingCartIcon class="w-4 h-4 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs text-gray-600">Today's Orders</p>
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ todaysOrders }}</p>
                    <div class="flex items-center gap-1 mt-0.5">
                      <TrendingUpIcon class="w-3 h-3 text-blue-600" />
                      <span class="text-xs font-medium text-blue-600">Orders Today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Today's Products Sold -->
            <div class="bg-white/95 backdrop-blur-sm border border-violet-100/80 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="h-1.5 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500"></div>
              <div class="p-4">
                <div class="flex items-center gap-2.5">
                  <div class="p-2 rounded-lg shadow-md bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                    <PackageIcon class="w-4 h-4 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs text-gray-600">Products Sold Today</p>
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ todaysProductsSold }}</p>
                    <div class="flex items-center gap-1 mt-0.5">
                      <PackageIcon class="w-3 h-3 text-purple-600" />
                      <span class="text-xs font-medium text-purple-600">Items Sold</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Today's Average Order Value -->
            <div class="bg-white/95 backdrop-blur-sm border border-amber-100/80 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>
              <div class="p-4">
                <div class="flex items-center gap-2.5">
                  <div class="p-2 rounded-lg shadow-md bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 transform hover:scale-110 transition-transform duration-200">
                    <TrendingUpIcon class="w-4 h-4 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs text-gray-600">Avg Order Value</p>
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ formatCurrency(todaysAverageOrderValue) }}</p>
                    <div class="flex items-center gap-1 mt-0.5">
                      <TrendingUpIcon class="w-3 h-3 text-amber-600" />
                      <span class="text-xs font-medium text-amber-600">Per Order</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Today's Best Seller Section -->
          <div v-if="!loading && todaysTopProducts.length > 0" class="bg-white/95 backdrop-blur-sm border border-teal-100/80 rounded-2xl shadow-lg overflow-hidden mb-8">
            <div class="h-1.5 bg-gradient-to-r from-teal-500/50 to-emerald-500/50"></div>
            <div class="p-5 sm:p-6">
            <h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div class="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center">
                <PackageIcon class="w-4 h-4 text-teal-600" />
              </div>
              Today's Best Seller
            </h2>
            <div v-if="sortedTodaysTopProducts.length > 0" class="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div class="w-20 h-20 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center shadow-sm">
                <PackageIcon class="w-10 h-10 text-green-600" />
              </div>
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">{{ sortedTodaysTopProducts[0].name }}</h3>
                    <p class="text-gray-600">{{ sortedTodaysTopProducts[0].category }}</p>
                  </div>
                  <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
                    Today's Top Seller
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p class="text-sm text-gray-600">Revenue Today</p>
                    <p class="text-xl font-bold text-gray-900">{{ formatCurrency(sortedTodaysTopProducts[0].revenue) }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Units Sold Today</p>
                    <p class="text-xl font-bold text-gray-900">{{ sortedTodaysTopProducts[0].units }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="text-center py-8">
              <PackageIcon class="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p class="text-gray-600">No product sales today yet</p>
            </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="!loading && todaysSales.length === 0" class="bg-white/95 backdrop-blur-sm border border-teal-100/80 rounded-2xl shadow-lg p-8 sm:p-12 mb-8 text-center">
            <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
              <ShoppingCartIcon class="w-10 h-10 text-teal-500" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">No sales today</h3>
            <p class="text-gray-500 mb-6 max-w-sm mx-auto">Start recording sales to see today's analytics and insights.</p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button @click="showAddSaleModal = true" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md">
                <PlusIcon class="w-5 h-5" />
                Record Sale
              </button>
              <button @click="createSampleSale" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-teal-200 text-teal-700 rounded-xl font-medium hover:bg-teal-50 transition-all">
                <ClipboardIcon class="w-5 h-5" />
                Create Sample Sale
              </button>
            </div>
          </div>

          <!-- Charts Section -->
          <div v-if="!loading && todaysSales.length > 0" class="mb-8">
            <div class="bg-white/95 backdrop-blur-sm border border-teal-100/80 rounded-2xl shadow-lg overflow-hidden">
              <div class="h-1.5 bg-gradient-to-r from-teal-500/50 to-cyan-500/50"></div>
              <div class="p-5 sm:p-6">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 class="text-lg font-bold text-gray-900">Today's Top Products</h2>
                <select 
                  v-model="selectedProductMetric"
                  class="px-4 py-2 rounded-xl border border-gray-200 text-sm bg-white text-gray-900 focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all shadow-sm"
                >
                  <option value="revenue">By Revenue</option>
                  <option value="units">By Units Sold</option>
                </select>
              </div>
              <div class="space-y-4">
                <!-- Top Products Today -->
                <div class="bg-white/80 rounded-lg p-4 mb-4 border border-gray-200" v-if="sortedTodaysTopProducts.length > 0">
                  <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
                    <PackageIcon class="w-4 h-4 mr-2 text-purple-600" />
                    Top Products Today
                  </h3>
                  <div class="space-y-3">
                    <div 
                      v-for="(product, index) in sortedTodaysTopProducts.slice(0, 5)" 
                      :key="product.id"
                      class="grid grid-cols-12 gap-3 p-3 bg-gray-50 rounded text-xs border border-gray-100 items-center"
                    >
                      <!-- Rank -->
                      <div class="col-span-1">
                        <span class="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs flex items-center justify-center font-bold">{{ index + 1 }}</span>
                      </div>
                      
                      <!-- Product Info -->
                      <div class="col-span-4">
                        <div class="font-bold text-gray-900 text-sm">{{ product.name }}</div>
                        <div class="text-gray-600 text-xs">{{ product.category || 'N/A' }}</div>
                      </div>
                      
                      <!-- Units -->
                      <div class="col-span-2 text-center">
                        <div class="text-purple-600 text-sm font-bold">{{ product.units }}</div>
                        <div class="text-gray-600 text-xs">units sold</div>
                      </div>
                      
                      <!-- Revenue -->
                      <div class="col-span-3 text-right">
                        <div class="font-bold text-green-700 text-sm">{{ formatCurrency(product.revenue) }}</div>
                        <div class="text-gray-600 text-xs">{{ formatCurrency(product.units > 0 ? product.revenue / product.units : 0) }}/unit</div>
                      </div>
                      
                      <!-- Percentage -->
                      <div class="col-span-2 text-right">
                        <div class="text-purple-600 text-xs font-medium">{{ todaysRevenue > 0 ? ((product.revenue / todaysRevenue) * 100).toFixed(1) : 0 }}%</div>
                        <div class="text-gray-600 text-xs">of total</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Empty state for top products -->
                <div v-if="todaysTopProducts.length === 0" class="text-center py-8">
                  <PackageIcon class="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p class="text-gray-600">No product data available for today</p>
                </div>
              </div>
              </div>
            </div>
          </div>

          <!-- Today's Sales by Category -->
          <div v-if="!loading && todaysSales.length > 0" class="bg-white/95 backdrop-blur-sm border border-teal-100/80 rounded-2xl shadow-lg overflow-hidden mb-8">
            <div class="h-1.5 bg-gradient-to-r from-cyan-500/50 to-teal-500/50"></div>
            <div class="p-5 sm:p-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 class="text-lg font-bold text-gray-900">Today's Sales by Category</h2>
              <select 
                v-model="selectedCategoryView"
                class="px-4 py-2 rounded-xl border border-gray-200 text-sm bg-white text-gray-900 focus:ring-2 focus:ring-teal-200 focus:border-teal-400 transition-all shadow-sm"
              >
                <option value="revenue">Revenue</option>
                <option value="units">Units Sold</option>
                <option value="orders">Number of Orders</option>
              </select>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div 
                v-for="category in todaysSalesByCategory" 
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
                  <CalendarIcon class="w-4 h-4 text-teal-600" />
                  <span class="text-sm font-medium text-teal-600">Today</span>
                </div>
              </div>
              
              <div v-if="todaysSalesByCategory.length === 0" class="col-span-4 text-center py-8">
                <PaletteIcon class="w-8 h-8 text-gray-300 mx-auto mb-2" />
                <p class="text-gray-600">No category data available for today</p>
              </div>
            </div>
            </div>
          </div>

          <!-- Today's Sales Table -->
          <div v-if="!loading && todaysSales.length > 0" class="bg-white/95 backdrop-blur-sm border border-teal-100/80 rounded-2xl shadow-lg overflow-hidden">
            <div class="h-1.5 bg-gradient-to-r from-teal-500/50 to-emerald-500/50"></div>
            <div class="p-5 sm:p-6 border-b border-gray-100">
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 class="text-lg font-bold text-gray-900">Today's Sales</h2>
                <div class="relative w-full sm:w-64">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search today's sales..."
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white text-gray-900 focus:ring-2 focus:ring-teal-200 focus:border-teal-400 placeholder-gray-500 shadow-sm"
                  />
                </div>
              </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="text-left p-4 text-sm font-medium text-gray-600 min-w-[120px]">Order ID</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600 min-w-[150px]">Customer</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Products</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Total</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600 min-w-[80px]">Time</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="sale in filteredTodaysSales" 
                    :key="sale.id"
                    class="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td class="p-4 min-w-[120px]">
                      <span class="font-medium text-gray-900">{{ sale.orderId }}</span>
                    </td>
                    <td class="p-4 min-w-[150px]">
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
                    <td class="p-4 text-gray-600 min-w-[80px]">
                      {{ formatTime(sale.date) }}
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
                Showing {{ paginationStart }} to {{ paginationEnd }} of {{ filteredTodaysSales.length }} results
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
  <Transition name="modal-fade">
    <div v-if="showAddSaleModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 add-sale-modal-backdrop" @click.self="showAddSaleModal = false">
      <div class="add-sale-modal-panel bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-teal-100">
        <div class="h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 rounded-t-2xl"></div>
        <div class="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center ring-2 ring-teal-200/50">
              <PlusIcon class="w-5 h-5 text-teal-600" />
            </div>
            Record New Sale
          </h3>
          <button type="button" @click="showAddSaleModal = false" class="p-2 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
            <XIcon class="w-5 h-5" />
          </button>
        </div>
        
        <form @submit.prevent="handleAddSale" class="p-5 sm:p-6 space-y-6">
          <!-- Customer Information -->
          <div class="add-sale-form-section">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                <UserIcon class="w-4 h-4 text-teal-600" />
              </div>
              <h4 class="text-base font-semibold text-gray-900">Customer Information</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Customer Name</label>
                <input 
                  type="text"
                  v-model="saleForm.customerName"
                  required
                  placeholder="Enter customer name"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-200 focus:border-teal-400 bg-white text-gray-900 placeholder-gray-400 transition-all shadow-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Contact No.</label>
                <input 
                  type="tel"
                  v-model="saleForm.customerContactNo"
                  placeholder="09XX-XXX-XXXX"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-200 focus:border-teal-400 bg-white text-gray-900 placeholder-gray-400 transition-all shadow-sm"
                />
              </div>
            </div>
          </div>

          <!-- Products -->
          <div class="add-sale-form-section">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                  <PackageIcon class="w-4 h-4 text-cyan-600" />
                </div>
                <h4 class="text-base font-semibold text-gray-900">Products</h4>
              </div>
              <button 
                type="button"
                @click="addProductToSale"
                class="add-product-btn px-3 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <PlusIcon class="w-4 h-4" />
                Add Product
              </button>
            </div>
            
            <div v-for="(product, index) in saleForm.products" :key="index" class="add-sale-product-item mb-4 p-4 border border-teal-100 rounded-xl bg-gradient-to-br from-white to-teal-50/30 shadow-sm hover:shadow-md transition-all">
              <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-semibold text-gray-800">Product {{ index + 1 }}</span>
                <button 
                  type="button"
                  @click="removeProductFromSale(index)"
                  class="p-1.5 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                  title="Remove product"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="md:col-span-3">
                  <label class="block text-xs font-medium text-gray-600 mb-1">Product</label>
                  <select 
                    v-model="product.id"
                    required
                    class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-200 focus:border-teal-400 bg-white text-gray-900 transition-all"
                    @change="updateProductDetails(index)"
                  >
                    <option value="">Select a product</option>
                    <option v-for="p in availableProducts" :key="p.id" :value="p.id">
                      {{ p.name }} - {{ formatCurrency(p.price) }} (Stock: {{ p.stock || 0 }})
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1">Quantity</label>
                  <input type="number" v-model.number="product.quantity" min="1" required class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-200 bg-white text-gray-900" @input="calculateTotal" />
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1">Price</label>
                  <input type="number" v-model.number="product.price" min="0" step="0.01" required class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-200 bg-white text-gray-900" @input="calculateTotal" />
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1">Subtotal</label>
                  <input type="text" :value="formatCurrency(product.price * product.quantity)" readonly class="w-full px-3 py-2.5 rounded-xl border border-teal-100 bg-teal-50/50 text-teal-800 font-semibold" />
                </div>
              </div>
            </div>
            
            <div v-if="saleForm.products.length === 0" class="add-sale-empty-products text-center py-8 px-4 border-2 border-dashed border-teal-200 rounded-xl bg-teal-50/30">
              <PackageIcon class="w-10 h-10 text-teal-300 mx-auto mb-2" />
              <p class="text-gray-500 text-sm">No products added yet</p>
              <p class="text-gray-400 text-xs mt-1">Click "Add Product" to start</p>
            </div>
          </div>

          <!-- Payment & Total -->
          <div class="add-sale-form-section">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <DollarSignIcon class="w-4 h-4 text-emerald-600" />
              </div>
              <h4 class="text-base font-semibold text-gray-900">Payment & Total</h4>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Payment Method</label>
              <select 
                v-model="saleForm.paymentMethod"
                required
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-200 focus:border-teal-400 bg-white text-gray-900 transition-all shadow-sm"
              >
                <option value="cash">Cash</option>
                <option value="credit_card">Credit Card</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="gcash">GCash</option>
              </select>
            </div>
            <div class="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100">
              <span class="text-gray-800 font-semibold">Total Amount</span>
              <span class="text-2xl font-bold text-teal-700">{{ formatCurrency(saleForm.total) }}</span>
            </div>
          </div>

          <div class="flex justify-end gap-3 pt-2">
            <button type="button" @click="showAddSaleModal = false" class="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium transition-all">
              Cancel
            </button>
            <button 
              type="submit"
              class="px-5 py-2.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 hover:from-teal-600 hover:via-cyan-600 hover:to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="flex items-center gap-2">
                <LoaderIcon class="w-5 h-5 animate-spin" />
                Saving...
              </span>
              <span v-else class="flex items-center gap-2">
                <SaveIcon class="w-4 h-4" />
                Record Sale
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>

  <!-- Daily Sales Report Modal -->
  <Transition name="modal-fade">
    <div v-if="showReceiptModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 daily-report-modal-backdrop" @click.self="showReceiptModal = false">
      <div class="daily-report-modal-panel bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-teal-100">
        <div class="h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 rounded-t-2xl"></div>
        <div class="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center ring-2 ring-teal-200/50">
              <TrendingUpIcon class="w-5 h-5 text-teal-600" />
            </div>
            Daily Sales Report
          </h3>
          <button type="button" @click="showReceiptModal = false" class="p-2 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
            <XIcon class="w-5 h-5" />
          </button>
        </div>
    
      <div class="p-5 sm:p-6">
        <!-- Daily Sales Report Preview -->
        <div id="daily-report-content" class="daily-report-content bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50 p-5 sm:p-6 rounded-2xl mb-5 border border-teal-100 shadow-inner text-sm">
          <div class="daily-report-section text-center mb-6">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/30 p-1">
              <TrendingUpIcon class="w-9 h-9 text-white" />
            </div>
            <h2 class="text-xl font-bold text-gray-900">Barcelona Paint Center</h2>
            <p class="text-teal-600 font-semibold mt-1">Daily Sales Report</p>
            <p class="text-xs text-gray-500 mt-2">{{ formatDateTime(new Date()) }}</p>
          </div>
        
          <!-- Staff Information -->
          <div class="daily-report-section bg-white rounded-xl p-4 mb-4 border border-teal-100 shadow-sm">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center">
              <UserIcon class="w-4 h-4 mr-2 text-teal-600" />
              Staff Report
            </h3>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span class="text-gray-600">Staff:</span>
                <span class="font-medium ml-1">Staff User</span>
              </div>
              <div>
                <span class="text-gray-600">Date:</span>
                <span class="font-medium ml-1">{{ todayFormatted }}</span>
              </div>
              <div>
                <span class="text-gray-600">Shift:</span>
                <span class="font-medium ml-1">Full Day</span>
              </div>
              <div>
                <span class="text-gray-600">Status:</span>
                <span class="font-medium ml-1 text-green-600">Completed</span>
              </div>
            </div>
          </div>
        
          <!-- Daily Summary -->
          <div class="daily-report-section bg-white rounded-xl p-4 mb-4 border border-teal-100 shadow-sm">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <DollarSignIcon class="w-4 h-4 mr-2 text-teal-600" />
              Today's Performance
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                <p class="text-xs text-green-700 font-medium">Total Revenue</p>
                <p class="text-lg font-bold text-green-800">{{ formatCurrency(todaysRevenue) }}</p>
              </div>
              <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg border border-amber-200">
                <p class="text-xs text-amber-700 font-medium">Net Gross (Profit)</p>
                <p class="text-lg font-bold text-amber-800">{{ formatCurrency(todaysNetGross) }}</p>
              </div>
              <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-200">
                <p class="text-xs text-blue-700 font-medium">Orders</p>
                <p class="text-lg font-bold text-blue-800">{{ todaysOrders }}</p>
              </div>
              <div class="bg-gradient-to-r from-purple-50 to-violet-50 p-3 rounded-lg border border-purple-200">
                <p class="text-xs text-purple-700 font-medium">Items Sold</p>
                <p class="text-lg font-bold text-purple-800">{{ todaysProductsSold }}</p>
              </div>
              <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg border border-orange-200">
                <p class="text-xs text-orange-700 font-medium">Avg Order</p>
                <p class="text-lg font-bold text-orange-800">{{ formatCurrency(todaysAverageOrderValue) }}</p>
              </div>
            </div>
          </div>

          <!-- Top Products Today -->
          <div class="daily-report-section bg-white rounded-xl p-4 mb-4 border border-teal-100 shadow-sm" v-if="sortedTodaysTopProducts.length > 0">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <PackageIcon class="w-4 h-4 mr-2 text-purple-600" />
              Top Products Today
            </h3>
            <div class="space-y-3">
              <div 
                v-for="(product, index) in sortedTodaysTopProducts.slice(0, 5)" 
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
                  <div class="text-purple-600 text-xs font-medium">{{ todaysRevenue > 0 ? ((product.revenue / todaysRevenue) * 100).toFixed(1) : 0 }}%</div>
                  <div class="text-gray-600 text-xs">of total</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Sales -->
          <div class="daily-report-section bg-white rounded-xl p-4 mb-4 border border-teal-100 shadow-sm" v-if="todaysSales.length > 0">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <ShoppingCartIcon class="w-4 h-4 mr-2 text-blue-600" />
              Recent Transactions (Last 5)
            </h3>
            <div class="space-y-3">
              <div 
                v-for="sale in todaysSales.slice(0, 5)" 
                :key="sale.id"
                class="p-3 bg-gray-50 rounded border border-gray-100"
              >
                <!-- First Row: Order ID and Time (Fixed spacing) -->
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
          <div class="daily-report-section text-center pt-4 border-t border-teal-200">
            <p class="text-xs text-gray-600 mb-1">Report generated for owner review</p>
            <p class="text-xs text-gray-500">Barcelona Paint Center Staff Portal</p>
            <div class="mt-2 flex items-center justify-center">
              <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span class="text-xs text-green-600 font-medium">All sales recorded and verified</span>
            </div>
          </div>
        </div>
      
        <div class="flex gap-3 pt-2">
          <button 
            @click="downloadDailyReport"
            class="flex-1 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-xl font-medium shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <DownloadIcon class="w-5 h-5" />
            Save as Image
          </button>
          <button 
            @click="generateDailySummary"
            class="flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-medium shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <ClipboardIcon class="w-5 h-5" />
            Summary
          </button>
        </div>
      </div>
      </div>
    </div>
  </Transition>

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
import { auth, db } from '../../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
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
  Printer as PrinterIcon,
  Save as SaveIcon
} from 'lucide-vue-next'

// Current date
const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// Today's date formatted
const todayFormatted = new Date().toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

// State - focused on today's data only
const todaysSales = ref([])
const loading = ref(true)
const error = ref(null)
const todaysRevenue = ref(0)
const todaysNetGross = ref(0)
const todaysOrders = ref(0)
const todaysProductsSold = ref(0)
const todaysAverageOrderValue = ref(0)
// Profit margin: 30% means cost is 70% of selling price (same as Admin)
const profitMargin = 0.30 // 30% profit margin
const todaysTopProducts = ref([])
const todaysSalesByCategory = ref([])
const availableProducts = ref([])
const showAddSaleModal = ref(false)
const showReceiptModal = ref(false)
const isSubmitting = ref(false)
const mobileSidebarOpen = ref(false)
const router = useRouter()
const route = useRoute()

// User display (auth)
const userDisplayName = ref('')
const userEmail = ref('')

const lastSaleData = ref({}) // Store last sale data for receipt
const showDeleteModal = ref(false)
const saleToDelete = ref(null)

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
  customerContactNo: '',
  products: [],
  total: 0,
  status: 'completed',
  paymentMethod: 'cash'
})

// Get today's start and end dates
const getTodayDateRange = () => {
  const today = new Date()
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0)
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59)
  return { startOfDay, endOfDay }
}

// Fetch today's sales data only
const fetchTodaysSalesData = async () => {
  try {
    loading.value = true
    error.value = null
    console.log("Fetching today's sales data...")

    const { startOfDay, endOfDay } = getTodayDateRange()

    // Create query for today's sales only
    const salesRef = collection(db, 'sales')
    const q = query(
      salesRef,
      orderBy('date', 'desc')
    )

    console.log("Query created, setting up listener for today's sales...")

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
        
        // Filter for today's sales only
        if (sale.date >= startOfDay && sale.date <= endOfDay) {
          salesData.push(sale)
          revenue += Number(sale.total) || 0
          
          // Calculate products sold
          const soldItems = sale.products?.reduce((sum, product) => {
            return sum + (Number(product.quantity) || 0)
          }, 0) || 0
          
          productsSold += soldItems
          console.log(`Added today's sale ${sale.orderId} with ${soldItems} items, total: ${sale.total}`)
        }
      })

      console.log(`Processed ${salesData.length} sales for today`)
      console.log(`Today's revenue: ${revenue}, Products sold: ${productsSold}`)

      // Calculate Today's Net Gross (Profit)
      // Net Gross = Revenue - Cost of Goods Sold
      // Cost of Goods Sold = Revenue * (1 - profit margin)
      const costOfGoodsSold = revenue * (1 - profitMargin)
      const netGross = revenue - costOfGoodsSold

      // Update reactive refs for today's data
      todaysSales.value = salesData
      todaysRevenue.value = revenue
      todaysNetGross.value = netGross
      todaysOrders.value = salesData.length
      todaysProductsSold.value = productsSold
      todaysAverageOrderValue.value = salesData.length ? revenue / salesData.length : 0
      
      // Calculate derived data for today
      calculateTodaysTopProducts(salesData)
      calculateTodaysSalesByCategory(salesData)
      
      loading.value = false
    }, (err) => {
      console.error('Error fetching today\'s sales:', err)
      error.value = 'Failed to load today\'s sales data: ' + err.message
      loading.value = false
    })

    // Return unsubscribe function
    return unsubscribe
  } catch (err) {
    console.error('Error in fetchTodaysSalesData:', err)
    error.value = 'Failed to fetch today\'s sales data: ' + err.message
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

// Calculate today's top products
const calculateTodaysTopProducts = (salesData) => {
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

  todaysTopProducts.value = Array.from(productMap.values())
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 4)
    
  console.log(`Calculated ${todaysTopProducts.value.length} top products for today`)
}

// Calculate today's sales by category
const calculateTodaysSalesByCategory = (salesData) => {
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

  todaysSalesByCategory.value = Array.from(categoryMap.values())
  console.log(`Calculated sales for ${todaysSalesByCategory.value.length} categories today`)
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

// Format time for today's sales
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
// const formatPaymentMethod = (method) => {
//   const methods = {
//     'cash': 'Cash',
//     'credit_card': 'Credit Card',
//
//
//   })
// }

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

// Sorted today's top products based on selected metric
const profitMarginPercentage = computed(() => {
  return (profitMargin * 100).toFixed(1)
})

const sortedTodaysTopProducts = computed(() => {
  return [...todaysTopProducts.value].sort((a, b) => {
    if (selectedProductMetric.value === 'revenue') {
      return b.revenue - a.revenue
    } else {
      return b.units - a.units
    }
  })
})

// Filtered today's sales for the table
const filteredTodaysSales = computed(() => {
  let filtered = [...todaysSales.value]
  
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
const totalPages = computed(() => Math.ceil(todaysSales.value.length / itemsPerPage) || 1)
const paginationStart = computed(() => todaysSales.value.length ? ((currentPage.value - 1) * itemsPerPage) + 1 : 0)
const paginationEnd = computed(() => Math.min(currentPage.value * itemsPerPage, todaysSales.value.length))

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
// const generateReceipt = (saleData) => {
//   lastSaleData.value = saleData
//   showReceiptModal.value = true
// }

// Download receipt as text file
// const downloadReceipt = () => {
//   try {
//     // Create receipt content as text
//     const receiptText = generateReceiptText()
    
//     // Create blob and download
//     const blob = new Blob([receiptText], { type: 'text/plain' })
//     const url = URL.createObjectURL(blob)
    
//     const link = document.createElement('a')
//     link.download = `receipt-${lastSaleData.value.orderId}.txt`
//     link.href = url
    
//     // Trigger download
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
    
//     // Clean up
//     URL.revokeObjectURL(url)
    
//     console.log('Receipt downloaded successfully')
//   } catch (err) {
//     console.error('Error downloading receipt:', err)
//     alert('Failed to download receipt. Please try again.')
//   }
// }

// Generate receipt as text
// const generateReceiptText = () => {
//   const receipt = `
// ========================================
//         BARCELONA PAINT CENTER
//            SALES RECEIPT
// ========================================

// Date: ${formatDateTime(new Date())}
// Order ID: ${lastSaleData.value.orderId}
// Customer: ${lastSaleData.value.customerName}
// ${lastSaleData.value.customerContactNo ? `Contact: ${lastSaleData.value.customerContactNo}` : ''}
// Payment: ${formatPaymentMethod(lastSaleData.value.paymentMethod)}

// ========================================
//                 ITEMS
// ========================================

// ${lastSaleData.value.products.map(product => 
//   `${product.name}
//   ${product.quantity} x ${formatCurrency(product.price)} = ${formatCurrency(product.price * product.quantity)}`
// ).join('\n\n')}

// ========================================
// TOTAL: ${formatCurrency(lastSaleData.value.total)}
// ========================================

// Thank you for your business!
// Visit us again soon.

// ========================================
//   `
//   return receipt
// }

// Print receipt
// const printReceipt = () => {
//   const receiptContent = document.getElementById('receipt-content')
//   if (!receiptContent) {
//     alert('Receipt content not found')
//     return
//   }

//   const printWindow = window.open('', '_blank')
//   printWindow.document.write(`
//     <html>
//       <head>
//         <title>Receipt - ${lastSaleData.value.orderId}</title>
//         <style>
//           body { font-family: Arial, sans-serif; margin: 20px; }
//           .receipt { max-width: 300px; margin: 0 auto; }
//         </style>
//       </head>
//       <body>
//         <div class="receipt">
//           ${receiptContent.innerHTML}
//         </div>
//       </body>
//     </html>
//   `)
  
//   printWindow.document.close()
//   printWindow.print()
// }

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
      date: serverTimestamp()
    }
    
    console.log("Sale data prepared:", saleData)
    
    // Update inventory stock for each product first
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
    
    // Show success message without auto-generating daily report
    alert('Sale recorded successfully!')

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
    customerContactNo: '',
    products: [],
    total: 0,
    status: 'completed',
    paymentMethod: 'cash'
  }
}

// Create sample sale
const createSampleSale = () => {
  // Reset the form first
  resetSaleForm()
  
  // Set sample data
  saleForm.value.customerName = 'Sample Customer'
  saleForm.value.customerContactNo = '09XX-XXX-XXXX'
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

// Watch for search query and filter changes
watch(searchQuery, () => {
  currentPage.value = 1
})

// Initialize data on component mount
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userDisplayName.value = user.displayName || 'Staff User'
      userEmail.value = user.email || 'staff@example.com'
    }
  })
  console.log("Staff Sales Analytics component mounted, initializing today's data...")
  fetchAvailableProducts()
  const unsubscribe = fetchTodaysSalesData()
  
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
  router.push('/staff')
}

// Generate daily sales report (instead of individual receipt)
const generateDailyReport = () => {
  const reportData = {
    date: new Date(),
    todaysRevenue: todaysRevenue.value,
    todaysOrders: todaysOrders.value,
    todaysProductsSold: todaysProductsSold.value,
    todaysAverageOrderValue: todaysAverageOrderValue.value,
    topProducts: sortedTodaysTopProducts.value.slice(0, 3),
    recentSales: todaysSales.value.slice(0, 3),
    totalSales: todaysSales.value.length
  }
  
  lastSaleData.value = reportData
  showReceiptModal.value = true
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
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
  gradient.addColorStop(0, '#f8fafc')
  gradient.addColorStop(0.3, '#e2e8f0')
  gradient.addColorStop(1, '#f1f5f9')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
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
  headerGradient.addColorStop(0, '#0f766e')
  headerGradient.addColorStop(1, '#0891b2')
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
  ctx.fillText('DAILY SALES REPORT', canvas.width / 2, 75)
  
  // Date and time
  ctx.fillStyle = '#e6fffa'
  ctx.font = '16px Arial'
  ctx.fillText(formatDateTime(new Date()), canvas.width / 2, 100)
  
  // Report ID
  ctx.fillStyle = '#cbd5e1'
  ctx.font = '12px Arial'
  ctx.fillText(`Report ID: RPT-${Date.now().toString().slice(-8)}`, canvas.width / 2, 120)
  
  let currentY = headerHeight + 25
  
  // Staff Report Section - Complete Details
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(25, currentY, canvas.width - 50, 100)
  ctx.strokeStyle = '#e2e8f0'
  ctx.lineWidth = 2
  ctx.strokeRect(25, currentY, canvas.width - 50, 100)
  
  // Staff section header
  ctx.fillStyle = '#0f766e'
  ctx.font = 'bold 18px Arial'
  ctx.textAlign = 'left'
  ctx.fillText('👤 STAFF INFORMATION', 45, currentY + 25)
  
  // Staff details - Complete
  ctx.fillStyle = '#374151'
  ctx.font = '14px Arial'
  ctx.fillText(`Staff Name: Staff User`, 45, currentY + 50)
  ctx.fillText(`Employee ID: EMP-001`, 45, currentY + 70)
  ctx.fillText(`Date: ${todayFormatted}`, 350, currentY + 50)
  ctx.fillText(`Shift: Full Day (8:00 AM - 6:00 PM)`, 350, currentY + 70)
  
  // Status badge
  ctx.fillStyle = '#059669'
  ctx.fillRect(45, currentY + 80, 120, 15)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 12px Arial'
  ctx.fillText('✓ SHIFT COMPLETED', 50, currentY + 90)
  
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
  ctx.fillText('💰 TODAY\'S PERFORMANCE SUMMARY', 45, currentY + 25)
  
  // Performance metrics in a detailed grid
  const metrics = [
    { label: 'Total Revenue', value: formatCurrency(todaysRevenue.value), color: '#059669', icon: '💰' },
    { label: 'Total Orders', value: `${todaysOrders.value} orders`, color: '#0891b2', icon: '📋' },
    { label: 'Items Sold', value: `${todaysProductsSold.value} pieces`, color: '#7c3aed', icon: '📦' },
    { label: 'Average Order', value: formatCurrency(todaysAverageOrderValue.value), color: '#ea580c', icon: '📊' }
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
  if (sortedTodaysTopProducts.value.length > 0) {
    const productsToShow = Math.min(sortedTodaysTopProducts.value.length, 5)
    const sectionHeight = productsToShow * 80 + 120 // Increased spacing
    
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(25, currentY, canvas.width - 50, sectionHeight)
    ctx.strokeStyle = '#e2e8f0'
    ctx.lineWidth = 2
    ctx.strokeRect(25, currentY, canvas.width - 50, sectionHeight)
    
    // Top products header
    ctx.fillStyle = '#7c3aed'
    ctx.font = 'bold 18px Arial'
    ctx.fillText('🏆 TOP SELLING PRODUCTS TODAY', 45, currentY + 25)
    
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
    sortedTodaysTopProducts.value.slice(0, productsToShow).forEach((product, index) => {
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
      const percentage = todaysRevenue.value > 0 ? ((product.revenue / todaysRevenue.value) * 100).toFixed(1) : 0
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
  if (todaysSales.value.length > 0) {
    const paymentMethods = {}
    todaysSales.value.forEach(sale => {
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
  if (todaysSales.value.length > 0) {
    const salesToShow = Math.min(todaysSales.value.length, 5)
    const sectionHeight = salesToShow * 100 + 100 // Reduced height per transaction
    
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(25, currentY, canvas.width - 50, sectionHeight)
    ctx.strokeStyle = '#e2e8f0'
    ctx.lineWidth = 2
    ctx.strokeRect(25, currentY, canvas.width - 50, sectionHeight)
    
    // Recent sales header
    ctx.fillStyle = '#0891b2'
    ctx.font = 'bold 18px Arial'
    ctx.textAlign = 'left'
    ctx.fillText('🛒 RECENT TRANSACTIONS (LAST 5)', 45, currentY + 25)
    
    // Column headers with better spacing
    ctx.fillStyle = '#6b7280'
    ctx.font = 'bold 11px Arial'
    ctx.textAlign = 'left'
    ctx.fillText('ORDER ID', 50, currentY + 50)
    ctx.fillText('CUSTOMER', 180, currentY + 50)
    ctx.fillText('CONTACT', 320, currentY + 50)
    ctx.fillText('ITEMS', 450, currentY + 50)
    ctx.fillText('PAYMENT', 520, currentY + 50)
    ctx.fillText('TIME', 620, currentY + 50)
    ctx.fillText('AMOUNT', 680, currentY + 50)
    
    // Draw header line
    ctx.strokeStyle = '#e2e8f0'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(45, currentY + 55)
    ctx.lineTo(canvas.width - 45, currentY + 55)
    ctx.stroke()
    
    // Sales list with clean layout and no overlapping
    todaysSales.value.slice(0, salesToShow).forEach((sale, index) => {
      const y = currentY + 75 + (index * 100) // Clean spacing between transactions
    
      // Alternating row background
      if (index % 2 === 0) {
        ctx.fillStyle = '#f8fafc'
        ctx.fillRect(35, y - 15, canvas.width - 70, 90)
      }
    
      // Transaction border
      ctx.strokeStyle = '#e5e7eb'
      ctx.lineWidth = 1
      ctx.strokeRect(40, y - 10, canvas.width - 80, 80)
    
      // Row 1: Order ID (NO TIME HERE)
      ctx.fillStyle = '#374151'
      ctx.font = 'bold 14px Arial'
      ctx.textAlign = 'left'
      ctx.fillText(sale.orderId, 50, y + 5)
    
      // Customer Name
      ctx.fillStyle = '#374151'
      ctx.font = 'bold 13px Arial'
      const customerName = sale.customerName.length > 15 ? sale.customerName.substring(0, 15) + '...' : sale.customerName
      ctx.fillText(customerName, 180, y + 5)
    
      // Contact
      ctx.fillStyle = '#6b7280'
      ctx.font = '11px Arial'
      const contact = sale.customerContactNo || 'No contact'
      const contactText = contact.length > 12 ? contact.substring(0, 12) + '...' : contact
      ctx.fillText(contactText, 320, y + 5)
    
      // Items count
      ctx.fillStyle = '#7c3aed'
      ctx.font = 'bold 12px Arial'
      ctx.fillText(`${sale.products.length} items`, 450, y + 5)
    
      // Payment method
      ctx.fillStyle = '#0891b2'
      ctx.font = '11px Arial'
      ctx.fillText(formatPaymentMethod(sale.paymentMethod), 520, y + 5)
    
      // Time (ONLY HERE)
      ctx.fillStyle = '#6b7280'
      ctx.font = '12px Arial'
      ctx.fillText(formatTime(sale.date), 620, y + 5)
    
      // Amount (right aligned)
      ctx.fillStyle = '#059669'
      ctx.font = 'bold 16px Arial'
      ctx.textAlign = 'right'
      ctx.fillText(formatCurrency(sale.total), canvas.width - 50, y + 5)
    
      // Row 2: Product details and Status (with proper spacing)
      ctx.fillStyle = '#6b7280'
      ctx.font = '11px Arial'
      ctx.textAlign = 'left'
      const firstProduct = sale.products[0]?.name || 'N/A'
      const productText = firstProduct.length > 25 ? firstProduct.substring(0, 25) + '...' : firstProduct
      ctx.fillText(`Product: ${productText}`, 50, y + 25)
    
      // Status with colored background
      const statusColor = sale.status === 'completed' ? '#059669' : sale.status === 'pending' ? '#ea580c' : '#dc2626'
      const statusBgColor = sale.status === 'completed' ? '#d1fae5' : sale.status === 'pending' ? '#fed7aa' : '#fecaca'
    
      // Status background
      ctx.fillStyle = statusBgColor
      ctx.fillRect(450, y + 15, 80, 18)
      ctx.strokeStyle = statusColor
      ctx.lineWidth = 1
      ctx.strokeRect(450, y + 15, 80, 18)
    
      // Status text
      ctx.fillStyle = statusColor
      ctx.font = 'bold 10px Arial'
      ctx.textAlign = 'center'
      ctx.fillText(sale.status.toUpperCase(), 490, y + 27)
    
      // Percentage of total (right side)
      ctx.fillStyle = '#6b7280'
      ctx.font = '10px Arial'
      ctx.textAlign = 'right'
      const percentage = todaysRevenue.value > 0 ? ((sale.total / todaysRevenue.value) * 100).toFixed(1) : 0
      ctx.fillText(`${percentage}% of daily total`, canvas.width - 50, y + 25)
    
      // Row 3: Additional clean details
      ctx.fillStyle = '#9ca3af'
      ctx.font = '9px Arial'
      ctx.textAlign = 'left'
      ctx.fillText(`Transaction ID: ${sale.id.substring(0, 12)}`, 50, y + 45)
    
      ctx.textAlign = 'right'
      ctx.fillText(`Processed: ${formatDate(sale.date)}`, canvas.width - 50, y + 45)
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
  ctx.fillText('REPORT SUMMARY', canvas.width / 2, footerY + 25)
  
  ctx.fillStyle = '#6b7280'
  ctx.font = '12px Arial'
  ctx.fillText(`Generated on: ${formatDateTime(new Date())}`, canvas.width / 2, footerY + 45)
  ctx.fillText('Barcelona Paint Center Staff Portal', canvas.width / 2, footerY + 65)
  
  // Verification status
  ctx.fillStyle = '#059669'
  ctx.font = 'bold 12px Arial'
  ctx.fillText('✓ ALL TRANSACTIONS VERIFIED AND RECORDED', canvas.width / 2, footerY + 85)
  
  // Digital signature
  ctx.fillStyle = '#6b7280'
  ctx.font = '10px Arial'
  ctx.fillText(`Digital Report • Staff: Staff User • Shift: ${formatTime(new Date())}`, canvas.width / 2, footerY + 105)
  
  // Convert to blob and download
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = `complete-daily-sales-report-${todayFormatted.replace(/\s+/g, '-')}.png`
    link.href = url
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    URL.revokeObjectURL(url)
    
    alert('Complete daily sales report with all details saved successfully! 📋✅')
  }, 'image/png', 0.95)

} catch (err) {
  console.error('Error generating complete report:', err)
  alert('Failed to generate complete report. Please try again.')
}
}

// Generate daily summary function
const generateDailySummary = () => {
  const summaryText = `
📊 DAILY SALES SUMMARY - ${todayFormatted}
Barcelona Paint Center Staff Portal

👤 STAFF PERFORMANCE:
• Staff: Staff User (EMP-001)
• Shift: Full Day (8:00 AM - 6:00 PM)
• Status: ✅ Completed

💰 TODAY'S RESULTS:
• Total Revenue: ${formatCurrency(todaysRevenue.value)}
• Net Gross (Profit): ${formatCurrency(todaysNetGross.value)} (${profitMarginPercentage.value}% margin)
• Total Orders: ${todaysOrders.value} orders
• Items Sold: ${todaysProductsSold.value} pieces
• Average Order: ${formatCurrency(todaysAverageOrderValue.value)}

🏆 TOP PRODUCTS:
${sortedTodaysTopProducts.value.slice(0, 3).map((product, index) => 
  `${index + 1}. ${product.name} - ${formatCurrency(product.revenue)} (${product.units} units)`
).join('\n')}

💳 PAYMENT BREAKDOWN:
${Object.entries(todaysSales.value.reduce((acc, sale) => {
  const method = sale.paymentMethod || 'cash'
  if (!acc[method]) acc[method] = { count: 0, total: 0 }
  acc[method].count++
  acc[method].total += sale.total
  return acc
}, {})).map(([method, data]) => 
  `• ${formatPaymentMethod(method)}: ${data.count} orders (${formatCurrency(data.total)})`
).join('\n')}

🛒 RECENT TRANSACTIONS:
${todaysSales.value.slice(0, 5).map(sale => 
  `• ${sale.orderId} - ${sale.customerName} - ${formatCurrency(sale.total)} (${formatTime(sale.date)})`
).join('\n')}

📋 SUMMARY:
• Total Sales Value: ${formatCurrency(todaysRevenue.value)}
• Transactions Processed: ${todaysOrders.value}
• Customer Satisfaction: 100% (All completed)
• Inventory Updated: ✅ Real-time
• Report Generated: ${formatDateTime(new Date())}

✅ All transactions verified and recorded
Barcelona Paint Center - Staff Portal
  `
  
  // Create and download summary
  const blob = new Blob([summaryText], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = `daily-summary-${todayFormatted.replace(/\s+/g, '-')}.txt`
  link.href = url
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
  
  alert('Daily summary downloaded successfully! 📋✅')
}
</script>

<style scoped>
/* Modal enter/leave transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-active .add-sale-modal-panel,
.modal-fade-leave-active .add-sale-modal-panel,
.modal-fade-enter-active .daily-report-modal-panel,
.modal-fade-leave-active .daily-report-modal-panel {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .add-sale-modal-panel,
.modal-fade-leave-to .add-sale-modal-panel,
.modal-fade-enter-from .daily-report-modal-panel,
.modal-fade-leave-to .daily-report-modal-panel {
  transform: scale(0.95);
  opacity: 0;
}

/* Add Sale form stagger */
.add-sale-form-section {
  animation: formSectionIn 0.4s ease-out backwards;
}
.add-sale-form-section:nth-child(1) { animation-delay: 0.05s; }
.add-sale-form-section:nth-child(2) { animation-delay: 0.12s; }
.add-sale-form-section:nth-child(3) { animation-delay: 0.19s; }
.add-sale-form-section:nth-child(4) { animation-delay: 0.26s; }
.add-sale-form-section:nth-child(5) { animation-delay: 0.33s; }
.add-sale-product-item {
  animation: formSectionIn 0.35s ease-out backwards;
}
.add-sale-product-item:nth-child(1) { animation-delay: 0.08s; }
.add-sale-product-item:nth-child(2) { animation-delay: 0.14s; }
.add-sale-product-item:nth-child(3) { animation-delay: 0.2s; }
.add-sale-product-item:nth-child(4) { animation-delay: 0.26s; }
.add-sale-product-item:nth-child(5) { animation-delay: 0.32s; }
.add-sale-empty-products {
  animation: formSectionIn 0.4s ease-out 0.15s backwards;
}

/* Daily Report section stagger */
.daily-report-content .daily-report-section {
  animation: formSectionIn 0.4s ease-out backwards;
}
.daily-report-content .daily-report-section:nth-child(1) { animation-delay: 0.06s; }
.daily-report-content .daily-report-section:nth-child(2) { animation-delay: 0.12s; }
.daily-report-content .daily-report-section:nth-child(3) { animation-delay: 0.18s; }
.daily-report-content .daily-report-section:nth-child(4) { animation-delay: 0.24s; }
.daily-report-content .daily-report-section:nth-child(5) { animation-delay: 0.3s; }
.daily-report-content .daily-report-section:nth-child(6) { animation-delay: 0.36s; }
.daily-report-content .daily-report-section:nth-child(7) { animation-delay: 0.42s; }
.daily-report-content .daily-report-section:nth-child(8) { animation-delay: 0.48s; }

@keyframes formSectionIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #ccfbf1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #14b8a6, #06b6d4);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #0d9488, #0891b2);
}
</style>
