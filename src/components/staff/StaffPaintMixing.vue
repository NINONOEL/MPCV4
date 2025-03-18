<template>
    <div class="min-h-screen bg-gradient-to-br from-pale-blue via-light-blue to-medium-blue">
      <div class="flex h-screen">
        <!-- Sidebar -->
        <aside class="w-64 bg-white/90 backdrop-blur-sm border-r border-navy/10 hidden md:block">
          <!-- Logo/Brand -->
          <div class="p-4 border-b border-navy/10">
            <h1 class="text-xl font-bold text-navy">Mindoro Paint Center</h1>
          </div>
    
          <!-- Navigation -->
          <nav class="p-4 space-y-2">
            <router-link 
              v-for="item in navigationItems" 
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-3 px-3 py-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
              :class="{ 'bg-navy/5': $route.path === item.path }"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.name }}</span>
            </router-link>
          </nav>
    
          <!-- User Menu -->
          <div class="absolute bottom-0 w-64 p-4 border-t border-navy/10 bg-white/90 backdrop-blur-sm">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                <UserIcon class="w-5 h-5 text-navy" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-navy truncate">Staff User</p>
                <p class="text-xs text-navy/60 truncate">staff@example.com</p>
              </div>
              <button 
                @click="handleLogout"
                class="p-2 rounded-lg hover:bg-navy/5 text-navy transition-colors"
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
            class="p-2 bg-white/90 backdrop-blur-sm border border-navy/10 rounded-lg shadow-sm"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-navy" />
            <XIcon v-else class="w-6 h-6 text-navy" />
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
          class="fixed left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-sm border-r border-navy/10 z-20 md:hidden"
        >
          <!-- Same content as desktop sidebar -->
          <div class="p-4 border-b border-navy/10">
            <h1 class="text-xl font-bold text-navy">Mindoro Paint Center</h1>
          </div>
    
          <nav class="p-4 space-y-2">
            <router-link 
              v-for="item in navigationItems" 
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-3 px-3 py-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
              :class="{ 'bg-navy/5': $route.path === item.path }"
              @click="mobileSidebarOpen = false"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.name }}</span>
            </router-link>
          </nav>
    
          <div class="absolute bottom-0 w-64 p-4 border-t border-navy/10 bg-white/90 backdrop-blur-sm">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                <UserIcon class="w-5 h-5 text-navy" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-navy truncate">Staff User</p>
                <p class="text-xs text-navy/60 truncate">staff@example.com</p>
              </div>
              <button 
                @click="handleLogout"
                class="p-2 rounded-lg hover:bg-navy/5 text-navy transition-colors"
              >
                <LogOutIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </aside>
    
        <!-- Main Content -->
        <main class="flex-1 overflow-auto">
          <header class="bg-white/90 backdrop-blur-sm border-b border-navy/10 px-4 md:px-8 py-4">
            <div class="flex items-center justify-between">
              <h1 class="text-2xl font-bold text-navy">Paint Mixing</h1>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2 text-navy">
                  <CalendarIcon class="w-5 h-5" />
                  <span>{{ currentDate }}</span>
                </div>
                <div class="h-6 w-px bg-navy/10"></div>
                <div class="flex items-center gap-2">
                  <span class="text-navy">Welcome, Staff</span>
                  <BellIcon class="w-5 h-5 text-navy cursor-pointer hover:text-navy/70" />
                </div>
              </div>
            </div>
          </header>
          <div class="p-4 md:p-6 lg:p-8 space-y-6">
            <!-- Paint Mixing Interface -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Color Mixing Form -->
              <div class="space-y-6">
                <!-- Base Color Selection -->
                <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-4 md:p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Base Color</h2>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Select Base Paint</label>
                      <select 
                        v-model="form.baseColor"
                        class="w-full px-3 py-2 md:py-3 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      >
                        <option value="white">White</option>
                        <option value="cream">Cream</option>
                        <option value="gray">Light Gray</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Quantity (Liters)</label>
                      <input 
                        type="number"
                        v-model="form.baseQuantity"
                        min="0"
                        step="0.1"
                        class="w-full px-3 py-2 md:py-3 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      />
                    </div>
                  </div>
                </div>
    
                <!-- Color Additives -->
                <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-4 md:p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h2 class="text-lg font-semibold text-navy">Color Additives</h2>
                    <button 
                      @click="addColorAdditive"
                      class="p-2 text-navy hover:bg-navy/5 rounded-lg transition-colors"
                    >
                      <PlusIcon class="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div class="space-y-4">
                    <div 
                      v-for="(additive, index) in form.additives" 
                      :key="index"
                      class="flex gap-4 items-start"
                    >
                      <div class="flex-1 space-y-4">
                        <div>
                          <label class="block text-sm font-medium text-navy mb-1">Color</label>
                          <select 
                            v-model="additive.color"
                            class="w-full px-3 py-2 md:py-3 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                          >
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                            <option value="black">Black</option>
                          </select>
                        </div>
                        <div>
                          <label class="block text-sm font-medium text-navy mb-1">Amount (ml)</label>
                          <input 
                            type="number"
                            v-model="additive.amount"
                            min="0"
                            step="1"
                            class="w-full px-3 py-2 md:py-3 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                          />
                        </div>
                      </div>
                      <button 
                        @click="removeColorAdditive(index)"
                        class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-8"
                      >
                        <TrashIcon class="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
    
                <!-- Mix Button -->
                <button 
                  @click="mixPaint"
                  class="w-full bg-navy text-white py-3 rounded-lg hover:bg-navy/90 transition-colors"
                  :disabled="loading"
                >
                  <span v-if="loading" class="flex items-center justify-center gap-2">
                    <LoaderIcon class="w-5 h-5 animate-spin" />
                    Mixing Paint...
                  </span>
                  <span v-else>Mix Paint</span>
                </button>
              </div>
    
              <!-- Preview and Results -->
              <div class="space-y-6">
                <!-- Color Preview -->
                <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-4 md:p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Color Preview</h2>
                  <div 
                    class="w-full aspect-square rounded-lg border border-navy/10"
                    :style="{ backgroundColor: mixedColor }"
                  ></div>
                </div>
    
                <!-- Formula Details -->
                <div v-if="showResults" class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-4 md:p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Formula Details</h2>
                  <div class="space-y-4">
                    <div class="p-4 bg-navy/5 rounded-lg">
                      <h3 class="font-medium text-navy mb-2">Base</h3>
                      <p class="text-navy/60">{{ form.baseColor }} - {{ form.baseQuantity }}L</p>
                    </div>
                    <div v-if="form.additives.length > 0">
                      <h3 class="font-medium text-navy mb-2">Additives</h3>
                      <ul class="space-y-2">
                        <li 
                          v-for="(additive, index) in form.additives" 
                          :key="index"
                          class="flex justify-between items-center p-2 rounded-lg hover:bg-navy/5"
                        >
                          <span class="text-navy/60">{{ additive.color }}</span>
                          <span class="text-navy font-medium">{{ additive.amount }}ml</span>
                        </li>
                      </ul>
                    </div>
                    <div class="border-t border-navy/10 pt-4">
                      <div class="flex justify-between items-center">
                        <span class="text-navy/60">Total Volume</span>
                        <span class="text-navy font-medium">{{ totalVolume }}L</span>
                      </div>
                    </div>
                  </div>
                </div>
    
                <!-- Save Formula -->
                <div v-if="showResults" class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-4 md:p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Save Formula</h2>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Formula Name</label>
                      <input 
                        type="text"
                        v-model="formulaName"
                        class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                        placeholder="Enter a name for this formula"
                      />
                    </div>
                    <button 
                      @click="saveFormula"
                      class="w-full bg-navy/10 text-navy py-2 rounded-lg hover:bg-navy/20 transition-colors"
                    >
                      Save Formula
                    </button>
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
    import { useRouter } from 'vue-router'
    import {
      LayoutDashboard,
      Package,
      Palette as PaletteIcon,
      Home,
      Settings,
      User as UserIcon,
      LogOut as LogOutIcon,
      Menu as MenuIcon,
      X as XIcon,
      Plus as PlusIcon,
      Trash as TrashIcon,
      Loader as LoaderIcon,
      Calendar as CalendarIcon,
      Bell as BellIcon,
    } from 'lucide-vue-next'
    
    const router = useRouter()
    const loading = ref(false)
    const mobileSidebarOpen = ref(false)
    const showResults = ref(false)
    const formulaName = ref('')
    
    // Navigation items for staff
    const navigationItems = [
  { name: 'Dashboard', path: '/staff/dashboard', icon: LayoutDashboard },
  { name: 'Inventory', path: '/staff/inventory', icon: Package },
  { name: 'Paint Mixing', path: '/staff/paint-mixing', icon: PaletteIcon },
  { name: 'House Paint Recommender', path: '/staff/house-paint-recommender', icon: Home },
  { name: 'Settings', path: '/staff/settings', icon: Settings }
]
    
    const currentDate = new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
    
    // Form state
    const form = ref({
      baseColor: 'white',
      baseQuantity: 1,
      additives: []
    })
    
    // Methods
    const addColorAdditive = () => {
      form.value.additives.push({
        color: 'red',
        amount: 0
      })
    }
    
    const removeColorAdditive = (index) => {
      form.value.additives.splice(index, 1)
    }
    
    const mixPaint = async () => {
      try {
        loading.value = true
        await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate mixing process
        showResults.value = true
      } catch (error) {
        console.error('Error mixing paint:', error)
      } finally {
        loading.value = false
      }
    }
    
    const saveFormula = async () => {
      try {
        if (!formulaName.value) {
          alert('Please enter a name for the formula')
          return
        }
        
        // Here you would typically save to your backend
        console.log('Saving formula:', {
          name: formulaName.value,
          formula: form.value
        })
        
        alert('Formula saved successfully!')
        formulaName.value = ''
      } catch (error) {
        console.error('Error saving formula:', error)
        alert('Error saving formula')
      }
    }
    
    // Computed properties
    const totalVolume = computed(() => {
      const additiveVolume = form.value.additives.reduce((sum, additive) => {
        return sum + (additive.amount / 1000) // Convert ml to L
      }, 0)
      return (Number(form.value.baseQuantity) + additiveVolume).toFixed(2)
    })
    
    const mixedColor = computed(() => {
      // This is a simplified color mixing simulation
      // In a real application, you would need a more sophisticated color mixing algorithm
      if (form.value.additives.length === 0) {
        return '#FFFFFF'
      }
    
      // Simple example color mapping
      const colors = {
        white: [255, 255, 255],
        cream: [255, 253, 208],
        gray: [211, 211, 211],
        red: [255, 0, 0],
        blue: [0, 0, 255],
        yellow: [255, 255, 0],
        black: [0, 0, 0]
      }
    
      let r = colors[form.value.baseColor][0]
      let g = colors[form.value.baseColor][1]
      let b = colors[form.value.baseColor][2]
    
      form.value.additives.forEach(additive => {
        const weight = additive.amount / (form.value.baseQuantity * 1000)
        r = Math.round(r * (1 - weight) + colors[additive.color][0] * weight)
        g = Math.round(g * (1 - weight) + colors[additive.color][1] * weight)
        b = Math.round(b * (1 - weight) + colors[additive.color][2] * weight)
      })
    
      return `rgb(${r}, ${g}, ${b})`
    })
    
    const toggleMobileSidebar = () => {
      mobileSidebarOpen.value = !mobileSidebarOpen.value
    }
    
    const handleLogout = () => {
      router.push('/staff')
    }
    </script>
    
    <style scoped>
    :root {
      --navy: #1e3a8a;
    }
    </style>
    
    