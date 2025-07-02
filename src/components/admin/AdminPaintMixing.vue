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
            :class="{ 'shadow-sm border border-blue-200 transform scale-105': $route.path === '/admin/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700"
            :class="{ 'shadow-sm border border-green-200 transform scale-105': $route.path === '/admin/staff' }"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            :class="{ 'shadow-sm border border-purple-200 transform scale-105': $route.path === '/admin/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': $route.path === '/admin/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 shadow-sm border border-pink-200 transform scale-105"
            :class="{ 'hover:bg-pink-100 hover:text-pink-700': $route.path !== '/admin/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border border-teal-200 transform scale-105': $route.path === '/admin/sales-analytics' }"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
            :class="{ 'shadow-sm border border-indigo-200 transform scale-105': $route.path === '/admin/reports' }"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700"
            :class="{ 'shadow-sm border border-amber-200 transform scale-105': $route.path === '/admin/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700"
            :class="{ 'shadow-sm border border-red-200 transform scale-105': $route.path === '/admin/security' }"
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
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail }}</p>
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
            :class="{ 'shadow-sm border border-blue-200': $route.path === '/admin/dashboard' }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50"
            :class="{ 'shadow-sm border border-green-200': $route.path === '/admin/staff' }"
            @click="mobileSidebarOpen = false"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50"
            :class="{ 'shadow-sm border border-purple-200': $route.path === '/admin/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50"
            :class="{ 'shadow-sm border border-orange-200': $route.path === '/admin/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 shadow-sm border border-pink-200"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <!-- Other mobile nav links... -->
        </nav>

        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail }}</p>
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
              <h1 class="text-2xl font-bold text-gray-900">Admin Paint Mixing Studio</h1>
              <p class="text-gray-600">Create, manage, and approve paint mixtures</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-pink-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900">Welcome, {{ userDisplayName || 'Admin' }}</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
                  <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-6 md:p-8">
          <!-- Loading State -->
          <div v-if="loading" class="flex items-center justify-center p-8">
            <LoaderIcon class="w-8 h-8 text-gray-400 animate-spin mr-2" />
            <span class="text-gray-600">Loading paint mixing data...</span>
          </div>

          <div v-else>
            <!-- Error Alert -->
            <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
              <div class="flex items-center">
                <AlertCircleIcon class="w-5 h-5 mr-2" />
                <span>{{ errorMessage }}</span>
              </div>
            </div>

            <!-- Success Alert -->
            <div v-if="successMessage" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
              <div class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 mr-2" />
                <span>{{ successMessage }}</span>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="flex flex-wrap gap-4 mb-8">
              <button 
                @click="toggleColorPalette" 
                class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <PaletteIcon class="w-5 h-5" />
                <span>Color Palette</span>
              </button>
              <button 
                @click="toggleMixingTips" 
                class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <HelpCircleIcon class="w-5 h-5" />
                <span>Mixing Tips</span>
              </button>
              <button 
                @click="showAddNewColorModal" 
                class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <PlusIcon class="w-5 h-5" />
                <span>Add New Color</span>
              </button>
              <button 
                @click="showStaffMixturesModal = true" 
                class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <CheckSquareIcon class="w-5 h-5" />
                <span>Review Staff Mixtures</span>
                <span class="ml-1 bg-white/20 text-white px-1.5 py-0.5 rounded-full text-xs">
                  {{ pendingApprovalCount }}
                </span>
              </button>
            </div>

            <!-- Paint Mixing Interface -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Left Column: Color Inputs -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <h2 class="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <BeakerIcon class="mr-2 h-6 w-6 text-pink-500" />
                  Mix New Paint
                </h2>

                <form @submit.prevent="createMixture" class="space-y-6">
                  <!-- Base Color Selection -->
                  <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-900 flex items-center">
                      <DropletIcon class="mr-2 h-5 w-5 text-blue-500" />
                      Base Colors
                    </h3>
                    
                    <div v-for="(color, index) in mixture.colors" :key="index" class="flex gap-4 items-center animate-fade-in">
                      <div class="w-8 h-8 rounded-full border-2 border-gray-200 shadow-sm" :style="{ backgroundColor: getColorHex(color.name) }"></div>
                      <div class="relative flex-1">
                        <select 
                          v-model="color.name"
                          @change="updateColorPreview"
                          class="w-full bg-white border border-gray-300 rounded-lg text-gray-900 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all appearance-none pr-10"
                        >
                          <option value="" disabled class="bg-white text-gray-900">Select color</option>
                          <option v-for="baseColor in baseColors" :key="baseColor.id" :value="baseColor.name" class="bg-white text-gray-900">
                            {{ baseColor.name }}
                          </option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <ChevronDownIcon class="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      
                      <input 
                        type="number" 
                        v-model="color.ratio"
                        @input="updateColorPreview"
                        min="0"
                        max="100"
                        class="w-24 bg-white border border-gray-300 rounded-lg text-gray-900 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="Ratio %"
                      />
                      
                      <button 
                        type="button"
                        @click="removeColor(index)"
                        class="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <XIcon class="h-5 w-5" />
                      </button>
                    </div>

                    <div class="flex gap-2">
                      <button 
                        type="button"
                        @click="addColorToMixture"
                        class="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <PlusIcon class="h-5 w-5" />
                        Add Color
                      </button>
                      
                      <button 
                        type="button"
                        @click="showAddColorModal = true"
                        class="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors ml-4"
                      >
                        <PaletteIcon class="h-5 w-5" />
                        Add to Palette
                      </button>
                    </div>
                  </div>

                  <!-- Color Preview -->
                  <div class="space-y-2">
                    <h3 class="text-lg font-semibold text-gray-900 flex items-center">
                      <EyeIcon class="mr-2 h-5 w-5 text-green-500" />
                      Color Preview
                    </h3>
                    <div class="flex items-center gap-4">
                      <div 
                        class="w-24 h-24 rounded-full border-4 border-gray-200 shadow-lg transition-all duration-500"
                        :style="{ backgroundColor: predictedColor }"
                      ></div>
                      <div>
                        <p class="text-gray-900 font-medium">Predicted Color</p>
                        <p class="text-gray-600 text-sm">{{ predictedColor }}</p>
                        <p class="text-gray-700 text-sm mt-2">Suggested Harmony: {{ colorHarmony }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Mixture Details -->
                  <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-900 flex items-center">
                      <ClipboardListIcon class="mr-2 h-5 w-5 text-orange-500" />
                      Mixture Details
                    </h3>
                    
                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-700">Mixture Name</label>
                      <input 
                        type="text"
                        v-model="mixture.name"
                        class="w-full bg-white border border-gray-300 rounded-lg text-gray-900 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="Enter mixture name"
                      />
                    </div>

                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-700">Quantity (Liters)</label>
                      <input 
                        type="number"
                        v-model="mixture.quantity"
                        min="0"
                        step="0.1"
                        class="w-full bg-white border border-gray-300 rounded-lg text-gray-900 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="Enter quantity in liters"
                      />
                    </div>

                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-700">Finish Type</label>
                      <div class="relative">
                        <select 
                          v-model="mixture.finishType"
                          class="w-full bg-white border border-gray-300 rounded-lg text-gray-900 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all appearance-none pr-10"
                        >
                          <option value="" disabled class="bg-white text-gray-900">Select finish type</option>
                          <option value="matte" class="bg-white text-gray-900">Matte</option>
                          <option value="eggshell" class="bg-white text-gray-900">Eggshell</option>
                          <option value="satin" class="bg-white text-gray-900">Satin</option>
                          <option value="semi-gloss" class="bg-white text-gray-900">Semi-Gloss</option>
                          <option value="gloss" class="bg-white text-gray-900">Gloss</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <ChevronDownIcon class="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-700">Notes</label>
                      <textarea 
                        v-model="mixture.notes"
                        rows="3"
                        class="w-full bg-white border border-gray-300 rounded-lg text-gray-900 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                        placeholder="Add any special instructions or notes"
                      ></textarea>
                    </div>
                    
                    <!-- Admin-specific field: Featured Mixture -->
                    <div class="space-y-2">
                      <div class="flex items-center">
                        <input 
                          type="checkbox" 
                          id="featured" 
                          v-model="mixture.featured"
                          class="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                        />
                        <label for="featured" class="ml-2 block text-sm text-gray-700">
                          Feature this mixture (will appear in staff recommendations)
                        </label>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    class="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 flex items-center justify-center gap-2 shadow-lg"
                    :disabled="isSubmitting"
                  >
                    <LoaderIcon v-if="isSubmitting" class="h-5 w-5 animate-spin" />
                    <PaletteIcon v-else class="h-5 w-5" />
                    Create Admin Mixture
                  </button>
                </form>
              </div>

              <!-- Right Column: Recent Mixtures -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <h2 class="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <HistoryIcon class="mr-2 h-6 w-6 text-indigo-500" />
                  All Mixtures
                </h2>
                
                <!-- Search and Filter -->
                <div class="mb-4 flex flex-col sm:flex-row gap-4">
                  <div class="relative flex-1">
                    <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text"
                      v-model="searchQuery"
                      placeholder="Search mixtures..."
                      class="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div class="relative">
                    <select 
                      v-model="filterFinish"
                      class="bg-white border border-gray-300 rounded-lg text-gray-900 w-full px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all appearance-none pr-10"
                    >
                      <option value="" class="bg-white text-gray-900">All Finishes</option>
                      <option value="matte" class="bg-white text-gray-900">Matte</option>
                      <option value="eggshell" class="bg-white text-gray-900">Eggshell</option>
                      <option value="satin" class="bg-white text-gray-900">Satin</option>
                      <option value="semi-gloss" class="bg-white text-gray-900">Semi-Gloss</option>
                      <option value="gloss" class="bg-white text-gray-900">Gloss</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon class="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div class="relative">
                    <select 
                      v-model="filterCreator"
                      class="bg-white border border-gray-300 rounded-lg text-gray-900 w-full px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all appearance-none pr-10"
                    >
                      <option value="" class="bg-white text-gray-900">All Users</option>
                      <option value="staff" class="bg-white text-gray-900">Staff Only</option>
                      <option value="admin" class="bg-white text-gray-900">Admin Only</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon class="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div class="space-y-4 max-h-[calc(100vh-20rem)] overflow-y-auto pr-2">
                  <div v-for="mix in filteredMixtures" :key="mix.id" 
                       class="p-4 bg-gradient-to-r from-white/60 to-gray-50/60 border border-gray-200 rounded-lg group hover:border-gray-300 hover:shadow-md transition-all duration-300 animate-fade-in"
                       :class="{'border-purple-300 bg-gradient-to-r from-purple-50/60 to-pink-50/60': mix.createdBy === 'admin', 'border-green-300 bg-gradient-to-r from-green-50/60 to-blue-50/60': mix.createdBy === 'staff'}"
                  >
                    <div class="flex justify-between items-start mb-2">
                      <div class="flex items-center">
                        <h3 class="font-semibold text-gray-900 text-lg">{{ mix.name }}</h3>
                        <span v-if="mix.featured" class="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full border border-yellow-200">
                          Featured
                        </span>
                      </div>
                      <span class="text-sm text-gray-600">{{ formatDate(mix.date) }}</span>
                    </div>
                    
                    <div class="flex items-center gap-4 mb-2">
                      <div 
                        class="w-16 h-16 rounded-full border-2 border-gray-200 shadow-sm"
                        :style="{ backgroundColor: mix.predictedColor }"
                      ></div>
                      <div class="flex-1">
                        <div class="flex flex-wrap gap-2">
                          <div 
                            v-for="color in mix.colors" 
                            :key="color.name"
                            class="flex items-center gap-1 bg-white/80 px-2 py-1 rounded-full border border-gray-200"
                          >
                            <div 
                              class="w-3 h-3 rounded-full border border-gray-300"
                              :style="{ backgroundColor: color.hex }"
                            ></div>
                            <span class="text-xs text-gray-700">{{ color.name }} ({{ color.ratio }}%)</span>
                          </div>
                        </div>
                        <div class="mt-2 flex items-center">
                          <span 
                            class="text-xs px-2 py-1 rounded-full"
                            :class="mix.createdBy === 'admin' ? 'bg-purple-100 text-purple-700 border border-purple-200' : 'bg-green-100 text-green-700 border border-green-200'"
                          >
                            {{ mix.createdBy === 'admin' ? 'By Admin' : 'By Staff' }}
                          </span>
                          <span 
                            v-if="mix.status === 'pending'" 
                            class="ml-2 text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full border border-yellow-200"
                          >
                            Pending Approval
                          </span>
                          <span 
                            v-if="mix.status === 'approved'" 
                            class="ml-2 text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full border border-green-200"
                          >
                            Approved
                          </span>
                        </div>
                      </div>
                    </div>

                    <p class="text-sm text-gray-600">Quantity: {{ mix.quantity }} liters</p>
                    <p class="text-sm text-gray-600">Finish: {{ mix.finishType }}</p>
                    
                    <div class="flex flex-wrap gap-4 mt-3">
                      <button 
                        @click="duplicateMixture(mix)"
                        class="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-sm"
                      >
                        <CopyIcon class="h-4 w-4" />
                        Duplicate
                      </button>
                      <button 
                        @click="viewDetails(mix)"
                        class="flex items-center gap-1 text-gray-600 hover:text-gray-700 transition-colors text-sm"
                      >
                        <EyeIcon class="h-4 w-4" />
                        View Details
                      </button>
                      <button 
                        @click="editMixture(mix)"
                        class="flex items-center gap-1 text-gray-600 hover:text-gray-700 transition-colors text-sm"
                      >
                        <EditIcon class="h-4 w-4" />
                        Edit
                      </button>
                      <button 
                        v-if="mix.createdBy === 'staff' && mix.status === 'pending'"
                        @click="approveMixture(mix.id)"
                        class="flex items-center gap-1 text-green-600 hover:text-green-700 transition-colors text-sm"
                      >
                        <CheckIcon class="h-4 w-4" />
                        Approve
                      </button>
                      <button 
                        @click="deleteMixture(mix.id)"
                        class="flex items-center gap-1 text-red-500 hover:text-red-600 transition-colors text-sm"
                      >
                        <Trash2Icon class="h-4 w-4" />
                        Delete
                      </button>
                      <button 
                        v-if="mix.createdBy === 'admin' && !mix.featured"
                        @click="toggleFeatureMixture(mix.id, true)"
                        class="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 transition-colors text-sm"
                      >
                        <StarIcon class="h-4 w-4" />
                        Feature
                      </button>
                      <button 
                        v-if="mix.createdBy === 'admin' && mix.featured"
                        @click="toggleFeatureMixture(mix.id, false)"
                        class="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 transition-colors text-sm"
                      >
                        <StarOffIcon class="h-4 w-4" />
                        Unfeature
                      </button>
                    </div>
                  </div>

                  <!-- Empty State -->
                  <div v-if="filteredMixtures.length === 0" 
                       class="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div class="p-4 bg-gray-100 rounded-full mb-4">
                      <PaletteIcon class="h-12 w-12 text-gray-400" />
                    </div>
                    <p class="text-gray-700 mb-2">No Mixtures Found</p>
                    <p class="text-gray-500 text-sm">Try adjusting your filters or create a new mixture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Mixture Details Modal -->
    <transition name="modal">
      <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showModal = false"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-200">
            <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Mixture Details
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-600">
                      {{ selectedMixture?.name }}
                      <span v-if="selectedMixture?.featured" class="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full border border-yellow-200">
                        Featured
                      </span>
                    </p>
                    <div class="mt-4 flex items-center gap-4">
                      <div 
                        class="w-20 h-20 rounded-full border-2 border-gray-200"
                        :style="{ backgroundColor: selectedMixture?.predictedColor }"
                      ></div>
                      <div>
                        <p class="text-gray-900 font-medium">Predicted Color</p>
                        <p class="text-gray-600 text-sm">{{ selectedMixture?.predictedColor }}</p>
                        <div class="flex flex-wrap gap-2 mt-2">
                          <span 
                            class="text-xs px-2 py-1 rounded-full"
                            :class="selectedMixture?.createdBy === 'admin' ? 'bg-purple-100 text-purple-700 border border-purple-200' : 'bg-green-100 text-green-700 border border-green-200'"
                          >
                            {{ selectedMixture?.createdBy === 'admin' ? 'Created by Admin' : 'Created by Staff' }}
                          </span>
                          <span 
                            v-if="selectedMixture?.status === 'pending'" 
                            class="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full border border-yellow-200"
                          >
                            Pending Approval
                          </span>
                          <span 
                            v-if="selectedMixture?.status === 'approved'" 
                            class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full border border-green-200"
                          >
                            Approved
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-gray-900">Color Composition</h4>
                      <ul class="mt-2 space-y-2">
                        <li v-for="color in selectedMixture?.colors" :key="color.name" class="flex items-center gap-2">
                          <div 
                            class="w-4 h-4 rounded-full border border-gray-300"
                            :style="{ backgroundColor: color.hex }"
                          ></div>
                          <span class="text-sm text-gray-600">{{ color.name }} ({{ color.ratio }}%)</span>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-gray-900">Quantity</h4>
                      <p class="text-sm text-gray-600">{{ selectedMixture?.quantity }} liters</p>
                    </div>
                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-gray-900">Finish Type</h4>
                      <p class="text-sm text-gray-600">{{ selectedMixture?.finishType }}</p>
                    </div>
                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-gray-900">Notes</h4>
                      <p class="text-sm text-gray-600">{{ selectedMixture?.notes || 'No notes provided' }}</p>
                    </div>
                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-gray-900">Created On</h4>
                      <p class="text-sm text-gray-600">{{ formatDate(selectedMixture?.date) }}</p>
                    </div>
                    <div v-if="selectedMixture?.createdBy === 'staff'" class="mt-4">
                      <h4 class="text-sm font-medium text-gray-900">Created By</h4>
                      <p class="text-sm text-gray-600">{{ selectedMixture?.staffName || 'Unknown Staff' }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button 
                v-if="selectedMixture?.createdBy === 'staff' && selectedMixture?.status === 'pending'"
                type="button" 
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="approveMixture(selectedMixture.id)"
              >
                Approve Mixture
              </button>
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="showModal = false">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Color Palette Modal -->
    <transition name="modal">
      <div v-if="showColorPalette" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showColorPalette = false"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="px-6 pt-6 pb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <PaletteIcon class="w-6 h-6 mr-2" />
                Color Palette
              </h3>
              
              <!-- Add color categories -->
              <div class="mb-6">
                <div class="flex flex-wrap gap-2">
                  <button 
                    @click="filterColorCategory = ''"
                    class="px-3 py-1 text-sm rounded-full"
                    :class="filterColorCategory === '' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                  >
                    All Colors
                  </button>
                  <button 
                    @click="filterColorCategory = 'primary'"
                    class="px-3 py-1 text-sm rounded-full"
                    :class="filterColorCategory === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                  >
                    Primary
                  </button>
                  <button 
                    @click="filterColorCategory = 'earth'"
                    class="px-3 py-1 text-sm rounded-full"
                    :class="filterColorCategory === 'earth' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                  >
                    Earth Tones
                  </button>
                  <button 
                    @click="filterColorCategory = 'custom'"
                    class="px-3 py-1 text-sm rounded-full"
                    :class="filterColorCategory === 'custom' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                  >
                    Custom
                  </button>
                </div>
              </div>
              
              <!-- Colors grid -->
              <div class="grid grid-cols-3 gap-6 mb-6">
                <div v-for="color in filteredPaletteColors" :key="color.id" 
                     class="flex flex-col items-center"
                >
                  <div 
                    class="w-16 h-16 rounded-full border-2 border-gray-200 cursor-pointer shadow-md hover:shadow-lg transition-all"
                    :style="{ backgroundColor: color.hex }"
                    @click="addColorToMixtureFromPalette(color)"
                  ></div>
                  <div class="flex flex-col items-center mt-2">
                    <span class="text-gray-900 text-sm font-medium text-center">{{ color.name }}</span>
                    <span class="text-gray-600 text-xs">{{ color.hex }}</span>
                    <button 
                      @click="deleteColor(color.id)" 
                      class="mt-2 px-2 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 flex items-center gap-1 transition-colors"
                    >
                      <Trash2Icon class="h-3 w-3" />
                      <span class="text-xs">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div class="flex justify-end">
                <button 
                  @click="showColorPalette = false"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Simple Add Color Modal -->
    <transition name="modal">
      <div v-if="showAddColorModal" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showAddColorModal = false"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
            <div class="px-6 pt-6 pb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <PlusIcon class="w-6 h-6 mr-2" />
                Add New Color
              </h3>
              
              <div class="space-y-6">
                <div>
                  <label class="block text-gray-900 mb-2">Color Name</label>
                  <input 
                    type="text" 
                    v-model="newColorName" 
                    class="w-full bg-white border border-gray-300 rounded-lg text-gray-900 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter color name"
                  />
                </div>
                
                <div>
                  <label class="block text-gray-900 mb-2">Color Hex Code</label>
                  <input 
                    type="text" 
                    v-model="newColorHex" 
                    class="w-full bg-white border border-gray-300 rounded-lg text-gray-900 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="e.g. #FF5733"
                  />
                </div>
                
                <div>
                  <label class="block text-gray-900 mb-2">Category</label>
                  <select 
                    v-model="newColorCategory" 
                    class="w-full bg-white border border-gray-300 rounded-lg text-gray-900 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="custom">Custom</option>
                    <option value="primary">Primary</option>
                    <option value="earth">Earth Tones</option>
                  </select>
                </div>
                
                <div class="flex justify-end gap-3">
                  <button 
                    @click="showAddColorModal = false"
                    class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    @click="addNewColorToPalette"
                    class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Add Color
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Mixing Tips Modal -->
    <transition name="modal">
      <div v-if="showMixingTips" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showMixingTips = false"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="px-6 pt-6 pb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <HelpCircleIcon class="w-6 h-6 mr-2" />
                Professional Paint Mixing Tips
              </h3>
              <ul class="list-disc list-inside text-gray-700 space-y-3">
                <li>Always start with the lightest color and gradually add darker colors</li>
                <li>Mix small amounts at a time to avoid wasting paint</li>
                <li>Use a color wheel to understand complementary and contrasting colors</li>
                <li>Keep track of your ratios for consistency in future mixes</li>
                <li>Allow mixed paint to dry to see its true color</li>
                <li>Consider the finish type when mixing for different surfaces</li>
                <li>Admin mixtures are automatically approved and can be featured</li>
                <li>Featured mixtures appear in staff recommendations</li>
              </ul>
              
              <div class="flex justify-end mt-6">
                <button 
                  @click="showMixingTips = false"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    
    <!-- Staff Mixtures Review Modal -->
    <transition name="modal">
      <div v-if="showStaffMixturesModal" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showStaffMixturesModal = false"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
            <div class="px-6 pt-6 pb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckSquareIcon class="w-6 h-6 mr-2" />
                Staff Mixtures Pending Approval
              </h3>
              
              <div class="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <div v-for="mix in pendingStaffMixtures" :key="mix.id" 
                     class="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300 animate-fade-in"
                >
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-semibold text-gray-900 text-lg">{{ mix.name }}</h3>
                    <span class="text-sm text-gray-600">{{ formatDate(mix.date) }}</span>
                  </div>
                  
                  <div class="flex items-center gap-4 mb-2">
                    <div 
                      class="w-16 h-16 rounded-full border-2 border-gray-200 shadow-sm"
                      :style="{ backgroundColor: mix.predictedColor }"
                    ></div>
                    <div class="flex-1">
                      <div class="flex flex-wrap gap-2">
                        <div 
                          v-for="color in mix.colors" 
                          :key="color.name"
                          class="flex items-center gap-1 bg-white/80 px-2 py-1 rounded-full border border-gray-200"
                        >
                          <div 
                            class="w-3 h-3 rounded-full border border-gray-300"
                            :style="{ backgroundColor: color.hex }"
                          ></div>
                          <span class="text-xs text-gray-700">{{ color.name }} ({{ color.ratio }}%)</span>
                        </div>
                      </div>
                      <div class="mt-2">
                        <p class="text-sm text-gray-600">Created by: {{ mix.staffName || 'Unknown Staff' }}</p>
                        <p class="text-sm text-gray-600">Quantity: {{ mix.quantity }} liters | Finish: {{ mix.finishType }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex justify-end gap-3 mt-3">
                    <button 
                      @click="viewDetails(mix)"
                      class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      View Details
                    </button>
                    <button 
                      @click="approveMixture(mix.id)"
                      class="px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Approve
                    </button>
                    <button 
                      @click="deleteMixture(mix.id)"
                      class="px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                </div>
                
                <!-- Empty State -->
                <div v-if="pendingStaffMixtures.length === 0" 
                     class="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div class="p-4 bg-gray-100 rounded-full mb-4">
                    <CheckSquareIcon class="h-12 w-12 text-gray-400" />
                  </div>
                  <p class="text-gray-700 mb-2">No Pending Mixtures</p>
                  <p class="text-gray-500 text-sm">All staff mixtures have been reviewed</p>
                </div>
              </div>
              
              <div class="flex justify-end mt-6">
                <button 
                  @click="showStaffMixturesModal = false"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Logout Confirmation Modal -->
    <transition name="modal">
      <div v-if="showLogoutConfirmation" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showLogoutConfirmation = false"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
            <div class="px-6 pt-6 pb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Confirm Logout</h3>
              <p class="text-gray-700 mb-6">Are you sure you want to log out of your account?</p>
              <div class="flex justify-end gap-3">
                <button 
                  @click="showLogoutConfirmation = false"
                  class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  @click="confirmLogout"
                  class="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg flex items-center"
                  :disabled="isLoggingOut"
                >
                  <LoaderIcon v-if="isLoggingOut" class="animate-spin w-4 h-4 mr-2" />
                  <span>{{ isLoggingOut ? 'Logging out...' : 'Logout' }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
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
  Plus as PlusIcon,
  Copy as CopyIcon,
  Eye as EyeIcon,
  Edit as EditIcon,
  Beaker as BeakerIcon,
  Droplet as DropletIcon,
  ClipboardList as ClipboardListIcon,
  History as HistoryIcon,
  HelpCircle as HelpCircleIcon,
  Trash2 as Trash2Icon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  Search as SearchIcon,
  Loader as LoaderIcon,
  AlertCircle as AlertCircleIcon,
  CheckCircle as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  Check as CheckIcon,
  CheckSquare as CheckSquareIcon,
  Shield as ShieldIcon,
  Star as StarIcon,
  StarOff as StarOffIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Clipboard as ClipboardIcon
} from 'lucide-vue-next'
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  updateDoc,
  Timestamp,
  where
} from 'firebase/firestore'

// Import the correct Firebase configuration with auth
import { db, auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'

const router = useRouter()
const mobileSidebarOpen = ref(false)
const loading = ref(true)
const isSubmitting = ref(false)
const unsubscribe = ref(null)
const errorMessage = ref('')
const successMessage = ref('')

// User information
const userEmail = ref('')
const userDisplayName = ref('')

// Logout state
const showLogoutConfirmation = ref(false)
const isLoggingOut = ref(false)

// Current date
const currentDate = ref(new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
}))

// Enhance the baseColors array with more paint-specific colors and accurate RGB values
const baseColors = ref([
  { id: 1, name: 'White', hex: '#FFFFFF', rgb: [255, 255, 255], category: 'primary' },
  { id: 2, name: 'Black', hex: '#000000', rgb: [0, 0, 0], category: 'primary' },
  { id: 3, name: 'Titanium White', hex: '#F8F8F8', rgb: [248, 248, 248], category: 'primary' },
  { id: 4, name: 'Ivory Black', hex: '#1B1B1B', rgb: [27, 27, 27], category: 'primary' },
  { id: 5, name: 'Cadmium Red', hex: '#E30022', rgb: [227, 0, 34], category: 'primary' },
  { id: 6, name: 'Alizarin Crimson', hex: '#E32636', rgb: [227, 38, 54], category: 'primary' },
  { id: 7, name: 'Cadmium Yellow', hex: '#FFF600', rgb: [255, 246, 0], category: 'primary' },
  { id: 8, name: 'Yellow Ochre', hex: '#CB9D06', rgb: [203, 157, 6], category: 'earth' },
  { id: 9, name: 'Ultramarine Blue', hex: '#1B1BB3', rgb: [27, 27, 179], category: 'primary' },
  { id: 10, name: 'Phthalo Blue', hex: '#000F89', rgb: [0, 15, 137], category: 'primary' },
  { id: 11, name: 'Viridian Green', hex: '#009874', rgb: [0, 152, 116], category: 'earth' },
  { id: 12, name: 'Sap Green', hex: '#507D2A', rgb: [80, 125, 42], category: 'earth' },
  { id: 13, name: 'Burnt Sienna', hex: '#8A3324', rgb: [138, 51, 36], category: 'earth' },
  { id: 14, name: 'Burnt Umber', hex: '#6C4C3E', rgb: [108, 76, 62], category: 'earth' },
  { id: 15, name: 'Raw Sienna', hex: '#B38B6D', rgb: [179, 139, 109], category: 'earth' },
  { id: 16, name: 'Naples Yellow', hex: '#FFDD9A', rgb: [255, 221, 154], category: 'earth' },
])

// Current mixture being created
const mixture = reactive({
  name: '',
  colors: [{ name: '', ratio: '' }],
  quantity: '',
  notes: '',
  finishType: '',
  featured: false
})

// State variables
const recentMixtures = ref([])
const predictedColor = ref('#FFFFFF')
const showModal = ref(false)
const selectedMixture = ref(null)
const showColorPalette = ref(false)
const showMixingTips = ref(false)
const searchQuery = ref('')
const filterFinish = ref('')
const filterCreator = ref('')
const colorHarmony = ref('')
const filterColorCategory = ref('')
const showStaffMixturesModal = ref(false)

// Simple Add Color Modal
const showAddColorModal = ref(false)
const newColorName = ref('')
const newColorHex = ref('#')
const newColorCategory = ref('custom')

// Computed property for filtered palette colors
const filteredPaletteColors = computed(() => {
  if (!filterColorCategory.value) {
    return baseColors.value
  }
  
  return baseColors.value.filter(color => 
    color.category === filterColorCategory.value
  )
})

// Computed property for pending staff mixtures
const pendingStaffMixtures = computed(() => {
  return recentMixtures.value.filter(mix => 
    mix.createdBy === 'staff' && mix.status === 'pending'
  )
})

// Computed property for pending approval count
const pendingApprovalCount = computed(() => {
  return pendingStaffMixtures.value.length
})

// Clear messages after 5 seconds
const clearMessages = () => {
  setTimeout(() => {
    errorMessage.value = ''
    successMessage.value = ''
  }, 5000)
}

// Get current user info
const fetchUserInfo = () => {
  const user = auth.currentUser
  if (user) {
    userEmail.value = user.email || ''
    userDisplayName.value = user.displayName || 'Admin User'
  }
}

// Fetch mixtures from Firestore
const fetchMixtures = async () => {
  try {
    loading.value = true
    errorMessage.value = ''
    
    console.log('Attempting to fetch mixtures from Firestore...')
    
    // Check if user is authenticated
    if (!auth.currentUser) {
      console.log('User not authenticated, showing error')
      errorMessage.value = 'You must be logged in to view mixtures'
      loading.value = false
      return
    }
    
    // Create query with ordering by date (newest first)
    const mixturesCollection = collection(db, 'paintMixtures')
    const q = query(mixturesCollection, orderBy('date', 'desc'))
    
    // Set up real-time listener
    if (unsubscribe.value) {
      unsubscribe.value()
    }
    
    unsubscribe.value = onSnapshot(q, (snapshot) => {
      console.log('Snapshot received, docs count:', snapshot.docs.length)
      recentMixtures.value = snapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          ...data,
          date: data.date?.toDate?.() || new Date(),
          colors: data.colors || [],
          createdBy: data.createdBy || 'admin',
          status: data.status || (data.createdBy === 'admin' ? 'approved' : 'pending'),
          featured: data.featured || false
        }
      })
      
      loading.value = false
      console.log('Fetched paint mixtures with real-time updates:', recentMixtures.value)
    }, (error) => {
      console.error('Error in onSnapshot:', error)
      loading.value = false
      errorMessage.value = `Failed to load mixtures: ${error.message}. Please refresh the page.`
      clearMessages()
    })
  } catch (error) {
    console.error('Error in fetchMixtures:', error)
    loading.value = false
    errorMessage.value = `Failed to connect to database: ${error.message}. Please refresh the page.`
    clearMessages()
  }
}

