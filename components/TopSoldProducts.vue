
<template>
  <tr>
    <td>{{prodName}}</td>
    <td>${{price}}</td>
    <td>{{totalSales}}</td>
  </tr>
</template>

<script>
export default {
  props:['prodId', 'prodName', 'price','totalSales']
}
</script>

<style>

</style>