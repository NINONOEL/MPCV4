<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-yellow-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 hidden md:flex md:flex-col shadow-lg">
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <UserIcon class="h-3 w-3 mr-1" />
            Staff Portal
          </div>
        </div>

        <!-- Navigation - Scrollable Area -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/staff/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
            :class="{ 'shadow-sm border border-blue-200 transform scale-105': $route.path === '/staff/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/staff/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            :class="{ 'shadow-sm border border-purple-200 transform scale-105': $route.path === '/staff/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': $route.path === '/staff/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>Paint Recommender</span>
          </router-link>

          <router-link 
            to="/staff/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 shadow-sm border border-pink-200 transform scale-105"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/staff/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border border-teal-200 transform scale-105': $route.path === '/staff/sales-analytics' }"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/staff/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 shadow-sm border border-amber-200"
            :class="{ 'transform scale-105': $route.path === '/staff/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>

          <!-- Perfect spacing -->
          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'staff@example.com' }}</p>
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
          class="p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
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
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <UserIcon class="h-3 w-3 mr-1" />
            Staff Portal
          </div>
        </div>

        <!-- Mobile Navigation - Scrollable -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/staff/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50"
            :class="{ 'shadow-sm border border-blue-200': $route.path === '/staff/dashboard' }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/staff/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50"
            :class="{ 'shadow-sm border border-purple-200': $route.path === '/staff/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50"
            :class="{ 'shadow-sm border border-orange-200': $route.path === '/staff/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>Paint Recommender</span>
          </router-link>

          <router-link 
            to="/staff/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 shadow-sm border border-pink-200"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/staff/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50"
            :class="{ 'shadow-sm border border-teal-200': $route.path === '/staff/sales-analytics' }"
            @click="mobileSidebarOpen = false"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/staff/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 shadow-sm border border-amber-200"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
        </nav>

        <!-- User Menu -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'staff@example.com' }}</p>
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

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <div class="bg-background p-2 sm:p-3 min-h-full">
          <div class="max-w-5xl mx-auto space-y-3 sm:space-y-4">
            <!-- Header -->
            <div class="text-center space-y-1 pt-4">
              <h1 class="text-xl sm:text-2xl font-bold text-foreground">Paint Mixing Studio</h1>
              <p class="text-xs sm:text-sm text-muted-foreground">Create perfect color combinations with AI Predictions</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <!-- Left Panel: Color Selection -->
              <div class="space-y-3 sm:space-y-4">
                <div class="bg-card rounded-lg border p-3 sm:p-4 space-y-3 sm:space-y-4">
                  <div class="space-y-3">
                    <!-- Fixed color picker with accurate HSV color wheel and reduced sizes -->
                    <div class="space-y-2">
                      <h3 class="text-sm sm:text-base font-semibold text-foreground">Interactive Color Picker</h3>
                      <div class="relative">
                        <!-- Reduced canvas height for more compact layout -->
                        <canvas
                          ref="colorCanvas"
                          class="w-full h-32 sm:h-40 rounded-lg cursor-crosshair border-2 border-border shadow-md"
                          width="400"
                          height="200"
                          @click="selectColorFromCanvas"
                          @mousemove="previewColorFromCanvas">
                        </canvas>
                        <!-- Color picker cursor -->
                        <div v-if="pickerPosition.x !== null && pickerPosition.y !== null"
                             class="absolute w-3 h-3 border-2 border-white rounded-full shadow-lg transform -translate-x-1.5 -translate-y-1.5 pointer-events-none"
                             :style="{ left: pickerPosition.x + 'px', top: pickerPosition.y + 'px' }">
                          <div class="w-full h-full rounded border border-black/30"></div>
                        </div>
                      </div>
                      <!-- Added current color preview for accuracy verification -->
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg border-2 border-gray-300 shadow-sm" :style="{ backgroundColor: currentPreviewColor }"></div>
                        <span class="text-xs font-mono text-muted-foreground">{{ currentPreviewColor }}</span>
                      </div>
                    </div>

                    <!-- Enhanced Quick Color Selection with smooth animations -->
                    <div>
                      <h3 class="text-sm sm:text-base font-semibold text-card-foreground mb-2">Quick Color Selection</h3>

                <!-- Primary & Basic Colors -->
                <div class="mb-2">
                  <!-- Reduced padding and text sizes for compact layout -->
                  <button
                    @click="toggleCategory('primary')"
                    class="flex items-center gap-2 w-full text-left bg-card hover:bg-accent/50 rounded-lg px-3 py-2 transition-all duration-200 group border border-border hover:border-primary/30 shadow-sm hover:shadow-md"
                  >
                    <div class="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-colors">
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                        Primary & Basic Colors
                      </h4>
                      <p class="text-xs text-muted-foreground hidden sm:block">Essential colors</p>
                    </div>
                    <div class="flex items-center gap-1">
                      <span class="text-xs font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">
                        {{ primaryColors.length }}
                      </span>
                      <div class="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-muted border border-border hover:bg-primary/10 hover:border-primary/30 transition-all">
                        <Palette class="w-3 h-3 text-foreground/60" />
                        <component
                          :is="categoryVisibility.primary ? ChevronDown : ChevronRightIcon"
                          class="w-3 h-3 text-foreground/70"
                        />
                      </div>
                    </div>
                  </button>
                  <transition
                    name="category"
                    @enter="onCategoryEnter"
                    @leave="onCategoryLeave"
                  >
                    <div v-show="categoryVisibility.primary" class="overflow-hidden">
                      <div class="grid grid-cols-8 sm:grid-cols-10 gap-1 mt-2 p-2 bg-muted/30 rounded-lg">
                        <div v-for="color in primaryColors" :key="color.name"
                             class="aspect-square rounded-lg cursor-pointer border-2 border-border hover:border-primary hover:scale-110 transition-all duration-200 shadow-sm hover:shadow-lg"
                             :style="{ backgroundColor: color.hex }"
                             @click="selectPredefinedColor(color)"
                             :title="color.name">
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>

                <!-- Earth Tones -->
                <div class="mb-2">
                  <button
                    @click="toggleCategory('earth')"
                    class="flex items-center gap-2 w-full text-left bg-card hover:bg-accent/50 rounded-lg px-3 py-2 transition-all duration-200 group border border-border hover:border-primary/30 shadow-sm hover:shadow-md"
                  >
                    <div class="w-6 h-6 rounded-full bg-amber-100 border border-amber-300 group-hover:bg-amber-200 transition-colors">
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="text-xs font-semibold text-foreground group-hover:text-amber-600 transition-colors">
                        Earth Tones
                      </h4>
                      <p class="text-xs text-muted-foreground hidden sm:block">Natural, warm colors</p>
                    </div>
                    <div class="flex items-center gap-1">
                      <span class="text-xs font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">
                        {{ earthTones.length }}
                      </span>
                      <div class="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-muted border border-border hover:bg-amber-100 hover:border-amber-300 transition-all">
                        <Palette class="w-3 h-3 text-foreground/60" />
                        <component
                          :is="categoryVisibility.earth ? ChevronDown : ChevronRightIcon"
                          class="w-3 h-3 text-foreground/70"
                        />
                      </div>
                    </div>
                  </button>
                  <transition
                    name="category"
                    @enter="onCategoryEnter"
                    @leave="onCategoryLeave"
                  >
                    <div v-show="categoryVisibility.earth" class="overflow-hidden">
                      <div class="grid grid-cols-8 sm:grid-cols-10 gap-1 mt-2 p-2 bg-muted/30 rounded-lg">
                        <div v-for="color in earthTones" :key="color.name"
                             class="aspect-square rounded-lg cursor-pointer border-2 border-border hover:border-primary hover:scale-110 transition-all duration-200 shadow-sm hover:shadow-lg"
                             :style="{ backgroundColor: color.hex }"
                             @click="selectPredefinedColor(color)"
                             :title="color.name">
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>

                <!-- Pastels -->
                <div class="mb-2">
                  <button
                    @click="toggleCategory('pastels')"
                    class="flex items-center gap-2 w-full text-left bg-card hover:bg-accent/50 rounded-lg px-3 py-2 transition-all duration-200 group border border-border hover:border-primary/30 shadow-sm hover:shadow-md"
                  >
                    <div class="w-6 h-6 rounded-full bg-pink-100 border border-pink-300 group-hover:bg-pink-200 transition-colors">
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="text-xs font-semibold text-foreground group-hover:text-pink-600 transition-colors">
                        Pastel Colors
                      </h4>
                      <p class="text-xs text-muted-foreground hidden sm:block">Soft, gentle tones</p>
                    </div>
                    <div class="flex items-center gap-1">
                      <span class="text-xs font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">
                        {{ pastelColors.length }}
                      </span>
                      <div class="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-muted border border-border hover:bg-pink-100 hover:border-pink-300 transition-all">
                        <Palette class="w-3 h-3 text-foreground/60" />
                        <component
                          :is="categoryVisibility.pastels ? ChevronDown : ChevronRightIcon"
                          class="w-3 h-3 text-foreground/70"
                        />
                      </div>
                    </div>
                  </button>
                  <transition
                    name="category"
                    @enter="onCategoryEnter"
                    @leave="onCategoryLeave"
                  >
                    <div v-show="categoryVisibility.pastels" class="overflow-hidden">
                      <div class="grid grid-cols-8 sm:grid-cols-10 gap-1 mt-2 p-2 bg-muted/30 rounded-lg">
                        <div v-for="color in pastelColors" :key="color.name"
                             class="aspect-square rounded-lg cursor-pointer border-2 border-border hover:border-primary hover:scale-110 transition-all duration-200 shadow-sm hover:shadow-lg"
                             :style="{ backgroundColor: color.hex }"
                             @click="selectPredefinedColor(color)"
                             :title="color.name">
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>

                <!-- Deep & Rich Colors -->
                <div>
                  <button
                    @click="toggleCategory('deep')"
                    class="flex items-center gap-2 w-full text-left bg-card hover:bg-accent/50 rounded-lg px-3 py-2 transition-all duration-200 group border border-border hover:border-primary/30 shadow-sm hover:shadow-md"
                  >
                    <div class="w-6 h-6 rounded-full bg-purple-100 border border-purple-300 group-hover:bg-purple-200 transition-colors">
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="text-xs font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                        Deep & Rich Colors
                      </h4>
                      <p class="text-xs text-muted-foreground hidden sm:block">Bold, vibrant tones</p>
                    </div>
                    <div class="flex items-center gap-1">
                      <span class="text-xs font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">
                        {{ deepColors.length }}
                      </span>
                      <div class="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-muted border border-border hover:bg-purple-100 hover:border-purple-300 transition-all">
                        <Palette class="w-3 h-3 text-foreground/60" />
                        <component
                          :is="categoryVisibility.deep ? ChevronDown : ChevronRightIcon"
                          class="w-3 h-3 text-foreground/70"
                        />
                      </div>
                    </div>
                  </button>
                  <transition
                    name="category"
                    @enter="onCategoryEnter"
                    @leave="onCategoryLeave"
                  >
                    <div v-show="categoryVisibility.deep" class="overflow-hidden">
                      <div class="grid grid-cols-8 sm:grid-cols-10 gap-1 mt-2 p-2 bg-muted/30 rounded-lg">
                        <div v-for="color in deepColors" :key="color.name"
                             class="aspect-square rounded-lg cursor-pointer border-2 border-border hover:border-primary hover:scale-110 transition-all duration-200 shadow-sm hover:shadow-lg"
                             :style="{ backgroundColor: color.hex }"
                             @click="selectPredefinedColor(color)"
                             :title="color.name">
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>

            <!-- Selected Colors for Mixing -->
            <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm sm:text-base font-semibold text-foreground">Selected Colors</h3>
                    <!-- Reduced button size and padding -->
                    <button v-if="selectedColors.length > 0"
                            @click="clearAllColors"
                            class="px-2 py-1 text-xs font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105 flex items-center gap-1">
                      <X class="w-3 h-3" />
                      Clear
                    </button>
                  </div>

                  <div v-if="selectedColors.length === 0" class="text-center py-3 text-muted-foreground text-xs">
                    Select colors to start mixing
                  </div>

                  <div v-else class="space-y-1.5">
                    <div v-for="(color, index) in selectedColors" :key="index"
                         class="flex items-center gap-2 p-2 bg-muted/50 rounded-lg border border-muted hover:border-primary/30 transition-colors">
                      <div class="w-6 h-6 rounded-lg border-2 border-gray-300 shadow-sm flex-shrink-0" :style="{ backgroundColor: color.hex }"></div>
                      <div class="flex-1 min-w-0">
                        <p class="text-xs font-medium text-foreground truncate">{{ color.name }}</p>
                        <p class="text-xs text-muted-foreground">{{ color.hex }}</p>
                      </div>
                      <!-- Reduced range slider size and padding -->
                      <div class="flex items-center gap-2 bg-gradient-to-r from-background to-muted/30 rounded-lg p-2 border shadow-sm">
                        <input type="range"
                               v-model="color.ratio"
                               min="1"
                               max="100"
                               class="enhanced-range w-16"
                               :style="{ '--color': color.hex }">
                        <span class="text-xs font-bold text-foreground min-w-[2rem] text-right">{{ color.ratio }}%</span>
                      </div>
                      <button @click="removeColor(index)"
                              class="text-red-500 hover:text-red-600 hover:bg-red-50 p-1 rounded-lg transition-all duration-200 hover:scale-110 flex-shrink-0">
                        <X class="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-3 sm:space-y-4">
                <!-- Color Palette Display -->
                <div class="bg-card border border-border rounded-lg p-3 sm:p-4 shadow-sm">
                  <h3 class="font-semibold text-sm text-foreground mb-2">Current Palette</h3>
                  <div class="grid grid-cols-5 gap-1.5 mb-3">
                    <div
                      v-for="(color, index) in selectedColors"
                      :key="index"
                      class="aspect-square rounded-lg border-2 border-border cursor-pointer hover:scale-105 transition-transform"
                      :style="{ backgroundColor: color.hex }"
                      @click="removeColor(index)"
                      :title="`Remove ${color.name || color.hex}`"
                    ></div>
                    <div
                      v-for="n in Math.max(0, 5 - selectedColors.length)"
                      :key="`empty-${n}`"
                      class="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-muted-foreground/50"
                    >
                      <PlusIcon class="w-3 h-3" />
                    </div>
                  </div>
                <p class="text-xs text-muted-foreground">
                  Click colors to add them to your palette (max 5)
                </p>
                </div>

                <!-- Mixed Result -->
                <div class="bg-card rounded-lg border p-3 sm:p-4 space-y-2">
                  <h3 class="text-sm sm:text-base font-semibold text-foreground">Mixed Result</h3>

                  <div class="relative">
                    <div class="w-full h-24 sm:h-32 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                         :style="{ backgroundColor: mixedColor }">
                      <div v-if="!mixedColor || mixedColor === '#ffffff'" class="text-center text-muted-foreground">
                        <Palette class="w-6 h-6 mx-auto mb-1 opacity-50" />
                        <p class="text-xs">Mixed color will appear here</p>
                      </div>
                    </div>

                    <div v-if="mixedColor && mixedColor !== '#ffffff'" class="mt-2 text-center">
                      <p class="text-xs font-mono text-muted-foreground">{{ mixedColor }}</p>
                      <div class="flex justify-center gap-1 mt-1 flex-wrap">
                        <span class="text-xs px-1.5 py-0.5 bg-muted rounded">RGB: {{ getRgbFromHex(mixedColor) }}</span>
                        <span class="text-xs px-1.5 py-0.5 bg-muted rounded">HSL: {{ getHslFromHex(mixedColor) }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Save Mixture Section -->
                <div class="bg-card rounded-lg border p-3 sm:p-4 space-y-3">
                  <h3 class="text-sm sm:text-base font-semibold text-foreground">Save Mixture</h3>
                  <input
                    type="text"
                    v-model="mixtureName"
                    placeholder="Enter mixture name..."
                    class="w-full px-3 py-2 border border-border rounded-lg focus:ring-primary focus:border-primary text-sm shadow-sm"
                  />
                  <button
                    @click="saveMixture"
                    :disabled="!mixtureName || selectedColors.length === 0"
                    class="w-full px-3 py-2 font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-1"
                    :class="!mixtureName || selectedColors.length === 0 ? 'bg-primary/40 text-white/70 cursor-not-allowed' : 'bg-primary hover:bg-primary-hover shadow-md hover:scale-105 text-white'"
                  >
                    <SaveIcon class="w-4 h-4" />
                    Save Mixture
                  </button>
                  <div v-if="successMessage" class="text-xs text-green-500 mt-2">{{ successMessage }}</div>
                  <div v-if="errorMessage" class="text-xs text-red-500 mt-2">{{ errorMessage }}</div>
                </div>

                <!-- Mixture History Section -->
                <div class="bg-card rounded-lg border p-3 sm:p-4 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm sm:text-base font-semibold text-foreground">Saved Mixtures</h3>
                    <span class="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {{ savedMixtures.length }}
                    </span>
                  </div>
                  
                  <div v-if="savedMixtures.length === 0" class="text-center py-6 text-muted-foreground text-xs">
                    <Palette class="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No saved mixtures yet</p>
                    <p class="text-xs mt-1">Save your first mixture to see it here</p>
                  </div>
                  
                  <div v-else class="space-y-2 max-h-96 overflow-y-auto">
                    <div
                      v-for="mixture in savedMixtures"
                      :key="mixture.id"
                      class="bg-muted/50 rounded-lg border border-border p-3 hover:border-primary/30 transition-all duration-200 hover:shadow-md group"
                    >
                      <div class="flex items-start gap-3">
                        <!-- Color Preview -->
                        <div
                          class="w-12 h-12 rounded-lg border-2 border-border shadow-sm flex-shrink-0"
                          :style="{ backgroundColor: mixture.mixedColor }"
                          :title="mixture.mixedColor"
                        ></div>
                        
                        <!-- Mixture Info -->
                        <div class="flex-1 min-w-0">
                          <h4 class="text-sm font-semibold text-foreground truncate">{{ mixture.name }}</h4>
                          <p class="text-xs text-muted-foreground mt-1 font-mono">{{ mixture.mixedColor }}</p>
                          <div class="flex items-center gap-1 mt-2 flex-wrap">
                            <span
                              v-for="(color, idx) in mixture.colors.slice(0, 3)"
                              :key="idx"
                              class="text-xs px-1.5 py-0.5 rounded bg-background border border-border"
                              :style="{ color: color.hex }"
                            >
                              {{ color.name }} ({{ color.ratio }}%)
                            </span>
                            <span v-if="mixture.colors.length > 3" class="text-xs text-muted-foreground">
                              +{{ mixture.colors.length - 3 }} more
                            </span>
                          </div>
                          <div class="flex items-center gap-2 mt-1">
                            <p class="text-xs text-muted-foreground">
                              {{ formatDate(mixture.timestamp) }}
                            </p>
                            <span class="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">
                              By {{ mixture.createdBy === 'admin' ? 'Admin' : 'Staff' }}
                            </span>
                          </div>
                        </div>
                        
                        <!-- Actions -->
                        <div class="flex items-center gap-1 flex-shrink-0">
                          <button
                            @click="loadMixture(mixture)"
                            class="p-1.5 rounded-lg hover:bg-primary/10 text-primary hover:text-primary-hover transition-colors"
                            title="Load mixture"
                          >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                          </button>
                          <button
                            @click="deleteMixture(mixture.id)"
                            class="p-1.5 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-600 transition-colors"
                            title="Delete mixture"
                          >
                            <X class="w-4 h-4" />
                          </button>
                        </div>
                      </div>
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
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/config/firebase'
import { signOut } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, addDoc, getDocs, query, orderBy, onSnapshot, deleteDoc, doc, Timestamp } from 'firebase/firestore'
import ChevronLeft from '~icons/heroicons/chevron-left-solid'
import ChevronDown from '~icons/heroicons/chevron-down-solid'
import ChevronRightIcon from '~icons/heroicons/chevron-right-solid'
import Palette from '~icons/heroicons/paint-brush-solid'
import X from '~icons/heroicons/x-mark-solid'
import PlusIcon from '~icons/heroicons/plus-small-solid'
import SaveIcon from '~icons/heroicons/arrow-down-tray-solid'
import {
  LayoutDashboard as LayoutDashboardIcon,
  Users as UsersIcon,
  Package as PackageIcon,
  Home as HomeIcon,
  Palette as PaletteIcon,
  TrendingUp as TrendingUpIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
} from 'lucide-vue-next'

