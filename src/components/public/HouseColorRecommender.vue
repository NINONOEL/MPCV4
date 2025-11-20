<template>
  <!-- Added navigation header with back button matching Products.vue and PaintMixing.vue style -->
  <div class="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-20">
    <div class="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3">
      <button
        @click="goBack"
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

                <!-- Enhanced color selection grid organized by house part with more colors -->
                <div class="mb-4">
                  <h4 class="text-xs font-medium text-gray-700 mb-2 flex items-center">
                    <svg class="w-3 h-3 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4z" clip-rule="evenodd"/>
                    </svg>
                    {{ selectedPart ? `Colors for ${formatPartName(selectedPart)}` : 'Select a part to see colors' }}
                  </h4>
                  <div v-if="selectedPart && getColorsForPart(selectedPart).length > 0" class="grid grid-cols-6 md:grid-cols-7 gap-1.5">
                    <div
                      v-for="color in getColorsForPart(selectedPart)"
                      :key="color.name"
                      @click="applyColor(color.value)"
                      :class="[
                        'aspect-square rounded-lg border-2 cursor-pointer transition-all duration-300 relative group',
                        'hover:scale-105 hover:border-gray-400 hover:shadow-md',
                        houseParts[selectedPart] === color.value ? 'ring-2 ring-blue-500 ring-offset-1 scale-105' : '',
                      ]"
                      :style="{ backgroundColor: color.value, borderColor: color.value === '#ffffff' ? '#e5e7eb' : 'transparent' }"
                      :title="color.name"
                    >
                      <!-- Enhanced checkmark with animation -->
                      <div
                        v-if="houseParts[selectedPart] === color.value"
                        class="absolute inset-0 flex items-center justify-center"
                      >
                        <svg class="w-3 h-3 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div v-else class="text-xs text-gray-500 text-center py-4">
                    Select a house part to view recommended colors
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
import { useRouter } from 'vue-router'

const router = useRouter()

// Refs
const selectedPart = ref(null)
const isMobile = ref(false)

// Color presets and color by part data
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
      windows: '#87CEEB',
      door: '#4682B4',
      trim: '#ffffff',
      foundation: '#708090'
    }
  },
  {
    name: 'Tropical Sunset',
    preview: ['#FF6347', '#DAA520', '#2F4F4F'],
    colors: {
      mainWalls: '#FF6347',
      roof: '#DAA520',
      windows: '#87CEEB',
      door: '#DAA520',
      trim: '#ffffff',
      foundation: '#2F4F4F'
    }
  },
  {
    name: 'Mint Fresh',
    preview: ['#E0F8F7', '#228B22', '#ffffff'],
    colors: {
      mainWalls: '#E0F8F7',
      roof: '#228B22',
      windows: '#87CEEB',
      door: '#228B22',
      trim: '#ffffff',
      foundation: '#696969'
    }
  },
  {
    name: 'Sophisticated Charcoal',
    preview: ['#36454F', '#4682B4', '#ffffff'],
    colors: {
      mainWalls: '#36454F',
      roof: '#2F4F4F',
      windows: '#4682B4',
      door: '#FFFFFF',
      trim: '#FFD700',
      foundation: '#000000'
    }
  },
  {
    name: 'Peachy Keen',
    preview: ['#FFDAB9', '#CD5C5C', '#DEB887'],
    colors: {
      mainWalls: '#FFDAB9',
      roof: '#CD5C5C',
      windows: '#87CEEB',
      door: '#CD5C5C',
      trim: '#DEB887',
      foundation: '#A9A9A9'
    }
  },
  {
    name: 'Forest Paradise',
    preview: ['#90EE90', '#013220', '#DEB887'],
    colors: {
      mainWalls: '#90EE90',
      roof: '#013220',
      windows: '#87CEEB',
      door: '#013220',
      trim: '#DEB887',
      foundation: '#696969'
    }
  },
  {
    name: 'Mediterranean Dream',
    preview: ['#FFFACD', '#DC143C', '#FFD700'],
    colors: {
      mainWalls: '#FFFACD',
      roof: '#DC143C',
      windows: '#87CEEB',
      door: '#FFD700',
      trim: '#ffffff',
      foundation: '#D2B48C'
    }
  },
  {
    name: 'Urban Chic',
    preview: ['#F5F5F5', '#696969', '#000000'],
    colors: {
      mainWalls: '#F5F5F5',
      roof: '#696969',
      windows: '#4682B4',
      door: '#000000',
      trim: '#ffffff',
      foundation: '#2F4F4F'
    }
  },
  {
    name: 'Lavender Dreams',
    preview: ['#E6E6FA', '#9966CC', '#DEB887'],
    colors: {
      mainWalls: '#E6E6FA',
      roof: '#9966CC',
      windows: '#87CEEB',
      door: '#9966CC',
      trim: '#ffffff',
      foundation: '#A9A9A9'
    }
  }
])

