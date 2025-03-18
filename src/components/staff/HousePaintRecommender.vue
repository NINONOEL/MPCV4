<template>
  <div class="min-h-screen bg-gradient-to-br from-pale-blue via-light-blue to-medium-blue">
    <div class="flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-white/90 backdrop-blur-sm border-r border-navy/10 hidden md:block">
        <!-- Logo/Brand -->
        <div class="p-4">
          <h1 class="text-xl font-bold text-navy">Mindoro Paint Center</h1>
        </div>

        <!-- Navigation -->
        <nav class="mt-4">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 px-6 py-3 text-navy hover:bg-navy/5 transition-colors"
            :class="{ 'bg-navy/5': $route.path === item.path }"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </router-link>
        </nav>

        <!-- User Menu -->
        <div class="absolute bottom-0 w-64 p-4 border-t border-navy/10 bg-white/90">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <User class="w-5 h-5 text-navy/60" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-navy">Staff User</p>
              <p class="text-xs text-navy/60">staff@example.com</p>
            </div>
            <button class="p-2">
              <LogOut class="w-5 h-5 text-navy/60" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Header -->
        <header class="bg-white border-b border-navy/10 px-8 py-4">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-2xl font-bold text-navy">House Paint Recommender</h1>
              <p class="text-navy/60">Professional paint recommendations for any space</p>
            </div>
            <div class="flex items-center gap-6">
              <div class="flex items-center gap-2">
                <Calendar class="w-5 h-5 text-navy/60" />
                <span class="text-navy">{{ currentDate }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-navy">Welcome, Staff</span>
                <Bell class="w-5 h-5 text-navy/60" />
              </div>
            </div>
          </div>
        </header>

        <div class="p-8 space-y-6">
          <!-- Progress Steps -->
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <div class="flex justify-between max-w-4xl mx-auto">
              <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center relative">
                <div :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center font-medium relative z-10',
                  currentStep === index ? 'bg-navy text-white' : 'bg-gray-100 text-navy/60'
                ]">
                  {{ index + 1 }}
                </div>
                <span class="mt-2 text-sm" :class="currentStep === index ? 'text-navy font-medium' : 'text-navy/60'">
                  {{ step.title }}
                </span>
                <span class="text-xs text-navy/40">{{ step.subtitle }}</span>
                <div v-if="index < steps.length - 1" class="absolute top-5 left-12 w-[calc(200%-24px)] h-[2px]"
                     :class="currentStep > index ? 'bg-navy' : 'bg-gray-200'"></div>
              </div>
            </div>
          </div>

          <!-- Content Grid -->
          <div class="grid grid-cols-5 gap-6">
            <!-- Left Column - Form -->
            <div class="col-span-2">
              <div class="bg-white rounded-xl shadow-sm">
                <div class="p-6 border-b border-gray-100">
                  <h2 class="text-lg font-semibold text-navy">Room Details</h2>
                </div>
                <div class="p-6 space-y-6">
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Room Type</label>
                      <select v-model="form.roomType" 
                              class="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-navy">
                        <option value="">Select room type</option>
                        <option v-for="type in roomTypes" :key="type.value" :value="type.value">
                          {{ type.label }}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Room Purpose</label>
                      <select v-model="form.roomPurpose"
                              class="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-navy">
                        <option value="">Select purpose</option>
                        <option v-for="purpose in roomPurposes" :key="purpose.value" :value="purpose.value">
                          {{ purpose.label }}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Room Dimensions</label>
                      <div class="grid grid-cols-2 gap-4">
                        <div>
                          <div class="flex">
                            <input type="number" v-model="form.length" placeholder="Length"
                                   class="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-l-lg text-navy" />
                            <span class="px-3 py-2.5 bg-gray-50 border border-l-0 border-gray-200 rounded-r-lg text-navy/60">
                              m
                            </span>
                          </div>
                        </div>
                        <div>
                          <div class="flex">
                            <input type="number" v-model="form.width" placeholder="Width"
                                   class="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-l-lg text-navy" />
                            <span class="px-3 py-2.5 bg-gray-50 border border-l-0 border-gray-200 rounded-r-lg text-navy/60">
                              m
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Ceiling Height</label>
                      <div class="flex">
                        <input type="number" v-model="form.height" value="2.4"
                               class="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-l-lg text-navy" />
                        <span class="px-3 py-2.5 bg-gray-50 border border-l-0 border-gray-200 rounded-r-lg text-navy/60">
                          m
                        </span>
                      </div>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Natural Light Level</label>
                      <div class="flex items-center gap-4">
                        <input type="range" v-model="form.lightLevel" min="1" max="5" 
                               class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none" />
                        <span class="text-sm text-navy/60">{{ lightLevelText }}</span>
                      </div>
                    </div>
                  </div>

                  <button @click="nextStep"
                          class="w-full py-2.5 bg-navy text-white rounded-lg font-medium hover:bg-navy/90 transition-colors">
                    Continue to Wall Assessment
                  </button>
                </div>
              </div>
            </div>

            <!-- Right Column - Preview -->
            <div class="col-span-3">
              <div class="bg-white rounded-xl shadow-sm">
                <div class="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h2 class="text-lg font-semibold text-navy">Room Preview</h2>
                  <div class="flex gap-2">
                    <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <RefreshCw class="w-5 h-5 text-navy/60" />
                    </button>
                    <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Maximize2 class="w-5 h-5 text-navy/60" />
                    </button>
                  </div>
                </div>
                <div class="p-6">
                  <div class="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Home class="w-8 h-8 text-navy/40" />
                      </div>
                      <h3 class="text-navy font-medium mb-2">Room Preview</h3>
                      <p class="text-navy/60 max-w-md">
                        Complete all the required information to see a preview of your room with the recommended paint colors.
                      </p>
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
import { ref, computed } from 'vue'
import {
  LayoutDashboard,
  Package,
  Palette,
  Home,
  Settings,
  User,
  LogOut,
  Calendar,
  Bell,
  RefreshCw,
  Maximize2
} from 'lucide-vue-next'

