<template>
  <node-card title="开始" :id="id" :style="{'top':top+'px','left':left+'px'}">
    <div>发起问题</div>
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
      nodeType: 'StartNode'
    };
  },
  mounted() {
    this.setExitPoint(this.id);
  },
  methods: {},
  components: { NodeCard }
};
</script>

<style scoped>
</style>