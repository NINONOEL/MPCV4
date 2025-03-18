<template>
  <div class="min-h-screen bg-gray-50">
    <div class="flex h-screen">\
      <!-- Sidebar -->
      <aside class="w-64 bg-white border-r border-gray-200 hidden md:block">
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-gray-200">
          <h1 class="text-xl font-bold text-gray-900">Mindoro Paint Center</h1>
        </div>

        <!-- Navigation -->
        <nav class="p-4 space-y-2">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === item.path }"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </router-link>
        </nav>

        <!-- User Menu -->
        <div class="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-white">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-gray-600" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-500 truncate">admin@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Logout"
            >
              <LogOutIcon class="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Mobile Sidebar Toggle -->
      <div class="fixed top-4 left-4 z-30 md:hidden">
        <button 
          @click="toggleMobileSidebar"
          class="p-2 bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-600" />
          <XIcon v-else class="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <!-- Mobile Sidebar -->
      <div 
        v-if="mobileSidebarOpen" 
        class="fixed inset-0 bg-black/20 z-20 md:hidden"
        @click="mobileSidebarOpen = false"
      ></div>
      
      <aside 
        v-if="mobileSidebarOpen"
        class="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-20 md:hidden"
      >
        <!-- Same content as desktop sidebar -->
        <div class="p-6 border-b border-gray-200">
          <h1 class="text-xl font-bold text-gray-900">Mindoro Paint Center</h1>
        </div>

        <nav class="p-4 space-y-2">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === item.path }"
            @click="mobileSidebarOpen = false"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </router-link>
        </nav>

        <div class="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-white">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-gray-600" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-500 truncate">admin@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Logout"
            >
              <LogOutIcon class="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Header -->
        <header class="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
          <div class="flex items-center justify-between">
            <h1 class="text-xl md:text-2xl font-bold text-gray-900 ml-8 md:ml-0">Sales Analytics</h1>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-600">
                <CalendarIcon class="w-5 h-5" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-200"></div>
              <div class="flex items-center gap-2">
                <span class="hidden sm:inline text-gray-600">Welcome, Admin</span>
                <BellIcon class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 md:p-6 lg:p-8">
          <!-- Header Section -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 class="text-2xl font-bold text-navy mb-2">Sales Analytics</h1>
              <p class="text-navy/60">Monitor your sales performance and trends</p>
            </div>
            
            <div class="flex items-center gap-3">
              <!-- Add Sale Button -->
              <button
                @click="showAddSaleModal = true"
                class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 flex items-center gap-2"
              >
                <PlusIcon class="w-5 h-5" />
                Add Sale
              </button>
              
              <!-- Initialize Stock Button -->
              <button
                @click="initializeProductStock"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
              >
                <PackageIcon class="w-5 h-5" />
                Initialize Stock
              </button>
              
              <!-- Date Range Selector -->
              <div class="flex items-center gap-2 bg-white rounded-lg border border-navy/10 p-1">
                <button 
                  v-for="range in dateRanges" 
                  :key="range.value"
                  @click="selectedRange = range.value"
                  class="px-3 py-1 rounded-md text-sm transition-colors"
                  :class="selectedRange === range.value ? 'bg-navy text-white' : 'text-navy hover:bg-navy/5'"
                >
                  {{ range.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="loading && !error" class="bg-white rounded-xl p-8 mb-6 text-center">
            <LoaderIcon class="w-8 h-8 text-navy/40 animate-spin mx-auto mb-4" />
            <p class="text-navy/60">Loading sales data...</p>
          </div>

          <!-- Error State -->
          <div v-if="error" class="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <AlertTriangleIcon class="w-5 h-5 text-red-600" />
              <span class="text-red-700">{{ error }}</span>
            </div>
            <button 
              @click="fetchSalesData"
              class="text-red-600 hover:text-red-700"
            >
              <RefreshCwIcon class="w-5 h-5" />
            </button>
          </div>

          <!-- Stats Cards -->
          <div v-if="!loading || sales.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-xl p-4 shadow-sm">
              <div class="flex items-center gap-4">
                <div class="p-3 rounded-lg" :class="stat.iconBg">
                  <component :is="stat.icon" class="w-6 h-6" :class="stat.iconColor" />
                </div>
                <div>
                  <p class="text-sm text-navy/60">{{ stat.label }}</p>
                  <p class="text-2xl font-bold text-navy">{{ stat.value }}</p>
                  <div class="flex items-center gap-1 mt-1">
                    <component 
                      :is="stat.trend > 0 ? TrendingUpIcon : TrendingDownIcon" 
                      class="w-4 h-4"
                      :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'"
                    />
                    <span 
                      class="text-sm font-medium"
                      :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'"
                    >
                      {{ Math.abs(stat.trend) }}%
                    </span>
                    <span class="text-sm text-navy/60">vs last period</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Best Seller Section -->
          <div v-if="!loading && topProducts.length > 0" class="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <h2 class="text-lg font-semibold text-navy mb-4">Best Seller</h2>
            <div v-if="sortedTopProducts.length > 0" class="flex items-center gap-6">
              <div class="w-20 h-20 rounded-lg bg-navy/5 flex items-center justify-center">
                <PackageIcon class="w-10 h-10 text-navy/40" />
              </div>
              <div class="flex-1">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="text-xl font-bold text-navy">{{ sortedTopProducts[0].name }}</h3>
                    <p class="text-navy/60">{{ sortedTopProducts[0].category }}</p>
                  </div>
                  <div class="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Top Seller
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p class="text-sm text-navy/60">Total Revenue</p>
                    <p class="text-xl font-bold text-navy">{{ formatCurrency(sortedTopProducts[0].revenue) }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-navy/60">Units Sold</p>
                    <p class="text-xl font-bold text-navy">{{ sortedTopProducts[0].units }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="text-center py-8">
              <PackageIcon class="w-8 h-8 text-navy/20 mx-auto mb-2" />
              <p class="text-navy/60">No product data available</p>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="!loading && sales.length === 0" class="bg-white rounded-xl p-8 mb-6 text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-navy/5 flex items-center justify-center">
              <ShoppingCartIcon class="w-8 h-8 text-navy/40" />
            </div>
            <h3 class="text-lg font-medium text-navy mb-2">No sales data yet</h3>
            <p class="text-navy/60 mb-4">Start recording sales to see analytics and insights.</p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                @click="showAddSaleModal = true"
                class="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90"
              >
                <PlusIcon class="w-5 h-5" />
                Record Sale
              </button>
              <button 
                @click="createSampleSale"
                class="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <ClipboardIcon class="w-5 h-5" />
                Create Sample Sale
              </button>
            </div>
          </div>

          <!-- Charts Section -->
          <div v-if="!loading && sales.length > 0" class="mb-6">
            <!-- Top Products Chart -->
            <div class="bg-white rounded-xl shadow-sm p-4 md:p-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-lg font-semibold text-navy">Top Products</h2>
                <select 
                  v-model="selectedProductMetric"
                  class="px-3 py-1 rounded-lg border border-navy/10 text-sm bg-white"
                >
                  <option value="revenue">By Revenue</option>
                  <option value="units">By Units Sold</option>
                </select>
              </div>
              <div class="space-y-4">
                <div 
                  v-for="product in sortedTopProducts" 
                  :key="product.id"
                  class="flex items-center gap-4"
                >
                  <div class="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center">
                    <PackageIcon class="w-6 h-6 text-navy/40" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-navy truncate">{{ product.name }}</p>
                    <p class="text-sm text-navy/60">{{ product.category }}</p>
                  </div>
                  <div class="text-right">
                    <p class="font-medium text-navy">{{ formatCurrency(product.revenue) }}</p>
                    <p class="text-sm text-navy/60">{{ product.units }} units</p>
                  </div>
                </div>
                
                <!-- Empty state for top products -->
                <div v-if="topProducts.length === 0" class="text-center py-8">
                  <PackageIcon class="w-8 h-8 text-navy/20 mx-auto mb-2" />
                  <p class="text-navy/60">No product data available</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sales by Category -->
          <div v-if="!loading && sales.length > 0" class="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-lg font-semibold text-navy">Sales by Category</h2>
              <select 
                v-model="selectedCategoryView"
                class="px-3 py-1 rounded-lg border border-navy/10 text-sm bg-white"
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
                class="p-4 rounded-lg bg-navy/5"
              >
                <div class="flex items-center gap-3 mb-3">
                  <div class="p-2 rounded-md bg-white">
                    <component :is="getCategoryIcon(category.name)" class="w-5 h-5 text-navy" />
                  </div>
                  <h3 class="font-medium text-navy">{{ category.name }}</h3>
                </div>
                <p class="text-2xl font-bold text-navy mb-2">
                  {{ selectedCategoryView === 'revenue' ? formatCurrency(category.revenue) : 
                     selectedCategoryView === 'units' ? `${category.units} units` : 
                     `${category.orders} orders` }}
                </p>
                <div class="flex items-center gap-1">
                  <component 
                    :is="category.trend > 0 ? TrendingUpIcon : TrendingDownIcon" 
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
                <PaletteIcon class="w-8 h-8 text-navy/20 mx-auto mb-2" />
                <p class="text-navy/60">No category data available</p>
              </div>
            </div>
          </div>

          <!-- Recent Sales Table -->
          <div v-if="!loading && sales.length > 0" class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-4 md:p-6 border-b border-navy/10">
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 class="text-lg font-semibold text-navy">Recent Sales</h2>
                <div class="flex items-center gap-2">
                  <div class="relative">
                    <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-navy/40" />
                    <input 
                      type="text"
                      v-model="searchQuery"
                      placeholder="Search sales..."
                      class="pl-9 pr-4 py-2 rounded-lg border border-navy/10 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy/20"
                    />
                  </div>
                  <select 
                    v-model="salesFilter"
                    class="px-3 py-2 rounded-lg border border-navy/10 text-sm bg-white"
                  >
                    <option value="all">All Sales</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-navy/10">
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Order ID</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Customer</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Products</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Total</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Status</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="sale in filteredSales" 
                    :key="sale.id"
                    class="border-b border-navy/10"
                  >
                    <td class="p-4">
                      <span class="font-medium text-navy">{{ sale.orderId }}</span>
                    </td>
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
                          <UserIcon class="w-4 h-4 text-navy/40" />
                        </div>
                        <div>
                          <p class="font-medium text-navy">{{ sale.customerName }}</p>
                          <p class="text-sm text-navy/60">{{ sale.customerEmail }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <p class="text-navy">{{ sale.products.length }} items</p>
                      <p class="text-sm text-navy/60">{{ sale.products[0]?.name || 'N/A' }}</p>
                    </td>
                    <td class="p-4">
                      <p class="font-medium text-navy">{{ formatCurrency(sale.total) }}</p>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-2 py-1 rounded-full text-sm font-medium"
                        :class="{
                          'bg-green-50 text-green-700': sale.status === 'completed',
                          'bg-yellow-50 text-yellow-700': sale.status === 'pending',
                          'bg-red-50 text-red-700': sale.status === 'cancelled'
                        }"
                      >
                        {{ sale.status.charAt(0).toUpperCase() + sale.status.slice(1) }}
                      </span>
                    </td>
                    <td class="p-4 text-navy/60">
                      {{ formatDate(sale.date) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="flex items-center justify-between p-4 border-t border-navy/10">
              <p class="text-sm text-navy/60">
                Showing {{ paginationStart }} to {{ paginationEnd }} of {{ filteredSales.length }} results
              </p>
              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2 rounded-lg hover:bg-navy/5 disabled:opacity-50"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm text-navy">Page {{ currentPage }} of {{ totalPages }}</span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage === totalPages"
                  class="p-2 rounded-lg hover:bg-navy/5 disabled:opacity-50"
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
  <div v-if="showAddSaleModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-lg">
      <div class="p-6 border-b border-navy/10">
        <h3 class="text-xl font-bold text-navy">Record New Sale</h3>
      </div>
      
      <form @submit.prevent="handleAddSale" class="p-6">
        <div class="space-y-4">
          <!-- Customer Information -->
          <div>
            <h4 class="text-sm font-medium text-navy mb-3">Customer Information</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm text-navy/60 mb-1">Customer Name</label>
                <input 
                  type="text"
                  v-model="saleForm.customerName"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                />
              </div>
              <div>
                <label class="block text-sm text-navy/60 mb-1">Customer Email</label>
                <input 
                  type="email"
                  v-model="saleForm.customerEmail"
                  class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                />
              </div>
            </div>
          </div>

          <!-- Products -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-medium text-navy">Products</h4>
              <button 
                type="button"
                @click="addProductToSale"
                class="text-sm text-navy flex items-center gap-1"
              >
                <PlusIcon class="w-4 h-4" />
                Add Product
              </button>
            </div>
            
            <div v-for="(product, index) in saleForm.products" :key="index" class="mb-3 p-3 border border-navy/10 rounded-lg">
              <div class="flex justify-between mb-2">
                <h5 class="text-sm font-medium text-navy">Product {{ index + 1 }}</h5>
                <button 
                  type="button"
                  @click="removeProductFromSale(index)"
                  class="text-red-600"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="md:col-span-3">
                  <label class="block text-xs text-navy/60 mb-1">Product</label>
                  <select 
                    v-model="product.id"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                    @change="updateProductDetails(index)"
                  >
                    <option value="">Select a product</option>
                    <option v-for="p in availableProducts" :key="p.id" :value="p.id">
                      {{ p.name }} - {{ formatCurrency(p.price) }} (Stock: {{ p.stock || 0 }})
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs text-navy/60 mb-1">Quantity</label>
                  <input 
                    type="number"
                    v-model.number="product.quantity"
                    min="1"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                    @input="calculateTotal"
                  />
                </div>
                <div>
                  <label class="block text-xs text-navy/60 mb-1">Price</label>
                  <input 
                    type="number"
                    v-model.number="product.price"
                    min="0"
                    step="0.01"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                    @input="calculateTotal"
                  />
                </div>
                <div>
                  <label class="block text-xs text-navy/60 mb-1">Subtotal</label>
                  <input 
                    type="text"
                    :value="formatCurrency(product.price * product.quantity)"
                    readonly
                    class="w-full px-3 py-2 rounded-lg border border-navy/10 bg-gray-50"
                  />
                </div>
              </div>
            </div>
            
            <div v-if="saleForm.products.length === 0" class="text-center p-4 border border-dashed border-navy/10 rounded-lg">
              <p class="text-navy/60">No products added yet</p>
            </div>
          </div>

          <!-- Sale Details -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm text-navy/60 mb-1">Status</label>
              <select 
                v-model="saleForm.status"
                required
                class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
              >
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label class="block text-sm text-navy/60 mb-1">Payment Method</label>
              <select 
                v-model="saleForm.paymentMethod"
                required
                class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
              >
                <option value="cash">Cash</option>
                <option value="credit_card">Credit Card</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="gcash">GCash</option>
              </select>
            </div>
          </div>

          <!-- Override Stock Check -->
          <div class="flex items-center gap-2 mt-4">
            <input 
              type="checkbox"
              id="override-stock"
              v-model="overrideStockCheck"
              class="rounded border-navy/10"
            />
            <label for="override-stock" class="text-sm text-navy/60">
              Override stock validation (Admin only)
            </label>
          </div>

          <!-- Total -->
          <div class="border-t border-navy/10 pt-4">
            <div class="flex justify-between items-center">
              <span class="text-navy font-medium">Total Amount:</span>
              <span class="text-xl font-bold text-navy">{{ formatCurrency(saleForm.total) }}</span>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6">
          <button 
            type="button"
            @click="showAddSaleModal = false"
            class="px-4 py-2 border border-navy/10 rounded-lg text-navy hover:bg-navy/5"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting" class="flex items-center gap-2">
              <LoaderIcon class="w-5 h-5 animate-spin" />
              Saving...
            </span>
            <span v-else>Record Sale</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
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
  updateDoc
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import {
  LayoutDashboard,
  Users,
  Package,
  Home,
  Palette,
  TrendingUp,
  TrendingDown,
  Clipboard,
  Settings,
  Shield,
  User,
  LogOut,
  Menu,
  X,
  DollarSign,
  ShoppingCart,
  Search,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Paintbrush,
  Calendar,
  Bell,
  Plus,
  AlertTriangle,
  RefreshCw,
  Loader
} from 'lucide-vue-next'

// Rename imported icons to avoid conflicts
const PackageIcon = Package
const UserIcon = User
const LogOutIcon = LogOut
const MenuIcon = Menu
const XIcon = X
const DollarSignIcon = DollarSign
const ShoppingCartIcon = ShoppingCart
const BoxIcon = Package
const SearchIcon = Search
const ChevronLeftIcon = ChevronLeft
const ChevronRightIcon = ChevronRight
const DropletsIcon = Droplets
const PaintbrushIcon = Paintbrush
const CalendarIcon = Calendar
const BellIcon = Bell
const PlusIcon = Plus
const AlertTriangleIcon = AlertTriangle
const RefreshCwIcon = RefreshCw
const LoaderIcon = Loader
const TrendingUpIcon = TrendingUp
const TrendingDownIcon = TrendingDown
const ClipboardIcon = Clipboard


// Current date
const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// State
const sales = ref([])
const loading = ref(true)
const error = ref(null)
const totalRevenue = ref(0)
const total = ref(0)
const totalOrders = ref(0)
const totalProductsSold = ref(0)
const averageOrderValue = ref(0)
const topProducts = ref([])
const salesByCategory = ref([])
const availableProducts = ref([])
const showAddSaleModal = ref(false)
const isSubmitting = ref(false)
const mobileSidebarOpen = ref(false)
const router = useRouter()
const overrideStockCheck = ref(false) // New ref for stock validation override

// Date range selector
const dateRanges = [
  { label: '7D', value: '7d' },
  { label: '30D', value: '30d' },
  { label: '3M', value: '3m' },
  { label: '1Y', value: '1y' },
]
const selectedRange = ref('30d')

// Chart controls
const selectedProductMetric = ref('revenue')
const selectedCategoryView = ref('revenue')

// Recent sales table
const searchQuery = ref('')
const salesFilter = ref('all')
const currentPage = ref(1)
const itemsPerPage = 10

// Sale form
const saleForm = ref({
  orderId: '',
  customerId: '',
  customerName: '',
  customerEmail: '',
  products: [],
  total: 0,
  status: 'completed',
  paymentMethod: 'cash'
})

// Navigation items for sidebar
const navigationItems = computed(() => [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Staff Management', path: '/admin/staff', icon: Users },
  { name: 'Inventory', path: '/admin/inventory', icon: PackageIcon },
  { name: 'House Paint Recommender', path: '/admin/house-paint-recommender', icon: Home },
  { name: 'Paint Mixing', path: '/admin/paint-mixing', icon: Palette },
  { name: 'Sales Analytics', path: '/admin/sales-analytics', icon: TrendingUpIcon },
  { name: 'Reports', path: '/admin/reports', icon: ClipboardIcon },
  { name: 'System Settings', path: '/admin/settings', icon: Settings },
  { name: 'Security', path: '/admin/security', icon: Shield }
])


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
          customerEmail: data.customerEmail || '',
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

      // Update reactive refs
      sales.value = salesData
      totalRevenue.value = revenue
      totalOrders.value = salesData.length
      totalProductsSold.value = productsSold
      averageOrderValue.value = salesData.length ? revenue / salesData.length : 0
      
      // Calculate derived data
      calculateTopProducts(salesData)
      calculateSalesByCategory(salesData)
      
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

// Initialize product stock
const initializeProductStock = async () => {
  try {
    const productsRef = collection(db, 'products')
    const snapshot = await getDocs(productsRef)
    
    if (snapshot.empty) {
      alert('No products found to initialize stock')
      return
    }
    
    let updatedCount = 0
    
    for (const docSnapshot of snapshot.docs) {
      const productRef = doc(db, 'products', docSnapshot.id)
      await updateDoc(productRef, {
        stock: 100, // Set a default stock value
        lastUpdated: serverTimestamp()
      })
      updatedCount++
    }
    
    alert(`Successfully initialized stock for ${updatedCount} products. Each product now has 100 units in stock.`)
    fetchAvailableProducts() // Refresh the product list
  } catch (err) {
    console.error('Error initializing stock:', err)
    alert('Failed to initialize stock: ' + err.message)
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

// Get icon for category
const getCategoryIcon = (category) => {
  const icons = {
    'Interior': DropletsIcon,
    'Exterior': PaintbrushIcon,
    'Primers': BoxIcon,
    'Specialty': Palette
  }
  
  return icons[category] || BoxIcon
}

// Computed stats for the cards
const stats = computed(() => [
  {
    label: 'Total Revenue',
    value: formatCurrency(totalRevenue.value),
    trend: 12.5, // You can calculate this based on previous period
    icon: DollarSignIcon,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    label: 'Total Orders',
    value: totalOrders.value.toString(),
    trend: 8.2,
    icon: ShoppingCartIcon,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    label: 'Products Sold',
    value: totalProductsSold.value.toString(),
    trend: -3.1,
    icon: BoxIcon,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    label: 'Average Order Value',
    value: formatCurrency(averageOrderValue.value),
    trend: 5.3,
    icon: TrendingUpIcon,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
])

// Sorted top products based on selected metric
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
  
  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(sale => 
      sale.orderId?.toLowerCase().includes(query) ||
      sale.customerName?.toLowerCase().includes(query) ||
      sale.customerEmail?.toLowerCase().includes(query)
    )
  }
  
  // Apply status filter
  if (salesFilter.value !== 'all') {
    filtered = filtered.filter(sale => sale.status === salesFilter.value)
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

    // Validate stock levels before proceeding (only if override is not checked)
    if (!overrideStockCheck.value) {
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
    } else {
      console.log("Stock validation bypassed with override")
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
      customerEmail: saleForm.value.customerEmail,
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

    // Add sale to Firestore after stock updates
    const salesRef = collection(db, 'sales')
    const docRef = await addDoc(salesRef, saleData)
    
    console.log('Sale added successfully with ID:', docRef.id)
    
    // Show success message
    alert('Sale recorded successfully and inventory updated!')
    
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
    customerEmail: '',
    products: [],
    total: 0,
    status: 'completed',
    paymentMethod: 'cash'
  }
  overrideStockCheck.value = false // Reset override checkbox
}

// Add this function after the resetSaleForm function
const createSampleSale = () => {
  // Reset the form first
  resetSaleForm()
  
  // Set sample data
  saleForm.value.customerName = 'Sample Customer'
  saleForm.value.customerEmail = 'sample@example.com'
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

// Watch for date range changes
watch(selectedRange, () => {
  fetchSalesData()
})

// Watch for search query and filter changes
watch([searchQuery, salesFilter], () => {
  currentPage.value = 1
})

// Initialize data on component mount
onMounted(() => {
  console.log("Component mounted, initializing data...")
  fetchAvailableProducts()
  const unsubscribe = fetchSalesData()
  
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
  router.push('/admin')
}
</script>

<style scoped>
.router-link-active {
  background-color: #f9fafb;
  font-weight: 500;
}

:root {
  --navy: #1e3a8a;
}
</style>