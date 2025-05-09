<template>
  <!-- Template remains mostly the same -->
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
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              <img v-if="userPhotoURL" :src="userPhotoURL" alt="Profile" class="w-full h-full object-cover" />
              <UserIcon v-else class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">{{ profile.fullName || 'Staff User' }}</p>
              <p class="text-xs text-white/60 truncate">{{ profile.email || 'staff@example.com' }}</p>
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
        class="fixed left-0 top-0 h-full w-64 bg-[#0A2159]/90 backdrop-blur-sm border-r border-white/10 z-20 md:hidden overflow-y-auto"
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
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              <img v-if="userPhotoURL" :src="userPhotoURL" alt="Profile" class="w-full h-full object-cover" />
              <UserIcon v-else class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">{{ profile.fullName || 'Staff User' }}</p>
              <p class="text-xs text-white/60 truncate">{{ profile.email || 'staff@example.com' }}</p>
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
        <header class="bg-[#0A2159]/80 backdrop-blur-sm border-b border-white/10 px-4 sm:px-6 md:px-8 py-4 shadow-md">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-xl sm:text-2xl font-bold text-white">Settings</h1>
              <p class="text-sm sm:text-base text-white/60">Manage your account and preferences</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-white/80">
                <CalendarIcon class="w-5 h-5" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-white/20"></div>
              <div class="flex items-center gap-3">
                <span class="text-white text-sm sm:text-base">Welcome, {{ firstName }}</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-white cursor-pointer hover:text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 sm:p-6 md:p-8 space-y-6">
          <!-- Settings Tabs -->
          <div class="bg-[#0A2159]/50 backdrop-blur-sm rounded-lg p-1 flex overflow-x-auto hide-scrollbar">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              class="px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors"
              :class="activeTab === tab.id ? 'bg-[#0A3573] text-white' : 'text-white/60 hover:text-white hover:bg-white/5'"
            >
              <div class="flex items-center gap-1 sm:gap-2">
                <component :is="tab.icon" class="w-4 h-4" />
                <span>{{ tab.name }}</span>
              </div>
            </button>
          </div>

          <!-- Profile Settings -->
          <div v-if="activeTab === 'profile'" class="max-w-2xl mx-auto">
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg border border-white/10">
              <div class="p-4 sm:p-6 border-b border-white/10">
                <h2 class="text-base sm:text-lg font-semibold text-white">Profile Settings</h2>
              </div>
              <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="flex flex-col sm:flex-row items-center gap-4">
                  <div class="relative">
                    <div class="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                      <img v-if="userPhotoURL" :src="userPhotoURL" alt="Profile" class="w-full h-full object-cover" />
                      <UserIcon v-else class="w-10 h-10 text-white/70" />
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
                      class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                    >
                      Change Photo
                    </button>
                    <button 
                      v-if="userPhotoURL" 
                      @click="removePhoto" 
                      class="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg font-medium hover:bg-red-600/30 transition-colors text-sm"
                    >
                      Remove Photo
                    </button>
                  </div>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-white mb-2">Full Name</label>
                    <input 
                      type="text" 
                      v-model="profile.fullName"
                      class="w-full p-2.5 bg-white/10 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-white mb-2">Email</label>
                    <input 
                      type="email" 
                      v-model="profile.email"
                      class="w-full p-2.5 bg-white/10 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-white mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      v-model="profile.phone"
                      class="w-full p-2.5 bg-white/10 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Account Settings -->
          <div v-if="activeTab === 'account'" class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg border border-white/10">
              <div class="p-4 sm:p-6 border-b border-white/10">
                <h2 class="text-base sm:text-lg font-semibold text-white">Change Password</h2>
              </div>
              <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-white mb-2">Current Password</label>
                    <input 
                      type="password" 
                      v-model="account.currentPassword"
                      class="w-full p-2.5 bg-white/10 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-white mb-2">New Password</label>
                    <input 
                      type="password" 
                      v-model="account.newPassword"
                      class="w-full p-2.5 bg-white/10 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-white mb-2">Confirm New Password</label>
                    <input 
                      type="password" 
                      v-model="account.confirmPassword"
                      class="w-full p-2.5 bg-white/10 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div class="pt-2">
                    <button 
                      @click="changePassword" 
                      class="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg border border-white/10">
              <div class="p-4 sm:p-6 border-b border-white/10">
                <h2 class="text-base sm:text-lg font-semibold text-white">Security Settings</h2>
              </div>
              <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-medium text-white">Two-Factor Authentication</h3>
                      <p class="text-sm text-white/60">Add an extra layer of security</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="security.twoFactor" class="sr-only peer">
                      <div class="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white/80 after:border-white/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-medium text-white">Login Notifications</h3>
                      <p class="text-sm text-white/60">Get notified when someone logs into your account</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="security.loginNotifications" class="sr-only peer">
                      <div class="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white/80 after:border-white/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Appearance Settings -->
          <div v-if="activeTab === 'appearance'" class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg border border-white/10">
              <div class="p-4 sm:p-6 border-b border-white/10">
                <h2 class="text-base sm:text-lg font-semibold text-white">Theme Settings</h2>
              </div>
              <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-white mb-2">Color Theme</label>
                    <div class="grid grid-cols-3 gap-2 sm:gap-3">
                      <button 
                        @click="theme.color = 'light'"
                        class="p-2 sm:p-3 rounded-lg border transition-colors flex flex-col items-center"
                        :class="theme.color === 'light' ? 'border-blue-500 bg-white/10' : 'border-white/10 hover:bg-white/5'"
                      >
                        <div class="w-full h-8 sm:h-12 bg-white rounded-md mb-2"></div>
                        <span class="text-xs sm:text-sm text-white">Light</span>
                      </button>
                      <button 
                        @click="theme.color = 'dark'"
                        class="p-2 sm:p-3 rounded-lg border transition-colors flex flex-col items-center"
                        :class="theme.color === 'dark' ? 'border-blue-500 bg-white/10' : 'border-white/10 hover:bg-white/5'"
                      >
                        <div class="w-full h-8 sm:h-12 bg-[#0A2159] rounded-md mb-2"></div>
                        <span class="text-xs sm:text-sm text-white">Dark</span>
                      </button>
                      <button 
                        @click="theme.color = 'system'"
                        class="p-2 sm:p-3 rounded-lg border transition-colors flex flex-col items-center"
                        :class="theme.color === 'system' ? 'border-blue-500 bg-white/10' : 'border-white/10 hover:bg-white/5'"
                      >
                        <div class="w-full h-8 sm:h-12 bg-gradient-to-r from-white to-[#0A2159] rounded-md mb-2"></div>
                        <span class="text-xs sm:text-sm text-white">System</span>
                      </button>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-medium text-white">Reduce Motion</h3>
                      <p class="text-sm text-white/60">Minimize animations</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="theme.reduceMotion" class="sr-only peer">
                      <div class="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white/80 after:border-white/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg border border-white/10">
              <div class="p-4 sm:p-6 border-b border-white/10">
                <h2 class="text-base sm:text-lg font-semibold text-white">Accent Color</h2>
              </div>
              <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="grid grid-cols-4 gap-2 sm:gap-3">
                  <button 
                    v-for="color in accentColors" 
                    :key="color.id"
                    @click="theme.accentColor = color.id"
                    class="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors aspect-square"
                  >
                    <div 
                      class="w-full h-full rounded-md transition-transform"
                      :style="{ backgroundColor: color.value }"
                      :class="theme.accentColor === color.id ? 'ring-2 ring-white scale-90' : ''"
                    ></div>
                  </button>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-white mb-2">Font Size</label>
                  <div class="flex items-center gap-4">
                    <span class="text-xs text-white/60">A</span>
                    <input 
                      type="range" 
                      min="0" 
                      max="4" 
                      v-model="theme.fontSize" 
                      class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />
                    <span class="text-lg text-white/60">A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="flex justify-end">
            <button 
              @click="saveSettings" 
              class="save-button px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:opacity-90 transition-colors flex items-center gap-2 shadow-lg"
            >
              <SaveIcon class="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
  
  <!-- Toast notification -->
  <div 
    v-if="showToast" 
    class="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg shadow-lg flex items-center max-w-md z-50"
  >
    <component :is="toastIcon" class="w-5 h-5 mr-3" />
    <div>
      <h3 class="font-medium">{{ toastTitle }}</h3>
      <p class="text-sm text-white/80">{{ toastMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
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
import { getAuth, signOut } from 'firebase/auth';

const router = useRouter();
const mobileSidebarOpen = ref(false);
const activeTab = ref('profile');
const showToast = ref(false);
const toastTitle = ref('');
const toastMessage = ref('');
const toastIcon = ref(CheckIcon);
const photoInput = ref(null);

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
  fullName: 'Staff User',
  email: 'staff@example.com',
  phone: '+63 912 345 6789'
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
  color: 'dark',
  reduceMotion: false,
  accentColor: 'blue',
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

// Load settings from localStorage
const loadSettings = () => {
  try {
    const savedUserData = localStorage.getItem(GLOBAL_USER_KEY);
    if (savedUserData) {
      const parsedData = JSON.parse(savedUserData);
      
      // Load profile data
      if (parsedData.fullName) {
        profile.value.fullName = parsedData.fullName;
      }
      
      if (parsedData.email) {
        profile.value.email = parsedData.email;
      }
      
      if (parsedData.phone) {
        profile.value.phone = parsedData.phone;
      }
      
      // Load profile photo
      if (parsedData.photoURL) {
        userPhotoURL.value = parsedData.photoURL;
      }
    }
    
    // Load additional settings from separate storage
    const SETTINGS_KEY = 'mindoro-paint-settings';
    const savedSettings = localStorage.getItem(SETTINGS_KEY);
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      
      // Load theme settings
      if (parsedSettings.theme) {
        theme.value = { ...theme.value, ...parsedSettings.theme };
      }
      
      // Load security settings
      if (parsedSettings.security) {
        security.value = { ...security.value, ...parsedSettings.security };
      }
    }
  } catch (error) {
    console.error('Error loading settings:', error);
  }
};

// Save user data to localStorage
const saveUserData = () => {
  try {
    const userData = {
      fullName: profile.value.fullName,
      email: profile.value.email,
      phone: profile.value.phone,
      photoURL: userPhotoURL.value
    };
    
    localStorage.setItem(GLOBAL_USER_KEY, JSON.stringify(userData));
    
    // Also save other settings
    const SETTINGS_KEY = 'mindoro-paint-settings';
    const settingsToSave = {
      theme: theme.value,
      security: security.value
    };
    
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsToSave));
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

// Functions
const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value;
};