// Create a new mixture
const createMixture = async () => {
  try {
    // Reset error message
    errorMessage.value = ''
    
    // Validate form
    if (!mixture.name) {
      errorMessage.value = 'Please enter a mixture name'
      clearMessages()
      return
    }
    
    if (!mixture.quantity) {
      errorMessage.value = 'Please enter a quantity'
      clearMessages()
      return
    }
    
    if (!mixture.finishType) {
      errorMessage.value = 'Please select a finish type'
      clearMessages()
      return
    }
    
    const validColors = mixture.colors.filter(color => color.name && color.ratio)
    if (validColors.length === 0) {
      errorMessage.value = 'Please add at least one color with a ratio'
      clearMessages()
      return
    }
    
    // Check if user is authenticated
    if (!auth.currentUser) {
      errorMessage.value = 'You must be logged in to create mixtures'
      clearMessages()
      return
    }
    
    isSubmitting.value = true
    console.log('Creating new mixture...')
    
    // Create the mixture object with user ID
    const newMixture = {
      name: mixture.name,
      date: Timestamp.now(),
      colors: mixture.colors
        .filter(color => color.name && color.ratio)
        .map(color => ({
          name: color.name,
          ratio: parseFloat(color.ratio),
          hex: getColorHex(color.name)
        })),
      quantity: parseFloat(mixture.quantity),
      notes: mixture.notes || '',
      finishType: mixture.finishType,
      predictedColor: predictedColor.value,
      createdBy: 'admin',
      userId: auth.currentUser.uid,
      status: 'approved', // Admin mixtures are automatically approved
      featured: mixture.featured || false
    }
    
    console.log('Mixture object to save:', newMixture)
    
    // Add to Firestore
    const mixturesCollection = collection(db, 'paintMixtures')
    const docRef = await addDoc(mixturesCollection, newMixture)
    console.log('Mixture created with ID:', docRef.id)
    
    // Show success message
    successMessage.value = 'Mixture created successfully!'
    clearMessages()
    
    // Reset form
    mixture.name = ''
    mixture.colors = [{ name: '', ratio: '' }]
    mixture.quantity = ''
    mixture.notes = ''
    mixture.finishType = ''
    mixture.featured = false
    predictedColor.value = '#FFFFFF'
    colorHarmony.value = ''
    
  } catch (error) {
    console.error('Error creating mixture:', error)
    errorMessage.value = 'Error creating mixture: ' + (error.message || 'Please try again')
    clearMessages()
  } finally {
    isSubmitting.value = false
  }
}