const router = useRouter()
const mobileSidebarOpen = ref(false)
const userDisplayName = ref('')
const userEmail = ref('')

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

const handleLogout = async () => {
  try {
    await signOut(auth)
    router.push('/staff')
  } catch (error) {
    console.error('Error signing out:', error)
  }
}

// Get user info
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userDisplayName.value = user.displayName || 'Staff User'
      userEmail.value = user.email || 'staff@example.com'
    }
  })
})

// Reactive state
const showColorSelector = ref(false)
const selectedColors = ref([])
const mixtureName = ref('')
const savedMixtures = ref([])
const searchQuery = ref('')
const successMessage = ref('')
const errorMessage = ref('')
const pickerPosition = reactive({ x: null, y: null })
const currentPreviewColor = ref('#ffffff')
const colorCanvas = ref(null)
const mixedColor = computed(() => simulateColorMixing(selectedColors.value))

const categoryVisibility = ref({
  primary: false,
  earth: false,
  pastels: false,
  deep: false
})

const fileInput = ref(null)
const uploadedImage = ref(null)
const isDragOver = ref(false)
const isAnalyzing = ref(false)
const analysisProgress = ref(0)
const analysisResults = ref([])

// Categorized color arrays
const primaryColors = ref([
  { name: 'Pure Red', hex: '#FF0000' }, { name: 'Pure Green', hex: '#00FF00' }, { name: 'Pure Blue', hex: '#0000FF' },
  { name: 'Cyan', hex: '#00FFFF' }, { name: 'Magenta', hex: '#FF00FF' }, { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Dark Red', hex: '#8B0000' }, { name: 'Crimson', hex: '#DC143C' }, { name: 'Fire Brick', hex: '#B22222' },
  { name: 'Indian Red', hex: '#CD5C5C' }, { name: 'Light Coral', hex: '#F08080' }, { name: 'Salmon', hex: '#FA8072' },
  { name: 'Dark Salmon', hex: '#E9967A' }, { name: 'Light Salmon', hex: '#FFA07A' }, { name: 'Coral', hex: '#FF7F50' },
  { name: 'Tomato', hex: '#FF6347' }, { name: 'Orange Red', hex: '#FF4500' }, { name: 'Red', hex: '#FF0000' },
  { name: 'Dark Orange', hex: '#FF8C00' }, { name: 'Orange', hex: '#FFA500' }, { name: 'Gold', hex: '#FFD700' },
  { name: 'Dark Golden Rod', hex: '#B8860B' }, { name: 'Golden Rod', hex: '#DAA520' }, { name: 'Pale Golden Rod', hex: '#EEE8AA' },
  { name: 'Dark Khaki', hex: '#BDB76B' }, { name: 'Khaki', hex: '#F0E68C' }, { name: 'Light Yellow', hex: '#FFFFE0' },
  { name: 'Light Golden Rod Yellow', hex: '#FAFAD2' }, { name: 'Lemon Chiffon', hex: '#FFFACD' }, { name: 'Light Goldenrod', hex: '#FAFAD2' },
  { name: 'Olive', hex: '#808000' }, { name: 'Yellow Green', hex: '#9ACD32' }, { name: 'Dark Olive Green', hex: '#556B2F' },
  { name: 'Olive Drab', hex: '#6B8E23' }, { name: 'Lawn Green', hex: '#7CFC00' }, { name: 'Chartreuse', hex: '#7FFF00' },
  { name: 'Green Yellow', hex: '#ADFF2F' }, { name: 'Lime Green', hex: '#32CD32' }, { name: 'Lime', hex: '#00FF00' },
  { name: 'Forest Green', hex: '#228B22' }, { name: 'Dark Green', hex: '#006400' }, { name: 'Green', hex: '#008000' },
  { name: 'Dark Sea Green', hex: '#8FBC8F' }, { name: 'Medium Sea Green', hex: '#3CB371' }, { name: 'Sea Green', hex: '#2E8B57' },
  { name: 'Spring Green', hex: '#00FF7F' }, { name: 'Medium Spring Green', hex: '#00FA9A' }, { name: 'Aquamarine', hex: '#7FFFD4' },
  { name: 'Light Sea Green', hex: '#20B2AA' }, { name: 'Dark Turquoise', hex: '#00CED1' }, { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Medium Turquoise', hex: '#48D1CC' }, { name: 'Dark Cyan', hex: '#008B8B' }, { name: 'Light Cyan', hex: '#E0FFFF' },
  { name: 'Aqua', hex: '#00FFFF' }, { name: 'Teal', hex: '#008080' }, { name: 'Cadet Blue', hex: '#5F9EA0' },
  { name: 'Powder Blue', hex: '#B0E0E6' }, { name: 'Light Blue', hex: '#ADD8E6' }, { name: 'Sky Blue', hex: '#87CEEB' },
  { name: 'Light Sky Blue', hex: '#87CEFA' }, { name: 'Deep Sky Blue', hex: '#00BFFF' }, { name: 'Dodger Blue', hex: '#1E90FF' },
  { name: 'Cornflower Blue', hex: '#6495ED' }, { name: 'Steel Blue', hex: '#4682B4' }, { name: 'Royal Blue', hex: '#4169E1' },
  { name: 'Blue', hex: '#0000FF' }, { name: 'Medium Blue', hex: '#0000CD' }, { name: 'Dark Blue', hex: '#00008B' },
  { name: 'Navy', hex: '#000080' }, { name: 'Midnight Blue', hex: '#191970' },
  { name: 'Lavender', hex: '#E6E6FA' }, { name: 'Thistle', hex: '#D8BFD8' }, { name: 'Plum', hex: '#DDA0DD' },
  { name: 'Violet', hex: '#EE82EE' }, { name: 'Orchid', hex: '#DA70D6' }, { name: 'Fuchsia', hex: '#FF00FF' },
  { name: 'Medium Orchid', hex: '#BA55D3' }, { name: 'Medium Purple', hex: '#9370DB' }, { name: 'Blue Violet', hex: '#8A2BE2' },
  { name: 'Dark Violet', hex: '#9400D3' }, { name: 'Dark Orchid', hex: '#9932CC' }, { name: 'Dark Magenta', hex: '#8B008B' },
  { name: 'Purple', hex: '#800080' }, { name: 'Indigo', hex: '#4B0082' }, { name: 'Slate Blue', hex: '#6A5ACD' },
  { name: 'Dark Slate Blue', hex: '#483D8B' }, { name: 'Medium Slate Blue', hex: '#7B68EE' },
  { name: 'Pink', hex: '#FFC0CB' }, { name: 'Light Pink', hex: '#FFB6C1' }, { name: 'Hot Pink', hex: '#FF69B4' },
  { name: 'Deep Pink', hex: '#FF1493' }, { name: 'Medium Violet Red', hex: '#C71585' }, { name: 'Pale Violet Red', hex: '#DB7093' },
  { name: 'Black', hex: '#000000' }, { name: 'Dim Gray', hex: '#696969' }, { name: 'Gray', hex: '#808000' },
  { name: 'Dark Gray', hex: '#A9A9A9' }, { name: 'Silver', hex: '#C0C0C0' }, { name: 'Light Gray', hex: '#D3D3D3' },
  { name: 'Gainsboro', hex: '#DCDCDC' }, { name: 'White Smoke', hex: '#F5F5F5' }, { name: 'White', hex: '#FFFFFF' }
])

const earthTones = ref([
  { name: 'Maroon', hex: '#800000' }, { name: 'Dark Red', hex: '#8B0000' }, { name: 'Brown', hex: '#A52A2A' },
  { name: 'Saddle Brown', hex: '#8B4513' }, { name: 'Sienna', hex: '#A0522D' }, { name: 'Chocolate', hex: '#D2691E' },
  { name: 'Dark Golden Rod', hex: '#B8860B' }, { name: 'Peru', hex: '#CD853F' }, { name: 'Rosy Brown', hex: '#BC8F8F' },
  { name: 'Sandy Brown', hex: '#F4A460' }, { name: 'Tan', hex: '#D2B48C' }, { name: 'Burlywood', hex: '#DEB887' },
  { name: 'Wheat', hex: '#F5DEB3' }, { name: 'Navajo White', hex: '#FFDEAD' }, { name: 'Bisque', hex: '#FFE4C4' },
  { name: 'Blanched Almond', hex: '#FFEBCD' }, { name: 'Papaya Whip', hex: '#FFEFD5' }, { name: 'Moccasin', hex: '#FFE4B5' },
  { name: 'Peach Puff', hex: '#FFDAB9' }, { name: 'Misty Rose', hex: '#FFE4E1' }, { name: 'Lavender Blush', hex: '#FFF0F5' },
  { name: 'Linen', hex: '#FAF0E6' }, { name: 'Old Lace', hex: '#FDF5E6' }, { name: 'Antique White', hex: '#FAEBD7' },
  { name: 'Seashell', hex: '#FFF5EE' }, { name: 'Beige', hex: '#F5F5DC' }, { name: 'Cornsilk', hex: '#FFF8DC' },
  { name: 'Dark Olive Green', hex: '#556B2F' }, { name: 'Olive Drab', hex: '#6B8E23' }, { name: 'Olive', hex: '#808000' },
  { name: 'Dark Khaki', hex: '#BDB76B' }, { name: 'Khaki', hex: '#F0E68C' }, { name: 'Pale Golden Rod', hex: '#EEE8AA' },
  { name: 'Light Golden Rod Yellow', hex: '#FAFAD2' }, { name: 'Light Yellow', hex: '#FFFFE0' },
  { name: 'Dark Slate Gray', hex: '#2F4F4F' }, { name: 'Slate Gray', hex: '#708090' }, { name: 'Light Slate Gray', hex: '#778899' },
  { name: 'Steel Blue', hex: '#4682B4' }, { name: 'Light Steel Blue', hex: '#B0C4DE' }, { name: 'Cadet Blue', hex: '#5F9EA0' }
])

const pastelColors = ref([
  { name: 'Lavender Blush', hex: '#FFF0F5' }, { name: 'Misty Rose', hex: '#FFE4E1' }, { name: 'Light Pink', hex: '#FFB6C1' },
  { name: 'Pink', hex: '#FFC0CB' }, { name: 'Thistle', hex: '#D8BFD8' }, { name: 'Plum', hex: '#DDA0DD' },
  { name: 'Lavender', hex: '#E6E6FA' }, { name: 'Violet', hex: '#EE82EE' }, { name: 'Orchid', hex: '#DA70D6' },
  { name: 'Medium Orchid', hex: '#BA55D3' }, { name: 'Medium Purple', hex: '#9370DB' },
  { name: 'Alice Blue', hex: '#F0F8FF' }, { name: 'Ghost White', hex: '#F8F8FF' }, { name: 'Azure', hex: '#F0FFFF' },
  { name: 'Light Cyan', hex: '#E0FFFF' }, { name: 'Pale Turquoise', hex: '#AFEEEE' }, { name: 'Light Blue', hex: '#ADD8E6' },
  { name: 'Powder Blue', hex: '#B0E0E6' }, { name: 'Sky Blue', hex: '#87CEEB' }, { name: 'Light Sky Blue', hex: '#87CEFA' },
  { name: 'Light Steel Blue', hex: '#B0C4DE' },
  { name: 'Honeydew', hex: '#F0FFF0' }, { name: 'Mint Cream', hex: '#F5FFFA' }, { name: 'Light Green', hex: '#90EE90' },
  { name: 'Pale Green', hex: '#98FB98' }, { name: 'Dark Sea Green', hex: '#8FBC8F' }, { name: 'Light Sea Green', hex: '#20B2AA' },
  { name: 'Medium Aquamarine', hex: '#66CDAA' }, { name: 'Aquamarine', hex: '#7FFFD4' },
  { name: 'Ivory', hex: '#FFFFF0' }, { name: 'Beige', hex: '#F5F5DC' }, { name: 'Light Yellow', hex: '#FFFFE0' },
  { name: 'Light Golden Rod Yellow', hex: '#FAFAD2' }, { name: 'Lemon Chiffon', hex: '#FFFACD' }, { name: 'Cornsilk', hex: '#FFF8DC' },
  { name: 'Blanched Almond', hex: '#FFEBCD' }, { name: 'Bisque', hex: '#FFE4C4' }, { name: 'Peach Puff', hex: '#FFDAB9' },
  { name: 'Navajo White', hex: '#FFDEAD' }, { name: 'Moccasin', hex: '#FFE4B5' }, { name: 'Papaya Whip', hex: '#FFEFD5' },
  { name: 'Seashell', hex: '#FFF5EE' }, { name: 'Linen', hex: '#FAF0E6' }, { name: 'Antique White', hex: '#FAEBD7' },
  { name: 'Old Lace', hex: '#FDF5E6' }, { name: 'Floral White', hex: '#FFFAF0' }, { name: 'Snow', hex: '#FFFAFA' },
  { name: 'Light Coral', hex: '#F08080' }, { name: 'Light Salmon', hex: '#FFA07A' }
])

const deepColors = ref([
  { name: 'Dark Red', hex: '#8B0000' }, { name: 'Maroon', hex: '#800000' }, { name: 'Brown', hex: '#A52A2A' },
  { name: 'Fire Brick', hex: '#B22222' }, { name: 'Crimson', hex: '#DC143C' }, { name: 'Indian Red', hex: '#CD5C5C' },
  { name: 'Rosy Brown', hex: '#BC8F8F' }, { name: 'Saddle Brown', hex: '#8B4513' },
  { name: 'Navy', hex: '#000080' }, { name: 'Dark Blue', hex: '#00008B' }, { name: 'Medium Blue', hex: '#0000CD' },
  { name: 'Midnight Blue', hex: '#191970' }, { name: 'Royal Blue', hex: '#4169E1' }, { name: 'Steel Blue', hex: '#4682B4' },
  { name: 'Dark Slate Blue', hex: '#483D8B' }, { name: 'Slate Blue', hex: '#6A5ACD' },
  { name: 'Dark Green', hex: '#006400' }, { name: 'Forest Green', hex: '#228B22' }, { name: 'Green', hex: '#008000' },
  { name: 'Dark Olive Green', hex: '#556B2F' }, { name: 'Olive Drab', hex: '#6B8E23' }, { name: 'Sea Green', hex: '#2E8B57' },
  { name: 'Medium Sea Green', hex: '#3CB371' }, { name: 'Teal', hex: '#008080' }, { name: 'Dark Cyan', hex: '#008B8B' },
  { name: 'Indigo', hex: '#4B0082' }, { name: 'Purple', hex: '#800080' }, { name: 'Dark Magenta', hex: '#8B008B' },
  { name: 'Dark Violet', hex: '#9400D3' }, { name: 'Dark Orchid', hex: '#9932CC' }, { name: 'Blue Violet', hex: '#8A2BE2' },
  { name: 'Medium Violet Red', hex: '#C71585' },
  { name: 'Dark Orange', hex: '#FF8C00' }, { name: 'Chocolate', hex: '#D2691E' }, { name: 'Sienna', hex: '#A0522D' },
  { name: 'Peru', hex: '#CD853F' }, { name: 'Dark Golden Rod', hex: '#B8860B' }, { name: 'Olive', hex: '#808000' },
  { name: 'Black', hex: '#000000' }, { name: 'Dim Gray', hex: '#696969' }, { name: 'Dark Gray', hex: '#A9A9A9' },
  { name: 'Dark Slate Gray', hex: '#2F4F4F' }, { name: 'Slate Gray', hex: '#708090' }
])

// Computed properties
const filteredMixtures = computed(() => {
  if (!searchQuery.value) return savedMixtures.value
  return savedMixtures.value.filter(mixture =>
    mixture.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Color picker methods
const selectColorFromCanvas = (event) => {
  const canvas = colorCanvas.value
  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height

  const x = (event.clientX - rect.left) * scaleX
  const y = (event.clientY - rect.top) * scaleY

  pickerPosition.x = event.clientX - rect.left
  pickerPosition.y = event.clientY - rect.top

  const color = getColorFromCanvas(x, y)
  addColorToMixture(color)
}

const previewColorFromCanvas = (event) => {
  const canvas = colorCanvas.value
  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height

  const x = (event.clientX - rect.left) * scaleX
  const y = (event.clientY - rect.top) * scaleY

  pickerPosition.x = event.clientX - rect.left
  pickerPosition.y = event.clientY - rect.top

  const color = getColorFromCanvas(x, y)
  currentPreviewColor.value = color.hex
}

const getColorFromCanvas = (x, y) => {
  const canvas = colorCanvas.value
  const ctx = canvas.getContext('2d')

  const imageData = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1)
  const data = imageData.data

  const r = data[0]
  const g = data[1]
  const b = data[2]

  const hex = rgbToHex(r, g, b)

  return {
    name: `Custom Color`,
    hex: hex,
    ratio: 25
  }
}

const selectPredefinedColor = (colorData) => {
  const newColor = {
    id: Date.now(),
    hex: colorData.hex,
    name: colorData.name,
    ratio: 25
  }
  if (selectedColors.value.length < 5) {
    selectedColors.value.push(newColor)
    updateMixedColor()
    updateCurrentPreviewColor()
  } else {
    errorMessage.value = 'Maximum of 5 colors allowed in the palette.'
    clearMessages()
  }
}

const addColorToMixture = (color) => {
  if (selectedColors.value.length >= 5) {
    errorMessage.value = 'Maximum of 5 colors allowed in the palette.'
    clearMessages()
    return
  }

  const exists = selectedColors.value.find(c => c.hex === color.hex)
  if (exists) {
    return
  }

  selectedColors.value.push(color)
  updateMixedColor()
  updateCurrentPreviewColor()
}

const removeColor = (index) => {
  selectedColors.value.splice(index, 1)
  updateMixedColor()
  updateCurrentPreviewColor()
}

const clearAllColors = () => {
  selectedColors.value = []
  mixtureName.value = ''
  updateMixedColor()
  updateCurrentPreviewColor()
}

// Utility functions
const clearMessages = () => {
  setTimeout(() => {
    successMessage.value = ''
    errorMessage.value = ''
  }, 3000)
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Color conversion utilities
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
}

const rgbToHsl = (r, g, b) => {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

const hslToRgb = (h, s, l) => {
  h /= 360
  s /= 100
  l /= 100

  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1/6) return p + (q - p) * 6 * t
    if (t < 1/2) return q
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
    return p
  }

  let r, g, b

  if (s === 0) {
    r = g = b = l
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1/3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1/3)
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  }
}

const hsvToRgb = (h, s, v) => {
  const c = v * s
  const x = c * (1 - Math.abs((h / 60) % 2 - 1))
  const m = v - c

  let r, g, b

  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c
  } else {
    r = c; g = 0; b = x
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  }
}

const getRgbFromHex = (hex) => {
  const rgb = hexToRgb(hex)
  return `${rgb.r}, ${rgb.g}, ${rgb.b}`
}

const getHslFromHex = (hex) => {
  const rgb = hexToRgb(hex)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
  return `${hsl.h}° , ${hsl.s}%, ${hsl.l}%`
}

// Firestore collection name
const MIXTURES_COLLECTION = 'paintMixtures'

// Load mixtures from Firestore
const loadMixturesFromFirestore = () => {
  try {
    const mixturesCollection = collection(db, MIXTURES_COLLECTION)
    const q = query(mixturesCollection, orderBy('timestamp', 'desc'))
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      savedMixtures.value = snapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          name: data.name,
          colors: data.colors || [],
          mixedColor: data.mixedColor,
          timestamp: data.timestamp?.toDate ? data.timestamp.toDate().toISOString() : (data.timestamp || new Date().toISOString()),
          createdBy: data.createdBy || 'staff'
        }
      })
    }, (error) => {
      console.error('Error loading mixtures:', error)
      errorMessage.value = 'Failed to load mixtures. Please refresh the page.'
      clearMessages()
    })
    
    return unsubscribe
  } catch (error) {
    console.error('Error setting up mixtures listener:', error)
    errorMessage.value = 'Failed to connect to database.'
    clearMessages()
  }
}

