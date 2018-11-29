<template>
  <div>
    <div id="diagramContainer">
      <div id="item_left" ref="item_left" class="item"></div>
      <div id="item_right" ref="item_right" class="item" style="left:150px;"></div>
    </div>
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
      jsPlumb.ready(function() {
        const common = {
          endpoint: "Rectangle",
          connector: ["Flowchart"],
          anchor: ["Left", "Right"],
          paintStyle: { stroke: "#000", strokeWidth: 3 },
          endpointStyle: {
            fill: "green",
            outlineStroke: "red",
            outlineWidth: 2
          },
          overlays: [
            ["Arrow", { width: 12, length: 12, location: 0.5, label: "111" }]
          ]
        };
        jsPlumb.connect(
          {
            source: "item_left",
            target: "item_right"
          },
          common
        );
        jsPlumb.addEndpoint("item_left", {
          anchors: ["Left"]
        });

        jsPlumb.draggable("item_left");
        jsPlumb.draggable("item_right");
      });
    });
  }
};
</script>

<style lang="stylus" scoped>
#diagramContainer
  position: relative
.item
  position: absolute
  width: 100px
  height: 100px
  top: 0
  left: 0
  background-color: #e2e2e2
  display: inline-block
</style>
