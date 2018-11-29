<template>
  <div id="app" @click="appClick">
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    appClick(event) {
      this.$event.$emit("appClick", event);
    }
  },
  mounted() {
    this.$event.$on("errorNetWork", msg => {
      // this.$message.error(msg);
    });
  }
};
</script>

<style lang="stylus">
@import '//at.alicdn.com/t/font_939838_c2uz9codqa.css'
</style>