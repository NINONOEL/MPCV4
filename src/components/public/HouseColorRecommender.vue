<template>
  <!-- Added navigation header with back button matching Products.vue and PaintMixing.vue style -->
  <div class="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-20">
    <div class="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3">
      <button
        @click="$router.push({ name: 'CustomerPortal' })"
        class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg transition-colors duration-200"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back to Portal</span>
      </button>
    </div>
  </div>

  <!-- Changed blue gradient background to white -->
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <div class="text-center mb-4 md:mb-6 px-4 pt-4 md:pt-6">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 md:mb-2">House Color Recommender</h1>
      <p class="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Choose your dream house design and customize every exterior part with your favorite colors. 
        Click on different sections to paint them individually.
      </p>
    </div>

    <!-- Selected House Customization Area - now always shown -->
    <div class="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 md:py-4">
      <div class="bg-white rounded-lg shadow-md p-3 md:p-6">
        <!-- Improved mobile header layout -->
        <div class="flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center mb-4">
          <h2 class="text-lg md:text-xl font-semibold text-gray-800">
            Customize: Colonial Classic
          </h2>
          <div class="flex flex-wrap gap-2">
            <button 
              @click="resetColors"
              class="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 text-xs md:text-sm font-medium"
            >
              Reset Colors
            </button>
            <button 
              @click="saveCurrentScheme"
              class="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-xs md:text-sm font-medium"
            >
              Save Scheme
            </button>
          </div>
        </div>

        <!-- Enhanced responsive layout with better mobile stacking -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <!-- House Preview Area -->
          <div class="lg:col-span-2">
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 md:p-4 shadow-inner">
              <!-- Improved mobile instructions -->
              <div class="text-center mb-3">
                <p class="text-xs md:text-sm text-gray-600 mb-2">{{ isMobile ? 'Tap' : 'Click' }} on different parts of the house to color them</p>
                <div v-if="selectedPart" class="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-ping"></div>
                  Selected: {{ formatPartName(selectedPart) }}
                </div>
              </div>
              
              <!-- Enhanced SVG container with better mobile scaling -->
              <div class="flex justify-center">
                <div class="w-full max-w-xl">
                  <!-- House: Colonial Classic - Enhanced beautiful design -->
                  <svg 
                    viewBox="0 0 600 400" 
                    class="w-full h-auto border-2 border-gray-300 rounded-lg bg-white shadow-md"
                    style="max-height: 50vh;"
                  >
                    <!-- Sky background with gradient -->
                    <defs>
                      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#e6f3ff;stop-opacity:1" />
                      </linearGradient>
                      <!-- Changed roof gradient from brown to blue -->
                      <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#4682B4;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2F4F4F;stop-opacity:1" />
                      </linearGradient>
                    </defs>
                    
                    <!-- Added pointer-events: none to sky so clicks pass through to roof -->
                    <rect 
                      width="600" height="200" 
                      fill="url(#skyGradient)"
                      style="pointer-events: none"
                    />
                    
                    <!-- Added click handler to ground to deselect parts -->
                    <rect 
                      y="300" width="600" height="100" 
                      fill="#90EE90"
                      @click="selectedPart = null"
                      class="cursor-pointer"
                    />
                    
                    <!-- Simplified main structure without excessive trim details -->
                    <!-- Main hip roof - centered and simplified -->
                    <polygon 
                      points="150,120 300,40 450,120" 
                      :fill="houseParts.roof" 
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'roof' ? '4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Left dormer roof -->
                    <polygon 
                      points="210,120 240,90 270,120" 
                      :fill="houseParts.roof" 
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'roof' ? '4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Right dormer roof -->
                    <polygon 
                      points="330,120 360,90 390,120" 
                      :fill="houseParts.roof" 
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'roof' ? '4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Second floor - properly aligned -->
                    <rect 
                      x="150" y="120" width="300" height="70" 
                      :fill="houseParts.mainWalls" 
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'mainWalls' ? '4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- First floor - properly aligned -->
                    <rect 
                      x="120" y="190" width="360" height="110" 
                      :fill="houseParts.mainWalls" 
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'mainWalls' ? '4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Left dormer wall -->
                    <rect 
                      x="210" y="120" width="60" height="70" 
                      :fill="houseParts.mainWalls" 
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'mainWalls' ? '4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Right dormer wall -->
                    <rect 
                      x="330" y="120" width="60" height="70" 
                      :fill="houseParts.mainWalls" 
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'mainWalls' ? '4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Left dormer window -->
                    <rect 
                      x="225" y="135" width="30" height="30" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '3' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Right dormer window -->
                    <rect 
                      x="345" y="135" width="30" height="30" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '3' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- First floor left window -->
                    <rect 
                      x="150" y="220" width="50" height="60" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- First floor right window -->
                    <rect 
                      x="400" y="220" width="50" height="60" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Main entrance door -->
                    <rect 
                      x="270" y="240" width="60" height="80" 
                      :fill="houseParts.door" 
                      :stroke="selectedPart === 'door' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'door' ? '4' : '2'"
                      @click="selectPart('door')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Foundation/Base -->
                    <rect 
                      x="120" y="300" width="360" height="30" 
                      :fill="houseParts.foundation" 
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'foundation' ? '4' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Enhanced Color Palette Area with better mobile layout -->
          <div class="lg:col-span-1">
            <div class="sticky top-20">
              <h3 class="text-base md:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <div class="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
                Color Palette
              </h3>
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 md:p-4 shadow-inner">
                <!-- Dynamic instruction text -->
                <p class="text-xs text-gray-600 mb-3 text-center">
                  {{ selectedPart ? `Choose a color for the ${formatPartName(selectedPart)}:` : 'Select a house part first' }}
                </p>
                
                <!-- Enhanced color scheme presets with better mobile layout -->
                <div class="mb-4">
                  <h4 class="text-xs font-medium text-gray-700 mb-2 flex items-center">
                    <svg class="w-3 h-3 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2-2H4a2 2 0 01-2-2v-4z"/>
                    </svg>
                    Popular Schemes
                  </h4>
                  <div class="space-y-1">
                    <button 
                      v-for="preset in colorPresets" 
                      :key="preset.name"
                      @click="applyPreset(preset)"
                      class="w-full text-left p-2 bg-white rounded-lg border-2 border-transparent hover:border-indigo-300 hover:shadow-sm transition-all duration-300 text-xs group"
                    >
                      <div class="flex items-center gap-2">
                        <div class="flex gap-1">
                          <div 
                            v-for="color in preset.preview" 
                            :key="color"
                            class="w-3 h-3 rounded-full border border-white shadow-sm"
                            :style="{ backgroundColor: color }"
                          />
                        </div>
                        <span class="font-medium text-gray-700 text-xs">{{ preset.name }}</span>
                      </div>
                    </button>
                  </div>
                </div>
                
                <!-- Enhanced color selection grid with better mobile touch targets -->
                <div class="mb-4">
                  <h4 class="text-xs font-medium text-gray-700 mb-2 flex items-center">
                    <svg class="w-3 h-3 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4z" clip-rule="evenodd"/>
                    </svg>
                    Color Palette
                  </h4>
                  <div class="grid grid-cols-5 md:grid-cols-6 gap-1.5">
                    <div 
                      v-for="color in colorPalette" 
                      :key="color.name"
                      @click="applyColor(color.value)"
                      :class="[ 
                        'aspect-square rounded-lg border-2 cursor-pointer transition-all duration-300 relative group',
                        selectedPart ? 'hover:scale-105 hover:border-gray-400 hover:shadow-md' : 'opacity-50 cursor-not-allowed',
                        houseParts[selectedPart] === color.value && selectedPart ? 'ring-2 ring-blue-500 ring-offset-1 scale-105' : '',
                      ]"
                      :style="{ backgroundColor: color.value, borderColor: color.value === '#ffffff' ? '#e5e7eb' : 'transparent' }"
                      :title="color.name"
                    >
                      <!-- Enhanced checkmark with animation -->
                      <div 
                        v-if="houseParts[selectedPart] === color.value && selectedPart"
                        class="absolute inset-0 flex items-center justify-center"
                      >
                        <svg class="w-3 h-3 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Enhanced saved schemes section with better mobile layout -->
                <div v-if="savedSchemes.length > 0" class="mb-4">
                  <h4 class="text-xs font-medium text-gray-700 mb-2 flex items-center">
                    <svg class="w-3 h-3 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                    </svg>
                    Saved Schemes
                  </h4>
                  <div class="space-y-1 max-h-32 overflow-y-auto custom-scrollbar">
                    <div 
                      v-for="(scheme, index) in savedSchemes" 
                      :key="index"
                      class="flex items-center justify-between p-2 bg-white rounded-lg border hover:shadow-sm transition-all duration-200 group"
                    >
                      <button 
                        @click="loadScheme(scheme)"
                        class="flex-1 text-left hover:text-indigo-600 transition-colors text-xs font-medium"
                      >
                        {{ scheme.name }}
                      </button>
                      <button 
                        @click="deleteScheme(index)"
                        class="text-red-400 hover:text-red-600 ml-2 p-1 rounded hover:bg-red-50 transition-all duration-200"
                        title="Delete scheme"
                      >
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Updated house parts legend to remove garage-related parts -->
                <div class="mt-4">
                  <h4 class="text-xs font-medium text-gray-700 mb-2 flex items-center">
                    <svg class="w-3 h-3 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    House Parts
                  </h4>
                  <div class="grid grid-cols-1 gap-0.5 text-xs text-gray-600">
                    <div class="flex items-center py-0.5">
                      <div class="w-2 h-2 bg-gray-300 rounded mr-2"></div>
                      Main Walls
                    </div>
                    <div class="flex items-center py-0.5">
                      <div class="w-2 h-2 bg-red-600 rounded mr-2"></div>
                      Roof
                    </div>
                    <div class="flex items-center py-0.5">
                      <div class="w-2 h-2 bg-blue-300 rounded mr-2"></div>
                      Windows
                    </div>
                    <div class="flex items-center py-0.5">
                      <div class="w-2 h-2 bg-yellow-600 rounded mr-2"></div>
                      Door
                    </div>
                    <div class="flex items-center py-0.5">
                      <div class="w-2 h-2 bg-white border border-gray-300 rounded mr-2"></div>
                      Trim/Accents
                    </div>
                    <div class="flex items-center py-0.5">
                      <div class="w-2 h-2 bg-stone-500 rounded mr-2"></div>
                      Foundation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const selectedPart = ref(null)