// Initialize component
let mixturesUnsubscribe = null
onMounted(() => {
  drawColorWheel()
  updateMixedColor()
  updateCurrentPreviewColor()

  mixturesUnsubscribe = loadMixturesFromFirestore()
})

// Cleanup on unmount
onUnmounted(() => {
  if (mixturesUnsubscribe) {
    mixturesUnsubscribe()
  }
})

const drawColorWheel = () => {
  if (!colorCanvas.value) return
  const canvas = colorCanvas.value
  const ctx = canvas.getContext('2d')
  const width = canvas.width
  const height = canvas.height

  ctx.clearRect(0, 0, width, height)

  const imageData = ctx.createImageData(width, height)
  const data = imageData.data

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const hue = (x / width) * 360
      const saturation = (y / height)
      const value = 1

      const rgb = hsvToRgb(hue, saturation, value)
      const index = (y * width + x) * 4

      data[index] = rgb.r
      data[index + 1] = rgb.g
      data[index + 2] = rgb.b
      data[index + 3] = 255
    }
  }

  ctx.putImageData(imageData, 0, 0)
}

const updateMixedColor = () => {
  mixedColor.value = simulateColorMixing(selectedColors.value)
}

const updateCurrentPreviewColor = () => {
  if (selectedColors.value.length > 0) {
    currentPreviewColor.value = selectedColors.value[selectedColors.value.length - 1].hex
  } else {
    currentPreviewColor.value = '#ffffff'
  }
}

