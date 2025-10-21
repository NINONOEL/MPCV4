<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50/30 flex items-center justify-center p-2 sm:p-3 font-sans">
    <!-- Updated background gradient to match Barcelona Paint Center orange/red theme -->
    <!-- Responsive animated paint brush strokes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Paint Brush Strokes -->
      <div class="absolute top-16 right-12 w-20 sm:w-28 h-2 bg-red-600/10 rounded-full -rotate-12 blur-sm animate-pulse"></div>
      <div class="absolute bottom-24 left-8 w-24 sm:w-32 h-2 bg-orange-500/10 rounded-full rotate-45 blur-sm animate-pulse delay-1000"></div>
      <div class="absolute top-2/3 left-16 w-16 sm:w-24 h-2 bg-red-700/10 rounded-full -rotate-45 blur-sm animate-pulse delay-2000"></div>
      
      <!-- Paint Drops -->
      <div class="absolute top-24 left-24 w-12 sm:w-18 h-12 sm:h-18 bg-red-600/5 rounded-full blur-xl animate-float"></div>
      <div class="absolute bottom-32 right-20 w-12 sm:w-16 h-12 sm:h-12 bg-orange-500/5 rounded-full blur-xl animate-float delay-1000"></div>
      <div class="absolute top-1/2 right-1/4 w-10 sm:w-14 h-10 sm:h-14 bg-red-700/5 rounded-full blur-lg animate-float delay-2000"></div>
    </div>

    <!-- Toast Notification -->
    <div 
      class="fixed top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-500"
      :style="{
        opacity: showToast ? '1' : '0',
        transform: showToast ? 'translate(-50%, -50%) translateY(0)' : 'translate(-50%, -50%) translateY(-20px)',
        pointerEvents: showToast ? 'auto' : 'none'
      }"
    >
      <div class="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl p-4 sm:p-5 max-w-sm mx-4 text-center border border-red-100">
        <div class="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center">
          <svg class="w-4 h-4 sm:w-5 sm:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-xs sm:text-sm font-bold text-gray-800 mb-1">{{ toastMessage }}</h3>
      </div>
    </div>

    <!-- Signup Container -->
    <div class="relative w-full max-w-sm">
      <!-- Back Button -->
      <button 
        @click="goBack" 
        class="inline-flex items-center text-gray-600 hover:text-red-600 transition-all duration-300 group mb-2 sm:mb-3 bg-white/60 backdrop-blur-sm rounded-full px-2.5 py-1 hover:bg-white/80 hover:shadow-lg touch-manipulation text-xs"
      >
        <svg class="h-3 w-3 mr-1 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="font-semibold">Back</span>
      </button>

      <!-- Signup Card -->
      <div class="bg-white/95 backdrop-blur-xl rounded-lg sm:rounded-xl shadow-2xl border border-white/60 overflow-hidden">
        <!-- Header -->
        <div class="px-3 sm:px-4 py-3 sm:py-4 text-center border-b border-red-50">
          <div class="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg sm:rounded-xl shadow-lg mb-2 sm:mb-2.5 transform hover:scale-105 transition-transform duration-300">
            <svg class="h-4 sm:h-5 w-4 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          </div>
          <h1 class="text-sm sm:text-base font-bold text-gray-800 mb-1">Join Barcelona Paint Center</h1>
          <p class="text-xs text-gray-600">Create your account</p>
        </div>

        <!-- Form Body -->
        <div class="px-3 sm:px-4 py-3 sm:py-4">
          <!-- Error Display -->
          <div v-if="errorMessage" class="mb-2 sm:mb-3 p-2 sm:p-3 bg-red-50 border border-red-100 rounded-lg">
            <div class="flex items-center">
              <svg class="h-3 w-3 text-red-500 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p class="text-red-700 text-xs font-medium">{{ errorMessage }}</p>
            </div>
          </div>

          <!-- Success Display -->
          <div v-if="successMessage" class="mb-2 sm:mb-3 p-2 sm:p-3 bg-red-50 border border-red-100 rounded-lg">
            <div class="flex items-center">
              <svg class="h-3 w-3 text-red-500 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-red-700 text-xs font-medium">{{ successMessage }}</p>
            </div>
          </div>

          <!-- Social Signup Buttons -->
          <div class="space-y-2 mb-2.5 sm:mb-3">
            <!-- Google Button -->
            <button 
              type="button"
              @click="handleSocialSignup('google')"
              :disabled="isLoading"
              class="w-full flex items-center justify-center px-2.5 sm:px-3 py-2 sm:py-2.5 border border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:border-red-200 transition-all duration-300 text-xs font-semibold disabled:opacity-50 hover:shadow-lg group touch-manipulation min-h-[40px]"
            >
              <svg class="w-3.5 h-3.5 mr-1.5 group-hover:scale-105 transition-transform duration-300 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66 2.84.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span class="truncate text-xs">Google</span>
            </button>
          </div>
          
          <!-- Divider -->
          <div class="relative my-2 sm:my-2.5">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-xs">
              <span class="px-2 sm:px-3 bg-white text-gray-500 font-medium text-xs">or email</span>
            </div>
          </div>
          
          <!-- Signup Form -->
          <form @submit.prevent="handleSignup" class="space-y-2 sm:space-y-3">
            <!-- Name Fields -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              <div class="space-y-1">
                <label for="firstName" class="block text-xs font-bold text-gray-800">First Name</label>
                <input 
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  class="w-full px-2.5 py-2 sm:py-2.5 text-xs border rounded-lg transition-all duration-300 bg-white/80 placeholder-gray-400 border-gray-200 focus:border-red-500 focus:ring-red-100 hover:border-red-300 min-h-[40px]"
                  :class="{ 'border-red-300 focus:border-red-500 focus:ring-red-100': errors.firstName }"
                  placeholder="First"
                  :disabled="isLoading"
                  @blur="validateField('firstName')"
                  @input="clearError('firstName')"
                />
                <Transition name="error">
                  <p v-if="errors.firstName" class="text-red-500 text-xs font-semibold">{{ errors.firstName }}</p>
                </Transition>
              </div>
              
              <div class="space-y-1">
                <label for="lastName" class="block text-xs font-bold text-gray-800">Last Name</label>
                <input 
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  class="w-full px-2.5 py-2 sm:py-2.5 text-xs border rounded-lg transition-all duration-300 bg-white/80 placeholder-gray-400 border-gray-200 focus:border-red-500 focus:ring-red-100 hover:border-red-300 min-h-[40px]"
                  :class="{ 'border-red-300 focus:border-red-500 focus:ring-red-100': errors.lastName }"
                  placeholder="Last"
                  :disabled="isLoading"
                  @blur="validateField('lastName')"
                  @input="clearError('lastName')"
                />
                <Transition name="error">
                  <p v-if="errors.lastName" class="text-red-500 text-xs font-semibold">{{ errors.lastName }}</p>
                </Transition>
              </div>
            </div>
            
            <!-- Email -->
            <div class="space-y-1">
              <label for="email" class="block text-xs font-bold text-gray-800">Email</label>
              <div class="relative">
                <input 
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-2.5 py-2 sm:py-2.5 text-xs border rounded-lg transition-all duration-300 bg-white/80 placeholder-gray-400 border-gray-200 focus:border-red-500 focus:ring-red-100 hover:border-red-300 min-h-[40px]"
                  :class="{ 'border-red-300 focus:border-red-500 focus:ring-red-100': errors.email }"
                  placeholder="email@example.com"
                  :disabled="isLoading"
                  @blur="validateField('email')"
                  @input="clearError('email')"
                />
                <svg class="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <Transition name="error">
                <p v-if="errors.email" class="text-red-500 text-xs font-semibold">{{ errors.email }}</p>
              </Transition>
            </div>
            
            <!-- Password -->
            <div class="space-y-1">
              <label for="password" class="block text-xs font-bold text-gray-800">Password</label>
              <div class="relative">
                <input 
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="form.password"
                  class="w-full px-2.5 py-2 sm:py-2.5 pr-8 text-xs border rounded-lg transition-all duration-300 bg-white/80 placeholder-gray-400 border-gray-200 focus:border-red-500 focus:ring-red-100 hover:border-red-300 min-h-[40px]"
                  :class="{ 'border-red-300 focus:border-red-500 focus:ring-red-100': errors.password }"
                  placeholder="Create password"
                  :disabled="isLoading"
                  @blur="validateField('password')"
                  @input="clearError('password')"
                />
                <button 
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 touch-manipulation flex items-center justify-center"
                  :disabled="isLoading"
                >
                  <svg v-if="!showPassword" class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  <svg v-else class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                  </svg>
                </button>
              </div>
              
              <!-- Added comprehensive password requirements section -->
              <div v-if="form.password || passwordRequirementsVisible" class="space-y-1.5 mt-1.5">
                <!-- Password Requirements List -->
                <div class="bg-red-50/50 border border-red-100 rounded p-2 space-y-1">
                  <h4 class="text-xs font-bold text-gray-800">Requirements:</h4>
                  <div class="space-y-0.5">
                    <!-- Minimum Length -->
                    <div class="flex items-center space-x-1.5">
                      <div class="flex-shrink-0">
                        <svg v-if="passwordChecks.minLength" class="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div v-else class="h-2.5 w-2.5 border border-gray-300 rounded-full"></div>
                      </div>
                      <span class="text-xs" :class="passwordChecks.minLength ? 'text-red-600 font-semibold' : 'text-gray-600'">
                        8+ characters
                      </span>
                    </div>
                    
                    <!-- Uppercase Letter -->
                    <div class="flex items-center space-x-1.5">
                      <div class="flex-shrink-0">
                        <svg v-if="passwordChecks.hasUppercase" class="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div v-else class="h-2.5 w-2.5 border border-gray-300 rounded-full"></div>
                      </div>
                      <span class="text-xs" :class="passwordChecks.hasUppercase ? 'text-red-600 font-semibold' : 'text-gray-600'">
                        Uppercase (A-Z)
                      </span>
                    </div>
                    
                    <!-- Lowercase Letter -->
                    <div class="flex items-center space-x-1.5">
                      <div class="flex-shrink-0">
                        <svg v-if="passwordChecks.hasLowercase" class="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div v-else class="h-2.5 w-2.5 border border-gray-300 rounded-full"></div>
                      </div>
                      <span class="text-xs" :class="passwordChecks.hasLowercase ? 'text-red-600 font-semibold' : 'text-gray-600'">
                        Lowercase (a-z)
                      </span>
                    </div>
                    
                    <!-- Number -->
                    <div class="flex items-center space-x-1.5">
                      <div class="flex-shrink-0">
                        <svg v-if="passwordChecks.hasNumber" class="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div v-else class="h-2.5 w-2.5 border border-gray-300 rounded-full"></div>
                      </div>
                      <span class="text-xs" :class="passwordChecks.hasNumber ? 'text-red-600 font-semibold' : 'text-gray-600'">
                        Number (0-9)
                      </span>
                    </div>
                  </div>
                </div>
                
                <!-- Password Strength Indicator -->
                <div v-if="form.password" class="space-y-1">
                  <!-- Progress Bar -->
                  <div class="flex space-x-0.5">
                    <div 
                      v-for="i in 3" 
                      :key="i"
                      class="h-1 flex-1 rounded-full transition-all duration-300"
                      :class="passwordStrength >= i ? getStrengthColor(passwordStrength) : 'bg-gray-200'"
                    ></div>
                  </div>
                  
                  <!-- Strength Text -->
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-1">
                      <div class="w-1.5 h-1.5 rounded-full" :class="getStrengthColor(passwordStrength)"></div>
                      <p class="text-xs font-semibold" :class="getStrengthTextColor(passwordStrength)">
                        {{ getStrengthText(passwordStrength) }}
                      </p>
                    </div>
                    <div v-if="passwordStrength >= 3" class="flex items-center space-x-0.5">
                      <svg class="h-2.5 w-2.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class="text-xs text-red-600 font-semibold">Great!</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Transition name="error">
                <p v-if="errors.password" class="text-red-500 text-xs font-semibold">{{ errors.password }}</p>
              </Transition>
            </div>
            
            <!-- Confirm Password -->
            <div class="space-y-1">
              <label for="confirmPassword" class="block text-xs font-bold text-gray-800">Confirm</label>
              <div class="relative">
                <input 
                  :type="showConfirmPassword ? 'text' : 'password'"
                  id="confirmPassword"
                  v-model="form.confirmPassword"
                  class="w-full px-2.5 py-2 sm:py-2.5 pr-8 text-xs border rounded-lg transition-all duration-300 bg-white/80 placeholder-gray-400 min-h-[40px]"
                  :class="{
                    'border-red-300 focus:border-red-500 focus:ring-red-100': errors.confirmPassword,
                    'border-red-300 focus:border-red-500 focus:ring-red-100': form.confirmPassword && form.password === form.confirmPassword,
                    'border-gray-200 focus:border-red-500 focus:ring-red-100 hover:border-red-300': !errors.confirmPassword && !(form.confirmPassword && form.password === form.confirmPassword)
                  }"
                  placeholder="Confirm"
                  :disabled="isLoading"
                  @blur="validateField('confirmPassword')"
                  @input="clearError('confirmPassword')"
                />
                
                <button 
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 touch-manipulation flex items-center justify-center"
                  :disabled="isLoading"
                >
                  <svg v-if="!showConfirmPassword" class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  <svg v-else class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                  </svg>
                </button>
              </div>
              
              <!-- Password match indicator below the input field -->
              <div v-if="form.confirmPassword" class="flex items-center space-x-1 mt-1">
                <svg v-if="form.password === form.confirmPassword" class="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else class="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-xs font-semibold" :class="form.password === form.confirmPassword ? 'text-red-600' : 'text-red-500'">
                  {{ form.password === form.confirmPassword ? 'Match' : 'No match' }}
                </span>
              </div>
              
              <Transition name="error">
                <p v-if="errors.confirmPassword" class="text-red-500 text-xs font-semibold">{{ errors.confirmPassword }}</p>
              </Transition>
            </div>
            
            <!-- Terms -->
            <div class="flex items-start pt-1">
              <input 
                type="checkbox" 
                id="agreeTerms"
                v-model="form.agreeTerms" 
                class="mt-0.5 rounded border-gray-300 text-red-600 focus:ring-red-500 w-3 h-3 transition-colors duration-300 touch-manipulation"
                :class="{ 'border-red-300': errors.agreeTerms }"
                :disabled="isLoading"
                @change="clearError('agreeTerms')"
              >
              <label for="agreeTerms" class="ml-2 text-xs text-gray-600 leading-relaxed">
                I agree to the 
                <button type="button" class="text-red-600 hover:text-red-700 font-bold underline transition-colors duration-300 touch-manipulation">Terms</button> 
                and 
                <button type="button" class="text-red-600 hover:text-red-700 font-bold underline transition-colors duration-300 touch-manipulation">Privacy</button>
              </label>
            </div>
            <Transition name="error">
              <p v-if="errors.agreeTerms" class="text-red-500 text-xs font-semibold">{{ errors.agreeTerms }}</p>
            </Transition>
            
            <!-- Submit Button -->
            <button 
              type="submit"
              :disabled="isLoading || !isFormValid"
              class="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-2 sm:py-2.5 px-3 rounded-lg transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:-translate-y-0.5 text-xs group touch-manipulation min-h-[40px]"
            >
              <template v-if="isLoading">
                <div class="inline-flex items-center">
                  <div class="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent mr-1.5"></div>
                  <span class="text-xs">Creating...</span>
                </div>
              </template>
              <template v-else>
                <div class="inline-flex items-center justify-center">
                  <svg class="h-3.5 w-3.5 mr-1.5 group-hover:scale-105 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <span class="text-xs">Create</span>
                </div>
              </template>
            </button>
          </form>
          
          <!-- Sign In Link -->
          <div class="text-center mt-2 sm:mt-2.5 pt-2 border-t border-gray-100">
            <p class="text-xs text-gray-600">
              Have account? 
              <router-link 
                to="/login"
                class="text-red-600 hover:text-red-700 font-bold ml-1 transition-colors duration-300 touch-manipulation"
              >
                Log In
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '../../config/firebase.js'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'

