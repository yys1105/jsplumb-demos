  import graphlib from "graphlib"
  var DataProcess = {
    inputData: function (nodes) {
      var ids = this.getNodeIds(nodes)
      var g = new graphlib.Graph()

      ids.forEach(function (id) {
        g.setNode(id)
      })

      var me = this

      nodes.forEach(function (item) {
        if (me['dealNode' + item.type]) {
          me['dealNode' + item.type](g, item)
        } else {
          console.error('have no deal node of ' + item.type)
        }
      })

      console.log(g.nodes())
      var distance = graphlib.alg.dijkstra(g, 'start')
      return this.generateDepth(distance)
    },
    setNodesPosition: function (nodes) {
      var me = this
      nodes.forEach(function (item) {
        me.getNodePosition(item)
      })
    },
    getNodePosition: function (node) {
      var $node = document.getElementById(node.id)
      node.top = parseInt($node.style.top)
      node.left = parseInt($node.style.left)
    },
    generateDepth: function (deep) {
      var depth = []

      Object.keys(deep).forEach(function (key) {
        var distance = deep[key].distance

        if (!depth[distance]) {
          depth[distance] = []
        }

        depth[distance].push(key)
      })
      return depth
    },
    getNodeIds: function (nodes) {
      return nodes.map(function (item) {
        return item.id
      })
    },
    'dealNodeStartNode': function (g, node) {
      this.setEdge(g, node.id, node.data.nextNode)
    },
    'dealNodeWhetherQuestion': function (g, node) {
      this.setEdge(g, node.id, node.data.yesNode)
      this.setEdge(g, node.id, node.data.noNode)
      this.setEdge(g, node.id, node.data.elseNode)

    },
    'dealNodeOpenQuestion': function (g, node) {
      this.setEdge(g, node.id, node.data.elseNode)
    },
    'dealNodeEndNode': function (g, node) {},
    // dealNodeRoot: function (g, node) {
    //   this.setEdge(g, node.id, node.data.nextNode)
    // },
    // dealNodeAnnounce: function (g, node) {
    //   this.setEdge(g, node.id, node.data.nextNode)
    // },
    // dealNodeExit: function (g, node) {

    // },
    // dealNodeWorkTime: function (g, node) {
    //   this.setEdge(g, node.id, node.data.onWorkNode)
    //   this.setEdge(g, node.id, node.data.offWorkNode)
    // },
    // dealNodeMenu: function (g, node) {
    //   this.setEdge(g, node.id, node.data.nextNode)
    // },
    setEdge: function name(g, from, to) {
      console.log(from + ' ---> ' + to)
      g.setEdge(from, to)
    }
  }

  export default DataProcess