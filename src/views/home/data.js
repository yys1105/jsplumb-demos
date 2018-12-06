export default {
  "code": 200, "data": [
    {
      "nextNodeId": "nodeid2",
      "nodeId": "nodeid1",
      "nodeType": "start",
      "orgId": "ketiayun",
      "questionnaireId": "questionnaireid1",
      "speechcraft": "您好！这里是龙湖舜山府，不好意思让您久等了！我是这里的置业 顾问。"
    },
    {
      "nextNodeId": "nodeid11",
      "nodeId": "nodeid10",
      "nodeType": "collect",
      "orgId": "ketiayun",
      "preNodeId": "",
      "questionnaireId":
        "questionnaireid1",
      "speechcraft": "您的工作地点呢？"
    },
    {
      "nextNodeId": "nodeid12",
      "nodeId": "nodeid11",
      "nodeType": "collect", "orgId": "ketiayun", "preNodeId": "", "questionnaireId": "questionnaireid1", "speechcraft": "请问您方便留下一个联系方式吗？"
    }, {
      "nextNodeId": "nodeid13",
      "nodeId": "nodeid12", "nodeType": "collect", "orgId": "ketiayun", "preNodeId": "", "questionnaireId": "questionnaireid1", "speechcraft": "那您大概什么时候有时间去北城天街的外展点呢？因为我们现场客 户比较多，为了不耽误您的时间，这里先给您预约一下具体时间好吗？"
    },
    { "nodeId": "nodeid13", "nodeType": "end", "orgId": "ketiayun", "questionnaireId": "questionnaireid1", "speechcraft": "感谢您的来电，期待您成为龙湖业主。再见。" }, { "infoExpandTableId": "qninfoid1", "nextNodeId": "nodeid3", "nodeId": "nodeid2", "nodeType": "collect", "orgId": "ketiayun", "questionnaireId": "questionnaireid1", "speechcraft": "请问您贵姓？怎么称呼您？" }, {
      "elseNextNodeId": "nodeid4", "noAnswer": "", "noNextNodeId": "nodeid4", "nodeId": "nodeid3", "nodeType": "whether", "orgId": "ketiayun", "questionnaireId": "questionnaireid1", "speechcraft": "%Name%您好，您是打算自住还是投资呢？", "yesAnswer": "", "yesNextNodeId": "nodeid4"
    },
    {
      "elseNextNodeId": "nodeid6",
      "noNextNodeId": "nodeid6",
      "nodeId": "nodeid4",
      "nodeType": "whether",
      "orgId": "ketiayun",
      "questionnaireId": "questionnaireid1",
      "speechcraft": "您之前关注过龙湖地产吗？",
      "yesNextNodeId": "nodeid5"
    }, { "nextNodeId": "nodeid7", "nodeId": "nodeid5", "nodeType": "transition", "orgId": "ketiayun", "questionnaireId": "questionnaireid1", "speechcraft": "感谢您的关注!" }, { "nextNodeId": "nodeid7", "nodeId": "nodeid6", "nodeType": "transition", "orgId": "ketiayun", "questionnaireId": "questionnaireid1", "speechcraft": "是这样的，龙湖这个项目是高端城市综合体，是非常值得您期待 的。" }, {
      "nextNodeId": "nodeid8", "nodeId": "nodeid7", "nodeType": "open", "orgId": "ketiayun", "preNodeId": "", "questionnaireId": "questionnaireid1",
      "speechcraft": "您大概需要多大面积的房子，能说下大概的预算吗？%Name%我 先帮您记录下来，您现在有空也可以来我们的售楼处或者展点了解下项目情况和位置。"
    }, { "nextNodeId": "nodeid9", "nodeId": "nodeid8", "nodeType": "collect", "orgId": "ketiayun", "preNodeId": "", "questionnaireId": "questionnaireid1", "speechcraft": "请问%Name%您是从哪里了解到我们楼盘的信息的呢？" }, { "nextNodeId": "nodeid10", "nodeId": "nodeid9", "nodeType": "collect", "orgId": "ketiayun", "preNodeId": "", "questionnaireId": "questionnaireid1", "speechcraft": "您现在居住在哪个区域呢？" }], "message": "success"
}