const router = useRouter()

// Providers
const googleProvider = new GoogleAuthProvider()

// Form state
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})

// UI state
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const isLoading = ref(false)
const errors = ref({})
const errorMessage = ref('')
const successMessage = ref('')
const showToast = ref(false)
const toastMessage = ref('')

// Password requirements visibility and checks
const passwordRequirementsVisible = ref(false)

// Computed
const isFormValid = computed(() => {
  return form.value.firstName && 
         form.value.lastName && 
         form.value.email && 
         form.value.password && 
         form.value.confirmPassword &&
         form.value.password === form.value.confirmPassword &&
         form.value.agreeTerms &&
         Object.keys(errors.value).length === 0
})

// Password strength (3 levels instead of 4, removed special character requirement)
const passwordStrength = computed(() => {
  const password = form.value.password
  if (!password) return 0
  
  let strength = 0
  if (password.length >= 8) strength++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
  if (/\d/.test(password)) strength++
  
  return strength
})

// Individual password requirement checks
const passwordChecks = computed(() => {
  const password = form.value.password
  return {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
  }
})

// Get user role by checking collections
const getUserRole = async (uid) => {
  try {
    // Check if user is admin
    const adminDoc = await getDoc(doc(db, "admins", uid))
    if (adminDoc.exists()) {
      return "admin"
    }

    // Check if user is staff
    const staffDoc = await getDoc(doc(db, "staff", uid))
    if (staffDoc.exists()) {
      return "staff"
    }

    // Check if user is customer
    const customerDoc = await getDoc(doc(db, "customers", uid))
    if (customerDoc.exists()) {
      return "customer"
    }

    // Default to customer if not found in any collection
    return "customer"
  } catch (error) {
    console.error("Error getting user role:", error)
    return "customer"
  }
}