const toggleCategory = (category) => {
  Object.keys(categoryVisibility.value).forEach(key => {
    if (key !== category) {
      categoryVisibility.value[key] = false
    }
  })
  categoryVisibility.value[category] = !categoryVisibility.value[category]
}

const onCategoryEnter = (el) => {
  el.style.maxHeight = '0'
  el.style.opacity = '0'
  el.offsetHeight
  el.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out'
  el.style.maxHeight = '500px'
  el.style.opacity = '1'
}

const onCategoryLeave = (el) => {
  el.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out'
  el.style.maxHeight = '0'
  el.style.opacity = '0'
}

const triggerFileInput = () => {
  if (!isAnalyzing.value) {
    fileInput.value?.click()
  }
}

const handleFileSelect = (event) => {
  const file = event.target.files?.[0]
  if (file) {
    processFile(file)
  }
}

const handleDragOver = (event) => {
  event.preventDefault()
  isDragOver.value = true
}

const handleDragLeave = () => {
  isDragOver.value = false
}

const handleDrop = (event) => {
  event.preventDefault()
  isDragOver.value = false
  const file = event.dataTransfer.files?.[0]
  if (file && file.type.startsWith('image/')) {
    processFile(file)
  } else if (file) {
    errorMessage.value = 'Only image files are supported.'
    clearMessages()
  }
}

