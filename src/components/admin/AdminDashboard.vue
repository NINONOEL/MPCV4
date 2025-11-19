<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-blue-200 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="relative z-10 flex h-screen">
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

        <nav class="flex-1 p-3 xl:p-4 space-y-1 xl:space-2 overflow-y-auto">
          <button
            @click="activeTab = 'dashboard'"
            :class="[
              'w-full flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium',
              activeTab === 'dashboard'
                ? 'text-blue-600 bg-blue-50 shadow-sm border border-blue-200'
                : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            <LayoutDashboardIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Dashboard</span>
          </button>

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

          <router-link
            to="/admin/visualization"
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
            active-class="bg-indigo-100 border border-indigo-200 shadow-sm font-semibold"
          >
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
              <UserIcon class="w-4 xl:w-5 h-4 xl:w-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs xl:text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail }}</p>
            </div>
            <button @click="handleLogout" class="p-1.5 xl:p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0" title="Logout">
              <LogOutIcon class="w-4 xl:w-5 h-4 xl:w-5" />
            </button>
          </div>
        </div>
      </aside>

      <div class="fixed top-4 left-4 z-30 lg:hidden">
        <button @click="toggleMobileSidebar" class="p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" aria-label="Toggle navigation menu">
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <XIcon v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div v-if="mobileSidebarOpen" class="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 lg:hidden" @click="toggleMobileSidebar"></div>

      <aside v-if="mobileSidebarOpen" class="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 z-30 lg:hidden shadow-2xl flex flex-col">
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
          <button
            @click="activeTab = 'dashboard'"
            :class="[
              'w-full flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium',
              activeTab === 'dashboard'
                ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            <LayoutDashboardIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Dashboard</span>
          </button>

          <router-link to="/admin/staff" class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100" @click="mobileSidebarOpen = false">
            <UsersIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Staff Management</span>
          </router-link>

          <router-link to="/admin/inventory" class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100" @click="mobileSidebarOpen = false">
            <PackageIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Inventory</span>
          </router-link>

          <router-link to="/admin/house-paint-recommender" class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100" @click="mobileSidebarOpen = false">
            <HomeIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Paint Recommender</span>
          </router-link>

          <router-link to="/admin/paint-mixing" class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100" @click="mobileSidebarOpen = false">
            <PaletteIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Paint Mix</span>
          </router-link>

          <router-link to="/admin/sales-analytics" class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100" @click="mobileSidebarOpen = false">
            <TrendingUpIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Sales Analytics</span>
          </router-link>

          <router-link
            to="/admin/visualization"
            class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
            active-class="bg-indigo-100 border border-indigo-200 shadow-sm font-semibold"
            @click="mobileSidebarOpen = false"
          >
            <BarChart3Icon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Visualize</span>
          </router-link>

          <router-link to="/admin/settings" class="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100" @click="mobileSidebarOpen = false">
            <SettingsIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">System Settings</span>
          </router-link>
        </nav>

        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <UserIcon class="w-6 h-6 text-white" />
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
      </aside>

      <main class="flex-1 overflow-auto">
        <header class="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="pl-16 lg:pl-0">
              <h1 class="text-xl sm:text-2xl font-bold text-gray-900">{{ activeTab === 'dashboard' ? 'Dashboard' : 'Customer Quotes' }}</h1>
              <p class="text-sm sm:text-base text-gray-600">{{ activeTab === 'dashboard' ? 'Manage your paint store operations' : 'View and manage customer quote requests' }}</p>
            </div>
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

        <div class="p-4 sm:p-6 lg:p-8">
          <div v-if="activeTab === 'dashboard'">
            <!-- Key Metrics Section -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
                <div class="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 h-2 absolute top-0 left-0 right-0"></div>
                <div class="p-4 sm:p-6">
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                      <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Total Sales</h3>
                      <p class="text-lg sm:text-xl font-bold text-gray-900 mb-1 break-words">₱{{ totalSales.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
                    </div>
                    <div class="p-2 rounded-xl shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200 flex-shrink-0">
                      <DollarSignIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
                <div class="bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 h-2 absolute top-0 left-0 right-0"></div>
                <div class="p-4 sm:p-6">
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                      <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Orders</h3>
                      <p class="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{{ totalOrders }}</p>
                    </div>
                    <div class="p-2 rounded-xl shadow-lg bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200 flex-shrink-0">
                      <ShoppingCartIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
                <div class="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 h-2 absolute top-0 left-0 right-0"></div>
                <div class="p-4 sm:p-6">
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                      <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Products</h3>
                      <p class="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{{ totalProducts }}</p>
                    </div>
                    <div class="p-2 rounded-xl shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200 flex-shrink-0">
                      <PackageIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
                <div class="bg-gradient-to-br from-orange-400 via-amber-500 to-red-500 h-2 absolute top-0 left-0 right-0"></div>
                <div class="p-4 sm:p-6">
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                      <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Staff</h3>
                      <p class="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{{ totalStaff }}</p>
                    </div>
                    <div class="p-2 rounded-xl shadow-lg bg-gradient-to-br from-orange-400 via-amber-500 to-red-500 transform hover:scale-110 transition-transform duration-200 flex-shrink-0">
                      <UsersIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Action Shortcuts Section -->
            <div class="mb-8">
              <h2 class="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                <router-link
                  to="/admin/staff"
                  class="group relative bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div class="flex flex-col items-center text-center">
                    <div class="p-3 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      <UsersIcon class="w-5 h-5" />
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-gray-900">Staff</p>
                    <p class="text-xs text-gray-600 mt-1">{{ totalStaff }} members</p>
                  </div>
                </router-link>

                <router-link
                  to="/admin/inventory"
                  class="group relative bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div class="flex flex-col items-center text-center">
                    <div class="p-3 rounded-lg bg-gradient-to-br from-purple-400 to-violet-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      <PackageIcon class="w-5 h-5" />
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-gray-900">Inventory</p>
                    <p class="text-xs text-gray-600 mt-1">{{ totalProducts }} items</p>
                  </div>
                </router-link>

                <router-link
                  to="/admin/house-paint-recommender"
                  class="group relative bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div class="flex flex-col items-center text-center">
                    <div class="p-3 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      <HomeIcon class="w-5 h-5" />
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-gray-900">Recommender</p>
                    <p class="text-xs text-gray-600 mt-1">Paint advisor</p>
                  </div>
                </router-link>

                <router-link
                  to="/admin/paint-mixing"
                  class="group relative bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div class="flex flex-col items-center text-center">
                    <div class="p-3 rounded-lg bg-gradient-to-br from-pink-400 to-rose-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      <PaletteIcon class="w-5 h-5" />
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-gray-900">Paint Mix</p>
                    <p class="text-xs text-gray-600 mt-1">Color mixing</p>
                  </div>
                </router-link>

                <router-link
                  to="/admin/sales-analytics"
                  class="group relative bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div class="flex flex-col items-center text-center">
                    <div class="p-3 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUpIcon class="w-5 h-5" />
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-gray-900">Analytics</p>
                    <p class="text-xs text-gray-600 mt-1">Sales data</p>
                  </div>
                </router-link>

                <router-link
                  to="/admin/visualization"
                  class="group relative bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div class="flex flex-col items-center text-center">
                    <div class="p-3 rounded-lg bg-gradient-to-br from-indigo-400 to-blue-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3Icon class="w-5 h-5" />
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-gray-900">Visualize</p>
                    <p class="text-xs text-gray-600 mt-1">Charts & graphs</p>
                  </div>
                </router-link>
              </div>
            </div>

            <!-- Quick Add Buttons Section -->
            <div class="mb-8">
              <h2 class="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quick Add</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <button
                  @click="showAddProductModal = true"
                  class="group relative bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-dashed border-purple-300 rounded-xl p-6 hover:border-purple-500 hover:shadow-lg hover:bg-purple-50/80 transition-all duration-300 cursor-pointer"
                >
                  <div class="flex flex-col items-center text-center">
                    <div class="p-4 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                      <PlusIcon class="w-6 h-6" />
                    </div>
                    <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1">Add Product</h3>
                    <p class="text-xs sm:text-sm text-gray-600">Add new paint to inventory</p>
                  </div>
                </button>

                <button
                  @click="showAddStaffModal = true"
                  class="group relative bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-dashed border-green-300 rounded-xl p-6 hover:border-green-500 hover:shadow-lg hover:bg-green-50/80 transition-all duration-300 cursor-pointer"
                >
                  <div class="flex flex-col items-center text-center">
                    <div class="p-4 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                      <PlusIcon class="w-6 h-6" />
                    </div>
                    <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1">Add Staff</h3>
                    <p class="text-xs sm:text-sm text-gray-600">Hire new team member</p>
                  </div>
                </button>

                <router-link
                  to="/admin/sales-analytics"
                  class="group relative bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-dashed border-blue-300 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg hover:bg-blue-50/80 transition-all duration-300 cursor-pointer block"
                  @click="showAddSaleModal = true"
                >
                  <div class="flex flex-col items-center text-center">
                    <div class="p-4 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                      <PlusIcon class="w-6 h-6" />
                    </div>
                    <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1">Add Sale</h3>
                    <p class="text-xs sm:text-sm text-gray-600">Record new transaction</p>
                  </div>
                </router-link>
              </div>
            </div>

            <!-- Customer Quotes Section -->
            <div class="mt-8 sm:mt-10">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 class="text-lg sm:text-xl font-bold text-gray-900">Customer Quotes</h2>
                  <p class="text-sm text-gray-600 mt-1">Recent quote requests from customers</p>
                </div>
                <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                  <span class="text-sm font-semibold text-gray-700">Total:</span>
                  <span class="text-lg font-bold text-blue-600">{{ quotes.length }}</span>
                </div>
              </div>

              <!-- Filters -->
              <div class="flex flex-wrap gap-2 mb-6">
                <button
                  @click="filterStatus = 'all'"
                  :class="[
                    'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                    filterStatus === 'all'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                  ]"
                >
                  All ({{ quotes.length }})
                </button>
                <button
                  @click="filterStatus = 'new'"
                  :class="[
                    'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                    filterStatus === 'new'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                  ]"
                >
                  New ({{ newCount }})
                </button>
                <button
                  @click="filterStatus = 'contacted'"
                  :class="[
                    'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                    filterStatus === 'contacted'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                  ]"
                >
                  Contacted ({{ contactedCount }})
                </button>
                <button
                  @click="filterStatus = 'completed'"
                  :class="[
                    'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                    filterStatus === 'completed'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                  ]"
                >
                  Completed ({{ completedCount }})
                </button>
              </div>

              <!-- Quotes Table -->
              <div class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div v-if="filteredQuotes.length === 0" class="p-8 text-center">
                  <div class="text-gray-400 mb-2">
                    <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p class="text-gray-600 font-medium">No quotes found</p>
                </div>

                <div v-else class="overflow-x-auto">
                  <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                        <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                        <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Contact No.</th>
                        <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Service</th>
                        <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                        <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                        <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      <tr v-for="quote in filteredQuotes" :key="quote.id" class="hover:bg-gray-50 transition-colors duration-200">
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="font-medium text-gray-900">{{ quote.firstName }} {{ quote.lastName }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-600">{{ quote.email }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-600">{{ quote.contactNo || 'N/A' }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-600 capitalize">{{ formatService(quote.service) }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <select
                            :value="quote.status"
                            @change="(e) => updateStatus(quote.id, e.target.value)"
                            :class="[
                              'px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer transition-all duration-200',
                              quote.status === 'new' ? 'bg-blue-100 text-blue-800' :
                              quote.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            ]"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-600">{{ formatDate(quote.createdAt) }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center gap-2">
                            <button
                              @click="viewQuote(quote)"
                              class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                              title="View details"
                            >
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            <button
                              @click="deleteQuote(quote.id)"
                              class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                              title="Delete quote"
                            >
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Quote Details Modal -->
              <div v-if="selectedQuote" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div class="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-auto border border-gray-200 shadow-2xl">
                  <div class="p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                    <div class="flex justify-between items-center">
                      <h3 class="text-lg font-bold text-gray-900">Quote Details</h3>
                      <button @click="selectedQuote = null" class="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="p-6 space-y-4">
                    <div>
                      <label class="text-xs font-semibold text-gray-600 uppercase">Name</label>
                      <p class="text-gray-900 font-medium mt-1">{{ selectedQuote.firstName }} {{ selectedQuote.lastName }}</p>
                    </div>

                    <div>
                      <label class="text-xs font-semibold text-gray-600 uppercase">Email</label>
                      <p class="text-gray-900 font-medium mt-1">{{ selectedQuote.email }}</p>
                    </div>

                    <div>
                      <label class="text-xs font-semibold text-gray-600 uppercase">Contact No.</label>
                      <p class="text-gray-900 font-medium mt-1">{{ selectedQuote.contactNo || 'N/A' }}</p>
                    </div>

                    <div>
                      <label class="text-xs font-semibold text-gray-600 uppercase">Service</label>
                      <p class="text-gray-900 font-medium mt-1 capitalize">{{ formatService(selectedQuote.service) }}</p>
                    </div>

                    <div>
                      <label class="text-xs font-semibold text-gray-600 uppercase">Status</label>
                      <p class="text-gray-900 font-medium mt-1 capitalize">{{ selectedQuote.status }}</p>
                    </div>

                    <div>
                      <label class="text-xs font-semibold text-gray-600 uppercase">Date Submitted</label>
                      <p class="text-gray-900 font-medium mt-1">{{ formatDate(selectedQuote.createdAt) }}</p>
                    </div>

                    <div>
                      <label class="text-xs font-semibold text-gray-600 uppercase">Message</label>
                      <p class="text-gray-900 mt-1 whitespace-pre-wrap break-words">{{ selectedQuote.message || 'No message provided' }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- Logout Confirmation Modal -->
  <div v-if="showLogoutConfirmation" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-sm max-h-[90vh] overflow-auto border border-gray-200 shadow-2xl">
      <div class="p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div class="flex justify-between items-center">
          <h3 class="text-lg sm:text-xl font-bold text-gray-900">Confirm Logout</h3>
          <button @click="showLogoutConfirmation = false" class="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900">
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>

      <div class="p-4 sm:p-6 text-center">
        <p class="text-sm sm:text-base text-gray-600 mb-6">Are you sure you want to log out of your admin session?</p>
        <div class="flex justify-center gap-4">
          <button @click="showLogoutConfirmation = false" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button @click="confirmLogout" class="bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" :disabled="isLoggingOut">
            <LoaderIcon v-if="isLoggingOut" class="animate-spin w-4 h-4 mr-2" />
            <span>{{ isLoggingOut ? 'Logging out...' : 'Logout' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showSetupGuide" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-auto border border-gray-200 shadow-2xl">
      <div class="p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div class="flex justify-between items-center">
          <h3 class="text-lg sm:text-xl font-bold text-gray-900">Setup Guide</h3>
          <button @click="showSetupGuide = false" class="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900">
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>

      <div class="p-4 sm:p-6">
        <div class="space-y-6">
          <div>
            <h4 class="text-base sm:text-lg font-bold text-gray-900 mb-2">1. Add Products</h4>
            <p class="text-sm sm:text-base text-gray-600 mb-4">Start by adding your paint products to the inventory.</p>
          </div>
          <div>
            <h4 class="text-base sm:text-lg font-bold text-gray-900 mb-2">2. Add Staff Members</h4>
            <p class="text-sm sm:text-base text-gray-600 mb-4">Create accounts for your staff members.</p>
          </div>
          <div>
            <h4 class="text-base sm:text-lg font-bold text-gray-900 mb-2">3. Configure System Settings</h4>
            <p class="text-sm sm:text-base text-gray-600 mb-4">Set up your store preferences and system settings.</p>
          </div>
        </div>

        <div class="mt-8 flex justify-end">
          <button @click="showSetupGuide = false" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors order-2 sm:order-1">
            Cancel
          </button>
          <button @click="confirmLogout" class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center order-1 sm:order-2" :disabled="isLoggingOut">
            <LoaderIcon v-if="isLoggingOut" class="animate-spin w-4 h-4 mr-2" />
            <span>{{ isLoggingOut ? 'Logging out...' : 'Got it!' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Add Product Modal -->
  <div v-if="showAddProductModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-auto border border-gray-200 shadow-2xl">
      <div class="p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div class="flex justify-between items-center">
          <h3 class="text-lg sm:text-xl font-bold text-gray-900">Add New Product</h3>
          <button @click="showAddProductModal = false" class="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900">
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
      <div class="p-4 sm:p-6">
        <p class="text-sm text-gray-600 mb-4">Navigate to Inventory to add new products with full details.</p>
        <router-link to="/admin/inventory" @click="showAddProductModal = false" class="w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white font-medium px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-block text-center">
          Go to Inventory
        </router-link>
      </div>
    </div>
  </div>

  <!-- Add Staff Modal -->
  <div v-if="showAddStaffModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-auto border border-gray-200 shadow-2xl">
      <div class="p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div class="flex justify-between items-center">
          <h3 class="text-lg sm:text-xl font-bold text-gray-900">Add New Staff</h3>
          <button @click="showAddStaffModal = false" class="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900">
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
      <div class="p-4 sm:p-6">
        <p class="text-sm text-gray-600 mb-4">Navigate to Staff Management to add new team members.</p>
        <router-link to="/admin/staff" @click="showAddStaffModal = false" class="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-block text-center">
          Go to Staff Management
        </router-link>
      </div>
    </div>
  </div>

  <!-- Add Sale Modal -->
  <AddSaleModal
    :modelValue="showAddSaleModal"
    @close="showAddSaleModal = false"
    @sale-added="handleSaleAdded"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
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
  Menu as MenuIcon,
  X as XIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  DollarSign as DollarSignIcon,
  ShoppingCart as ShoppingCartIcon,
  Loader as LoaderIcon,
  BarChart3 as BarChart3Icon,
  Plus as PlusIcon,
  Clock as ClockIcon,
  MessageSquare as MessageSquareIcon
} from 'lucide-vue-next'
import { collection, query, getDocs, orderBy, onSnapshot } from 'firebase/firestore'
import { db, auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'
import AddSaleModal from './AddSaleModal.vue'
import { quoteService } from '../../../services/quoteService'

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

// removed Performance Charts Section (Top Products and Revenue Summary)

const activeTab = ref('dashboard')

const quotes = ref([])
const selectedQuote = ref(null)
const filterStatus = ref('all')

const filteredQuotes = computed(() => {
  if (filterStatus.value === 'all') {
    return quotes.value
  }
  return quotes.value.filter(q => q.status === filterStatus.value)
})

const newCount = computed(() => quotes.value.filter(q => q.status === 'new').length)
const contactedCount = computed(() => quotes.value.filter(q => q.status === 'contacted').length)
const completedCount = computed(() => quotes.value.filter(q => q.status === 'completed').length)

const formatService = (service) => {
  const services = {
    'color-matching': 'Custom Color Matching',
    'consultation': 'House Color Consultation',
    'other': 'Other Services'
  }
  return services[service] || service
}

const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A'
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const viewQuote = (quote) => {
  selectedQuote.value = quote
}

const updateStatus = async (id, status) => {
  const result = await quoteService.updateQuoteStatus(id, status)
  if (result.success) {
    const quote = quotes.value.find(q => q.id === id)
    if (quote) {
      quote.status = status
    }
  }
}

const deleteQuote = async (id) => {
  if (confirm('Are you sure you want to delete this quote?')) {
    const result = await quoteService.deleteQuote(id)
    if (result.success) {
      quotes.value = quotes.value.filter(q => q.id !== id)
      selectedQuote.value = null
    }
  }
}

const loadQuotes = async () => {
  const data = await quoteService.getAllQuotes()
  quotes.value = data
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

const handleLogout = () => {
  showLogoutConfirmation.value = true
}

const confirmLogout = async () => {
  try {
    isLoggingOut.value = true
    await signOut(auth)
    router.push('/system')
  } catch (error) {
    console.error('Error signing out:', error)
  } finally {
    isLoggingOut.value = false
    showLogoutConfirmation.value = false
  }
}

const showAddSaleModal = ref(false)
const handleSaleAdded = () => {
  showAddSaleModal.value = false
}

const setupSalesListener = () => {
  const salesRef = collection(db, 'sales')
  const salesQuery = query(salesRef, orderBy('date', 'desc'))

  onSnapshot(salesQuery, (snapshot) => {
    const allSales = []
    let salesTotal = 0
    let ordersCount = 0

    // Removed todayRevenue, weekRevenue, monthRevenue as these were part of the removed section

    snapshot.forEach((doc) => {
      const data = doc.data()
      const saleAmount = Number(data.total) || 0
      const saleDate = data.date?.toDate ? data.date.toDate() : new Date(data.date)

      const sale = {
        id: doc.id,
        ...data,
        date: saleDate,
        total: saleAmount
      }

      allSales.push(sale)
      salesTotal += saleAmount
      ordersCount++
    })

    totalSales.value = salesTotal
    totalOrders.value = ordersCount

    // Removed calls to calculateLast7DaysSales, calculateTopProducts, calculatePeakHours
  })
}

const fetchProductCount = async () => {
  try {
    const productsRef = collection(db, 'products')
    const q = query(productsRef)
    const querySnapshot = await getDocs(q)
    totalProducts.value = querySnapshot.size
  } catch (err) {
    console.error('Error fetching product count:', err)
  }
}

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

const fetchUserInfo = () => {
  const user = auth.currentUser
  if (user) {
    userEmail.value = user.email || ''
    userDisplayName.value = user.displayName || 'Admin'
  }
}

onMounted(() => {
  fetchProductCount()
  fetchStaffCount()
  fetchUserInfo()
  setupSalesListener()
  loadQuotes()
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
</style>
