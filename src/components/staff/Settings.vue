<template>
  <!-- Toast notification -->
  <div 
    v-if="showToast" 
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div class="bg-black/50 fixed inset-0" @click="showToast = false"></div>
    <div class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-lg shadow-lg flex items-center z-10 max-w-md animate-bounce-in">
      <component :is="toastIcon" class="h-6 w-6 mr-3 text-white" />
      <div>
        <h3 class="font-medium">{{ toastTitle }}</h3>
        <p class="text-sm text-white/80">{{ toastMessage }}</p>
      </div>
    </div>
  </div>

  <!-- Loading overlay -->
  <div v-if="loading" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 flex items-center gap-3">
      <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
      <span>Loading...</span>
    </div>
  </div>

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
          <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <UserIcon class="h-3 w-3 mr-1" />
            Staff Portal
          </div>
        </div>

        <!-- Navigation -->
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
            to="/staff/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border border-pink-200 transform scale-105': $route.path === '/staff/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': $route.path === '/staff/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/staff/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 shadow-sm border border-green-200 transform scale-105"
            :class="{ 'hover:bg-green-100 hover:text-green-700': $route.path !== '/staff/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>

          <!-- Perfect spacing -->
          <div class="h-4"></div>
        </nav>

        <!-- User Menu -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-lg overflow-hidden">
              <img v-if="userPhotoURL" :src="userPhotoURL" alt="Profile" class="w-full h-full object-cover" />
              <UserIcon v-else class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ profile.fullName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ profile.email || 'staff@example.com' }}</p>
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
        class="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 z-20 md:hidden shadow-xl flex flex-col overflow-y-auto"
      >
        <!-- Same content as desktop sidebar -->
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <h1 class="text-lg font-bold text-gray-900 leading-tight">Mindoro Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <UserIcon class="h-3 w-3 mr-1" />
            Staff Portal
          </div>
        </div>

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
            to="/staff/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50"
            :class="{ 'shadow-sm border border-pink-200': $route.path === '/staff/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50"
            :class="{ 'shadow-sm border border-orange-200': $route.path === '/staff/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/staff/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 shadow-sm border border-green-200"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
        </nav>

        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-lg overflow-hidden">
              <img v-if="userPhotoURL" :src="userPhotoURL" alt="Profile" class="w-full h-full object-cover" />
              <UserIcon v-else class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ profile.fullName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ profile.email || 'staff@example.com' }}</p>
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
        <header class="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 shadow-sm">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-xl sm:text-2xl font-bold text-gray-900">Settings</h1>
              <p class="text-sm sm:text-base text-gray-600">Manage your account and preferences</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-green-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900 text-sm sm:text-base">Welcome, {{ firstName }}</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-green-500 cursor-pointer hover:text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 sm:p-6 md:p-8 space-y-6">
          <!-- Settings Tabs -->
          <div class="bg-white/50 backdrop-blur-sm rounded-lg p-1 flex overflow-x-auto hide-scrollbar border border-gray-200 shadow-sm">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              class="px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors"
              :class="activeTab === tab.id ? 'bg-green-500 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'"
            >
              <div class="flex items-center gap-1 sm:gap-2">
                <component :is="tab.icon" class="w-4 h-4" />
                <span>{{ tab.name }}</span>
              </div>
            </button>
          </div>

          <!-- Profile Settings -->
          <div v-if="activeTab === 'profile'" class="max-w-2xl mx-auto">
            <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
              <div class="p-4 sm:p-6 border-b border-gray-200">
                <h2 class="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                  <UserIcon class="w-5 h-5 mr-2 text-green-500" />
                  Profile Settings
                </h2>
              </div>
              <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="flex flex-col sm:flex-row items-center gap-4">
                  <div class="relative">
                    <div class="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                      <img v-if="userPhotoURL" :src="userPhotoURL" alt="Profile" class="w-full h-full object-cover" />
                      <UserIcon v-else class="w-10 h-10 text-green-600" />
                    </div>
                    <input 
                      type="file" 
                      ref="photoInput" 
                      accept="image/*" 
                      class="hidden" 
                      @change="handlePhotoUpload"
                    />
                  </div>
                  <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <button 
                      @click="$refs.photoInput.click()" 
                      class="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-all text-sm"
                    >
                      Change Photo
                    </button>
                    <button 
                      v-if="userPhotoURL" 
                      @click="removePhoto" 
                      class="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all text-sm"
                    >
                      Remove Photo
                    </button>
                  </div>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      v-model="profile.fullName"
                      class="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      v-model="profile.email"
                      class="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      v-model="profile.phone"
                      class="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Account Settings -->
          <div v-if="activeTab === 'account'" class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
              <div class="p-4 sm:p-6 border-b border-gray-200">
                <h2 class="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                  <ShieldIcon class="w-5 h-5 mr-2 text-blue-500" />
                  Change Password
                </h2>
              </div>
              <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <input 
                      type="password" 
                      v-model="account.currentPassword"
                      class="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input 
                      type="password" 
                      v-model="account.newPassword"
                      class="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input 
                      type="password" 
                      v-model="account.confirmPassword"
                      class="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div class="pt-2">
                    <button 
                      @click="changePassword" 
                      class="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
              <div class="p-4 sm:p-6 border-b border-gray-200">
                <h2 class="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                  <ShieldIcon class="w-5 h-5 mr-2 text-purple-500" />
                  Security Settings
                </h2>
              </div>
              <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="space-y-4">
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h3 class="font-medium text-gray-900">Two-Factor Authentication</h3>
                      <p class="text-sm text-gray-600">Add an extra layer of security</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="security.twoFactor" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                    </label>
                  </div>
                  
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h3 class="font-medium text-gray-900">Login Notifications</h3>
                      <p class="text-sm text-gray-600">Get notified when someone logs into your account</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="security.loginNotifications" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Appearance Settings -->
          <div v-if="activeTab === 'appearance'" class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
              <div class="p-4 sm:p-6 border-b border-gray-200">
                <h2 class="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                  <PaintbrushIcon class="w-5 h-5 mr-2 text-pink-500" />
                  Theme Settings
                </h2>
              </div>
              <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Color Theme</label>
                    <div class="grid grid-cols-3 gap-2 sm:gap-3">
                      <button 
                        @click="theme.color = 'light'"
                        class="p-2 sm:p-3 rounded-lg border transition-colors flex flex-col items-center"
                        :class="theme.color === 'light' ? 'border-pink-500 bg-pink-50 ring-2 ring-pink-200' : 'border-gray-200 hover:bg-gray-50'"
                      >
                        <div class="w-full h-8 sm:h-12 bg-white rounded-md mb-2 border border-gray-200"></div>
                        <span class="text-xs sm:text-sm text-gray-900">Light</span>
                      </button>
                      <button 
                        @click="theme.color = 'dark'"
                        class="p-2 sm:p-3 rounded-lg border transition-colors flex flex-col items-center"
                        :class="theme.color === 'dark' ? 'border-pink-500 bg-pink-50 ring-2 ring-pink-200' : 'border-gray-200 hover:bg-gray-50'"
                      >
                        <div class="w-full h-8 sm:h-12 bg-gray-800 rounded-md mb-2"></div>
                        <span class="text-xs sm:text-sm text-gray-900">Dark</span>
                      </button>
                      <button 
                        @click="theme.color = 'system'"
                        class="p-2 sm:p-3 rounded-lg border transition-colors flex flex-col items-center"
                        :class="theme.color === 'system' ? 'border-pink-500 bg-pink-50 ring-2 ring-pink-200' : 'border-gray-200 hover:bg-gray-50'"
                      >
                        <div class="w-full h-8 sm:h-12 bg-gradient-to-r from-white to-gray-800 rounded-md mb-2"></div>
                        <span class="text-xs sm:text-sm text-gray-900">System</span>
                      </button>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h3 class="font-medium text-gray-900">Reduce Motion</h3>
                      <p class="text-sm text-gray-600">Minimize animations</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="theme.reduceMotion" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
              <div class="p-4 sm:p-6 border-b border-gray-200">
                <h2 class="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                  <PaintbrushIcon class="w-5 h-5 mr-2 text-orange-500" />
                  Accent Color
                </h2>
              </div>
              <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="grid grid-cols-4 gap-2 sm:gap-3">
                  <button 
                    v-for="color in accentColors" 
                    :key="color.id"
                    @click="theme.accentColor = color.id"
                    class="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors aspect-square"
                  >
                    <div 
                      class="w-full h-full rounded-md transition-transform"
                      :style="{ backgroundColor: color.value }"
                      :class="theme.accentColor === color.id ? 'ring-2 ring-gray-400 scale-90' : ''"
                    ></div>
                  </button>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                  <div class="flex items-center gap-4">
                    <span class="text-xs text-gray-600">A</span>
                    <input 
                      type="range" 
                      min="0" 
                      max="4" 
                      v-model="theme.fontSize" 
                      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <span class="text-lg text-gray-600">A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="flex justify-end">
            <button 
              @click="saveSettings" 
              class="save-button px-4 sm:px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
            >
              <SaveIcon class="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { 
  LayoutDashboard as LayoutDashboardIcon, 
  Package as PackageIcon, 
  Palette as PaletteIcon, 
  Home as HomeIcon, 
  Settings as SettingsIcon, 
  User as UserIcon,
  Menu as MenuIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  Save as SaveIcon,
  LogOut as LogOutIcon,
  X as XIcon,
  Check as CheckIcon,
  AlertTriangle as AlertTriangleIcon,
  Shield as ShieldIcon,
  Paintbrush as PaintbrushIcon
} from 'lucide-vue-next';

