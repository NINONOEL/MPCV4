<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
    <!-- Header Section -->
    <div class="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
        <div class="text-center">
          <!-- Reduced header text sizes significantly -->
          <h1 class="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-1 leading-tight">
            Transform Your Space with Color
          </h1>
          <p class="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
            Explore our range of premium paints, tailored for every project.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6">
      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-8 sm:py-12 md:py-16">
        <div class="relative">
          <!-- Reduced loading spinner size -->
          <div class="w-8 h-8 sm:w-10 sm:h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <PaletteIcon class="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
          </div>
        </div>
        <p class="mt-3 text-xs sm:text-sm text-gray-600 text-center px-4">Loading our premium paint collection...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 text-center mx-2 sm:mx-0">
        <!-- Reduced error icon size -->
        <AlertTriangleIcon class="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mx-auto mb-2 sm:mb-3" />
        <h3 class="text-sm sm:text-base font-semibold text-red-800 mb-2">Unable to Load Products</h3>
        <p class="text-xs sm:text-sm text-red-600 mb-3 px-2">{{ error }}</p>
        <button
          @click="fetchProducts"
          class="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xs sm:text-sm touch-manipulation"
        >
          <RefreshCwIcon class="w-3 h-3" />
          Try Again
        </button>
      </div>

      <!-- Main Content -->
      <div v-else>
        <!-- Filter Section -->
        <!-- Reduced filter section padding and spacing -->
        <div class="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-orange-100 mx-1 sm:mx-0">
          <h2 class="text-base sm:text-lg font-bold text-gray-900 mb-3 text-center">Find Your Perfect Paint</h2>
          
          <!-- Mobile-First Filter Layout -->
          <div class="space-y-3">
            <!-- Search - Full width on mobile -->
            <div class="relative w-full">
              <SearchIcon class="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search products..."
                class="w-full pl-8 pr-3 py-2 sm:py-1.5 border border-orange-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-sm touch-manipulation"
              />
            </div>

            <!-- Category Filter - Responsive buttons -->
            <!-- Reduced button sizes and spacing -->
            <div class="flex flex-wrap gap-1.5 justify-center">
              <button
                @click="filterCategory = ''"
                :class="[
                  'px-2.5 sm:px-3 py-1.5 sm:py-1.5 rounded-full font-medium transition-all duration-200 text-xs sm:text-sm touch-manipulation min-h-[36px] sm:min-h-[32px]',
                  filterCategory === '' 
                    ? 'bg-orange-500 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-orange-200'
                ]"
              >
                All Categories
              </button>
              <button
                @click="filterCategory = 'interior'"
                :class="[
                  'px-2.5 sm:px-3 py-1.5 sm:py-1.5 rounded-full font-medium transition-all duration-200 text-xs sm:text-sm touch-manipulation min-h-[36px] sm:min-h-[32px]',
                  filterCategory === 'interior' 
                    ? 'bg-orange-500 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-orange-200'
                ]"
              >
                Interior
              </button>
              <button
                @click="filterCategory = 'exterior'"
                :class="[
                  'px-2.5 sm:px-3 py-1.5 sm:py-1.5 rounded-full font-medium transition-all duration-200 text-xs sm:text-sm touch-manipulation min-h-[36px] sm:min-h-[32px]',
                  filterCategory === 'exterior' 
                    ? 'bg-orange-500 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-orange-200'
                ]"
              >
                Exterior
              </button>
            </div>
          </div>
        </div>

        <!-- Products Grid - Fully Responsive -->
        <div v-if="filteredProducts.length === 0" class="text-center py-8 sm:py-12 px-4">
          <!-- Reduced no products icon size -->
          <PackageIcon class="w-8 h-8 sm:w-10 sm:h-10 text-gray-300 mx-auto mb-3" />
          <h3 class="text-base sm:text-lg font-semibold text-gray-600 mb-2">No Products Found</h3>
          <p class="text-xs sm:text-sm text-gray-500">Try adjusting your filters or search terms.</p>
        </div>

        <!-- Dynamic Grid Layout -->
        <!-- Very minimal reduction in grid columns to make boxes slightly larger -->
        <div v-else class="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-7 gap-2 sm:gap-3">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden border border-orange-100 group flex flex-col h-full"
          >
            <!-- Product Image Placeholder - Square Box Shape -->
            <div class="aspect-square bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative overflow-hidden p-2 sm:p-3 flex-shrink-0">
              <!-- Display actual product image if available, otherwise show placeholder -->
              <div v-if="product.image" class="w-full h-full rounded overflow-hidden">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  @error="handleImageError"
                />
              </div>
              <!-- Placeholder for product image when no image is available -->
              <div v-else class="w-full h-full flex items-center justify-center bg-white/20 rounded border border-dashed border-orange-200">
                <PaletteIcon class="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Product Info - Added flex-1 and flex flex-col to ensure consistent height and push price to bottom -->
            <div class="p-2 sm:p-3 flex flex-col flex-1">
              <div class="flex-1">
                <h3 class="text-xs sm:text-sm font-bold text-gray-900 mb-1 line-clamp-2">
                  {{ product.name }}
                </h3>
                <p class="text-xs text-gray-500 uppercase tracking-wide">
                  {{ product.category }}
                </p>
              </div>

              <!-- Price and stocks section now uses mt-auto to stick to bottom -->
              <div class="mt-auto pt-2 border-t border-gray-100">
                <div class="flex flex-col gap-1">
                  <span class="text-xs sm:text-sm font-bold text-orange-600">
                    ₱{{ product.price ? product.price.toFixed(2) : '0.00' }}
                  </span>
                  <span
                    :class="[
                      'px-1.5 py-0.5 rounded-full text-xs font-medium self-start',
                      product.stockLevel > 10 
                        ? 'bg-green-100 text-green-800' 
                        : product.stockLevel > 0 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                    ]"
                  >
                    {{ product.stockLevel > 0 ? `${product.stockLevel} stocks` : '0 stocks' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Products Summary - Responsive -->
        <!-- Reduced summary section size and spacing -->
        <div v-if="filteredProducts.length > 0" class="mt-6 sm:mt-8 text-center">
          <div class="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-orange-100 inline-block mx-2 sm:mx-0">
            <p class="text-xs sm:text-sm text-gray-600">
              Showing <span class="font-semibold text-orange-600">{{ filteredProducts.length }}</span> 
              of <span class="font-semibold text-orange-600">{{ availableProducts.length }}</span> available products
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { 
  collection, 
  query, 
  onSnapshot,
  where
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import { 
  PaletteIcon,
  SearchIcon,
  PackageIcon,
  AlertTriangleIcon,
  RefreshCwIcon
} from 'lucide-vue-next'

// State
const products = ref([])
const loading = ref(true)
const error = ref(null)
const searchQuery = ref('')
const filterCategory = ref('')

// Firebase listener cleanup
let unsubscribe = null

// Computed properties
const availableProducts = computed(() => {
  return products.value.filter(product => product.stockLevel > 0)
})

const filteredProducts = computed(() => {
  let filtered = [...availableProducts.value]

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.sku?.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query)
    )
  }

  // Category filter
  if (filterCategory.value) {
    filtered = filtered.filter(product => product.category === filterCategory.value)
  }

  return filtered
})