const sendWelcomeEmail = async (customerData) => {
  try {
    console.log('📧 Sending welcome email to:', customerData.email)
    
    // Using EmailJS to send emails directly to customers
    const emailData = {
      service_id: 'service_barcelona_paint',
      template_id: 'template_welcome',
      user_id: 'your_emailjs_public_key',
      template_params: {
        to_email: customerData.email,
        to_name: `${customerData.firstName} ${customerData.lastName}`,
        from_name: 'Barcelona Paint Center',
        subject: 'Welcome to Barcelona Paint Center!',
        message: `Hi ${customerData.firstName},

Welcome to Barcelona Paint Center! 🎨

Your account has been successfully created. We're excited to have you as part of our community.

What you can do now:
• Browse our extensive paint collection
• Get personalized color recommendations  
• Track your orders and purchase history
• Access exclusive member offers

Thank you for joining us!

Best regards,
The Barcelona Paint Center Team`
      }
    }
    
    console.log('📤 Sending email via EmailJS:', emailData)
    
    // Send email using EmailJS API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })
    
    if (response.ok) {
      console.log('✅ Welcome email sent successfully via EmailJS')
      return true
    } else {
      console.error('❌ Failed to send email via EmailJS:', response.statusText)
      return false
    }
    
  } catch (error) {
    console.error('❌ Failed to send welcome email:', error)
    return false
  }
}

