<template>
  <div class="h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans overflow-hidden">
    <!-- Simplified background -->
    <div class="absolute inset-0 opacity-20 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50"></div>

    <div class="flex h-full relative z-10">
      <button 
        @click="showMobileMenu = !showMobileMenu"
        class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border"
      >
        <Menu v-if="!showMobileMenu" class="h-6 w-6 text-slate-700" />
        <X v-else class="h-6 w-6 text-slate-700" />
      </button>

      <div 
        v-if="showMobileMenu" 
        class="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        @click="showMobileMenu = false"
      ></div>

      <aside 
        class="fixed lg:relative inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:flex lg:flex-shrink-0"
        :class="showMobileMenu ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
      >
        <div class="flex w-64 flex-col">
          <div class="flex flex-grow flex-col overflow-y-auto bg-white/80 backdrop-blur-xl border-r border-slate-200/60 shadow-xl">
            <div class="flex flex-shrink-0 items-center px-4 py-6 space-x-4 group cursor-pointer" @click="() => router.push({ name: 'CustomerPortalDashboard' })">
              <div class="relative">
                <div class="w-12 h-12 bg-gradient-to-br from-red-500 via-red-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Paintbrush2 class="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h1 class="text-lg font-black text-slate-900 leading-none tracking-tight">BARCELONA</h1>
                <p class="text-xs text-slate-600 font-semibold leading-none mt-1">PAINT CENTER</p>
              </div>
            </div>

            <div class="mt-6 flex flex-grow flex-col px-3">
              <nav class="flex-1 space-y-2">
                 <router-link v-for="item in navigation" :key="item.name" :to="item.to" v-slot="{ isActive, isExactActive }" @click="showMobileMenu = false">
                    <div :class="['flex items-center p-3 rounded-lg group', (item.name === 'Dashboard' ? isExactActive : isActive) ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg' : 'bg-white/60 hover:bg-slate-100 text-slate-700']">
                      <component :is="item.icon" :class="['h-5 w-5 mr-3 flex-shrink-0', (item.name === 'Dashboard' ? isExactActive : isActive) ? 'text-white' : 'text-red-600']"/>
                      <span class="font-semibold text-sm">{{ item.name }}</span>
                    </div>
                  </router-link>
              </nav>
            </div>

            <div class="flex-shrink-0 border-t p-3">
              <div class="flex w-full items-center rounded-xl p-2 mb-2 bg-white/60 border shadow-sm group">
                <div class="relative">
                  <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white font-bold">{{ userInitials }}</div>
                </div>
                <div class="ml-3 flex-1">
                  <p class="text-sm font-semibold text-slate-800">{{ customerName }}</p>
                  <p class="text-xs text-slate-500">{{ userStatus }}</p>
                </div>
                <div class="flex items-center space-x-1">
                </div>
              </div>
              <button @click="handleLogout" class="flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-700 group border">
                <LogOut class="mr-2 h-5 w-5 text-slate-500 group-hover:text-red-600" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      <main class="flex-1 relative overflow-y-auto">
        <div class="p-4 lg:p-6">
          <div class="relative bg-gradient-to-br from-red-500 via-red-600 to-orange-500 rounded-2xl p-6 mb-6 text-white shadow-xl overflow-hidden group">
            <div class="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full opacity-50"></div>
            <div class="absolute -bottom-12 -left-6 w-48 h-48 bg-white/10 rounded-full opacity-30"></div>
            <div class="relative z-10">
              <h2 class="text-2xl lg:text-3xl font-bold mb-1">
                Welcome back, {{ customerName }}! 
                <span class="inline-block ml-2">👋</span>
              </h2>
              <p class="text-red-100 text-base">Ready to bring your color ideas to life?</p>
              <div class="flex flex-wrap gap-2 mt-4">
                <button @click="router.push({ name: 'CustomerPortalMixing' })" class="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium backdrop-blur-sm">
                  Mix Paint
                </button>
                <button @click="router.push({ name: 'CustomerPortalRecommender' })" class="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium backdrop-blur-sm">
                  Get Recommendations
                </button>
              </div>
            </div>
          </div>
          <router-view />
        </div>
      </main>
    </div>

    <!-- Sign Out Confirmation Modal -->
    <div v-if="showSignOutConfirmModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click="showSignOutConfirmModal = false">
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm m-4 border" @click.stop>
        <div class="p-5 border-b flex justify-between items-center">
          <h3 class="text-lg font-bold text-slate-800">Confirm Sign Out</h3>
          <button @click="showSignOutConfirmModal = false" class="p-2 rounded-full hover:bg-slate-100">
            <X class="h-5 w-5 text-slate-500"/>
          </button>
        </div>
        
        <div class="p-6 text-center">
          <LogOut class="h-12 w-12 text-slate-500 mx-auto mb-4"/> 
          <p class="text-slate-700 text-lg font-medium mb-6">Are you sure you want to sign out?</p> 
          <div class="flex justify-center space-x-3"> 
            <button @click="showSignOutConfirmModal = false" class="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg text-sm font-semibold hover:bg-slate-300">
              Cancel
            </button>
            <button @click="confirmLogout" class="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" :class="['fixed bottom-6 right-6 z-50 p-4 rounded-lg shadow-lg flex items-center space-x-3', toastType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white']">
      <CheckCircle v-if="toastType === 'success'" class="h-5 w-5" />
      <XCircle v-else class="h-5 w-5" />
      <p class="font-medium">{{ toastMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/config/firebase.js';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { 
  Paintbrush2, 
  LayoutDashboard, 
  Palette, 
  Home, 
  LogOut, 
  X, 
  Menu,
  CheckCircle,
  XCircle,
  Package
} from 'lucide-vue-next';

const router = useRouter();

// --- STATE MANAGEMENT ---
const customerName = ref('Guest');
const userStatus = ref('Customer');
const userInitials = computed(() => customerName.value.charAt(0).toUpperCase());
const showMobileMenu = ref(false);
const showSignOutConfirmModal = ref(false);

// Toast Notification State
const showToast = ref(false);
const toastMessage = ref('');
const toastType = ref('success'); 

// --- UTILITY FUNCTIONS ---
const showToastNotification = (message, type = 'success') => {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
    toastMessage.value = '';
  }, 3000);
};