const savedSchemes = ref([])
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const formatPartName = (partName) => {
  return partName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}

const defaultColors = {
  mainWalls: '#f5f5f5',
  roof: '#8B4513',
  windows: '#87CEEB',
  door: '#8B4513',
  trim: '#ffffff',
  foundation: '#A9A9A9'
}

const houseParts = ref({ ...defaultColors })

const colorPresets = ref([
  {
    name: 'Classic White',
    preview: ['#ffffff', '#8B4513', '#87CEEB'],
    colors: {
      mainWalls: '#ffffff',
      roof: '#8B4513',
      windows: '#87CEEB',
      door: '#8B4513',
      trim: '#f0f0f0',
      foundation: '#A9A9A9'
    }
  },
  {
    name: 'Modern Gray',
    preview: ['#d3d3d3', '#2F4F4F', '#ffffff'],
    colors: {
      mainWalls: '#d3d3d3',
      roof: '#2F4F4F',
      windows: '#ffffff',
      door: '#2F4F4F',
      trim: '#ffffff',
      foundation: '#696969'
    }
  },
  {
    name: 'Warm Beige',
    preview: ['#f5f5dc', '#8B4513', '#DEB887'],
    colors: {
      mainWalls: '#f5f5dc',
      roof: '#8B4513',
      windows: '#ffffff',
      door: '#DEB887',
      trim: '#ffffff',
      foundation: '#D2B48C'
    }
  },
  {
    name: 'Coastal Blue',
    preview: ['#E6F3FF', '#4682B4', '#ffffff'],
    colors: {
      mainWalls: '#E6F3FF',
      roof: '#4682B4',
      windows: '#ffffff',
      door: '#4682B4',
      trim: '#ffffff',
      foundation: '#708090'
    }
  }
])

