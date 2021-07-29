<template>
  <div class="page-wrapper">
			<main class="page-content">
				<div class="page-sales-orders">
					<div class="page-header row">
						<div class="page-header-hgroup col-sm-6">
							<div class="page-title-wrapper">
								<h1 class="page-title">Orders</h1>
							</div>
						</div>
						<div class="page-header-actions col-sm-6">
							<div class="admin-user">
					            <a href="#" class="admin__action-dropdown disabled" title="My Account">
				                    <span class="admin-user-account-text">admin user</span>
					            </a>
					            <ul class="admin__action-dropdown-menu">
	                                <li>
					                    <a href="#">
					                        Account Setting (<span class="admin-user-name">Admin User</span>)
					                    </a>
					                </li>
	                                <li>
					                    <a href="#" title="Customer View" target="_blank" class="store-front">
					                        Customer View
					                    </a>
					                </li>
					                <li>
					                    <a href="#" class="account-signout" title="Sign Out">
					                        Sign Out
					                    </a>
					                </li>
					            </ul>
					        </div>
							<div class="notifications-wrapper">
					            <a href="#" title="Notifications" class="disabled">
						            <span class="notifications-counter">
						                9
						            </span>
						        </a>
						        <ul class="admin__action-dropdown-menu">
	                                <li class="notifications-entry" data-notification-id="374" data-notification-severity="">
	                                    <strong class="notifications-entry-title">
					                        Your export file is ready                    
					                    </strong>
	                                    <p class="notifications-entry-description">
				                            You can pick up your file at export main page                        
				                        </p>
	                                    <time class="notifications-entry-time">
					                        Jul 9, 2021, 10:05:17 PM                    
					                    </time>
					                    <button type="button" class="notifications-close" title="Close"></button>
					                </li>
	                                <li class="notifications-entry" data-notification-id="373" data-notification-severity="">
	                                    <strong class="notifications-entry-title">
					                        Your export file is ready                    
					                    </strong>                 
	                                    <p class="notifications-entry-description">
				                            You can pick up your file at export main page                        
				                        </p>
	                                    <time class="notifications-entry-time">
					                        Jul 9, 2021, 8:51:02 PM                    
					                    </time>
					                    <button type="button" class="notifications-close" title="Close"></button>
					                </li>
	                                <li class="notifications-entry" data-notification-id="372" data-notification-severity="">
	                                    <strong class="notifications-entry-title">
					                        Your export file is ready                    
					                    </strong>
	                                	<p class="notifications-entry-description">
				                            You can pick up your file at export main page                        
				                        </p>
	                                    <time class="notifications-entry-time">
					                        Jul 9, 2021, 5:33:04 AM                    
					                    </time>
					                    <button type="button" class="notifications-close" title="Close"></button>
					                </li>
			                        <li class="notifications-entry notifications-entry-last">
						                <a href="#" class="action-tertiary action-more">
						                    See All (<span class="notifications-counter">9</span> unread)                
						                </a>
						            </li>
						        </ul>
						    </div>
							<div class="search-global">
							    <form action="#" id="form-search">
							        <div class="search-global-field">
							            <label class="search-global-label" for="search-global"></label>
							            <input class="search-global-input" type="text" name="query" value="">
		                                <button type="submit" class="search-global-action" title="Search"></button>
							        </div>
							    </form>
							</div>
						</div>
					</div>
					<div class="page-main-actions">    
						<div class="page-actions">
							<div class="page-actions-inner">
								<div class="page-actions-buttons">
				        			<button type="button" class="action- scalable primary" onclick="location.href = 'sales-order-create.html';">
									    <span>Create New Order</span>
									</button>
				    			</div>
				    		</div>
				    	</div>
					</div>
					<div class="page-main-container">
						<div class="admin__data-grid-header">
							<div class="admin-data-grid-actions">
								<div class="admin-dropdown" :class="{active: is_view_active}" >
									<button class="admin__action-dropdown"  type="button" @click="is_view_active=!is_view_active">
                 				<span>
        									Default View
        								</span>
   	 								</button>
   	 								<ul   class="admin-dropdown-menu " >
        								<li>								
										    <a href="" class="action-dropdown-menu-link">Default View</a> 
										</li>
									</ul>
								</div>
								<div class="admin-dropdown columns " :class="{active: is_column_active}">
									<button class="admin__action-dropdown" type="button" @click="is_column_active=!is_column_active">
        								<span>
        									Columns
        								</span>
   	 								</button>

                    

   	 								<div class="admin-dropdown-menu" >
        								<div class="admin__action-dropdown-menu-header" >11 out of 21 visible</div>
        								<div class="admin__action-dropdown-menu-content">
                          <!--here -->
                          <common-column-filter v-model="item_list_filtered"/>
                        </div>
								        <div class="admin__action-dropdown-menu-footer">
								            <div class="admin__action-dropdown-footer-secondary-actions">
								                <button class="action-tertiary" type="button">Reset</button>
								            </div>
								            <div class="admin__action-dropdown-footer-main-actions">
								                <button class="action-tertiary" type="button">Cancel</button>
								            </div>
								        </div>
									</div>
								</div>
								<div class="admin-dropdown export">
									<button class="admin__action-dropdown" type="button">
        								<span>
        									Export
        								</span>
   	 								</button>
   	 								<div class="admin-dropdown-menu">
        								<div class="admin__field admin__field-option">
								            <input class="admin__control-radio" type="radio">
								            <label class="admin__field-label">CSV</label>
								        </div>
								        <div class="admin__field admin__field-option">
								            <input class="admin__control-radio" type="radio">
								            <label class="admin__field-label">Excel XML</label>
								        </div>
								        <div class="admin__action-dropdown-footer-main-actions">
								            <button class="action-tertiary" type="button">Cancel</button>
								            <button class="action-secondary" type="button">Export</button>
								        </div>
									</div>
								</div>
							</div>
							<div class="data-grid-search-control-wrap">
								<form id="search">
									<common-search v-model="search_query"  label="Search by Keyword"> </common-search>
									<button><span>Search </span></button>
                    
								</form>
							</div>
							<div class="data-grid-filters-actions-wrap" >
								<div class="admin-filter-dropdown export">
									<button class="admin__action-dropdown" type="button" @click="is_active = !is_active">
        								<span>
        									Filters
        								</span>
   	 								</button>
								</div>
							</div>
	<div  class="admin__data-grid-filters-wrap" 
    :class="{ active: is_active}" >
	  <fieldset class="admin__fieldset">
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Purchase Date</span>
        </legend>
        <div class="form-field form-field1">
          <label class="label">
              <span>from</span>
          </label>
          <div class="control">
            <common-date-filters 
            label="mm/dd/yyyy" v-model="order_filters.purchase_date.from" id="purchase_date_from"  /> 
             
          </div>
        </div>
        <div class="form-field form-field1">
          <label class="label">
              <span>to</span>
          </label>
          <div class="control">
             <common-date-filters 
            label="mm/dd/yyyy" v-model="order_filters.purchase_date.to" id="purchase_date_from"  /> 
            
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Grand Total (Base)</span>
        </legend>
        <div class="form-field form-field1">
          <label class="label">
              <span>from</span>
          </label>
          <div class="control">
            <common-text-box label="" v-model="order_filters.grand_total.from" />
          </div>
           
        </div>
        <div class="form-field form-field1">
          <label class="label">
              <span>to</span>
          </label>
          <div class="control">
            <common-text-box label="" v-model="order_filters.grand_total.to"    /> 
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Purchase Point</span>
        </legend>
        <div class="form-field">
          
          <div class="control">
             <common-purchase-point-filter :filters ="order_filters.purchase_pts" v-model="order_filters.purchase_pts_selected" /> 
          </div>
           
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>ID</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <common-text-box label="ID" v-model="order_filters.id"/> 
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Your Order Number</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <common-text-box label="order number" v-model="order_filters.your_orderno"  /> 
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Bill-to Name</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <common-text-box label="bill to name" v-model="order_filters.bill_to_name"   /> 
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Ship-to Name</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <common-text-box label="ship to name" v-model="order_filters.shipto_name"   /> 
            
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Status</span>
        </legend>
        <sales-orders-order-status-filters v-model="order_filters.order_status_selected" /> 
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Billing Address</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <common-text-box label="billing address" v-model="order_filters.billing_address"  /> 
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Customer Email</span>
        </legend>
        <div class="form-field">
          <div class="control">
            <common-text-box label="customer email" v-model="order_filters.customer_email"   /> 
          </div>
        </div>
      </fieldset>
      <fieldset class="form-field">
        <legend class="form-field-legend">
            <span>Payment Method</span>
        </legend>
         <sales-orders-payment-filter
          v-model="order_filters.payment_method"/> 

      </fieldset>
    </fieldset>
            <div class="admin__data-grid-filters-footer">
                    <div class="admin__footer-main-actions">
                        <button class="action-tertiary" type="button">
                            <span>Cancel</span>
                        </button>
                        <button class="action-secondary" type="button">
                            <span>Apply Filters</span>
                        </button>
                    </div>
                     <!-- <pre><code>{{order_filters}}</code></pre>  -->
                </div>
            </div>
          </div>
          <div class="admin-pager-action row">
            <div class="col-xs-2 col-sm-2">
              <div class="action-select-wrap">
                      <div class="action-menu-items">
                        <common-actions-filter v-model="action_selected" label="Actions" 
                        :items="actions"
                        />
                      </div>
                        <!-- {{ action_selected }} -->
              </div>
            </div>
            <div class="col-xs-10 col-sm-10">
                    <div class="row">
                        <div class="col-xs-3 col-sm-3">
                  <div class="admin__control-support-text">
                    &nbsp;&nbsp;&nbsp;	54259<span> records found</span>
                  </div>
                </div>
                        <div class="col-xs-9 col-sm-9">
                  <div class="admin__data-grid-pager-wrap">
                    <div class="selectmenu" data-bind="collapsible">
                        <div class="selectmenu-items">
                             
                            <common-per-page-selector v-model="per_page"  />
                        </div>
                        
                    </div>
                     
                    <label class="admin__control-support-text">per page</label>
                      <div class="admin__data-grid-pager">
                          <button class="action-previous" type="button" disabled=""></button>
                          <input class="admin__control-text" type="number" value="1">
                          <label class="admin__control-support-text">of 2713</label>
                          <button class="action-next" type="button"></button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="admin__data-grid-wrap">
            <table class="data-grid data-grid-draggable">
              <thead>
                <tr>
                  <th class="data-grid-multicheck-cell">
                    <div class="action-multicheck-wrap">
                      <input class="admin__control-checkbox" type="checkbox" id="select-all" name="select all"
                      v-model= "is_check_all" @click="check_all"
                      > 
                      <button class="action-multicheck-toggle"><span>Options</span></button>
                      <ul class="action-menu" for="select-all">
                              <li>
                                  <span class="action-menu-item">Select All</span>
                              </li>
                              <li style="display: none;">
                                  <span class="action-menu-item">Deselect All</span>
                              </li>
                              <li>
                                  <span class="action-menu-item">Select All on This Page</span>
                              </li>
                              <li style="display: none;">
                                  <span class="action-menu-item">Deselect All on This Page</span>
                              </li>
                          </ul>
                    </div>
                  </th>
                  <th class="data-grid-th">
                    <span class="data-grid-cell-content">ID</span>
                  </th>
                  <th class="data-grid-th">
                    <span class="data-grid-cell-content">Your Order Number</span>
                  </th>
                  <th class="data-grid-th ">
                    <span class="data-grid-cell-content">Purchase Point</span>
                  </th>
                  <th class="data-grid-th ">
                    <span class="data-grid-cell-content">Action</span>
                  </th>
                  <th class="data-grid-th _sortable _descend">
                    <span class="data-grid-cell-content ">Purchase Date</span>
                  </th>
                  <th class="data-grid-th">
                    <span class="data-grid-cell-content">Bill-to Name</span>
                  </th>
                  <th class="data-grid-th">
                    <span class="data-grid-cell-content">Ship-to Name</span>
                  </th>
                  <th class="data-grid-th">
                    <span class="data-grid-cell-content">Grand Total (Base)</span>
                  </th>
                  <th class="data-grid-th">
                    <span class="data-grid-cell-content">Status</span>
                  </th>
                  <th class="data-grid-th">
                    <span class="data-grid-cell-content">Shipping Address</span>
                  </th>
                  <th class="data-grid-th">
                    <span class="data-grid-cell-content">Customer Email</span>
                  </th>
                  <th class="data-grid-th">
                    <span class="data-grid-cell-content">Payment Method</span>
                  </th>
                </tr>
              </thead>
              <tbody>
              <sales-orders-listing v-for="(item, index) in orders"     
                :key="index" :checked="item.checked"
                :id="item.id" :orderno="item.your_orderno"
                :point="item.purchase_point" :action="item.action"
                :pdate="item.purchase_date" :billname="item.bill_to_name"
                :shipname="item.ship_to_name" :grandtotal="item.grand_total"
                :status="item.status" :shippingaddress="item.shipping_address"
                :customeremail="item.customer_email" :paymentmethod="item.payment_method"
                v-model="column_list_filtered" :de_select="de_select"
                  />	
              </tbody>
            </table>
              <!-- {{ column_list_filtered }} -->
          </div>
        </div>
     	</div>
		</main>
   </div>
      
      