// Approve a staff mixture
const approveMixture = async (id) => {
  try {
    const docRef = doc(db, 'paintMixtures', id)
    await updateDoc(docRef, {
      status: 'approved',
      approvedBy: auth.currentUser.uid,
      approvedAt: Timestamp.now()
    })
    
    successMessage.value = 'Mixture approved successfully'
    clearMessages()
    
    // Close modals if open
    showModal.value = false
    showStaffMixturesModal.value = false
  } catch (error) {
    console.error('Error approving mixture:', error)
    errorMessage.value = 'Error approving mixture: ' + (error.message || 'Please try again')
    clearMessages()
  }
}

// Toggle featured status of a mixture
const toggleFeatureMixture = async (id, featured) => {
  try {
    const docRef = doc(db, 'paintMixtures', id)
    await updateDoc(docRef, { featured })
    
    successMessage.value = featured ? 'Mixture featured successfully' : 'Mixture unfeatured successfully'
    clearMessages()
  } catch (error) {
    console.error('Error updating featured status:', error)
    errorMessage.value = 'Error updating featured status: ' + (error.message || 'Please try again')
    clearMessages()
  }
}

// Clean up listener on component unmount
onUnmounted(() => {
  if (unsubscribe.value) {
    unsubscribe.value()
  }
})