const handleLogout = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
    router.push('/staff');
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
    
    // Simulate API call to save all settings
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Save all settings to localStorage
    saveUserData();
    
    // Reset button state
    if (saveButton) {
      saveButton.disabled = false;
      saveButton.innerHTML = '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14L21 10V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 21V13H7V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3V8H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Save Changes';
    }
    
    showToastNotification('Success', 'All your settings have been saved successfully.', CheckIcon);
  } catch (error) {
    console.error('Error saving settings:', error);
    showToastNotification('Error', 'Failed to save settings. Please try again.', AlertTriangleIcon);
  }
};

const handlePhotoUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  
  try {
    // Show loading state
    showToastNotification('Uploading', 'Uploading your profile photo...', null);
    
    // Simulate upload to storage
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create a persistent URL for the image
    const reader = new FileReader();
    reader.onload = (e) => {
      // Store the data URL which will persist across page refreshes
      userPhotoURL.value = e.target.result;
      
      // Save immediately to localStorage to ensure it persists
      saveUserData();
      
      showToastNotification('Success', 'Profile photo updated successfully.', CheckIcon);
    };
    
    // Read the file as a data URL (base64 encoded string)
    reader.readAsDataURL(file);
  } catch (error) {
    console.error('Error uploading photo:', error);
    showToastNotification('Error', 'Failed to upload photo. Please try again.', AlertTriangleIcon);
  }
};