// Firebase imports
import { auth, db } from '@/config/firebase.js';
import { 
  signOut, 
  onAuthStateChanged, 
  updatePassword, 
  reauthenticateWithCredential, 
  EmailAuthProvider 
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  serverTimestamp 
} from 'firebase/firestore';

const router = useRouter();
const mobileSidebarOpen = ref(false);
const activeTab = ref('profile');
const showToast = ref(false);
const toastTitle = ref('');
const toastMessage = ref('');
const toastIcon = ref(CheckIcon);
const photoInput = ref(null);
const loading = ref(true);
const currentUser = ref(null);

// Global storage key for user data
const GLOBAL_USER_KEY = 'mindoro-user-data';

// Tabs
const tabs = [
  { id: 'profile', name: 'Profile', icon: UserIcon },
  { id: 'account', name: 'Account & Security', icon: ShieldIcon },
  { id: 'appearance', name: 'Appearance', icon: PaintbrushIcon }
];

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

// Get user photo URL from localStorage
const userPhotoURL = ref(null);

// Profile settings
const profile = ref({
  fullName: '',
  email: '',
  phone: ''
});

const firstName = computed(() => {
  if (!profile.value.fullName) return 'Staff';
  return profile.value.fullName.split(' ')[0];
});

// Account settings
const account = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

