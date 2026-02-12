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
                        <stop offset="0%" style="stop-color:#4A90E2;stop-opacity:1" />
                        <stop offset="30%" style="stop-color:#6BB6FF;stop-opacity:1" />
                        <stop offset="60%" style="stop-color:#87CEEB;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#B0E0E6;stop-opacity:1" />
                      </linearGradient>
                      <radialGradient id="sunGradient" cx="50%" cy="30%">
                        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.9" />
                        <stop offset="70%" style="stop-color:#FFA500;stop-opacity:0.6" />
                        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0" />
                      </radialGradient>
                      <linearGradient id="groundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#7CB342;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#689F38;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#558B2F;stop-opacity:1" />
                      </linearGradient>
                      <linearGradient id="grassTexture" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#8BC34A;stop-opacity:0.3" />
                        <stop offset="100%" style="stop-color:#558B2F;stop-opacity:0.2" />
                      </linearGradient>
                      <linearGradient id="roofShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:rgba(0,0,0,0.2);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgba(0,0,0,0.05);stop-opacity:1" />
                      </linearGradient>
                      <filter id="shadow">
                        <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
                      </filter>
                      <filter id="cloudBlur">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
                      </filter>
                    </defs>

                    <!-- Sky background with beautiful gradient -->
                    <rect
                      width="600" height="200"
                      fill="url(#skyGradient)"
                      style="pointer-events: none"
                    />
                    
                    <!-- Sun with glow effect -->
                    <circle cx="500" cy="50" r="35" fill="url(#sunGradient)" style="pointer-events: none"/>
                    <circle cx="500" cy="50" r="30" fill="#FFD700" opacity="0.8" style="pointer-events: none"/>
                    
                    <!-- Enhanced clouds for atmosphere -->
                    <g filter="url(#cloudBlur)" style="pointer-events: none">
                      <ellipse cx="100" cy="50" rx="45" ry="28" fill="rgba(255,255,255,0.85)"/>
                      <ellipse cx="120" cy="50" rx="40" ry="25" fill="rgba(255,255,255,0.85)"/>
                      <ellipse cx="110" cy="45" rx="35" ry="22" fill="rgba(255,255,255,0.9)"/>
                      
                      <ellipse cx="80" cy="80" rx="35" ry="22" fill="rgba(255,255,255,0.7)"/>
                      <ellipse cx="95" cy="80" rx="30" ry="20" fill="rgba(255,255,255,0.7)"/>
                      
                      <ellipse cx="200" cy="70" rx="50" ry="30" fill="rgba(255,255,255,0.75)"/>
                      <ellipse cx="220" cy="70" rx="45" ry="28" fill="rgba(255,255,255,0.75)"/>
                      <ellipse cx="210" cy="65" rx="40" ry="25" fill="rgba(255,255,255,0.8)"/>
                      
                      <ellipse cx="350" cy="40" rx="40" ry="25" fill="rgba(255,255,255,0.7)"/>
                      <ellipse cx="370" cy="40" rx="35" ry="22" fill="rgba(255,255,255,0.7)"/>
                    </g>

                    <!-- Ground with enhanced gradient and texture -->
                    <rect
                      y="300" width="600" height="100"
                      fill="url(#groundGradient)"
                      @click="selectedPart = null"
                      class="cursor-pointer"
                    />
                    <!-- Grass texture overlay -->
                    <rect
                      y="300" width="600" height="100"
                      fill="url(#grassTexture)"
                      style="pointer-events: none"
                    />
                    <!-- Grass detail lines -->
                    <g style="pointer-events: none; opacity: 0.3;">
                      <line x1="50" y1="310" x2="50" y2="330" stroke="#4A7C59" stroke-width="1"/>
                      <line x1="80" y1="315" x2="80" y2="335" stroke="#4A7C59" stroke-width="1"/>
                      <line x1="150" y1="312" x2="150" y2="332" stroke="#4A7C59" stroke-width="1"/>
                      <line x1="250" y1="318" x2="250" y2="338" stroke="#4A7C59" stroke-width="1"/>
                      <line x1="350" y1="314" x2="350" y2="334" stroke="#4A7C59" stroke-width="1"/>
                      <line x1="450" y1="316" x2="450" y2="336" stroke="#4A7C59" stroke-width="1"/>
                      <line x1="550" y1="313" x2="550" y2="333" stroke="#4A7C59" stroke-width="1"/>
                    </g>

                    <!-- Foundation/Base with shadow -->
                    <rect
                      x="115" y="295" width="370" height="35"
                      fill="url(#roofShadow)"
                      style="pointer-events: none"
                    />
                    <rect
                      x="120" y="300" width="360" height="30"
                      :fill="houseParts.foundation"
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'foundation' ? '4' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      filter="url(#shadow)"
                    />

                    <!-- Main house structure with shadow -->
                    <rect
                      x="125" y="195" width="350" height="105"
                      fill="url(#roofShadow)"
                      style="pointer-events: none"
                    />
                    
                    <!-- First floor main wall -->
                    <rect
                      x="120" y="190" width="360" height="110"
                      :fill="houseParts.mainWalls"
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'mainWalls' ? '4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      filter="url(#shadow)"
                    />

                    <!-- Second floor main wall -->
                    <rect
                      x="150" y="120" width="300" height="70"
                      :fill="houseParts.mainWalls"
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'mainWalls' ? '4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      filter="url(#shadow)"
                    />

                    <!-- Main roof with shadow effect -->
                    <polygon
                      points="145,125 300,35 455,125"
                      fill="url(#roofShadow)"
                      style="pointer-events: none"
                    />
                    <polygon
                      points="150,120 300,40 450,120"
                      :fill="houseParts.roof"
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'roof' ? '4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      filter="url(#shadow)"
                    />
                    <!-- Roof shingle lines for detail -->
                    <line x1="200" y1="80" x2="200" y2="120" stroke="rgba(0,0,0,0.1)" stroke-width="1" style="pointer-events: none"/>
                    <line x1="250" y1="60" x2="250" y2="120" stroke="rgba(0,0,0,0.1)" stroke-width="1" style="pointer-events: none"/>
                    <line x1="350" y1="60" x2="350" y2="120" stroke="rgba(0,0,0,0.1)" stroke-width="1" style="pointer-events: none"/>
                    <line x1="400" y1="80" x2="400" y2="120" stroke="rgba(0,0,0,0.1)" stroke-width="1" style="pointer-events: none"/>

                    <!-- Left dormer structure -->
                    <rect
                      x="215" y="125" width="55" height="65"
                      fill="url(#roofShadow)"
                      style="pointer-events: none"
                    />
                    <rect
                      x="210" y="120" width="60" height="70"
                      :fill="houseParts.mainWalls"
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'mainWalls' ? '4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      filter="url(#shadow)"
                    />
                    <polygon
                      points="205,125 240,90 275,125"
                      fill="url(#roofShadow)"
                      style="pointer-events: none"
                    />
                    <polygon
                      points="210,120 240,90 270,120"
                      :fill="houseParts.roof"
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'roof' ? '4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      filter="url(#shadow)"
                    />

                    <!-- Right dormer structure -->
                    <rect
                      x="335" y="125" width="55" height="65"
                      fill="url(#roofShadow)"
                      style="pointer-events: none"
                    />
                    <rect
                      x="330" y="120" width="60" height="70"
                      :fill="houseParts.mainWalls"
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'mainWalls' ? '4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      filter="url(#shadow)"
                    />
                    <polygon
                      points="325,125 360,90 395,125"
                      fill="url(#roofShadow)"
                      style="pointer-events: none"
                    />
                    <polygon
                      points="330,120 360,90 390,120"
                      :fill="houseParts.roof"
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'roof' ? '4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      filter="url(#shadow)"
                    />

                    <!-- Window trim/accents -->
                    <rect
                      x="145" y="215" width="60" height="70"
                      :fill="houseParts.trim"
                      :stroke="selectedPart === 'trim' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'trim' ? '3' : '1.5'"
                      @click="selectPart('trim')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      opacity="0.8"
                    />
                    <rect
                      x="395" y="215" width="60" height="70"
                      :fill="houseParts.trim"
                      :stroke="selectedPart === 'trim' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'trim' ? '3' : '1.5'"
                      @click="selectPart('trim')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      opacity="0.8"
                    />
                    <rect
                      x="220" y="130" width="40" height="40"
                      :fill="houseParts.trim"
                      :stroke="selectedPart === 'trim' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'trim' ? '3' : '1.5'"
                      @click="selectPart('trim')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      opacity="0.8"
                    />
                    <rect
                      x="340" y="130" width="40" height="40"
                      :fill="houseParts.trim"
                      :stroke="selectedPart === 'trim' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'trim' ? '3' : '1.5'"
                      @click="selectPart('trim')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      opacity="0.8"
                    />

                    <!-- Left dormer window with frame -->
                    <rect
                      x="225" y="135" width="30" height="30"
                      :fill="houseParts.windows"
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'"
                      :stroke-width="selectedPart === 'windows' ? '3' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    <!-- Window cross -->
                    <line x1="240" y1="135" x2="240" y2="165" stroke="#333" stroke-width="1.5" opacity="0.5" style="pointer-events: none"/>
                    <line x1="225" y1="150" x2="255" y2="150" stroke="#333" stroke-width="1.5" opacity="0.5" style="pointer-events: none"/>

                    <!-- Right dormer window with frame -->
                    <rect
                      x="345" y="135" width="30" height="30"
                      :fill="houseParts.windows"
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'"
                      :stroke-width="selectedPart === 'windows' ? '3' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    <!-- Window cross -->
                    <line x1="360" y1="135" x2="360" y2="165" stroke="#333" stroke-width="1.5" opacity="0.5" style="pointer-events: none"/>
                    <line x1="345" y1="150" x2="375" y2="150" stroke="#333" stroke-width="1.5" opacity="0.5" style="pointer-events: none"/>

                    <!-- First floor left window with frame -->
                    <rect
                      x="150" y="220" width="50" height="60"
                      :fill="houseParts.windows"
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'"
                      :stroke-width="selectedPart === 'windows' ? '4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    <!-- Window panes -->
                    <line x1="175" y1="220" x2="175" y2="280" stroke="#333" stroke-width="2" opacity="0.6" style="pointer-events: none"/>
                    <line x1="150" y1="250" x2="200" y2="250" stroke="#333" stroke-width="2" opacity="0.6" style="pointer-events: none"/>

                    <!-- First floor right window with frame -->
                    <rect
                      x="400" y="220" width="50" height="60"
                      :fill="houseParts.windows"
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'"
                      :stroke-width="selectedPart === 'windows' ? '4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    <!-- Window panes -->
                    <line x1="425" y1="220" x2="425" y2="280" stroke="#333" stroke-width="2" opacity="0.6" style="pointer-events: none"/>
                    <line x1="400" y1="250" x2="450" y2="250" stroke="#333" stroke-width="2" opacity="0.6" style="pointer-events: none"/>

                    <!-- Door trim/accents -->
                    <rect
                      x="265" y="235" width="70" height="90"
                      :fill="houseParts.trim"
                      :stroke="selectedPart === 'trim' ? '#3B82F6' : '#555'"
                      :stroke-width="selectedPart === 'trim' ? '3' : '1.5'"
                      @click="selectPart('trim')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      opacity="0.8"
                    />

                    <!-- Main entrance door with details -->
                    <rect
                      x="270" y="240" width="60" height="80"
                      :fill="houseParts.door"
                      :stroke="selectedPart === 'door' ? '#3B82F6' : '#333'"
                      :stroke-width="selectedPart === 'door' ? '4' : '2'"
                      @click="selectPart('door')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                      filter="url(#shadow)"
                    />
                    <!-- Door panel lines -->
                    <rect x="280" y="250" width="40" height="25" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" style="pointer-events: none"/>
                    <rect x="280" y="280" width="40" height="25" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" style="pointer-events: none"/>
                    <!-- Door handle -->
                    <circle cx="315" cy="280" r="3" fill="#FFD700" style="pointer-events: none"/>
                    
                    <!-- Enhanced decorative plants/shrubs with better detail -->
                    <!-- Left side shrubs -->
                    <ellipse cx="100" cy="295" rx="28" ry="18" fill="#2d5016" opacity="0.8" style="pointer-events: none"/>
                    <ellipse cx="105" cy="290" rx="22" ry="14" fill="#3d6b2a" opacity="0.9" style="pointer-events: none"/>
                    <ellipse cx="98" cy="292" rx="18" ry="12" fill="#4a7c2a" opacity="0.85" style="pointer-events: none"/>
                    <ellipse cx="95" cy="298" rx="20" ry="13" fill="#2d5016" opacity="0.75" style="pointer-events: none"/>
                    
                    <!-- Right side shrubs -->
                    <ellipse cx="500" cy="295" rx="32" ry="20" fill="#2d5016" opacity="0.8" style="pointer-events: none"/>
                    <ellipse cx="505" cy="290" rx="26" ry="16" fill="#3d6b2a" opacity="0.9" style="pointer-events: none"/>
                    <ellipse cx="498" cy="292" rx="22" ry="14" fill="#4a7c2a" opacity="0.85" style="pointer-events: none"/>
                    <ellipse cx="495" cy="298" rx="24" ry="15" fill="#2d5016" opacity="0.75" style="pointer-events: none"/>
                    
                    <!-- Small flowers/accents -->
                    <circle cx="90" cy="300" r="2" fill="#FFB6C1" opacity="0.8" style="pointer-events: none"/>
                    <circle cx="95" cy="305" r="1.5" fill="#FFD700" opacity="0.7" style="pointer-events: none"/>
                    <circle cx="510" cy="300" r="2" fill="#FFB6C1" opacity="0.8" style="pointer-events: none"/>
                    <circle cx="515" cy="305" r="1.5" fill="#FFD700" opacity="0.7" style="pointer-events: none"/>
                    
                    <!-- Pathway/stone path in front -->
                    <ellipse cx="300" cy="320" rx="80" ry="8" fill="#A0A0A0" opacity="0.4" style="pointer-events: none"/>
                    <ellipse cx="300" cy="320" rx="75" ry="6" fill="#C0C0C0" opacity="0.3" style="pointer-events: none"/>
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

                <!-- Enhanced color scheme presets with dropdown -->
                <div class="mb-4">
                  <h4 class="text-xs font-medium text-gray-700 mb-2 flex items-center">
                    <svg class="w-3 h-3 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2-2H4a2 2 0 01-2-2v-4z"/>
                    </svg>
                    Popular Schemes
                  </h4>
                  <select
                    @change="applyPresetFromSelect($event)"
                    class="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select a color scheme...</option>
                    <option
                      v-for="preset in colorPresets"
                      :key="preset.name"
                      :value="preset.name"
                    >
                      {{ preset.name }}
                    </option>
                  </select>
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
  },
  {
    name: 'Filipino Pastel Pink',
    preview: ['#FFB6C1', '#FF69B4', '#FFFFFF'],
    colors: {
      mainWalls: '#FFB6C1',
      roof: '#FF69B4',
      windows: '#FFFFFF',
      door: '#FF1493',
      trim: '#FFFFFF',
      foundation: '#C0C0C0'
    }
  },
  {
    name: 'Filipino Pastel Blue',
    preview: ['#B0E0E6', '#4682B4', '#FFFFFF'],
    colors: {
      mainWalls: '#B0E0E6',
      roof: '#4682B4',
      windows: '#FFFFFF',
      door: '#1E90FF',
      trim: '#FFFFFF',
      foundation: '#708090'
    }
  },
  {
    name: 'Filipino Pastel Yellow',
    preview: ['#FFFACD', '#FFD700', '#FFFFFF'],
    colors: {
      mainWalls: '#FFFACD',
      roof: '#FFD700',
      windows: '#FFFFFF',
      door: '#FFA500',
      trim: '#FFFFFF',
      foundation: '#D2B48C'
    }
  },
  {
    name: 'Filipino Pastel Green',
    preview: ['#98FB98', '#228B22', '#FFFFFF'],
    colors: {
      mainWalls: '#98FB98',
      roof: '#228B22',
      windows: '#FFFFFF',
      door: '#32CD32',
      trim: '#FFFFFF',
      foundation: '#696969'
    }
  },
  {
    name: 'Filipino Pastel Purple',
    preview: ['#DDA0DD', '#9370DB', '#FFFFFF'],
    colors: {
      mainWalls: '#DDA0DD',
      roof: '#9370DB',
      windows: '#FFFFFF',
      door: '#8A2BE2',
      trim: '#FFFFFF',
      foundation: '#A9A9A9'
    }
  },
  {
    name: 'Filipino Pastel Orange',
    preview: ['#FFE4B5', '#FF8C00', '#FFFFFF'],
    colors: {
      mainWalls: '#FFE4B5',
      roof: '#FF8C00',
      windows: '#FFFFFF',
      door: '#FF6347',
      trim: '#FFFFFF',
      foundation: '#D2691E'
    }
  },
  {
    name: 'Spanish Colonial',
    preview: ['#F5DEB3', '#8B4513', '#FFFFFF'],
    colors: {
      mainWalls: '#F5DEB3',
      roof: '#8B4513',
      windows: '#FFFFFF',
      door: '#654321',
      trim: '#DEB887',
      foundation: '#696969'
    }
  },
  {
    name: 'Tropical Paradise',
    preview: ['#E0F8F7', '#FF6347', '#FFD700'],
    colors: {
      mainWalls: '#E0F8F7',
      roof: '#FF6347',
      windows: '#87CEEB',
      door: '#FFD700',
      trim: '#FFFFFF',
      foundation: '#708090'
    }
  },
  {
    name: 'Bahay Kubo Style',
    preview: ['#DEB887', '#8B4513', '#90EE90'],
    colors: {
      mainWalls: '#DEB887',
      roof: '#8B4513',
      windows: '#90EE90',
      door: '#654321',
      trim: '#D2B48C',
      foundation: '#A0522D'
    }
  },
  {
    name: 'Modern Filipino',
    preview: ['#F0F0F0', '#2F4F4F', '#FF6B6B'],
    colors: {
      mainWalls: '#F0F0F0',
      roof: '#2F4F4F',
      windows: '#FFFFFF',
      door: '#FF6B6B',
      trim: '#FFFFFF',
      foundation: '#696969'
    }
  },
  {
    name: 'Filipino Cream',
    preview: ['#FFF8DC', '#DAA520', '#FFFFFF'],
    colors: {
      mainWalls: '#FFF8DC',
      roof: '#DAA520',
      windows: '#FFFFFF',
      door: '#CD853F',
      trim: '#FFFFFF',
      foundation: '#D2B48C'
    }
  },
  {
    name: 'Filipino Sky Blue',
    preview: ['#E6F3FF', '#4169E1', '#FFFFFF'],
    colors: {
      mainWalls: '#E6F3FF',
      roof: '#4169E1',
      windows: '#FFFFFF',
      door: '#1E90FF',
      trim: '#FFFFFF',
      foundation: '#708090'
    }
  },
  {
    name: 'Filipino Mint',
    preview: ['#F0FFF0', '#228B22', '#FFFFFF'],
    colors: {
      mainWalls: '#F0FFF0',
      roof: '#228B22',
      windows: '#FFFFFF',
      door: '#32CD32',
      trim: '#FFFFFF',
      foundation: '#808080'
    }
  },
  {
    name: 'Filipino Coral',
    preview: ['#FFE4E1', '#FF6347', '#FFFFFF'],
    colors: {
      mainWalls: '#FFE4E1',
      roof: '#FF6347',
      windows: '#FFFFFF',
      door: '#FF4500',
      trim: '#FFFFFF',
      foundation: '#CD5C5C'
    }
  }
])

