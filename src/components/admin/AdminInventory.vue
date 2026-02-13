<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-gray-50/95 to-slate-100/80 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-br from-purple-300/20 via-pink-200/15 to-transparent rounded-full filter blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[440px] h-[440px] bg-gradient-to-br from-violet-200/15 via-indigo-200/10 to-transparent rounded-full filter blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(168,85,247,0.08),transparent)] pointer-events-none"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Enhanced responsive sidebar with better mobile support -->
      <!-- Desktop Sidebar -->
      <aside class="w-64 bg-white/95 backdrop-blur-sm border-r border-gray-200/80 hidden lg:flex lg:flex-col shadow-sm">
        <!-- Logo/Brand -->
        <div class="p-4 xl:p-5 border-b border-gray-100 flex-shrink-0">
          <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight tracking-tight">Barcelona Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-purple-500 to-pink-500 px-2.5 xl:px-3 py-1.5 rounded-lg inline-flex items-center shadow-sm font-medium">
            <ShieldIcon class="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
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
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-purple-700 bg-purple-100 shadow-sm border-l-4 border-purple-500"
            :class="{ 'hover:bg-purple-100 hover:text-purple-800': !isActive('/admin/inventory') }"
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
              <UserIcon class="w-4 xl:w-5 h-4 xl:w-5 text-white" />
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
              <LogOutIcon class="w-4 xl:w-5 h-4 xl:w-5" />
            </button>
          </div>
        </div>
      </aside>

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
        <!-- Header -->
        <header class="sticky top-0 z-20 bg-white/90 backdrop-blur-xl border-b border-gray-200/90 shadow-sm">
          <div class="h-1 w-full bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"></div>
          <div class="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="pl-14 sm:pl-16 lg:pl-0 flex items-center gap-3">
                <div class="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 items-center justify-center shadow-lg shadow-purple-500/20 flex-shrink-0">
                  <PackageIcon class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Inventory Management</h1>
                  <p class="text-sm text-gray-500 mt-0.5">Manage products, stock, and orders</p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100/90 text-gray-700 text-sm border border-gray-200/60">
                  <CalendarIcon class="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span class="truncate font-medium">{{ currentDate }}</span>
                </div>
                <div class="hidden sm:block h-8 w-px bg-gray-200"></div>
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 text-gray-800 text-sm border border-purple-200/60">
                  <span class="font-medium truncate">Welcome, Admin</span>
                  <BellIcon class="w-4 h-4 text-purple-500 cursor-pointer hover:text-purple-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">
          <!-- Error Alert -->
          <div
            v-if="error"
            class="rounded-2xl border border-red-200 bg-red-50/90 p-4 mb-6 flex items-center justify-between gap-4 shadow-sm"
          >
            <div class="flex items-center gap-3 min-w-0">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <AlertTriangleIcon class="w-5 h-5 text-red-600" />
              </div>
              <span class="text-red-800 text-sm font-medium">{{ error }}</span>
            </div>
            <button
              @click="error = null"
              class="flex-shrink-0 p-2 rounded-lg text-red-500 hover:bg-red-100 transition-colors"
              aria-label="Dismiss"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
          <div v-if="error" class="text-center mb-6">
            <button
              @click="fetchProducts"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <RefreshCwIcon class="w-5 h-5" />
              Retry Loading Products
            </button>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row justify-end gap-3 mb-6">
            <button
              @click="showOrderModal = true"
              class="inventory-action-btn group flex items-center justify-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-blue-400/20"
            >
              <ShoppingCartIcon class="w-5 h-5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>Order Product</span>
            </button>
            <button
              @click="showAddModal = true"
              class="inventory-action-btn group flex items-center justify-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-purple-400/20"
            >
              <PlusIcon class="w-5 h-5 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span>Add Product</span>
            </button>
          </div>

          <!-- Products vs Orders vs Categories Tabs -->
          <div class="bg-white rounded-2xl shadow-md border border-gray-200/90 p-2 sm:p-3 mb-8 sm:mb-10 ring-1 ring-black/5">
            <div class="flex flex-wrap gap-2">
              <button
                @click="activeTab = 'products'"
                :class="[
                  'flex-1 min-w-[100px] px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 text-center',
                  activeTab === 'products'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 ring-2 ring-purple-400/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                ]"
              >
                Products ({{ products.length }})
              </button>
              <button
                @click="activeTab = 'orders'"
                :class="[
                  'flex-1 min-w-[100px] px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 text-center',
                  activeTab === 'orders'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 ring-2 ring-purple-400/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                ]"
              >
                Orders ({{ orders.length }})
              </button>
              <button
                @click="activeTab = 'categories'"
                :class="[
                  'flex-1 min-w-[100px] px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 text-center',
                  activeTab === 'categories'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 ring-2 ring-purple-400/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                ]"
              >
                Categories ({{ categories.length }})
              </button>
              <button
                @click="activeTab = 'sizes'"
                :class="[
                  'flex-1 min-w-[100px] px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 text-center',
                  activeTab === 'sizes'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 ring-2 ring-purple-400/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                ]"
              >
                Sizes ({{ totalSizesCount }})
              </button>
            </div>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 mb-6 sm:mb-8">
            <!-- Total Products -->
            <div
              class="inventory-stat-card bg-white border border-gray-200/90 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-purple-200/50 transform transition-all duration-300 overflow-hidden relative cursor-pointer h-28 sm:h-32 group"
              @click="clearAllFilters"
            >
              <div class="bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 h-1.5 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-5 h-full flex flex-col">
                <div class="flex justify-between items-start mb-2">
                  <div class="p-2 rounded-xl bg-purple-100 text-purple-600 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                    <PackageIcon class="w-5 h-5" />
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-end">
                  <p class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">Total Products</p>
                  <p class="text-xl sm:text-2xl font-bold text-gray-900 tabular-nums">{{ totalProducts }}</p>
                </div>
              </div>
            </div>

            <!-- Low Stock -->
            <div
              class="inventory-stat-card bg-white border border-gray-200/90 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-amber-200/50 transform transition-all duration-300 overflow-hidden relative cursor-pointer h-28 sm:h-32 group"
              @click="filterByLowStock"
            >
              <div class="bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-500 h-1.5 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-5 h-full flex flex-col">
                <div class="flex justify-between items-start mb-2">
                  <div class="p-2 rounded-xl bg-amber-100 text-amber-600 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300">
                    <AlertTriangleIcon class="w-5 h-5" />
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-end">
                  <p class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">Low Stock</p>
                  <p class="text-xl sm:text-2xl font-bold text-gray-900 tabular-nums">{{ lowStockCount }}</p>
                </div>
              </div>
            </div>

            <!-- Out of Stock -->
            <div
              class="inventory-stat-card bg-white border border-gray-200/90 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-red-200/50 transform transition-all duration-300 overflow-hidden relative cursor-pointer h-28 sm:h-32 group"
              @click="filterByOutOfStock"
            >
              <div class="bg-gradient-to-br from-red-400 via-rose-500 to-pink-500 h-1.5 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-5 h-full flex flex-col">
                <div class="flex justify-between items-start mb-2">
                  <div class="p-2 rounded-xl bg-red-100 text-red-600 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/20 transition-all duration-300">
                    <XCircleIcon class="w-5 h-5" />
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-end">
                  <p class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">Out of Stock</p>
                  <p class="text-xl sm:text-2xl font-bold text-gray-900 tabular-nums">{{ outOfStockCount }}</p>
                </div>
              </div>
            </div>

            <!-- Total Value -->
            <div class="inventory-stat-card bg-white border border-gray-200/90 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200/50 transform transition-all duration-300 overflow-hidden relative h-28 sm:h-32 group">
              <div class="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-5 h-full flex flex-col">
                <div class="flex justify-between items-start mb-2">
                  <div class="p-2 rounded-xl bg-emerald-100 text-emerald-600 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300 inline-flex items-center justify-center">
                    <span class="font-bold text-xl leading-none w-5 h-5 flex items-center justify-center">₱</span>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-end">
                  <p class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">Total Value</p>
                  <p class="text-sm sm:text-lg font-bold text-gray-900 truncate tabular-nums" title="₱{{ totalValue.toLocaleString() }}">₱{{ totalValue.toLocaleString() }}</p>
                </div>
              </div>
            </div>

            <!-- Total Unit Price Value -->
            <div class="inventory-stat-card bg-white border border-gray-200/90 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-cyan-200/50 transform transition-all duration-300 overflow-hidden relative h-28 sm:h-32 group">
              <div class="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0"></div>
              <div class="p-4 sm:p-5 h-full flex flex-col">
                <div class="flex justify-between items-start mb-2">
                  <div class="p-2 rounded-xl bg-cyan-100 text-cyan-600 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300 inline-flex items-center justify-center">
                    <span class="font-bold text-xl leading-none w-5 h-5 flex items-center justify-center">₱</span>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-end">
                  <p class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">Unit Price Value</p>
                  <p class="text-sm sm:text-lg font-bold text-gray-900 truncate tabular-nums" title="₱{{ totalUnitPriceValue.toLocaleString() }}">₱{{ totalUnitPriceValue.toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Search and Filter Bar -->
          <div class="bg-white rounded-2xl shadow-md border border-gray-200/90 p-4 sm:p-5 mb-6 sm:mb-8 ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-300/50 transition-all duration-200">
            <div class="flex flex-col lg:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search products by name or SKU..."
                    class="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-300 focus:bg-white text-gray-900 placeholder-gray-400 text-sm sm:text-base transition-colors duration-200"
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-3">
                <select
                  v-model="filterCategory"
                  class="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 text-sm font-medium"
                >
                  <option value="">All Categories</option>
                  <option v-for="cat in categories" :key="cat.key" :value="cat.key">{{ cat.value }}</option>
                </select>
                <select
                  v-model="filterStock"
                  class="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 text-sm font-medium"
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
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200/90 overflow-hidden ring-1 ring-black/5">
            <!-- Loading State -->
            <div v-if="loading && products.length === 0" class="p-12 text-center">
              <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center">
                <LoaderIcon class="w-7 h-7 text-purple-600 animate-spin" />
              </div>
              <p class="text-gray-600 font-medium">Loading inventory...</p>
              <p class="text-sm text-gray-500 mt-1">Fetching your products</p>
            </div>

            <!-- Empty State -->
            <div v-if="!loading && products.length === 0 && activeTab === 'products'" class="p-12 text-center">
              <div class="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-inner">
                <PackageIcon class="w-10 h-10 text-purple-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">No products yet</h3>
              <p class="text-gray-600 mb-6 max-w-sm mx-auto">Add your first product to start managing your inventory.</p>
              <button
                @click="showAddModal = true"
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
              >
                <PlusIcon class="w-5 h-5" />
                Add Product
              </button>
            </div>

            <!-- Mobile View -->
            <div v-if="activeTab === 'products' && products.length > 0" class="block lg:hidden p-4 sm:p-5 space-y-4">
              <div v-for="product in paginatedProducts" :key="product.id" class="bg-gray-50 rounded-xl p-4 border border-gray-200/80 hover:shadow-md transition-all">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-3 flex-1 min-w-0">
                    <div class="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 ring-2 ring-white shadow-md"
                         :class="product.image ? 'bg-white border border-gray-200' : 'bg-gradient-to-br from-purple-500 to-pink-500'">
                      <img
                        v-if="product.image"
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-full object-cover"
                      />
                      <PackageIcon v-else class="w-7 h-7 text-white" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-semibold text-gray-900 truncate">{{ product.name }}</p>
                      <p class="text-sm text-gray-600 truncate whitespace-nowrap">{{ formatCategory(product.category) }}</p>
                      <p class="text-xs text-gray-500">SKU: {{ product.sku }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      @click="editProduct(product)"
                      class="p-2.5 hover:bg-blue-100 rounded-xl text-blue-600 transition-colors"
                    >
                      <EditIcon class="w-5 h-5" />
                    </button>
                    <button
                      @click="confirmDelete(product)"
                      class="p-2.5 hover:bg-red-100 rounded-xl text-red-600 transition-colors"
                    >
                      <Trash2Icon class="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-200/60">
                  <span
                    class="px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap shrink-0"
                    :class="getStockLevelClass(product.stockLevel)"
                  >
                    {{ formatStockLevel(product.stockLevel) }}
                  </span>
                  <span class="text-xs text-gray-600 whitespace-nowrap">
                    ₱{{ product.price.toLocaleString() }}
                  </span>
                  <span class="text-xs text-gray-500 whitespace-nowrap">
                    Unit ₱{{ product.unitPrice ? product.unitPrice.toLocaleString() : '0' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Desktop View -->
            <div v-if="activeTab === 'products' && products.length > 0" class="hidden lg:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-gradient-to-r from-gray-50 to-slate-50 border-b border-gray-200">
                    <th class="text-left px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                    <th class="text-left px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                    <th class="text-left px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Stock</th>
                    <th class="text-left px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                    <th class="text-left px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap min-w-[6rem]">Unit Price</th>
                    <th class="text-right px-5 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-if="loading" class="bg-white">
                    <td colspan="6" class="px-5 py-12 text-center">
                      <LoaderIcon class="w-6 h-6 text-purple-500 animate-spin mx-auto" />
                    </td>
                  </tr>
                  <tr v-else-if="paginatedProducts.length === 0" class="bg-white">
                    <td colspan="6" class="px-5 py-12 text-center text-gray-500 font-medium">
                      No products match your filters
                    </td>
                  </tr>
                  <tr
                    v-for="product in paginatedProducts"
                    :key="product.id"
                    class="bg-white hover:bg-purple-50/40 transition-colors duration-200"
                  >
                    <td class="px-5 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 ring-1 ring-gray-200/80"
                             :class="product.image ? 'bg-white' : 'bg-gradient-to-br from-purple-500 to-pink-500'">
                          <img
                            v-if="product.image"
                            :src="product.image"
                            :alt="product.name"
                            class="w-full h-full object-cover"
                          />
                          <PackageIcon v-else class="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p class="font-semibold text-gray-900">{{ product.name }}</p>
                          <p class="text-sm text-gray-500">SKU: {{ product.sku }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-4 align-middle">
                      <span
                        class="inline-block max-w-[200px] px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200/60 whitespace-nowrap truncate"
                        :title="formatCategory(product.category)"
                      >
                        {{ formatCategory(product.category) }}
                      </span>
                    </td>
                    <td class="px-5 py-4 align-middle">
                      <span
                        class="inline-flex px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap"
                        :class="getStockLevelClass(product.stockLevel)"
                      >
                        {{ formatStockLevel(product.stockLevel) }}
                      </span>
                    </td>
                    <td class="px-5 py-4 align-middle">
                      <span class="font-medium text-gray-900 whitespace-nowrap">₱{{ product.price.toLocaleString() }}</span>
                    </td>
                    <td class="px-5 py-4 align-middle whitespace-nowrap min-w-[6rem]">
                      <span class="font-medium text-gray-700">₱{{ product.unitPrice ? product.unitPrice.toLocaleString() : '0' }}</span>
                    </td>
                    <td class="px-5 py-4 align-middle">
                      <div class="flex items-center justify-end gap-1.5">
                        <button
                          @click="editProduct(product)"
                          class="p-2.5 hover:bg-blue-100 rounded-xl text-blue-600 transition-colors"
                          title="Edit Product"
                        >
                          <EditIcon class="w-5 h-5" />
                        </button>
                        <button
                          @click="confirmDelete(product)"
                          class="p-2.5 hover:bg-red-100 rounded-xl text-red-600 transition-colors"
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

            <!-- Orders Table -->
            <div v-if="activeTab === 'orders' && orders.length > 0" class="block lg:hidden">
              <div v-for="order in orders" :key="order.id" class="p-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-gray-900 truncate">{{ order.productName }}</p>
                    <p class="text-sm text-gray-600 truncate">Size: {{ order.size || 'N/A' }}</p>
                    <p class="text-sm text-gray-600 truncate">Supplier: {{ order.supplierName }}</p>
                    <p class="text-xs text-gray-500">Qty: {{ order.quantity }} | {{ formatDate(order.createdAt) }}</p>
                    <div class="flex items-center gap-3 mt-2">
                      <p class="text-xs text-gray-600">Net Price: <span class="font-medium">{{ formatCurrency(getOrderNetPrice(order)) }}</span></p>
                      <p class="text-xs text-gray-900 font-semibold">Total: <span class="font-bold">{{ formatCurrency(getOrderTotalPrice(order)) }}</span></p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 flex-shrink-0">
                    <select
                      :value="order.status"
                      @change="updateOrderStatus(order.id, $event.target.value)"
                      class="px-2 py-1 rounded text-xs border border-gray-300"
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
                      class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
                      title="Delete Order"
                    >
                      <Trash2Icon class="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <span
                    class="px-2 py-1 rounded-full text-xs flex items-center gap-1"
                    :class="{
                      'bg-orange-100 text-orange-800': order.status === 'incomplete',
                      'bg-green-100 text-green-800': order.status === 'delivered'
                    }"
                  >
                    <TruckIcon class="w-3 h-3" />
                    {{ order.status === 'incomplete' ? 'Pending' : 'Delivered' }}
                  </span>
                </div>
              </div>
            </div>
            <div v-if="activeTab === 'orders' && orders.length === 0 && !loading" class="p-8 text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <ShoppingCartIcon class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">No orders placed yet</h3>
              <p class="text-gray-600 mb-4">Click the 'Order Product' button to start placing orders.</p>
            </div>


            <!-- CHANGE: Added desktop Orders table display that was missing -->
            <div v-if="activeTab === 'orders' && orders.length > 0" class="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead class="bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700">Product Name</th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700">Size</th>
                      <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700">Supplier</th>
                      <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">Quantity</th>
                      <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">Net Price</th>
                      <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">Total Price</th>
                      <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">Status</th>
                      <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">Date</th>
                      <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="order in orders" :key="order.id" class="hover:bg-gray-50 transition-colors">
                      <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ order.productName }}</td>
                      <td class="px-6 py-4 text-sm text-gray-600">{{ order.size || 'N/A' }}</td>
                      <td class="px-6 py-4 text-sm text-gray-600">{{ order.supplierName }}</td>
                      <td class="px-6 py-4 text-sm text-center text-gray-600">{{ order.quantity }}</td>
                      <td class="px-6 py-4 text-sm text-center text-gray-600 font-medium">
                        {{ formatCurrency(getOrderNetPrice(order)) }}
                      </td>
                      <td class="px-6 py-4 text-sm text-center text-gray-900 font-semibold">
                        {{ formatCurrency(getOrderTotalPrice(order)) }}
                      </td>
                      <td class="px-6 py-4 text-center">
                        <select
                          :value="order.status"
                          @change="updateOrderStatus(order.id, $event.target.value)"
                          class="px-3 py-1 rounded text-xs border border-gray-300 bg-white font-medium"
                          :class="{
                            'text-orange-700 bg-orange-50 border-orange-200': order.status === 'incomplete',
                            'text-green-700 bg-green-50 border-green-200': order.status === 'delivered'
                          }"
                        >
                          <option value="incomplete">Incomplete</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </td>
                      <td class="px-6 py-4 text-sm text-center text-gray-600">{{ formatDate(order.createdAt) }}</td>
                      <td class="px-6 py-4 text-center">
                        <button
                          @click="deleteOrder(order.id)"
                          class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
                          title="Delete Order"
                        >
                          <Trash2Icon class="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Categories Management Section -->
            <div v-if="activeTab === 'categories'" class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div class="space-y-6">
                <!-- Add Category Form -->
                <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
                  <h3 class="font-semibold text-gray-900 mb-4">Add New Category</h3>
                  <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <input
                      v-model="newCategoryForm.value"
                      type="text"
                      placeholder="Enter category name"
                      class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <input
                      v-model="newCategoryForm.key"
                      type="text"
                      placeholder="Category key (e.g., specialty-paint)"
                      class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      @click="addCategory"
                      class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium whitespace-nowrap"
                    >
                      Add Category
                    </button>
                  </div>
                </div>

                <!-- Categories List -->
                <h3 class="font-semibold text-gray-900 mb-4">Existing Categories</h3>
                <div v-if="categories.length === 0" class="text-center py-8 text-gray-500">
                  No categories found
                </div>

                <!-- CHANGE: Updated to ensure Delete button is properly functional and category updates are reflected -->
                <div
                  v-for="(cat, index) in categories"
                  :key="cat.key"
                  class="flex items-center justify-between bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all mb-3"
                >
                  <div class="flex-1">
                    <h4 class="font-medium text-gray-900">{{ cat.value }}</h4>
                    <p class="text-sm text-gray-600">{{ cat.key }}</p>
                  </div>
                  <button
                    @click="deleteCategory(index)"
                    class="px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200 font-medium rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <!-- Sizes Management Section -->
            <div v-if="activeTab === 'sizes'" class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div class="space-y-6">
                <!-- Add Size Form -->
                <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
                  <h3 class="font-semibold text-gray-900 mb-4">Add New Size for Product</h3>
                  <div class="space-y-3">
                    <!-- Product Selection -->
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Select Product</label>
                      <select
                        v-model="newSizeForm.productId"
                        required
                        class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900"
                      >
                        <option value="">Choose a product...</option>
                        <optgroup
                          v-for="category in categoriesWithProducts"
                          :key="category.key"
                          :label="category.value"
                        >
                          <option
                            v-for="product in getProductsByCategory(category.key)"
                            :key="product.id"
                            :value="product.id"
                          >
                            {{ product.name }} ({{ product.sku }})
                          </option>
                        </optgroup>
                      </select>
                    </div>
                    <!-- Size Inputs -->
                    <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <input
                        v-model="newSizeForm.value"
                        type="text"
                        placeholder="Enter size name (e.g., 1 Liter, 4 Liters, 16 Liters)"
                        class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <input
                        v-model="newSizeForm.key"
                        type="text"
                        placeholder="Size key (e.g., 1l, 4l, 16l)"
                        class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <button
                        @click="addSize"
                        :disabled="!newSizeForm.productId"
                        class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Add Size
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Sizes List -->
                <h3 class="font-semibold text-gray-900 mb-4">All Product Sizes</h3>
                <div v-if="filteredSizesForView.length === 0" class="text-center py-8 text-gray-500">
                  No sizes found. Add new sizes above.
                </div>

                <div
                  v-for="(sizeItem, index) in filteredSizesForView"
                  :key="`${sizeItem.productId}-${sizeItem.key}`"
                  class="flex items-center justify-between bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all mb-3"
                >
                  <div class="flex-1">
                    <h4 class="font-medium text-gray-900">{{ sizeItem.value }}</h4>
                    <p class="text-sm text-gray-600">Key: {{ sizeItem.key }}</p>
                    <p class="text-xs text-gray-500 mt-1">
                      Product: {{ getProductName(sizeItem.productId) }}
                    </p>
                  </div>
                  <button
                    @click="deleteSize(sizeItem.productId, index)"
                    class="px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200 font-medium rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div v-if="activeTab === 'products' && products.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border-t border-gray-200 bg-gray-50/50">
              <div class="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                <select
                  v-model="perPage"
                  class="px-3 py-2 rounded-xl border border-gray-200 text-sm font-medium bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-sm text-gray-600 font-medium">
                  Showing {{ paginationStart }} – {{ paginationEnd }} of {{ filteredProducts.length }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 transition-colors"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm font-medium text-gray-700 min-w-[100px] text-center">Page {{ currentPage }} of {{ totalPages || 1 }}</span>
                <button
                  @click="currentPage++"
                  :disabled="currentPage >= totalPages"
                  class="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 transition-colors"
                >
                  <ChevronRightIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Modals -->
    <!-- Add/Edit Product Modal -->
    <div v-if="showAddModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] shadow-2xl flex flex-col overflow-hidden border border-gray-100">
        <!-- Modal Header -->
        <div class="px-6 py-4 border-b border-gray-200 flex-shrink-0 bg-gradient-to-r from-purple-50 to-pink-50">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-gray-900 tracking-tight">
              {{ editingProduct ? 'Edit Product' : 'Add Product' }}
            </h3>
            <button
              @click="closeModal"
              class="p-2 hover:bg-white/80 rounded-xl text-gray-500 hover:text-gray-700 transition-colors"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="flex flex-col flex-1 min-h-0 overflow-hidden">
          <div class="flex-1 overflow-y-auto p-5">
            <div class="space-y-4">
              <!-- Image upload section -->
              <div class="bg-gray-50 rounded-xl p-4 border border-gray-200/80">
                <label class="block text-sm font-medium text-gray-700 mb-3">Product Image</label>

                <div v-if="imagePreview" class="mb-4">
                  <div class="relative inline-block">
                    <img
                      :src="imagePreview"
                      alt="Product preview"
                      class="w-28 h-28 object-cover rounded-xl border-2 border-white shadow-md ring-1 ring-gray-200"
                    />
                    <button
                      type="button"
                      @click="removeImage"
                      class="absolute -top-1.5 -right-1.5 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 shadow-lg transition-transform hover:scale-110"
                    >
                      <XIcon class="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-wrap">
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
                    class="flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-gray-300 rounded-xl text-gray-700 hover:border-purple-400 hover:bg-purple-50/50 transition-all text-sm font-medium"
                  >
                    <UploadIcon class="w-4 h-4 text-purple-500" />
                    {{ imagePreview ? 'Change Image' : 'Upload Image' }}
                  </button>
                  <button
                    v-if="imagePreview"
                    type="button"
                    @click="openImageEditor"
                    class="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all text-sm font-medium"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Crop Image
                  </button>
                  <span class="text-xs text-gray-500">PNG, JPG, WebP</span>
                </div>
              </div>

              <!-- Product details card -->
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200/80 space-y-4">
                <!-- Name -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Product Name</label>
                  <input
                    type="text"
                    v-model="productForm.name"
                    required
                    class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm"
                    placeholder="Enter product name"
                  />
                </div>

                <!-- SKU -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">SKU</label>
                  <input
                    type="text"
                    v-model="productForm.sku"
                    required
                    class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm"
                    placeholder="e.g. BPLP231"
                  />
                </div>

                <!-- Category -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                  <select
                    v-model="productForm.category"
                    required
                    class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 text-sm shadow-sm"
                  >
                    <option value="">Select a category</option>
                    <option v-for="cat in categories" :key="cat.key" :value="cat.key">
                      {{ cat.value }}
                    </option>
                  </select>
                </div>

                <!-- Price and Unit Price -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Price</label>
                    <div class="relative">
                      <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">₱</span>
                      <input
                        type="number"
                        v-model="productForm.price"
                        required
                        min="0"
                        step="0.01"
                        class="w-full pl-8 pr-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Unit Price</label>
                    <div class="relative">
                      <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">₱</span>
                      <input
                        type="number"
                        v-model="productForm.unitPrice"
                        required
                        min="0"
                        step="0.01"
                        class="w-full pl-8 pr-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>

                <!-- Stock Level -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Stock Level</label>
                  <input
                    type="number"
                    v-model="productForm.stockLevel"
                    required
                    min="0"
                    class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Footer actions -->
          <div class="flex flex-col sm:flex-row justify-end gap-3 px-5 py-4 border-t border-gray-200 flex-shrink-0 bg-gray-50/50">
            <button
              type="button"
              @click="closeModal"
              class="px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:bg-white hover:shadow-sm transition-all text-sm font-medium order-2 sm:order-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all text-sm order-1 sm:order-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
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

    <!-- Notification Modal (Success / Error) - Compact with animation -->
    <Transition name="notif">
      <div
        v-if="showNotification"
        class="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-[60] p-4"
        @click.self="showNotification = false"
      >
        <div class="notification-card bg-white rounded-xl shadow-xl max-w-[320px] w-full overflow-hidden border border-gray-200/90">
          <!-- Top accent bar -->
          <div
            class="h-1 w-full shrink-0"
            :class="{
              'bg-gradient-to-r from-emerald-400 to-green-500': notificationType === 'success',
              'bg-gradient-to-r from-red-400 to-rose-500': notificationType === 'error'
            }"
          />
          <div class="p-4 text-center">
            <div
              class="w-11 h-11 mx-auto mb-3 rounded-xl flex items-center justify-center shrink-0"
              :class="{
                'bg-emerald-100': notificationType === 'success',
                'bg-red-100': notificationType === 'error'
              }"
            >
              <CheckCircle2Icon v-if="notificationType === 'success'" class="w-6 h-6 text-emerald-600" />
              <XCircleIcon v-else class="w-6 h-6 text-red-600" />
            </div>
            <h3
              class="text-base font-bold mb-1 tracking-tight"
              :class="{
                'text-emerald-700': notificationType === 'success',
                'text-red-700': notificationType === 'error'
              }"
            >
              {{ notificationType === 'success' ? 'Success' : 'Error' }}
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3 leading-snug">
              {{ notificationMessage }}
            </p>
            <button
              @click="showNotification = false"
              class="w-full px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:opacity-90 active:scale-[0.98]"
              :class="{
                'bg-emerald-500 text-white': notificationType === 'success',
                'bg-red-500 text-white': notificationType === 'error'
              }"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Order Product Modal -->
    <div v-if="showOrderModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col overflow-hidden border border-gray-100">
        <!-- Modal Header -->
        <div class="px-6 py-4 border-b border-gray-200 flex-shrink-0 bg-gradient-to-r from-slate-50 to-gray-50">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-gray-900 tracking-tight">Order Products from Supplier</h3>
            <button
              @click="closeOrderModal"
              class="p-2 hover:bg-gray-200/80 rounded-xl text-gray-500 hover:text-gray-700 transition-colors"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row flex-1 min-h-0 overflow-hidden">
          <!-- Left Panel - Create New Order -->
          <div class="w-full lg:w-1/2 flex flex-col min-h-0 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50/50">
            <div class="flex-shrink-0 px-5 pt-5 pb-3">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h4 class="text-base font-semibold text-gray-800">Create New Order</h4>
                <div class="flex items-center gap-2">
                  <select
                    v-model="selectedPrintMonth"
                    class="px-3 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                  >
                    <option value="">Select Month</option>
                    <option v-for="month in availableMonths" :key="month.value" :value="month.value">
                      {{ month.label }}
                    </option>
                  </select>
                  <button
                    @click="printOrdersByMonth"
                    :disabled="!selectedPrintMonth"
                    class="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 shadow-md text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-medium"
                    title="Print Orders by Month"
                  >
                    <PrinterIcon class="w-4 h-4" />
                    <span class="hidden sm:inline">Print</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Scrollable form area -->
            <form @submit.prevent="handleOrderSubmit" class="flex flex-col flex-1 min-h-0 overflow-hidden">
              <div class="flex-1 overflow-y-auto px-5 pb-4 space-y-4 min-h-0">
                <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200/80 space-y-4">
                  <!-- Product Selection -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Select Product</label>
                    <select
                      v-model="orderForm.productId"
                      @change="updateSelectedProduct"
                      required
                      class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm shadow-sm transition-shadow"
                    >
                      <option value="">Choose a product...</option>
                      <optgroup
                        v-for="category in categoriesWithProducts"
                        :key="category.key"
                        :label="category.value"
                      >
                        <option
                          v-for="product in getProductsByCategory(category.key)"
                          :key="product.id"
                          :value="product.id"
                        >
                          {{ product.name }} ({{ product.sku }}) - Stock: {{ product.stockLevel }}
                        </option>
                      </optgroup>
                    </select>
                  </div>

                  <!-- Size Selection -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                      Size
                      <span v-if="orderForm.productId && sizesForSelectedProduct.length === 0" class="text-xs text-orange-600 ml-2">
                        (No sizes - add in Sizes tab)
                      </span>
                    </label>
                    <select
                      v-model="orderForm.size"
                      :disabled="!orderForm.productId"
                      class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed shadow-sm"
                    >
                      <option value="">
                        {{ !orderForm.productId 
                          ? 'Select product first' 
                          : sizesForSelectedProduct.length === 0 
                            ? 'No sizes available for this product' 
                            : 'Select size...' }}
                      </option>
                      <option
                        v-for="size in sizesForSelectedProduct"
                        :key="size.key"
                        :value="size.value"
                      >
                        {{ size.value }}
                      </option>
                    </select>
                    <p v-if="orderForm.productId && sizesForSelectedProduct.length === 0" class="text-xs text-gray-500 mt-1">
                      Product ID: {{ orderForm.productId }} | Available sizes: {{ Object.keys(sizes).length }} products have sizes
                    </p>
                  </div>

                  <!-- Supplier Name Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Supplier Name</label>
                    <input
                      type="text"
                      v-model="orderForm.supplierName"
                      required
                      class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm"
                      placeholder="e.g., Davies Paints Philippines"
                    />
                  </div>

                  <!-- Quantity -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Order Quantity</label>
                    <input
                      type="number"
                      v-model="orderForm.quantity"
                      required
                      min="1"
                      class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm"
                      placeholder="Enter quantity"
                    />
                  </div>

                  <!-- Status -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Order Status</label>
                    <select
                      v-model="orderForm.status"
                      class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm shadow-sm"
                    >
                      <option value="incomplete">Incomplete</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Sticky footer - Create Order button (always visible) -->
              <div class="flex-shrink-0 px-5 py-4 pt-3 border-t border-gray-200 bg-white/80">
                <button
                  type="submit"
                  class="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  :disabled="modalLoading"
                >
                  <span v-if="modalLoading" class="flex items-center justify-center gap-2">
                    <LoaderIcon class="w-4 h-4 animate-spin" />
                    Creating Order...
                  </span>
                  <span v-else>Create Order</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Right Panel - Orders List -->
          <div class="w-full lg:w-1/2 flex flex-col min-h-0 p-5">
            <h4 class="text-base font-semibold text-gray-800 mb-4 flex-shrink-0">Current Orders</h4>
            <div class="flex-1 overflow-y-auto space-y-3 min-h-0">
              <div v-if="orders.length === 0 && activeTab === 'orders'" class="text-center py-10 text-gray-500 text-sm">
                No orders yet. Create your first order!
              </div>
              <div v-for="order in orders" :key="order.id" class="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <div class="flex-1">
                    <p class="font-medium text-gray-900">{{ order.productName }}</p>
                    <p class="text-sm text-gray-600">Size: {{ order.size || 'N/A' }}</p>
                    <p class="text-sm text-gray-600">Supplier: {{ order.supplierName }}</p>
                    <p class="text-sm text-gray-600">Quantity: {{ order.quantity }}</p>
                    <div class="flex items-center gap-3 mt-1">
                      <p class="text-xs text-gray-600">Net Price: <span class="font-medium">{{ formatCurrency(getOrderNetPrice(order)) }}</span></p>
                      <p class="text-xs text-gray-900 font-semibold">Total: <span class="font-bold">{{ formatCurrency(getOrderTotalPrice(order)) }}</span></p>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">{{ formatDate(order.createdAt) }}</p>
                  </div>
                  <div class="flex items-center gap-2 flex-shrink-0">
                    <select
                      :value="order.status"
                      @change="updateOrderStatus(order.id, $event.target.value)"
                      class="px-2.5 py-1.5 rounded-lg text-xs border bg-white font-medium"
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
                      class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
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

    <!-- Image Editor Modal -->
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
  onSnapshot, // Import onSnapshot
  where,
  serverTimestamp,
  getDoc,
  setDoc // Import setDoc
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
  Printer as PrinterIcon,
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
const unsubscribe = ref(null) // For product listener
const showNotification = ref(false)
const notificationMessage = ref('')
const notificationType = ref('success')
const stockUpdateInProgress = ref(false)
const modalLoading = ref(false)
const showOrderModal = ref(false)
const orders = ref([])
const products = ref([])
const selectedPrintMonth = ref('')

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
  size: '',
  supplierName: '',
  quantity: 0,
  status: 'incomplete'
})

