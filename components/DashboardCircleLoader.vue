<template>
    <div>
        <div class="chart" style="background-color:#EFEFEF;border-radius:20px;" ref="item" :data-percent="percent">
            <span class="percent" data-after="%">{{percent}}</span>
        </div>
    </div>
</template>
<script>
import EasyPieChart from 'easy-pie-chart';
export default {
    props:{
        percent:Number,
        barColor:String,
    },
    watch:{
        percent(){
            this.preload()
        }
    },
    computed: {
        color(){
            if(this.percent == 0) return '#c23616';
            else if(this.percent <= 10) return '#e1b12c';
            else if(this.percent <= 25) return '#192a56';
            else if(this.percent <= 50) return '#40739e';
            else if(this.percent >= 75) return '#44bd32';
        }
    },
    mounted() {
        this.preload()
    },
    methods: {
        preload(){
        var element = this.$refs.item;
        new EasyPieChart(element, {
            barColor:this.color,
			easing: 'easeOutElastic',
			delay: 10,
			trackColor: '#CECECE',
			scaleColor: false,
            scaleLength:32,
			lineWidth: 10,
			trackWidth: 2,
			size: 200,
            rotate:40,
            lineCap: 'round',
	        onStep: function(from, to, percent) {
				this.el.children[0].innerHTML = Math.round(percent);
			}            
        });
        }
    },
}
</script>