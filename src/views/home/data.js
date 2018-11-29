export default {
  id: 4000,
  name: '功能测试',
  nodeList: [{
    comment: "开始",
    data: {
      nextNode: "whether1"
    },
    id: "start",
    left: 150,
    status: "1",
    top: 50,
    type: "StartNode"
  }, {
    comment: "是/否问题",
    data: {
      yesNode: "open1",
      noNode: "end",
      elseNode: "open1"
    },
    question: '您好！这里是龙湖舜山府，不好意思让您久等了！请问是否感兴趣？',
    id: "whether1",
    left: 400,
    status: "1",
    top: 50,
    type: "WhetherQuestion"
  }, {
    comment: "开放性问题",
    data: {
      elseNode: "open2"
    },
    question: '您是打算自住还是投资呢？',
    id: "open1",
    left: 750,
    status: "1",
    top: 50,
    type: "OpenQuestion"
  }, {
    comment: "开放性问题",
    data: {
      elseNode: "open3"
    },
    question: '你之前关注过龙湖地产吗？',
    id: "open2",
    left: 50,
    status: "1",
    top: 400,
    type: "OpenQuestion"
  }, {
    comment: "开放性问题",
    data: {
      elseNode: "open4"
    },
    question: '您大概需要多大面积的房子，能说下大概的预算么？',
    id: "open3",
    left: 400,
    status: "1",
    top: 400,
    type: "OpenQuestion"
  }, {
    comment: "开放性问题",
    data: {
      elseNode: "end"
    },
    question: '这里先给你预约一下具体时间好吗？',
    id: "open4",
    left: 750,
    status: "1",
    top: 400,
    type: "OpenQuestion"
  }, {
    comment: "结束",
    data: {},
    id: "end",
    left: 650,
    status: "1",
    top: 650,
    type: "EndNode"
  }]
}