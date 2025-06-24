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
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>

        <!-- Navigation - Scrollable Area -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
            :class="{ 'shadow-sm border border-blue-200 transform scale-105': isActive('/admin/dashboard') }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700"
            :class="{ 'shadow-sm border border-green-200 transform scale-105': isActive('/admin/staff') }"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 shadow-sm border border-purple-200 transform scale-105"
            :class="{ 'hover:bg-purple-100 hover:text-purple-700': !isActive('/admin/inventory') }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': isActive('/admin/house-paint-recommender') }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border border-pink-200 transform scale-105': isActive('/admin/paint-mixing') }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border border-teal-200 transform scale-105': isActive('/admin/sales-analytics') }"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
            :class="{ 'shadow-sm border border-indigo-200 transform scale-105': isActive('/admin/reports') }"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700"
            :class="{ 'shadow-sm border border-amber-200 transform scale-105': isActive('/admin/settings') }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700"
            :class="{ 'shadow-sm border border-red-200 transform scale-105': isActive('/admin/security') }"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>

          <!-- Perfect spacing -->
          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
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
              <LogOutIcon class="w-5 h-5" />
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
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <XIcon v-else class="w-6 h-6 text-gray-700" />
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
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>

        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <!-- Mobile navigation links with same styling -->
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50"
            :class="{ 'shadow-sm border border-blue-200': isActive('/admin/dashboard') }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50"
            :class="{ 'shadow-sm border border-green-200': isActive('/admin/staff') }"
            @click="mobileSidebarOpen = false"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 shadow-sm border border-purple-200"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <!-- Other mobile nav links... -->
        </nav>

        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-600 truncate">admin@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOutIcon class="w-5 h-5" />
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
              <h1 class="text-2xl font-bold text-gray-900">Inventory Management</h1>
              <p class="text-gray-600">Manage your paint products and stock levels</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-purple-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900">Welcome, Admin</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-6 md:p-8">
          <!-- Error Alert -->
          <div 
            v-if="error" 
            class="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <AlertTriangleIcon class="w-5 h-5 text-red-600" />
              <span class="text-red-800">{{ error }}</span>
            </div>
            <button 
              @click="error = null"
              class="text-red-600 hover:text-red-800"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
          <div v-if="error" class="text-center mb-6">
            <button
              @click="fetchProducts"
              class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <RefreshCwIcon class="w-5 h-5" />
              Retry Loading Products
            </button>
          </div>

          <!-- Action Button -->
          <div class="flex justify-end gap-3 mb-6">
            <button 
              @click="showOrderModal = true"
              class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <ShoppingCartIcon class="w-5 h-5" />
              <span>Order Product</span>
            </button>
            <button 
              @click="showAddModal = true"
              class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <PlusIcon class="w-5 h-5" />
              <span>Add Product</span>
            </button>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
  <!-- Total Products -->
  <div 
  class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative cursor-pointer"
  @click="clearAllFilters"