// Security settings
const security = ref({
  twoFactor: false,
  loginNotifications: true
});

// Theme settings
const theme = ref({
  color: 'light',
  reduceMotion: false,
  accentColor: 'green',
  fontSize: 2 // 0-4, 2 is default
});

const accentColors = [
  { id: 'blue', value: '#3b82f6' },
  { id: 'green', value: '#10b981' },
  { id: 'purple', value: '#8b5cf6' },
  { id: 'orange', value: '#f97316' },
  { id: 'pink', value: '#ec4899' },
  { id: 'teal', value: '#14b8a6' },
  { id: 'red', value: '#ef4444' },
  { id: 'indigo', value: '#6366f1' }
];

// Auth state listener
let unsubscribeAuth = null;

// Initialize Firebase auth state listener
const initializeAuth = () => {
  unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
    try {
      if (user) {
        currentUser.value = user;
        await loadUserProfile(user.uid);
      } else {
        // User is not authenticated, redirect to login
        router.push('/staff');
      }
    } catch (error) {
      console.error('Auth state change error:', error);
      showToastNotification('Error', 'Authentication error occurred.', AlertTriangleIcon);
    } finally {
      loading.value = false;
    }
  });
};

// Load user profile from Firestore
const loadUserProfile = async (userId) => {
  try {
    const userDocRef = doc(db, 'staff', userId);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      profile.value = {
        fullName: userData.fullName || '',
        email: userData.email || currentUser.value?.email || '',
        phone: userData.phone || ''
      };
      
      if (userData.photoURL) {
        userPhotoURL.value = userData.photoURL;
      }
      
      // Load settings
      if (userData.settings) {
        if (userData.settings.theme) {
          theme.value = { ...theme.value, ...userData.settings.theme };
        }
        if (userData.settings.security) {
          security.value = { ...security.value, ...userData.settings.security };
        }
      }
    } else {
      // Create initial profile document
      const initialData = {
        fullName: currentUser.value?.displayName || '',
        email: currentUser.value?.email || '',
        phone: '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      
      await setDoc(userDocRef, initialData);
      profile.value = initialData;
    }
    
    // Also save to localStorage for offline access
    saveToLocalStorage();
  } catch (error) {
    console.error('Error loading user profile:', error);
    showToastNotification('Error', 'Failed to load profile data.', AlertTriangleIcon);
    
    // Fallback to localStorage
    loadFromLocalStorage();
  }
};

