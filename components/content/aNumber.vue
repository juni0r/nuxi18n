<script setup lang="ts">
const { value } = defineProps<{ value: number }>()
</script>

<template>
  <label>{{ $t('amount') }}: </label>
  <span>{{ $n(value) }}</span>
</template>
