<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50/95 via-white to-purple-50/30 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[min(90vw,520px)] h-[min(90vw,520px)] bg-gradient-to-br from-purple-300/20 via-violet-200/15 to-fuchsia-100/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[min(70vw,440px)] h-[min(70vw,440px)] bg-gradient-to-tr from-violet-200/15 to-purple-100/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.06),transparent)] pointer-events-none"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Sidebar - match Staff Dashboard / Admin Inventory -->
      <aside class="w-64 bg-white/98 backdrop-blur-xl border-r border-gray-200/80 hidden lg:flex lg:flex-col shadow-lg shadow-gray-200/30">
        <div class="p-4 xl:p-5 border-b border-gray-100 flex-shrink-0">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-md shadow-purple-500/20 flex-shrink-0">
              <PackageIcon class="w-4 h-4 text-white" />
            </div>
            <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight tracking-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2.5 text-xs text-white bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-600 px-2.5 xl:px-3 py-1.5 rounded-lg inline-flex items-center shadow-md shadow-purple-500/25 font-medium">
            <UserIcon class="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            Staff Portal
          </div>
        </div>
        <nav class="flex-1 p-3 xl:p-4 space-y-1 xl:space-y-2 overflow-y-auto">
          <router-link to="/staff/dashboard" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">
            <LayoutDashboardIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Dashboard</span>
          </router-link>
          <router-link to="/staff/inventory" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-purple-700 bg-purple-100 shadow-sm border-l-4 border-purple-500">
            <PackageIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Inventory</span>
          </router-link>
          <router-link to="/staff/paint-mixing" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700">
            <PaletteIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Paint Mixing</span>
          </router-link>
          <router-link to="/staff/house-paint-recommender" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700">
            <HomeIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">House Paint Recommender</span>
          </router-link>
          <router-link to="/staff/sales-analytics" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700">
            <TrendingUpIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Sales Analytics</span>
          </router-link>
          <router-link to="/staff/settings" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700">
            <SettingsIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Settings</span>
          </router-link>
          <div class="h-4"></div>
        </nav>
        <div class="p-3 xl:p-4 border-t border-gray-200 bg-gradient-to-r from-purple-50/95 to-fuchsia-50/95 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-2 xl:gap-3">
            <div class="w-8 xl:w-10 h-8 xl:h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-500/25 flex-shrink-0">
              <UserIcon class="w-4 xl:w-5 h-4 xl:h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs xl:text-sm font-medium text-gray-900 truncate">Staff User</p>
              <p class="text-xs text-gray-600 truncate">staff@example.com</p>
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
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-purple-500 to-fuchsia-600 px-3 py-1.5 rounded-lg inline-flex items-center font-medium">
            <UserIcon class="h-3.5 w-3.5 mr-1.5" />
            Staff Portal
          </div>
        </div>
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link to="/staff/dashboard" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-blue-600 bg-blue-50 hover:bg-blue-100" @click="mobileSidebarOpen = false">
            <LayoutDashboardIcon class="w-6 h-6" />
            <span class="text-base">Dashboard</span>
          </router-link>
          <router-link to="/staff/inventory" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-purple-700 bg-purple-100 border-l-4 border-purple-500 shadow-sm" @click="mobileSidebarOpen = false">
            <PackageIcon class="w-6 h-6" />
            <span class="text-base font-semibold">Inventory</span>
          </router-link>
          <router-link to="/staff/paint-mixing" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-pink-600 bg-pink-50 hover:bg-pink-100" @click="mobileSidebarOpen = false">
            <PaletteIcon class="w-6 h-6" />
            <span class="text-base">Paint Mixing</span>
          </router-link>
          <router-link to="/staff/house-paint-recommender" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-orange-600 bg-orange-50 hover:bg-orange-100" @click="mobileSidebarOpen = false">
            <HomeIcon class="w-6 h-6" />
            <span class="text-base">House Paint Recommender</span>
          </router-link>
          <router-link to="/staff/sales-analytics" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-teal-600 bg-teal-50 hover:bg-teal-100" @click="mobileSidebarOpen = false">
            <TrendingUpIcon class="w-6 h-6" />
            <span class="text-base">Sales Analytics</span>
          </router-link>
          <router-link to="/staff/settings" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-green-600 bg-green-50 hover:bg-green-100" @click="mobileSidebarOpen = false">
            <SettingsIcon class="w-6 h-6" />
            <span class="text-base">Settings</span>
          </router-link>
          <div class="h-4"></div>
        </nav>
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-purple-50 to-fuchsia-50 flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <UserIcon class="w-6 h-6 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Staff User</p>
              <p class="text-xs text-gray-600 truncate">staff@example.com</p>
            </div>
            <button @click="handleLogout" class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0" title="Logout">
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Header - match Staff Dashboard style -->
        <header class="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-gray-200/90 shadow-sm">
          <div class="h-1 w-full bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 rounded-b-full"></div>
          <div class="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="pl-14 sm:pl-16 lg:pl-0 flex items-center gap-3">
                <div class="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 items-center justify-center shadow-lg shadow-purple-500/20 flex-shrink-0">
                  <PackageIcon class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Inventory Management</h1>
                  <p class="text-sm text-gray-500 mt-0.5">View and manage product inventory</p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100/90 text-gray-700 text-sm border border-gray-200/60">
                  <CalendarIcon class="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span class="truncate font-medium">{{ currentDate }}</span>
                </div>
                <div class="hidden sm:block h-8 w-px bg-gray-200"></div>
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-50 to-fuchsia-50 text-gray-800 text-sm border border-purple-200/60">
                  <span class="font-medium truncate">Welcome, Staff</span>
                  <BellIcon class="w-4 h-4 text-purple-500 cursor-pointer hover:text-purple-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-5 sm:p-6 lg:p-8">
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-purple-100/80 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none"></div>
              <div class="h-1.5 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500"></div>
              <div class="relative p-4 flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <PackageIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Products</p>
                  <p class="text-2xl font-black text-slate-900 tabular-nums">{{ totalProducts }}</p>
                </div>
              </div>
            </div>
            <div class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-100/80 shadow-lg shadow-amber-500/5 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none"></div>
              <div class="h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500"></div>
              <div class="relative p-4 flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <AlertTriangleIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Low Stock</p>
                  <p class="text-2xl font-black text-slate-900 tabular-nums">{{ lowStockCount }}</p>
                </div>
              </div>
            </div>
            <div class="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-rose-100/80 shadow-lg shadow-rose-500/5 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none"></div>
              <div class="h-1.5 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500"></div>
              <div class="relative p-4 flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <XCircleIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Out of Stock</p>
                  <p class="text-2xl font-black text-slate-900 tabular-nums">{{ outOfStockCount }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Search and Filter Bar -->
          <div class="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/30 p-5 mb-6 overflow-hidden">
            <div class="h-1 w-full bg-gradient-to-r from-purple-500/50 via-violet-500/50 to-fuchsia-500/50 rounded-t-2xl -mx-5 -mt-5 mb-4"></div>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                  <input type="text" v-model="searchQuery" placeholder="Search by name or SKU..." class="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 bg-white text-gray-900 placeholder-gray-400 transition-all" />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-3">
                <select v-model="filterCategory" class="px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 bg-white text-gray-900 font-medium">
                  <option value="">All Categories</option>
                  <option v-for="cat in categories" :key="cat.key" :value="cat.key">{{ cat.value }}</option>
                </select>
                <select v-model="filterStock" class="px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 bg-white text-gray-900 font-medium">
                  <option value="">All Stock Levels</option>
                  <option value="in-stock">In Stock</option>
                  <option value="low-stock">Low Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Products Table -->
          <div class="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/30 overflow-hidden">
            <!-- Loading State -->
            <div v-if="loading && products.length === 0" class="p-12 text-center">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center mx-auto mb-4">
                <LoaderIcon class="w-7 h-7 text-purple-500 animate-spin" />
              </div>
              <p class="text-slate-600 font-medium">Loading inventory...</p>
              <p class="text-sm text-slate-500 mt-1">Fetching products from database</p>
            </div>

            <!-- Empty State -->
            <div v-if="!loading && products.length === 0" class="p-12 text-center">
              <div class="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center shadow-inner">
                <PackageIcon class="w-10 h-10 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">No products yet</h3>
              <p class="text-slate-600 max-w-sm mx-auto">Products added by admin will appear here. Check back later or ask your admin to add inventory.</p>
            </div>

            <!-- Mobile View -->
            <div v-else-if="products.length > 0" class="block md:hidden divide-y divide-slate-100">
              <div v-for="product in paginatedProducts" :key="product.id" class="p-4 hover:bg-slate-50/50 transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-14 h-14 rounded-xl overflow-hidden shadow-md flex items-center justify-center shrink-0 ring-2 ring-slate-100" :class="product.image ? 'bg-white' : 'bg-gradient-to-br from-purple-500 to-fuchsia-500'">
                    <img v-if="product.image" :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
                    <PackageIcon v-else class="w-7 h-7 text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-semibold text-slate-900 truncate">{{ product.name }}</p>
                    <p class="text-sm text-slate-500">{{ formatCategory(product.category) }}</p>
                    <div class="flex flex-wrap items-center gap-2 mt-1.5">
                      <span class="px-2.5 py-0.5 rounded-lg text-xs font-semibold" :class="getStockLevelClass(product.stockLevel)">
                        {{ formatStockLevel(product.stockLevel) }}
                      </span>
                      <span class="text-sm font-medium text-slate-700">₱{{ product.price.toLocaleString() }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Desktop View -->
            <div v-if="products.length > 0" class="hidden md:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-slate-200 bg-slate-50/80">
                    <th class="text-left p-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Product</th>
                    <th class="text-left p-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Category</th>
                    <th class="text-left p-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Stock Level</th>
                    <th class="text-left p-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading" class="border-b border-slate-100">
                    <td colspan="4" class="p-10 text-center">
                      <LoaderIcon class="w-6 h-6 text-purple-500 animate-spin mx-auto" />
                    </td>
                  </tr>
                  <tr v-else-if="paginatedProducts.length === 0" class="border-b border-slate-100">
                    <td colspan="4" class="p-8 text-center text-slate-500 font-medium">
                      No products match your filters
                    </td>
                  </tr>
                  <tr v-for="(product, idx) in paginatedProducts" :key="product.id" class="border-b border-slate-100 hover:bg-purple-50/30 transition-colors" :class="{ 'bg-slate-50/30': idx % 2 === 1 }">
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-xl overflow-hidden shadow-md flex items-center justify-center ring-2 ring-slate-100 shrink-0" :class="product.image ? 'bg-white' : 'bg-gradient-to-br from-purple-500 to-fuchsia-500'">
                          <img v-if="product.image" :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
                          <PackageIcon v-else class="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p class="font-semibold text-slate-900">{{ product.name }}</p>
                          <p class="text-sm text-slate-500">SKU: {{ product.sku || 'N/A' }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <span class="px-3 py-1.5 rounded-xl text-sm font-medium bg-purple-50 text-purple-800 border border-purple-100">
                        {{ formatCategory(product.category) }}
                      </span>
                    </td>
                    <td class="p-4">
                      <span class="px-3 py-1.5 rounded-xl text-sm font-semibold" :class="getStockLevelClass(product.stockLevel)">
                        {{ formatStockLevel(product.stockLevel) }}
                      </span>
                    </td>
                    <td class="p-4 font-semibold text-slate-900 tabular-nums">
                      ₱{{ product.price.toLocaleString() }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div v-if="products.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border-t border-slate-200 bg-slate-50/50">
              <div class="flex items-center gap-3">
                <select v-model="perPage" class="px-3 py-2 rounded-xl border border-slate-200 text-sm font-medium bg-white text-gray-900 focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400">
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-sm text-slate-600">
                  Showing <span class="font-semibold text-slate-900">{{ paginationStart }}</span> – <span class="font-semibold text-slate-900">{{ paginationEnd }}</span> of <span class="font-semibold text-slate-900">{{ filteredProducts.length }}</span>
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button @click="currentPage--" :disabled="currentPage === 1" class="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed text-slate-700 transition-colors">
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm font-medium text-slate-700 min-w-[120px] text-center">Page {{ currentPage }} of {{ totalPages || 1 }}</span>
                <button @click="currentPage++" :disabled="currentPage >= totalPages" class="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed text-slate-700 transition-colors">
                  <ChevronRightIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  LayoutDashboard as LayoutDashboardIcon,
  Package as PackageIcon,
  Palette as PaletteIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
  Search as SearchIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  AlertTriangle as AlertTriangleIcon,
  XCircle as XCircleIcon,
  Loader as LoaderIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  TrendingUp as TrendingUpIcon
} from 'lucide-vue-next'
import { collection, query, onSnapshot, doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

// Router and reactive state
const router = useRouter()
const mobileSidebarOpen = ref(false)
const searchQuery = ref('')
const filterCategory = ref('')
const filterStock = ref('')
const perPage = ref(10)
const currentPage = ref(1)
const loading = ref(false)
const error = ref(null)
const unsubscribe = ref(null)
const products = ref([])
const categories = ref([])

// Database reference
const productsRef = db ? collection(db, 'products') : null

// Computed properties
const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})

const filteredProducts = computed(() => {
  let filtered = [...products.value]

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product => 
      product.name?.toLowerCase().includes(query) ||
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
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / perPage.value) || 1)
const paginationStart = computed(() => filteredProducts.value.length ? ((currentPage.value - 1) * perPage.value) + 1 : 0)
const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, filteredProducts.value.length))