// Password strength helpers - updated for 3 levels instead of 4
const getStrengthColor = (strength) => {
  switch (strength) {
    case 1: return 'bg-red-400'
    case 2: return 'bg-orange-500'
    case 3: return 'bg-red-500'
    default: return 'bg-gray-200'
  }
}

const getStrengthTextColor = (strength) => {
  switch (strength) {
    case 1: return 'text-red-500'
    case 2: return 'text-orange-600'
    case 3: return 'text-red-600'
    default: return 'text-gray-500'
  }
}

const getStrengthText = (strength) => {
  switch (strength) {
    case 0: return 'Enter password'
    case 1: return 'Weak Password'
    case 2: return 'Good Password'
    case 3: return 'Strong Password'
    default: return ''
  }
}

// Validation functions
const validateField = (field) => {
  switch (field) {
    case 'firstName':
      if (!form.value.firstName) {
        errors.value.firstName = 'Required'
      } else if (form.value.firstName.length < 2) {
        errors.value.firstName = 'Too short'
      }
      break
    case 'lastName':
      if (!form.value.lastName) {
        errors.value.lastName = 'Required'
      } else if (form.value.lastName.length < 2) {
        errors.value.lastName = 'Too short'
      }
      break
    case 'email':
      if (!form.value.email) {
        errors.value.email = 'Email required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errors.value.email = 'Invalid email'
      }
      break
    case 'password':
      if (!form.value.password) {
        errors.value.password = 'Password required'
      } else if (form.value.password.length < 8) {
        errors.value.password = 'Min 8 characters'
      }
      break
    case 'confirmPassword':
      if (!form.value.confirmPassword) {
        errors.value.confirmPassword = 'Please confirm password'
      } else if (form.value.password !== form.value.confirmPassword) {
        errors.value.confirmPassword = 'Passwords do not match'
      }
      break
    case 'agreeTerms':
      if (!form.value.agreeTerms) {
        errors.value.agreeTerms = 'Must agree to terms'
      }
      break
  }
}

