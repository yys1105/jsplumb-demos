<template>
  <flow-chart-layout ref="flowChart" :nodes="nodeData" :nodesPositon="nodesPositon">
    <el-button slot="dragItem" class="drag-item" type="text" icon="el-icon-menu" data-template="StartNode">开始</el-button>
    <el-button slot="dragItem" class="drag-item" type="text" icon="el-icon-menu" data-template="WhetherQuestion">是/否问题</el-button>
    <el-button slot="dragItem" class="drag-item" type="text" icon="el-icon-menu" data-template="OpenQuestion">开放性问题</el-button>
    <el-button slot="dragItem" class="drag-item" type="text" icon="el-icon-menu" data-template="EndNode">结束</el-button>
    <template v-for="item in allComponents">
      <component
        :is="item.componentName"
        :key="item.position.id"
        :id="item.position.id"
        :left="item.position.left"
        :top="item.position.top"
        :generateId="item.position.generateId"
        :data="item.data"
        :type="item.type"
      ></component>
    </template>
  </flow-chart-layout>
</template>

<script>
import StartNode from './components/StartNode';
import WhetherQuestion from './components/WhetherQuestion';
import OpenQuestion from './components/OpenQuestion';
import EndNode from './components/EndNode';
import data from './data.js';
import position from './nodePosition.js';
const nodeData = data;
const nodesPositon = position;
export default {
  props: {},
  data() {
    return {
      allComponents: [],
      nodeData: [],
      nodePosition: {}
    };
  },
  created() {
    this.getNode();
  },
  methods: {
    getNode() {
      // 接口
      this.nodeData = nodeData.data;
      this.nodesPositon = nodesPositon;
      // this.nodesPositon = {};
    }
  },
  components: { StartNode, WhetherQuestion, OpenQuestion, EndNode }
};
</script>
<style lang="stylus" scoped>
.drag-item
  display: block
  margin-left: 0
</style>
