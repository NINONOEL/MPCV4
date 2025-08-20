<template>
  <!-- Changed blue gradient background to white -->
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <div class="text-center mb-6 md:mb-8 px-4">
      <h1 class="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">House Color Recommender</h1>
      <p class="text-sm md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Choose your dream house design and customize every exterior part with your favorite colors. 
        Click on different sections to paint them individually.
      </p>
    </div>

    <!-- House Selection Section -->
    <div v-if="!selectedHouse" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
      <h2 class="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6 md:mb-8">Select Your House Design</h2>
      
      <!-- Enhanced responsive grid with better mobile layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
        <div
          v-for="house in houseOptions"
          :key="house.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
          @click="selectHouse(house)"
        >
          <div class="h-48 md:h-64 overflow-hidden relative">
            <img
              :src="house.image"
              :alt="house.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <!-- Added overlay for better mobile interaction -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
              <div class="bg-white bg-opacity-90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <span class="text-sm font-medium text-gray-800">Select Design</span>
              </div>
            </div>
          </div>
          <div class="p-4 md:p-6">
            <h3 class="text-lg md:text-xl font-semibold text-gray-800 mb-2">{{ house.name }}</h3>
            <p class="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">{{ house.description }}</p>
            <button class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 md:py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 text-sm md:text-base font-medium">
              Choose This Design
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Selected House Customization Area -->
    <div v-if="selectedHouse" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
      <div class="bg-white rounded-xl shadow-xl p-4 md:p-8">
        <!-- Improved mobile header layout -->
        <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center mb-6">
          <h2 class="text-xl md:text-2xl font-semibold text-gray-800">
            Customize: {{ selectedHouse.name }}
          </h2>
          <div class="flex flex-wrap gap-2">
            <button 
              @click="resetColors"
              class="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 md:px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 text-xs md:text-sm font-medium transform hover:scale-105"
            >
              Reset Colors
            </button>
            <button 
              @click="saveCurrentScheme"
              class="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 md:px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-xs md:text-sm font-medium transform hover:scale-105"
            >
              Save Scheme
            </button>
            <button 
              @click="goBack"
              class="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-3 md:px-4 py-2 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 text-xs md:text-sm font-medium transform hover:scale-105"
            >
              Choose Different House
            </button>
          </div>
        </div>

        <!-- Enhanced responsive layout with better mobile stacking -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
          <!-- House Preview Area -->
          <div class="xl:col-span-2 order-2 xl:order-1">
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 md:p-6 shadow-inner">
              <!-- Improved mobile instructions -->
              <div class="text-center mb-4">
                <p class="text-xs md:text-sm text-gray-600 mb-2">{{ isMobile ? 'Tap' : 'Click' }} on different parts of the house to color them</p>
                <div v-if="selectedPart" class="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium animate-pulse">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-ping"></div>
                  Selected: {{ formatPartName(selectedPart) }}
                </div>
              </div>
              
              <!-- Enhanced SVG container with better mobile scaling -->
              <div class="flex justify-center">
                <div class="w-full max-w-2xl">
                  <!-- House 1: Colonial Classic - Enhanced beautiful design -->
                  <svg 
                    v-if="selectedHouse.id === 1"
                    viewBox="0 0 600 400" 
                    class="w-full h-auto border-2 border-gray-300 rounded-xl bg-white shadow-lg"
                    style="max-height: 70vh;"
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
                    
                    <rect width="600" height="200" fill="url(#skyGradient)"/>
                    
                    <!-- Ground with texture -->
                    <rect y="300" width="600" height="100" fill="#90EE90"/>
                    
                    <!-- Simplified main structure without excessive trim details -->
                    <!-- First Floor - Main structure -->
                    <rect 
                      x="120" y="190" width="360" height="110" 
                      :fill="houseParts.mainWalls" 
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'mainWalls' ? '4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Second Floor -->
                    <rect 
                      x="140" y="110" width="320" height="80" 
                      :fill="houseParts.mainWalls" 
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'mainWalls' ? '#4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Simplified and improved roof structure -->
                    <!-- Main hip roof with better proportions -->
                    <polygon 
                      points="110,110 300,50 490,110 460,110 300,70 140,110" 
                      fill="url(#roofGradient)" 
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'roof' ? '4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Fixed dormer sections to be properly part of roof with correct z-order -->
                    <!-- Making dormer wall sections use the same roof color and selection as main roof -->
                    <!-- Ensuring dormer walls are properly integrated with roof color system -->
                    <!-- Left dormer roof with integrated walls -->
                    <polygon 
                      points="205,70 240,50 275,70 270,95 210,95" 
                      :fill="houseParts.roof" 
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'roof' ? '4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Right dormer roof with integrated walls -->
                    <polygon 
                      points="325,70 360,50 395,70 390,95 330,95" 
                      :fill="houseParts.roof" 
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'roof' ? '4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Dormer windows -->
                    <rect 
                      x="225" y="75" width="30" height="18" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '3' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <rect 
                      x="345" y="75" width="30" height="18" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '3' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Simplified balcony without excessive trim details -->
                    <!-- Simple balcony platform -->
                    <rect 
                      x="170" y="185" width="260" height="8" 
                      :fill="houseParts.foundation" 
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'foundation' ? '3' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Simple balcony railing -->
                    <rect 
                      x="170" y="175" width="260" height="4" 
                      :fill="houseParts.foundation" 
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'foundation' ? '3' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Simplified columns without decorative details -->
                    <!-- Left column -->
                    <rect 
                      x="200" y="185" width="20" height="115" 
                      :fill="houseParts.foundation" 
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'foundation' ? '3' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Right column -->
                    <rect 
                      x="380" y="185" width="20" height="115" 
                      :fill="houseParts.foundation" 
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'foundation' ? '3' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Clean windows without trim details -->
                    <!-- Second floor side windows -->
                    <rect 
                      x="155" y="125" width="50" height="55" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <rect 
                      x="395" y="125" width="50" height="55" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- French doors to balcony -->
                    <rect 
                      x="240" y="115" width="120" height="70" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- First floor windows -->
                    <rect 
                      x="150" y="220" width="60" height="65" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <rect 
                      x="390" y="220" width="60" height="65" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Simplified arched entrance -->
                    <path 
                      d="M 260 210 Q 300 185 340 210 L 340 285 L 260 285 Z" 
                      :fill="houseParts.door" 
                      :stroke="selectedPart === 'door' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'door' ? '#4' : '2'"
                      @click="selectPart('door')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Simple entrance steps -->
                    <rect 
                      x="240" y="285" width="120" height="12" 
                      :fill="houseParts.foundation" 
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'foundation' ? '3' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <rect 
                      x="220" y="297" width="160" height="12" 
                      :fill="houseParts.foundation" 
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'foundation' ? '3' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Foundation -->
                    <rect 
                      x="110" y="300" width="380" height="30" 
                      :fill="houseParts.foundation" 
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'foundation' ? '4' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                  </svg>

                  <!-- House 2: Modern Contemporary - SIMPLIFIED to look like a proper modern house -->
                  <svg 
                    v-if="selectedHouse.id === 2"
                    viewBox="0 0 600 400" 
                    class="w-full h-auto border-2 border-gray-300 rounded-xl bg-white shadow-lg"
                    style="max-height: 70vh;"
                  >
                    <!-- Sky background -->
                    <rect width="600" height="200" fill="#e6f3ff"/>
                    
                    <!-- Ground -->
                    <rect y="300" width="600" height="100" fill="#90EE90"/>
                    
                    <!-- Simplified Modern Contemporary to look like a proper modern house -->
                    <!-- Main building (lower level) -->
                    <rect 
                      x="100" y="180" width="180" height="120" 
                      :fill="houseParts.mainWalls" 
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'mainWalls' ? '#4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Second level (offset modern style) -->
                    <rect 
                      x="320" y="140" width="160" height="160" 
                      :fill="houseParts.garage" 
                      :stroke="selectedPart === 'garage' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'garage' ? '#4' : '2'"
                      @click="selectPart('garage')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Flat roofs -->
                    <rect 
                      x="95" y="170" width="190" height="10" 
                      :fill="houseParts.roof" 
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'roof' ? '#4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <rect 
                      x="315" y="130" width="170" height="10" 
                      :fill="houseParts.garageRoof" 
                      :stroke="selectedPart === 'garageRoof' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'garageRoof' ? '#4' : '2'"
                      @click="selectPart('garageRoof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Large modern windows -->
                    <rect 
                      x="120" y="200" width="50" height="70" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '#4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <rect 
                      x="210" y="200" width="50" height="70" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '#4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <rect 
                      x="340" y="160" width="50" height="70" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '#4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <rect 
                      x="410" y="160" width="50" height="70" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '#4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Modern entrance -->
                    <rect 
                      x="175" y="250" width="30" height="50" 
                      :fill="houseParts.door" 
                      :stroke="selectedPart === 'door' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'door' ? '#4' : '2'"
                      @click="selectPart('door')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Foundation -->
                    <rect 
                      x="95" y="300" width="390" height="20" 
                      :fill="houseParts.foundation" 
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'foundation' ? '#4' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                  </svg>

                  <!-- House 3: Modern Two-Story - SIMPLIFIED to look like a proper two-story house -->
                  <svg 
                    v-if="selectedHouse.id === 3"
                    viewBox="0 0 600 400" 
                    class="w-full h-auto border-2 border-gray-300 rounded-xl bg-white shadow-lg"
                    style="max-height: 70vh;"
                  >
                    <!-- Sky background -->
                    <rect width="600" height="200" fill="#e6f3ff"/>
                    
                    <!-- Ground -->
                    <rect y="300" width="600" height="100" fill="#90EE90"/>
                    
                    <!-- Simplified Modern Two-Story to look like a proper house with garage -->
                    <!-- Main house body (two-story) -->
                    <rect 
                      x="120" y="120" width="200" height="180" 
                      :fill="houseParts.mainWalls" 
                      :stroke="selectedPart === 'mainWalls' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'mainWalls' ? '#4' : '2'"
                      @click="selectPart('mainWalls')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Garage section -->
                    <rect 
                      x="320" y="180" width="120" height="120" 
                      :fill="houseParts.garage" 
                      :stroke="selectedPart === 'garage' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'garage' ? '#4' : '2'"
                      @click="selectPart('garage')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Main roof -->
                    <polygon 
                      points="100,120 220,60 340,120" 
                      :fill="houseParts.roof" 
                      :stroke="selectedPart === 'roof' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'roof' ? '#4' : '2'"
                      @click="selectPart('roof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Garage roof -->
                    <polygon 
                      points="310,180 380,150 450,180" 
                      :fill="houseParts.garageRoof" 
                      :stroke="selectedPart === 'garageRoof' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'garageRoof' ? '#4' : '2'"
                      @click="selectPart('garageRoof')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Upper floor windows -->
                    <rect 
                      x="140" y="140" width="40" height="50" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '#4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <rect 
                      x="260" y="140" width="40" height="50" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '#4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Lower floor windows -->
                    <rect 
                      x="140" y="230" width="40" height="50" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '#4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <rect 
                      x="260" y="230" width="40" height="50" 
                      :fill="houseParts.windows" 
                      :stroke="selectedPart === 'windows' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'windows' ? '#4' : '2'"
                      @click="selectPart('windows')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Front door -->
                    <rect 
                      x="200" y="250" width="30" height="50" 
                      :fill="houseParts.door" 
                      :stroke="selectedPart === 'door' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'door' ? '#4' : '2'"
                      @click="selectPart('door')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Garage door -->
                    <rect 
                      x="340" y="230" width="80" height="70" 
                      :fill="houseParts.garageDoor" 
                      :stroke="selectedPart === 'garageDoor' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'garageDoor' ? '#4' : '2'"
                      @click="selectPart('garageDoor')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                    
                    <!-- Foundation -->
                    <rect 
                      x="115" y="300" width="330" height="20" 
                      :fill="houseParts.foundation" 
                      :stroke="selectedPart === 'foundation' ? '#3B82F6' : '#333'" 
                      :stroke-width="selectedPart === 'foundation' ? '#4' : '2'"
                      @click="selectPart('foundation')"
                      class="cursor-pointer hover:opacity-80 transition-all duration-200"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Enhanced Color Palette Area with better mobile layout -->
          <div class="xl:col-span-1 order-1 xl:order-2">
            <div class="sticky top-4">
              <h3 class="text-lg md:text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <div class="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
                Color Palette
              </h3>
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 md:p-6 shadow-inner">
                <!-- Dynamic instruction text -->
                <p class="text-xs md:text-sm text-gray-600 mb-4 text-center">
                  {{ selectedPart ? `Choose a color for the ${formatPartName(selectedPart)}:` : 'Select a house part first' }}
                </p>
                
                <!-- Enhanced color scheme presets with better mobile layout -->
                <div class="mb-6">
                  <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <svg class="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2-2H4a2 2 0 01-2-2v-4z"/>
                    </svg>
                    Popular Schemes
                  </h4>
                  <div class="space-y-2">
                    <button 
                      v-for="preset in colorPresets" 
                      :key="preset.name"
                      @click="applyPreset(preset)"
                      class="w-full text-left p-3 bg-white rounded-lg border-2 border-transparent hover:border-indigo-300 hover:shadow-md transition-all duration-300 text-sm group"
                    >
                      <div class="flex items-center gap-3">
                        <div class="flex gap-1">
                          <div 
                            v-for="color in preset.preview" 
                            :key="color"
                            class="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-white shadow-sm group-hover:scale-110 transition-transform duration-200"
                            :style="{ backgroundColor: color }"
                          />
                        </div>
                        <span class="font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">{{ preset.name }}</span>
                      </div>
                    </button>
                  </div>
                </div>
                
                <!-- Enhanced color selection grid with better mobile touch targets -->
                <div class="mb-6">
                  <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <svg class="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4z" clip-rule="evenodd"/>
                    </svg>
                    Color Palette
                  </h4>
                  <div class="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-4 gap-2 md:gap-3">
                    <div 
                      v-for="color in colorPalette" 
                      :key="color.name"
                      @click="applyColor(color.value)"
                      :class="[
                        'aspect-square rounded-xl border-3 cursor-pointer transition-all duration-300 relative group',
                        selectedPart ? 'hover:scale-110 hover:border-gray-400 hover:shadow-lg' : 'opacity-50 cursor-not-allowed',
                        houseParts[selectedPart] === color.value && selectedPart ? 'ring-3 ring-blue-500 ring-offset-2 scale-105' : '',
                        'touch-manipulation' // Better mobile touch handling
                      ]"
                      :style="{ backgroundColor: color.value, borderColor: color.value === '#ffffff' ? '#e5e7eb' : 'transparent' }"
                      :title="color.name"
                    >
                      <!-- Enhanced checkmark with animation -->
                      <div 
                        v-if="houseParts[selectedPart] === color.value && selectedPart"
                        class="absolute inset-0 flex items-center justify-center"
                      >
                        <svg class="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-lg animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <!-- Added hover tooltip -->
                      <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        {{ color.name }}
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Enhanced saved schemes section with better mobile layout -->
                <div v-if="savedSchemes.length > 0" class="mb-6">
                  <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                    </svg>
                    Saved Schemes
                  </h4>
                  <div class="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                    <div 
                      v-for="(scheme, index) in savedSchemes" 
                      :key="index"
                      class="flex items-center justify-between p-3 bg-white rounded-lg border hover:shadow-md transition-all duration-200 group"
                    >
                      <button 
                        @click="loadScheme(scheme)"
                        class="flex-1 text-left hover:text-indigo-600 transition-colors text-sm font-medium"
                      >
                        {{ scheme.name }}
                      </button>
                      <button 
                        @click="deleteScheme(index)"
                        class="text-red-400 hover:text-red-600 ml-2 p-1 rounded-full hover:bg-red-50 transition-all duration-200"
                        title="Delete scheme"
                      >
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Enhanced house parts legend with icons -->
                <div class="mt-6">
                  <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    House Parts
                  </h4>
                  <div class="grid grid-cols-1 gap-1 text-xs text-gray-600">
                    <div class="flex items-center py-1">
                      <div class="w-3 h-3 bg-gray-300 rounded mr-2"></div>
                      Main Walls
                    </div>
                    <div class="flex items-center py-1">
                      <div class="w-3 h-3 bg-red-600 rounded mr-2"></div>
                      Roof
                    </div>
                    <div class="flex items-center py-1">
                      <div class="w-3 h-3 bg-gray-400 rounded mr-2"></div>
                      Garage & Garage Roof
                    </div>
                    <div class="flex items-center py-1">
                      <div class="w-3 h-3 bg-blue-300 rounded mr-2"></div>
                      Windows
                    </div>
                    <div class="flex items-center py-1">
                      <div class="w-3 h-3 bg-yellow-600 rounded mr-2"></div>
                      Doors
                    </div>
                    <div class="flex items-center py-1">
                      <div class="w-3 h-3 bg-white border border-gray-300 rounded mr-2"></div>
                      Trim/Accents
                    </div>
                    <div class="flex items-center py-1">
                      <div class="w-3 h-3 bg-stone-500 rounded mr-2"></div>
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

