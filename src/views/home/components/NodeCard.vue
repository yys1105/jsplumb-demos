<template>
  <!-- <span> -->
  <div class="node-card-wrap node-component" :id="id">
    <div class="header">
      <div class="title">{{title}}</div>
      <div class="btn-group">
        <div class="btn">
          <i class="el-icon-edit-outline"></i>
        </div>
        <div class="btn" @click="removeNode">
          <i class="iconfont icon-guanbi"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
  <!-- </span> -->
</template>

<script>
export default {
  props: {
    title: String,
    id: String
  },
  data() {
    return {};
  },
  methods: {
    removeNode() {
      this.$event.$emit("jsPlumbRemoveById", this.id);
      // jsPlumb.remove(this.id);
    }
  }
};
</script>
<style lang="stylus" scoped>
.node-card-wrap
  display: inline-block
  border-radius: 4px
  background-color: #fff
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  position: absolute
  .header
    display: flex
    align-items: center
    padding: 9px 14px
    border-bottom: 1px solid #e2e2e2
    .title
      font-size: 13px
      flex: 1
      margin-right: 35px
    .btn-group
      display: flex
      align-items: center
      .btn
        .iconfont
          font-size: 13px
      .btn+.btn
        margin-left: 8px
  .content
    font-size: 13px
    padding: 9px 14px
</style>