// Add a new color to the mixture
const addColorToMixture = () => {
  mixture.colors.push({ name: '', ratio: '' })
}

// Remove a color from the mixture
const removeColor = (index) => {
  mixture.colors.splice(index, 1)
  updateColorPreview()
}

// Improve the updateColorPreview function to use a more accurate subtractive color mixing model
const updateColorPreview = () => {
  // For paint mixing, we need to use a subtractive color model (CMYK-like)
  // Convert RGB to CMY (Cyan, Magenta, Yellow)
  let c = 0, m = 0, y = 0, totalRatio = 0
  
  mixture.colors.forEach(color => {
    const baseColor = baseColors.value.find(c => c.name === color.name)
    if (baseColor && color.ratio) {
      const ratio = parseFloat(color.ratio) / 100
      
      // Convert RGB to CMY
      const cyan = 1 - (baseColor.rgb[0] / 255)
      const magenta = 1 - (baseColor.rgb[1] / 255)
      const yellow = 1 - (baseColor.rgb[2] / 255)
      
      // Weighted addition for subtractive mixing
      c += cyan * ratio
      m += magenta * ratio
      y += yellow * ratio
      totalRatio += ratio
    }
  })
  
  if (totalRatio > 0) {
    // Normalize
    c = c / totalRatio
    m = m / totalRatio
    y = y / totalRatio
    
    // Convert back to RGB
    const r = Math.round(255 * (1 - c))
    const g = Math.round(255 * (1 - m))
    const b = Math.round(255 * (1 - y))
    
    predictedColor.value = `rgb(${r}, ${g}, ${b})`
    updateColorHarmony(r, g, b)
  } else {
    predictedColor.value = '#FFFFFF'
    colorHarmony.value = ''
  }
}

