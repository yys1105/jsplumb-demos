import visoConfig from "../const/visoConfig"
import UUID from "uuid-js";
const nodesMapping = {
    "StartNode": "start",
    "WhetherQuestion": "collect",
    "OpenQuestion": "open",
    "EndNode": "end"
}
export default {
    props: {
        id: String,
        left: Number,
        top: Number,
        generateId: Function,
        data: {
            type: Object,
            default: function () {
                return {
                    question: ""
                };
            }
        }
    },
    data() {
        return {
            exitNode: [],
            currentNode: {
                nodeId: this.id,
                nodeType: '',
                orgId: "ketiayun",
                preNodeId: "",
                questionnaireId: "questionnaireid1"
            }
        };
    },
    watch: {
        'question':function(val){
            this.currentNode.speechcraft = val
        }
    },
    mounted() {
        this._initSetNode();
        // jsPlumb.bind("connection", function (connInfo, originalEvent) {
        //     debugger
        // })
        this.currentNode.nodeType = nodesMapping[this.nodeType]
    },
    methods: {
        _initSetNode() {
            this._addDraggable(this.id);
        },
        _addDraggable(id) {
            jsPlumb.draggable(id, {
                containment: "parent"
            });
        },
        // 设置出口点
        setExitPoint(id, position, type) {
            var config = { ...this.getBaseNodeConfig };
            config.isTarget = false;
            config.maxConnections = 1;
            let uuid = type ? this.id + type + "-out" : this.id + "-out"
            if (type) {
                // this.exitNode.push({[type+'NextNodeId']:this.id})
                // this.exitNode.push({ [id]: type + 'NextNodeId' })
                this.exitNode[id] = type + 'NextNodeId'
            } else {
                // this.exitNode = [{ [id]: 'NextNodeId' }]
                this.exitNode[id] = 'nextNodeId'
            }
            jsPlumb.addEndpoint(
                id,
                {
                    anchors: position || "Bottom",
                    uuid: uuid
                },
                config
            );
        },
        // 设置入口点
        setEnterPoint(id) {
            var config = { ...this.getBaseNodeConfig };
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
        randomId() {
            let uuid = UUID.create(1).hex
            return uuid;
        }
    },
    computed: {
        getBaseNodeConfig: function () {
            return Object.assign({}, visoConfig.baseStyle);
        },
        // currentNode: function () {
        //     return {

        //     }
        // }
    }
};