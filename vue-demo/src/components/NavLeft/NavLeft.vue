<template>

  <div class="layui-side-scroll">
    <ul class="layui-nav layui-nav-tree" lay-filter="test">
        <li class="layui-nav-item" v-for="item in getmenuList"> 
            <a href="javascript:;" class="firstA"><i class="layui-icon layui-icon-face-smile"></i>{{item.name}}</a>
            <dl class="layui-nav-child" v-for="itemOne in item.children">
                <dd><router-link :to= itemOne.url>{{itemOne.name}}</router-link></dd>
            </dl>
        </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapGetters, mapActions} from "vuex"
export default {
    data() {
			return {
                menus:{},
               
			}
        },
    methods: {
        handleOpen(key, keyPath) {
           
        },
        handleClose(key, keyPath) {
            
        }
        // getData(){
        //     var _this = this;
        //     var page  = 1;
        //     var limit = 10
        //     var _params = {				
        //         "method" : "/dept/list?limit="+limit+"&page="+page+"",
        //     }
        //     _this.$get(_params).then(res => {
        //         _this.menus=res.data.data
        //     }).catch(err => {
        //         alert(err.response.data.message);
        //     })
        // } 
    },
    mounted(){
        // this.getData();
        console.log(this.getmenuList);
        layui.use('element', function(){
        var element = layui.element;
        //…
        });
    },
    computed:{
        ...mapGetters([
            "getmenuList"
        ])
    }
    
}
</script>

<style lang="less" scoped>
.layui-nav{
    overflow-y: auto;
}
.el-col-12 {
    width: 100%;
    height: 100%;
}
.layui-nav-item a{
    display: flex;
}
.layui-nav-item a i{
   margin-right: 15px;
}

.layui-nav-child a{
   display: flex;
   justify-content: center;
}
</style>

