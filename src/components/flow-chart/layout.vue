<template>
  <div class="layout-wrap" :style="{height:componentHeight}">
    <div class="sider-bar">
      <el-button-group class="btn-group">
        <el-button type="primary" @click="clearAll">清空</el-button>
        <el-button type="primary" @click="saveData">保存</el-button>
      </el-button-group>
      <slot name="dragItem"></slot>
    </div>

    <div class="main-content">
      <div id="drop-bg" class="chart">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { jsPlumb } from 'jsplumb';
import UUID from 'uuid-js';
import dataDraw from './mixins/dataDraw.js';
export default {
  mixins: [dataDraw],
  props: {
    nodes: Array,
    nodesPositon: Object
  },
  data() {
    return {};
  },
  mounted() {
    jsPlumb.ready(this._main);
    this.$event.$on('jsPlumbRemoveById', id => {
      this.emptyNode(id);
    });
  },
  methods: {
    _main() {
      let vim = this;
      // 设置可拖动目录节点
      this.$slots.dragItem &&
        this.$slots.dragItem.forEach(vNode => {
          $(vNode.elm).draggable({
            helper: 'clone',
            scope: 'ss',
            cancel: '.title'
          });
        });
      // 设置放置区域
      $('#drop-bg').droppable({
        scope: 'ss',
        drop: (event, ui) => {
          this._dropNode(ui.draggable[0].dataset.template, ui.position);
        }
      });
      jsPlumb.bind('dblclick', (conn, originalEvent) => {
        jsPlumb.deleteConnection(conn);
        let sourceComponent = vim.$children.find(item => {
          return Object.keys(item.exitNode || '').indexOf(conn.sourceId) > -1;
        });
        let targetComponent = vim.$children.find(item => item.id == conn.targetId);
        delete sourceComponent.currentNode[sourceComponent.exitNode[conn.sourceId]];
      });
      // jsPlumb.bind('connection', connInfo => {
      //   // debugger;
      // });
      // 根据节点渲染
      this.draw(this.nodes);
    },
    // 放入拖动节点
    _dropNode(template, position) {
      position.left -= 200;
      position.id = UUID.create(1).hex;
      position.generateId = () => UUID.create(1).hex;
      // 动态添加组件
      this.$parent.allComponents.push({
        componentName: template,
        position: position
      });
    },
    clearAll() {
      this.$parent.allComponents.forEach(item => {
        this.emptyNode(item.position.id);
      });
    },
    emptyNode(id) {
      jsPlumb.remove(id);
      let index = null;
      this.$parent.allComponents.forEach((item, i) => {
        if (item.position.id == id) index = i;
      });
      this.$parent.allComponents.splice(index,1)
    },
    saveData() {
      let vim = this;
      var connections = jsPlumb.getConnections();
      connections.forEach(one => {
        // console.log(one.sourceId + ':' + one.targetId);
        let sourceComponent = vim.$children.find(item => {
          return Object.keys(item.exitNode || '').indexOf(one.sourceId) > -1;
        });
        let targetComponent = vim.$children.find(item => item.id == one.targetId);
        sourceComponent.currentNode[sourceComponent.exitNode[one.sourceId]] = one.targetId;
      });
      let resData = [];
      this.$children.forEach(item => {
        if (item.currentNode) resData.push(item.currentNode);
      });
      console.log(resData);
    }
  },
  computed: {
    componentHeight: function() {
      return document.documentElement.clientHeight - 51 + 'px';
    }
  }
};
</script>
<style lang="stylus" scoped>
.layout-wrap
  display: flex
  position: relative
  .sider-bar
    width: 120px
    border-right: solid 1px #e6e6e6
    padding: 0 15px
  .main-content
    flex: 1
    position: relative
    overflow: auto
    height: 100%
    .chart
      height: 3000px
.btn-group
  position: fixed
  top: 5px
  right: 30px
  z-index: 9999999
</style>