// Save user profile to Firestore
const saveUserProfile = async () => {
  if (!currentUser.value) return;
  
  try {
    const userDocRef = doc(db, 'staff', currentUser.value.uid);
    const updateData = {
      fullName: profile.value.fullName,
      email: profile.value.email,
      phone: profile.value.phone,
      photoURL: userPhotoURL.value,
      settings: {
        theme: theme.value,
        security: security.value
      },
      updatedAt: serverTimestamp()
    };
    
    await updateDoc(userDocRef, updateData);
    
    // Also save to localStorage
    saveToLocalStorage();
    
    return true;
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
};

// Load settings from localStorage (fallback)
const loadFromLocalStorage = () => {
  try {
    const savedUserData = localStorage.getItem(GLOBAL_USER_KEY);
    if (savedUserData) {
      const parsedData = JSON.parse(savedUserData);
      
      if (parsedData.fullName) {
        profile.value.fullName = parsedData.fullName;
      }
      
      if (parsedData.email) {
        profile.value.email = parsedData.email;
      }
      
      if (parsedData.phone) {
        profile.value.phone = parsedData.phone;
      }
      
      if (parsedData.photoURL) {
        userPhotoURL.value = parsedData.photoURL;
      }
    }
    
    const SETTINGS_KEY = 'mindoro-paint-settings';
    const savedSettings = localStorage.getItem(SETTINGS_KEY);
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      
      if (parsedSettings.theme) {
        theme.value = { ...theme.value, ...parsedSettings.theme };
      }
      
      if (parsedSettings.security) {
        security.value = { ...security.value, ...parsedSettings.security };
      }
    }
  } catch (error) {
    console.error('Error loading from localStorage:', error);
  }
};

// Save to localStorage
const saveToLocalStorage = () => {
  try {
    const userData = {
      fullName: profile.value.fullName,
      email: profile.value.email,
      phone: profile.value.phone,
      photoURL: userPhotoURL.value
    };
    
    localStorage.setItem(GLOBAL_USER_KEY, JSON.stringify(userData));
    
    const SETTINGS_KEY = 'mindoro-paint-settings';
    const settingsToSave = {
      theme: theme.value,
      security: security.value
    };
    
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsToSave));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Functions
const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value;
};

const handleLogout = async () => {
  try {
    await signOut(auth);
    // The auth state listener will handle the redirect
  } catch (error) {
    console.error('Error logging out:', error);
    showToastNotification('Error', 'Failed to log out. Please try again.', AlertTriangleIcon);
  }
};

const saveSettings = async () => {
  try {
    // Show loading state
    const saveButton = document.querySelector('.save-button');
    if (saveButton) {
      saveButton.disabled = true;
      saveButton.innerHTML = '<span class="animate-pulse">Saving...</span>';
    }
    
    // Save to Firestore
    await saveUserProfile();
    
    // Reset button state
    if (saveButton) {
      saveButton.disabled = false;
      saveButton.innerHTML = '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14L21 10V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 21V13H7V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3V8H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Save Changes';
    }
    
    showToastNotification('Success', 'All your settings have been saved successfully.', CheckIcon);
  } catch (error) {
    console.error('Error saving settings:', error);
    showToastNotification('Error', 'Failed to save settings. Please try again.', AlertTriangleIcon);
    
    // Reset button state
    const saveButton = document.querySelector('.save-button');
    if (saveButton) {
      saveButton.disabled = false;
      saveButton.innerHTML = '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14L21 10V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 21V13H7V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3V8H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Save Changes';
    }
  }
};

const handlePhotoUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  
  try {
    showToastNotification('Uploading', 'Uploading your profile photo...', null);
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const reader = new FileReader();
    reader.onload = async (e) => {
      userPhotoURL.value = e.target.result;
      
      // Save immediately
      try {
        await saveUserProfile();
        showToastNotification('Success', 'Profile photo updated successfully.', CheckIcon);
      } catch (error) {
        console.error('Error saving photo:', error);
        showToastNotification('Error', 'Failed to save photo. Please try again.', AlertTriangleIcon);
      }
    };
    
    reader.readAsDataURL(file);
  } catch (error) {
    console.error('Error uploading photo:', error);
    showToastNotification('Error', 'Failed to upload photo. Please try again.', AlertTriangleIcon);
  }
};

const removePhoto = async () => {
  try {
    userPhotoURL.value = null;
    await saveUserProfile();
    showToastNotification('Success', 'Profile photo removed successfully.', CheckIcon);
  } catch (error) {
    console.error('Error removing photo:', error);
    showToastNotification('Error', 'Failed to remove photo. Please try again.', AlertTriangleIcon);
  }
};

const changePassword = async () => {
  try {
    // Validate passwords
    if (account.value.newPassword !== account.value.confirmPassword) {
      showToastNotification('Error', 'New passwords do not match.', AlertTriangleIcon);
      return;
    }
    
    if (!account.value.currentPassword || !account.value.newPassword) {
      showToastNotification('Error', 'Please fill in all password fields.', AlertTriangleIcon);
      return;
    }
    
    if (account.value.newPassword.length < 6) {
      showToastNotification('Error', 'New password must be at least 6 characters long.', AlertTriangleIcon);
      return;
    }
    
    if (!currentUser.value) {
      showToastNotification('Error', 'User not authenticated.', AlertTriangleIcon);
      return;
    }
    
    // Reauthenticate user
    const credential = EmailAuthProvider.credential(
      currentUser.value.email,
      account.value.currentPassword
    );
    
    await reauthenticateWithCredential(currentUser.value, credential);
    
    // Update password
    await updatePassword(currentUser.value, account.value.newPassword);
    
    // Clear form
    account.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
    
    showToastNotification('Success', 'Your password has been changed successfully.', CheckIcon);
  } catch (error) {
    console.error('Error changing password:', error);
    
    let errorMessage = 'Failed to change password. Please try again.';
    if (error.code === 'auth/wrong-password') {
      errorMessage = 'Current password is incorrect.';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'New password is too weak.';
    } else if (error.code === 'auth/requires-recent-login') {
      errorMessage = 'Please log out and log back in before changing your password.';
    }
    
    showToastNotification('Error', errorMessage, AlertTriangleIcon);
  }
};

const showToastNotification = (title, message, icon = CheckIcon) => {
  toastTitle.value = title;
  toastMessage.value = message;
  toastIcon.value = icon;
  showToast.value = true;
  
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

// Lifecycle hooks
onMounted(() => {
  // Initialize Firebase auth
  initializeAuth();
  
  // Load from localStorage as fallback
  loadFromLocalStorage();
});

onUnmounted(() => {
  // Clean up auth listener
  if (unsubscribeAuth) {
    unsubscribeAuth();
  }
});

// Watch for changes to auto-save
watch([profile, theme, security], () => {
  if (currentUser.value) {
    // Debounce auto-save
    clearTimeout(window.autoSaveTimeout);
    window.autoSaveTimeout = setTimeout(() => {
      saveToLocalStorage();
    }, 1000);
  }
}, { deep: true });
</script>

<style scoped>
.animate-bounce-in {
  animation: bounceIn 0.5s ease-out;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
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
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #059669, #047857);
}

/* Hide scrollbar for tabs but keep functionality */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* Custom slider styling */
.slider::-webkit-slider-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Reduce motion */
.reduce-motion * {
  transition-duration: 0.001ms !important;
  animation-duration: 0.001ms !important;
}
</style>