const processFile = (file) => {
  if (file.size > 10 * 1024 * 1024) {
    errorMessage.value = 'File size must be less than 10MB.'
    clearMessages()
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    uploadedImage.value = e.target?.result
    analysisResults.value = []
    isAnalyzing.value = false
  }
  reader.onerror = () => {
    errorMessage.value = 'Error reading file.'
    clearMessages()
  }
  reader.readAsDataURL(file)
}

const analyzeImage = () => {
  if (!uploadedImage.value) {
    errorMessage.value = 'No image uploaded.'
    clearMessages()
    return
  }

  const img = new Image()
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    const imageData = ctx.getImageData(0, 0, img.width, img.height)

    isAnalyzing.value = true
    analysisProgress.value = 0

    const interval = setInterval(() => {
      analysisProgress.value += 10
      if (analysisProgress.value >= 100) {
        clearInterval(interval)

        const colors = extractDominantColors(imageData)
        analysisResults.value = colors

        isAnalyzing.value = false
        analysisProgress.value = 0
      }
    }, 100)
  }
  img.onerror = () => {
    errorMessage.value = 'Error processing image.'
    clearMessages()
    isAnalyzing.value = false
  }
  img.src = uploadedImage.value
}

const clearUpload = () => {
  uploadedImage.value = null
  analysisResults.value = []
  isAnalyzing.value = false
  analysisProgress.value = 0
}

