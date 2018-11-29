<template>
  <div class='node' :id='id' :style="{'top':top+'px','left':left+'px'}">
    <node-card title="是/否问题" :id="id">
      <div class="question-wrap">
        <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-edit" v-model="question">
        </el-input>
      </div>
      <div class="answer-wrap">
        <div class="answer-item" :id="setId()" :data-pid="id" data-type="yes">是</div>
        <div class="answer-item" :id="setId()" :data-pid="id" data-type="no">否</div>
        <div class="answer-item" :id="setId()" :data-pid="id" data-type="else">任意回答</div>
      </div>
    </node-card>
  </div>
</template>

<script>
import visoConfig from "./const/visoConfig";
import NodeCard from "./components/node-card";
import UUID from "uuid-js";
export default {
  props: {
    id: String,
    left: Number,
    top: Number,
    generateId: Function,
    data: {
      type: Object,
      default: function() {
        return {
          question: ""
        };
      }
    }
  },
  data() {
    return {
      visoConfig,
      question: this.data.question || ""
    };
  },
  mounted() {
    this.initSetNode();
  },
  methods: {
    setId() {
      return UUID.create(1).hex;
    },
    initSetNode() {
      this.addDraggable(this.id);
      this.setEnterPoint(this.id);
      this.setExitMenuItem(this.id);
    },
    setExitMenuItem(id) {
      const vim = this;
      $("#" + id)
        .find(".answer-item")
        .each((key, value) => {
          let type = value.getAttribute("data-type");
          vim.setExitPoint(value.id, "Right", type);
        });
    },
    addDraggable(id) {
      jsPlumb.draggable(id, {
        containment: "parent"
      });
    },
    setEnterPoint(id) {
      var config = this.getBaseNodeConfig();

      config.isSource = false;
      config.maxConnections = -1;

      jsPlumb.addEndpoint(
        id,
        {
          anchors: "Top",
          uuid: this.id + "-in"
        },
        config
      );
    },
    // 设置出口点
    setExitPoint(id, position, type) {
      var config = this.getBaseNodeConfig();
      config.isTarget = false;
      config.maxConnections = 1;
      jsPlumb.addEndpoint(
        id,
        {
          anchors: position || "Bottom",
          uuid: this.id + type + "-out"
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
.question-wrap
  padding: 10px 0
.answer-wrap
  .answer-item
    margin: 2px 0
    width: 200px
    padding-left: 8px
    line-height: 26px
    background-color: #f6f6f6
</style>