const currentStep = ref(0)

const steps = [
  { title: 'Room Details', subtitle: '' },
  { title: 'Wall', subtitle: 'Assessment' },
  { title: 'Paint', subtitle: 'Preferences' },
  { title: 'Recommendations', subtitle: '' }
]

const navigationItems = [
  { name: 'Dashboard', path: '/staff/dashboard', icon: LayoutDashboard },
  { name: 'Inventory', path: '/staff/inventory', icon: Package },
  { name: 'Paint Mixing', path: '/staff/paint-mixing', icon: Palette },
  { name: 'House Paint Recommender', path: '/staff/house-paint-recommender', icon: Home },
  { name: 'Settings', path: '/staff/settings', icon: Settings }
]

const roomTypes = [
  { value: 'living', label: 'Living Room' },
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'kitchen', label: 'Kitchen' },
  { value: 'bathroom', label: 'Bathroom' },
  { value: 'dining', label: 'Dining Room' },
  { value: 'office', label: 'Home Office' }
]

const roomPurposes = [
  { value: 'relaxation', label: 'Relaxation' },
  { value: 'work', label: 'Work/Productivity' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'cooking', label: 'Cooking' },
  { value: 'sleeping', label: 'Sleeping' }
]

const form = ref({
  roomType: '',
  roomPurpose: '',
  length: '',
  width: '',
  height: '2.4',
  lightLevel: 3
})

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
})

const lightLevelText = computed(() => {
  switch (form.value.lightLevel) {
    case 1: return 'Very Low'
    case 2: return 'Low'
    case 3: return 'Medium'
    case 4: return 'High'
    case 5: return 'Very High'
    default: return 'Medium'
  }
})

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}
</script>

<style>
:root {
  --pale-blue: #f0f7ff;
  --light-blue: #e6f0ff;
  --medium-blue: #dce7ff;
  --navy: #1e3a8a;
}

/* Custom range input styling */
input[type="range"] {
  -webkit-appearance: none;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: var(--navy);
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: var(--navy);
  border-radius: 50%;
  cursor: pointer;
  border: none;
}
</style>

