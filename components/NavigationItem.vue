<template>
  <li class="level-0" :class="{active:active}" >
    {{ active }}
    <template v-if="item.children">
        <a href="javascript.void(0);" class="disabled" :class="{active:active}" @click.prevent="make_visible">
            <div class="py-2 fa-2x" :class="item.icon"></div> <br/>
            {{item.name}} 
        </a>
        <div class="submenu" v-if="is_active">
			<strong class="submenu-title">{{item.name}}</strong>
			<a href="#" class="action-close" @click="active=!active"></a>            
            <ul class="submenu">
                <li class="column" v-for="(child, index) in item.children" :key="index">
                    <ul>
                        <li class="parent">
                            <strong class="submenu-group-title">{{child.group}}</strong>
                            <div class="submenu" >
                                <ul>
                                    <li v-for="(child_item, indexTwo) in child.items" :key="indexTwo">
                                        <nuxt-link :to="child_item.route" @click.native="is_active=!is_active"
                                       
                                        >{{child_item.name}}   </nuxt-link>
                                         
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </template>
    <nuxt-link v-else :to="item.route">
        <div class="py-2 fa-2x" :class="item.icon"></div> <br/>
        {{item.name}}
    </nuxt-link>
  </li>
</template>
<script>
  export default {
    props: {
      item: Object,
    },
    mounted() {
      is_active:true
       
    },
    methods:{
      make_visible () {
        this.active = true;
        this.is_active = true;
      }
    },
    data() {
      return {
        active: false,
        is_active:true,
      }
    },
  }
</script>