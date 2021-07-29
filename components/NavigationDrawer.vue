<template>
		<div class="menu-wrapper _fixed">
			<nav class="admin__menu">
				<ul id="nav">
					<navigation-item v-for="(item, index) in navigation" :item="item" :key="index"/>
				</ul>
			</nav>
		</div>
</template>
<script>
export default {
	data() {
		return {
			navigation:[
				{
					name:"Dashboard",
					route:"/dashboard",
					icon:"fas fa-tachometer-alt",
				},
				{
					name:"Sales",
					route:"/sales",
					icon:"fas fa-dollar-sign",
					children:[
						{
							group:"Operations",
							items:[
								{
									name:"Orders",
									route:"/sales/orders",
									icon:"fas fa-dollar-sign",									
								},
								{
									name:"Batch Order Payments",
									route:"sales",
									icon:"fas fa-dollar-sign",									
								},
								{
									name:"Invoices",
									route:"/sales/invoices",
									icon:"fas fa-dollar-sign",									
								},
								{
									name:"Shipments",
									route:"sales",
									icon:"fas fa-dollar-sign",									
								},
								{
									name:"Credit Memos",
									route:"sales",
									icon:"fas fa-dollar-sign",									
								},
								{
									name:"Transactions",
									route:"sales",
									icon:"fas fa-dollar-sign",									
								},
							]
						}						
					]
				},
				{
					name:"Catalogue",
					route:"sales",
					icon:"fas fa-box",
					children:[
						{
							group:"Catalogue",
							items:[
								{
									name:"Inventory",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Products",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Categories",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
							]
						}						
					]
				},
				{
					name:"Customers",
					route:"sales",
					icon:"fas fa-users",
					children:[
						{
							group:"Customers",
							items:[
								{
									name:"All Customers",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Now Online",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Customer Groups",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Notifications",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
							]
						},
						{
							group:"Help Desk",
							items:[
								{
									name:"Tickets",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Automations",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Departments",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
							]
						}					
					]
				},
				{
					name:"Marketing",
					route:"sales",
					icon:"fas fa-dollar-sign",
					children:[
						{
							group:"Promotions",
							items:[
								{
									name:"Cart Price Rules",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
							]
						},
						{
							group:"Communications",
							items:[
								{
									name:"Email Templates",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Newsletter Template",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Newsletter Queue",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Newsletter Subscribers",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
							]
						},
						{
							group:"Advertising Channels",
							items:[
								{
									name:"Google Shopping ads",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
							]
						},
						{
							group:"SEO & Search",
							items:[
								{
									name:"URL Rewrites",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Search Tearms",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Search Synonyms",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Site Map",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
							]
						}
					]
				},
				{
					name:"Wallet",
					route:"sales",
					icon:"fas fa-users",
					children:[
						{
							group:"Wallet",
							items:[
								{
									name:"Transactions",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Bank Transfer Requests",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Configuration",
									route:"sales",
									icon:"fas fa-dollar-sign",
								}
							]
						},					
					]
				},				
				{
					name:"Notifications",
					route:"sales",
					icon:"fas fa-bell",
					children:[
						{
							group:"Notifications",
							items:[
								{
									name:"New Products Added",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"New Products Added by SKU",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Discontinued Products",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Discontinued Products by SKU",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Inventory Level Update",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Inventory Level Update by SKU",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Updated Images",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Updated Images by SKU",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Updated Price",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Updated Price by SKU",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Update Description",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
								{
									name:"Update Description by SKU",
									route:"sales",
									icon:"fas fa-dollar-sign",
								},
							]
						},					
					]
				},
				{
					name:"Marketplace",
					route:"marketplace",
					icon:"fas fa-store-alt",
				},				
				{
					name:"Stores",
					route:"stores",
					icon:"fas fa-store",
				},				
				{
					name:"System",
					route:"system",
					icon:"fas fa-cogs",
				},				
			]
		}
	},
}
</script>