// Methods
const fetchProducts = async () => {
  try {
    loading.value = true
    error.value = null
    
    if (!db) {
      throw new Error('Database not initialized')
    }

    const productsRef = collection(db, 'products')
    const q = query(productsRef)
    
    // Clean up existing listener
    if (unsubscribe) {
      unsubscribe()
    }

    // Set up real-time listener
    unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        products.value = snapshot.docs.map(doc => {
          const data = doc.data()
          const stockValue = data.stock !== undefined ? Number(data.stock) : 
                            data.stockLevel !== undefined ? Number(data.stockLevel) : 0
          
          return {
            id: doc.id,
            ...data,
            price: Number(data.price) || 0,
            unitPrice: Number(data.unitPrice) || 0,
            stockLevel: stockValue,
            stock: stockValue,
            image: data.image || null
          }
        })
        
        loading.value = false
        console.log('Products loaded:', products.value.length)
      },
      (err) => {
        console.error('Error fetching products:', err)
        error.value = 'Failed to load products. Please try again.'
        loading.value = false
      }
    )
  } catch (err) {
    console.error('Error setting up products listener:', err)
    error.value = 'Database connection failed. Please refresh the page.'
    loading.value = false
  }
}

const handleImageError = (event) => {
  console.log('[v0] Image failed to load:', event.target.src)
  // Hide the image container and show placeholder instead
  event.target.parentElement.style.display = 'none'
}

// Lifecycle
onMounted(() => {
  fetchProducts()
})

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe()
  }
})
</script>

<style scoped>
/* Custom responsive utilities */
@media (min-width: 475px) {
  .xs\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .xs\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .xs\:h-24 {
    height: 6rem;
  }
  .xs\:w-7 {
    width: 1.75rem;
  }
  .xs\:h-7 {
    height: 1.75rem;
  }
  .xs\:flex-row {
    flex-direction: row;
  }
  .xs\:items-baseline {
    align-items: baseline;
  }
  .xs\:gap-1 {
    gap: 0.25rem;
  }
}

/* Line clamp utility with vendor prefix fix */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2; /* Added standard property for compatibility */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Touch optimization */
.touch-manipulation {
  touch-action: manipulation;
}

/* Added aspect-square utility for perfect square boxes */
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>
