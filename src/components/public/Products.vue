<template>
  <div class="min-h-screen bg-gradient-to-b from-cream-50 via-white to-cream-50">
    <!-- Navigation Header -->
    <div class="bg-white/70 backdrop-blur-md border-b border-cream-200 sticky top-0 z-20 shadow-sm">
      <div class="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 py-2">
        <button
          @click="$router.push({ name: 'CustomerPortal' })"
          class="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-cream-50 border border-cream-200 rounded-full transition-all duration-300 hover:shadow-md hover:border-orange-300"
        >
          <ChevronLeftIcon class="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Back to Portal</span>
        </button>
      </div>
    </div>

    <!-- Hero Header Section -->
    <div class="bg-gradient-to-r from-cream-50 via-white to-peach-50 border-b border-cream-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4">
        <div class="text-center">
          <h1 class="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-orange-700 to-gray-900 bg-clip-text text-transparent mb-1 leading-tight">
            Transform Your Space with Color
          </h1>
          <p class="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of premium paints, expertly crafted for every project
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4">
      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-8">
        <div class="relative">
          <div class="w-10 h-10 border-4 border-cream-200 border-t-orange-500 rounded-full animate-spin"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <PaletteIcon class="w-4 h-4 text-orange-500" />
          </div>
        </div>
        <p class="mt-3 text-gray-600 text-xs sm:text-sm text-center">Loading our premium paint collection...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 text-center shadow-sm">
        <AlertTriangleIcon class="w-6 h-6 text-red-500 mx-auto mb-2" />
        <h3 class="text-sm sm:text-base font-semibold text-red-800 mb-1">Unable to Load Products</h3>
        <p class="text-red-600 mb-3 text-xs sm:text-sm">{{ error }}</p>
        <button
          @click="fetchProducts"
          class="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium text-xs sm:text-sm"
        >
          <RefreshCwIcon class="w-3 h-3 sm:w-4 sm:h-4" />
          Try Again
        </button>
      </div>

      <!-- Main Content -->
      <div v-else>
        <!-- Filter Section - Enhanced Design -->
        <div class="bg-white rounded-xl p-3 sm:p-4 mb-4 border border-cream-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 class="text-base sm:text-lg font-bold text-gray-900 mb-3 text-center">Find Your Perfect Paint</h2>
          
          <div class="space-y-3">
            <!-- Search Input - Premium Style -->
            <div class="relative">
              <SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by name, color, or category..."
                class="w-full pl-10 pr-3 py-2 border border-cream-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-cream-50 text-xs sm:text-sm text-gray-900 placeholder-gray-500 transition-all duration-300 shadow-sm hover:shadow-md"
              />
            </div>

            <!-- Category Filter Buttons - Enhanced -->
            <div class="flex flex-wrap gap-2 justify-center">
              <button
                @click="filterCategory = ''"
                :class="[
                  'px-4 py-1.5 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm',
                  filterCategory === '' 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl scale-105' 
                    : 'bg-white text-gray-700 hover:bg-cream-50 border border-cream-200 hover:border-orange-300 hover:shadow-md'
                ]"
              >
                All Products
              </button>
              <button
                v-for="(label, key) in categoryOptions"
                :key="key"
                @click="filterCategory = key"
                :class="[
                  'px-4 py-1.5 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm',
                  filterCategory === key 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl scale-105' 
                    : 'bg-white text-gray-700 hover:bg-cream-50 border border-cream-200 hover:border-orange-300 hover:shadow-md'
                ]"
              >
                {{ label }}
              </button>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div v-if="filteredProducts.length === 0" class="text-center py-8">
          <PackageIcon class="w-10 h-10 text-gray-300 mx-auto mb-2" />
          <h3 class="text-sm sm:text-base font-semibold text-gray-600 mb-1">No Products Found</h3>
          <p class="text-xs sm:text-sm text-gray-500">Try adjusting your filters or search terms.</p>
        </div>

        <!-- Dynamic Grid Layout -->
        <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="group bg-white rounded-lg overflow-hidden border border-cream-200 shadow-sm hover:shadow-lg transition-all duration-500 hover:border-orange-300 flex flex-col h-full transform hover:-translate-y-0.5"
          >
            <!-- Product Image Container -->
            <div class="aspect-square bg-gradient-to-br from-cream-100 via-peach-50 to-orange-100 flex items-center justify-center relative overflow-hidden">
              <div v-if="product.image" class="w-full h-full">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  @error="handleImageError"
                />
              </div>
              <div v-else class="w-full h-full flex items-center justify-center">
                <PaletteIcon class="w-6 h-6 text-orange-300 group-hover:scale-125 transition-transform duration-500" />
              </div>
              <!-- Overlay Gradient on Hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <!-- Product Info -->
            <div class="p-2.5 flex flex-col flex-1">
              <div class="flex-1">
                <h3 class="text-xs sm:text-sm font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                  {{ product.name }}
                </h3>
                <p class="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  {{ product.category }}
                </p>
              </div>

              <!-- Price Section -->
              <div class="mt-2 pt-2 border-t border-cream-200">
                <span class="text-sm sm:text-base font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  ₱{{ product.price ? product.price.toFixed(2) : '0.00' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Products Summary -->
        <div v-if="filteredProducts.length > 0" class="mt-6 text-center">
          <div class="bg-gradient-to-r from-cream-50 to-peach-50 rounded-lg p-3 border border-cream-200 inline-block shadow-sm">
            <p class="text-xs sm:text-sm text-gray-700 font-medium">
              Showing <span class="text-orange-600 font-bold">{{ filteredProducts.length }}</span> 
              of <span class="text-orange-600 font-bold">{{ availableProducts.length }}</span> products
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
  RefreshCwIcon,
  ChevronLeftIcon // Added ChevronLeftIcon import
} from 'lucide-vue-next'

// State
const products = ref([])
const loading = ref(true)
const error = ref(null)
const searchQuery = ref('')
const filterCategory = ref('')

const categoryOptions = {
  'interior': 'Interior Paint',
  'exterior': 'Exterior Paint',
  'primer': 'Primers',
  'specialty': 'Specialty Paints',
  'house-interior': 'House Interior',
  'house-exterior': 'House Exterior',
  'automotive': 'Automotive Paints',
  'wood-coatings': 'Wood Coatings',
  'metal-coatings': 'Metal Coatings',
  'waterproofing': 'Waterproofing Products',
  'thinners-solvents': 'Thinners & Solvents',
  'accessories-tools': 'Accessories & Tools'
}

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
/* Color Variables */
:root {
  --cream-50: #FAF8F3;
  --cream-100: #F5F1E8;
  --cream-200: #EDE7DC;
  --peach-50: #FEF5F0;
  --orange-400: #FB923C;
  --orange-500: #F97316;
  --orange-600: #EA580C;
}

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

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Touch optimization */
.touch-manipulation {
  touch-action: manipulation;
}

/* Aspect square utility */
.aspect-square {
  aspect-ratio: 1 / 1;
}

/* Smooth transitions for all interactive elements */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Gradient text effect */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
