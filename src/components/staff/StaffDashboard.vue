<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50/95 via-white to-emerald-50/40 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[min(90vw,520px)] h-[min(90vw,520px)] bg-gradient-to-br from-emerald-300/25 via-teal-200/20 to-cyan-100/15 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[min(70vw,440px)] h-[min(70vw,440px)] bg-gradient-to-tr from-teal-200/20 to-emerald-100/15 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(16,185,129,0.06),transparent)] pointer-events-none"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Sidebar - same size/structure as Admin Inventory -->
      <aside class="w-64 bg-white/98 backdrop-blur-xl border-r border-gray-200/80 hidden lg:flex lg:flex-col shadow-lg shadow-gray-200/30">
        <!-- Logo/Brand -->
        <div class="p-4 xl:p-5 border-b border-gray-100 flex-shrink-0">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/20 flex-shrink-0">
              <LayoutDashboardIcon class="w-4 h-4 text-white" />
            </div>
            <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight tracking-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2.5 text-xs text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-2.5 xl:px-3 py-1.5 rounded-lg inline-flex items-center shadow-md shadow-emerald-500/25 font-medium">
            <UserIcon class="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            Staff Portal
          </div>
        </div>

        <!-- Navigation - Scrollable Area (colored per function) -->
        <nav class="flex-1 p-3 xl:p-4 space-y-1 xl:space-y-2 overflow-y-auto">
          <router-link
            to="/staff/dashboard"
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base"
            :class="$route.path === '/staff/dashboard'
              ? 'text-blue-700 bg-blue-100 shadow-sm border-l-4 border-blue-500'
              : 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'"
          >
            <LayoutDashboardIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Dashboard</span>
          </router-link>
          <router-link
            to="/staff/inventory"
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base"
            :class="$route.path === '/staff/inventory'
              ? 'text-purple-600 bg-purple-50 border border-purple-200 shadow-sm'
              : 'text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700'"
          >
            <PackageIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Inventory</span>
          </router-link>
          <router-link
            to="/staff/paint-mixing"
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base"
            :class="$route.path === '/staff/paint-mixing'
              ? 'text-pink-600 bg-pink-50 border border-pink-200 shadow-sm'
              : 'text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700'"
          >
            <PaletteIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Paint Mixing</span>
          </router-link>
          <router-link
            to="/staff/house-paint-recommender"
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base"
            :class="$route.path === '/staff/house-paint-recommender'
              ? 'text-orange-600 bg-orange-50 border border-orange-200 shadow-sm'
              : 'text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700'"
          >
            <HomeIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">House Paint Recommender</span>
          </router-link>
          <router-link
            to="/staff/sales-analytics"
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base"
            :class="$route.path === '/staff/sales-analytics'
              ? 'text-teal-600 bg-teal-50 border border-teal-200 shadow-sm'
              : 'text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700'"
          >
            <TrendingUpIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Sales Analytics</span>
          </router-link>
          <router-link
            to="/staff/settings"
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base"
            :class="$route.path === '/staff/settings'
              ? 'text-green-600 bg-green-50 border border-green-200 shadow-sm'
              : 'text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700'"
          >
            <SettingsIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Settings</span>
          </router-link>
          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-3 xl:p-4 border-t border-gray-200 bg-gradient-to-r from-emerald-50/95 to-teal-50/95 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-2 xl:gap-3">
            <div class="w-8 xl:w-10 h-8 xl:h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 flex-shrink-0">
              <UserIcon class="w-4 xl:w-5 h-4 xl:h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs xl:text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'staff@example.com' }}</p>
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

      <!-- Mobile Sidebar Toggle - same as Admin Inventory -->
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

      <!-- Mobile Sidebar - same size/structure as Admin Inventory -->
      <aside
        v-if="mobileSidebarOpen"
        class="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 z-30 lg:hidden shadow-2xl flex flex-col"
      >
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <UserIcon class="h-3 w-3 mr-1" />
            Staff Portal
          </div>
        </div>
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link to="/staff/dashboard" class="flex items-center space-x-3 p-4 rounded-xl font-medium transition-all duration-200" :class="$route.path === '/staff/dashboard' ? 'text-blue-700 bg-blue-100 border-l-4 border-blue-500 shadow-lg' : 'text-blue-600 bg-blue-50 hover:bg-blue-100'" @click="mobileSidebarOpen = false">
            <LayoutDashboardIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base" :class="{ 'font-semibold': $route.path === '/staff/dashboard' }">Dashboard</span>
          </router-link>
          <router-link to="/staff/inventory" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-purple-600 bg-purple-50 hover:bg-purple-100" :class="{ 'shadow-lg border border-purple-200': $route.path === '/staff/inventory' }" @click="mobileSidebarOpen = false">
            <PackageIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Inventory</span>
          </router-link>
          <router-link to="/staff/paint-mixing" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-pink-600 bg-pink-50 hover:bg-pink-100" :class="{ 'shadow-lg border border-pink-200': $route.path === '/staff/paint-mixing' }" @click="mobileSidebarOpen = false">
            <PaletteIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Paint Mixing</span>
          </router-link>
          <router-link to="/staff/house-paint-recommender" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-orange-600 bg-orange-50 hover:bg-orange-100" :class="{ 'shadow-lg border border-orange-200': $route.path === '/staff/house-paint-recommender' }" @click="mobileSidebarOpen = false">
            <HomeIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">House Paint Recommender</span>
          </router-link>
          <router-link to="/staff/sales-analytics" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-teal-600 bg-teal-50 hover:bg-teal-100" :class="{ 'shadow-lg border border-teal-200': $route.path === '/staff/sales-analytics' }" @click="mobileSidebarOpen = false">
            <TrendingUpIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Sales Analytics</span>
          </router-link>
          <router-link to="/staff/settings" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-green-600 bg-green-50 hover:bg-green-100" :class="{ 'shadow-lg border border-green-200': $route.path === '/staff/settings' }" @click="mobileSidebarOpen = false">
            <SettingsIcon class="w-6 h-6 flex-shrink-0" />
            <span class="text-base">Settings</span>
          </router-link>
          <div class="h-4"></div>
        </nav>
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-emerald-50 to-teal-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg flex-shrink-0">
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
        <!-- Header - same size/structure as Admin Inventory -->
        <header class="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-gray-200/90 shadow-sm">
          <div class="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-b-full"></div>
          <div class="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="pl-14 sm:pl-16 lg:pl-0 flex items-center gap-3">
                <div class="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 items-center justify-center shadow-lg shadow-emerald-500/20 flex-shrink-0">
                  <LayoutDashboardIcon class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Staff Dashboard</h1>
                  <p class="text-sm text-gray-500 mt-0.5">Welcome back, {{ userDisplayName || 'Staff' }}</p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100/90 text-gray-700 text-sm border border-gray-200/60">
                  <CalendarIcon class="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span class="truncate font-medium">{{ currentDate }}</span>
                </div>
                <div class="hidden sm:block h-8 w-px bg-gray-200"></div>
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 text-gray-800 text-sm border border-emerald-200/60">
                  <span class="font-medium truncate">Welcome, {{ userDisplayName || 'Staff' }}</span>
                  <div class="relative">
                    <BellIcon class="w-4 h-4 text-emerald-500 cursor-pointer hover:text-emerald-600 flex-shrink-0" />
                    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- Dashboard Content -->
        <div class="p-5 md:p-6 lg:p-8">
          <!-- Quick Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <!-- Total Products -->
            <div class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-violet-100/80 shadow-lg shadow-violet-500/5 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none"></div>
              <div class="h-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"></div>
              <div class="relative p-4 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform duration-200 shrink-0">
                    <PackageIcon class="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Products</p>
                    <p class="text-xl font-black text-slate-900 tabular-nums">{{ inventoryStats.totalProducts }}</p>
                  </div>
                </div>
                <div v-if="inventoryStats.totalProducts === 0" class="flex items-center gap-1.5 text-slate-500 bg-slate-100/80 px-2.5 py-1.5 rounded-xl text-xs font-medium shrink-0">
                  <InfoIcon class="w-3.5 h-3.5" />
                  <span>No items</span>
                </div>
                <div v-else class="flex items-center gap-1.5 text-violet-700 bg-violet-50 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-violet-100 shrink-0">
                  <InfoIcon class="w-3.5 h-3.5" />
                  <span>{{ inventoryStats.categories }} cat.</span>
                </div>
              </div>
            </div>

            <!-- Orders -->
            <div class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-emerald-100/80 shadow-lg shadow-emerald-500/5 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
              <div class="h-1.5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
              <div class="relative p-4 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform duration-200 shrink-0">
                    <ShoppingCartIcon class="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Orders Today</p>
                    <p class="text-xl font-black text-slate-900 tabular-nums">{{ salesStats.today }}</p>
                  </div>
                </div>
                <div v-if="salesStats.today === 0" class="flex items-center gap-1.5 text-slate-500 bg-slate-100/80 px-2.5 py-1.5 rounded-xl text-xs font-medium shrink-0">
                  <InfoIcon class="w-3.5 h-3.5" />
                  <span>No orders</span>
                </div>
                <div v-else class="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-emerald-100 shrink-0">
                  <CheckCircleIcon class="w-3.5 h-3.5" />
                  <span>Active</span>
                </div>
              </div>
            </div>

            <!-- System Status -->
            <div class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-100/80 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
              <div class="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500"></div>
              <div class="relative p-4">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                    <ActivityIcon class="w-5 h-5 text-white" />
                  </div>
                  <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">System Status</p>
                </div>
                <div class="flex flex-wrap gap-x-4 gap-y-2">
                  <div class="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-slate-50/80">
                    <span class="h-2 w-2 rounded-full shrink-0 ring-2 ring-white shadow" :class="systemStatus.inventory ? 'bg-emerald-500' : 'bg-red-500'"></span>
                    <span :class="systemStatus.inventory ? 'text-emerald-700' : 'text-red-700'" class="text-xs font-bold">Inventory</span>
                  </div>
                  <div class="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-slate-50/80">
                    <span class="h-2 w-2 rounded-full shrink-0 ring-2 ring-white shadow" :class="systemStatus.paintMixing ? 'bg-emerald-500' : 'bg-red-500'"></span>
                    <span :class="systemStatus.paintMixing ? 'text-emerald-700' : 'text-red-700'" class="text-xs font-bold">Mixing</span>
                  </div>
                  <div class="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-slate-50/80">
                    <span class="h-2 w-2 rounded-full shrink-0 ring-2 ring-white shadow" :class="systemStatus.recommender ? 'bg-emerald-500' : 'bg-red-500'"></span>
                    <span :class="systemStatus.recommender ? 'text-emerald-700' : 'text-red-700'" class="text-xs font-bold">Recommender</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="h-0.5 flex-1 max-w-[60px] rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              <h2 class="text-lg font-bold text-slate-900 tracking-tight">Quick Actions</h2>
              <div class="h-0.5 flex-1 rounded-full bg-gradient-to-l from-emerald-400 to-teal-400"></div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <router-link
                to="/staff/inventory"
                class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-violet-500/15 hover:border-violet-200 hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center text-center overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div class="relative w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25 mb-2 group-hover:scale-110 group-hover:shadow-violet-500/40 transition-all duration-200">
                  <PackageIcon class="w-5 h-5 text-white" />
                </div>
                <p class="relative text-sm font-bold text-slate-900">Inventory</p>
                <p class="relative text-xs text-slate-500 mt-0.5">{{ inventoryStats.totalProducts }} items</p>
              </router-link>
              <router-link
                to="/staff/paint-mixing"
                class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-pink-500/15 hover:border-pink-200 hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center text-center overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div class="relative w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-500/25 mb-2 group-hover:scale-110 group-hover:shadow-pink-500/40 transition-all duration-200">
                  <PaletteIcon class="w-5 h-5 text-white" />
                </div>
                <p class="relative text-sm font-bold text-slate-900">Paint Mix</p>
                <p class="relative text-xs text-slate-500 mt-0.5">Color mixing</p>
              </router-link>
              <router-link
                to="/staff/house-paint-recommender"
                class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-amber-500/15 hover:border-amber-200 hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center text-center overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div class="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25 mb-2 group-hover:scale-110 group-hover:shadow-amber-500/40 transition-all duration-200">
                  <HomeIcon class="w-5 h-5 text-white" />
                </div>
                <p class="relative text-sm font-bold text-slate-900">Recommender</p>
                <p class="relative text-xs text-slate-500 mt-0.5">Paint advisor</p>
              </router-link>
              <router-link
                to="/staff/sales-analytics"
                class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-teal-500/15 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center text-center overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div class="relative w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/25 mb-2 group-hover:scale-110 group-hover:shadow-teal-500/40 transition-all duration-200">
                  <TrendingUpIcon class="w-5 h-5 text-white" />
                </div>
                <p class="relative text-sm font-bold text-slate-900">Analytics</p>
                <p class="relative text-xs text-slate-500 mt-0.5">Sales data</p>
              </router-link>
              <router-link
                to="/staff/settings"
                class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-slate-400/10 hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center text-center overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div class="relative w-11 h-11 rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center shadow-lg shadow-slate-500/20 mb-2 group-hover:scale-110 transition-all duration-200">
                  <SettingsIcon class="w-5 h-5 text-white" />
                </div>
                <p class="relative text-sm font-bold text-slate-900">Settings</p>
                <p class="relative text-xs text-slate-500 mt-0.5">Preferences</p>
              </router-link>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Logout Confirmation Modal -->
    <div v-if="showLogoutConfirmation" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl w-full max-w-sm border border-slate-200/80 shadow-2xl shadow-slate-900/20 p-6 overflow-hidden">
        <div class="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-t-2xl -mx-6 -mt-6 mb-4"></div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Confirm Logout</h3>
        <p class="text-slate-600 text-sm mb-5">Are you sure you want to log out of your account?</p>
        <div class="flex justify-end gap-3">
          <button
            @click="showLogoutConfirmation = false"
            class="px-4 py-2.5 bg-slate-100 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-200 transition-colors"
          >
            Cancel
          </button>
          <button
            @click="confirmLogout"
            class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 disabled:opacity-60"
            :disabled="isLoggingOut"
          >
            <LoaderIcon v-if="isLoggingOut" class="animate-spin w-4 h-4" />
            <span>{{ isLoggingOut ? 'Logging out...' : 'Logout' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  LayoutDashboard as LayoutDashboardIcon,
  Package as PackageIcon,
  Palette as PaletteIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  Info as InfoIcon,
  Clock as ClockIcon,
  Settings as SettingsIcon,
  Home as HomeIcon,
  RefreshCw as RefreshCwIcon,
  Plus as PlusIcon,
  Filter as FilterIcon,
  Activity as ActivityIcon,
  AlertTriangle as AlertTriangleIcon,
  XCircle as XCircleIcon,
  BarChart3 as BarChart3Icon,
  History as HistoryIcon,
  PlusCircle as PlusCircleIcon,
  MinusCircle as MinusCircleIcon,
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  ShoppingCart as ShoppingCartIcon,
  DollarSign as DollarSignIcon,
  Loader as LoaderIcon,
  Menu as MenuIcon,
  X as XIcon
} from 'lucide-vue-next'

import { 
  collection, 
  getDocs, 
  query, 
  where,
  orderBy, 
  limit, 
  onSnapshot,
  Timestamp 
} from 'firebase/firestore'
import { db, auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'

const router = useRouter()
const mobileSidebarOpen = ref(false)
const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// User information
const userEmail = ref('')
const userDisplayName = ref('')

// Logout state
const showLogoutConfirmation = ref(false)
const isLoggingOut = ref(false)

// Inventory statistics
const inventoryStats = ref({
  totalProducts: 0,
  lowStock: 0,
  outOfStock: 0,
  totalValue: 0,
  categories: 0
})

// Orders statistics (today only - resets daily)
const salesStats = ref({
  today: 0,
  todayValue: 0,
  total: 0,
  pending: 0,
  completed: 0,
  totalValue: 0,
  thisMonth: 0
})

// Paint Mixing statistics
const paintMixingStats = ref({
  total: 0,
  pending: 0,
  byStaff: 0,
  byAdmin: 0,
  thisWeek: 0,
  thisMonth: 0
})

// House Paint Recommender statistics
const recommenderStats = ref({
  total: 0,
  byStaff: 0,
  byAdmin: 0,
  thisWeek: 0,
  thisMonth: 0,
  popularColor: ''
})

// System status
const systemStatus = ref({
  inventory: true,
  paintMixing: true,
  recommender: true
})

// Firestore unsubscribe functions
let unsubscribeInventory = null
let unsubscribePaintMixing = null
let unsubscribeRecommender = null
let unsubscribeSales = null

// Interval for checking date change (to reset orders at midnight)
let dateCheckInterval = null

// Format currency
const formatCurrency = (value) => {
  return value.toLocaleString('en-PH')
}

// Get current user info
const fetchUserInfo = () => {
  const user = auth.currentUser
  if (user) {
    userEmail.value = user.email || ''
    userDisplayName.value = user.displayName || 'Staff User'
  }
}

// Fetch inventory data with real-time updates
const fetchInventoryData = async () => {
  try {
    if (!db) return
    
    console.log("Setting up real-time listener for products collection")
    
    // Create a query for the products collection
    const productsRef = collection(db, 'products')
    const q = query(productsRef)
    
    // Set up real-time listener for products
    if (unsubscribeInventory) {
      unsubscribeInventory()
    }
    
    unsubscribeInventory = onSnapshot(q, (snapshot) => {
      console.log(`Received ${snapshot.docs.length} products from Firestore`)
      
      let totalProducts = snapshot.size
      let lowStock = 0
      let outOfStock = 0
      let totalValue = 0
      const categories = new Set()
      
      snapshot.forEach(doc => {
        const product = doc.data()
        // Check both stock and stockLevel fields for compatibility with Admin Inventory
        const stockLevel = product.stock !== undefined ? Number(product.stock) : 
                         product.stockLevel !== undefined ? Number(product.stockLevel) : 0
        const price = Number(product.price) || 0
        
        if (product.category) {
          categories.add(product.category)
        }
        
        totalValue += stockLevel * price
        
        if (stockLevel === 0) {
          outOfStock++
        } else if (stockLevel <= 10) {
          lowStock++
        }
      })
      
      inventoryStats.value = {
        totalProducts,
        lowStock,
        outOfStock,
        totalValue,
        categories: categories.size
      }
      
      // Update system status based on data availability
      systemStatus.value.inventory = true
      
      console.log("Updated inventory stats:", inventoryStats.value)
    }, (error) => {
      console.error('Error listening to inventory changes:', error)
      systemStatus.value.inventory = false
    })
    
  } catch (error) {
    console.error('Error fetching inventory data:', error)
    systemStatus.value.inventory = false
  }
}

// Fetch orders data (today only - resets daily, counts from both admin and staff)
const fetchSalesData = async () => {
  try {
    if (!db) return
    
    console.log("Setting up real-time listener for orders (sales collection)")
    
    const salesRef = collection(db, 'sales')
    
    // Query all sales and filter in memory (more reliable than date range queries)
    // This matches the pattern used in Staff Sales Analytics
    const allSalesQuery = query(
      salesRef,
      orderBy('date', 'desc')
    )
    
    // Set up real-time listener for all sales (we'll filter for today in memory)
    if (unsubscribeSales) {
      unsubscribeSales()
    }
    
    unsubscribeSales = onSnapshot(allSalesQuery, (snapshot) => {
      console.log(`Received ${snapshot.docs.length} total orders from query`)
      
      // Calculate today's date range INSIDE the callback so it always uses current date
      // This ensures automatic reset at midnight even if page is kept open
      const now = new Date()
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)
      
      let todayCount = 0
      let todayValue = 0
      let totalCount = 0
      let totalValue = 0
      let pendingCount = 0
      let thisMonthCount = 0
      
      // Get one month ago for this month calculation
      const oneMonthAgo = new Date()
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
      
      snapshot.forEach(doc => {
        const sale = doc.data()
        
        // Convert Firestore timestamp to JS Date
        let saleDate = sale.date
        if (saleDate && typeof saleDate.toDate === 'function') {
          saleDate = saleDate.toDate()
        } else if (!saleDate) {
          saleDate = new Date() // Default to current date if missing
        }
        
        const saleTotal = Number(sale.total) || 0
        const saleStatus = sale.status || 'completed'
        
        // Count all completed orders
        if (saleStatus === 'completed') {
          totalCount++
          totalValue += saleTotal
          
          // Count today's orders (resets daily - date range recalculated each time)
          if (saleDate >= startOfDay && saleDate <= endOfDay) {
            todayCount++
            todayValue += saleTotal
            console.log(`Today's order: ${sale.orderId || doc.id}, Total: ₱${saleTotal}`)
          }
          
          // Count this month's orders
          if (saleDate >= oneMonthAgo) {
            thisMonthCount++
          }
        } else if (saleStatus === 'pending') {
          pendingCount++
        }
      })
      
      // Update stats
      salesStats.value = {
        today: todayCount,
        todayValue: todayValue,
        total: totalCount,
        pending: pendingCount,
        completed: totalCount,
        totalValue: totalValue,
        thisMonth: thisMonthCount
      }
      
      console.log(`Today's orders: ${todayCount}, Today's value: ₱${todayValue}`)
      console.log(`Total orders: ${totalCount}, Total value: ₱${totalValue}`)
    }, (error) => {
      console.error('Error listening to orders changes:', error)
    })
    
  } catch (error) {
    console.error('Error fetching orders data:', error)
  }
}

// Fetch paint mixing data - UPDATED to use paintMixtures collection
const fetchPaintMixingData = async () => {
  try {
    if (!db) return
    
    console.log("Fetching paint mixing data from paintMixtures collection")
    
    // Use the paintMixtures collection instead of paintMixingRequests
    const mixturesRef = collection(db, 'paintMixtures')
    
    // Get all paint mixtures
    const allMixturesQuery = query(mixturesRef)
    const allSnapshot = await getDocs(allMixturesQuery)
    
    // Get mixtures created by staff
    const staffMixturesQuery = query(mixturesRef, where('createdBy', '==', 'staff'))
    const staffSnapshot = await getDocs(staffMixturesQuery)
    
    // Get mixtures created by admin
    const adminMixturesQuery = query(mixturesRef, where('createdBy', '==', 'admin'))
    const adminSnapshot = await getDocs(adminMixturesQuery)
    
    // Get mixtures created this week
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const oneWeekAgoTimestamp = Timestamp.fromDate(oneWeekAgo)
    
    const thisWeekQuery = query(
      mixturesRef, 
      where('date', '>=', oneWeekAgoTimestamp)
    )
    const thisWeekSnapshot = await getDocs(thisWeekQuery)
    
    // Get mixtures created this month
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
    const oneMonthAgoTimestamp = Timestamp.fromDate(oneMonthAgo)
    
    const thisMonthQuery = query(
      mixturesRef, 
      where('date', '>=', oneMonthAgoTimestamp)
    )
    const thisMonthSnapshot = await getDocs(thisMonthQuery)
    
    paintMixingStats.value = {
      total: allSnapshot.size,
      pending: 0, // Not applicable for mixtures
      byStaff: staffSnapshot.size,
      byAdmin: adminSnapshot.size,
      thisWeek: thisWeekSnapshot.size,
      thisMonth: thisMonthSnapshot.size
    }
    
    console.log("Updated paint mixing stats:", paintMixingStats.value)
    
    // Update system status based on data availability
    systemStatus.value.paintMixing = true
    
  } catch (error) {
    console.error('Error fetching paint mixing data:', error)
    systemStatus.value.paintMixing = false
  }
}

// Fetch house paint recommender data
const fetchRecommenderData = async () => {
  try {
    if (!db) return
    
    const recommenderRef = collection(db, 'paintRecommendations')
    
    // Get all recommendations
    const allSnapshot = await getDocs(query(recommenderRef))
    
    // Get recommendations by staff
    const staffSnapshot = await getDocs(query(recommenderRef, where('createdBy', '==', 'staff')))
    
    // Get recommendations by admin
    const adminSnapshot = await getDocs(query(recommenderRef, where('createdBy', '==', 'admin')))
    
    // Get recommendations from this week
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const oneWeekAgoTimestamp = Timestamp.fromDate(oneWeekAgo)
    
    const thisWeekSnapshot = await getDocs(query(
      recommenderRef, 
      where('createdAt', '>=', oneWeekAgoTimestamp)
    ))
    
    // Get recommendations from this month
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
    const oneMonthAgoTimestamp = Timestamp.fromDate(oneMonthAgo)
    
    const thisMonthSnapshot = await getDocs(query(
      recommenderRef, 
      where('createdAt', '>=', oneMonthAgoTimestamp)
    ))
    
    recommenderStats.value = {
      total: allSnapshot.size,
      byStaff: staffSnapshot.size,
      byAdmin: adminSnapshot.size,
      thisWeek: thisWeekSnapshot.size,
      thisMonth: thisMonthSnapshot.size
    }
    
    // Update system status based on data availability
    systemStatus.value.recommender = true
    
  } catch (error) {
    console.error('Error fetching recommender data:', error)
    systemStatus.value.recommender = false
  }
}

// Check system status
const checkSystemStatus = async () => {
  try {
    // Check if we can connect to Firestore
    if (!db) {
      systemStatus.value = {
        inventory: false,
        paintMixing: false,
        recommender: false
      }
      return
    }
    
    // Try to fetch data from each collection to check status
    await fetchInventoryData()
    await fetchPaintMixingData()
    await fetchRecommenderData()
    
  } catch (error) {
    console.error('Error checking system status:', error)
    systemStatus.value = {
      inventory: false,
      paintMixing: false,
      recommender: false
    }
  }
}

// Set up real-time listener for sales
// setupSalesListener is no longer needed - fetchSalesData now sets up its own real-time listener

// Set up real-time listener for paint mixing - UPDATED to use paintMixtures collection
const setupPaintMixingListener = () => {
  if (!db) return null
  try {
    console.log("Setting up real-time listener for paintMixtures collection")
    
    // Use the paintMixtures collection instead of paintMixingRequests
    const mixturesRef = collection(db, 'paintMixtures')
    
    return onSnapshot(mixturesRef, async () => {
      await fetchPaintMixingData()
    }, (error) => {
      console.error('Error listening to paint mixing changes:', error)
      systemStatus.value.paintMixing = false
    })
  } catch (error) {
    console.error('Error setting up paint mixing listener:', error)
    systemStatus.value.paintMixing = false
    return null
  }
}

// Set up real-time listener for recommender
const setupRecommenderListener = () => {
  if (!db) return null
  
  try {
    const recommenderRef = collection(db, 'paintRecommendations')
    
    return onSnapshot(recommenderRef, async () => {
      await fetchRecommenderData()
    }, (error) => {
      console.error('Error listening to recommender changes:', error)
      systemStatus.value.recommender = false
    })
  } catch (error) {
    console.error('Error setting up recommender listener:', error)
    systemStatus.value.recommender = false
    return null
  }
}

// Set up real-time listener for inventory
const setupInventoryListener = () => {
  if (!db) return null
  
  try {
    const productsRef = collection(db, 'products')
    
    return onSnapshot(productsRef, async () => {
      await fetchInventoryData()
    }, (error) => {
      console.error('Error listening to inventory changes:', error)
      systemStatus.value.inventory = false
    })
  } catch (error) {
    console.error('Error setting up inventory listener:', error)
    systemStatus.value.inventory = false
    return null
  }
}

// Toggle mobile sidebar
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
    
    router.push('/system')
  } catch (error) {
    console.error('Error signing out:', error)
  } finally {
    isLoggingOut.value = false
    showLogoutConfirmation.value = false
  }
}