const addAnalyzedColor = (result) => {
  if (selectedColors.value.length >= 5) {
    errorMessage.value = 'Maximum of 5 colors allowed in the palette.'
    clearMessages()
    return
  }

  const exists = selectedColors.value.some(c => c.hex === result.hex)
  if (exists) {
    return
  }

  addColorToMixture({
    name: result.name || 'Detected Color',
    hex: result.hex,
    ratio: 25
  })
}

const saveMixture = async () => {
  if (!mixtureName.value || selectedColors.value.length === 0) {
    errorMessage.value = 'Please enter a mixture name and select colors.'
    clearMessages()
    return
  }

  try {
    const newMixture = {
      name: mixtureName.value,
      colors: selectedColors.value.map(c => ({ hex: c.hex, name: c.name, ratio: c.ratio })),
      mixedColor: mixedColor.value,
      timestamp: Timestamp.now(),
      createdBy: 'staff'
    }

    const mixturesCollection = collection(db, MIXTURES_COLLECTION)
    await addDoc(mixturesCollection, newMixture)
    
    successMessage.value = 'Mixture saved successfully!'
    clearMessages()

    mixtureName.value = ''
    selectedColors.value = []
    updateMixedColor()
    updateCurrentPreviewColor()
  } catch (error) {
    console.error('Error saving mixture:', error)
    errorMessage.value = 'Failed to save mixture. Please try again.'
    clearMessages()
  }
}

