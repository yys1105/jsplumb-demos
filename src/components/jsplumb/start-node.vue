<template>
  <div class='node' :id='id' :style="{'top':top+'px','left':left+'px'}">
    <node-card title="开始" :id="id">
      <div>发起问题</div>
    </node-card>
  </div>
</template>

<script>
import visoConfig from "./const/visoConfig";
import NodeCard from "./components/node-card";
export default {
  props: {
    id: String,
    left: Number,
    top: Number
  },
  data() {
    return {
      visoConfig
    };
  },
  mounted() {
    this.initSetNode();
  },
  methods: {
    initSetNode() {
      this.addDraggable(this.id);
      // this.setEnterPoint(this.id);
      this.setExitPoint(this.id);
    },
    addDraggable(id) {
      jsPlumb.draggable(id, {
        containment: "parent"
      });
    },
    // setEnterPoint(id) {
    //   var config = this.getBaseNodeConfig();

    //   config.isSource = false;
    //   config.maxConnections = -1;

    //   jsPlumb.addEndpoint(
    //     id,
    //     {
    //       anchors: "Top",
    //       uuid: id + "-in"
    //     },
    //     config
    //   );
    // },
    // 设置出口点
    setExitPoint(id, position) {
      var config = this.getBaseNodeConfig();

      config.isTarget = false;
      config.maxConnections = 1;

      jsPlumb.addEndpoint(
        id,
        {
          anchors: position || "Bottom",
          uuid: this.id + "-out"
        },
        config
      );
    },
    getBaseNodeConfig() {
      return Object.assign({}, this.visoConfig.baseStyle);
    }
  },
  components: { NodeCard }
};
</script>
<style lang="stylus" scoped>
.node
  position: absolute
</style>
