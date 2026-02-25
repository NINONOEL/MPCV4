<template>
  <!-- Toast -->
  <div v-if="showToast" class="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div class="bg-black/40 fixed inset-0 backdrop-blur-sm" @click="showToast = false"></div>
    <div class="bg-white px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-10 max-w-md animate-bounce-in border border-emerald-200/80 ring-2 ring-emerald-500/10">
      <div class="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
        <component :is="toastIcon" class="h-5 w-5 text-emerald-600" />
      </div>
      <div>
        <h3 class="font-semibold text-gray-900">{{ toastTitle }}</h3>
        <p class="text-sm text-gray-600 mt-0.5">{{ toastMessage }}</p>
      </div>
    </div>
  </div>

  <!-- Loading overlay -->
  <div v-if="loading" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-xl border border-emerald-100">
      <div class="w-10 h-10 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
      <span class="font-medium text-gray-700">Loading...</span>
    </div>
  </div>

  <div class="min-h-screen bg-gradient-to-b from-slate-50/95 via-white to-emerald-50/30 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[min(90vw,520px)] h-[min(90vw,520px)] bg-gradient-to-br from-emerald-300/20 via-green-200/15 to-teal-100/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[min(70vw,440px)] h-[min(70vw,440px)] bg-gradient-to-tr from-green-200/15 to-emerald-100/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(16,185,129,0.06),transparent)] pointer-events-none"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-white/98 backdrop-blur-xl border-r border-gray-200/80 hidden lg:flex lg:flex-col shadow-lg shadow-gray-200/30">
        <div class="p-4 xl:p-5 border-b border-gray-100 flex-shrink-0">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-md shadow-emerald-500/20 flex-shrink-0">
              <SettingsIcon class="w-4 h-4 text-white" />
            </div>
            <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight tracking-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2.5 text-xs text-white bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 px-2.5 xl:px-3 py-1.5 rounded-lg inline-flex items-center shadow-md shadow-emerald-500/25 font-medium">
            <UserIcon class="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            Staff Portal
          </div>
        </div>

        <nav class="flex-1 p-3 xl:p-4 space-y-1 xl:space-y-2 overflow-y-auto">
          <router-link to="/staff/dashboard" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" :class="{ 'shadow-sm border border-blue-200': $route.path === '/staff/dashboard' }">
            <LayoutDashboardIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Dashboard</span>
          </router-link>
          <router-link to="/staff/inventory" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700" :class="{ 'shadow-sm border border-purple-200': $route.path === '/staff/inventory' }">
            <PackageIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Inventory</span>
          </router-link>
          <router-link to="/staff/house-paint-recommender" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700" :class="{ 'shadow-sm border border-orange-200': $route.path === '/staff/house-paint-recommender' }">
            <HomeIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Paint Recommender</span>
          </router-link>
          <router-link to="/staff/paint-mixing" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700" :class="{ 'shadow-sm border border-pink-200': $route.path === '/staff/paint-mixing' }">
            <PaletteIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Paint Mixing</span>
          </router-link>
          <router-link to="/staff/sales-analytics" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700" :class="{ 'shadow-sm border border-teal-200': $route.path === '/staff/sales-analytics' }">
            <TrendingUpIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Sales Analytics</span>
          </router-link>
          <router-link to="/staff/settings" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-sm xl:text-base text-emerald-700 bg-emerald-100 shadow-sm border-l-4 border-emerald-500" :class="{ 'hover:bg-emerald-50': $route.path !== '/staff/settings' }">
            <SettingsIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="truncate">Settings</span>
          </router-link>
          <div class="h-4"></div>
        </nav>

        <div class="p-3 xl:p-4 border-t border-gray-200 bg-gradient-to-r from-emerald-50/95 to-green-50/95 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-2 xl:gap-3">
            <div class="w-8 xl:w-10 h-8 xl:h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 flex-shrink-0 overflow-hidden">
              <img v-if="userPhotoURL" :src="userPhotoURL" alt="Profile" class="w-full h-full object-cover" />
              <UserIcon v-else class="w-4 xl:w-5 h-4 xl:h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs xl:text-sm font-medium text-gray-900 truncate">{{ profile.fullName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ profile.email || 'staff@example.com' }}</p>
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
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-emerald-500 to-green-600 px-3 py-1.5 rounded-lg inline-flex items-center font-medium">
            <UserIcon class="h-3.5 w-3.5 mr-1.5" />
            Staff Portal
          </div>
        </div>
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link to="/staff/dashboard" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-blue-600 bg-blue-50 hover:bg-blue-100" @click="mobileSidebarOpen = false">
            <LayoutDashboardIcon class="w-6 h-6" />
            <span class="text-base">Dashboard</span>
          </router-link>
          <router-link to="/staff/inventory" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-purple-600 bg-purple-50 hover:bg-purple-100" @click="mobileSidebarOpen = false">
            <PackageIcon class="w-6 h-6" />
            <span class="text-base">Inventory</span>
          </router-link>
          <router-link to="/staff/house-paint-recommender" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-orange-600 bg-orange-50 hover:bg-orange-100" @click="mobileSidebarOpen = false">
            <HomeIcon class="w-6 h-6" />
            <span class="text-base">Paint Recommender</span>
          </router-link>
          <router-link to="/staff/paint-mixing" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-pink-600 bg-pink-50 hover:bg-pink-100" @click="mobileSidebarOpen = false">
            <PaletteIcon class="w-6 h-6" />
            <span class="text-base">Paint Mixing</span>
          </router-link>
          <router-link to="/staff/sales-analytics" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-teal-600 bg-teal-50 hover:bg-teal-100" @click="mobileSidebarOpen = false">
            <TrendingUpIcon class="w-6 h-6" />
            <span class="text-base">Sales Analytics</span>
          </router-link>
          <router-link to="/staff/settings" class="flex items-center space-x-3 p-4 rounded-xl font-medium text-emerald-700 bg-emerald-100 border-l-4 border-emerald-500 shadow-sm" @click="mobileSidebarOpen = false">
            <SettingsIcon class="w-6 h-6" />
            <span class="text-base font-semibold">Settings</span>
          </router-link>
          <div class="h-4"></div>
        </nav>
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-emerald-50 to-green-50 flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden">
              <img v-if="userPhotoURL" :src="userPhotoURL" alt="Profile" class="w-full h-full object-cover" />
              <UserIcon v-else class="w-6 h-6 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ profile.fullName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ profile.email || 'staff@example.com' }}</p>
            </div>
            <button @click="handleLogout" class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0" title="Logout">
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto overflow-x-hidden min-w-0">
        <header class="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-gray-200/90 shadow-sm">
          <div class="h-1 w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-b-full"></div>
          <div class="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="pl-14 sm:pl-16 lg:pl-0 flex items-center gap-3">
                <div class="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 items-center justify-center shadow-lg shadow-emerald-500/20 flex-shrink-0">
                  <SettingsIcon class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
                  <p class="text-sm text-gray-500 mt-0.5">Manage your account and preferences</p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100/90 text-gray-700 text-sm border border-gray-200/60">
                  <CalendarIcon class="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span class="truncate font-medium">{{ currentDate }}</span>
                </div>
                <div class="hidden sm:block h-8 w-px bg-gray-200"></div>
                <div class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 text-gray-800 text-sm border border-emerald-200/60">
                  <span class="font-medium truncate">Welcome, {{ firstName }}</span>
                  <BellIcon class="w-4 h-4 text-emerald-500 cursor-pointer hover:text-emerald-600 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 sm:p-6 lg:p-8 space-y-6">
          <!-- Tabs -->
          <div class="flex gap-1 p-1 rounded-xl bg-gray-100/80 border border-gray-200/60 w-full overflow-x-auto hide-scrollbar min-w-0">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              class="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium whitespace-nowrap transition-all flex items-center gap-2 flex-shrink-0"
              :class="activeTab === tab.id ? 'bg-white text-emerald-600 shadow-sm border border-emerald-200/60' : 'text-gray-600 hover:text-emerald-500'"
            >
              <component :is="tab.icon" class="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{{ tab.name }}</span>
            </button>
          </div>

          <!-- Profile Settings -->
          <div v-if="activeTab === 'profile'" class="max-w-2xl">
            <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100/80 overflow-hidden">
              <div class="h-1.5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
              <div class="p-5 sm:p-6 border-b border-gray-100">
                <h2 class="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <div class="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <UserIcon class="w-5 h-5 text-emerald-600" />
                  </div>
                  Profile Settings
                </h2>
              </div>
              <div class="p-5 sm:p-6 space-y-5">
                <div class="flex flex-col sm:flex-row items-center gap-5">
                  <div class="relative">
                    <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg ring-2 ring-emerald-200/50">
                      <img v-if="userPhotoURL" :src="userPhotoURL" alt="Profile" class="w-full h-full object-cover" />
                      <UserIcon v-else class="w-12 h-12 text-emerald-600" />
                    </div>
                    <input type="file" ref="photoInput" accept="image/*" class="hidden" @change="handlePhotoUpload" />
                  </div>
                  <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <button @click="triggerPhotoInput" class="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm flex items-center gap-2">
                      Change Photo
                    </button>
                    <button v-if="userPhotoURL" @click="removePhoto" class="px-4 py-2.5 bg-white border border-red-200 text-red-600 rounded-xl font-medium hover:bg-red-50 transition-all text-sm">
                      Remove Photo
                    </button>
                  </div>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input type="text" v-model="profile.fullName" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all shadow-sm" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                    <input type="email" v-model="profile.email" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all shadow-sm" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" v-model="profile.phone" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-all shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Account Settings -->
          <div v-if="activeTab === 'account'" class="max-w-2xl">
            <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100/80 overflow-hidden">
              <div class="h-1.5 bg-gradient-to-r from-blue-500/80 via-indigo-500/80 to-violet-500/80"></div>
              <div class="p-5 sm:p-6 border-b border-gray-100">
                <h2 class="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <div class="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                    <ShieldIcon class="w-5 h-5 text-blue-600" />
                  </div>
                  Change Password
                </h2>
              </div>
              <div class="p-5 sm:p-6 space-y-5">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5">Current Password</label>
                  <input type="password" v-model="account.currentPassword" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all shadow-sm" placeholder="Enter current password" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5">New Password</label>
                  <input type="password" v-model="account.newPassword" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all shadow-sm" placeholder="Enter new password" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5">Confirm New Password</label>
                  <input type="password" v-model="account.confirmPassword" class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all shadow-sm" placeholder="Confirm new password" />
                </div>
                <button @click="changePassword" class="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="flex justify-end pt-2">
            <button 
              @click="saveSettings" 
              class="save-button px-5 py-2.5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <SaveIcon class="w-5 h-5" />
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
  Paintbrush as PaintbrushIcon,
  TrendingUp as TrendingUpIcon
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

const triggerPhotoInput = () => {
  if (photoInput.value) photoInput.value.click();
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
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #d1fae5;
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
