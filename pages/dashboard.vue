<template>
  <div>
    <div class="page-columns">
      <div class="col-top">
        <div class="row justify-content-center">
          <div class="col-sm-3">
            <div v-if="stock_summary">
              <stock-summary 
              :in-stock="stock_summary.in_stock"
              :out-of-stock="stock_summary.out_of_stock"
              :low-stock="stock_summary.low_stock"
              :outdated-info="stock_summary.outdated_info"
              >
              </stock-summary>
            </div>
          </div>          
          <div class="col-sm-9 b-skills">
            <div class="row">
              <div class="col-xs-12 col-sm-2 col-md-2">
                <div class="skill-item center-block">
                  <div class="chart-container">
                    <dashboard-circle-loader :percent="25" bar-color="#27ae60"></dashboard-circle-loader>
                  </div>
                  <p>Pending Orders</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-2 col-md-2">
                <div class="skill-item center-block">
                  <div class="chart-container">
                    <dashboard-circle-loader :percent="65" bar-color="#27ae60"></dashboard-circle-loader>
                  </div>
                  <p>On Hold Orders</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-2 col-md-2">
                <div class="skill-item center-block">
                  <div class="chart-container">
                    <dashboard-circle-loader :percent="84" bar-color="#27ae60"></dashboard-circle-loader>
                  </div>
                  <p>Not Submitted Orders</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-2 col-md-2">
                <div class="skill-item center-block">
                  <div class="chart-container">
                    <dashboard-circle-loader :percent="10" bar-color="#27ae60"></dashboard-circle-loader>
                  </div>
                  <p>Processed Orders</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-2 col-md-2">
                <div class="skill-item center-block">
                  <div class="chart-container">
                    <dashboard-circle-loader :percent="50" bar-color="#27ae60"></dashboard-circle-loader>
                  </div>
                  <p>Dispatched Orders</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-2 col-md-2">
                <div class="skill-item center-block">
                  <div class="chart-container">
                    <dashboard-circle-loader :percent="0" bar-color="#27ae60"></dashboard-circle-loader>
                  </div>
                  <p>Cancelled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-content">
        <div class="row">
          <div class="col-sm-5">
            <div class="fillter-sale">
              <div class="control">
               <date-range-selector v-model="date_range_selected" label="Date Range:" /> 
                <!-- {{ date_range_selected}} -->
              </div>

              <div class="table">
                <table>
                  <caption>Sales</caption>
                  <thead>
                    <tr>
                      <th>Orders</th>
                      <th>Amount</th>
                      <th>Average Order Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <date-range-sales-table-data v-for="(item, index) in date_range_sales" :key="index" :orders="item.orders" :amount="item.amount"
                    :avg-order-value="item.avg_order_value" />
                  </tbody>
                </table>
              </div>
            </div>

            <div class="top-sold">
              <div class="table">
                <table>
                  <caption>Top 5 sold products</caption>
                  <thead>
                    <tr>
                      <th>Product name</th>
                      <th>Price (excl VAT)</th>
                      <th>Total Sales on this</th>
                    </tr>
                  </thead>
                  <tbody>
                     <top-sold-products 
              v-for="(item,index) in top_sold_products"
              :key="index" 
              :prod-id="item.prod_id"
              :prod-name="item.prod_name"
              :price="item.price"
              :total-sales="item.total_sales"
            >
            </top-sold-products>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-sm-7">
            <!-- <canvas id="myChart" width="400" height="200"></canvas> -->
            <bar-chart :width="400" :height="200"
            :labels="bar_chart_data.labels" 
            :datasets="bar_chart_data.datasets"
          />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        stock_summary:{
          in_stock: 1571,
          out_of_stock: 564,
          low_stock: 11,
          outdated_info: 0
        },
        date_range_sales: [
        {orders: 86 , amount: 0, avg_order_value: 0},
        {orders: 87 , amount: 0, avg_order_value: 0},
        {orders: 88 , amount: 0, avg_order_value: 0},
        {orders: 89 , amount: 0, avg_order_value: 0},
        ],
        date_range_selected: "",
        top_sold_products:[
          { prod_id:1, prod_name:"S006508086", price: "0.00", total_sales:"NaN%" },
          { prod_id:2, prod_name:"S006508087", price: "0.00", total_sales:"NaN%" },
          { prod_id:3,prod_name:"S006508088", price: "0.00", total_sales:"NaN%" },
          { prod_id:4,prod_name:"S006508089", price: "0.00", total_sales:"NaN%" },
          { prod_id:5,prod_name:"S006508085", price: "0.00", total_sales:"NaN%" },
        ],
        bar_chart_data:{
          labels: ['13', '14', '15', '16', '17', '18', '19'],
          datasets: [{ 
            label: '# of Votes', 
            data: [12, 19, 3, 5, 2, 3, 20],
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
             }
           ]
        },
      }
    },
    methods: {
      
    },
  }
</script>