const loadMixture = (mixture) => {
  if (!mixture || !mixture.colors) {
    errorMessage.value = 'Invalid mixture data'
    clearMessages()
    return
  }
  
  selectedColors.value = mixture.colors.map(c => ({
    hex: c.hex,
    name: c.name,
    ratio: c.ratio
  }))
  
  mixtureName.value = mixture.name
  
  updateMixedColor()
  updateCurrentPreviewColor()
  
  successMessage.value = `Mixture "${mixture.name}" loaded successfully!`
  clearMessages()
  
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const deleteMixture = async (id) => {
  if (!confirm('Are you sure you want to delete this mixture?')) {
    return
  }
  
  try {
    const mixtureDoc = doc(db, MIXTURES_COLLECTION, id)
    await deleteDoc(mixtureDoc)
    successMessage.value = 'Mixture deleted successfully!'
    clearMessages()
  } catch (error) {
    console.error('Error deleting mixture:', error)
    errorMessage.value = 'Failed to delete mixture. Please try again.'
    clearMessages()
  }
}

const getColorName = (hex) => {
  const rgb = hexToRgb(hex)
  if (!rgb) return 'Unknown Color'

  const { r, g, b } = rgb
  const [h, s, l] = rgbToHsl(r, g, b)

  const colorNames = [
    { hue: [355, 360], sat: [80, 100], light: [45, 65], name: 'True Red' },
    { hue: [0, 5], sat: [80, 100], light: [45, 65], name: 'True Red' },
    { hue: [350, 360], sat: [60, 70], light: [35, 55], name: 'Crimson' },
    { hue: [0, 15], sat: [70, 100], light: [35, 55], name: 'Fire Red' },
    { hue: [345, 360], sat: [40, 60], light: [65, 85], name: 'Rose' },
    { hue: [0, 15], sat: [60, 90], light: [75, 95], name: 'Light Pink' },
    { hue: [0, 15], sat: [60, 90], light: [25, 45], name: 'Dark Red' },
    { hue: [320, 340], sat: [80, 100], light: [50, 70], name: 'Hot Pink' },
    { hue: [300, 320], sat: [75, 100], light: [45, 65], name: 'Magenta' },
    { hue: [340, 360], sat: [60, 85], light: [70, 90], name: 'Pink' },
    { hue: [310, 330], sat: [50, 80], light: [70, 90], name: 'Soft Pink' },
    { hue: [290, 310], sat: [60, 90], light: [60, 80], name: 'Orchid' },
    { hue: [280, 300], sat: [40, 70], light: [70, 90], name: 'Lavender Pink' },
    { hue: [15, 35], sat: [70, 100], light: [70, 90], name: 'Coral' },
    { hue: [340, 360], sat: [30, 60], light: [80, 95], name: 'Baby Pink' },
    { hue: [270, 290], sat: [70, 100], light: [35, 55], name: 'Royal Purple' },
    { hue: [250, 270], sat: [60, 90], light: [40, 60], name: 'Purple' },
    { hue: [240, 260], sat: [40, 70], light: [70, 90], name: 'Lavender' },
    { hue: [280, 300], sat: [40, 70], light: [60, 80], name: 'Plum' },
    { hue: [260, 280], sat: [80, 100], light: [25, 45], name: 'Deep Purple' },
    { hue: [290, 310], sat: [40, 70], light: [60, 80], name: 'Mauve' },
    { hue: [210, 230], sat: [80, 100], light: [45, 65], name: 'Royal Blue' },
    { hue: [190, 210], sat: [70, 100], light: [50, 70], name: 'Sky Blue' },
    { hue: [200, 220], sat: [60, 90], light: [25, 45], name: 'Navy Blue' },
    { hue: [180, 200], sat: [50, 80], light: [70, 90], name: 'Light Blue' },
    { hue: [230, 250], sat: [70, 100], light: [40, 60], name: 'Blue' },
    { hue: [200, 240], sat: [30, 60], light: [80, 95], name: 'Powder Blue' },
    { hue: [190, 210], sat: [90, 100], light: [30, 50], name: 'Ocean Blue' },
    { hue: [170, 190], sat: [70, 100], light: [45, 65], name: 'Teal' },
    { hue: [180, 200], sat: [80, 100], light: [50, 70], name: 'Turquoise' },
    { hue: [160, 180], sat: [60, 90], light: [60, 80], name: 'Aqua' },
    { hue: [150, 170], sat: [50, 80], light: [40, 60], name: 'Dark Teal' },
    { hue: [175, 195], sat: [40, 70], light: [75, 95], name: 'Light Cyan' },
    { hue: [120, 140], sat: [70, 100], light: [35, 55], name: 'Forest Green' },
    { hue: [100, 120], sat: [80, 100], light: [40, 60], name: 'Emerald Green' },
    { hue: [80, 100], sat: [60, 90], light: [50, 70], name: 'Green' },
    { hue: [60, 80], sat: [50, 80], light: [60, 80], name: 'Lime Green' },
    { hue: [140, 160], sat: [30, 60], light: [50, 70], name: 'Sage Green' },
    { hue: [90, 110], sat: [40, 70], light: [75, 95], name: 'Light Green' },
    { hue: [120, 140], sat: [80, 100], light: [20, 40], name: 'Dark Green' },
    { hue: [50, 65], sat: [80, 100], light: [70, 90], name: 'Yellow' },
    { hue: [45, 55], sat: [70, 100], light: [50, 70], name: 'Golden Yellow' },
    { hue: [55, 70], sat: [40, 70], light: [80, 95], name: 'Cream' },
    { hue: [40, 50], sat: [60, 90], light: [60, 80], name: 'Gold' },
    { hue: [65, 80], sat: [50, 80], light: [70, 90], name: 'Light Yellow' },
    { hue: [25, 40], sat: [80, 100], light: [50, 70], name: 'Orange' },
    { hue: [15, 30], sat: [70, 100], light: [60, 80], name: 'Peach' },
    { hue: [20, 35], sat: [60, 90], light: [35, 55], name: 'Burnt Orange' },
    { hue: [30, 45], sat: [50, 80], light: [75, 95], name: 'Light Orange' },
    { hue: [10, 25], sat: [90, 100], light: [40, 60], name: 'Red Orange' },
    { hue: [25, 45], sat: [40, 80], light: [25, 45], name: 'Chocolate Brown' },
    { hue: [30, 50], sat: [50, 90], light: [35, 55], name: 'Brown' },
    { hue: [35, 55], sat: [30, 60], light: [55, 75], name: 'Tan' },
    { hue: [20, 40], sat: [60, 100], light: [15, 35], name: 'Dark Brown' },
    { hue: [40, 60], sat: [20, 50], light: [70, 90], name: 'Beige' },
  ]

  let bestMatch = null
  let bestScore = 0

  for (const color of colorNames) {
    let score = 0

    const hueMatch = (h >= color.hue[0] && h <= color.hue[1]) ||
                     (color.hue[0] > color.hue[1] && (h >= color.hue[0] || h <= color.hue[1]))

    if (hueMatch) {
      score += 40

      if (s >= color.sat[0] && s <= color.sat[1]) {
        score += 30
      } else {
        const satDistance = Math.min(Math.abs(s - color.sat[0]), Math.abs(s - color.sat[1]))
        score += Math.max(0, 30 - satDistance / 2)
      }

      if (l >= color.light[0] && l <= color.light[1]) {
        score += 30
      } else {
        const lightDistance = Math.min(Math.abs(l - color.light[0]), Math.abs(l - color.light[1]))
        score += Math.max(0, 30 - lightDistance / 2)
      }

      if (score > bestScore) {
        bestScore = score
        bestMatch = color.name
      }
    }
  }

  if (bestMatch && bestScore > 60) {
    return bestMatch
  }

  if (s < 15) {
    if (l < 15) return 'Black'
    if (l < 25) return 'Charcoal'
    if (l < 40) return 'Dark Gray'
    if (l < 60) return 'Gray'
    if (l < 80) return 'Light Gray'
    if (l < 95) return 'Off White'
    return 'White'
  }

  const intensity = s > 50 ? 'Bright ' : s > 25 ? '' : 'Muted '

  if (h < 15 || h >= 345) return intensity + 'Red'
  if (h < 45) return intensity + 'Orange'
  if (h < 75) return intensity + 'Yellow'
  if (h < 150) return intensity + 'Green'
  if (h < 210) return intensity + 'Blue'
  if (h < 270) return intensity + 'Purple'
  if (h < 330) return intensity + 'Pink'
  return intensity + 'Red'
}

const extractDominantColors = (imageData) => {
  const data = imageData.data
  const width = imageData.width
  const height = imageData.height
  const colorMap = new Map()

  const centerX = width / 2
  const centerY = height / 2
  const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY)

  const edgeColors = new Set()
  const edgeThickness = Math.min(width, height) * 0.05

  for (let y = 0; y < height; y += 3) {
    for (let x = 0; x < width; x += 3) {
      if (x < edgeThickness || x > width - edgeThickness ||
          y < edgeThickness || y > height - edgeThickness) {
        const i = (y * width + x) * 4
        const r = Math.round(data[i] / 20) * 20
        const g = Math.round(data[i + 1] / 20) * 20
        const b = Math.round(data[i + 2] / 20) * 20
        edgeColors.add(`${r},${g},${b}`)
      }
    }
  }

  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      const i = (y * width + x) * 4
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const a = data[i + 3]

      if (a < 128) continue

      const brightness = (r + g + b) / 3
      if (brightness < 25 || brightness > 245) continue

      const dx = x - centerX
      const dy = y - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)

      const centerWeight = Math.max(0.2, 1 - (distance / maxDistance))

      const [h, s, l] = rgbToHsl(r, g, b)
      const vibrancyWeight = Math.max(0.3, s / 100)

      const qr = Math.round(r / 20) * 20
      const qg = Math.round(g / 20) * 20
      const qb = Math.round(b / 20) * 20
      const isBackground = edgeColors.has(`${qr},${qg},${qb}`)
      const backgroundWeight = isBackground ? 0.1 : 1.0

      const totalWeight = centerWeight * vibrancyWeight * backgroundWeight

      const finalR = Math.round(r / 12) * 12
      const finalG = Math.round(g / 12) * 12
      const finalB = Math.round(b / 12) * 12

      const key = `${finalR},${finalG},${finalB}`
      const current = colorMap.get(key) || { count: 0, r: finalR, g: finalG, b: finalB }
      current.count += totalWeight
      colorMap.set(key, current)
    }
  }

  const colors = Array.from(colorMap.values())
    .filter(color => color.count > 3)
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)

  if (colors.length === 0) return []

  const totalCount = colors.reduce((sum, color) => sum + color.count, 0)

  return colors.map(color => {
    const hex = `#${color.r.toString(16).padStart(2, '0')}${color.g.toString(16).padStart(2, '0')}${color.b.toString(16).padStart(2, '0')}`
    const percentage = Math.round((color.count / totalCount) * 100)
    const colorName = getColorName(hex)

    return {
      hex,
      rgb: { r: color.r, g: color.g, b: color.b },
      percentage,
      name: colorName
    }
  })
}

