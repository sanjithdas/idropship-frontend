
// menu bar
var times = document.querySelectorAll(".level-0");
times.forEach((x) => x.addEventListener("click", function(event){
	var isActive = document.querySelector('.active');
	if (isActive) {
		isActive.classList.remove("active");
	}
	
	x.classList.add("active")
	var target = event.target;
    var parent = target.parentElement;
    parent.parentElement.classList.remove("active");
}));


//<!-- js header user -->

var classIcon = document.querySelector(".admin-user");
	classIcon.addEventListener("click", function(event){
		// var target = event.target.parentElement;
		if (classIcon.classList.contains("active")){
		classIcon.classList.remove("active")
		} else {
			classIcon.classList.add("active")
		}
	})
//<!-- notifications -->
var notifications = document.querySelector(".notifications-wrapper");
  	notifications.addEventListener("click", function(event){
  		if (notifications.classList.contains("active")){
			notifications.classList.remove("active")
  		} else {
  			notifications.classList.add("active")
  		}
  	})


//<!-- search top -->
	var addBackground = function(e){
	  e.stopPropagation();
	  document.querySelector(".search-global").classList.add("active")
	};
	var removeBackground = function(){
		var searchActive = document.querySelector(".search-global.active");
		if (searchActive) {
			searchActive.classList.remove("active")
		}
	};
	var searchGlobal= document.querySelector(".search-global");
    searchGlobal.addEventListener("click", function(event){
  		addBackground(event);
  	})
  	document.querySelector("body").addEventListener("click", function(event){
  		removeBackground()
  	})

//<!-- js filter tool -->

var dropdownAll = document.querySelectorAll(".admin-dropdown .admin__action-dropdown");
	dropdownAll.forEach((x) => x.addEventListener("click", function(event){
		var targetParent = event.target.parentElement.parentElement;
  		if (targetParent && targetParent.classList.contains("admin-dropdown")){
  			if (targetParent.classList.contains("active")) {
				targetParent.classList.remove("active")
  			} else {
  				targetParent.classList.add("active")
  			}	
  		} 

  		var targetParent = event.target.parentElement;
  		if (targetParent && targetParent.classList.contains("admin-dropdown")){
  			if (targetParent.classList.contains("active")) {
				targetParent.classList.remove("active")
  			} else {
  				targetParent.classList.add("active")
  			}	
  		} 
	}));
  	

	document.querySelector(".data-grid-filters-actions-wrap").addEventListener("click", function(event){
		var target = event.target.parentElement.parentElement.parentElement;
  		if (target && target.classList.contains("data-grid-filters-actions-wrap")){
  			if (target.classList.contains("active")) {
					target.classList.remove("active")
	  			} else {
	  				target.classList.add("active")
	  		}	
  		}
  		var targets = event.target.parentElement.parentElement;
  		if (targets && targets.classList.contains("data-grid-filters-actions-wrap")){
  			if (targets.classList.contains("active")) {
					targets.classList.remove("active")
	  			} else {
	  				targets.classList.add("active")
	  		}	
  		}
  		var filterGrid = document.querySelector(".admin__data-grid-filters-wrap");
  		if (filterGrid && filterGrid.classList.contains("active")){
			filterGrid.classList.remove("active")
  		} else {
  			filterGrid.classList.add("active")
  		}
  	})


// Actions js

	var addActive = function(e){
	  e.stopPropagation();
	  document.querySelector(".action-select-wrap").classList.toggle("active")
	};
	var removeActive = function(){
		var searchActive = document.querySelector(".action-select-wrap.active");
		if (searchActive) {
			searchActive.classList.remove("active")
		}
	};
	var searchGlobal= document.querySelector(".action-select-wrap .action-select");
    searchGlobal.addEventListener("click", function(event){
  		addActive(event);
  	})
  	document.querySelector("body").addEventListener("click", function(event){
  		removeActive()
  	})


 // select table

var searchGlobal= document.querySelector("#select-all");
    searchGlobal.addEventListener("click", function(event){
		 var selected = this.checked;
		 var checkboxs = document.querySelectorAll(".admin__control-checkbox");
		 
		 checkboxs.forEach(e => {e.checked = selected});
	})


document.querySelector(".action-multicheck-toggle").addEventListener("click", function(event){
  		var multicheck = document.querySelector(".action-multicheck-wrap");
  		if (multicheck && multicheck.classList.contains("active")){
			multicheck.classList.remove("active")
  		} else {
  			multicheck.classList.add("active")
  		}
  	})


// popup error select

var actionMenu = document.querySelectorAll(".action-select-wrap .action-menu-items .action-menu li");
	if (actionMenu) {
		actionMenu.forEach(item => {item.addEventListener("click", function(event){
			var wrapper = document.querySelector(".modals-wrapper");
			if (wrapper) {
				wrapper.classList.add("active")
			}})
		});
	}

document.querySelector("body").addEventListener("click", function(event){
  		var actionClose = document.querySelector(".modals-wrapper .action-close");
  		if(actionClose) {
			actionClose.addEventListener("click", function(event){
			var wrapper = document.querySelector(".modals-wrapper");
			if (wrapper) {
				wrapper.classList.remove("active")
			}
		  })
		}
		var actionAccept = document.querySelector(".modals-wrapper .action-accept");
		if(actionAccept) {
			actionAccept.addEventListener("click", function(event){
			var wrapper = document.querySelector(".modals-wrapper");
			if (wrapper) {
				wrapper.classList.remove("active")
			}
		  })
		}
  	})
	var actionClose = document.querySelector(".modals-wrapper .action-close");
	if(actionClose) {
		actionClose.addEventListener("click", function(event){
		var wrapper = document.querySelector(".modals-wrapper");
		if (wrapper) {
			wrapper.classList.remove("active")
		}
	  })
	}


var actionAccept = document.querySelector(".modals-wrapper .action-accept");
	if(actionAccept) {
		actionAccept.addEventListener("click", function(event){
		var wrapper = document.querySelector(".modals-wrapper");
		if (wrapper) {
			wrapper.classList.remove("active")
		}
	  })
	}