// --- NAVIGATION & AUTHENTICATION ---
const handleLogout = () => {
  showSignOutConfirmModal.value = true; 
};

const confirmLogout = async () => {
  try {
    signOut(auth);
    showSignOutConfirmModal.value = false;
    showToastNotification('You have successfully signed out!', 'success');
    
    setTimeout(() => {
      router.push('/'); 
    }, 2000);
    
  } catch (error) {
    console.error("Error signing out:", error);
    showSignOutConfirmModal.value = false; 
    showToastNotification('Failed to sign out. Please try again.', 'error'); 
  }
};

// --- LIFECYCLE HOOKS ---
const navigation = [
  { name: 'Dashboard', to: { name: 'CustomerPortalDashboard' }, icon: LayoutDashboard },
  { name: 'Products', to: { name: 'CustomerPortalProducts' }, icon: Package },
  { name: 'Paint Mixer', to: { name: 'CustomerPortalMixing' }, icon: Palette },
  { name: 'House Color Recommender', to: { name: 'CustomerPortalRecommender' }, icon: Home },
];

const unsubscribe = ref(null);

onMounted(() => {
  unsubscribe.value = onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      customerName.value = userAuth.displayName || 'Valued Customer';
      userStatus.value = 'Customer';
    } else { 
      customerName.value = 'Guest';
      userStatus.value = 'Logged Out';
    }
  });
});

onUnmounted(() => {
  if (unsubscribe.value) {
    unsubscribe.value();
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');

.font-sans { 
  font-family: 'Inter', sans-serif; 
}

.backdrop-blur-xl { 
  backdrop-filter: blur(24px); 
  -webkit-backdrop-filter: blur(24px); 
}
</style>