// Methods
const fetchProducts = async () => {
  try {
    loading.value = true
    error.value = null
    
    if (!db || !productsRef) {
      throw new Error('Database not initialized')
    }

    const q = query(productsRef)
    
    if (unsubscribe.value) {
      unsubscribe.value()
    }

    unsubscribe.value = onSnapshot(
      q,
      (snapshot) => {
        products.value = snapshot.docs.map(doc => {
          const data = doc.data()
          const stockValue = data.stock !== undefined ? Number(data.stock) : 
                            data.stockLevel !== undefined ? Number(data.stockLevel) : 0
          
          return {
            id: doc.id,
            ...data,
            price: Number(data.price) || 0,
            stockLevel: stockValue,
            stock: stockValue
          }
        })
        
        loading.value = false
        error.value = null
      },
      (err) => {
        console.error('Firestore error:', err)
        loading.value = false
        error.value = 'Unable to connect to database. Please try again.'
        products.value = []
      }
    )
  } catch (err) {
    console.error('Error in fetchProducts:', err)
    loading.value = false
    error.value = 'Database connection failed. Please refresh the page.'
    products.value = []
  }
}

const fetchCategories = async () => {
  try {
    if (!db) return
    const docRef = doc(db, 'settings', 'categories')
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      categories.value = docSnap.data().list || []
      console.log('[v0] Categories fetched:', categories.value)
    }
  } catch (error) {
    console.error('[v0] Error fetching categories:', error)
  }
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
  const cat = categories.value.find(cat => cat.key === category)
  return cat ? cat.value : category
}

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

const handleLogout = () => {
  router.push('/staff')
}

// Lifecycle hooks
onMounted(() => {
  fetchProducts().catch(err => {
    console.error('Mount error:', err)
    error.value = 'Failed to initialize inventory. Please refresh the page.'
  })
  fetchCategories().catch(err => {
    console.error('Mount error:', err)
    error.value = 'Failed to initialize categories. Please refresh the page.'
  })
})

onUnmounted(() => {
  if (unsubscribe.value) {
    unsubscribe.value()
  }
})

// Watchers
watch([searchQuery, filterStock, filterCategory], () => {
  currentPage.value = 1
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
