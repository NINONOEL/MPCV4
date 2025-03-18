<template>
    <div v-if="show" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl w-full max-w-lg">
        <div class="p-6 border-b border-navy/10">
          <h3 class="text-xl font-bold text-navy">Record New Sale</h3>
        </div>
        
        <form @submit.prevent="handleSubmit" class="p-6">
          <div class="space-y-4">
            <!-- Customer Information -->
            <div>
              <h4 class="text-sm font-medium text-navy mb-3">Customer Information</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-navy/60 mb-1">Customer Name</label>
                  <input 
                    type="text"
                    v-model="saleForm.customerName"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                  />
                </div>
                <div>
                  <label class="block text-sm text-navy/60 mb-1">Customer Email</label>
                  <input 
                    type="email"
                    v-model="saleForm.customerEmail"
                    class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                  />
                </div>
              </div>
            </div>
  
            <!-- Products -->
            <div>
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-medium text-navy">Products</h4>
                <button 
                  type="button"
                  @click="addProductToSale"
                  class="text-sm text-navy flex items-center gap-1"
                >
                  <PlusIcon class="w-4 h-4" />
                  Add Product
                </button>
              </div>
              
              <div v-for="(product, index) in saleForm.products" :key="index" class="mb-3 p-3 border border-navy/10 rounded-lg">
                <div class="flex justify-between mb-2">
                  <h5 class="text-sm font-medium text-navy">Product {{ index + 1 }}</h5>
                  <button 
                    type="button"
                    @click="removeProductFromSale(index)"
                    class="text-red-600"
                  >
                    <XIcon class="w-4 h-4" />
                  </button>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div class="md:col-span-3">
                    <label class="block text-xs text-navy/60 mb-1">Product</label>
                    <div class="relative">
                      <select 
                        v-model="product.id"
                        required
                        class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                        @change="updateProductDetails(index)"
                      >
                        <option value="">Select a product</option>
                        <option v-for="p in availableProducts" :key="p.id" :value="p.id">
                          {{ p.name }} - {{ formatCurrency(p.price) }} 
                          (Stock: {{ p.stock || 0 }})
                        </option>
                      </select>
                      <!-- Stock indicator -->
                      <div v-if="product.id && product.stock !== undefined" 
                           class="absolute right-10 top-1/2 transform -translate-y-1/2 px-2 py-0.5 rounded-full text-xs font-medium"
                           :class="{
                             'bg-green-100 text-green-800': product.stock > 10,
                             'bg-yellow-100 text-yellow-800': product.stock > 0 && product.stock <= 10,
                             'bg-red-100 text-red-800': product.stock <= 0
                           }">
                        Stock: {{ product.stock }}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs text-navy/60 mb-1">Quantity</label>
                    <input 
                      type="number"
                      v-model.number="product.quantity"
                      min="1"
                      required
                      class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      @input="calculateTotal"
                    />
                  </div>
                  <div>
                    <label class="block text-xs text-navy/60 mb-1">Price</label>
                    <input 
                      type="number"
                      v-model.number="product.price"
                      min="0"
                      step="0.01"
                      required
                      class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      @input="calculateTotal"
                    />
                  </div>
                  <div>
                    <label class="block text-xs text-navy/60 mb-1">Subtotal</label>
                    <input 
                      type="text"
                      :value="formatCurrency(product.price * product.quantity)"
                      readonly
                      class="w-full px-3 py-2 rounded-lg border border-navy/10 bg-gray-50"
                    />
                  </div>
                </div>
                <!-- Stock warning -->
                <div v-if="product.id && product.quantity > product.stock && product.stock !== undefined" 
                     class="mt-2 text-xs text-red-600 flex items-center">
                  <AlertTriangleIcon class="w-3 h-3 mr-1" />
                  Warning: Requested quantity exceeds available stock ({{ product.stock }})
                </div>
              </div>
              
              <div v-if="saleForm.products.length === 0" class="text-center p-4 border border-dashed border-navy/10 rounded-lg">
                <p class="text-navy/60">No products added yet</p>
              </div>
            </div>
  
            <!-- Sale Details -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm text-navy/60 mb-1">Status</label>
                <select 
                  v-model="saleForm.status"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                >
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                <label class="block text-sm text-navy/60 mb-1">Payment Method</label>
                <select 
                  v-model="saleForm.paymentMethod"
                  required
                  class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                >
                  <option value="cash">Cash</option>
                  <option value="credit_card">Credit Card</option>
                  <option value="bank_transfer">Bank Transfer</option>
                  <option value="gcash">GCash</option>
                </select>
              </div>
            </div>
  
            <!-- Override Stock Check -->
            <div class="flex items-center gap-2 mt-4">
              <input 
                type="checkbox"
                id="override-stock"
                v-model="overrideStockCheck"
                class="rounded border-navy/10"
              />
              <label for="override-stock" class="text-sm text-navy/60">
                Override stock validation (Admin only)
              </label>
            </div>
  
            <!-- Total -->
            <div class="border-t border-navy/10 pt-4">
              <div class="flex justify-between items-center">
                <span class="text-navy font-medium">Total Amount:</span>
                <span class="text-xl font-bold text-navy">{{ formatCurrency(saleForm.total) }}</span>
              </div>
            </div>
          </div>
  
          <div class="flex justify-end gap-3 mt-6">
            <button 
              type="button"
              @click="$emit('close')"
              class="px-4 py-2 border border-navy/10 rounded-lg text-navy hover:bg-navy/5"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="flex items-center gap-2">
                <LoaderIcon class="w-5 h-5 animate-spin" />
                Saving...
              </span>
              <span v-else>Record Sale</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, onMounted, watch } from 'vue';
  import { collection, getDocs, doc, getDoc, updateDoc, serverTimestamp, addDoc } from 'firebase/firestore';
  import { db } from '../../config/firebase';
  import { checkProductStock } from '../../utils/salesUtils';
  // Import other components and icons as needed
  
  const props = defineProps({
    show: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['close', 'sale-added', 'submit']);
  
  // State
  const saleForm = ref({
    customerName: '',
    customerEmail: '',
    products: [],
    total: 0,
    status: 'completed',
    paymentMethod: 'cash'
  });
  
  const availableProducts = ref([]);
  const isSubmitting = ref(false);
  const overrideStockCheck = ref(false);
  const stockWarnings = ref({});
  
  // Fetch available products with stock information
  const fetchAvailableProducts = async () => {
    try {
      const productsRef = collection(db, 'products');
      const snapshot = await getDocs(productsRef);
      
      availableProducts.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // Ensure stock is a number
        stock: doc.data().stock || 0
      }));
      
      console.log('Available products loaded:', availableProducts.value.length);
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Failed to load products. Please try again.');
    }
  };
  
  // Add product to sale
  const addProductToSale = () => {
    saleForm.value.products.push({
      id: '',
      name: '',
      quantity: 1,
      price: 0,
      category: '',
      stock: 0
    });
  };
  
  // Remove product from sale
  const removeProductFromSale = (index) => {
    saleForm.value.products.splice(index, 1);
    calculateTotal();
  };
  
  // Update product details when product is selected
  const updateProductDetails = async (index) => {
    const productId = saleForm.value.products[index].id
    if (!productId) return
    
    // Get the latest product data directly from Firestore to ensure stock is current
    try {
      const productRef = doc(db, 'products', productId)
      const productDoc = await getDoc(productRef)
      
      if (productDoc.exists()) {
        const productData = productDoc.data()
        
        // Check both stock fields
        const currentStock = productData.stock !== undefined ? Number(productData.stock) : 
                            productData.stockLevel !== undefined ? Number(productData.stockLevel) : 0
        
        saleForm.value.products[index] = {
          id: productId,
          name: productData.name || 'Unknown Product',
          price: Number(productData.price) || 0,
          category: productData.category || 'Uncategorized',
          quantity: 1,
          stock: currentStock
        }
        
        console.log(`Selected product: ${productData.name}, price: ${productData.price}, stock: ${currentStock}`)
        
        // Show stock information to the user
        if (currentStock <= 0) {
          alert(`Warning: ${productData.name} is out of stock. You can still add it with the override option.`)
        } else if (currentStock < 10) {
          alert(`Warning: ${productData.name} has low stock (${currentStock} units remaining).`)
        }
        
        calculateTotal()
      }
    } catch (error) {
      console.error('Error fetching product details:', error)
    }
  }
  
  // Calculate total
  const calculateTotal = () => {
    saleForm.value.total = saleForm.value.products.reduce((sum, product) => {
      return sum + (product.price * product.quantity);
    }, 0);
  };
  
  // Format currency
  const formatCurrency = (value) => {
    return `₱${Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };
  
  // Handle form submission
  const handleSubmit = async () => {
    try {
      isSubmitting.value = true
      console.log("Processing sale submission...")
      
      // Validate form
      if (saleForm.value.products.length === 0) {
        alert('Please add at least one product')
        isSubmitting.value = false
        return
      }
  
      // Validate stock levels before proceeding (only if override is not checked)
      if (!overrideStockCheck.value) {
        for (const product of saleForm.value.products) {
          if (product.id && product.id !== 'sample-product') {
            try {
              const productRef = doc(db, 'products', product.id)
              const productDoc = await getDoc(productRef)
              
              if (!productDoc.exists()) {
                alert(`Product ${product.name} not found in inventory`)
                isSubmitting.value = false
                return
              }
  
              // Check both stock and stockLevel fields
              const productData = productDoc.data()
              const currentStock = productData.stock !== undefined ? Number(productData.stock) : 
                                  productData.stockLevel !== undefined ? Number(productData.stockLevel) : 0
              
              console.log(`Checking stock for ${product.name}: ${currentStock} available, ${product.quantity} requested`)
              
              if (currentStock < product.quantity) {
                alert(`Insufficient stock for ${product.name}. Available: ${currentStock}, Requested: ${product.quantity}`)
                isSubmitting.value = false
                return
              }
            } catch (error) {
              console.error(`Error checking stock for product ${product.id}:`, error)
              alert(`Error checking stock: ${error.message}`)
              isSubmitting.value = false
              return
            }
          }
        }
      } else {
        console.log("Stock validation bypassed with override")
      }
      
      // Generate order ID if not provided
      const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`
      
      // Generate customer ID if not provided
      const customerId = `CUST-${Date.now()}`
      
      // Prepare sale data
      const saleData = {
        orderId: orderId,
        customerId: customerId,
        customerName: saleForm.value.customerName,
        customerEmail: saleForm.value.customerEmail,
        products: saleForm.value.products.map(p => ({
          id: p.id,
          name: p.name,
          quantity: Number(p.quantity),
          price: Number(p.price),
          category: p.category || 'Uncategorized'
        })),
        total: Number(saleForm.value.total),
        status: saleForm.value.status,
        paymentMethod: saleForm.value.paymentMethod,
        date: serverTimestamp()
      }
      
      console.log("Sale data prepared:", saleData)
      
      // Update inventory stock for each product FIRST (even with override)
      console.log("Updating inventory stock levels...")
      for (const product of saleForm.value.products) {
        if (product.id && product.id !== 'sample-product') {
          try {
            const productRef = doc(db, 'products', product.id)
            const productDoc = await getDoc(productRef)
            
            if (productDoc.exists()) {
              // Get current stock (check both fields)
              const productData = productDoc.data()
              const currentStock = productData.stock !== undefined ? Number(productData.stock) : 
                                  productData.stockLevel !== undefined ? Number(productData.stockLevel) : 0
              
              const newStock = Math.max(0, currentStock - product.quantity)
              
              // Update BOTH stock fields for compatibility
              await updateDoc(productRef, {
                stock: newStock,
                stockLevel: newStock,
                lastUpdated: serverTimestamp()
              })
              
              console.log(`Updated stock for product ${product.name}: ${currentStock} → ${newStock}`)
            }
          } catch (error) {
            console.error(`Error updating stock for product ${product.id}:`, error)
            alert(`Error updating stock: ${error.message}`)
            isSubmitting.value = false
            return
          }
        }
      }
  
      try {
        // Add sale to Firestore AFTER stock updates
        const salesRef = collection(db, 'sales')
        const docRef = await addDoc(salesRef, saleData)
        
        console.log('Sale added successfully with ID:', docRef.id)
        
        // Also add to orders collection for dashboard compatibility
        const ordersRef = collection(db, 'orders')
        await addDoc(ordersRef, {
          ...saleData,
          totalAmount: saleData.total,
          items: saleData.products
        })
        
        // Show success message
        alert('Sale recorded successfully and inventory updated!')
        
        // Reset form and close modal
        resetForm()
        emit('sale-added')
        emit('close')
      } catch (error) {
        console.error('Error adding sale to database:', error)
        alert(`Failed to record sale: ${error.message}`)
        isSubmitting.value = false
        return
      }
      
    } catch (error) {
      console.error('Error processing sale:', error)
      alert('Failed to process sale: ' + error.message)
    } finally {
      isSubmitting.value = false
    }
  }
  
  // Reset form
  const resetForm = () => {
    saleForm.value = {
      customerName: '',
      customerEmail: '',
      products: [],
      total: 0,
      status: 'completed',
      paymentMethod: 'cash'
    };
    overrideStockCheck.value = false;
    stockWarnings.value = {};
  };
  
  // Watch for changes in product quantity to validate stock
  watch(() => saleForm.value.products, (products) => {
    products.forEach((product, index) => {
      if (product.id && product.quantity > product.stock && !overrideStockCheck.value) {
        stockWarnings.value[product.id] = `Requested quantity (${product.quantity}) exceeds available stock (${product.stock})`;
      } else if (product.id) {
        stockWarnings.value[product.id] = '';
      }
    });
  }, { deep: true });
  
  // Fetch products when modal is shown
  watch(() => props.show, (isShown) => {
    if (isShown) {
      fetchAvailableProducts();
    }
  });
  
  // Fetch products on mount
  onMounted(() => {
    if (props.show) {
      fetchAvailableProducts();
    }
  });
  
  // Expose functions and variables to template
  defineExpose({
    saleForm,
    isSubmitting,
    overrideStockCheck,
    stockWarnings,
    addProductToSale,
    removeProductFromSale,
    updateProductDetails,
    calculateTotal,
    formatCurrency,
    handleSubmit,
    resetForm
  });
  </script>
  
  