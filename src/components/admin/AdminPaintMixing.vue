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
              <h1 class="text-2xl font-bold text-white">AI-Powered Paint Mixing Studio</h1>
              <p class="text-white/60">Create, predict, and manage custom paint mixtures with advanced AI assistance</p>
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
          <!-- Quick Actions -->
          <div class="flex flex-wrap gap-4 mb-8">
            <button 
              @click="toggleColorPalette" 
              class="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#0A2159] to-[#0A3573] text-white rounded-lg hover:opacity-90 transition-colors shadow-lg border border-white/10"
            >
              <PaletteIcon class="w-5 h-5" />
              <span>Color Palette</span>
            </button>
            <button 
              @click="toggleMixingTips" 
              class="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#0A2159] to-[#0A3573] text-white rounded-lg hover:opacity-90 transition-colors shadow-lg border border-white/10"
            >
              <HelpCircleIcon class="w-5 h-5" />
              <span>Mixing Tips</span>
            </button>
            <button 
              @click="showAddColorModal = true" 
              class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg"
            >
              <PlusIcon class="w-5 h-5" />
              <span>Add New Color</span>
            </button>
          </div>

          <!-- Paint Mixing Interface -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Column: Color Inputs -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <h2 class="text-2xl font-bold mb-6 text-white flex items-center">
                <BeakerIcon class="mr-2 h-6 w-6 text-white/80" />
                Mix New Paint
              </h2>

              <form @submit.prevent="createMixture" class="space-y-6">
                <!-- Base Color Selection -->
                <div class="space-y-4">
                  <h3 class="text-lg font-semibold text-white flex items-center">
                    <DropletIcon class="mr-2 h-5 w-5 text-white/80" />
                    Base Colors
                  </h3>
                  
                  <div v-for="(color, index) in mixture.colors" :key="index" class="flex gap-4 items-center animate-fade-in">
                    <div class="w-8 h-8 rounded-full border-2 border-white/20" :style="{ backgroundColor: getColorHex(color.name) }"></div>
                    <select 
                      v-model="color.name"
                      @change="updateColorPreview"
                      class="flex-1 bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40"
                    >
                      <option value="" disabled>Select color</option>
                      <option v-for="baseColor in baseColors" :key="baseColor.id" :value="baseColor.name">
                        {{ baseColor.name }}
                      </option>
                    </select>
                    
                    <input 
                      type="number" 
                      v-model="color.ratio"
                      @input="updateColorPreview"
                      min="0"
                      max="100"
                      class="w-24 bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40"
                      placeholder="Ratio %"
                    />
                    
                    <button 
                      type="button"
                      @click="removeColor(index)"
                      class="p-2 text-white/60 hover:text-red-400 transition-colors"
                    >
                      <XIcon class="h-5 w-5" />
                    </button>
                  </div>

                  <button 
                    type="button"
                    @click="addColor"
                    class="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <PlusIcon class="h-5 w-5" />
                    Add Color
                  </button>
                </div>

                <!-- Color Preview -->
                <div class="space-y-2">
                  <h3 class="text-lg font-semibold text-white flex items-center">
                    <EyeIcon class="mr-2 h-5 w-5 text-white/80" />
                    Color Preview
                  </h3>
                  <div class="flex items-center gap-4">
                    <div 
                      class="w-24 h-24 rounded-full border-4 border-white/20 shadow-sm transition-all duration-500"
                      :style="{ backgroundColor: predictedColor }"
                    ></div>
                    <div>
                      <p class="text-white font-medium">AI Predicted Color</p>
                      <p class="text-white/60 text-sm">{{ predictedColor }}</p>
                      <p class="text-white/60 text-sm mt-2">Confidence: {{ predictionConfidence }}%</p>
                      <p class="text-white text-sm mt-2">Suggested Harmony: {{ colorHarmony }}</p>
                    </div>
                  </div>
                </div>

                <!-- Mixture Details -->
                <div class="space-y-4">
                  <h3 class="text-lg font-semibold text-white flex items-center">
                    <ClipboardListIcon class="mr-2 h-5 w-5 text-white/80" />
                    Mixture Details
                  </h3>
                  
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-white">Mixture Name</label>
                    <input 
                      type="text"
                      v-model="mixture.name"
                      class="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40"
                      placeholder="Enter mixture name"
                    />
                  </div>

                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-white">Quantity (Liters)</label>
                    <input 
                      type="number"
                      v-model="mixture.quantity"
                      min="0"
                      step="0.1"
                      class="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40"
                      placeholder="Enter quantity in liters"
                    />
                  </div>

                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-white">Finish Type</label>
                    <select 
                      v-model="mixture.finishType"
                      class="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40"
                    >
                      <option value="" disabled>Select finish type</option>
                      <option value="matte">Matte</option>
                      <option value="eggshell">Eggshell</option>
                      <option value="satin">Satin</option>
                      <option value="semi-gloss">Semi-Gloss</option>
                      <option value="gloss">Gloss</option>
                    </select>
                  </div>

                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-white">Notes</label>
                    <textarea 
                      v-model="mixture.notes"
                      rows="3"
                      class="w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all resize-none placeholder-white/40"
                      placeholder="Add any special instructions or notes"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:opacity-90 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0A2159] transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <PaletteIcon class="h-5 w-5" />
                  Create Mixture
                </button>
              </form>
            </div>

            <!-- Right Column: Recent Mixtures -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <h2 class="text-2xl font-bold mb-6 text-white flex items-center">
                <HistoryIcon class="mr-2 h-6 w-6 text-white/80" />
                Recent Mixtures
              </h2>
              
              <!-- Search and Filter -->
              <div class="mb-4 flex flex-col sm:flex-row gap-4">
                <div class="relative flex-1">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search mixtures..."
                    class="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40"
                  />
                </div>
                <select 
                  v-model="filterFinish"
                  class="bg-white/5 border border-white/10 rounded-lg text-white px-4 py-2 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                >
                  <option value="">All Finishes</option>
                  <option value="matte">Matte</option>
                  <option value="eggshell">Eggshell</option>
                  <option value="satin">Satin</option>
                  <option value="semi-gloss">Semi-Gloss</option>
                  <option value="gloss">Gloss</option>
                </select>
              </div>
              
              <div class="space-y-4 max-h-[calc(100vh-20rem)] overflow-y-auto pr-2">
                <div v-for="mix in filteredMixtures" :key="mix.id" 
                     class="p-4 bg-white/5 border border-white/10 rounded-lg group hover:border-white/30 transition-all duration-300 animate-fade-in"
                >
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-semibold text-white text-lg">{{ mix.name }}</h3>
                    <span class="text-sm text-white/60">{{ formatDate(mix.date) }}</span>
                  </div>
                  
                  <div class="flex items-center gap-4 mb-2">
                    <div 
                      class="w-16 h-16 rounded-full border-2 border-white/20 shadow-sm"
                      :style="{ backgroundColor: mix.predictedColor }"
                    ></div>
                    <div class="flex-1">
                      <div class="flex flex-wrap gap-2">
                        <div 
                          v-for="color in mix.colors" 
                          :key="color.name"
                          class="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full"
                        >
                          <div 
                            class="w-3 h-3 rounded-full border border-white/30"
                            :style="{ backgroundColor: color.hex }"
                          ></div>
                          <span class="text-xs text-white/80">{{ color.name }} ({{ color.ratio }}%)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p class="text-sm text-white/60">Quantity: {{ mix.quantity }} liters</p>
                  <p class="text-sm text-white/60">Finish: {{ mix.finishType }}</p>
                  
                  <div class="flex flex-wrap gap-4 mt-3">
                    <button 
                      @click="duplicateMixture(mix)"
                      class="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm"
                    >
                      <CopyIcon class="h-4 w-4" />
                      Duplicate
                    </button>
                    <button 
                      @click="viewDetails(mix)"
                      class="flex items-center gap-1 text-white/60 hover:text-white transition-colors text-sm"
                    >
                      <EyeIcon class="h-4 w-4" />
                      View Details
                    </button>
                    <button 
                      @click="editMixture(mix)"
                      class="flex items-center gap-1 text-white/60 hover:text-white transition-colors text-sm"
                    >
                      <EditIcon class="h-4 w-4" />
                      Edit
                    </button>
                    <button 
                      @click="deleteMixture(mix.id)"
                      class="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <Trash2Icon class="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </div>

                <!-- Empty State -->
                <div v-if="filteredMixtures.length === 0" 
                     class="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div class="p-4 bg-white/5 rounded-full mb-4">
                    <PaletteIcon class="h-12 w-12 text-white/40" />
                  </div>
                  <p class="text-white mb-2">No Recent Mixtures</p>
                  <p class="text-white/60 text-sm">Start by creating a new paint mixture</p>
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

          <div class="inline-block align-bottom bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-white/10">
            <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-white" id="modal-title">
                    Mixture Details
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-white/60">
                      {{ selectedMixture?.name }}
                    </p>
                    <div class="mt-4 flex items-center gap-4">
                      <div 
                        class="w-20 h-20 rounded-full border-2 border-white/20"
                        :style="{ backgroundColor: selectedMixture?.predictedColor }"
                      ></div>
                      <div>
                        <p class="text-white font-medium">Predicted Color</p>
                        <p class="text-white/60 text-sm">{{ selectedMixture?.predictedColor }}</p>
                      </div>
                    </div>
                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-white">Color Composition</h4>
                      <ul class="mt-2 space-y-2">
                        <li v-for="color in selectedMixture?.colors" :key="color.name" class="flex items-center gap-2">
                          <div 
                            class="w-4 h-4 rounded-full border border-white/30"
                            :style="{ backgroundColor: color.hex }"
                          ></div>
                          <span class="text-sm text-white/60">{{ color.name }} ({{ color.ratio }}%)</span>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-white">Quantity</h4>
                      <p class="text-sm text-white/60">{{ selectedMixture?.quantity }} liters</p>
                    </div>
                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-white">Finish Type</h4>
                      <p class="text-sm text-white/60">{{ selectedMixture?.finishType }}</p>
                    </div>
                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-white">Notes</h4>
                      <p class="text-sm text-white/60">{{ selectedMixture?.notes || 'No notes provided' }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-[#0A2159] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
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
      <div v-if="showColorPalette" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showColorPalette = false"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-white/10">
            <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg leading-6 font-medium text-white mb-4">Color Palette</h3>
              <div class="grid grid-cols-4 gap-4">
                <div v-for="color in baseColors" :key="color.id" 
                     class="flex flex-col items-center"
                >
                  <div 
                    class="w-16 h-16 rounded-full border-2 border-white/20 cursor-pointer"
                    :style="{ backgroundColor: color.hex }"
                    @click="addColorToMixture(color)"
                  ></div>
                  <span class="text-white text-sm mt-2">{{ color.name }}</span>
                  <button @click="deleteColor(color.id)" class="mt-1 text-red-400 hover:text-red-300 transition-colors">
                    <Trash2Icon class="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-[#0A2159] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="showColorPalette = false">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Mixing Tips Modal -->
    <transition name="modal">
      <div v-if="showMixingTips" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showMixingTips = false"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-white/10">
            <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg leading-6 font-medium text-white mb-4">Paint Mixing Tips</h3>
              <ul class="list-disc list-inside text-white/80 space-y-2">
                <li>Always start with the lightest color and gradually add darker colors</li>
                <li>Mix small amounts at a time to avoid wasting paint</li>
                <li>Use a color wheel to understand complementary and contrasting colors</li>
                <li>Keep track of your ratios for consistency in future mixes</li>
                <li>Allow mixed paint to dry to see its true color</li>
                <li>Consider the finish type when mixing for different surfaces</li>
              </ul>
            </div>
            <div class="bg-[#0A2159] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="showMixingTips = false">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Add New Color Modal -->
    <transition name="modal">
      <div v-if="showAddColorModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showAddColorModal = false"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div class="inline-block align-bottom bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-white/10">
            <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg leading-6 font-medium text-white mb-4">Add New Color</h3>
              <form @submit.prevent="addNewColor">
                <div class="mb-4">
                  <label for="colorName" class="block text-sm font-medium text-white">Color Name</label>
                  <input type="text" id="colorName" v-model="newColor.name" required class="mt-1 block w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-2 focus:ring-2 focus:ring-white/20 focus:border-transparent placeholder-white/40">
                </div>
                <div class="mb-4">
                  <label for="colorHex" class="block text-sm font-medium text-white">Color Hex Code</label>
                  <input type="text" id="colorHex" v-model="newColor.hex" required pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$" class="mt-1 block w-full bg-white/5 border border-white/10 rounded-lg text-white px-4 py-2 focus:ring-2 focus:ring-white/20 focus:border-transparent placeholder-white/40">
                </div>
                <div class="flex justify-end">
                  <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 shadow-lg">
                    Add Color
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
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
  X,
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
  Search as SearchIcon
} from 'lucide-vue-next'

const router = useRouter()
const mobileSidebarOpen = ref(false)

// Current date
const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// Base colors for mixing
const baseColors = ref([
  { id: 1, name: 'White', hex: '#FFFFFF', rgb: [255, 255, 255] },
  { id: 2, name: 'Black', hex: '#000000', rgb: [0, 0, 0] },
  { id: 3, name: 'Red', hex: '#FF0000', rgb: [255, 0, 0] },
  { id: 4, name: 'Yellow', hex: '#FFFF00', rgb: [255, 255, 0] },
  { id: 5, name: 'Blue', hex: '#0000FF', rgb: [0, 0, 255] },
  { id: 6, name: 'Green', hex: '#00FF00', rgb: [0, 255, 0] },
  { id: 7, name: 'Magenta', hex: '#FF00FF', rgb: [255, 0, 255] },
  { id: 8, name: 'Cyan', hex: '#00FFFF', rgb: [0, 255, 255] },
])

// Current mixture being created
const mixture = reactive({
  name: '',
  colors: [{ name: '', ratio: '' }],
  quantity: '',
  notes: '',
  finishType: ''
})

// State variables
const recentMixtures = ref([])
const predictedColor = ref('#FFFFFF')
const predictionConfidence = ref(0)
const showModal = ref(false)
const selectedMixture = ref(null)
const showColorPalette = ref(false)
const showMixingTips = ref(false)
const showAddColorModal = ref(false)
const searchQuery = ref('')
const filterFinish = ref('')
const colorHarmony = ref('')
const newColor = reactive({
  name: '',
  hex: '',
})

// Add a new color to the mixture
const addColor = () => {
  mixture.colors.push({ name: '', ratio: '' })
}

// Remove a color from the mixture
const removeColor = (index) => {
  mixture.colors.splice(index, 1)
  updateColorPreview()
}

// Update the color preview based on the current mixture
const updateColorPreview = () => {
  let r = 0, g = 0, b = 0, totalRatio = 0

  mixture.colors.forEach(color => {
    const baseColor = baseColors.value.find(c => c.name === color.name)
    if (baseColor && color.ratio) {
      const ratio = parseFloat(color.ratio) / 100
      r += baseColor.rgb[0] * ratio
      g += baseColor.rgb[1] * ratio
      b += baseColor.rgb[2] * ratio
      totalRatio += ratio
    }
  })

  if (totalRatio > 0) {
    r = Math.round(r / totalRatio)
    g = Math.round(g / totalRatio)
    b = Math.round(b / totalRatio)
    predictedColor.value = `rgb(${r}, ${g}, ${b})`
    predictionConfidence.value = Math.round((1 - Math.abs(1 - totalRatio)) * 100)
    updateColorHarmony(r, g, b)
  } else {
    predictedColor.value = '#FFFFFF'
    predictionConfidence.value = 0
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

// Create a new mixture
const createMixture = () => {
  const newMixture = {
    id: Date.now(),
    name: mixture.name,
    date: new Date().toISOString(),
    colors: mixture.colors.map(color => ({
      name: color.name,
      ratio: parseFloat(color.ratio),
      hex: getColorHex(color.name)
    })),
    quantity: parseFloat(mixture.quantity),
    notes: mixture.notes,
    finishType: mixture.finishType,
    predictedColor: predictedColor.value
  }
  recentMixtures.value.unshift(newMixture)
  // Reset form
  mixture.name = ''
  mixture.colors = [{ name: '', ratio: '' }]
  mixture.quantity = ''
  mixture.notes = ''
  mixture.finishType = ''
  predictedColor.value = '#FFFFFF'
  predictionConfidence.value = 0
  colorHarmony.value = ''
}

// Duplicate an existing mixture
const duplicateMixture = (mix) => {
  const duplicatedMix = { ...mix, id: Date.now(), date: new Date().toISOString() }
  recentMixtures.value.unshift(duplicatedMix)
  // Load the duplicated mixture into the form for editing
  mixture.name = `Copy of ${duplicatedMix.name}`
  mixture.colors = duplicatedMix.colors.map(c => ({ name: c.name, ratio: c.ratio.toString() }))
  mixture.quantity = duplicatedMix.quantity.toString()
  mixture.notes = duplicatedMix.notes
  mixture.finishType = duplicatedMix.finishType
  updateColorPreview()
}

// View details of a mixture
const viewDetails = (mix) => {
  selectedMixture.value = mix
  showModal.value = true
}

// Edit an existing mixture
const editMixture = (mix) => {
  mixture.name = mix.name
  mixture.colors = mix.colors.map(c => ({ name: c.name, ratio: c.ratio.toString() }))
  mixture.quantity = mix.quantity.toString()
  mixture.notes = mix.notes
  mixture.finishType = mix.finishType
  updateColorPreview()
  // Remove the edited mixture from recentMixtures
  recentMixtures.value = recentMixtures.value.filter(m => m.id !== mix.id)
}

// Delete a mixture
const deleteMixture = (id) => {
  recentMixtures.value = recentMixtures.value.filter(m => m.id !== id)
}

// Format date for display
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
  return new Date(dateString).toLocaleDateString(undefined, options)
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
const addColorToMixture = (color) => {
  mixture.colors.push({ name: color.name, ratio: '' })
  updateColorPreview()
}

// Add a new color to the palette
const addNewColor = () => {
  const rgbValue = hexToRgb(newColor.hex)
  if (rgbValue) {
    const newId = baseColors.value.length + 1
    baseColors.value.push({
      id: newId,
      name: newColor.name,
      hex: newColor.hex,
      rgb: rgbValue,
    })
    showAddColorModal.value = false
    newColor.name = ''
    newColor.hex = ''
  } else {
    alert('Invalid hex color code. Please use the format #RRGGBB or #RGB.')
  }
}

// Delete a color from the palette
const deleteColor = (id) => {
  baseColors.value = baseColors.value.filter(color => color.id !== id)
}

// Convert hex color code to RGB array
const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null
}

// Filtered mixtures based on search query and filter
const filteredMixtures = computed(() => {
  return recentMixtures.value.filter(mix => {
    const nameMatch = mix.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const finishMatch = filterFinish.value === '' || mix.finishType === filterFinish.value
    return nameMatch && finishMatch
  })
})

// Handle logout
const handleLogout = () => {
  router.push('/admin')
}

// Toggle mobile sidebar
const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

// Initialize on component mount
onMounted(() => {
  updateColorPreview()
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

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>