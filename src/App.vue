<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './style.css';

:root {
  --color-pale-blue: #E3F2FD;
  --color-light-blue: #90CAF9;
  --color-medium-blue: #42A5F5;
  --color-navy: #1976D2;
  --color-dark-blue: #1565C0;
}

.bg-pale-blue { background-color: var(--color-pale-blue); }
.bg-light-blue { background-color: var(--color-light-blue); }
.bg-medium-blue { background-color: var(--color-medium-blue); }
.bg-navy { background-color: var(--color-navy); }
.bg-dark-blue { background-color: var(--color-dark-blue); }

.text-navy { color: var(--color-navy); }
.text-dark-blue { color: var(--color-dark-blue); }
</style>