// Update color harmony suggestion based on RGB values
const updateColorHarmony = (r, g, b) => {
  const hue = rgbToHue(r, g, b)
  if (hue >= 0 && hue < 30) colorHarmony.value = 'Warm'
  else if (hue >= 30 && hue < 90) colorHarmony.value = 'Energetic'
  else if (hue >= 90 && hue < 150) colorHarmony.value = 'Natural'
  else if (hue >= 150 && hue < 210) colorHarmony.value = 'Cool'
  else if (hue >= 210 && hue < 270) colorHarmony.value = 'Calm'
  else if (hue >= 270 && hue < 330) colorHarmony.value = 'Regal'
  else colorHarmony.value = 'Passionate'
}

// Convert RGB to hue value
const rgbToHue = (r, g, b) => {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h
  if (max === min) {
    h = 0 // achromatic
  } else {
    const d = max - min
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }
  return h * 360
}

// Duplicate an existing mixture
const duplicateMixture = (mix) => {
  mixture.name = `Copy of ${mix.name}`
  mixture.colors = mix.colors.map(c => ({ name: c.name, ratio: c.ratio.toString() }))
  mixture.quantity = mix.quantity.toString()
  mixture.notes = mix.notes
  mixture.finishType = mix.finishType
  mixture.featured = false // Don't copy featured status
  updateColorPreview()
}

