<script setup lang="ts">
import { onMounted, ref } from "vue";
import { data } from "./data";
const meal_data = ref([]);
onMounted(() => {
  meal_data.value = data;

  // console.log(meal_data.value);
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th scope="col">品項</th>
        <th scope="col">描述</th>
        <th scope="col">價格</th>
        <th scope="col">庫存</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="m in meal_data" :key="m.name">
        <td>{{ m.name }}</td>
        <td>
          <small>{{ m.description }}</small>
        </td>
        <td>{{ m.price }}</td>
        <td><button>-</button>{{ m.count }}<button>+</button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
