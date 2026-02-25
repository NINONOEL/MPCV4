<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-gray-50/95 to-slate-100/80 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-[480px] h-[480px] bg-gradient-to-br from-teal-200/25 to-cyan-200/20 rounded-full filter blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-emerald-200/20 to-teal-200/15 rounded-full filter blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.06),transparent)]"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-white/95 backdrop-blur-sm border-r border-gray-200/80 hidden md:flex md:flex-col shadow-sm">
        <div class="p-4 xl:p-5 border-b border-gray-100 flex-shrink-0">
          <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight tracking-tight">Barcelona Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-teal-500 to-cyan-500 px-2.5 xl:px-3 py-1.5 rounded-lg inline-flex items-center shadow-sm font-medium">
            <Shield class="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            Admin Portal
          </div>
        </div>

        <nav class="flex-1 p-3 xl:p-4 space-y-1 overflow-y-auto">
          <router-link
            to="/admin/dashboard"
            class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
            :class="{ 'shadow-sm border-l-4 border-blue-500': $route.path === '/admin/dashboard' }"
          >
            <LayoutDashboard class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link
            to="/admin/staff"
            class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700"
            :class="{ 'shadow-sm border-l-4 border-green-500': $route.path === '/admin/staff' }"
          >
            <Users class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link
            to="/admin/inventory"
            class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            :class="{ 'shadow-sm border-l-4 border-purple-500': $route.path === '/admin/inventory' }"
          >
            <Package class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link
            to="/admin/house-paint-recommender"
            class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border-l-4 border-orange-500': $route.path === '/admin/house-paint-recommender' }"
          >
            <Home class="w-5 h-5" />
            <span>Paint Recommender</span>
          </router-link>

          <router-link
            to="/admin/paint-mixing"
            class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border-l-4 border-pink-500': $route.path === '/admin/paint-mixing' }"
          >
            <Palette class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link
            to="/admin/sales-analytics"
            class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border-l-4 border-teal-500': $route.path === '/admin/sales-analytics' }"
          >
            <TrendingUp class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link to="/admin/visualization" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700" :class="{ 'shadow-sm border-l-4 border-indigo-500': $route.path === '/admin/visualization' }">
            <BarChart3 class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Data Visualization</span>
          </router-link>

          <router-link
            to="/admin/settings"
            class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700"
            :class="{ 'shadow-sm border-l-4 border-amber-500': $route.path === '/admin/settings' }"
          >
            <Settings class="w-5 h-5" />
            <span>Settings</span>
          </router-link>

          <!-- Perfect spacing -->
          <div class="h-4"></div>
        </nav>

        <div class="p-4 border-t border-gray-100 bg-gradient-to-r from-teal-50/80 to-cyan-50/80 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-md">
              <User class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-600 truncate">admin@example.com</p>
            </div>
            <button @click="handleLogout" class="p-2 rounded-xl hover:bg-white/60 text-gray-600 hover:text-gray-900 transition-colors" title="Logout">
              <LogOut class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Mobile Sidebar Toggle -->
      <div class="fixed top-4 left-4 z-30 md:hidden">
        <button @click="toggleMobileSidebar" class="p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all" aria-label="Toggle navigation menu">
          <Menu v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <X v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div v-if="mobileSidebarOpen" class="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 md:hidden" @click="toggleMobileSidebar"></div>

      <aside v-if="mobileSidebarOpen" class="fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-sm border-r border-gray-200/80 z-30 md:hidden shadow-xl flex flex-col">
        <div class="p-5 border-b border-gray-100 flex-shrink-0">
          <h1 class="text-lg font-bold text-gray-900 leading-tight tracking-tight">Barcelona Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-teal-500 to-cyan-500 px-3 py-1.5 rounded-lg inline-flex items-center shadow-sm font-medium">
            <Shield class="h-3.5 w-3.5 mr-1.5" />
            Admin Portal
          </div>
        </div>
        <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
          <router-link to="/admin/dashboard" class="flex items-center space-x-3 p-3 rounded-xl font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" :class="{ 'shadow-sm border-l-4 border-blue-500': $route.path === '/admin/dashboard' }" @click="mobileSidebarOpen = false">
            <LayoutDashboard class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>
          <router-link to="/admin/staff" class="flex items-center space-x-3 p-3 rounded-xl font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700" :class="{ 'shadow-sm border-l-4 border-green-500': $route.path === '/admin/staff' }" @click="mobileSidebarOpen = false">
            <Users class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>
          <router-link to="/admin/inventory" class="flex items-center space-x-3 p-3 rounded-xl font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700" :class="{ 'shadow-sm border-l-4 border-purple-500': $route.path === '/admin/inventory' }" @click="mobileSidebarOpen = false">
            <Package class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>
          <router-link to="/admin/house-paint-recommender" class="flex items-center space-x-3 p-3 rounded-xl font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700" :class="{ 'shadow-sm border-l-4 border-orange-500': $route.path === '/admin/house-paint-recommender' }" @click="mobileSidebarOpen = false">
            <Home class="w-5 h-5" />
            <span>Paint Recommender</span>
          </router-link>
          <router-link to="/admin/paint-mixing" class="flex items-center space-x-3 p-3 rounded-xl font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700" :class="{ 'shadow-sm border-l-4 border-pink-500': $route.path === '/admin/paint-mixing' }" @click="mobileSidebarOpen = false">
            <Palette class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>
          <router-link to="/admin/sales-analytics" class="flex items-center space-x-3 p-3 rounded-xl font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700" :class="{ 'shadow-sm border-l-4 border-teal-500': $route.path === '/admin/sales-analytics' }" @click="mobileSidebarOpen = false">
            <TrendingUp class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>
          <router-link to="/admin/visualization" class="flex items-center space-x-3 p-3 rounded-xl font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700" :class="{ 'shadow-sm border-l-4 border-indigo-500': $route.path === '/admin/visualization' }" @click="mobileSidebarOpen = false">
            <BarChart3 class="w-5 h-5" />
            <span>Data Visualization</span>
          </router-link>
          <router-link to="/admin/settings" class="flex items-center space-x-3 p-3 rounded-xl font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700" :class="{ 'shadow-sm border-l-4 border-amber-500': $route.path === '/admin/settings' }" @click="mobileSidebarOpen = false">
            <Settings class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
        </nav>
        <div class="p-4 border-t border-gray-100 bg-gradient-to-r from-teal-50/80 to-cyan-50/80 flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-md">
              <User class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-600 truncate">admin@example.com</p>
            </div>
            <button @click="handleLogout" class="p-2 rounded-xl hover:bg-white/60 text-gray-600 hover:text-gray-900 transition-colors">
              <LogOut class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <main class="flex-1 flex flex-col overflow-auto">
        <header class="sticky top-0 z-20 bg-white/90 backdrop-blur-xl border-b border-gray-200/90 shadow-sm">
          <div class="h-1 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500"></div>
          <div class="px-4 md:px-8 py-4">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div class="pl-14 md:pl-0 flex items-center gap-3">
                <div class="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 items-center justify-center shadow-lg shadow-teal-500/20 flex-shrink-0">
                  <TrendingUp class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 class="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Sales Analytics</h1>
                  <p class="text-sm text-gray-500 mt-0.5">Monitor sales performance and trends</p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2 md:gap-4">
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100/90 text-gray-700 text-sm border border-gray-200/60">
                  <Calendar class="w-4 h-4 text-teal-500 flex-shrink-0" />
                  <span class="truncate font-medium">{{ currentDate.split(',')[0] }}</span>
                </div>
                <div class="hidden md:block h-8 w-px bg-gray-200"></div>
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 text-gray-800 text-sm border border-teal-200/60">
                  <span class="font-medium truncate">Welcome, Admin</span>
                  <Bell class="w-4 h-4 text-teal-500 cursor-pointer hover:text-teal-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="flex-1 p-4 md:p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div class="flex flex-wrap items-center gap-3">
              <button
                @click="showAddSaleModal = true"
                class="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
              >
                <span class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Plus class="w-5 h-5" />
                </span>
                Add Sale
              </button>
              <button
                @click="openReportModal"
                class="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-gray-800 bg-white border-2 border-teal-200 hover:border-teal-300 hover:bg-teal-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out shadow-sm"
              >
                <span class="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
                  <Clipboard class="w-5 h-5" />
                </span>
                Report
              </button>
              <button
                @click="confirmDeleteAllSales"
                class="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-red-600 bg-white border-2 border-red-200 hover:border-red-300 hover:bg-red-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out shadow-sm"
              >
                <span class="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                  <Trash2 class="w-5 h-5" />
                </span>
                Delete All Sales
              </button>
            </div>
            <div class="flex items-center gap-2 bg-white rounded-2xl border border-gray-200/90 shadow-sm p-1.5 ring-1 ring-black/5">
              <button
                v-for="range in dateRanges"
                :key="range.value"
                @click="selectedRange = range.value"
                class="px-3 py-2 rounded-xl text-sm font-medium transition-all"
                :class="selectedRange === range.value ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'"
              >
                {{ range.label }}
              </button>
            </div>
          </div>

          <div v-if="loading && !error" class="bg-white rounded-2xl shadow-md border border-gray-200/90 p-10 mb-6 text-center">
            <Loader class="w-10 h-10 text-teal-500 animate-spin mx-auto mb-4" />
            <p class="text-gray-600 font-medium">Loading sales data...</p>
          </div>

          <div v-if="error" class="bg-white rounded-2xl border border-red-200 shadow-md p-4 mb-6 flex items-center justify-between">
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

          <div v-if="!loading || sales.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div class="bg-white rounded-2xl shadow-md border border-gray-200/90 hover:shadow-lg transition-all overflow-hidden relative group">
              <div class="h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-500 absolute top-0 left-0 right-0"></div>
              <div class="p-5">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
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

            <div class="bg-white rounded-2xl shadow-md border border-gray-200/90 hover:shadow-lg transition-all overflow-hidden relative group">
              <div class="h-1 w-full bg-gradient-to-r from-amber-500 to-orange-500 absolute top-0 left-0 right-0"></div>
              <div class="p-5">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                    <TrendingUp class="w-5 h-5 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs sm:text-sm text-gray-600">Net Gross (Profit)</p>
                    <p class="text-lg sm:text-xl font-bold text-gray-900 truncate">{{ formatCurrency(totalNetGross) }}</p>
                    <div class="flex items-center gap-1 mt-1">
                      <TrendingUp class="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                      <span class="text-xs font-medium text-amber-600">{{ profitMarginPercentage }}%</span>
                      <span class="text-xs text-gray-600">profit margin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-md border border-gray-200/90 hover:shadow-lg transition-all overflow-hidden relative group">
              <div class="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-0 left-0 right-0"></div>
              <div class="p-5">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
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

            <div class="bg-white rounded-2xl shadow-md border border-gray-200/90 hover:shadow-lg transition-all overflow-hidden relative group">
              <div class="h-1 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 absolute top-0 left-0 right-0"></div>
              <div class="p-5">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
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
          </div>

          <!-- Removed the Average Order Value card and Best Seller section to lighten the page -->

          <div v-if="!loading && sales.length === 0" class="bg-white rounded-2xl shadow-md border border-gray-200/90 p-10 mb-8 text-center">
            <div class="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
              <ShoppingCart class="w-8 h-8 text-teal-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">No sales data yet</h3>
            <p class="text-gray-500 mb-6 max-w-sm mx-auto">Start recording sales to see analytics and insights.</p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                @click="showAddSaleModal = true"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-xl transition-all"
              >
                <Plus class="w-5 h-5" />
                Record Sale
              </button>
              <button
                @click="createSampleSale"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-teal-50 hover:border-teal-200 transition-all shadow-sm"
              >
                <Clipboard class="w-5 h-5" />
                Create Sample Sale
              </button>
            </div>
          </div>

          <div v-if="!loading && sales.length > 0" class="mb-8">
            <div class="bg-white rounded-2xl shadow-md border border-gray-200/90 p-6 hover:shadow-lg transition-shadow">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 class="text-lg font-semibold text-gray-900">Top Products</h2>
                <select
                  v-model="selectedProductMetric"
                  class="px-4 py-2 rounded-xl border border-gray-200 text-sm bg-white text-gray-900 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition-all"
                >
                  <option value="revenue">By Revenue</option>
                  <option value="units">By Units Sold</option>
                </select>
              </div>
              <div class="space-y-3">
                <div
                  v-for="product in sortedTopProducts"
                  :key="product.id"
                  class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-teal-50/50 hover:border-teal-100 transition-colors"
                >
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                    <Package class="w-6 h-6 text-teal-600" />
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

          <div v-if="!loading && sales.length > 0" class="bg-white rounded-2xl shadow-md border border-gray-200/90 p-6 mb-8 hover:shadow-lg transition-shadow">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 class="text-lg font-semibold text-gray-900">Sales by Category</h2>
              <select
                v-model="selectedCategoryView"
                class="px-4 py-2 rounded-xl border border-gray-200 text-sm bg-white text-gray-900 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition-all"
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
                class="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-teal-50/50 hover:border-teal-100 transition-colors"
              >
                <div class="flex items-center gap-3 mb-3">
                  <div class="p-2 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100">
                    <component :is="getCategoryIcon(category.name)" class="w-5 h-5 text-teal-600" />
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

          <div v-if="!loading && sales.length > 0" class="bg-white rounded-2xl shadow-md border border-gray-200/90 overflow-hidden">
            <div class="p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50/80 to-white">
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 class="text-lg font-semibold text-gray-900">Recent Sales</h2>
                <div class="relative w-full sm:w-64">
                  <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search sales..."
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white text-gray-900 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 placeholder-gray-400 transition-all"
                  />
                </div>
              </div>
            </div>
            <!-- Mobile Card View -->
            <div class="block md:hidden divide-y divide-gray-100">
              <div
                v-for="sale in filteredSales"
                :key="sale.id"
                class="p-4 hover:bg-teal-50/30 transition-colors"
              >
                <div class="flex items-start justify-between gap-3 mb-2">
                  <div class="flex-1 min-w-0">
                    <p class="font-semibold text-gray-900 truncate">{{ sale.orderId }}</p>
                    <p class="text-sm text-gray-600">{{ formatDate(sale.date) }}</p>
                  </div>
                  <p class="font-bold text-teal-700 text-lg shrink-0">{{ formatCurrency(sale.total) }}</p>
                </div>
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shrink-0">
                    <User class="w-4 h-4 text-blue-600" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-gray-900 truncate">{{ sale.customerName }}</p>
                    <p class="text-xs text-gray-600 truncate">{{ sale.customerContactNo || 'No contact' }}</p>
                  </div>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="text-sm text-gray-600">{{ sale.products.length }} items · {{ sale.products[0]?.name || 'N/A' }}</span>
                  <div class="flex items-center gap-2">
                    <span
                      class="px-2 py-0.5 rounded-xl text-xs font-medium"
                      :class="{
                        'bg-emerald-100 text-emerald-800': sale.status === 'completed',
                        'bg-amber-100 text-amber-800': sale.status === 'pending',
                        'bg-red-100 text-red-800': sale.status === 'cancelled'
                      }"
                    >
                      {{ sale.status }}
                    </span>
                    <button
                      @click="confirmDeleteSale(sale)"
                      class="p-2 hover:bg-red-50 rounded-xl text-red-600 transition-colors"
                      title="Delete Sale"
                    >
                      <Trash2 class="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Desktop Table -->
            <div class="hidden md:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200 bg-gray-50/80">
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Order ID</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Customer</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Products</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Total</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Status</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Date</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="sale in filteredSales"
                    :key="sale.id"
                    class="border-b border-gray-100 hover:bg-teal-50/30 transition-colors"
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
                        class="px-2.5 py-1 rounded-xl text-sm font-medium"
                        :class="{
                          'bg-emerald-100 text-emerald-800 border border-emerald-200': sale.status === 'completed',
                          'bg-amber-100 text-amber-800 border border-amber-200': sale.status === 'pending',
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
                        class="p-2 hover:bg-red-50 rounded-xl text-red-600 hover:text-red-700 transition-colors"
                        title="Delete Sale"
                      >
                        <Trash2 class="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-gray-100 bg-gray-50/50">
              <p class="text-sm text-gray-600 font-medium text-center sm:text-left">
                Showing {{ paginationStart }} to {{ paginationEnd }} of {{ filteredSales.length }} results
              </p>
              <div class="flex items-center gap-2">
                <button
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2.5 rounded-xl hover:bg-white border border-gray-200 disabled:opacity-50 text-gray-700 transition-colors"
                >
                  <ChevronLeft class="w-5 h-5" />
                </button>
                <span class="text-sm font-medium text-gray-700 px-2">Page {{ currentPage }} of {{ totalPages }}</span>
                <button
                  @click="currentPage++"
                  :disabled="currentPage === totalPages"
                  class="p-2.5 rounded-xl hover:bg-white border border-gray-200 disabled:opacity-50 text-gray-700 transition-colors"
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
  <div v-if="showAddSaleModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-200" @click.self="showAddSaleModal = false">
    <div class="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200/90 animate-slide-up">
      <div class="h-1.5 w-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-2xl"></div>
      <div class="p-6 border-b border-gray-100">
        <div class="flex items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center">
              <ShoppingCart class="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">Record New Sale</h3>
              <p class="text-sm text-gray-500 mt-0.5">{{ saleMode === 'quick' ? 'Product, amount, done' : 'Add customer and products' }}</p>
            </div>
          </div>
          <button
          type="button"
          @click="showAddSaleModal = false"
          class="p-2.5 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
          aria-label="Close"
        >
          <X class="w-5 h-5" />
        </button>
        </div>
        <!-- Mode Tabs -->
        <div class="flex gap-2 px-6 pb-4">
          <button
            type="button"
            @click="saleMode = 'full'"
            :class="['px-4 py-2 rounded-xl text-sm font-medium transition-all', saleMode === 'full' ? 'bg-teal-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200']"
          >
            Full Form
          </button>
          <button
            type="button"
            @click="saleMode = 'quick'"
            :class="['px-4 py-2 rounded-xl text-sm font-medium transition-all', saleMode === 'quick' ? 'bg-teal-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200']"
          >
            Quick Add
          </button>
        </div>
      </div>

      <!-- Quick Add Form -->
      <form v-if="saleMode === 'quick'" @submit.prevent="handleQuickAddSale" class="p-5 md:p-6">
        <div class="space-y-5">
          <div class="bg-gray-50/80 rounded-2xl border border-gray-200/90 p-5 space-y-4">
            <div class="relative" ref="quickProductSearchRef">
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Product</label>
              <input
                type="text"
                v-model="productSearchQuery"
                placeholder="Search products by name or SKU..."
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 bg-white text-gray-900 placeholder-gray-400 text-sm"
                @focus="quickProductDropdownOpen = true"
              />
              <div v-if="quickSaleForm.productId" class="mt-1 text-xs text-teal-600 font-medium">
                {{ availableProducts.find(p => p.id === quickSaleForm.productId)?.name || 'Selected' }}
              </div>
              <div
                v-show="quickProductDropdownOpen && filteredProductsForSale.length > 0"
                class="absolute z-20 top-full left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg py-1"
                @click.self="quickProductDropdownOpen = false"
              >
                <button
                  v-for="p in filteredProductsForSale"
                  :key="p.id"
                  type="button"
                  @click="selectQuickProduct(p)"
                  class="w-full px-4 py-2.5 text-left hover:bg-teal-50 text-sm flex justify-between items-center"
                >
                  <span>{{ p.name }}</span>
                  <span class="text-gray-500 text-xs">{{ formatCurrency(p.price) }} · Stock: {{ p.stock || 0 }}</span>
                </button>
              </div>
              <select
                v-model="quickSaleForm.productId"
                class="w-full mt-2 px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 bg-white text-gray-900 text-sm"
              >
                <option value="">Or select from dropdown</option>
                <option v-for="p in filteredProductsForSale" :key="p.id" :value="p.id">
                  {{ p.name }} — {{ formatCurrency(p.price) }} (Stock: {{ p.stock || 0 }})
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">Amount (₱)</label>
              <input
                type="number"
                v-model.number="quickSaleForm.amount"
                min="0"
                step="0.01"
                required
                placeholder="0.00"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 bg-white text-gray-900"
              />
            </div>
          </div>
          <div class="flex justify-end gap-3">
            <button type="button" @click="showAddSaleModal = false" class="px-5 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" :disabled="isSubmitting" class="px-5 py-2.5 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 disabled:opacity-70">
              <span v-if="isSubmitting">Saving...</span>
              <span v-else>Record Sale</span>
            </button>
          </div>
        </div>
      </form>

      <!-- Full Form -->
      <form v-else @submit.prevent="handleAddSale" class="p-5 md:p-6">
        <div class="space-y-5">
          <!-- Invoice No. -->
          <div class="bg-gray-50/80 rounded-2xl border border-gray-200/90 p-5">
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Invoice No.</label>
            <input
              type="text"
              v-model="saleForm.invoiceNo"
              placeholder="e.g. INV-2024-001"
              class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 bg-white text-gray-900 placeholder-gray-400 transition-all"
            />
          </div>

          <!-- Customer Information -->
          <div class="bg-gray-50/80 rounded-2xl border border-gray-200/90 p-5">
            <h4 class="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <User class="w-4 h-4 text-teal-600" />
              Customer Information
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Customer Name</label>
                <input
                  type="text"
                  v-model="saleForm.customerName"
                  required
                  placeholder="Full name"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 bg-white text-gray-900 placeholder-gray-400 transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Contact No.</label>
                <input
                  type="tel"
                  v-model="saleForm.customerContactNo"
                  placeholder="09XX-XXX-XXXX"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 bg-white text-gray-900 placeholder-gray-400 transition-all"
                />
              </div>
            </div>
          </div>

          <!-- Products -->
          <div class="bg-gray-50/80 rounded-2xl border border-gray-200/90 p-5">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-sm font-semibold text-gray-900 flex items-center gap-2">
                <Package class="w-4 h-4 text-teal-600" />
                Products
              </h4>
              <button
                type="button"
                @click="addProductToSale"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-teal-600 bg-teal-100 hover:bg-teal-200 transition-colors"
              >
                <Plus class="w-4 h-4" />
                Add Product
              </button>
            </div>
            <div v-for="(product, index) in saleForm.products" :key="index" class="mb-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm last:mb-0">
              <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-semibold text-gray-800">Product {{ index + 1 }}</span>
                <button
                  type="button"
                  @click="removeProductFromSale(index)"
                  class="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                >
                  <X class="w-4 h-4" />
                </button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="md:col-span-3 relative">
                  <label class="block text-xs font-medium text-gray-600 mb-1">Product</label>
                  <input
                    type="text"
                    :value="productSearchByRow[index] ?? ''"
                    @input="productSearchByRow[index] = $event.target.value"
                    placeholder="Search products by name or SKU..."
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 bg-white text-gray-900 placeholder-gray-400 text-sm"
                    @focus="productDropdownOpenByRow[index] = true"
                  />
                  <div v-if="product.id" class="mt-1 text-xs text-teal-600 font-medium">
                    {{ product.name || availableProducts.find(ap => ap.id === product.id)?.name }}
                  </div>
                  <div
                    v-show="productDropdownOpenByRow[index] && getFilteredProductsForRow(index).length > 0"
                    class="absolute z-20 top-full left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg py-1"
                  >
                    <button
                      v-for="p in getFilteredProductsForRow(index)"
                      :key="p.id"
                      type="button"
                      @click="selectProductForRow(index, p)"
                      class="w-full px-4 py-2.5 text-left hover:bg-teal-50 text-sm flex justify-between items-center"
                    >
                      <span>{{ p.name }}</span>
                      <span class="text-gray-500 text-xs">{{ formatCurrency(p.price) }} · Stock: {{ p.stock || 0 }}</span>
                    </button>
                  </div>
                  <select
                    v-model="product.id"
                    class="w-full mt-2 px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-300 focus:border-teal-400 bg-white text-gray-900 text-sm"
                    @change="updateProductDetails(index)"
                  >
                    <option value="">Or select from dropdown</option>
                    <option v-for="p in getFilteredProductsForRow(index)" :key="p.id" :value="p.id">
                      {{ p.name }} — {{ formatCurrency(p.price) }} (Stock: {{ p.stock || 0 }})
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1">Quantity</label>
                  <input
                    type="number"
                    v-model.number="product.quantity"
                    min="1"
                    required
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-300 bg-white text-gray-900 transition-all"
                    @input="calculateTotal"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1">Price</label>
                  <input
                    type="number"
                    v-model.number="product.price"
                    min="0"
                    step="0.01"
                    required
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-300 bg-white text-gray-900 transition-all"
                    @input="calculateTotal"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1">Subtotal</label>
                  <input
                    type="text"
                    :value="formatCurrency(product.price * product.quantity)"
                    readonly
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-100 text-gray-700 font-medium"
                  />
                </div>
              </div>
            </div>

            <div v-if="saleForm.products.length === 0" class="text-center py-8 border-2 border-dashed border-gray-200 rounded-xl bg-white/50">
              <Package class="w-10 h-10 mx-auto mb-2 text-gray-300" />
              <p class="text-gray-500 text-sm font-medium">No products added yet</p>
              <p class="text-xs text-gray-400 mt-1">Click "Add Product" to start</p>
            </div>
          </div>

          <div class="bg-gray-50/80 rounded-2xl border border-gray-200/90 p-5">
            <label class="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <div class="relative" ref="paymentDropdownRef">
              <button
                type="button"
                @click="paymentDropdownOpen = !paymentDropdownOpen"
                class="w-full px-4 py-3 rounded-xl border-2 bg-white text-left flex items-center justify-between gap-2 transition-all duration-200"
                :class="paymentDropdownOpen ? 'border-teal-400 ring-2 ring-teal-100 shadow-md' : 'border-gray-200 hover:border-teal-200 focus:ring-2 focus:ring-teal-200'"
              >
                <span class="flex items-center gap-2">
                  <component
                    :is="paymentMethodOptions.find(o => o.value === saleForm.paymentMethod)?.icon || Banknote"
                    class="w-5 h-5 text-teal-600 flex-shrink-0"
                  />
                  <span class="font-medium text-gray-900">{{ paymentMethodOptions.find(o => o.value === saleForm.paymentMethod)?.label || 'Select payment' }}</span>
                </span>
                <ChevronDown
                  class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200"
                  :class="{ 'rotate-180': paymentDropdownOpen }"
                />
              </button>
              <Transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
              >
                <div
                  v-show="paymentDropdownOpen"
                  class="absolute top-full left-0 right-0 mt-2 py-2 bg-white rounded-xl border-2 border-gray-200 shadow-xl z-10 overflow-hidden"
                >
                  <button
                    v-for="opt in paymentMethodOptions"
                    :key="opt.value"
                    type="button"
                    @click="saleForm.paymentMethod = opt.value; paymentDropdownOpen = false"
                    class="w-full px-4 py-3 flex items-center gap-3 text-left transition-colors duration-150 hover:bg-teal-50"
                    :class="saleForm.paymentMethod === opt.value ? 'bg-teal-50 text-teal-800 font-medium' : 'text-gray-700'"
                  >
                    <component :is="opt.icon" class="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span>{{ opt.label }}</span>
                  </button>
                </div>
              </Transition>
            </div>
          </div>

          <div class="rounded-2xl border-2 border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 p-5">
            <div class="flex justify-between items-center">
              <span class="text-gray-800 font-semibold">Total Amount</span>
              <span class="text-2xl font-bold text-teal-700">{{ formatCurrency(saleForm.total) }}</span>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
          <button
            type="button"
            @click="showAddSaleModal = false"
            class="px-5 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-6 py-2.5 rounded-xl font-semibold text-white shadow-lg shadow-teal-500/25 hover:shadow-xl transition-all focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 bg-gradient-to-r from-teal-500 to-cyan-500 disabled:opacity-70"
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

  <!-- Sale Recorded Success Modal -->
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="showSaleSuccessModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4" @click.self="showSaleSuccessModal = false">
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div class="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-gray-200/90" @click.stop>
          <div class="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
          <div class="p-8 text-center">
            <div class="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-6 ring-4 ring-emerald-100">
              <CheckCircle2 class="w-12 h-12 text-white" strokeWidth="2.5" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Sale Recorded!</h3>
            <p class="text-gray-600 mb-6">Transaction completed successfully. Inventory has been updated.</p>
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-5 border border-teal-100/80 mb-6 text-left">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-gray-600">Customer</span>
                <span class="font-semibold text-gray-900">{{ saleSuccessData.customerName }}</span>
              </div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-gray-600">Items</span>
                <span class="font-semibold text-gray-900">{{ saleSuccessData.productCount }} product(s)</span>
              </div>
              <div class="flex justify-between items-center pt-3 border-t border-teal-200/60">
                <span class="text-sm font-medium text-gray-700">Total</span>
                <span class="text-xl font-bold text-teal-700">{{ formatCurrency(saleSuccessData.total) }}</span>
              </div>
            </div>
            <button
              @click="showSaleSuccessModal = false"
              class="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/25 hover:shadow-xl transition-all duration-200"
            >
              Done
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>

  <!-- Sales Report Modal -->
  <div v-if="showDailyReportModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200/90">
      <div class="h-1 w-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-2xl"></div>
      <div class="p-6 border-b border-gray-100">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900">Sales Report</h3>
          <button @click="showDailyReportModal = false" class="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Period selector: Days / Months / Years -->
      <div class="p-4 border-b border-gray-100 bg-gray-50/80">
        <p class="text-sm font-medium text-gray-700 mb-3">Report period</p>
        <div class="flex gap-2 mb-4">
          <button
            v-for="t in reportPeriodTypes"
            :key="t.value"
            @click="reportPeriodType = t.value"
            class="flex-1 py-2.5 px-3 rounded-xl text-sm font-medium transition-all"
            :class="reportPeriodType === t.value ? 'bg-teal-500 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'"
          >
            {{ t.label }}
          </button>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="opt in reportPeriodOptions"
            :key="opt.value"
            @click="reportPeriodValue = opt.value"
            class="py-2 px-4 rounded-xl text-sm font-medium transition-all border"
            :class="reportPeriodValue === opt.value ? 'bg-teal-100 border-teal-300 text-teal-800' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100'"
          >
            {{ opt.label }}
          </button>
        </div>
      </div>

      <div class="p-4 md:p-6">
        <div v-if="reportDataLoading" class="text-center py-10 text-gray-500 rounded-2xl border border-gray-200 bg-gray-50/50">
          <Loader class="w-10 h-10 mx-auto mb-3 text-teal-500 animate-spin" />
          <p class="font-medium">Loading report data...</p>
        </div>
        <div v-else-if="reportSales.length === 0" class="text-center py-8 text-gray-500 rounded-2xl border border-dashed border-gray-200 bg-gray-50/50">
          <TrendingUp class="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p class="font-medium">No sales in this period</p>
          <p class="text-sm mt-1">Choose another period.</p>
        </div>
        <div v-else id="daily-report-content" class="bg-gradient-to-br from-teal-50/50 to-cyan-50/50 p-4 rounded-2xl mb-4 text-sm border border-gray-200/90">
          <div class="text-center mb-6">
            <div class="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <TrendingUp class="w-8 h-8 text-white" />
            </div>
            <h2 class="text-xl font-bold text-gray-900">Barcelona Paint Center</h2>
            <p class="text-teal-600 font-medium">Sales Report — {{ reportPeriodLabel }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ formatDateTime(new Date()) }}</p>
          </div>

          <div class="bg-white/90 rounded-xl p-4 mb-4 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center">
              <Shield class="w-4 h-4 mr-2 text-teal-600" />
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
                <span class="font-medium ml-1">{{ reportPeriodLabel }}</span>
              </div>
              <div>
                <span class="text-gray-600">Status:</span>
                <span class="font-medium ml-1 text-green-600">Active</span>
              </div>
            </div>
          </div>

          <div class="bg-white/90 rounded-xl p-4 mb-4 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <DollarSign class="w-4 h-4 mr-2 text-green-600" />
              Overall Performance ({{ reportPeriodLabel }})
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                <p class="text-xs text-green-700 font-medium">Total Revenue</p>
                <p class="text-lg font-bold text-green-800">{{ formatCurrency(reportTotalRevenue) }}</p>
              </div>
              <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-xl border border-blue-200">
                <p class="text-xs text-blue-700 font-medium">Total Orders</p>
                <p class="text-lg font-bold text-blue-800">{{ reportTotalOrders }}</p>
              </div>
              <div class="bg-gradient-to-r from-purple-50 to-violet-50 p-3 rounded-xl border border-purple-200">
                <p class="text-xs text-purple-700 font-medium">Items Sold</p>
                <p class="text-lg font-bold text-purple-800">{{ reportTotalProductsSold }}</p>
              </div>
              <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-xl border border-orange-200">
                <p class="text-xs text-orange-700 font-medium">Avg Order</p>
                <p class="text-lg font-bold text-orange-800">{{ formatCurrency(reportAverageOrderValue) }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white/90 rounded-xl p-4 mb-4 border border-gray-200" v-if="reportSortedTopProducts.length > 0">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <Package class="w-4 h-4 mr-2 text-teal-600" />
              Top Products ({{ reportPeriodLabel }})
            </h3>
            <div class="space-y-3">
              <div
                v-for="(product, index) in reportSortedTopProducts.slice(0, 5)"
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

                <div class="col-span-1 text-right">
                  <div class="text-purple-600 text-xs font-medium">{{ reportTotalRevenue > 0 ? ((product.revenue / reportTotalRevenue) * 100).toFixed(1) : 0 }}%</div>
                  <div class="text-gray-600 text-xs">of total</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white/90 rounded-xl p-4 mb-4 border border-gray-200" v-if="reportSales.length > 0">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <ShoppingCart class="w-4 h-4 mr-2 text-teal-600" />
              Recent Transactions (Last 5)
            </h3>
            <div class="space-y-3">
              <div
                v-for="sale in reportSales.slice(0, 5)"
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

      <div v-if="!reportDataLoading && reportSales.length > 0" class="flex gap-3 p-4 border-t border-gray-100">
        <button
          @click="downloadDailyReport"
          class="flex-1 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-xl shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 hover:shadow-xl transition-all"
        >
          <Download class="w-5 h-5" />
          Save as Image
        </button>
        <button
          @click="printDailyReport"
          class="flex-1 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
        >
          <Printer class="w-5 h-5" />
          Print
        </button>
      </div>
    </div>
  </div>

  <!-- Receipt Modal -->
  <div v-if="showReceiptModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-200/90">
      <div class="h-1 w-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-2xl"></div>
      <div class="p-6 border-b border-gray-100">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900">Receipt Generated</h3>
          <button @click="showReceiptModal = false" class="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
            <X class="w-5 h-5" />
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
  <div v-if="showDeleteModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-200/90">
      <div class="h-1 w-full bg-red-500 rounded-t-2xl"></div>
      <div class="p-6">
        <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center">
          <AlertTriangle class="w-7 h-7 text-red-600" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 text-center mb-2">Delete Sale</h3>
        <p class="text-gray-600 text-center mb-6 text-sm">
          Are you sure you want to delete sale <strong>{{ saleToDelete?.orderId }}</strong>?
          This will restore the product stock and cannot be undone.
        </p>
        <div class="flex justify-center gap-3">
          <button @click="showDeleteModal = false" class="px-5 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button @click="deleteSale" class="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl shadow-md transition-all">
            Delete Sale
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete All Sales Confirmation Modal -->
  <div v-if="showDeleteAllModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-200/90">
      <div class="h-1 w-full bg-red-500 rounded-t-2xl"></div>
      <div class="p-6">
        <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center">
          <AlertTriangle class="w-7 h-7 text-red-600" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 text-center mb-2">Delete All Sales</h3>
        <p class="text-gray-600 text-center mb-6 text-sm">
          Are you sure you want to delete <strong>all sales in the system</strong>?
          This will restore product stock and cannot be undone. You don't need to select a date range (1D, 7D, etc.) — this deletes every sale.
        </p>
        <div class="flex justify-center gap-3">
          <button @click="showDeleteAllModal = false" class="px-5 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button
            @click="deleteAllSales"
            class="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl shadow-md transition-all"
          >
            Delete All Sales
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'
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
  Plus, Trash2, Search, ChevronLeft, ChevronRight, ChevronDown, Loader, AlertTriangle,
  RefreshCw, ShoppingCart, TrendingDown, Droplets, Paintbrush, Clipboard,
  Download, Printer, LogOut, DollarSign, Shield, LayoutDashboard, Users,
  Package, Home, Banknote, CreditCard, Building2, Smartphone, CheckCircle2
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
const totalNetGross = ref(0)
const totalOrders = ref(0)
const totalProductsSold = ref(0)
const averageOrderValue = ref(0)
// Profit margin: 30% means cost is 70% of selling price
const profitMargin = 0.30 // 30% profit margin
const topProducts = ref([])
const salesByCategory = ref([])
const availableProducts = ref([])
const showAddSaleModal = ref(false)
const showSaleSuccessModal = ref(false)
const saleSuccessData = ref({ customerName: '', total: 0, productCount: 0 })
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

// Report modal: period type (days / months / years) and value; report has its own data (independent of 1D/7D/30D/3M/1Y)
const reportSalesRaw = ref([])
const reportDataLoading = ref(false)
const reportPeriodType = ref('days')
const reportPeriodValue = ref(1)
const reportPeriodTypes = [
  { label: 'Days', value: 'days' },
  { label: 'Months', value: 'months' },
  { label: 'Years', value: 'years' },
]
const reportPeriodOptions = computed(() => {
  if (reportPeriodType.value === 'days') {
    return [
      { label: 'Last 1 Day', value: 1 },
      { label: 'Last 7 Days', value: 7 },
      { label: 'Last 30 Days', value: 30 },
    ]
  }
  if (reportPeriodType.value === 'months') {
    return [
      { label: 'This Month', value: 1 },
      { label: 'Last 3 Months', value: 3 },
      { label: 'Last 6 Months', value: 6 },
    ]
  }
  return [
    { label: 'This Year', value: 1 },
    { label: 'Last 2 Years', value: 2 },
  ]
})
const reportStartDate = computed(() => {
  const now = new Date()
  const d = new Date(now)
  if (reportPeriodType.value === 'days') {
    d.setDate(now.getDate() - Number(reportPeriodValue.value))
    return d
  }
  if (reportPeriodType.value === 'months') {
    d.setMonth(now.getMonth() - Number(reportPeriodValue.value))
    return d
  }
  const yearsBack = Number(reportPeriodValue.value)
  d.setFullYear(now.getFullYear() - (yearsBack - 1))
  d.setMonth(0)
  d.setDate(1)
  d.setHours(0, 0, 0, 0)
  return d
})
const reportSales = computed(() => {
  return reportSalesRaw.value.filter(sale => sale.date && new Date(sale.date) >= reportStartDate.value)
})
const reportTotalRevenue = computed(() => {
  return reportSales.value.reduce((sum, s) => sum + Number(s.total || 0), 0)
})
const reportTotalOrders = computed(() => reportSales.value.length)
const reportTotalProductsSold = computed(() => {
  return reportSales.value.reduce((sum, sale) => {
    return sum + (sale.products?.reduce((s, p) => s + (Number(p.quantity) || 0), 0) || 0)
  }, 0)
})
const reportAverageOrderValue = computed(() => {
  return reportTotalOrders.value ? reportTotalRevenue.value / reportTotalOrders.value : 0
})
function computeTopProductsFromSales(salesData) {
  const productMap = new Map()
  salesData.forEach(sale => {
    (sale.products || []).forEach(product => {
      const existing = productMap.get(product.id) || {
        id: product.id,
        name: product.name || 'Unknown Product',
        category: product.category || 'Uncategorized',
        revenue: 0,
        units: 0,
      }
      existing.revenue += Number(product.price || 0) * Number(product.quantity || 0)
      existing.units += Number(product.quantity || 0)
      productMap.set(product.id, existing)
    })
  })
  return Array.from(productMap.values()).sort((a, b) => b.revenue - a.revenue)
}
function computeSalesByCategoryFromSales(salesData) {
  const categoryMap = new Map()
  salesData.forEach(sale => {
    (sale.products || []).forEach(product => {
      const category = product.category || 'Uncategorized'
      const existing = categoryMap.get(category) || {
        name: category,
        revenue: 0,
        units: 0,
        orders: 0,
        trend: 0,
      }
      existing.revenue += Number(product.price || 0) * Number(product.quantity || 0)
      existing.units += Number(product.quantity || 0)
      existing.orders += 1
      categoryMap.set(category, existing)
    })
  })
  return Array.from(categoryMap.values())
}
const reportTopProducts = computed(() => computeTopProductsFromSales(reportSales.value))
const reportSalesByCategory = computed(() => computeSalesByCategoryFromSales(reportSales.value))
const reportSortedTopProducts = computed(() => [...reportTopProducts.value].sort((a, b) => b.revenue - a.revenue))
const reportPeriodLabel = computed(() => {
  if (reportPeriodType.value === 'days') {
    return Number(reportPeriodValue.value) === 1 ? 'Last 1 Day' : `Last ${reportPeriodValue.value} Days`
  }
  if (reportPeriodType.value === 'months') {
    return reportPeriodValue.value === 1 ? 'This Month' : `Last ${reportPeriodValue.value} Months`
  }
  return reportPeriodValue.value === 1 ? 'This Year' : `Last ${reportPeriodValue.value} Years`
})
const selectedProductMetric = ref('revenue')
const selectedCategoryView = ref('revenue')
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 10

const saleMode = ref('full') // 'full' | 'quick'
const quickSaleForm = ref({ productId: '', amount: 0 })
const productSearchQuery = ref('')
const quickProductDropdownOpen = ref(false)
const quickProductSearchRef = ref(null)
const selectQuickProduct = (p) => {
  quickSaleForm.value.productId = p.id
  quickProductDropdownOpen.value = false
  productSearchQuery.value = ''
}
const productSearchByRow = reactive({})
const productDropdownOpenByRow = reactive({})
const getFilteredProductsForRow = (index) => {
  const q = (productSearchByRow[index] ?? '').trim().toLowerCase()
  if (!q) return availableProducts.value
  return availableProducts.value.filter(p =>
    (p.name || '').toLowerCase().includes(q) ||
    (p.sku || '').toLowerCase().includes(q)
  )
}
const selectProductForRow = (index, p) => {
  saleForm.value.products[index].id = p.id
  saleForm.value.products[index].name = p.name
  saleForm.value.products[index].price = Number(p.price)
  saleForm.value.products[index].category = p.category || 'Uncategorized'
  saleForm.value.products[index].stock = p.stock ?? 0
  productDropdownOpenByRow[index] = false
  productSearchByRow[index] = ''
  updateProductDetails(index)
}
const filteredProductsForSale = computed(() => {
  const q = (productSearchQuery.value || '').trim().toLowerCase()
  if (!q) return availableProducts.value
  return availableProducts.value.filter(p =>
    (p.name || '').toLowerCase().includes(q) ||
    (p.sku || '').toLowerCase().includes(q)
  )
})
const saleForm = ref({
  orderId: '',
  invoiceNo: '',
  customerId: '',
  customerName: '',
  customerContactNo: '',
  products: [],
  total: 0,
  status: 'completed',
  paymentMethod: 'cash'
})
const paymentDropdownOpen = ref(false)
const paymentDropdownRef = ref(null)
const paymentMethodOptions = [
  { value: 'cash', label: 'Cash', icon: Banknote },
  { value: 'credit_card', label: 'Credit Card', icon: CreditCard },
  { value: 'bank_transfer', label: 'Bank Transfer', icon: Building2 },
  { value: ' gcash', label: 'GCash', icon: Smartphone },
]

function closePaymentDropdown(e) {
  if (paymentDropdownRef.value && !paymentDropdownRef.value.contains(e.target)) {
    paymentDropdownOpen.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', closePaymentDropdown)
})
onUnmounted(() => {
  document.removeEventListener('click', closePaymentDropdown)
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

watch(reportPeriodType, () => {
  const opts = reportPeriodOptions.value
  if (opts.length && !opts.some(o => o.value === reportPeriodValue.value)) {
    reportPeriodValue.value = opts[0].value
  }
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

      // Calculate Net Gross (Profit)
      // Net Gross = Revenue - Cost of Goods Sold
      // Cost of Goods Sold = Revenue * (1 - profit margin)
      const costOfGoodsSold = revenue * (1 - profitMargin)
      const netGross = revenue - costOfGoodsSold

      // Update reactive refs
      sales.value = salesData
      totalRevenue.value = revenue
      totalNetGross.value = netGross
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

// Confirm delete all sales — no need to select 1D/7D etc.; opens modal to confirm
const confirmDeleteAllSales = () => {
  showDeleteAllModal.value = true
}

// Fetch ALL sales from Firestore (for delete-all; not tied to page date range)
const fetchAllSalesFromDb = async () => {
  const salesRef = collection(db, 'sales')
  const q = query(salesRef, orderBy('date', 'desc'))
  const snapshot = await getDocs(q)
  const list = []
  snapshot.forEach((docSnap) => {
    const data = docSnap.data()
    const sale = {
      id: docSnap.id,
      orderId: data.orderId || '',
      products: data.products || [],
      total: Number(data.total) || 0,
    }
    list.push(sale)
  })
  return list
}

// Delete ALL sales in the database and restore stock (independent of 1D/7D/30D/3M/1Y)
const deleteAllSales = async () => {
  try {
    const allSales = await fetchAllSalesFromDb()
    if (allSales.length === 0) {
      alert('No sales to delete.')
      showDeleteAllModal.value = false
      return
    }

    for (const sale of allSales) {
      const saleRef = doc(db, 'sales', sale.id)
      await deleteDoc(saleRef)

      for (const product of sale.products || []) {
        if (product.id && product.id !== 'sample-product') {
          const productRef = doc(db, 'products', product.id)
          const productDoc = await getDoc(productRef)
          if (productDoc.exists()) {
            const currentStock = productDoc.data().stock || 0
            const restoredStock = currentStock + (Number(product.quantity) || 0)
            await updateDoc(productRef, {
              stock: restoredStock,
              lastUpdated: serverTimestamp()
            })
          }
        }
      }
    }

    localStorage.setItem('nextOrderId', '1')
    alert(`Successfully deleted ${allSales.length} sales and restored all stock.`)
    showDeleteAllModal.value = false
    fetchSalesData()
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
const profitMarginPercentage = computed(() => {
  return (profitMargin * 100).toFixed(1)
})

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

// Fetch sales data for report only (last 2 years) — independent of main page 1D/7D/30D/3M/1Y
const fetchReportSalesData = async () => {
  reportDataLoading.value = true
  reportSalesRaw.value = []
  try {
    const now = new Date()
    const twoYearsAgo = new Date(now)
    twoYearsAgo.setFullYear(now.getFullYear() - 2)
    const salesRef = collection(db, 'sales')
    const q = query(salesRef, orderBy('date', 'desc'))
    const snapshot = await getDocs(q)
    const salesData = []
    snapshot.forEach((doc) => {
      const data = doc.data()
      const sale = {
        id: doc.id,
        orderId: data.orderId || `ORD-${doc.id.substring(0, 8)}`,
        customerName: data.customerName || 'Unknown Customer',
        customerContactNo: data.customerContactNo || '',
        products: data.products || [],
        total: Number(data.total) || 0,
        status: data.status || 'completed',
        paymentMethod: data.paymentMethod || 'cash',
        date: data.date,
      }
      if (sale.date && typeof sale.date.toDate === 'function') {
        sale.date = sale.date.toDate()
      } else if (!sale.date) {
        sale.date = new Date()
      }
      if (sale.date >= twoYearsAgo && sale.date <= now) {
        salesData.push(sale)
      }
    })
    reportSalesRaw.value = salesData
  } catch (err) {
    console.error('Error fetching report sales:', err)
    reportSalesRaw.value = []
  } finally {
    reportDataLoading.value = false
  }
}

const openReportModal = () => {
  showDailyReportModal.value = true
  fetchReportSalesData()
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
    ctx.fillText(`SALES REPORT — ${reportPeriodLabel.value.toUpperCase()}`, canvas.width / 2, 75)

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
    ctx.fillText(`Period: ${reportPeriodLabel.value}`, 350, currentY + 70)

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
    ctx.fillText(`💰 OVERALL PERFORMANCE (${reportPeriodLabel.value})`, 45, currentY + 25)

    const metrics = [
      { label: 'Total Revenue', value: formatCurrency(reportTotalRevenue.value), color: '#059669', icon: '💰' },
      { label: 'Total Orders', value: `${reportTotalOrders.value} orders`, color: '#0891b2', icon: '📋' },
      { label: 'Items Sold', value: `${reportTotalProductsSold.value} pieces`, color: '#7c3aed', icon: '📦' },
      { label: 'Average Order', value: formatCurrency(reportAverageOrderValue.value), color: '#ea580c', icon: '📊' }
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

    if (reportSortedTopProducts.value.length > 0) {
      const productsToShow = Math.min(reportSortedTopProducts.value.length, 5)
      const sectionHeight = productsToShow * 80 + 120
      
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(25, currentY, canvas.width - 50, sectionHeight)
      ctx.strokeStyle = '#e2e8f0'
      ctx.lineWidth = 2
      ctx.strokeRect(25, currentY, canvas.width - 50, sectionHeight)
      
      ctx.fillStyle = '#7c3aed'
      ctx.font = 'bold 18px Arial'
      ctx.fillText(`🏆 TOP PRODUCTS (${reportPeriodLabel.value})`, 45, currentY + 25)
      
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
      
      reportSortedTopProducts.value.slice(0, productsToShow).forEach((product, index) => {
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
        const percentage = reportTotalRevenue.value > 0 ? ((product.revenue / reportTotalRevenue.value) * 100).toFixed(1) : 0
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
    
    if (reportSales.value.length > 0) {
      const paymentMethods = {}
      reportSales.value.forEach(sale => {
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
    
    if (reportSales.value.length > 0) {
      const salesToShow = Math.min(reportSales.value.length, 5)
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
      
      reportSales.value.slice(0, salesToShow).forEach((sale, index) => {
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
        const percentage = reportTotalRevenue.value > 0 ? ((sale.total / reportTotalRevenue.value) * 100).toFixed(1) : 0
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

// Print daily report — enhanced layout and alignment
const printDailyReport = () => {
  if (reportSales.value.length === 0) {
    alert('No sales data to print. Choose a period with sales.')
    return
  }

  const printWindow = window.open('', '_blank')
  if (!printWindow) {
    alert('Please allow pop-ups to print the report.')
    return
  }

  const topProducts = reportSortedTopProducts.value.slice(0, 5)
  const recentSales = reportSales.value.slice(0, 5)
  const reportId = `ADM-${Date.now().toString().slice(-8)}`

  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Sales Report - ${reportPeriodLabel.value}</title>
      <style>
        @media print {
          @page { size: A4; margin: 1cm; }
          body { padding: 12px; font-size: 12px !important; }
          .header h1 { font-size: 26px !important; }
          .header .sub { font-size: 14px !important; }
          .info-grid .label { font-size: 10px !important; }
          .info-grid .val { font-size: 13px !important; }
          .perf-grid .val { font-size: 14px !important; }
          th, td { padding: 6px 8px !important; font-size: 11px !important; }
          .section-title { font-size: 13px !important; }
          .footer { font-size: 11px !important; }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #1f2937;
          background: #fff;
          padding: 20px;
          font-size: 13px;
          line-height: 1.45;
        }
        .brand-bar {
          height: 5px;
          background: linear-gradient(90deg, #0d9488 0%, #0891b2 50%, #06b6d4 100%);
          margin: -20px -20px 0 -20px;
          margin-bottom: 16px;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
          padding: 20px 24px;
          background: linear-gradient(145deg, #f0fdfa 0%, #ccfbf1 50%, #99f6e4 100%);
          border-radius: 12px;
          border: 2px solid #14b8a6;
          box-shadow: 0 2px 8px rgba(20, 184, 166, 0.15);
        }
        .header h1 {
          color: #0f766e;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 4px;
        }
        .header .sub {
          font-size: 15px;
          color: #0d9488;
          font-weight: 600;
        }
        .header .meta {
          font-size: 12px;
          color: #6b7280;
          margin-top: 8px;
        }
        .info-section {
          margin-bottom: 18px;
          padding: 14px 18px;
          background: #f9fafb;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
        }
        .info-section .section-title {
          font-size: 14px;
          font-weight: 700;
          color: #0f766e;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #a7f3d0;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          text-align: center;
        }
        .info-grid .label { font-size: 11px; color: #6b7280; font-weight: 600; margin-bottom: 2px; }
        .info-grid .val { font-size: 15px; font-weight: 700; color: #1f2937; }
        .perf-section {
          margin-bottom: 18px;
          padding: 14px 18px;
          background: #f9fafb;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
        }
        .perf-section .section-title {
          font-size: 14px;
          font-weight: 700;
          color: #0f766e;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #a7f3d0;
        }
        .perf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          text-align: center;
        }
        .perf-box {
          padding: 12px 10px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }
        .perf-box.rev { background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-color: #a7f3d0; }
        .perf-box.ord { background: linear-gradient(135deg, #ecfeff 0%, #cffafe 100%); border-color: #a5f3fc; }
        .perf-box.items { background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); border-color: #c4b5fd; }
        .perf-box.avg { background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); border-color: #fed7aa; }
        .perf-box .label { font-size: 11px; font-weight: 600; margin-bottom: 4px; }
        .perf-box.rev .label { color: #065f46; }
        .perf-box.ord .label { color: #155e75; }
        .perf-box.items .label { color: #5b21b6; }
        .perf-box.avg .label { color: #9a3412; }
        .perf-box .val { font-size: 16px; font-weight: 800; }
        .perf-box.rev .val { color: #047857; }
        .perf-box.ord .val { color: #0e7490; }
        .perf-box.items .val { color: #6d28d9; }
        .perf-box.avg .val { color: #c2410c; }
        .table-section {
          margin-bottom: 18px;
          padding: 14px 18px;
          background: #fff;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
        }
        .table-section .section-title {
          font-size: 14px;
          font-weight: 700;
          color: #0f766e;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #a7f3d0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
        }
        thead {
          background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);
          color: #fff;
        }
        th {
          padding: 10px 8px;
          text-align: left;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          vertical-align: middle;
        }
        th.tc { text-align: center; }
        th.tr { text-align: right; }
        tbody tr { border-bottom: 1px solid #e5e7eb; }
        tbody tr:nth-child(even) { background: #fafafa; }
        td {
          padding: 10px 8px;
          vertical-align: middle;
        }
        td.tc { text-align: center; }
        td.tr { text-align: right; }
        .status-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 10px;
          font-weight: 700;
          text-transform: capitalize;
        }
        .status-completed { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
        .status-pending { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
        .status-cancelled { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }
        .footer {
          margin-top: 24px;
          text-align: center;
          padding-top: 16px;
          border-top: 2px solid #e5e7eb;
          color: #6b7280;
          font-size: 12px;
          line-height: 1.5;
        }
        .footer p { margin-bottom: 4px; }
      </style>
    </head>
    <body>
      <div class="brand-bar"></div>
      <div class="header">
        <h1>Barcelona Paint Center</h1>
        <p class="sub">Sales Report — ${reportPeriodLabel.value}</p>
        <p class="meta">${formatDateTime(new Date())} &nbsp;|&nbsp; Report ID: ${reportId}</p>
      </div>

      <div class="info-section">
        <div class="section-title">Admin Report</div>
        <div class="info-grid">
          <div>
            <div class="label">Admin</div>
            <div class="val">Admin User</div>
          </div>
          <div>
            <div class="label">Date</div>
            <div class="val">${todayFormatted}</div>
          </div>
          <div>
            <div class="label">Period</div>
            <div class="val">${reportPeriodLabel.value}</div>
          </div>
          <div>
            <div class="label">Status</div>
            <div class="val" style="color: #059669;">Active</div>
          </div>
        </div>
      </div>

      <div class="perf-section">
        <div class="section-title">Overall Performance (${reportPeriodLabel.value})</div>
        <div class="perf-grid">
          <div class="perf-box rev">
            <div class="label">Total Revenue</div>
            <div class="val">${formatCurrency(reportTotalRevenue.value)}</div>
          </div>
          <div class="perf-box ord">
            <div class="label">Total Orders</div>
            <div class="val">${reportTotalOrders.value}</div>
          </div>
          <div class="perf-box items">
            <div class="label">Items Sold</div>
            <div class="val">${reportTotalProductsSold.value}</div>
          </div>
          <div class="perf-box avg">
            <div class="label">Avg Order</div>
            <div class="val">${formatCurrency(reportAverageOrderValue.value)}</div>
          </div>
        </div>
      </div>
  ${topProducts.length > 0 ? `
      <div class="table-section">
        <div class="section-title">Top Products (${reportPeriodLabel.value})</div>
        <table>
          <thead>
            <tr>
              <th style="width: 40px;" class="tc">#</th>
              <th style="width: 28%;">Product</th>
              <th style="width: 10%;" class="tc">Category</th>
              <th style="width: 12%;" class="tc">Units</th>
              <th style="width: 18%;" class="tr">Revenue</th>
              <th style="width: 14%;" class="tr">Per Unit</th>
              <th style="width: 10%;" class="tr">%</th>
            </tr>
          </thead>
          <tbody>
            ${topProducts.map((p, i) => `
              <tr>
                <td class="tc">${i + 1}</td>
                <td>${p.name || 'N/A'}</td>
                <td class="tc">${p.category || 'N/A'}</td>
                <td class="tc">${p.units || 0}</td>
                <td class="tr">${formatCurrency(p.revenue)}</td>
                <td class="tr">${formatCurrency(p.units > 0 ? p.revenue / p.units : 0)}</td>
                <td class="tr">${reportTotalRevenue.value > 0 ? ((p.revenue / reportTotalRevenue.value) * 100).toFixed(1) : 0}%</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
  ` : ''}
  ${recentSales.length > 0 ? `
      <div class="table-section">
        <div class="section-title">Recent Transactions (Last 5)</div>
        <table>
          <thead>
            <tr>
              <th style="width: 18%;">Order ID</th>
              <th style="width: 12%;" class="tc">Time</th>
              <th style="width: 20%;">Customer</th>
              <th style="width: 10%;" class="tc">Items</th>
              <th style="width: 14%;" class="tr">Total</th>
              <th style="width: 14%;" class="tc">Payment</th>
              <th style="width: 12%;" class="tc">Status</th>
            </tr>
          </thead>
          <tbody>
            ${recentSales.map(s => `
              <tr>
                <td>${s.orderId || 'N/A'}</td>
                <td class="tc">${formatTime(s.date)}</td>
                <td>${s.customerName || 'N/A'}</td>
                <td class="tc">${(s.products && s.products.length) || 0}</td>
                <td class="tr">${formatCurrency(s.total)}</td>
                <td class="tc">${formatPaymentMethod(s.paymentMethod)}</td>
                <td class="tc"><span class="status-badge status-${s.status || 'completed'}">${(s.status || 'completed').toLowerCase()}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
  ` : ''}
      <div class="footer">
        <p><strong>Report generated for admin review</strong></p>
        <p>Barcelona Paint Center Admin Portal</p>
        <p>All sales data verified and current</p>
      </div>
    </body>
    </html>
  `

  printWindow.document.write(printContent)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
  }, 200)
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

// Handle quick add sale (Product + Amount only)
const handleQuickAddSale = async () => {
  try {
    isSubmitting.value = true
    if (!auth.currentUser) {
      alert('Authentication failed. Please log in again.')
      isSubmitting.value = false
      return
    }
    const { productId, amount } = quickSaleForm.value
    if (!productId || !amount || amount <= 0) {
      alert('Please select a product and enter a valid amount.')
      isSubmitting.value = false
      return
    }
    const product = availableProducts.value.find(p => p.id === productId)
    if (!product) {
      alert('Product not found.')
      isSubmitting.value = false
      return
    }
    const productRef = doc(db, 'products', productId)
    const productDoc = await getDoc(productRef)
    if (!productDoc.exists()) {
      alert('Product not found in inventory.')
      isSubmitting.value = false
      return
    }
    const currentStock = productDoc.data().stock || 0
    if (currentStock < 1) {
      alert(`Insufficient stock for ${product.name}. Available: ${currentStock}`)
      isSubmitting.value = false
      return
    }
    const saleData = {
      orderId: generateOrderId(),
      invoiceNo: `INV-${Date.now()}`,
      customerId: `CUST-${Date.now()}`,
      customerName: 'Walk-in',
      customerContactNo: '',
      products: [{
        id: productId,
        name: product.name,
        quantity: 1,
        price: Number(amount),
        category: product.category || 'Uncategorized'
      }],
      total: Number(amount),
      status: 'completed',
      paymentMethod: 'cash',
      date: serverTimestamp(),
      createdBy: auth.currentUser.uid,
      createdAt: serverTimestamp()
    }
    await updateDoc(productRef, {
      stock: Math.max(0, currentStock - 1),
      lastUpdated: serverTimestamp()
    })
    const salesRef = collection(db, 'sales')
    await addDoc(salesRef, saleData)
    saleSuccessData.value = { customerName: 'Walk-in', total: Number(amount), productCount: 1 }
    quickSaleForm.value = { productId: '', amount: 0 }
    showAddSaleModal.value = false
    showSaleSuccessModal.value = true
    fetchSalesData()
  } catch (err) {
    console.error('Quick add sale error:', err)
    alert('Failed to record sale: ' + err.message)
  } finally {
    isSubmitting.value = false
  }
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
      invoiceNo: saleForm.value.invoiceNo || `INV-${Date.now()}`,
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
      
      saleSuccessData.value = {
        customerName: saleForm.value.customerName,
        total: Number(saleForm.value.total),
        productCount: saleForm.value.products.length
      }
      showAddSaleModal.value = false
      showSaleSuccessModal.value = true
      
      resetSaleForm()
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
  productSearchQuery.value = ''
  quickProductDropdownOpen.value = false
  Object.keys(productSearchByRow).forEach(k => delete productSearchByRow[k])
  Object.keys(productDropdownOpenByRow).forEach(k => delete productDropdownOpenByRow[k])
  saleForm.value = {
    orderId: '',
    invoiceNo: '',
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