const removePhoto = async () => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Update local state
    userPhotoURL.value = null;
    
    // Save to localStorage to persist the change
    saveUserData();
    
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Clear form
    account.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
    
    showToastNotification('Success', 'Your password has been changed successfully.', CheckIcon);
  } catch (error) {
    console.error('Error changing password:', error);
    showToastNotification('Error', 'Failed to change password. Please try again.', AlertTriangleIcon);
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

// Load user data on mount
onMounted(() => {
  // Load settings from localStorage
  loadSettings();
  
  // Simulate API call to get user data if not already loaded
  if (!profile.value.fullName || profile.value.fullName === 'Staff User') {
    setTimeout(() => {
      // This would normally come from Firebase
      profile.value = {
        fullName: 'Juan Dela Cruz',
        email: 'juan@mindoropaint.com',
        phone: '+63 912 345 6789'
      };
      
      // Save to localStorage
      saveUserData();
    }, 500);
  }
});

// Watch for changes to save automatically
watch([profile], () => {
  // Auto-save when profile changes
  saveUserData();
}, { deep: true });
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

/* Hide scrollbar for tabs but keep functionality */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* Reduce motion */
.reduce-motion * {
  transition-duration: 0.001ms !important;
  animation-duration: 0.001ms !important;
}
</style>