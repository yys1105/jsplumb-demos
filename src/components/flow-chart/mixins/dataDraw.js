
const nodesMapping = {
    "start": "StartNode",
    "collect": "OpenQuestion",
    "whether": "WhetherQuestion",
    "transition": "OpenQuestion",
    "open": "OpenQuestion",
    "end": "EndNode"
}
export default {
    data() {
        return {};
    },
    methods: {
        draw(nodes) {
            nodes.sort(function (a, b) {
                if (a.type === 'end') return 1
                if (a.type === 'end') return -1
                return 0
            })
            this._addComponents(nodes)
        },
        _addComponents(nodes) {
            nodes.forEach(node => {
                var position = {
                    id: node.nodeId,
                    top: this.nodesPositon[node.nodeId] && this.nodesPositon[node.nodeId].top || 150,
                    left: this.nodesPositon[node.nodeId] && this.nodesPositon[node.nodeId].left || 300,
                }
                this.$parent.allComponents.push({
                    componentName: nodesMapping[node.nodeType],
                    position: position,
                    data: {
                        question: node.speechcraft
                    }
                });
            });
            this.$nextTick(() => {
                this._mainConnect(nodes)
            })
        },
        _mainConnect(nodes) {
            nodes.forEach(node => {
                this._connectComponents(node)
            })
        },
        _connectComponents(node) {
            switch (node.nodeType) {
                case 'whether':
                    this._connectEndpoint(node.nodeId + 'yes-out', node.yesNextNodeId + '-in')
                    this._connectEndpoint(node.nodeId + 'no-out', node.noNextNodeId + '-in')
                    this._connectEndpoint(node.nodeId + 'else-out', node.elseNextNodeId + '-in')
                    break;
                case 'end':
                    // this._connectEndpoint(node.nodeId + 'yes-out')
                    break;
                default:
                    this._connectEndpoint(node.nodeId + '-out', node.nextNodeId + '-in')
                    break;
            }
        },
        _connectEndpoint: function (from, to) {
            jsPlumb.connect({
                uuids: [from, to]
            })
        },
    }
};