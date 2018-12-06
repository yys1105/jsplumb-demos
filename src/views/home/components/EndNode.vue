<template>
  <node-card title="结束" :id="id" :style="{'top':top+'px','left':left+'px'}">
    <div>结束问题</div>
  </node-card>
</template>

<script>
import flowChartMixins from '@/components/flow-chart/mixins';
import NodeCard from './NodeCard';
export default {
  mixins: [flowChartMixins],
  props: {},
  data() {
    return {
      nodeType: 'EndNode'
    };
  },
  mounted() {
    this.setEnterPoint(this.id);
  },
  methods: {},
  components: { NodeCard }
};
</script>

<style scoped>
</style>