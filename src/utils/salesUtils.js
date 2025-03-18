import {
    doc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    Timestamp,
    updateDoc,
    serverTimestamp,
  } from "firebase/firestore"
  import { db } from "../config/firebase"
  
  /**
   * Checks if there is sufficient stock for a product
   * @param {string} productId - The ID of the product to check
   * @param {number} requestedQuantity - The quantity being requested
   * @returns {Promise<{hasStock: boolean, availableStock: number, productName: string, error: string|null}>}
   */
  export const checkProductStock = async (productId, requestedQuantity) => {
    try {
      // Skip check for sample products
      if (productId === "sample-product") {
        return { hasStock: true, availableStock: 999, productName: "Sample Product", error: null }
      }
  
      const productRef = doc(db, "products", productId)
      const productDoc = await getDoc(productRef)
  
      if (!productDoc.exists()) {
        return {
          hasStock: false,
          availableStock: 0,
          productName: "Unknown Product",
          error: "Product not found in inventory",
        }
      }
  
      const productData = productDoc.data()
      // Check both stock and stockLevel fields for compatibility
      const currentStock =
        productData.stock !== undefined
          ? Number(productData.stock)
          : productData.stockLevel !== undefined
            ? Number(productData.stockLevel)
            : 0
      const productName = productData.name || "Unknown Product"
  
      return {
        hasStock: currentStock >= requestedQuantity,
        availableStock: currentStock,
        productName,
        error:
          currentStock < requestedQuantity
            ? `Insufficient stock for ${productName}. Available: ${currentStock}, Requested: ${requestedQuantity}`
            : null,
      }
    } catch (error) {
      console.error("Error checking product stock:", error)
      return {
        hasStock: false,
        availableStock: 0,
        productName: "Unknown Product",
        error: "Error checking stock: " + error.message,
      }
    }
  }
  
  /**
   * Update product stock in the database
   * @param {string} productId - The ID of the product to update
   * @param {number} newStockLevel - The new stock level
   * @returns {Promise<boolean>} - Success status
   */
  export const updateProductStock = async (productId, newStockLevel) => {
    try {
      // Get the product document reference
      const productRef = doc(db, "products", productId)
  
      // Get current product data
      const productDoc = await getDoc(productRef)
      if (!productDoc.exists()) {
        throw new Error(`Product with ID ${productId} not found`)
      }
  
      // Ensure stock level is a number and not negative
      const updatedStockLevel = Math.max(0, Number(newStockLevel))
  
      // Update both stockLevel and stock fields for compatibility
      await updateDoc(productRef, {
        stockLevel: updatedStockLevel,
        stock: updatedStockLevel,
        lastUpdated: serverTimestamp(),
      })
  
      console.log(`Stock updated for product ${productId}: ${updatedStockLevel}`)
      return true
    } catch (error) {
      console.error("Error updating product stock:", error)
      return false
    }
  }
  
  /**
   * Reduce product stock when a sale is made
   * @param {string} productId - The ID of the product
   * @param {number} quantity - The quantity sold
   * @returns {Promise<boolean>} - Success status
   */
  export const reduceProductStock = async (productId, quantity) => {
    try {
      // Skip for sample products
      if (productId === "sample-product") {
        return true
      }
  
      // Get the product document reference
      const productRef = doc(db, "products", productId)
  
      // Get current product data
      const productDoc = await getDoc(productRef)
      if (!productDoc.exists()) {
        throw new Error(`Product with ID ${productId} not found`)
      }
  
      const productData = productDoc.data()
      // Check both stock fields
      const currentStock =
        productData.stock !== undefined
          ? Number(productData.stock)
          : productData.stockLevel !== undefined
            ? Number(productData.stockLevel)
            : 0
  
      // Calculate new stock level
      const newStock = Math.max(0, currentStock - quantity)
  
      // Update both stock fields for compatibility
      await updateDoc(productRef, {
        stockLevel: newStock,
        stock: newStock,
        lastUpdated: serverTimestamp(),
      })
  
      console.log(`Stock reduced for product ${productId}: ${currentStock} → ${newStock}`)
      return true
    } catch (error) {
      console.error("Error reducing product stock:", error)
      return false
    }
  }
  
  /**
   * Format currency as Philippine Peso
   * @param {number} value - Amount to format
   * @returns {string} - Formatted currency string
   */
  export const formatCurrency = (value) => {
    return `₱${Number(value).toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }
  
  /**
   * Generate a unique order ID
   * @returns {string} - Generated order ID
   */
  export const generateOrderId = () => {
    const date = new Date()
    const year = date.getFullYear().toString().slice(-2)
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0")
  
    return `ORD-${year}${month}${day}-${random}`
  }
  
  /**
   * Fetch sales summary data
   * @param {Object} options - Options for filtering
   * @param {Date} options.startDate - Start date
   * @param {Date} options.endDate - End date
   * @returns {Promise<Object>} - Sales summary data
   */
  export const fetchSalesSummary = async (options = {}) => {
    try {
      const { startDate, endDate } = options
  
      // Create base query
      const salesRef = collection(db, "sales")
      let q = query(salesRef)
  
      // Add date filters if provided
      if (startDate && endDate) {
        const startTimestamp = Timestamp.fromDate(startDate)
        const endTimestamp = Timestamp.fromDate(endDate)
        q = query(salesRef, where("date", ">=", startTimestamp), where("date", "<=", endTimestamp))
      }
  
      // Execute query
      const querySnapshot = await getDocs(q)
  
      // Process results
      let totalRevenue = 0
      let totalOrders = 0
      let totalProductsSold = 0
  
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        totalRevenue += Number(data.total) || 0
        totalOrders++
  
        // Count products sold
        if (data.products && Array.isArray(data.products)) {
          data.products.forEach((product) => {
            totalProductsSold += Number(product.quantity) || 0
          })
        }
      })
  
      // Calculate average order value
      const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0
  
      return {
        totalRevenue,
        totalOrders,
        totalProductsSold,
        averageOrderValue,
      }
    } catch (error) {
      console.error("Error fetching sales summary:", error)
      throw error
    }
  }
  
  