const clearError = (field) => {
  if (errors.value[field]) {
    delete errors.value[field]
  }
  // Clear global messages when user starts typing
  errorMessage.value = ''
  successMessage.value = ''
}

const validateForm = () => {
  errors.value = {}
  validateField('firstName')
  validateField('lastName')
  validateField('email')
  validateField('password')
  validateField('confirmPassword')
  validateField('agreeTerms')
  return Object.keys(errors.value).length === 0
}

// Create customer document in customers collection
const createCustomerDocument = async (user, additionalData = {}) => {
  const customerData = {
    uid: user.uid,
    email: user.email,
    firstName: additionalData.firstName || user.displayName?.split(" ")[0] || "",
    lastName: additionalData.lastName || user.displayName?.split(" ").slice(1).join(" ") || "",
    role: "customer",
    createdAt: new Date().toISOString(),
    isActive: true,
    memberSince: new Date().toISOString(),
    totalOrders: 0,
    totalSpent: 0,
    loyaltyPoints: 0,
    savedColors: [],
    preferences: {
      newsletter: true,
      promotions: true,
      notifications: true
    },
    ...additionalData
  }

  // Save to customers collection
  await setDoc(doc(db, "customers", user.uid), customerData)
  console.log('✅ Customer document created in customers collection')
  
  return customerData
}