const selectedHouse = ref(null)
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
  garage: '#f5f5f5',
  garageRoof: '#8B4513',
  windows: '#87CEEB',
  door: '#8B4513',
  garageDoor: '#696969',
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
      garage: '#ffffff',
      roof: '#8B4513',
      garageRoof: '#8B4513',
      windows: '#87CEEB',
      door: '#8B4513',
      garageDoor: '#696969',
      trim: '#f0f0f0',
      foundation: '#A9A9A9'
    }
  },
  {
    name: 'Modern Gray',
    preview: ['#d3d3d3', '#2F4F4F', '#ffffff'],
    colors: {
      mainWalls: '#d3d3d3',
      garage: '#d3d3d3',
      roof: '#2F4F4F',
      garageRoof: '#2F4F4F',
      windows: '#ffffff',
      door: '#2F4F4F',
      garageDoor: '#696969',
      trim: '#ffffff',
      foundation: '#696969'
    }
  },
  {
    name: 'Warm Beige',
    preview: ['#f5f5dc', '#8B4513', '#DEB887'],
    colors: {
      mainWalls: '#f5f5dc',
      garage: '#f5f5dc',
      roof: '#8B4513',
      garageRoof: '#8B4513',
      windows: '#ffffff',
      door: '#DEB887',
      garageDoor: '#DEB887',
      trim: '#ffffff',
      foundation: '#D2B48C'
    }
  },
  {
    name: 'Coastal Blue',
    preview: ['#E6F3FF', '#4682B4', '#ffffff'],
    colors: {
      mainWalls: '#E6F3FF',
      garage: '#E6F3FF',
      roof: '#4682B4',
      garageRoof: '#4682B4',
      windows: '#ffffff',
      door: '#4682B4',
      garageDoor: '#708090',
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

const houseOptions = ref([
  {
    id: 1,
    name: "Colonial Classic",
    description: "Traditional two-story with balcony, columns and tropical landscaping",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8eb2c0980dc99bea84199812683f7c89.jpg-rbkMLMFoiu41qfnXtWaSyEJm2Qvndp.jpeg"
  },
  {
    id: 2,
    name: "Modern Contemporary", 
    description: "Multi-level geometric design with large windows and clean lines",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/house%20exterior%20blueprint.jpg-201elNJ7bGuQzHzmNZPO7LC2Vcjff4.jpeg"
  },
  {
    id: 3,
    name: "Modern Two-Story",
    description: "Contemporary design with garage and rectangular forms",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d4753ea43e1c0b61fb28b616d1b9842e.jpg-x8jNExpEGIO33USPbGc0ySITqsSFGF.jpeg"
  }
  
])

const selectHouse = (house) => {
  selectedHouse.value = house
  selectedPart.value = null
}

const goBack = () => {
  selectedHouse.value = null
  selectedPart.value = null
  resetColors()
}

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

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Enhanced touch targets for mobile */
@media (max-width: 768px) {
  .cursor-pointer {
    cursor: default;
  }
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: transform, opacity, background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