// Category management state
const activeTab = ref('products') // 'products', 'orders', 'categories', 'sizes'
const categories = ref([
  { key: 'interior', value: 'Interior Paint' },
  { key: 'exterior', value: 'Exterior Paint' },
  { key: 'primer', value: 'Primers' },
  { key: 'specialty', value: 'Specialty Paints' },
  { key: 'house-interior', value: 'House Interior' },
  { key: 'house-exterior', value: 'House Exterior' },
  { key: 'automotive', value: 'Automotive Paints' },
  { key: 'wood-coatings', value: 'Wood Coatings' },
  { key: 'metal-coatings', value: 'Metal Coatings' },
  { key: 'waterproofing', value: 'Waterproofing Products' },
  { key: 'thinners-solvents', value: 'Thinners & Solvents' },
  { key: 'accessories-tools', value: 'Accessories & Tools' }
])
const newCategoryForm = ref({
  key: '',
  value: ''
})

const unsubscribeCategories = ref(null)

// Size management state - product-specific
const sizes = ref({}) // Structure: { productId: [{ key, value }] }
const newSizeForm = ref({
  productId: '',
  key: '',
  value: ''
})
const unsubscribeSizes = ref(null)

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
// Filter categories to only show those with products
const categoriesWithProducts = computed(() => {
  return categories.value.filter(category => {
    return products.value.some(product => product.category === category.key)
  })
})

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