const handleSignup = async () => {
  console.log('🚀 Starting customer signup process...')
  
  if (!validateForm()) {
    errorMessage.value = 'Please fix the errors above'
    return
  }
  
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    console.log('📧 Creating customer account with email:', form.value.email)
    
    const userCredential = await createUserWithEmailAndPassword(auth, form.value.email, form.value.password)
    const user = userCredential.user

    console.log('✅ Firebase Auth user created successfully:', user.uid)

    // Create customer document in customers collection
    console.log('💾 Creating customer document in Firestore customers collection...')
    const customerData = await createCustomerDocument(user, {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      signupMethod: 'email'
    })
    
    // Send welcome email
    const emailSent = await sendWelcomeEmail(customerData)
    
    // Show success toast with email status
    if (emailSent) {
      toastMessage.value = '🎉 Account created! Welcome email sent to your inbox.'
    } else {
      toastMessage.value = '🎉 Account created successfully! Welcome to Barcelona Paint Center!'
    }
    
    showToast.value = true
    
    // Redirect to login page after a short delay
    setTimeout(() => {
      showToast.value = false
      console.log('🔄 Redirecting to login page...')
      router.push('/login')
    }, 3000)
    
  } catch (error) {
    console.error('❌ Customer signup error:', error)
    
    let message = 'Failed to create customer account. Please try again.'
    
    if (error.code === 'auth/email-already-in-use') {
      message = 'Email already in use. Please try logging in instead.'
    } else if (error.code === 'auth/weak-password') {
      message = 'Password is too weak. Please choose a stronger password.'
    } else if (error.code === 'auth/invalid-email') {
      message = 'Invalid email address.'
    } else if (error.code === 'auth/network-request-failed') {
      message = 'Network error. Please check your internet connection.'
    }
    
    errorMessage.value = message
  } finally {
    isLoading.value = false
  }
}