const simulateColorMixing = (colors) => {
  if (colors.length === 0) return '#ffffff'

  let totalR = 0, totalG = 0, totalB = 0, totalWeight = 0

  colors.forEach(color => {
    const rgb = hexToRgb(color.hex)
    const weight = color.ratio / 100

    const linearR = Math.pow(rgb.r / 255, 2.2)
    const linearG = Math.pow(rgb.g / 255, 2.2)
    const linearB = Math.pow(rgb.b / 255, 2.2)

    totalR += linearR * weight
    totalG += linearG * weight
    totalB += linearB * weight
    totalWeight += weight
  })

  if (totalWeight > 0) {
    const finalLinearR = totalR / totalWeight
    const finalLinearG = totalG / totalWeight
    const finalLinearB = totalB / totalWeight

    const r = Math.round(Math.pow(finalLinearR, 1/2.2) * 255)
    const g = Math.round(Math.pow(finalLinearG, 1/2.2) * 255)
    const b = Math.round(Math.pow(finalLinearB, 1/2.2) * 255)

    return rgbToHex(Math.max(0, Math.min(255, r)), Math.max(0, Math.min(255, g)), Math.max(0, Math.min(255, b)))
  }

  return '#ffffff'
}
</script>

<style scoped>
@keyframes ai-thinking {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes color-blend {
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
  }
}

@keyframes color-extract {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes upload-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--primary-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0);
  }
}

.ai-thinking {
  animation: ai-thinking 1s linear infinite;
}

.color-blend {
  animation: color-blend 3s ease-in-out infinite;
  transition: background-color 0.5s ease;
}

.fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.color-extract {
  animation: color-extract 2s linear infinite;
}

.upload-pulse {
  animation: upload-pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.category-enter-active,
.category-leave-active {
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
}

.category-enter-from,
.category-leave-to {
  max-height: 0;
  opacity: 0;
}

.max-h-64::-webkit-scrollbar {
  width: 6px;
}

.max-h-64::-webkit-scrollbar-track {
  background: hsl(var(--muted));
  border-radius: 3px;
}

.max-h-64::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.3);
  border-radius: 3px;
}

.max-h-64::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.5);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.transition-all {
  transition: all 0.2s ease-in-out;
}

.cursor-crosshair {
  cursor: crosshair;
}

.cursor-crosshair:hover {
  cursor: crosshair;
}

.enhanced-range {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  height: 8px;
}

.enhanced-range::-webkit-slider-track {
  background: linear-gradient(to right,
    hsl(var(--muted)) 0%,
    var(--color, hsl(var(--primary))) 50%,
    hsl(var(--muted)) 100%);
  height: 8px;
  border-radius: 4px;
  border: 1px solid hsl(var(--border));
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
}

.enhanced-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(135deg,
    var(--color, hsl(var(--primary))),
    color-mix(in srgb, var(--color, hsl(var(--primary))) 80%, black));
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 3px solid white;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.enhanced-range::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(0,0,0,0.25), 0 0 0 2px var(--color, hsl(var(--primary)));
}

.enhanced-range::-moz-range-track {
  background: linear-gradient(to right,
    hsl(var(--muted)) 0%,
    var(--color, hsl(var(--primary))) 50%,
    hsl(var(--muted)) 100%);
  height: 8px;
  border-radius: 4px;
  border: 1px solid hsl(var(--border));
}

.enhanced-range::-moz-range-thumb {
  background: linear-gradient(135deg,
    var(--color, hsl(var(--primary))),
    color-mix(in srgb, var(--color, hsl(var(--primary))) 80%, black));
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 3px solid white;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.drop-zone {
  border-style: dashed;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.drop-zone.drag-over {
  border-color: hsl(var(--primary));
  background-color: hsl(var(--primary) / 0.1);
}

.progress-bar-container {
  background-color: hsl(var(--muted));
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 8px;
  background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-foreground)));
  transition: width 0.2s ease-in-out;
}
</style>
 