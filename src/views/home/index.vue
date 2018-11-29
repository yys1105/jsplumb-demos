<template>
  <div class="jsplumb-wrap">
    <div id="side-buttons" class="sider-bar-wrap" :style="{height:componentHeight}">
      <!-- tip: .btn-controler标记可拖动的元素 -->
      <el-button class="btn-item btn-controler" type="text" icon="el-icon-menu" data-template="StartNode">开始</el-button>
      <el-button class="btn-item btn-controler" type="text" icon="el-icon-menu" data-template="WhetherQuestion">是/否问题</el-button>
      <el-button class="btn-item btn-controler" type="text" icon="el-icon-menu" data-template="OpenQuestion">开放性问题</el-button>
      <el-button class="btn-item btn-controler" type="text" icon="el-icon-menu" data-template="EndNode">结束</el-button>
    </div>
    <div class="main-content-wrap" :style="{height:componentHeight}">
      <div id="drop-bg" class="main-content">
        <template v-for="item in allComponents">
          <component :is="item.componentName" :id="item.position.id" :left="item.position.left" :top="item.position.top" :generateId="item.position.generateId" :data="item.data"></component>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
import { jsPlumb } from "jsplumb";
import UUID from "uuid-js";
import DataDraw from "@/components/jsplumb/const/DataDraw";
import testData from "./data.js";
export default {
  props: {},
  data() {
    return {
      area: "drop-bg",
      areaId: "#drop-bg",
      DataDraw,
      step: 0,
      allComponents: []
    };
  },
  computed: {
    componentHeight: function() {
      return document.documentElement.clientHeight - 51 + "px";
    }
  },
  mounted() {
    jsPlumb.ready(this.main);
    jsPlumb.importDefaults({
      ConnectionsDetachable: false
    });
  },
  methods: {
    main() {
      $(".btn-controler").draggable({
        helper: "clone",
        scope: "ss",
        cancel: ".title"
      });
      $(this.areaId).droppable({
        scope: "ss",
        drop: (event, ui) => {
          this.dropNode(ui.draggable[0].dataset.template, ui.position);
        }
      });
      $("#app").on("click", event => {
        event.stopPropagation();
        event.preventDefault();
        this.eventHandler(event.target.dataset);
      });
      // 双击删除线
      jsPlumb.bind("dblclick", (conn, originalEvent) => {
        this.DataDraw.deleteLine(conn);
      });
      // 根据数据绘制
      DataDraw.draw(testData.nodeList, this);
    },
    // 放入拖动节点
    dropNode(template, position) {
      position.left -= 200
      position.id = UUID.create(1).hex;
      position.generateId = () => UUID.create(1).hex;
      // 动态添加组件

      this.allComponents.push({
        componentName: template,
        position: position
      });
    },
    // 事件处理
    eventHandler(data) {
      if (data.type === "deleteNode") {
        this.emptyNode(data.id);
      }
    },
    // 删除一个节点以及
    emptyNode(id) {
      jsPlumb.remove(id);
    }
  }
};
</script>
<style>
.jsplumb-wrap .btn-item {
  margin: 10px auto 0 auto;
  /* display: block; */
}
</style>
<style lang="stylus" scoped>
.jsplumb-wrap
  display: flex
  position: relative
  .sider-bar-wrap
    width: 120px
    border-right: solid 1px #e6e6e6
    padding: 0 15px
  .main-content-wrap
    flex: 1
    position: relative
    overflow auto
    height 100%
    .main-content 
      height 3000px
</style>