const defaultColors = {
  mainWalls: '#f5f5f5',
  roof: '#8B4513',
  windows: '#87CEEB',
  door: '#8B4513',
  trim: '#ffffff',
  foundation: '#A9A9A9'
}

const houseParts = ref({ ...defaultColors })

const colorsByPart = ref({
  mainWalls: [
    { name: 'Pure White', value: '#ffffff' },
    { name: 'Cream', value: '#f5f5dc' },
    { name: 'Off-White', value: '#f0f0f0' },
    { name: 'Ivory', value: '#fffff0' },
    { name: 'Ghost White', value: '#F8F8FF' },
    { name: 'Snow', value: '#FFFAFA' },
    { name: 'Linen', value: '#FAF0E6' },
    { name: 'Paper Mache', value: '#FAEBD7' },
    { name: 'Antique White', value: '#FAEBD7' },
    { name: 'Light Tan', value: '#d2b48c' },
    { name: 'Tan', value: '#d2b48c' },
    { name: 'Beige', value: '#f5f5dc' },
    { name: 'Sandy Brown', value: '#F4A460' },
    { name: 'Peach', value: '#FFDAB9' },
    { name: 'Wheat', value: '#F5DEB3' },
    { name: 'Bisque', value: '#FFE4C4' },
    { name: 'Burlywood', value: '#DEB887' },
    { name: 'Light Gray', value: '#d3d3d3' },
    { name: 'Gray', value: '#a9a9a9' },
    { name: 'Dark Gray', value: '#696969' },
    { name: 'Charcoal', value: '#36454f' },
    { name: 'Smoke Gray', value: '#708090' },
    { name: 'Slate Gray', value: '#708090' },
    { name: 'Gainsboro', value: '#DCDCDC' },
    { name: 'Lighter Gray', value: '#E8E8E8' },
    { name: 'Medium Gray', value: '#BEBEBE' },
    { name: 'Dim Gray', value: '#696969' },
    { name: 'Light Yellow', value: '#ffffe0' },
    { name: 'Pale Yellow', value: '#fffacd' },
    { name: 'Light Peach', value: '#ffdab9' },
    { name: 'Cornsilk', value: '#FFF8DC' },
    { name: 'Smiley Yellow', value: '#FFFF99' },
    { name: 'Mint Cream', value: '#F5FFFA' },
    { name: 'Honeydew', value: '#F0FFF0' },
    { name: 'Light Green', value: '#90ee90' },
    { name: 'Pale Green', value: '#98fb98' },
    { name: 'Mint', value: '#98ff98' },
    { name: 'Mint Leaf', value: '#F0FFF0' },
    { name: 'Seafoam', value: '#93E9BE' },
    { name: 'Light Aqua', value: '#AFEEEE' },
    { name: 'Light Cyan', value: '#E0FFFF' },
    { name: 'Azure', value: '#F0FFFF' },
    { name: 'Lavender Blue', value: '#E6E6FA' },
    { name: 'Periwinkle', value: '#CCCCFF' },
    { name: 'Light Sky Blue', value: '#87CEFA' },
    { name: 'Light Pink', value: '#ffe4e1' },
    { name: 'Blush', value: '#ffb6c1' },
    { name: 'Misty Rose', value: '#FFE4E1' },
    { name: 'Light Coral', value: '#F08080' },
    { name: 'Salmon', value: '#FA8072' },
    { name: 'Peachy Pink', value: '#FFDAB9' },
    { name: 'Light Lavender', value: '#e6e6fa' },
    { name: 'Lavender', value: '#e6e6fa' },
    { name: 'Thistle', value: '#D8BFD8' },
    { name: 'Plum', value: '#DDA0DD' },
    { name: 'Orchid', value: '#DA70D6' }
  ],
  roof: [
    { name: 'Dark Brown', value: '#654321' },
    { name: 'Brown', value: '#8b4513' },
    { name: 'Light Brown', value: '#deb887' },
    { name: 'Chocolate', value: '#D2691E' },
    { name: 'Saddle Brown', value: '#8B4513' },
    { name: 'Dark Red', value: '#8b0000' },
    { name: 'Maroon', value: '#800000' },
    { name: 'Burgundy', value: '#800020' },
    { name: 'Brick Red', value: '#CB4154' },
    { name: 'Rust', value: '#B7410E' },
    { name: 'Terracotta', value: '#E2725B' },
    { name: 'Burnt Sienna', value: '#8B3A3A' },
    { name: 'Charcoal', value: '#36454f' },
    { name: 'Dark Gray', value: '#696969' },
    { name: 'Gray', value: '#a9a9a9' },
    { name: 'Slate Gray', value: '#708090' },
    { name: 'Concrete', value: '#A0A0A0' },
    { name: 'Stone', value: '#928E85' },
    { name: 'Pewter', value: '#908070' },
    { name: 'Steel Blue', value: '#4682b4' },
    { name: 'Navy Blue', value: '#000080' },
    { name: 'Dark Blue', value: '#00008b' },
    { name: 'Royal Blue', value: '#4169E1' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Teal', value: '#008080' },
    { name: 'Slate Blue', value: '#6A5ACD' },
    { name: 'Cornflower Blue', value: '#6495ED' },
    { name: 'Dark Green', value: '#013220' },
    { name: 'Forest Green', value: '#228b22' },
    { name: 'Olive', value: '#808000' },
    { name: 'Green', value: '#008000' },
    { name: 'Sea Green', value: '#2E8B57' },
    { name: 'Dark Olive Green', value: '#556B2F' },
    { name: 'Orange', value: '#FF8C00' },
    { name: 'Dark Orange', value: '#FF6347' },
    { name: 'Copper', value: '#b87333' },
    { name: 'Bronze', value: '#cd7f32' },
    { name: 'Gold', value: '#ffd700' },
    { name: 'Black', value: '#000000' },
    { name: 'White Tile', value: '#FFFFFF' },
    { name: 'Cream Tile', value: '#F5F5DC' }
  ],
  windows: [
    { name: 'White', value: '#ffffff' },
    { name: 'Off-White', value: '#f0f0f0' },
    { name: 'Cream', value: '#f5f5dc' },
    { name: 'Ghost White', value: '#F8F8FF' },
    { name: 'Snow', value: '#FFFAFA' },
    { name: 'Linen', value: '#FAF0E6' },
    { name: 'Azure', value: '#F0FFFF' },
    { name: 'Honeydew', value: '#F0FFF0' },
    { name: 'Light Blue', value: '#add8e6' },
    { name: 'Sky Blue', value: '#87ceeb' },
    { name: 'Pale Blue', value: '#b0e0e6' },
    { name: 'Steel Blue', value: '#4682b4' },
    { name: 'Navy Blue', value: '#000080' },
    { name: 'Dark Blue', value: '#00008b' },
    { name: 'Royal Blue', value: '#4169E1' },
    { name: 'Cornflower Blue', value: '#6495ED' },
    { name: 'Deep Sky Blue', value: '#00BFFF' },
    { name: 'Dodger Blue', value: '#1E90FF' },
    { name: 'Gray', value: '#a9a9a9' },
    { name: 'Light Gray', value: '#d3d3d3' },
    { name: 'Dark Gray', value: '#696969' },
    { name: 'Charcoal', value: '#36454f' },
    { name: 'Gainsboro', value: '#DCDCDC' },
    { name: 'Slate Gray', value: '#708090' },
    { name: 'Smoke Gray', value: '#708090' },
    { name: 'Teal', value: '#008080' },
    { name: 'Light Teal', value: '#afeeee' },
    { name: 'Cyan', value: '#00ffff' },
    { name: 'Light Cyan', value: '#e0ffff' },
    { name: 'Dark Cyan', value: '#008B8B' },
    { name: 'Turquoise', value: '#40E0D0' },
    { name: 'Black', value: '#000000' },
    { name: 'Bronze', value: '#CD7F32' },
    { name: 'Copper', value: '#B87333' },
    { name: 'Gold Trim', value: '#FFD700' },
    { name: 'Silver', value: '#C0C0C0' }
  ],
  door: [
    { name: 'Dark Brown', value: '#654321' },
    { name: 'Brown', value: '#8b4513' },
    { name: 'Light Brown', value: '#deb887' },
    { name: 'Chocolate', value: '#D2691E' },
    { name: 'Tan', value: '#D2B48C' },
    { name: 'Sandy Brown', value: '#F4A460' },
    { name: 'Peru', value: '#CD853F' },
    { name: 'Saddle Brown', value: '#8B4513' },
    { name: 'Sienna', value: '#A0522D' },
    { name: 'Burnt Sienna', value: '#8B3A3A' },
    { name: 'Black', value: '#000000' },
    { name: 'Dark Gray', value: '#696969' },
    { name: 'Charcoal', value: '#36454f' },
    { name: 'Gray', value: '#808080' },
    { name: 'Slate Gray', value: '#708090' },
    { name: 'Dark Slate Gray', value: '#2F4F4F' },
    { name: 'Dim Gray', value: '#696969' },
    { name: 'Gainsboro', value: '#DCDCDC' },
    { name: 'Navy Blue', value: '#000080' },
    { name: 'Dark Blue', value: '#00008b' },
    { name: 'Steel Blue', value: '#4682B4' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Royal Blue', value: '#4169E1' },
    { name: 'Deep Sky Blue', value: '#00BFFF' },
    { name: 'Teal', value: '#008080' },
    { name: 'Dark Green', value: '#013220' },
    { name: 'Forest Green', value: '#228b22' },
    { name: 'Green', value: '#008000' },
    { name: 'Olive', value: '#808000' },
    { name: 'Sea Green', value: '#2E8B57' },
    { name: 'Dark Olive', value: '#556B2F' },
    { name: 'Spring Green', value: '#00FF7F' },
    { name: 'Dark Red', value: '#8b0000' },
    { name: 'Maroon', value: '#800000' },
    { name: 'Burgundy', value: '#800020' },
    { name: 'Red', value: '#ff0000' },
    { name: 'Crimson', value: '#dc143c' },
    { name: 'Indian Red', value: '#CD5C5C' },
    { name: 'Firebrick', value: '#B22222' },
    { name: 'Brick Red', value: '#CB4154' },
    { name: 'Rust', value: '#b7410e' },
    { name: 'Copper', value: '#b87333' },
    { name: 'Bronze', value: '#cd7f32' },
    { name: 'Gold', value: '#ffd700' },
    { name: 'Orange', value: '#FF8C00' },
    { name: 'Dark Orange', value: '#FF6347' }
  ],
  trim: [
    { name: 'White', value: '#ffffff' },
    { name: 'Off-White', value: '#f0f0f0' },
    { name: 'Cream', value: '#f5f5dc' },
    { name: 'Ivory', value: '#fffff0' },
    { name: 'Ghost White', value: '#F8F8FF' },
    { name: 'Snow', value: '#FFFAFA' },
    { name: 'Linen', value: '#FAF0E6' },
    { name: 'Paper Mache', value: '#FAEBD7' },
    { name: 'Antique White', value: '#FAEBD7' },
    { name: 'Light Tan', value: '#d2b48c' },
    { name: 'Tan', value: '#d2b48c' },
    { name: 'Beige', value: '#f5f5dc' },
    { name: 'Light Brown', value: '#deb887' },
    { name: 'Brown', value: '#8b4513' },
    { name: 'Gold', value: '#ffd700' },
    { name: 'Sandy Brown', value: '#F4A460' },
    { name: 'Peru', value: '#CD853F' },
    { name: 'Light Gray', value: '#d3d3d3' },
    { name: 'Gray', value: '#a9a9a9' },
    { name: 'Dark Gray', value: '#696969' },
    { name: 'Charcoal', value: '#36454f' },
    { name: 'Black', value: '#000000' },
    { name: 'Gainsboro', value: '#DCDCDC' },
    { name: 'Silver', value: '#C0C0C0' },
    { name: 'Slate Gray', value: '#708090' },
    { name: 'Light Peach', value: '#ffdab9' },
    { name: 'Pale Green', value: '#98fb98' },
    { name: 'Light Blue', value: '#add8e6' },
    { name: 'Lavender', value: '#E6E6FA' },
    { name: 'Copper', value: '#B87333' },
    { name: 'Bronze', value: '#CD7F32' },
    { name: 'Wheat', value: '#F5DEB3' }
  ],
  foundation: [
    { name: 'Gray', value: '#a9a9a9' },
    { name: 'Dark Gray', value: '#696969' },
    { name: 'Charcoal', value: '#36454f' },
    { name: 'Light Gray', value: '#d3d3d3' },
    { name: 'Slate Gray', value: '#708090' },
    { name: 'Black', value: '#000000' },
    { name: 'Stone', value: '#928e85' },
    { name: 'Concrete', value: '#A0A0A0' },
    { name: 'Gainsboro', value: '#DCDCDC' },
    { name: 'Dimgray', value: '#696969' },
    { name: 'Darkslategray', value: '#2F4F4F' },
    { name: 'Lightslategray', value: '#778899' },
    { name: 'Brown', value: '#8b4513' },
    { name: 'Dark Brown', value: '#654321' },
    { name: 'Tan', value: '#d2b48c' },
    { name: 'Beige', value: '#f5f5dc' },
    { name: 'Sandy Brown', value: '#F4A460' },
    { name: 'Chocolate', value: '#D2691E' },
    { name: 'Peru', value: '#CD853F' },
    { name: 'Saddle Brown', value: '#8B4513' },
    { name: 'Brick Red', value: '#cb4154' },
    { name: 'Rust', value: '#b7410e' },
    { name: 'Terracotta', value: '#cd5c5c' },
    { name: 'Dark Red', value: '#8b0000' },
    { name: 'Indian Red', value: '#CD5C5C' },
    { name: 'Firebrick', value: '#B22222' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Tomato', value: '#FF6347' },
    { name: 'Dark Green', value: '#013220' },
    { name: 'Forest Green', value: '#228b22' },
    { name: 'Green', value: '#008000' },
    { name: 'Olive', value: '#808000' },
    { name: 'Sea Green', value: '#2E8B57' },
    { name: 'Dark Olive Green', value: '#556B2F' },
    { name: 'Navy Blue', value: '#000080' },
    { name: 'Dark Blue', value: '#00008b' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Steel Blue', value: '#4682B4' },
    { name: 'Teal', value: '#008080' },
    { name: 'Charcoal Blue', value: '#36454f' },
    { name: 'Copper', value: '#B87333' },
    { name: 'Bronze', value: '#CD7F32' },
    { name: 'Silver', value: '#C0C0C0' }
  ]
})

// Methods
const goBack = () => {
  router.push({ name: 'CustomerPortal' })
}

const formatPartName = (partName) => {
  return partName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const selectPart = (partName) => {
  selectedPart.value = partName
}

const applyColor = (color) => {
  if (selectedPart.value) {
    houseParts.value[selectedPart.value] = color
  }
}

const getColorsForPart = (partName) => {
  return colorsByPart.value[partName] || []
}

const resetColors = () => {
  houseParts.value = { ...defaultColors }
  selectedPart.value = null
}

const applyPreset = (preset) => {
  houseParts.value = { ...preset.colors }
  selectedPart.value = null
}

// Hooks - called unconditionally at top level after all state is defined
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
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
