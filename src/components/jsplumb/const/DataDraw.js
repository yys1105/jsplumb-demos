import DataProcess from "./DataProcess"
import moduleEvent from '@/event/moduleEvent';

var DataDraw = {
  deleteLine: async function (conn) {
    // if (confirm('确定删除所点击的链接吗？')) {
    //   jsPlumb.deleteConnection(conn)
    // }
    await moduleEvent.tip('确定删除所点击的链接吗？')
    jsPlumb.deleteConnection(conn)
  },
  draw: function (nodes, vim) {
    // 将Exit节点排到最后
    nodes.sort(function (a, b) {
      if (a.type === 'end-node') return 1
      if (b.type === 'end-node') return -1
      return 0
    })
    var me = this
    nodes.forEach(function (item, key) {
      var data = {
        id: item.id,
        name: item.id,
        top: item.top,
        left: item.left,
        choices: item.data.choices || []
      }
      vim.allComponents.push({
        componentName: item.type,
        position: data,
        data: {
          question: item.question
        }
      });
      vim.$nextTick(() => {
        me.mainConnect(nodes)
      })
    })

  },
  connectEndpoint: function (from, to) {
    jsPlumb.connect({
      uuids: [from, to]
    })
  },
  mainConnect: function (nodes) {
    var me = this
    nodes.forEach(function (item) {
      if (me['connectEndpointOf' + item.type]) {
        me['connectEndpointOf' + item.type](item)
      }
    })
  },
  getTemplate: function (node) {
    return $('#tpl-' + node.type).html() || $('#tpl-demo').html()
  },
  computeXY: function (nodes) {
    var matrix = DataProcess.inputData(nodes)
    var base = {
      topBase: 50,
      topStep: 150,
      leftBase: 150,
      leftStep: 200
    }

    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        var key = matrix[i][j]
        var dest = nodes.find(function (item) {
          return item.id === key
        })

        dest.top = dest.top || base.topBase + i * base.topStep
        dest.left = dest.left || base.leftBase + j * base.leftStep
      }
    }
  },
  connectEndpointOfStartNode: function (node) {
    this.connectEndpoint(node.id + '-out', node.data.nextNode + '-in')
  },
  connectEndpointOfOpenQuestion: function (node) {
    //  
    this.connectEndpoint(node.id + '-out', node.data.elseNode + '-in')
  },
  connectEndpointOfWhetherQuestion: function (node) {
    this.connectEndpoint(node.id + 'yes-out', node.data.yesNode + '-in')
    this.connectEndpoint(node.id + 'no-out', node.data.noNode + '-in')
    this.connectEndpoint(node.id + 'else-out', node.data.elseNode + '-in')
  },
  connectEndpointOfEndNode: function (node) {
    this.connectEndpoint(node.id + '-out', node.data.nextNode + '-in')
  },
  connectEndpointOfRoot: function (node) {
    this.connectEndpoint(node.id + '-out', node.data.nextNode + '-in')
  },
  connectEndpointOfAnnounce: function (node) {
    this.connectEndpoint(node.id + '-out', node.data.nextNode + '-in')
  },
  connectEndpointOfWorkTime: function (node) {
    this.connectEndpoint(node.id + '-onWorkTime-out', node.data.onWorkNode + '-in')
    this.connectEndpoint(node.id + '-offWorkTime-out', node.data.offWorkNode + '-in')
  },
  connectEndpointOfMenu: function (node) {
    this.connectEndpoint(node.id + '-noinput-out', node.data.noinput.nextNode + '-in')
    this.connectEndpoint(node.id + '-nomatch-out', node.data.nomatch.nextNode + '-in')

    var me = this

    node.data.choices.forEach(function (item) {
      me.connectEndpoint(node.id + '-key-' + item.key + '-out', item.nextNode + '-in')
    })
  }
}

export default DataDraw