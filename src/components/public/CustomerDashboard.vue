<template>
  <div>
    <!-- Section 1: Quick Start & Guide -->
    <div class="mb-8 p-6 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-2xl">
        <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-md">
                <Sparkles :size="24" />
            </div>
            <div>
                <h3 class="font-bold text-slate-800">New to our tools?</h3>
                <p class="text-sm text-slate-600">Here's a quick guide to get you started on your project.</p>
            </div>
        </div>
    </div>

    <!-- Section 2: Main Tools -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <!-- Interactive Tool Cards -->
      <div v-for="tool in sortedTools" :key="tool.name" class="group relative">
        <button @click.prevent="togglePin(tool)" class="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/50 hover:bg-white transition-all text-slate-500 hover:text-amber-500" aria-label="Pin tool">
            <Star :size="18" :class="['transition-all', isPinned(tool) ? 'fill-amber-400 text-amber-500' : '']"/>
        </button>

        <router-link :to="tool.to" class="block p-6 h-full bg-white/60 backdrop-blur-lg border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div class="flex flex-col h-full">
            <div class="flex items-start justify-between">
              <div :class="['p-3 rounded-xl transition-colors duration-300', tool.iconBg]">
                <component :is="tool.icon" :class="['h-7 w-7 transition-transform duration-300 group-hover:scale-110', tool.iconColor]" />
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-lg font-bold text-slate-800">{{ tool.name }}</h3>
              <p class="text-slate-600 mt-1 text-sm">{{ tool.description }}</p>
            </div>
            <div class="mt-auto pt-4">
                <!-- Dito na ipinapakita ang accurate na timestamp -->
                <p class="text-xs text-slate-500 mb-1">Last used: {{ tool.lastUsed }}</p>
                <div class="w-full bg-slate-200 rounded-full h-1.5">
                    <div :class="['h-1.5 rounded-full', tool.progressBg]" :style="{ width: tool.progress + '%' }"></div>
                </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Palette, Home, Star, Sparkles } from 'lucide-vue-next';

// --- DYNAMIC DATA & LOGIC --- //

const pinnedTools = ref([]);

const tools = ref([
  { 
    id: 'paint-mixer',
    name: 'Real-Time Paint Mixer', 
    description: 'Create your perfect shade with our intuitive color mixer.',
    to: { name: 'CustomerPortalMixing' }, 
    icon: Palette,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    lastUsed: 'Never',
    progress: 75,
    progressBg: 'bg-gradient-to-r from-red-500 to-orange-500'
  },
  { 
    id: 'color-recommender',
    name: 'House Color Recommender', 
    description: 'Get AI-powered recommendations for your home\'s aesthetic.',
    to: { name: 'CustomerPortalRecommender' }, 
    icon: Home,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    lastUsed: 'Never',
    progress: 40,
    progressBg: 'bg-gradient-to-r from-sky-500 to-indigo-500'
  },
]);

// --- BAGONG FUNCTION: Nagko-convert ng timestamp to "time ago" format --- //
const formatTimeAgo = (timestamp) => {
  if (!timestamp) return 'Never';

  const now = Date.now();
  const seconds = Math.floor((now - parseInt(timestamp, 10)) / 1000);

  if (seconds < 10) return `just now`;
  if (seconds < 60) return `${seconds} seconds ago`;
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;

  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? 's' : ''} ago`;
};

const updateTimestamps = () => {
  if (document.hidden) return; // Don't update if tab is not visible
  tools.value.forEach(tool => {
    const savedTimestamp = localStorage.getItem(`lastUsed_${tool.id}`);
    tool.lastUsed = formatTimeAgo(savedTimestamp);
  });
};

onMounted(() => {
  updateTimestamps();
  // Update timestamps when tab becomes visible again
  document.addEventListener('visibilitychange', updateTimestamps);
  // Also update every 10 seconds for real-time feel
  const interval = setInterval(updateTimestamps, 10000);
  onUnmounted(() => clearInterval(interval));
});

onUnmounted(() => {
  document.removeEventListener('visibilitychange', updateTimestamps);
});


const isPinned = (tool) => pinnedTools.value.includes(tool.name);

const togglePin = (tool) => {
  const index = pinnedTools.value.indexOf(tool.name);
  if (index > -1) {
    pinnedTools.value.splice(index, 1);
  } else {
    pinnedTools.value.push(tool.name);
  }
};

const sortedTools = computed(() => {
  return [...tools.value].sort((a, b) => {
    const aIsPinned = isPinned(a);
    const bIsPinned = isPinned(b);
    return bIsPinned - aIsPinned;
  });
});
</script>
