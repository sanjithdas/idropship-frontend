<template>
 <div class="page-wrapper">
			<main class="page-content">
				<div class="page-sales-orders">
					<div class="page-header row">
						<div class="page-header-hgroup col-sm-6">
							<div class="page-title-wrapper">
								<h1 class="page-title">Invoices</h1>
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
							<div class="search-global" :class="{active:is_search_active}">
							    <form action="#" id="form-search" @submit.prevent="search_active">
							        <div class="search-global-field">
							            <label class="search-global-label" for="search-global"></label>
							            <input class="search-global-input" type="text" name="query" value="" id="search_input" />
		                                <button type="submit" 
                                    
                                    class="search-global-action" title="Search" id="global_search"
                                      ></button>
							        </div>
                       
							    </form>
							</div>
						</div>
					</div>
					<div class="page-main-container">
						<div class="admin__data-grid-header">
							<div class="admin-data-grid-actions">
								<div class="admin-dropdown" :class="{active: is_view_active}" >
									<button class="admin__action-dropdown" type="button" @click="is_view_active=!is_view_active">
        								<span>
        									Default View
        								</span>
   	 								</button>
   	 								<ul class="admin-dropdown-menu">
        								<li>								
										    <a href="" class="action-dropdown-menu-link">Default View</a> 
										</li>
									</ul>
								</div>
								<div class="admin-dropdown columns" :class="{active: is_column_active}">
									<button class="admin__action-dropdown" type="button"
                  @click="is_column_active=!is_column_active"
                  >
        								<span>
        									Columns
        								</span>
   	 								</button>
   	 								<div class="admin-dropdown-menu">
        								<div class="admin__action-dropdown-menu-header">11 out of 21 visible</div>
        								<div class="admin__action-dropdown-menu-content">
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
									 <common-search v-model="query"  label="Search by Keyword" />
									<button><span>Search</span></button>
								</form>
                {{ query }}
							</div>
							<div class="data-grid-filters-actions-wrap">
								<div class="admin-filter-dropdown export">
									<button class="admin__action-dropdown" type="button" @click="is_active = !is_active">
        								<span>
        									Filters
        								</span>
   	 								</button>
								</div>
							</div>
							<div class="admin__data-grid-filters-wrap" :class="{ active: is_active}">
								<fieldset class="admin__fieldset">
									<fieldset class="form-field">
										<legend class="form-field-legend">
										    <span>Invoice Date</span>
										</legend>
										<div class="form-field form-field1">
											<label class="label">
											    <span>from</span>
											</label>
											<div class="control">
												<common-date-filters 
            label="mm/dd/yyyy" v-model="invoice_filters.invoice_date.from" id="invoice_date_from"  />  
											</div>
                      <!-- {{ invoice_filters.invoice_date.from }} -->
										</div>
										<div class="form-field form-field1">
											<label class="label">
											    <span>to</span>
											</label>
											<div class="control">
												 <common-date-filters 
            label="mm/dd/yyyy" v-model="invoice_filters.invoice_date.to" id="invoice_date_from"  /> 
											</div>
										</div>
									</fieldset>
									<fieldset class="form-field">
										<legend class="form-field-legend">
										    <span>Order Date</span>
										</legend>
										<div class="form-field form-field1">
											<label class="label">
											    <span>from</span>
											</label>
											<div class="control">
												<common-date-filters 
            label="mm/dd/yyyy" v-model="invoice_filters.order_date.from" id="order_date_from"  /> 
											</div>
										</div>
										<div class="form-field form-field1">
											<label class="label">
											    <span>to</span>
											</label>
											<div class="control">
												<common-date-filters 
            label="mm/dd/yyyy" v-model="invoice_filters.order_date.to" id="order_date_to"  /> 
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
												<common-text-box 
            v-model="invoice_filters.grand_total_base.from" id="grand_total_base_from"  /> 
											</div>
										</div>
										<div class="form-field form-field1">
											<label class="label">
											    <span>to</span>
											</label>
											<div class="control">
												<common-text-box 
              v-model="invoice_filters.grand_total_base.to" id="grand_total_base_to"  /> 
											</div>
										</div>
									</fieldset>
									<fieldset class="form-field">
										<legend class="form-field-legend">
										    <span>Grand Total (Purchased)</span>
										</legend>
										<div class="form-field form-field1">
											<label class="label">
											    <span>from</span>
											</label>
											<div class="control">
												 <common-text-box 
            v-model="invoice_filters.grand_total_purchased.from" id="grand_total_purchased_from"  /> 
											</div>
										</div>
										<div class="form-field form-field1">
											<label class="label">
											    <span>to</span>
											</label>
											<div class="control">
												<common-text-box 
             v-model="invoice_filters.grand_total_purchased.to" id="grand_total_purchased_to"  /> 
											</div>
										</div>
									</fieldset>
									<fieldset class="form-field">
										<legend class="form-field-legend">
										    <span>Purchase From</span>
										</legend>
										<div class="form-field">
											
											<div class="control">
												<common-purchase-point-filter v-model="invoice_filters.purchase_pts_selected" />
											</div>
										</div>
									</fieldset>
									<fieldset class="form-field">
										<legend class="form-field-legend">
										    <span>Invoice</span>
										</legend>
										<div class="form-field">
											<div class="control">
												<common-text-box v-model="invoice_filters.invoice" />
											</div>
										</div>
									</fieldset>
									<fieldset class="form-field">
										<legend class="form-field-legend">
										    <span>Order #</span>
										</legend>
										<div class="form-field">
											<div class="control">
												<common-text-box v-model="invoice_filters.order" />
											</div>
										</div>
									</fieldset>
									<fieldset class="form-field">
										<legend class="form-field-legend">
										    <span>Bill-to Name</span>
										</legend>
										<div class="form-field">
											<div class="control">
												<common-text-box v-model="invoice_filters.bill_to_name" />
											</div>
										</div>
									</fieldset>
									<fieldset class="form-field">
										<legend class="form-field-legend">
										    <span>Ship-to Name</span>
										</legend>
										<div class="form-field">
											<div class="control">
												<common-text-box v-model="invoice_filters.ship_to_name" />
											</div>
										</div>
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
							    </div>
							</div>
              
						</div>
            <!-- <pre><code>{{ invoice_filters }}</code></pre> -->
						<div class="admin-pager-action row">
							<div class="col-xs-2 col-sm-2">
								<div class="action-select-wrap">
								      <common-actions-filter v-model="action_selected" :items="actions" label="Actions" />
								</div>
                <!-- {{ action_selected }} -->
							</div>
							<div class="col-xs-10 col-sm-10">
					            <div class="row">
					                <div class="col-xs-3 col-sm-3">
										<div class="admin__control-support-text">
					    					54259<span> records found</span>
										</div>
									</div>
					                <div class="col-xs-9 col-sm-9">
										<div class="admin__data-grid-pager-wrap">
											<div class="selectmenu" data-bind="collapsible">
											    <div class="selectmenu-items">
											         <common-per-page-selector v-model="per_page" :items="actions"/>
											    </div>
                              
											</div>
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
												<input class="admin__control-checkbox " type="checkbox" id="select-all" name="select all" v-model= "is_check_all" @click="check_all">
												<button class="action-multicheck-toggle"><span>Options</span></button>
												<ul class="action-menu" for="select-all">
										            <li>
										                <span class="action-menu-item  ">Select All</span>
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
										<th class="data-grid-th _sortable _descend">
											<span class="data-grid-cell-content ">Invoice</span>
										</th>
										<th class="data-grid-th">
											<span class="data-grid-cell-content">Invoice Date</span>
										</th>
										<th class="data-grid-th">
											<span class="data-grid-cell-content">Order #</span>
										</th>
										<th class="data-grid-th ">
											<span class="data-grid-cell-content">Order Date</span>
										</th>
										<th class="data-grid-th">
											<span class="data-grid-cell-content">Bill-to Name</span>
										</th>
										<th class="data-grid-th">
											<span class="data-grid-cell-content">Status</span>
										</th>
										<th class="data-grid-th">
											<span class="data-grid-cell-content">Grand Total (Base)</span>
										</th>
										<th class="data-grid-th">
											<span class="data-grid-cell-content">Grand Total (Purchased)</span>
										</th>
										<th class="data-grid-th ">
											<span class="data-grid-cell-content">Action</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<sales-invoices-table-data-item 
                  v-for="(item, index) in invoices"     
                    :key="index" :id="item.id" v-model="column_list_filtered"
                    :invoice="item.invoice"
                    :invoice-date="item.invoice_date"
                    :order="item.order" :order-date="item.order_date"
                    :bill-to-name="item.bill_to_name" :status="item.status" :grand-total-base="item.grand_total_base" :grand-total-purchased="item.grand_total_purchased"
                    :action ="item.action" :de_select="de_select"
                   />
						            
								</tbody>
							</table>
             <!-- {{ column_list_filtered}} -->
						</div>
					</div>


				</div>
			
		</main>
    </div>