// Computed property for sizes in order form (based on selected product)
const sizesForSelectedProduct = computed(() => {
  if (!orderForm.value.productId) {
    console.log('[v0] No product selected in order form')
    return []
  }
  
  console.log('[v0] Looking for sizes for product ID:', orderForm.value.productId)
  console.log('[v0] Available sizes object:', sizes.value)
  console.log('[v0] Available product IDs in sizes:', Object.keys(sizes.value))
  
  const productSizes = sizes.value[orderForm.value.productId] || []
  console.log('[v0] Found sizes for product:', productSizes)
  
  if (productSizes.length === 0) {
    console.log('[v0] WARNING: No sizes found for product ID:', orderForm.value.productId)
    // Try to find by product name as fallback
    const selectedProduct = products.value.find(p => p.id === orderForm.value.productId)
    if (selectedProduct) {
      console.log('[v0] Selected product name:', selectedProduct.name)
      // Check if sizes are stored with a different key
      const allProductIds = Object.keys(sizes.value)
      console.log('[v0] Checking all product IDs in sizes for matches...')
      allProductIds.forEach(id => {
        console.log('[v0] Product ID in sizes:', id, 'Sizes:', sizes.value[id])
      })
    }
  }
  
  return productSizes
})

// Computed property for filtered sizes in sizes management view - shows all sizes
const filteredSizesForView = computed(() => {
  // Show all sizes from all products
  const allSizes = []
  Object.keys(sizes.value).forEach(productId => {
    const productSizes = sizes.value[productId] || []
    productSizes.forEach(size => {
      allSizes.push({ ...size, productId })
    })
  })
  return allSizes
})

