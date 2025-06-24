import { ref } from 'vue';

export function useToast() {
  const showToast = ref(false);
  const toastMessage = ref('');
  const toastType = ref('success'); // success, error, warning, info
  
  const showSuccessToast = (message, duration = 3000) => {
    toastMessage.value = message;
    toastType.value = 'success';
    showToast.value = true;
    
    setTimeout(() => {
      showToast.value = false;
    }, duration);
  };
  
  const showErrorToast = (message, duration = 3000) => {
    toastMessage.value = message;
    toastType.value = 'error';
    showToast.value = true;
    
    setTimeout(() => {
      showToast.value = false;
    }, duration);
  };
  
  const hideToast = () => {
    showToast.value = false;
  };
  
  return {
    showToast,
    toastMessage,
    toastType,
    showSuccessToast,
    showErrorToast,
    hideToast
  };
}