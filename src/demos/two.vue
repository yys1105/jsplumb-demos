<template>
  <div id="diagramContainer">
    <div id="item_left" ref="item_left" class="item"></div>
    <div id="item_right" ref="item_right" class="item" style="left:150px;"></div>
  </div>
</template>

<script>
import { jsPlumb } from "jsplumb";
export default {
  props: {},
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      // jsPlumb.ready(function() {
      //   jsPlumb.setContainer("diagramContainer");

      //   var common = {
      //     isSource: true,
      //     isTarget: true,
      //     connector: ["Straight"],
      //     maxConnections: -1
      //   };

      //   jsPlumb.addEndpoint(
      //     "item_left",
      //     {
      //       anchors: ["Right"]
      //     },
      //     common
      //   );

      //   jsPlumb.addEndpoint(
      //     "item_right",
      //     {
      //       anchor: "Left"
      //     },
      //     common
      //   );

      //   jsPlumb.addEndpoint(
      //     "item_right",
      //     {
      //       anchor: "Right"
      //     },
      //     common
      //   );

      //   jsPlumb.importDefaults({
      //     ConnectionsDetachable: false
      //   });

      //   jsPlumb.draggable("item_left", {
      //     containment: "parent",
      //     grid: [10, 10]
      //   });
      //   jsPlumb.bind("click", function(conn, originalEvent) {
      //     if (window.prompt("确定删除所点击的链接吗？ 输入1确定") === "1") {
      //       console.log(jsPlumb);
      //       jsPlumb.remove("item_left");
      //       jsPlumb.deleteConnection(conn);
      //     }
      //   });

      //   jsPlumb.draggable("item_left");
      //   jsPlumb.draggable("item_right");
      // });
      // jsPlumb.ready(function() {
      //   jsPlumb.makeSource("item_left", {
      //     endpoint: "Dot",
      //     anchor: "Continuous"
      //   });

      //   jsPlumb.makeTarget("item_right", {
      //     endpoint: "Dot",
      //     anchor: "Continuous"
      //   });

      //   // jsPlumb.draggable("item_left");
      //   jsPlumb.draggable("item_right");
      //   var baseZoom = 1;
      //   setInterval(() => {
      //     baseZoom -= 0.1;
      //     if (baseZoom < 0.5) {
      //       baseZoom = 1;
      //     }
      //     zoom(baseZoom);
      //   }, 1000);
      // });
    });
  }
};
</script>

<style scoped lang="stylus">
#diagramContainer
  position: relative
  padding: 20px
  width: 80%
  height: 400px
  border: 1px solid gray
  background-image: url('http://p3alsaatj.bkt.clouddn.com/20180227163310_1bVYeW_grid.jpeg') // p3alsaatj.bkt.clouddn.com/20180227163310_1bVYeW_grid.jpeg); // p3alsaatj.bkt.clouddn.com/20180227163310_1bVYeW_grid.jpeg);
  background-repeat: repeat
.item
  position: absolute
  width: 100px
  height: 100px
  top: 0
  left: 0
  background-color: #e2e2e2
  display: inline-block
</style>