// Total sizes count for tab display
const totalSizesCount = computed(() => {
  let count = 0
  Object.keys(sizes.value).forEach(productId => {
    count += (sizes.value[productId] || []).length
  })
  return count
})

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
// /** rest of code here **/

const updateProductStock = async (productId, newStockLevel) => {
  try {
    if (stockUpdateInProgress.value) {
      console.log('Stock update already in progress, skipping...')
      return false
    }

    stockUpdateInProgress.value = true

    const productRef = doc(db, 'products', productId)
    const productDoc = await getDoc(productRef)
    if (!productDoc.exists()) {
      throw new Error(`Product with ID ${productId} not found`)
    }

    const productData = productDoc.data()
    const updatedStockLevel = Math.max(0, Number(newStockLevel))

    await updateDoc(productRef, {
      stockLevel: updatedStockLevel,
      stock: updatedStockLevel,
      updatedAt: serverTimestamp()
    })

    console.log(`Stock updated for product ${productId}: ${updatedStockLevel}`)

    notificationMessage.value = `Stock updated for ${productData.name}`
    notificationType.value = 'success'
    showNotification.value = true

    setTimeout(() => {
      showNotification.value = false
    }, 3000)

    return true
  } catch (err) {
    console.error('Error updating product stock:', err)

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
      image: productForm.value.image
    }

    console.log('Submitting product data:', productData)

    if (editingProduct.value) {
      const productRef = doc(db, 'products', editingProduct.value.id)
      await updateDoc(productRef, {
        ...productData,
        updatedAt: serverTimestamp()
      })
      showSuccessNotification('Product updated successfully!')
    } else {
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

  setTimeout(() => {
    showNotification.value = false
  }, 3000)
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
    'interior': 'Interior Paint',
    'exterior': 'Exterior Paint',
    'primer': 'Primers',
    'specialty': 'Specialty Paints',
    'house-interior': 'House Interior',
    'house-exterior': 'House Exterior',
    'automotive': 'Automotive Paints',
    'wood-coatings': 'Wood Coatings',
    'metal-coatings': 'Metal Coatings',
    'waterproofing': 'Waterproofing Products',
    'thinners-solvents': 'Thinners & Solvents',
    'accessories-tools': 'Accessories & Tools'
  }
  return categories[category] || category
}