// View details of a mixture
const viewDetails = (mix) => {
  selectedMixture.value = mix
  showModal.value = true
}

// Edit an existing mixture
const editMixture = async (mix) => {
  // Admin can edit any mixture
  mixture.name = mix.name
  mixture.colors = mix.colors.map(c => ({ name: c.name, ratio: c.ratio.toString() }))
  mixture.quantity = mix.quantity.toString()
  mixture.notes = mix.notes
  mixture.finishType = mix.finishType
  mixture.featured = mix.featured || false
  updateColorPreview()
  
  // If it's a staff mixture, we'll update it
  if (mix.createdBy === 'staff') {
    try {
      const docRef = doc(db, 'paintMixtures', mix.id)
      await deleteDoc(docRef)
      successMessage.value = 'Staff mixture deleted. Create a new admin version if needed.'
      clearMessages()
    } catch (error) {
      console.error('Error deleting staff mixture:', error)
      errorMessage.value = 'Error deleting staff mixture: ' + (error.message || 'Please try again')
      clearMessages()
    }
  }
}

// Delete a mixture
const deleteMixture = async (id) => {
  try {
    if (confirm('Are you sure you want to delete this mixture?')) {
      const docRef = doc(db, 'paintMixtures', id)
      await deleteDoc(docRef)
      successMessage.value = 'Mixture deleted successfully'
      clearMessages()
    }
  } catch (error) {
    console.error('Error deleting mixture:', error)
    errorMessage.value = 'Error deleting mixture: ' + (error.message || 'Please try again')
    clearMessages()
  }
}

