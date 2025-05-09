<template>
  <div class="min-h-screen bg-[#001333] relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#0A3573] opacity-10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#0A3573] opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-[#0A2159]/90 backdrop-blur-sm border-r border-white/10 hidden md:block">
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-white/10">
          <h1 class="text-xl font-bold text-white">Mindoro Paint Center</h1>
        </div>

        <!-- Navigation -->
        <nav class="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-10rem)]">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/staff' }"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/sales-analytics' }"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/reports' }"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/security' }"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>
        </nav>

        <!-- User Menu -->
        <div class="absolute bottom-0 w-64 p-4 border-t border-white/10 bg-[#0A2159]/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">Admin User</p>
              <p class="text-xs text-white/60 truncate">admin@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
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
          class="p-2 bg-[#0A2159]/90 backdrop-blur-sm border border-white/10 rounded-lg shadow-sm"
          aria-label="Toggle navigation menu"
        >
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-white" />
          <XIcon v-else class="w-6 h-6 text-white" />
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
        class="fixed left-0 top-0 h-full w-64 bg-[#0A2159]/90 backdrop-blur-sm border-r border-white/10 z-20 md:hidden"
      >
        <!-- Same content as desktop sidebar -->
        <div class="p-6 border-b border-white/10">
          <h1 class="text-xl font-bold text-white">Mindoro Paint Center</h1>
        </div>

        <nav class="p-4 space-y-2">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/dashboard' }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/staff' }"
            @click="mobileSidebarOpen = false"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/sales-analytics' }"
            @click="mobileSidebarOpen = false"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/reports' }"
            @click="mobileSidebarOpen = false"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/settings' }"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/security' }"
            @click="mobileSidebarOpen = false"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>
        </nav>

        <div class="absolute bottom-0 w-64 p-4 border-t border-white/10 bg-[#0A2159]/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">Admin User</p>
              <p class="text-xs text-white/60 truncate">admin@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
            >
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Header -->
        <header class="bg-[#0A2159]/80 backdrop-blur-sm border-b border-white/10 px-8 py-4 shadow-md">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-2xl font-bold text-white">Inventory Management</h1>
              <p class="text-white/60">Manage your paint products and stock levels</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-white/80">
                <CalendarIcon class="w-5 h-5" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-white/20"></div>
              <div class="flex items-center gap-3">
                <span class="text-white">Welcome, Admin</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-white cursor-pointer hover:text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-6 md:p-8">
          <!-- Error Alert -->
          <div 
            v-if="error" 
            class="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <AlertTriangleIcon class="w-5 h-5 text-red-400" />
              <span class="text-red-300">{{ error }}</span>
            </div>
            <button 
              @click="error = null"
              class="text-red-400 hover:text-red-300"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
          <div v-if="error" class="text-center mb-6">
            <button
              @click="fetchProducts"
              class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg"
            >
              <RefreshCwIcon class="w-5 h-5" />
              Retry Loading Products
            </button>
          </div>

          <!-- Action Button -->
          <div class="flex justify-end mb-6">
            <button 
              @click="showAddModal = true"
              class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg"
            >
              <PlusIcon class="w-5 h-5" />
              <span>Add Product</span>
            </button>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- Total Products -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-white/10 rounded-lg">
                  <PackageIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <p class="text-sm text-white/60">Total Products</p>
                  <p class="text-2xl font-bold text-white">{{ totalProducts }}</p>
                </div>
              </div>
            </div>

            <!-- Low Stock -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-amber-500/20 rounded-lg">
                  <AlertTriangleIcon class="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p class="text-sm text-white/60">Low Stock Items</p>
                  <p class="text-2xl font-bold text-white">{{ lowStockCount }}</p>
                </div>
              </div>
            </div>

            <!-- Out of Stock -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-red-500/20 rounded-lg">
                  <XCircleIcon class="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p class="text-sm text-white/60">Out of Stock</p>
                  <p class="text-2xl font-bold text-white">{{ outOfStockCount }}</p>
                </div>
              </div>
            </div>

            <!-- Total Value -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-green-500/20 rounded-lg">
                  <DollarSignIcon class="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p class="text-sm text-white/60">Total Value</p>
                  <p class="text-2xl font-bold text-white">₱{{ totalValue.toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Search and Filter Bar -->
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 mb-8 border border-white/10">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search products..."
                    class="w-full pl-10 pr-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <select 
                  v-model="filterCategory"
                  class="px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white"
                >
                  <option value="">All Categories</option>
                  <option value="interior">Interior Paint</option>
                  <option value="exterior">Exterior Paint</option>
                  <option value="primer">Primers</option>
                  <option value="specialty">Specialty Paints</option>
                </select>
                <select 
                  v-model="filterStock"
                  class="px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white"
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
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg overflow-hidden border border-white/10">
            <!-- Loading State -->
            <div v-if="loading && products.length === 0" class="p-8 text-center">
              <LoaderIcon class="w-8 h-8 text-white/40 animate-spin mx-auto mb-4" />
              <p class="text-white/60">Loading inventory data...</p>
            </div>

            <!-- Empty State -->
            <div v-if="!loading && products.length === 0" class="p-8 text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <PackageIcon class="w-8 h-8 text-white/40" />
              </div>
              <h3 class="text-lg font-medium text-white mb-2">No products found</h3>
              <p class="text-white/60 mb-4">Get started by adding your first product to the inventory.</p>
              <button 
                @click="showAddModal = true"
                class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg"
              >
                <PlusIcon class="w-5 h-5" />
                Add Product
              </button>
            </div>

            <!-- Mobile View -->
            <div v-else-if="products.length > 0" class="block md:hidden">
              <div v-for="product in paginatedProducts" :key="product.id" class="p-4 border-b border-white/10">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <PackageIcon class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p class="font-medium text-white">{{ product.name }}</p>
                      <p class="text-sm text-white/60">{{ formatCategory(product.category) }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button 
                      @click="editProduct(product)"
                      class="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-white"
                    >
                      <EditIcon class="w-5 h-5" />
                    </button>
                    <button 
                      @click="confirmDelete(product)"
                      class="p-2 hover:bg-red-500/10 rounded-lg text-red-400 hover:text-red-300"
                    >
                      <Trash2Icon class="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span 
                    class="px-2 py-1 rounded-full text-sm"
                    :class="getStockLevelClass(product.stockLevel)"
                  >
                    {{ formatStockLevel(product.stockLevel) }}
                  </span>
                  <span class="text-sm text-white/60">
                    Price: ₱{{ product.price.toLocaleString() }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Desktop View -->
            <div v-if="products.length > 0" class="hidden md:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-white/10">
                    <th class="text-left p-4 text-sm font-medium text-white/60">Product</th>
                    <th class="text-left p-4 text-sm font-medium text-white/60">Category</th>
                    <th class="text-left p-4 text-sm font-medium text-white/60">Stock Level</th>
                    <th class="text-left p-4 text-sm font-medium text-white/60">Price</th>
                    <th class="text-right p-4 text-sm font-medium text-white/60">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading" class="border-b border-white/10">
                    <td colspan="5" class="p-8 text-center">
                      <LoaderIcon class="w-6 h-6 text-white/40 animate-spin mx-auto" />
                    </td>
                  </tr>
                  <tr v-else-if="paginatedProducts.length === 0" class="border-b border-white/10">
                    <td colspan="5" class="p-8 text-center text-white/60">
                      No products found
                    </td>
                  </tr>
                  <tr 
                    v-for="product in paginatedProducts" 
                    :key="product.id" 
                    class="border-b border-white/10 hover:bg-white/5"
                  >
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                          <PackageIcon class="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p class="font-medium text-white">{{ product.name }}</p>
                          <p class="text-sm text-white/60">SKU: {{ product.sku }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <span class="px-3 py-1 rounded-full text-sm bg-white/10 text-white">
                        {{ formatCategory(product.category) }}
                      </span>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-3 py-1 rounded-full text-sm"
                        :class="getStockLevelClass(product.stockLevel)"
                      >
                        {{ formatStockLevel(product.stockLevel) }}
                      </span>
                    </td>
                    <td class="p-4 text-white">
                      ₱{{ product.price.toLocaleString() }}
                    </td>
                    <td class="p-4">
                      <div class="flex items-center justify-end gap-2">
                        <button 
                          @click="editProduct(product)"
                          class="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-white"
                          title="Edit Product"
                        >
                          <EditIcon class="w-5 h-5" />
                        </button>
                        <button 
                          @click="confirmDelete(product)"
                          class="p-2 hover:bg-red-500/10 rounded-lg text-red-400 hover:text-red-300"
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

            <!-- Pagination -->
            <div v-if="products.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t border-white/10">
              <div class="flex items-center gap-2">
                <select 
                  v-model="perPage"
                  class="px-2 py-1 rounded-lg border border-white/10 text-sm bg-white/5 text-white"
                >
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-sm text-white/60">
                  Showing {{ paginationStart }} - {{ paginationEnd }} of {{ filteredProducts.length }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2 rounded-lg hover:bg-white/10 disabled:opacity-50 text-white"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm text-white">Page {{ currentPage }} of {{ totalPages || 1 }}</span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage >= totalPages"
                  class="p-2 rounded-lg hover:bg-white/10 disabled:opacity-50 text-white"
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

  <!-- Add/Edit Product Modal -->
  <div v-if="showAddModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl w-full max-w-md border border-white/10 shadow-2xl">
      <div class="p-6 border-b border-white/10">
        <h3 class="text-xl font-bold text-white">
          {{ editingProduct ? 'Edit Product' : 'Add Product' }}
        </h3>
      </div>
      
      <form @submit.prevent="handleSubmit" class="p-6">
        <div class="space-y-4">
          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-white mb-1">Product Name</label>
            <input 
              type="text"
              v-model="productForm.name"
              required
              class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
              placeholder="Enter product name"
            />
          </div>

          <!-- SKU -->
          <div>
            <label class="block text-sm font-medium text-white mb-1">SKU</label>
            <input 
              type="text"
              v-model="productForm.sku"
              required
              class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
              placeholder="Enter SKU"
            />
          </div>

          <!-- Category -->
          <div>
            <label class="block text-sm font-medium text-white mb-1">Category</label>
            <select 
              v-model="productForm.category"
              required
              class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white"
            >
              <option value="interior">Interior Paint</option>
              <option value="exterior">Exterior Paint</option>
              <option value="primer">Primers</option>
              <option value="specialty">Specialty Paints</option>
            </select>
          </div>

          <!-- Price -->
          <div>
            <label class="block text-sm font-medium text-white mb-1">Price</label>
            <div class="relative">
              <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60">₱</span>
              <input 
                type="number"
                v-model="productForm.price"
                required
                min="0"
                step="0.01"
                class="w-full pl-8 pr-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
                placeholder="0.00"
              />
            </div>
          </div>

          <!-- Stock Level -->
          <div>
            <label class="block text-sm font-medium text-white mb-1">Stock Level</label>
            <input 
              type="number"
              v-model="productForm.stockLevel"
              required
              min="0"
              class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
              placeholder="Enter stock level"
            />
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-medium text-white mb-1">Description</label>
            <textarea 
              v-model="productForm.description"
              rows="3"
              class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
              placeholder="Enter product description"
            ></textarea>
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6">
          <button 
            type="button"
            @click="closeModal"
            class="px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg"
            :disabled="loading"
          >
            <span v-if="loading" class="flex items-center gap-2">
              <LoaderIcon class="w-5 h-5 animate-spin" />
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
    <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl w-full max-w-md border border-white/10 shadow-2xl">
      <div class="p-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
          <AlertTriangleIcon class="w-8 h-8 text-red-400" />
        </div>
        <h3 class="text-xl font-bold text-white text-center mb-2">Delete Product</h3>
        <p class="text-white/60 text-center mb-6">
          Are you sure you want to delete {{ selectedProduct?.name }}? This action cannot be undone.
        </p>
        <div class="flex justify-center gap-3">
          <button 
            @click="showDeleteModal = false"
            class="px-6 py-3 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="deleteProduct"
            class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            :disabled="loading"
          >
            <span v-if="loading" class="flex items-center gap-2">
              <LoaderIcon class="w-5 h-5 animate-spin" />
              Deleting...
            </span>
            <span v-else>Delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Success Notification -->
  <div
    v-if="showNotification"
    class="fixed top-4 right-4 z-50 max-w-sm bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-lg shadow-lg border border-white/10 transition-all duration-300 transform"
    :class="{
      'translate-x-full': !showNotification,
      'border-green-500/20': notificationType === 'success',
      'border-red-500/20': notificationType === 'error'
    }"
  >
    <div class="p-4 flex items-center gap-3">
      <div 
        class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
        :class="{
          'bg-green-500/20': notificationType === 'success',
          'bg-red-500/20': notificationType === 'error'
        }"
      >
        <CheckCircle2Icon v-if="notificationType === 'success'" class="w-6 h-6 text-green-400" />
        <XCircleIcon v-else class="w-6 h-6 text-red-400" />
      </div>
      <div class="flex-1 min-w-0">
        <p 
          class="font-medium text-white"
        >
          {{ notificationMessage }}
        </p>
      </div>
      <button 
        @click="showNotification = false"
        class="flex-shrink-0 ml-2 text-white/60 hover:text-white"
      >
        <XIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
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
  onSnapshot,
  where,
  serverTimestamp,
  getDoc
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
  Bell as BellIcon
} from 'lucide-vue-next'

// State
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
const unsubscribe = ref(null)
const showNotification = ref(false)
const notificationMessage = ref('')
const notificationType = ref('success')
const stockUpdateInProgress = ref(false)

const router = useRouter()
const route = useRoute()

// Current date
const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// Products collection reference
const productsRef = db ? collection(db, 'products') : null

// Products state
const products = ref([])

// Form state with validation
const productForm = ref({
  name: '',
  sku: '',
  category: 'interior',
  price: 0,
  stockLevel: 0,
  description: ''
})

// Fetch products from Firestore with real-time updates
const fetchProducts = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    // Ensure db is properly initialized
    if (!db || !productsRef) {
      throw new Error('Database not initialized');
    }

    // Create query with error handling
    const q = query(productsRef);
    
    // Set up real-time listener
    if (unsubscribe.value) {
      unsubscribe.value();
    }

    unsubscribe.value = onSnapshot(
      q,
      (snapshot) => {
        products.value = snapshot.docs.map(doc => {
          const data = doc.data();
          // Ensure we use the correct stock value (check both fields)
          const stockValue = data.stock !== undefined ? Number(data.stock) : 
                            data.stockLevel !== undefined ? Number(data.stockLevel) : 0;
          
          return {
            id: doc.id,
            ...data,
            price: Number(data.price) || 0,
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
    console.error('Error in fetchProducts:', err);
    loading.value = false;
    error.value = 'Database connection failed. Please refresh the page.';
    products.value = [];
  }
};

// Update product stock level
const updateProductStock = async (productId, newStockLevel) => {
  try {
    if (stockUpdateInProgress.value) {
      console.log('Stock update already in progress, skipping...')
      return false
    }
    
    stockUpdateInProgress.value = true
    
    // Get the product document reference
    const productRef = doc(db, 'products', productId)
    
    // Get current product data to ensure we have the latest
    const productDoc = await getDoc(productRef)
    if (!productDoc.exists()) {
      throw new Error(`Product with ID ${productId} not found`)
    }
    
    // Get current product data
    const productData = productDoc.data()
    
    // Ensure stock level is a number and not negative
    const updatedStockLevel = Math.max(0, Number(newStockLevel))
    
    // Update both stockLevel and stock fields for compatibility
    await updateDoc(productRef, {
      stockLevel: updatedStockLevel,
      stock: updatedStockLevel, // Update 'stock' field used by sales component
      updatedAt: serverTimestamp()
    })
    
    console.log(`Stock updated for product ${productId}: ${updatedStockLevel}`)
    
    // Show notification
    notificationMessage.value = `Stock updated for ${productData.name}`
    notificationType.value = 'success'
    showNotification.value = true
    
    // Auto hide notification after 3 seconds
    setTimeout(() => {
      showNotification.value = false
    }, 3000)
    
    return true
  } catch (err) {
    console.error('Error updating product stock:', err)
    
    // Show error notification
    notificationMessage.value = `Failed to update stock: ${err.message}`
    notificationType.value = 'error'
    showNotification.value = true
    
    return false
  } finally {
    stockUpdateInProgress.value = false
  }
}

// Clean up listener on component unmount
onUnmounted(() => {
  if (unsubscribe.value) {
    unsubscribe.value()
  }
})

// Call fetchProducts on component mount with error handling
onMounted(() => {
  fetchProducts().catch(err => {
    console.error('Mount error:', err)
    error.value = 'Failed to initialize inventory. Please refresh the page.'
  })
  
  // Set up listener for stock updates from sales
  const salesRef = collection(db, 'sales')
  const salesQuery = query(salesRef, orderBy('date', 'desc'))
  
  const salesUnsubscribe = onSnapshot(salesQuery, (snapshot) => {
    console.log('Sales collection updated, refreshing product data...')
    // No need to do anything here as the products listener will update automatically
  }, (err) => {
    console.error('Error listening to sales collection:', err)
  })
  
  // Clean up sales listener on unmount
  onUnmounted(() => {
    salesUnsubscribe()
  })
})

// Computed properties
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

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / perPage.value) || 1)
const paginationStart = computed(() => filteredProducts.value.length ? ((currentPage.value - 1) * perPage.value) + 1 : 0)
const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, filteredProducts.value.length))

// Methods
const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = null
    
    if (!db) {
      throw new Error('Firestore is not initialized')
    }
    
    const productData = {
      ...productForm.value,
      price: Number(productForm.value.price),
      stockLevel: Number(productForm.value.stockLevel),
      stock: Number(productForm.value.stockLevel) // Add stock field for compatibility with sales component
    }
    
    console.log('Submitting product data:', productData)
    
    if (editingProduct.value) {
      // Update existing product
      const productRef = doc(db, 'products', editingProduct.value.id)
      await updateDoc(productRef, {
        ...productData,
        updatedAt: serverTimestamp()
      })
      showSuccessNotification('Product updated successfully!')
    } else {
      // Add new product
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
    loading.value = false
  }
}

const editProduct = (product) => {
  editingProduct.value = product
  productForm.value = { ...product }
  showAddModal.value = true
}

const confirmDelete = (product) => {
  selectedProduct.value = product
  showDeleteModal.value = true
}

const deleteProduct = async () => {
  try {
    loading.value = true
    error.value = null
    
    // Delete product from Firestore
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
    loading.value = false
  }
}

const closeModal = () => {
  showAddModal.value = false
  editingProduct.value = null
  error.value = null
  productForm.value = {
    name: '',
    sku: '',
    category: 'interior',
    price: 0,
    stockLevel: 0,
    description: ''
  }
}

const showSuccessNotification = (message) => {
  notificationMessage.value = message
  notificationType.value = 'success'
  showNotification.value = true
  
  // Auto hide after 3 seconds
  setTimeout(() => {
    showNotification.value = false
  }, 3000)
}

const getStockLevelClass = (stockLevel) => {
  if (stockLevel === 0) return 'bg-red-500/20 text-red-300'
  if (stockLevel <= 10) return 'bg-amber-500/20 text-amber-300'
  return 'bg-green-500/20 text-green-300'
}

const formatStockLevel = (stockLevel) => {
  if (stockLevel === 0) return 'Out of Stock'
  if (stockLevel <= 10) return `Low Stock (${stockLevel})`
  return `In Stock (${stockLevel})`
}

const formatCategory = (category) => {
  const categories = {
    interior: 'Interior Paint',
    exterior: 'Exterior Paint',
    primer: 'Primers',
    specialty: 'Specialty Paints'
  }
  return categories[category] || category
}

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

const handleLogout = () => {
  router.push('/admin')
}

// Export methods for other components to use
defineExpose({
  updateProductStock
})

watch([searchQuery, filterStock, filterCategory], () => {
  currentPage.value = 1
})
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>