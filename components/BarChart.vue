  
<script>
import VueCharts from 'vue-chartjs'
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  props: {
          datasets :Array,
          labels: Array
          },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.$props.labels,
      datasets:  this.$props.datasets,
      
    })
  }
}

 
</script>

<style>

</style>