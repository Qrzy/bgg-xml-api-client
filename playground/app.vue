<script setup lang="ts">
import { getBggSearch } from '../src'

const { data: serverData } = useFetch('/api/bggSearch/Blood-rage')

const searchData = ref<any>(null)

if (process.client)
  searchData.value = await getBggSearch({ query: 'Blood rage', exact: 1, type: 'boardgame' })
</script>

<template>
  <h1>Playground</h1>
  <h2>Server API proxy Search data:</h2>
  <pre>{{ serverData }}</pre>
  <h2>Client Search data:</h2>
  <pre>{{ searchData }}</pre>
</template>