</template>

<script>
 
export default {

data(){
    return{
      item_list_filtered:[],
      column_list_filtered: [],
      search_query: "",
      action_selected: 0,
      per_page:0,
      is_active:false,
      is_view_active:false,
      is_column_active: false,
      is_check_all: false,
      orders:
      [
        {
          checked: false,
          id:"42289771",
          your_orderno:"CCA-2051228",
          purchase_point: "Idropship Main Website Store Australia",
          action: "View",
          purchase_date:"Jul 22, 2021 12:24:36 AM",
          bill_to_name: "Flo Adams",
          ship_to_name: "Simon Butler",
          grand_total: "A$125.28",
          status: "Processing",
          shipping_address: "Unit 3 374 Ohea Street, PASCOE VALE SOUTH, Victoria,3044",
          customer_email: "coclearance@gmail.com",
          payment_method: "Paylater"

        },
        {
          checked: false,
          id:"42289772",
          your_orderno:"CCA-2051228",
          purchase_point: "Idropship Main Website Store Australia",
          action: "View",
          purchase_date:"Jul 22, 2021 12:24:36 AM",
          bill_to_name: "Flo Adams",
          ship_to_name: "Simon Butler",
          grand_total: "A$125.28",
          status: "Processing",
          shipping_address: "Unit 3 374 Ohea Street, PASCOE VALE SOUTH, Victoria,3044",
          customer_email: "coclearance@gmail.com",
          payment_method: "Paylater"

        },
        {
          checked: false,
          id:"42289773",
          your_orderno:"CCA-2051228",
          purchase_point: "AUpost Main Website Store Australia",
          action: "View",
          purchase_date:"Jul 22, 2021 12:24:36 AM",
          bill_to_name: "Sanjith",
          ship_to_name: "Simon Butler",
          grand_total: "A$105.28",
          status: "Processing",
          shipping_address: "Unit 3 374 Ohea Street, PASCOE VALE SOUTH, Victoria,3044",
          customer_email: "coclearance@gmail.com",
          payment_method: "Paypal"

        }
      ],
      order_filters:{
        purchase_date : {from : "" , to: ""},
        grand_total: {from: "" , to: ""},
        purchase_pts_selected:0, 
        id: "",
        your_orderno: "",
        bill_to_name: "" ,
        shipto_name: "",
        order_status_selected:0,
        billing_address: "",
        customer_email: "",
        payment_method:0,
       },

       actions:[
							{ id: 1, action: "Cancel" },
							{ id: 2, action: "Hold" },
							{ id: 3, action: "Unhold" },
							{ id: 4, action: "Print Invoices" },
							{ id: 5, action: "Print Packing Slips" },
							{ id: 6, action: "Print Credit Memos" },
							{ id: 7, action: "Print All" },
							{ id: 8, action: "Print Shipping Labels" },
							{ id: 9, action: "Delete" },
							{ id: 10, action: "Shipment Generate" },
							{ id: 11, action: "Export Orders" }
																	
						],
      
    }
  },
   
  mounted() {
    
  },

  methods:{
        search_active(){
          this.is_search_active = true;
          //document.getElementById("form-search").submit();
         },
         // issue with form submit - not working code
        onClick: function (ev) {
           if (ev.target.id !== "global_search" && ev.target.id !== "search_input" ){
            this.is_search_active = false;
          }
        } ,
        check_all: function (){
             this.is_check_all = !this.is_check_all;
             this.column_list_filtered = [];
            if (this.is_check_all){
             for (let order in this.orders){
                this.column_list_filtered.push(this.orders[order].id);
              }
            }
        } ,
         de_select: function() {
            this.is_check_all = false;
        }          
     }, 
   
}
</script>

<style>

</style>