// Format date for display
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = dateString instanceof Date ? dateString : new Date(dateString)
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
  return date.toLocaleDateString(undefined, options)
}

// Get hex color code by color name
const getColorHex = (colorName) => {
  return baseColors.value.find(c => c.name === colorName)?.hex || '#FFFFFF'
}

// Toggle color palette modal
const toggleColorPalette = () => {
  showColorPalette.value = !showColorPalette.value
}

// Toggle mixing tips modal
const toggleMixingTips = () => {
  showMixingTips.value = !showMixingTips.value
}

// Add a color from the palette to the mixture
const addColorToMixtureFromPalette = (color) => {
  // Add color with a default ratio of 50% if it's the first color, 25% otherwise
  const defaultRatio = mixture.colors.length === 1 && !mixture.colors[0].name ? '100' : '25'
  mixture.colors.push({ name: color.name, ratio: defaultRatio })
  updateColorPreview()
  showColorPalette.value = false
}

// Add a new color to the palette
const addNewColorToPalette = () => {
  if (!newColorName.value) {
    errorMessage.value = 'Please enter a color name'
    clearMessages()
    return
  }

  if (!newColorHex.value || !/^#[0-9A-F]{6}$/i.test(newColorHex.value)) {
    errorMessage.value = 'Please enter a valid hex color code (e.g. #FF5733)'
    clearMessages()
    return
  }

  // Convert hex to RGB
  const r = parseInt(newColorHex.value.slice(1, 3), 16)
  const g = parseInt(newColorHex.value.slice(3, 5), 16)
  const b = parseInt(newColorHex.value.slice(5, 7), 16)

  // Add to baseColors
  const newId = baseColors.value.length + 1
  baseColors.value.push({
    id: newId,
    name: newColorName.value,
    hex: newColorHex.value,
    rgb: [r, g, b],
    category: newColorCategory.value
  })

  // Reset form
  newColorName.value = ''
  newColorHex.value = '#'
  newColorCategory.value = 'custom'

  // Close modal
  showAddColorModal.value = false

  // Show success message
  successMessage.value = `Added ${newColorName.value} to palette`
  clearMessages()
}