const handleSocialSignup = async (provider) => {
  console.log(`🚀 Starting ${provider} customer signup...`)
  
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    let result
    if (provider === 'google') {
      result = await signInWithPopup(auth, googleProvider)
    }
    
    const user = result.user
    console.log(`✅ ${provider} signup successful:`, user.uid)

    // Check if customer already exists in customers collection
    const customerDoc = await getDoc(doc(db, "customers", user.uid))
    let customerData
    let isNewCustomer = false
    
    if (!customerDoc.exists()) {
      console.log('💾 Creating new customer document in customers collection...')
      customerData = await createCustomerDocument(user, {
        signupMethod: provider,
        provider: provider
      })
      isNewCustomer = true
    } else {
      console.log('👤 Customer already exists in customers collection')
      customerData = customerDoc.data()
    }
    
    // Send welcome email only for new customers
    let emailSent = false
    if (isNewCustomer) {
      emailSent = await sendWelcomeEmail(customerData)
    }
    
    // Show success toast
    if (isNewCustomer && emailSent) {
      toastMessage.value = `🎉 Account created with ${provider.charAt(0).toUpperCase() + provider.slice(1)}! Welcome email sent.`
    } else if (isNewCustomer) {
      toastMessage.value = `🎉 Successfully signed up with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`
    } else {
      toastMessage.value = `✅ Successfully signed in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`
    }
    
    showToast.value = true
    
    // Redirect to login page after a short delay
    setTimeout(() => {
      showToast.value = false
      console.log('🔄 Redirecting to login page...')
      router.push('/login')
    }, 3000)
    
  } catch (error) {
    console.error(`❌ ${provider} customer signup error:`, error)
    
    let message = `Failed to sign up with ${provider}. Please try again.`
    
    if (error.code === 'auth/popup-closed-by-user') {
      message = 'Sign up was cancelled.'
    } else if (error.code === 'auth/popup-blocked') {
      message = 'Popup was blocked. Please allow popups and try again.'
    } else if (error.code === 'auth/network-request-failed') {
      message = 'Network error. Please check your internet connection.'
    }
    
    errorMessage.value = message
  } finally {
    isLoading.value = false
  }
}

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
input:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--tw-ring-color);
}

.error-enter-active, .error-leave-active {
  transition: all 0.3s ease;
}

.error-enter-from, .error-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Updated gradient classes to use Barcelona Paint Center red/orange theme */
.bg-admin-primary-gradient {
  background: linear-gradient(135deg, #dc2626, #ea580c);
}

/* Added floating animation for paint drops */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Enhanced responsive design with better touch targets */
@media (max-width: 640px) {
  .touch-manipulation {
    touch-action: manipulation;
  }
}
</style>