// Initialize data on component mount
onMounted(async () => {
  // Check system status
  await checkSystemStatus()
  
  // Fetch user info
  fetchUserInfo()
  
  // Fetch initial data
  await fetchInventoryData()
  await fetchPaintMixingData()
  await fetchRecommenderData()
  await fetchSalesData()
  
  // Set up real-time listeners
  unsubscribeInventory = setupInventoryListener()
  unsubscribePaintMixing = setupPaintMixingListener()
  unsubscribeRecommender = setupRecommenderListener()
  // fetchSalesData now sets up its own real-time listener, so no need for setupSalesListener
  
  // Set up interval to check if date has changed (for automatic reset at midnight)
  // Check every minute to see if we've crossed into a new day
  let lastCheckedDate = new Date().toDateString()
  dateCheckInterval = setInterval(() => {
    const currentDate = new Date().toDateString()
    if (currentDate !== lastCheckedDate) {
      console.log('Date changed! Resetting orders count for new day.')
      lastCheckedDate = currentDate
      // Re-fetch sales data to recalculate with new date range
      fetchSalesData()
    }
  }, 60000) // Check every minute
})

// Clean up on component unmount
onUnmounted(() => {
  // Unsubscribe from Firestore listeners
  if (unsubscribeInventory) {
    unsubscribeInventory()
  }
  
  if (unsubscribePaintMixing) {
    unsubscribePaintMixing()
  }
  
  if (unsubscribeRecommender) {
    unsubscribeRecommender()
  }
  
  if (unsubscribeSales) {
    unsubscribeSales()
  }
  
  // Clear date check interval
  if (dateCheckInterval) {
    clearInterval(dateCheckInterval)
  }
})
</script>

<style scoped>
/* Custom scrollbar - staff theme */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #10b981, #14b8a6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #059669, #0d9488);
}
</style>