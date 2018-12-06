<template>
  <node-card title="是/否问题" :id="id" :style="{'top':top+'px','left':left+'px'}">
    <div class="question-wrap">
      <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-edit" v-model="question"></el-input>
    </div>
    <div class="answer-wrap">
      <div class="answer-item" :id="randomId()" data-type="yes">是</div>
      <div class="answer-item" :id="randomId()" data-type="no">否</div>
      <div class="answer-item" :id="randomId()" data-type="else">任意回答</div>
    </div>
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
      question: this.data.question || '',
      nodeType: 'WhetherQuestion'
    };
  },
  mounted() {
    let vim = this;
    this.setEnterPoint(this.id);
    $('#' + this.id)
      .find('.answer-item')
      .each((key, value) => {
        let type = value.getAttribute('data-type');
        vim.setExitPoint(value.id, 'Right', type);
      });
  },
  components: { NodeCard }
};
</script>
<style lang="stylus" scoped>
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