// Helper function to convert RGB to HEX
const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
}

// Filtered mixtures based on search query and filters
const filteredMixtures = computed(() => {
  return recentMixtures.value.filter(mix => {
    const nameMatch = mix.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const finishMatch = filterFinish.value === '' || mix.finishType === filterFinish.value
    const creatorMatch = filterCreator.value === '' || mix.createdBy === filterCreator.value
    return nameMatch && finishMatch && creatorMatch
  })
})

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
    
    // Redirect to homepage (root path)
    router.push('/')
  } catch (error) {
    console.error('Error signing out:', error)
  } finally {
    isLoggingOut.value = false
    showLogoutConfirmation.value = false
  }
}

// Toggle mobile sidebar
const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

// Delete a color from the palette
const deleteColor = (id) => {
  // Prevent deleting if there are less than 5 colors to ensure we always have some colors
  if (baseColors.value.length <= 5) {
    errorMessage.value = 'Cannot delete: Minimum 5 colors required in palette'
    clearMessages()
    return
  }

  baseColors.value = baseColors.value.filter(color => color.id !== id)
  successMessage.value = 'Color deleted successfully'
  clearMessages()
}

// Show the Add New Color modal
const showAddNewColorModal = () => {
  showAddColorModal.value = true
}

// Modify the onMounted hook to check for authentication
onMounted(() => {
  console.log('Component mounted, initializing...')
  updateColorPreview()

  // Fetch user info
  fetchUserInfo()

  // Check if db is available
  if (!db) {
    console.error('Firebase database not initialized')
    errorMessage.value = 'Database connection failed. Please check your internet connection and refresh.'
    loading.value = false
    return
  }

  // Check if user is authenticated
  if (!auth.currentUser) {
    console.log('User not authenticated, showing error')
    errorMessage.value = 'You must be logged in to view and create mixtures'
    loading.value = false
    return
  }

  // Add a small delay to ensure Firebase is fully initialized
  setTimeout(() => {
    fetchMixtures()
  }, 500)
})
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

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Fix for select dropdowns */
select {
  background-image: none; /* Remove default arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 2rem; /* Make space for our custom arrow */
}

/* Add a custom dropdown arrow that will be visible on all backgrounds */
.custom-select-wrapper {
  position: relative;
}

.custom-select-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: white;
}
</style>