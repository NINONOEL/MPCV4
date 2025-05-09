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
            to="/staff/dashboard" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>
  
          <router-link 
            to="/staff/inventory" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>
  
          <router-link 
            to="/staff/paint-mixing" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>
  
          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>
  
          <router-link 
            to="/staff/settings" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
        </nav>
  
        <!-- User Menu -->
        <div class="absolute bottom-0 w-64 p-4 border-t border-white/10 bg-[#0A2159]/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-white/60 truncate">{{ userEmail }}</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
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
            to="/staff/dashboard" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/dashboard' }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>
  
          <router-link 
            to="/staff/inventory" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>
  
          <router-link 
            to="/staff/paint-mixing" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>
  
          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>
  
          <router-link 
            to="/staff/settings" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/settings' }"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
        </nav>
  
        <div class="absolute bottom-0 w-64 p-4 border-t border-white/10 bg-[#0A2159]/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-white/60 truncate">{{ userEmail }}</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
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
        <header class="bg-[#0A2159]/80 backdrop-blur-sm border-b border-white/10 px-8 py-4 shadow-md">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-2xl font-bold text-white">Paint Mixing Studio</h1>
              <p class="text-white/60">Create and manage custom paint mixtures</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-white/80">
                <CalendarIcon class="w-5 h-5" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-white/20"></div>
              <div class="flex items-center gap-3">
                <span class="text-white">Welcome, {{ userDisplayName || 'Staff' }}</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-white cursor-pointer hover:text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </header>
  
        <div class="p-6 md:p-8">
          <!-- Loading State -->
          <div v-if="loading" class="flex items-center justify-center p-8">
            <LoaderIcon class="w-8 h-8 text-white/60 animate-spin mr-2" />
            <span class="text-white/60">Loading paint mixing data...</span>
          </div>
  
          <div v-else>
            <!-- Error Alert -->
            <div v-if="errorMessage" class="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
              <div class="flex items-center">
                <AlertCircleIcon class="w-5 h-5 mr-2" />
                <span>{{ errorMessage }}</span>
              </div>
            </div>
  
            <!-- Success Alert -->
            <div v-if="successMessage" class="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
              <div class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 mr-2" />
                <span>{{ successMessage }}</span>
              </div>
            </div>
  
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
                @click="showAddNewColorModal" 
                class="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#0A2159] to-[#0A3573] text-white rounded-lg hover:opacity-90 transition-colors shadow-lg border border-white/10"
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
                      <div class="relative flex-1">
                        <select 
                          v-model="color.name"
                          @change="updateColorPreview"
                          class="w-full bg-[#002B73] border border-white/20 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40 appearance-none pr-10"
                        >
                          <option value="" disabled class="bg-[#002B73] text-white">Select color</option>
                          <option v-for="baseColor in baseColors" :key="baseColor.id" :value="baseColor.name" class="bg-[#002B73] text-white">
                            {{ baseColor.name }}
                          </option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <ChevronDownIcon class="h-5 w-5 text-white" />
                        </div>
                      </div>
                      
                      <input 
                        type="number" 
                        v-model="color.ratio"
                        @input="updateColorPreview"
                        min="0"
                        max="100"
                        class="w-24 bg-[#002B73] border border-white/20 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40"
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
  
                    <div class="flex gap-2">
                      <button 
                        type="button"
                        @click="addColorToMixture"
                        class="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                      >
                        <PlusIcon class="h-5 w-5" />
                        Add Color
                      </button>
                      
                      <button 
                        type="button"
                        @click="showAddColorModal = true"
                        class="flex items-center gap-2 text-white/80 hover:text-white transition-colors ml-4"
                      >
                        <PaletteIcon class="h-5 w-5" />
                        Add to Palette
                      </button>
                    </div>
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
                        <p class="text-white font-medium">Predicted Color</p>
                        <p class="text-white/60 text-sm">{{ predictedColor }}</p>
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
                      <div class="relative">
                        <select 
                          v-model="mixture.finishType"
                          class="w-full bg-[#002B73] border border-white/20 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40 appearance-none pr-10"
                        >
                          <option value="" disabled class="bg-[#002B73] text-white">Select finish type</option>
                          <option value="matte" class="bg-[#002B73] text-white">Matte</option>
                          <option value="eggshell" class="bg-[#002B73] text-white">Eggshell</option>
                          <option value="satin" class="bg-[#002B73] text-white">Satin</option>
                          <option value="semi-gloss" class="bg-[#002B73] text-white">Semi-Gloss</option>
                          <option value="gloss" class="bg-[#002B73] text-white">Gloss</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <ChevronDownIcon class="h-5 w-5 text-white" />
                        </div>
                      </div>
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
                    :disabled="isSubmitting"
                  >
                    <LoaderIcon v-if="isSubmitting" class="h-5 w-5 animate-spin" />
                    <PaletteIcon v-else class="h-5 w-5" />
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
                  <div class="relative">
                    <select 
                      v-model="filterFinish"
                      class="bg-[#002B73] border border-white/20 rounded-lg text-white w-full px-4 py-2 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all appearance-none pr-10"
                    >
                      <option value="" class="bg-[#002B73] text-white">All Finishes</option>
                      <option value="matte" class="bg-[#002B73] text-white">Matte</option>
                      <option value="eggshell" class="bg-[#002B73] text-white">Eggshell</option>
                      <option value="satin" class="bg-[#002B73] text-white">Satin</option>
                      <option value="semi-gloss" class="bg-[#002B73] text-white">Semi-Gloss</option>
                      <option value="gloss" class="bg-[#002B73] text-white">Gloss</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div class="relative">
                    <select 
                      v-model="filterCreator"
                      class="bg-[#002B73] border border-white/20 rounded-lg text-white w-full px-4 py-2 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all appearance-none pr-10"
                    >
                      <option value="" class="bg-[#002B73] text-white">All Users</option>
                      <option value="staff" class="bg-[#002B73] text-white">Staff Only</option>
                      <option value="admin" class="bg-[#002B73] text-white">Admin Only</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
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
                        <div class="mt-2 flex items-center">
                          <span 
                            class="text-xs px-2 py-1 rounded-full"
                            :class="mix.createdBy === 'admin' ? 'bg-purple-500/20 text-purple-300' : 'bg-green-500/20 text-green-300'"
                          >
                            {{ mix.createdBy === 'admin' ? 'By Admin' : 'By Staff' }}
                          </span>
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
                        v-if="mix.createdBy === 'staff'"
                      >
                        <EditIcon class="h-4 w-4" />
                        Edit
                      </button>
                      <button 
                        @click="deleteMixture(mix.id)"
                        class="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors text-sm"
                        v-if="mix.createdBy === 'staff'"
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
                        <span 
                          class="text-xs px-2 py-1 rounded-full mt-2 inline-block"
                          :class="selectedMixture?.createdBy === 'admin' ? 'bg-purple-500/20 text-purple-300' : 'bg-green-500/20 text-green-300'"
                        >
                          {{ selectedMixture?.createdBy === 'admin' ? 'Created by Admin' : 'Created by Staff' }}
                        </span>
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
                    <div class="mt-4">
                      <h4 class="text-sm font-medium text-white">Created On</h4>
                      <p class="text-sm text-white/60">{{ formatDate(selectedMixture?.date) }}</p>
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
      <div v-if="showColorPalette" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showColorPalette = false"></div>
  
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
        <div class="inline-block align-bottom bg-[#001D4A] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="px-6 pt-6 pb-6">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center">
              <PaletteIcon class="w-6 h-6 mr-2" />
              Color Palette
            </h3>
            
            <!-- Add color categories -->
            <div class="mb-6">
              <div class="flex flex-wrap gap-2">
                <button 
                  @click="filterColorCategory = ''"
                  class="px-3 py-1 text-sm rounded-full"
                  :class="filterColorCategory === '' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'"
                >
                  All Colors
                </button>
                <button 
                  @click="filterColorCategory = 'primary'"
                  class="px-3 py-1 text-sm rounded-full"
                  :class="filterColorCategory === 'primary' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'"
                >
                  Primary
                </button>
                <button 
                  @click="filterColorCategory = 'earth'"
                  class="px-3 py-1 text-sm rounded-full"
                  :class="filterColorCategory === 'earth' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'"
                >
                  Earth Tones
                </button>
                <button 
                  @click="filterColorCategory = 'custom'"
                  class="px-3 py-1 text-sm rounded-full"
                  :class="filterColorCategory === 'custom' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'"
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
                  class="w-16 h-16 rounded-full border-2 border-white/20 cursor-pointer shadow-md hover:shadow-lg transition-all"
                  :style="{ backgroundColor: color.hex }"
                  @click="addColorToMixtureFromPalette(color)"
                ></div>
                <div class="flex flex-col items-center mt-2">
                  <span class="text-white text-sm font-medium text-center">{{ color.name }}</span>
                  <span class="text-white/60 text-xs">{{ color.hex }}</span>
                  <button 
                    @click="deleteColor(color.id)" 
                    class="mt-2 px-2 py-1 bg-red-500/20 text-red-300 rounded-md hover:bg-red-500/40 flex items-center gap-1 transition-colors"
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
  
          <div class="inline-block align-bottom bg-[#001D4A] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
            <div class="px-6 pt-6 pb-6">
              <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                <PlusIcon class="w-6 h-6 mr-2" />
                Add New Color
              </h3>
              
              <div class="space-y-6">
                <div>
                  <label class="block text-white mb-2">Color Name</label>
                  <input 
                    type="text" 
                    v-model="newColorName" 
                    class="w-full bg-[#002B73] border-0 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter color name"
                  />
                </div>
                
                <div>
                  <label class="block text-white mb-2">Color Hex Code</label>
                  <input 
                    type="text" 
                    v-model="newColorHex" 
                    class="w-full bg-[#002B73] border-0 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="e.g. #FF5733"
                  />
                </div>
                
                <div class="flex justify-end gap-3">
                  <button 
                    @click="showAddColorModal = false"
                    class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
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
  
          <div class="inline-block align-bottom bg-[#001D4A] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="px-6 pt-6 pb-6">
              <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                <HelpCircleIcon class="w-6 h-6 mr-2" />
                Professional Paint Mixing Tips
              </h3>
              <ul class="list-disc list-inside text-white/80 space-y-3">
                <li>Always start with the lightest color and gradually add darker colors</li>
                <li>Mix small amounts at a time to avoid wasting paint</li>
                <li>Use a color wheel to understand complementary and contrasting colors</li>
                <li>Keep track of your ratios for consistency in future mixes</li>
                <li>Allow mixed paint to dry to see its true color</li>
                <li>Consider the finish type when mixing for different surfaces</li>
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
  
    <!-- Logout Confirmation Modal -->
    <transition name="modal">
      <div v-if="showLogoutConfirmation" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" @click="showLogoutConfirmation = false"></div>
  
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
          <div class="inline-block align-bottom bg-[#001D4A] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
            <div class="px-6 pt-6 pb-6">
              <h3 class="text-xl font-bold text-white mb-4">Confirm Logout</h3>
              <p class="text-white/80 mb-6">Are you sure you want to log out of your account?</p>
              <div class="flex justify-end gap-3">
                <button 
                  @click="showLogoutConfirmation = false"
                  class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  @click="confirmLogout"
                  class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg flex items-center"
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
    ChevronDown as ChevronDownIcon
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
    finishType: ''
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
  // Add these state variables
  const filterColorCategory = ref('')
  
  // Simple Add Color Modal
  const showAddColorModal = ref(false)
  const newColorName = ref('')
  const newColorHex = ref('#')
  
  // Add computed property for filtered palette colors
  const filteredPaletteColors = computed(() => {
    if (!filterColorCategory.value) {
      return baseColors.value
    }
    
    return baseColors.value.filter(color => 
      color.category === filterColorCategory.value
    )
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
      userDisplayName.value = user.displayName || 'Staff User'
    }
  }
  
  // Also modify the fetchMixtures function to handle authentication
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
            createdBy: data.createdBy || 'staff'
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
  
  // Modify the createMixture function to include the user's UID
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
        createdBy: 'staff',
        userId: auth.currentUser.uid // Add the user ID
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
    updateColorPreview()
  }
  
  // View details of a mixture
  const viewDetails = (mix) => {
    selectedMixture.value = mix
    showModal.value = true
  }
  
  // Edit an existing mixture
  const editMixture = async (mix) => {
    // Only allow editing staff-created mixtures
    if (mix.createdBy !== 'staff') {
      errorMessage.value = 'You can only edit mixtures created by staff'
      clearMessages()
      return
    }
  
    mixture.name = mix.name
    mixture.colors = mix.colors.map(c => ({ name: c.name, ratio: c.ratio.toString() }))
    mixture.quantity = mix.quantity.toString()
    mixture.notes = mix.notes
    mixture.finishType = mix.finishType
    updateColorPreview()
  }
  
  // Delete a mixture
  const deleteMixture = async (id) => {
    try {
      // Find the mixture to check if it was created by staff
      const mixtureToDelete = recentMixtures.value.find(m => m.id === id)
      
      if (!mixtureToDelete) {
        errorMessage.value = 'Mixture not found'
        clearMessages()
        return
      }
      
      // Only allow deleting staff-created mixtures
      if (mixtureToDelete.createdBy !== 'staff') {
        errorMessage.value = 'You can only delete mixtures created by staff'
        clearMessages()
        return
      }
      
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
      category: 'custom'
    })
    
    // Reset form
    newColorName.value = ''
    newColorHex.value = '#'
    
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