</template>

<script>
export default {

  data() {
  return {
    query: "",
    per_page:0,
    action_selected: 0,
    is_active:false,
    is_view_active:false,
    is_search_active:false,
    is_column_active: false,
    is_check_all: false,
    item_list_filtered: [],
    column_list_filtered: [],
     
    invoices : [
       {
         id: 1, invoice: 42 , invoice_date: "Apr 6, 2020 12:28:51 PM" , order: 77, order_date: "Mar 26, 2020 2:10:40 PM" , bill_to_name: "Sanjith" , status: "Paid" , grand_total_base: 1639.00 , grand_total_purchased: 1639, action: "view"  	},
         {
         id: 2 ,invoice: 43 , invoice_date: "Apr 6, 2020 12:28:51 PM" , order: 77, order_date: "Mar 26, 2020 2:10:40 PM" , bill_to_name: "Renjith" , status: "Paid" , grand_total_base: 1639.00 , grand_total_purchased: 1639, action: "view"  	},
         {
         id: 3, invoice: 44 , invoice_date: "Apr 6, 2020 12:28:51 PM" , order: 77, order_date: "Mar 26, 2020 2:10:40 PM" , bill_to_name: "Sanjith" , status: "Paid" , grand_total_base: 1639.00 , grand_total_purchased: 1639, action: "view"  	}
    ],
    actions:[
          { id: 1, action: "Cancel" },
          { id: 2, action: "Hold" },
          { id: 3, action: "Unhold" },
          { id: 4, action: "Print Invoices" },
						 																
						],

  invoice_filters:{
        invoice_date : {from : "" , to: ""},
        order_date: {from: "" , to: ""},
        grand_total_base: {from: "" , to: ""},
        grand_total_purchased: {from: "" , to: ""},
        purchase_pts_selected:0, 
        invoice: "",
        order: "",
        bill_to_name: "" ,
        ship_to_name: "",
        },

         

             
  }
  
},
 
 mounted(){
   this.is_search_active = false;
   document.addEventListener('click', this.onClick)
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
             for (let invoice in this.invoices){
                this.column_list_filtered.push(this.invoices[invoice].id);
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