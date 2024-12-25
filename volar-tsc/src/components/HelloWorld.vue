<script setup lang="ts">
import { useTemplateRef } from "vue";
import type { ElSelect } from 'element-plus'


const elSelectRef = useTemplateRef<InstanceType<typeof ElSelect>>('elSelectRef')


</script>
<template>
  <ElSelect ref="elSelectRef" />
</template>