>
    <div class="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 h-2 absolute top-0 left-0 right-0"></div>
    <div class="p-6">
      <div class="flex items-center justify-between">
        <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
          <PackageIcon class="w-6 h-6 text-white" />
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-600">Total Products</p>
          <p class="text-2xl font-bold text-gray-900">{{ totalProducts }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Low Stock -->
  <div 
    class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative cursor-pointer"
    @click="filterByLowStock"
  >
    <div class="bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 h-2 absolute top-0 left-0 right-0"></div>
    <div class="p-6">
      <div class="flex items-center justify-between">
        <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 transform hover:scale-110 transition-transform duration-200">
          <AlertTriangleIcon class="w-6 h-6 text-white" />
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-600">Low Stock Items</p>
          <p class="text-2xl font-bold text-gray-900">{{ lowStockCount }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Out of Stock -->
  <div 
    class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative cursor-pointer"
    @click="filterByOutOfStock"
  >
    <div class="bg-gradient-to-br from-red-400 via-pink-500 to-rose-600 h-2 absolute top-0 left-0 right-0"></div>
    <div class="p-6">
      <div class="flex items-center justify-between">
        <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-red-400 via-pink-500 to-rose-600 transform hover:scale-110 transition-transform duration-200">
          <XCircleIcon class="w-6 h-6 text-white" />
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-600">Out of Stock</p>
          <p class="text-2xl font-bold text-gray-900">{{ outOfStockCount }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Total Value -->
  <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
    <div class="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 h-2 absolute top-0 left-0 right-0"></div>
    <div class="p-6">
      <div class="flex items-center justify-between">
        <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
          <DollarSignIcon class="w-6 h-6 text-white" />
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-600">Total Value</p>
          <p class="text-lg font-bold text-gray-900">₱{{ totalValue.toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Total Unit Price Value -->
  <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
    <div class="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 h-2 absolute top-0 left-0 right-0"></div>
    <div class="p-6">
      <div class="flex items-center justify-between">
        <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
          <DollarSignIcon class="w-6 h-6 text-white" />
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-600">Unit Price Value</p>
          <p class="text-lg font-bold text-gray-900">₱{{ totalUnitPriceValue.toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</div>

          <!-- Search and Filter Bar -->
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 mb-8">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search products..."
                    class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <select 
                  v-model="filterCategory"
                  class="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900"
                >
                  <option value="">All Categories</option>
                  <option value="interior">Interior Paint</option>
                  <option value="exterior">Exterior Paint</option>
                  <option value="primer">Primers</option>
                  <option value="specialty">Specialty Paints</option>
                </select>
                <select 
                  v-model="filterStock"
                  class="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900"
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
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg overflow-hidden">
            <!-- Loading State -->
            <div v-if="loading && products.length === 0" class="p-8 text-center">
              <LoaderIcon class="w-8 h-8 text-gray-400 animate-spin mx-auto mb-4" />
              <p class="text-gray-600">Loading inventory data...</p>
            </div>

            <!-- Empty State -->
            <div v-if="!loading && products.length === 0" class="p-8 text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <PackageIcon class="w-8 h-8 text-purple-600" />
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p class="text-gray-600 mb-4">Get started by adding your first product to the inventory.</p>
              <button 
                @click="showAddModal = true"
                class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <PlusIcon class="w-5 h-5" />
                Add Product
              </button>
            </div>

            <!-- Mobile View -->
            <div v-else-if="products.length > 0" class="block md:hidden">
              <div v-for="product in paginatedProducts" :key="product.id" class="p-4 border-b border-gray-100">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <PackageIcon class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{{ product.name }}</p>
                      <p class="text-sm text-gray-600">{{ formatCategory(product.category) }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button 
                      @click="editProduct(product)"
                      class="p-2 hover:bg-blue-50 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <EditIcon class="w-5 h-5" />
                    </button>
                    <button 
                      @click="confirmDelete(product)"
                      class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
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
                  <span class="text-sm text-gray-600">
                    Price: ₱{{ product.price.toLocaleString() }} | Unit: ₱{{ product.unitPrice ? product.unitPrice.toLocaleString() : '0' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Desktop View -->
            <div v-if="products.length > 0" class="hidden md:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-100">
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Product</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Category</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Stock Level</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Price</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Unit Price</th>
                    <th class="text-right p-4 text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading" class="border-b border-gray-100">
                    <td colspan="6" class="p-8 text-center">
                      <LoaderIcon class="w-6 h-6 text-gray-400 animate-spin mx-auto" />
                    </td>
                  </tr>
                  <tr v-else-if="paginatedProducts.length === 0" class="border-b border-gray-100">
                    <td colspan="6" class="p-8 text-center text-gray-600">
                      No products found
                    </td>
                  </tr>
                  <tr 
                    v-for="product in paginatedProducts" 
                    :key="product.id" 
                    class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                          <PackageIcon class="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p class="font-medium text-gray-900">{{ product.name }}</p>
                          <p class="text-sm text-gray-600">SKU: {{ product.sku }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <span class="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800 border border-purple-200">
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
                    <td class="p-4 text-gray-900">
                      ₱{{ product.price.toLocaleString() }}
                    </td>
                    <td class="p-4 text-gray-900">
                      ₱{{ product.unitPrice ? product.unitPrice.toLocaleString() : '0' }}
                    </td>
                    <td class="p-4">
                      <div class="flex items-center justify-end gap-2">
                        <button 
                          @click="editProduct(product)"
                          class="p-2 hover:bg-blue-50 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                          title="Edit Product"
                        >
                          <EditIcon class="w-5 h-5" />
                        </button>
                        <button 
                          @click="confirmDelete(product)"
                          class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
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
            <div v-if="products.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t border-gray-100">
              <div class="flex items-center gap-2">
                <select 
                  v-model="perPage"
                  class="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-900"
                >
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-sm text-gray-600">
                  Showing {{ paginationStart }} - {{ paginationEnd }} of {{ filteredProducts.length }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-700"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm text-gray-700">Page {{ currentPage }} of {{ totalPages || 1 }}</span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage >= totalPages"
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

  <!-- Add/Edit Product Modal -->
  <div v-if="showAddModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-lg max-h-[90vh] shadow-2xl flex flex-col">
      <div class="p-4 border-b border-gray-200 flex-shrink-0">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-gray-900">
            {{ editingProduct ? 'Edit Product' : 'Add Product' }}
          </h3>
          <button 
            @click="closeModal"
            class="p-1 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <form @submit.prevent="handleSubmit" class="flex flex-col flex-1 min-h-0">
        <div class="flex-1 overflow-y-auto p-4">
          <div class="space-y-3">
            <!-- Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input 
                type="text"
                v-model="productForm.name"
                required
                class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                placeholder="Enter product name"
              />
            </div>

            <!-- SKU -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">SKU</label>
              <input 
                type="text"
                v-model="productForm.sku"
                required
                class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                placeholder="Enter SKU"
              />
            </div>

            <!-- Category -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select 
                v-model="productForm.category"
                required
                class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 text-sm"
              >
                <option value="interior">Interior Paint</option>
                <option value="exterior">Exterior Paint</option>
                <option value="primer">Primers</option>
                <option value="specialty">Specialty Paints</option>
              </select>
            </div>

            <!-- Price and Unit Price in one row -->
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">₱</span>
                  <input 
                    type="number"
                    v-model="productForm.price"
                    required
                    min="0"
                    step="0.01"
                    class="w-full pl-7 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Unit Price</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">₱</span>
                  <input 
                    type="number"
                    v-model="productForm.unitPrice"
                    required
                    min="0"
                    step="0.01"
                    class="w-full pl-7 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <!-- Stock Level -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Stock Level</label>
              <input 
                type="number"
                v-model="productForm.stockLevel"
                required
                min="0"
                class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                placeholder="Enter stock level"
              />
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3 p-4 border-t border-gray-200 flex-shrink-0">
          <button 
            type="button"
            @click="closeModal"
            class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg text-sm"
            :disabled="modalLoading"
          >
            <span v-if="modalLoading" class="flex items-center gap-2">
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
        <div class="flex justify-center gap-3">
          <button 
            @click="showDeleteModal = false"
            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="deleteProduct"
            class="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            :disabled="modalLoading"
          >
            <span v-if="modalLoading" class="flex items-center gap-2">
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
    class="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-[60] transition-all duration-300"
    :class="{
      'opacity-0 pointer-events-none': !showNotification,
      'opacity-100': showNotification
    }"
  >
    <div 
      class="bg-white rounded-xl shadow-2xl border max-w-sm mx-4 transform transition-all duration-300 ease-out"
      :class="{
        'scale-95 opacity-0 translate-y-4': !showNotification,
        'scale-100 opacity-100 translate-y-0': showNotification,
        'border-green-200': notificationType === 'success',
        'border-red-200': notificationType === 'error'
      }"
    >
      <div class="p-6 text-center">
        <div 
          class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
          :class="{
            'bg-green-100': notificationType === 'success',
            'bg-red-100': notificationType === 'error'
          }"
        >
          <CheckCircle2Icon v-if="notificationType === 'success'" class="w-8 h-8 text-green-600" />
          <XCircleIcon v-else class="w-8 h-8 text-red-600" />
        </div>
        <h3 
          class="text-lg font-semibold mb-2"
          :class="{
            'text-green-800': notificationType === 'success',
            'text-red-800': notificationType === 'error'
          }"
        >
          {{ notificationType === 'success' ? 'Success!' : 'Error!' }}
        </h3>
        <p 
          class="text-gray-600 mb-4"
        >
          {{ notificationMessage }}
        </p>
        <button 
          @click="showNotification = false"
          class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
        >
          Close
        </button>
      </div>
    </div>
  </div>

  <!-- Order Product Modal -->
  <div v-if="showOrderModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col">
      <div class="p-4 border-b border-gray-200 flex-shrink-0">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-gray-900">Order Products from Supplier</h3>
          <button 
            @click="closeOrderModal"
            class="p-1 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div class="flex flex-1 min-h-0">
        <!-- Left Panel - Create New Order -->
        <div class="w-1/2 p-4 border-r border-gray-200">
          <h4 class="text-md font-semibold text-gray-800 mb-4">Create New Order</h4>
          <form @submit.prevent="handleOrderSubmit" class="space-y-4">
            <!-- Product Selection -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Select Product</label>
              <select 
                v-model="orderForm.productId"
                @change="updateSelectedProduct"
                required
                class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm"
              >
                <option value="">Choose a product...</option>
                <option v-for="product in products" :key="product.id" :value="product.id">
                  {{ product.name }} ({{ product.sku }}) - Current Stock: {{ product.stockLevel }}
                </option>
              </select>
            </div>

            <!-- SUPPLIER NAME FIELD - BAGONG FIELD NA ITO -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Supplier Name</label>
              <input 
                type="text"
                v-model="orderForm.supplierName"
                required
                class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                placeholder="Enter supplier name (e.g., Davies Paints Philippines)"
              />
            </div>

            <!-- Quantity -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Order Quantity</label>
              <input 
                type="number"
                v-model="orderForm.quantity"
                required
                min="1"
                class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 text-sm"
                placeholder="Enter quantity to order"
              />
            </div>

            <!-- Status -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Order Status</label>
              <select 
                v-model="orderForm.status"
                class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm"
              >
                <option value="incomplete">Incomplete</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>

            <button 
              type="submit"
              class="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg text-sm"
              :disabled="modalLoading"
            >
              <span v-if="modalLoading" class="flex items-center justify-center gap-2">
                <LoaderIcon class="w-4 h-4 animate-spin" />
                Creating Order...
              </span>
              <span v-else>Create Order</span>
            </button>
          </form>
        </div>

        <!-- Right Panel - Orders List -->
        <div class="w-1/2 p-4 flex flex-col">
          <h4 class="text-md font-semibold text-gray-800 mb-4">Current Orders</h4>
          <div class="flex-1 overflow-y-auto space-y-3">
            <div v-if="orders.length === 0" class="text-center py-8 text-gray-500">
              No orders yet. Create your first order!
            </div>
            <div v-for="order in orders" :key="order.id" class="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div class="flex items-center justify-between mb-2">
                <div>
                  <p class="font-medium text-gray-900">{{ order.productName }}</p>
                  <!-- SUPPLIER NAME DISPLAY - BAGONG DISPLAY NA ITO -->
                  <p class="text-sm text-gray-600">Supplier: {{ order.supplierName }}</p>
                  <p class="text-sm text-gray-600">Quantity: {{ order.quantity }}</p>
                  <p class="text-xs text-gray-500">{{ formatDate(order.createdAt) }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <select 
                    :value="order.status"
                    @change="updateOrderStatus(order.id, $event.target.value)"
                    class="px-2 py-1 rounded text-xs border border-gray-300 bg-white"
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
                    class="p-1 hover:bg-red-50 rounded text-red-600 hover:text-red-700 transition-colors"
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
  Bell as BellIcon,
  ShoppingCart as ShoppingCartIcon,
  Truck as TruckIcon
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
const modalLoading = ref(false)
const showOrderModal = ref(false)
const orders = ref([])
const orderForm = ref({
  productId: '',
  productName: '',
  supplierName: '', // BAGONG FIELD NA ITO
  quantity: 0,
  status: 'incomplete'
})

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
  unitPrice: 0,
  stockLevel: 0
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

// Add these methods after the existing methods
const filterByLowStock = () => {
  filterStock.value = 'low-stock'
  searchQuery.value = ''
  filterCategory.value = ''
  currentPage.value = 1
  
  // Show notification
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
  
  // Show notification
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
  
  // Show notification
  notificationMessage.value = `Showing all ${totalProducts.value} products`
  notificationType.value = 'success'
  showNotification.value = true
  
  setTimeout(() => {
    showNotification.value = false
  }, 3000)
}

// Clean up listener on component unmount
onUnmounted(() => {
  if (unsubscribe.value) {
    unsubscribe.value()
  }
  if (window.ordersUnsubscribe) {
    window.ordersUnsubscribe()
  }
})

// Call fetchProducts on component mount with error handling
const fetchProductsOnMount = () => {
  fetchProducts().catch(err => {
    console.error('Mount error:', err)
    error.value = 'Failed to initialize inventory. Please refresh the page.'
  })
}

onMounted(() => {
  console.log('Component mounted, initializing...');
  fetchProductsOnMount();
  
  // Add a small delay to ensure Firebase is ready
  setTimeout(() => {
    fetchOrders();
  }, 1000);
});

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
const totalUnitPriceValue = computed(() => products.value.reduce((sum, product) => sum + ((product.unitPrice || 0) * product.stockLevel), 0))

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / perPage.value) || 1)
const paginationStart = computed(() => filteredProducts.value.length ? ((currentPage.value - 1) * perPage.value) + 1 : 0)
const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, filteredProducts.length))

// Methods
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
      stock: Number(productForm.value.stockLevel)
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
    modalLoading.value = false
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
    modalLoading.value = true
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
    modalLoading.value = false
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
    unitPrice: 0,
    stockLevel: 0
  }
}

const showSuccessNotification = (message) => {
  notificationMessage.value = message
  notificationType.value = 'success'
  showNotification.value = true

  // Auto hide after 4 seconds (longer for better UX)
  setTimeout(() => {
    showNotification.value = false
  }, 4000)
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

// Fetch orders from Firestore with better error handling
const fetchOrders = async () => {
  try {
    if (!db) {
      console.log('Database not initialized, skipping orders fetch');
      return;
    }
    
    console.log('Setting up orders listener...');
    const ordersCollection = collection(db, 'orders');
    const q = query(ordersCollection, orderBy('createdAt', 'desc'));
    
    // Set up real-time listener with better error handling
    const unsubscribeOrders = onSnapshot(q, 
      (snapshot) => {
        console.log('Orders snapshot received, docs count:', snapshot.docs.length);
        orders.value = snapshot.docs.map(doc => {
          const data = doc.data();
          console.log('Order data:', data);
          return {
            id: doc.id,
            ...data,
            // Handle different timestamp formats
            createdAt: data.createdAt || new Date(),
            updatedAt: data.updatedAt || new Date()
          };
        });
        console.log('Orders updated:', orders.value);
      }, 
      (error) => {
        console.error('Error in orders listener:', error);
        // If it's a permission error or collection doesn't exist, try without orderBy
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
    
    // Store unsubscribe function for cleanup
    window.ordersUnsubscribe = unsubscribeOrders;
    
  } catch (err) {
    console.error('Error setting up orders listener:', err);
    orders.value = [];
  }
};

// Handle order form submission
const handleOrderSubmit = async () => {
  try {
    modalLoading.value = true;
    
    if (!orderForm.value.productId || !orderForm.value.quantity || !orderForm.value.supplierName) {
      throw new Error('Please fill in all required fields including supplier name');
    }

    // Ensure db and ordersRef are available
    if (!db) {
      throw new Error('Database not initialized');
    }

    // Create orders collection reference if it doesn't exist
    const ordersCollection = collection(db, 'orders');

    const orderData = {
      productId: orderForm.value.productId,
      productName: orderForm.value.productName,
      supplierName: orderForm.value.supplierName, // BAGONG FIELD NA ITO
      quantity: Number(orderForm.value.quantity),
      status: orderForm.value.status,
      createdAt: new Date(), // Use regular Date instead of serverTimestamp for now
      updatedAt: new Date()
    };

    console.log('Creating order with data:', orderData);

    // Add order to Firestore
    const docRef = await addDoc(ordersCollection, orderData);
    console.log('Order created with ID:', docRef.id);

    // If status is delivered, update product stock immediately
    if (orderForm.value.status === 'delivered') {
      await updateProductStockFromOrder(orderForm.value.productId, Number(orderForm.value.quantity));
    }

    showSuccessNotification('Order created successfully!');
    resetOrderForm();
  } catch (err) {
    console.error('Error creating order:', err);
    
    // More specific error messages
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

// Update selected product name when product is selected
const updateSelectedProduct = () => {
  const selectedProduct = products.value.find(p => p.id === orderForm.value.productId);
  if (selectedProduct) {
    orderForm.value.productName = selectedProduct.name;
  }
};

// Update order status
const updateOrderStatus = async (orderId, newStatus) => {
  try {
    if (!db) {
      throw new Error('Database not initialized');
    }

    const orderRef = doc(db, 'orders', orderId);
    const order = orders.value.find(o => o.id === orderId);
    
    await updateDoc(orderRef, {
      status: newStatus,
      updatedAt: new Date() // Use regular Date instead of serverTimestamp
    });

    // If changing to delivered, update product stock
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

// Update product stock from order
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

// Delete order
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

// Close order modal
const closeOrderModal = () => {
  showOrderModal.value = false;
  resetOrderForm();
};

// Reset order form
const resetOrderForm = () => {
  orderForm.value = {
    productId: '',
    productName: '',
    supplierName: '', // BAGONG FIELD NA ITO
    quantity: 0,
    status: 'incomplete'
  };
};

// Format date for display
const formatDate = (timestamp) => {
  if (!timestamp) return '';
  
  let date;
  if (timestamp.toDate) {
    // Firestore Timestamp
    date = timestamp.toDate();
  } else if (timestamp instanceof Date) {
    // Regular Date object
    date = timestamp;
  } else {
    // String or other format
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

// Export methods for other components to use
defineExpose({
  updateProductStock
})

watch([searchQuery, filterStock, filterCategory], () => {
  currentPage.value = 1
})

const activePath = ref(route.path);

const isActive = (path) => {
  return route.path === path;
};

watch(route, (newRoute) => {
  activePath.value = newRoute.path;
});
</script>

<style scoped>
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

/* Add hover effect for clickable cards */
.cursor-pointer:hover {
  transform: translateY(-2px) scale(1.02);
}
</style>