const defaultColors = {
  mainWalls: '#ffffff',
  roof: '#ffffff',
  windows: '#ffffff',
  door: '#ffffff',
  trim: '#ffffff',
  foundation: '#ffffff'
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
    { name: 'Cream Tile', value: '#F5F5DC' },
    { name: 'Filipino Red', value: '#DC143C' },
    { name: 'Filipino Terracotta', value: '#E2725B' },
    { name: 'Filipino Brown', value: '#8B4513' },
    { name: 'Filipino Orange', value: '#FF8C00' },
    { name: 'Filipino Gold', value: '#FFD700' },
    { name: 'Filipino Maroon', value: '#800000' },
    { name: 'Filipino Burgundy', value: '#800020' },
    { name: 'Filipino Rust', value: '#B7410E' },
    { name: 'Filipino Copper', value: '#B87333' },
    { name: 'Filipino Bronze', value: '#CD7F32' },
    { name: 'Filipino Dark Green', value: '#013220' },
    { name: 'Filipino Forest', value: '#228B22' },
    { name: 'Filipino Navy', value: '#000080' },
    { name: 'Filipino Royal Blue', value: '#4169E1' },
    { name: 'Filipino Steel Blue', value: '#4682B4' },
    { name: 'Filipino Teal', value: '#008080' },
    { name: 'Filipino Slate', value: '#708090' },
    { name: 'Filipino Charcoal', value: '#36454F' }
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
    { name: 'Silver', value: '#C0C0C0' },
    { name: 'Filipino Sky Blue', value: '#87CEEB' },
    { name: 'Filipino Light Blue', value: '#B0E0E6' },
    { name: 'Filipino Baby Blue', value: '#E0F6FF' },
    { name: 'Filipino Aqua', value: '#00FFFF' },
    { name: 'Filipino Cyan', value: '#00CED1' },
    { name: 'Filipino Turquoise', value: '#40E0D0' },
    { name: 'Filipino Periwinkle', value: '#CCCCFF' },
    { name: 'Filipino Lavender Blue', value: '#E6E6FA' },
    { name: 'Filipino Ice Blue', value: '#F0F8FF' },
    { name: 'Filipino Powder Blue', value: '#B0E0E6' },
    { name: 'Filipino Mint Blue', value: '#AFEEEE' },
    { name: 'Filipino Seafoam', value: '#93E9BE' },
    { name: 'Filipino Light Cyan', value: '#E0FFFF' },
    { name: 'Filipino Azure', value: '#F0FFFF' },
    { name: 'Filipino Alice Blue', value: '#F0F8FF' },
    { name: 'Filipino Cornflower', value: '#6495ED' }
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
    { name: 'Dark Orange', value: '#FF6347' },
    { name: 'Filipino Red', value: '#DC143C' },
    { name: 'Filipino Crimson', value: '#DC143C' },
    { name: 'Filipino Scarlet', value: '#FF2400' },
    { name: 'Filipino Coral', value: '#FF7F50' },
    { name: 'Filipino Salmon', value: '#FA8072' },
    { name: 'Filipino Terracotta', value: '#E2725B' },
    { name: 'Filipino Brick', value: '#CB4154' },
    { name: 'Filipino Rust', value: '#B7410E' },
    { name: 'Filipino Maroon', value: '#800000' },
    { name: 'Filipino Burgundy', value: '#800020' },
    { name: 'Filipino Brown', value: '#8B4513' },
    { name: 'Filipino Dark Brown', value: '#654321' },
    { name: 'Filipino Chocolate', value: '#D2691E' },
    { name: 'Filipino Saddle Brown', value: '#8B4513' },
    { name: 'Filipino Sienna', value: '#A0522D' },
    { name: 'Filipino Burnt Sienna', value: '#8B3A3A' },
    { name: 'Filipino Tan', value: '#D2B48C' },
    { name: 'Filipino Beige', value: '#F5F5DC' },
    { name: 'Filipino Khaki', value: '#F0E68C' },
    { name: 'Filipino Gold', value: '#FFD700' },
    { name: 'Filipino Orange', value: '#FF8C00' },
    { name: 'Filipino Dark Orange', value: '#FF6347' },
    { name: 'Filipino Peach', value: '#FFDAB9' },
    { name: 'Filipino Apricot', value: '#FBCEB1' }
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
    { name: 'Wheat', value: '#F5DEB3' },
    { name: 'Filipino White', value: '#FFFFFF' },
    { name: 'Filipino Cream', value: '#FFF8DC' },
    { name: 'Filipino Ivory', value: '#FFFFF0' },
    { name: 'Filipino Beige', value: '#F5F5DC' },
    { name: 'Filipino Pink', value: '#FFB6C1' },
    { name: 'Filipino Light Pink', value: '#FFC0CB' },
    { name: 'Filipino Blue', value: '#B0E0E6' },
    { name: 'Filipino Yellow', value: '#FFFACD' },
    { name: 'Filipino Green', value: '#98FB98' },
    { name: 'Filipino Lavender', value: '#E6E6FA' },
    { name: 'Filipino Mint', value: '#F0FFF0' },
    { name: 'Filipino Peach', value: '#FFDAB9' },
    { name: 'Filipino Coral', value: '#FF7F50' },
    { name: 'Filipino Gold', value: '#FFD700' },
    { name: 'Filipino Silver', value: '#C0C0C0' },
    { name: 'Filipino Tan', value: '#D2B48C' },
    { name: 'Filipino Brown', value: '#8B4513' }
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

const applyPresetFromSelect = (event) => {
  const presetName = event.target.value
  if (presetName) {
    const preset = colorPresets.value.find(p => p.name === presetName)
    if (preset) {
      applyPreset(preset)
      // Reset dropdown to show placeholder
      event.target.value = ''
    }
  }
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