const colorPalette = ref([
  // Neutrals
  { name: 'White', value: '#ffffff' },
  { name: 'Cream', value: '#f5f5dc' },
  { name: 'Light Gray', value: '#d3d3d3' },
  { name: 'Dark Gray', value: '#696969' },
  // Earth tones
  { name: 'Beige', value: '#f5f5dc' },
  { name: 'Light Brown', value: '#deb887' },
  { name: 'Brown', value: '#8b4513' },
  { name: 'Dark Brown', value: '#654321' },
  // Blues
  { name: 'Light Blue', value: '#add8e6' },
  { name: 'Sky Blue', value: '#87ceeb' },
  { name: 'Navy Blue', value: '#000080' },
  { name: 'Steel Blue', value: '#4682B4' },
  // Greens
  { name: 'Light Green', value: '#90ee90' },
  { name: 'Sage Green', value: '#9caf88' },
  { name: 'Forest Green', value: '#228b22' },
  { name: 'Olive Green', value: '#808000' },
  // Warm colors
  { name: 'Light Yellow', value: '#ffffe0' },
  { name: 'Yellow', value: '#ffff00' },
  { name: 'Orange', value: '#ffa500' },
  { name: 'Red', value: '#ff0000' },
  // Others
  { name: 'Light Pink', value: '#ffb6c1' },
  { name: 'Purple', value: '#800080' },
  { name: 'Maroon', value: '#800000' },
  { name: 'Black', value: '#000000' }
]) 


const selectPart = (partName) => {
  selectedPart.value = partName
}

const applyColor = (color) => {
  if (selectedPart.value) {
    houseParts.value[selectedPart.value] = color
  }
}

const resetColors = () => {
  houseParts.value = { ...defaultColors }
  selectedPart.value = null
}

const applyPreset = (preset) => {
  houseParts.value = { ...preset.colors }
  selectedPart.value = null
}

const saveCurrentScheme = () => {
  const schemeName = prompt('Enter a name for this color scheme:')
  if (schemeName && schemeName.trim()) {
    savedSchemes.value.push({
      name: schemeName.trim(),
      colors: { ...houseParts.value }
    })
  }
}

const loadScheme = (scheme) => {
  houseParts.value = { ...scheme.colors }
  selectedPart.value = null
}

const deleteScheme = (index) => {
  if (confirm('Are you sure you want to delete this color scheme?')) {
    savedSchemes.value.splice(index, 1)
  }
}
</script>

<style scoped>
/* Added custom scrollbar and enhanced animations */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

@media (max-width: 768px) {
  .cursor-pointer {
    cursor: default;
  }
}

* {
  transition-property: transform, opacity, background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
