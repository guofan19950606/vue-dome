<template>
  <div class="Content">
    <div class="layui-body-header">
      <span class="layui-body-header-title">部门管理</span>
    </div>
    <div class="layui-fluid">
        <div class="treeConstruction">

          <Tree :data="data2">
            <Icon type="ios-checkmark" />
          </Tree>

        </div>
        <div class="tableData">
            <table id="demo" lay-filter="test"></table>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    data () {
            return {
                data2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
    methods: {
     
    },
    mounted(){
        layui.use('table', function(){
        var table = layui.table;
        //第一个实例
        var s = 'http://192.168.20.49:8898';
        table.render({
          elem: '#demo'
          ,height: 312
          ,url: s+'/dept/list'//数据接口
          ,headers:{
            Authorization:localStorage.getItem('Authorization')
          }
          ,page: true //开启分页
          ,cols: [[ //表头
            {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
            ,{field: 'username', title: '用户名', width:80}
            ,{field: 'sex', title: '性别', width:80, sort: true}
            ,{field: 'city', title: '城市', width:80} 
            ,{field: 'sign', title: '签名', width: 177}
            ,{field: 'experience', title: '积分', width: 80, sort: true}
            ,{field: 'score', title: '评分', width: 80, sort: true}
            ,{field: 'classify', title: '职业', width: 80}
            ,{field: 'wealth', title: '财富', width: 135, sort: true}
          ]]
        });
      });
    }
  
}
</script>
<style lang="less" scoped>
 .Content{
     height: 100%;
 }
 .layui-body-header {
    padding: 13px 20px;
    color: #333;
    font-size: 16px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    line-height: 16px;
}
.layui-body-header-title {
    border-left: 4px solid #009688;
    padding-left: 6px;
    display: flex;
}
.layui-fluid{
  display: flex;
  padding: 15px;
  justify-content: space-around;
}
.ivu-tree-childrenl{
  height: 20px;
}
.ivu-tree{
  background: white;
  padding:10px 50px;
  border-radius: 4px;
}
</style>