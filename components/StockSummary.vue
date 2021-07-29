<template>
  <div class="stock-summary">
    <h3>Stock Summary </h3>
    <div class="list-value">
      <ul class="list-unstyled">
        <li class="stock"  >
          <span>In Stock</span><span class="value">{{inStock}}</span>
        </li>
        <li class="out-stock">
          <span>Out of Stock</span><span class="value">{{outOfStock}}</span>
        </li>
        <li class="low-stock">
          <span>Low Stock</span><span class="value">{{lowStock}}</span>
        </li>
        <li class="outdated">
          <span>Outdated info</span><span class="value">{{outdatedInfo}}</span>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
export default {
  props: ['inStock','outOfStock','lowStock','outdatedInfo']
}
</script>

<style>

</style>