// Helper function to get products by category for the order dropdown
const getProductsByCategory = (categoryKey) => {
  return products.value.filter(product => product.category === categoryKey)
}

// Helper function to get product name by ID
const getProductName = (productId) => {
  const product = products.value.find(p => p.id === productId)
  return product ? product.name : 'Unknown Product'
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

    const unsubscribeOrders = onSnapshot(
      q,
      (snapshot) => {
        console.log('Orders snapshot received, docs count:', snapshot.docs.length);
        orders.value = snapshot.docs.map(doc => {
          const data = doc.data();
          console.log('Order data:', data);
          return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt || new Date(),
            updatedAt: data.updatedAt || new Date()
          };
        });
        console.log('Orders updated:', orders.value);
      },
      (error) => {
        console.error('Error in orders listener:', error);
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

    if (!db) {
      throw new Error('Database not initialized');
    }

    const ordersCollection = collection(db, 'orders');

    const orderData = {
      productId: orderForm.value.productId,
      productName: orderForm.value.productName,
      size: orderForm.value.size || '',
      supplierName: orderForm.value.supplierName,
      quantity: Number(orderForm.value.quantity),
      status: orderForm.value.status,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    console.log('Creating order with data:', orderData);

    const docRef = await addDoc(ordersCollection, orderData);
    console.log('Order created with ID:', docRef.id);

    if (orderForm.value.status === 'delivered') {
      await updateProductStockFromOrder(orderForm.value.productId, Number(orderForm.value.quantity));
    }

    showSuccessNotification('Order created successfully!');
    resetOrderForm();
  } catch (err) {
    console.error('Error creating order:', err);

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
    // Clear size when product changes
    orderForm.value.size = '';
    
    // Debug logging
    console.log('[v0] ===== PRODUCT SELECTED IN ORDER FORM =====');
    console.log('[v0] Selected Product ID:', orderForm.value.productId);
    console.log('[v0] Selected Product Name:', selectedProduct.name);
    console.log('[v0] All sizes object:', sizes.value);
    console.log('[v0] All product IDs in sizes:', Object.keys(sizes.value));
    console.log('[v0] Sizes for this product ID:', sizes.value[orderForm.value.productId]);
    
    // Check if product ID exists in sizes
    if (!sizes.value[orderForm.value.productId]) {
      console.warn('[v0] ⚠️ WARNING: No sizes found for product ID:', orderForm.value.productId);
      console.warn('[v0] Available product IDs with sizes:', Object.keys(sizes.value));
      
      // Try to find by product name (case-insensitive)
      const productNameLower = selectedProduct.name.toLowerCase();
      Object.keys(sizes.value).forEach(sizeProductId => {
        const sizeProduct = products.value.find(p => p.id === sizeProductId);
        if (sizeProduct && sizeProduct.name.toLowerCase() === productNameLower) {
          console.warn('[v0] Found product with matching name but different ID:', {
            foundId: sizeProductId,
            selectedId: orderForm.value.productId,
            name: sizeProduct.name
          });
        }
      });
    } else {
      console.log('[v0] ✅ Found', sizes.value[orderForm.value.productId].length, 'sizes for this product');
    }
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
    size: '',
    supplierName: '',
    quantity: 0,
    status: 'incomplete'
  };
};

const formatDate = (timestamp) => {
  if (!timestamp) return '';

  let date;
  if (timestamp.toDate) {
    date = timestamp.toDate();
  } else if (timestamp instanceof Date) {
    date = timestamp;
  } else {
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

const formatCurrency = (value) => {
  if (value === null || value === undefined || isNaN(value)) {
    return '₱0.00';
  }
  return `₱${Number(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};

// Get Net Price (Unit Price) for an order
const getOrderNetPrice = (order) => {
  if (!order || !order.productId) {
    return 0;
  }
  
  // Find the product in the products array
  const product = products.value.find(p => p.id === order.productId);
  if (product && product.unitPrice) {
    return Number(product.unitPrice) || 0;
  }
  
  return 0;
};

// Get Total Price for an order (Quantity * Net Price)
const getOrderTotalPrice = (order) => {
  const quantity = Number(order.quantity) || 0;
  const netPrice = getOrderNetPrice(order);
  return quantity * netPrice;
};

// Get available months from orders
const availableMonths = computed(() => {
  const monthsSet = new Set();
  
  orders.value.forEach(order => {
    if (order.createdAt) {
      let date;
      if (order.createdAt.toDate) {
        date = order.createdAt.toDate();
      } else if (order.createdAt instanceof Date) {
        date = order.createdAt;
      } else {
        date = new Date(order.createdAt);
      }
      
      const year = date.getFullYear();
      const month = date.getMonth();
      const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
      monthsSet.add(monthKey);
    }
  });
  
  const months = Array.from(monthsSet).sort().reverse();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
  
  return months.map(monthKey => {
    const [year, month] = monthKey.split('-');
    const monthIndex = parseInt(month) - 1;
    return {
      value: monthKey,
      label: `${monthNames[monthIndex]} ${year}`
    };
  });
});

// Filter orders by selected month
const getOrdersByMonth = (monthKey) => {
  if (!monthKey) return [];
  
  const [year, month] = monthKey.split('-');
  
  return orders.value.filter(order => {
    if (!order.createdAt) return false;
    
    let date;
    if (order.createdAt.toDate) {
      date = order.createdAt.toDate();
    } else if (order.createdAt instanceof Date) {
      date = order.createdAt;
    } else {
      date = new Date(order.createdAt);
    }
    
    return date.getFullYear() === parseInt(year) && 
           (date.getMonth() + 1) === parseInt(month);
  });
};

// Print orders by month
const printOrdersByMonth = () => {
  if (!selectedPrintMonth.value) {
    showNotification.value = true;
    notificationMessage.value = 'Please select a month to print';
    notificationType.value = 'error';
    return;
  }
  
  const filteredOrders = getOrdersByMonth(selectedPrintMonth.value);
  
  if (filteredOrders.length === 0) {
    showNotification.value = true;
    notificationMessage.value = 'No orders found for the selected month';
    notificationType.value = 'error';
    return;
  }
  
  // Calculate totals
  let totalQuantity = 0;
  let totalAmount = 0;
  
  filteredOrders.forEach(order => {
    totalQuantity += Number(order.quantity) || 0;
    totalAmount += getOrderTotalPrice(order);
  });
  
  // Get month label
  const selectedMonth = availableMonths.value.find(m => m.value === selectedPrintMonth.value);
  const monthLabel = selectedMonth ? selectedMonth.label : selectedPrintMonth.value;
  
  // Create print window
  const printWindow = window.open('', '_blank');
  
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Orders Report - ${monthLabel}</title>
      <style>
        @media print {
          @page {
            size: A4;
            margin: 1cm;
          }
          body { padding: 12px; font-size: 12px !important; }
          .header h1 { font-size: 28px !important; }
          .header h2 { font-size: 18px !important; }
          .header .sub { font-size: 14px !important; }
          .info-label { font-size: 11px !important; }
          .info-value { font-size: 16px !important; }
          .table-wrap { overflow: visible !important; width: 100% !important; }
          table { table-layout: fixed !important; width: 100% !important; }
          th, td { padding: 8px 6px !important; font-size: 11px !important; vertical-align: middle !important; }
          .status-badge { padding: 4px 8px !important; font-size: 10px !important; min-width: 0 !important; }
          td.status-cell { min-width: 0 !important; }
          .summary-title { font-size: 16px !important; }
          .summary-row { font-size: 13px !important; }
          .summary-label, .summary-value { font-size: 13px !important; }
          .summary-row:last-child .summary-value { font-size: 18px !important; }
          .footer { font-size: 12px !important; }
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #1f2937;
          background: white;
          padding: 20px;
          font-size: 14px;
          overflow-x: visible;
        }
        .brand-bar {
          height: 5px;
          background: linear-gradient(90deg, #7c3aed 0%, #5b21b6 50%, #4c1d95 100%);
          margin: -20px -20px 0 -20px;
          margin-bottom: 6px;
        }
        .header {
          text-align: center;
          margin-bottom: 24px;
          padding: 20px 24px;
          background: linear-gradient(145deg, #faf5ff 0%, #f3e8ff 50%, #ede9fe 100%);
          border-radius: 12px;
          border: 2px solid #7c3aed;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.12);
        }
        .header h1 {
          color: #5b21b6;
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 6px;
          letter-spacing: -0.3px;
        }
        .header h2 {
          color: #6b7280;
          font-size: 20px;
          font-weight: 600;
        }
        .header .sub {
          margin-top: 4px;
          font-size: 15px;
          color: #7c3aed;
          font-weight: 500;
        }
        .info-section {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
          padding: 16px 20px;
          background: linear-gradient(145deg, #f9fafb 0%, #f3f4f6 100%);
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
        }
        .info-item {
          text-align: center;
          flex: 1;
          min-width: 80px;
        }
        .info-label {
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 4px;
          font-weight: 600;
        }
        .info-value {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
        }
        .table-wrap {
          width: 100%;
          overflow-x: visible;
          margin-bottom: 24px;
        }
        table {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
          border-spacing: 0;
          background: white;
          border-radius: 10px;
          overflow: visible;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e7eb;
        }
        thead {
          background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
          color: white;
        }
        th {
          padding: 12px 10px;
          text-align: left;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          vertical-align: middle;
        }
        th.text-center {
          text-align: center;
        }
        th:first-child {
          padding-left: 14px;
        }
        th:last-child {
          padding-right: 14px;
        }
        tbody tr {
          border-bottom: 1px solid #e5e7eb;
        }
        tbody tr:nth-child(even) {
          background: #fafafa;
        }
        tbody tr:last-child {
          border-bottom: 2px solid #7c3aed;
        }
        td {
          padding: 12px 10px;
          font-size: 13px;
          color: #374151;
          vertical-align: middle;
        }
        td.text-center {
          text-align: center;
        }
        td.text-left {
          text-align: left;
        }
        td:first-child {
          padding-left: 14px;
        }
        td:last-child {
          padding-right: 14px;
        }
        td.product-cell {
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: normal;
          text-align: left;
        }
        td.status-cell {
          white-space: nowrap;
          overflow: visible;
          text-align: center;
        }
        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          text-transform: capitalize;
          letter-spacing: 0.2px;
          white-space: nowrap;
          text-align: center;
          box-sizing: border-box;
        }
        .status-incomplete {
          background: #fed7aa;
          color: #9a3412;
          border: 1px solid #ea580c;
        }
        .status-delivered {
          background: #bbf7d0;
          color: #166534;
          border: 1px solid #16a34a;
        }
        .summary {
          margin-top: 24px;
          padding: 20px 24px;
          background: linear-gradient(145deg, #faf5ff 0%, #f3e8ff 100%);
          border-radius: 10px;
          border: 2px solid #7c3aed;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.1);
        }
        .summary-title {
          font-size: 18px;
          font-weight: 700;
          color: #5b21b6;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 2px solid #c4b5fd;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #e9d5ff;
          font-size: 14px;
        }
        .summary-row:last-child {
          border-bottom: none;
          font-size: 18px;
          font-weight: 800;
          color: #5b21b6;
          margin-top: 8px;
          padding-top: 12px;
          border-top: 2px solid #7c3aed;
        }
        .summary-label {
          font-weight: 700;
          color: #374151;
          font-size: 14px;
        }
        .summary-value {
          font-weight: 700;
          color: #1f2937;
          font-size: 14px;
          text-align: right;
        }
        .summary-row:last-child .summary-value {
          font-size: 20px;
          color: #5b21b6;
        }
        .footer {
          margin-top: 28px;
          text-align: center;
          padding-top: 18px;
          border-top: 2px solid #e5e7eb;
          color: #6b7280;
          font-size: 13px;
          line-height: 1.5;
        }
        .footer p {
          margin-bottom: 4px;
        }
      </style>
    </head>
    <body>
      <div class="brand-bar"></div>
      <div class="header">
        <h1>Barcelona Paint Center</h1>
        <h2>Orders Report</h2>
        <p class="sub">${monthLabel}</p>
      </div>
      
      <div class="info-section">
        <div class="info-item">
          <div class="info-label">Report Period</div>
          <div class="info-value">${monthLabel}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Total Orders</div>
          <div class="info-value">${filteredOrders.length}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Total Quantity</div>
          <div class="info-value">${totalQuantity.toLocaleString()}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Total Amount</div>
          <div class="info-value">${formatCurrency(totalAmount)}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Generated</div>
          <div class="info-value">${new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</div>
        </div>
      </div>
      
      <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th class="text-center" style="width: 4%;">#</th>
            <th style="width: 22%;">Product Name</th>
            <th style="width: 11%;">Size</th>
            <th style="width: 16%;">Supplier</th>
            <th class="text-center" style="width: 9%;">Quantity</th>
            <th class="text-center" style="width: 12%;">Net Price</th>
            <th class="text-center" style="width: 13%;">Total Price</th>
            <th class="text-center" style="width: 13%;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${filteredOrders.map((order, index) => {
            const netPrice = getOrderNetPrice(order);
            const totalPrice = getOrderTotalPrice(order);
            return `
              <tr>
                <td class="text-center">${index + 1}</td>
                <td class="product-cell">${order.productName || 'N/A'}</td>
                <td style="word-wrap: break-word; overflow-wrap: break-word;">${order.size || 'N/A'}</td>
                <td style="word-wrap: break-word; overflow-wrap: break-word;">${order.supplierName || 'N/A'}</td>
                <td class="text-center">${order.quantity || 0}</td>
                <td class="text-center" style="font-weight: 600;">${formatCurrency(netPrice)}</td>
                <td class="text-center" style="font-weight: 700; color: #5b21b6; font-size: 14px;">${formatCurrency(totalPrice)}</td>
                <td class="text-center status-cell">
                  <span class="status-badge status-${order.status || 'incomplete'}">
                    ${(order.status || 'incomplete').charAt(0).toUpperCase() + (order.status || 'incomplete').slice(1)}
                  </span>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
      </div>
      
      <div class="summary">
        <div class="summary-title">Summary</div>
        <div class="summary-row">
          <span class="summary-label">Total Orders:</span>
          <span class="summary-value">${filteredOrders.length}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Total Quantity:</span>
          <span class="summary-value">${totalQuantity.toLocaleString()}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Total Amount:</span>
          <span class="summary-value">${formatCurrency(totalAmount)}</span>
        </div>
      </div>
      
      <div class="footer">
        <p><strong>Generated by Barcelona Paint Center Admin Portal</strong></p>
        <p>This is an automated report. For inquiries, please contact the administrator.</p>
      </div>
    </body>
    </html>
  `;
  
  printWindow.document.write(printContent);
  printWindow.document.close();
  
  // Wait for content to load, then print
  setTimeout(() => {
    printWindow.print();
  }, 250);
};

// Category management methods
const fetchCategories = async () => {
  try {
    if (!db) return;
    
    const docRef = doc(db, 'settings', 'categories');
    // Use unsubscribeCategories.value to store the onSnapshot listener
    unsubscribeCategories.value = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists() && docSnap.data().list) {
        categories.value = docSnap.data().list;
        console.log('[v0] Categories updated in real-time:', categories.value);
      } else {
        // Handle case where the document doesn't exist or has no list
        categories.value = []; 
      }
    });
  } catch (error) {
    console.error("Error setting up category listener:", error);
  }
};

const addCategory = async () => {
  if (!newCategoryForm.value.value.trim() || !newCategoryForm.value.key.trim()) {
    notificationMessage.value = 'Category name and key are required.';
    notificationType.value = 'error';
    showNotification.value = true;
    return;
  }
  try {
    const updatedCategories = [...categories.value, { value: newCategoryForm.value.value, key: newCategoryForm.value.key }];
    const settingsRef = doc(db, 'settings', 'categories');
    await setDoc(settingsRef, { list: updatedCategories }, { merge: true });
    newCategoryForm.value = { value: '', key: '' };
    notificationMessage.value = 'Category added successfully!';
    notificationType.value = 'success';
    showNotification.value = true;
  } catch (error) {
    console.error("Error adding category:", error);
    notificationMessage.value = 'Failed to add category.';
    notificationType.value = 'error';
    showNotification.value = true;
  }
};

const deleteCategory = async (index) => {
  // Prevent deletion of default categories
  if (categories.value[index]?.key === 'interior' || categories.value[index]?.key === 'exterior') {
    notificationMessage.value = 'Cannot delete default categories.';
    notificationType.value = 'error';
    showNotification.value = true;
    return;
  }
  try {
    const updatedCategories = categories.value.filter((_, i) => i !== index);
    const settingsRef = doc(db, 'settings', 'categories');
    await setDoc(settingsRef, { list: updatedCategories }, { merge: true });
    notificationMessage.value = 'Category deleted successfully!';
    notificationType.value = 'success';
    showNotification.value = true;
  } catch (error) {
    console.error("Error deleting category:", error);
    notificationMessage.value = 'Failed to delete category.';
    notificationType.value = 'error';
    showNotification.value = true;
  }
};

// Size management methods - product-specific
const fetchSizes = async () => {
  try {
    if (!db) return;
    
    const docRef = doc(db, 'settings', 'sizes');
    unsubscribeSizes.value = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log('[v0] Sizes document data received:', data);
        if (data.products) {
          // Force reactivity by creating a new object
          sizes.value = { ...data.products }; // Structure: { productId: [{ key, value }] }
          console.log('[v0] Sizes updated in real-time:', sizes.value);
          console.log('[v0] Product IDs with sizes:', Object.keys(sizes.value));
          // Log each product's sizes
          Object.keys(sizes.value).forEach(productId => {
            console.log(`[v0] Product ${productId} has ${sizes.value[productId].length} sizes:`, sizes.value[productId]);
          });
        } else {
          sizes.value = {};
          console.log('[v0] No products field found, initializing empty sizes');
        }
      } else {
        sizes.value = {};
        console.log('[v0] Sizes document does not exist, initializing empty sizes');
      }
    }, (error) => {
      console.error('[v0] Error in sizes listener:', error);
    });
  } catch (error) {
    console.error("Error setting up size listener:", error);
  }
};

const addSize = async () => {
  if (!newSizeForm.value.productId || !newSizeForm.value.value.trim() || !newSizeForm.value.key.trim()) {
    notificationMessage.value = 'Product, size name and key are required.';
    notificationType.value = 'error';
    showNotification.value = true;
    return;
  }
  try {
    const productId = newSizeForm.value.productId
    const productSizes = sizes.value[productId] || []
    
    // Check if size key already exists for this product
    if (productSizes.some(s => s.key === newSizeForm.value.key)) {
      notificationMessage.value = 'Size key already exists for this product.';
      notificationType.value = 'error';
      showNotification.value = true;
      return;
    }
    
    // Create a deep copy to ensure reactivity
    // Ensure we have a proper object structure
    const updatedSizes = sizes.value ? { ...sizes.value } : {}
    if (!updatedSizes[productId]) {
      updatedSizes[productId] = []
    }
    updatedSizes[productId] = [...updatedSizes[productId], { 
      value: newSizeForm.value.value, 
      key: newSizeForm.value.key 
    }]
    
    console.log('[v0] Adding size for product ID:', productId)
    console.log('[v0] Product name:', getProductName(productId))
    console.log('[v0] Size being added:', { key: newSizeForm.value.key, value: newSizeForm.value.value })
    console.log('[v0] Updated sizes structure:', updatedSizes)
    
    const settingsRef = doc(db, 'settings', 'sizes');
    await setDoc(settingsRef, { products: updatedSizes }, { merge: true });
    
    // Force update local state immediately for better UX
    // Use Object.assign to ensure reactivity
    Object.keys(sizes.value).forEach(key => delete sizes.value[key])
    Object.assign(sizes.value, updatedSizes)
    
    // Force Vue to detect the change
    sizes.value = { ...updatedSizes }
    
    console.log('[v0] Local sizes state updated:', sizes.value)
    
    newSizeForm.value = { productId: '', value: '', key: '' };
    notificationMessage.value = 'Size added successfully!';
    notificationType.value = 'success';
    showNotification.value = true;
  } catch (error) {
    console.error("Error adding size:", error);
    notificationMessage.value = 'Failed to add size.';
    notificationType.value = 'error';
    showNotification.value = true;
  }
};

const deleteSize = async (productId, index) => {
  try {
    const updatedSizes = { ...sizes.value }
    const productSizes = updatedSizes[productId] || []
    updatedSizes[productId] = productSizes.filter((_, i) => i !== index)
    
    // Remove product entry if no sizes left
    if (updatedSizes[productId].length === 0) {
      delete updatedSizes[productId]
    }
    
    const settingsRef = doc(db, 'settings', 'sizes');
    await setDoc(settingsRef, { products: updatedSizes }, { merge: true });
    
    // Force update local state
    sizes.value = { ...updatedSizes }
    
    notificationMessage.value = 'Size deleted successfully!';
    notificationType.value = 'success';
    showNotification.value = true;
  } catch (error) {
    console.error("Error deleting size:", error);
    notificationMessage.value = 'Failed to delete size.';
    notificationType.value = 'error';
    showNotification.value = true;
  }
};

// Image editor methods
const openImageEditor = () => {
  if (imagePreview.value) {
    currentImage.value = imagePreview.value
    originalImage.value = imagePreview.value
    showImageEditor.value = true
    nextTick(() => {
      initializeCropHandles()
    })
  }
}

const initializeCropHandles = () => {
  if (!cropImage.value) return
  const img = cropImage.value
  const rect = img.getBoundingClientRect()

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
      newBounds.height = startBounds.value.height - (newBounds.top - startBounds.value.top)
      break
    case 'bottom':
      newBounds.height = Math.max(20, Math.min(startBounds.value.height + deltaY, imgHeight - startBounds.value.top))
      break
    case 'left':
      newBounds.left = Math.max(0, Math.min(startBounds.value.left + deltaX, startBounds.value.left + startBounds.value.width - 20))
      newBounds.width = startBounds.value.width - (newBounds.left - startBounds.value.left)
      break
    case 'right':
      newBounds.width = Math.max(20, Math.min(startBounds.value.width + deltaX, imgWidth - startBounds.value.left))
      break
    case 'top-left':
      newBounds.top = Math.max(0, Math.min(startBounds.value.top + deltaY, startBounds.value.top + startBounds.value.height - 20))
      newBounds.height = startBounds.value.height - (newBounds.top - startBounds.value.top)
      newBounds.left = Math.max(0, Math.min(startBounds.value.left + deltaX, startBounds.value.left + startBounds.value.width - 20))
      newBounds.width = startBounds.value.width - (newBounds.left - startBounds.value.left)
      break
    case 'top-right':
      newBounds.top = Math.max(0, Math.min(startBounds.value.top + deltaY, startBounds.value.top + startBounds.value.height - 20))
      newBounds.height = startBounds.value.height - (newBounds.top - startBounds.value.top)
      newBounds.width = Math.max(20, Math.min(startBounds.value.width + deltaX, imgWidth - startBounds.value.left))
      break
    case 'bottom-left':
      newBounds.left = Math.max(0, Math.min(startBounds.value.left + deltaX, startBounds.value.left + startBounds.value.width - 20))
      newBounds.width = startBounds.value.width - (newBounds.left - startBounds.value.left)
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

  const scaleX = img.naturalWidth / img.offsetWidth
  const scaleY = img.naturalHeight / img.offsetHeight

  canvas.width = cropBounds.value.width * scaleX
  canvas.height = cropBounds.value.height * scaleY

  const sourceImg = new Image()
  sourceImg.onload = () => {
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

    currentImage.value = canvas.toDataURL('image/jpeg', 0.9)
    initializeCropHandles()
  }
  sourceImg.src = currentImage.value
}

const resetCropImage = () => {
  currentImage.value = originalImage.value
  initializeCropHandles()
}

const saveImageChanges = () => {
  productForm.value.image = currentImage.value
  imagePreview.value = currentImage.value
  closeImageEditor()
}

const closeImageEditor = () => {
  showImageEditor.value = false
  imageAdjustments.value = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    rotation: 0
  }
  cropBounds.value = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }
}

// Lifecycle hooks - declared at top level
onMounted(async () => {
  console.log('Component mounted, initializing...');
  
  // Setup products listener
  try {
    loading.value = true;
    error.value = null;

    if (!db || !productsRef) {
      throw new Error('Database not initialized');
    }

    const q = query(productsRef);
    unsubscribe.value = onSnapshot(
      q,
      (snapshot) => {
        products.value = snapshot.docs.map(doc => {
          const data = doc.data();
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
    console.error('Error in products setup:', err);
    loading.value = false;
    error.value = 'Database connection failed. Please refresh the page.';
    products.value = [];
  }

  // Setup categories listener
  fetchCategories() // Call fetchCategories

  // Setup sizes listener
  fetchSizes() // Call fetchSizes

  // Setup orders listener
  fetchOrders() // Call fetchOrders
})

// Watch for order modal opening to ensure sizes are loaded
watch(showOrderModal, (isOpen) => {
  if (isOpen) {
    console.log('[v0] Order modal opened, checking sizes...');
    console.log('[v0] Current sizes state:', sizes.value);
    console.log('[v0] Sizes keys:', Object.keys(sizes.value));
    
    // Ensure sizes are loaded
    if (Object.keys(sizes.value).length === 0) {
      console.log('[v0] No sizes found, attempting to fetch...');
      fetchSizes();
    }
  }
})

// Clean up listeners on component unmount
onUnmounted(() => {
  if (unsubscribe.value) {
    unsubscribe.value()
  }
  if (window.ordersUnsubscribe) {
    window.ordersUnsubscribe()
  }
  if (unsubscribeCategories.value) {
    unsubscribeCategories.value()
  }
  if (unsubscribeSizes.value) {
    unsubscribeSizes.value()
  }
})

// Export methods for other components to use
defineExpose({
  updateProductStock
})

</script>

<style scoped>
/* Notification modal transition & animation */
.notif-enter-active,
.notif-leave-active {
  transition: opacity 0.2s ease;
}
.notif-enter-from,
.notif-leave-to {
  opacity: 0;
}
.notif-enter-active .notification-card,
.notif-leave-active .notification-card {
  transition: transform 0.3s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.25s ease;
}
.notif-enter-from .notification-card,
.notif-leave-to .notification-card {
  opacity: 0;
  transform: scale(0.92) translateY(-8px);
}
.notif-enter-to .notification-card,
.notif-leave-from .notification-card {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Inventory stat cards - subtle entrance */
.inventory-stat-card {
  animation: inventory-card-in 0.4s ease-out backwards;
}
.inventory-stat-card:nth-child(1) { animation-delay: 0.05s; }
.inventory-stat-card:nth-child(2) { animation-delay: 0.1s; }
.inventory-stat-card:nth-child(3) { animation-delay: 0.15s; }
.inventory-stat-card:nth-child(4) { animation-delay: 0.2s; }
.inventory-stat-card:nth-child(5) { animation-delay: 0.25s; }
@keyframes inventory-card-in {
  from {
    opacity: 0;
    transform: translateY(8px);
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

/* Enhanced hover effects and responsive touch interactions */
.cursor-pointer:hover {
  transform: translateY(-2px) scale(1.02);
}

/* Enhanced mobile touch interactions */
@media (max-width: 1024px) {
  .cursor-pointer:active {
    transform: translateY(0) scale(0.98);
  }

  button {
    min-height: 44px;
  }

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
