<template>
  <div></div>
</template>
<script>
import Vue from "vue";
export default new Vue({
  name: "moduleEvent",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    tip(msg) {
      return new Promise((resolve, reject) => {
        this.$confirm(msg, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    }
  }
});
</script>