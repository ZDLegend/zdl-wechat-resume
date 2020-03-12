const LocalData = {
  baseInfo: {
    enName:'暗浩',
    title: 'java开发工程师',  //职位英文名
    nameAndSex: '暗号 / 男', //中文名/性别
    birthday: '1992/09/04', //生日
    diplomaAndSchool: '本科 / 浙江工业大学信息工程学院(2011-2015)', //学历/学校
    workAge: '5年', //工作年限
    location: '杭州',  //工作地点
    wantPosition: 'java开发工程师', //期望职位
    salary: '20K/月', //期望薪酬
    mobilePhone: '187xxxxxxxx',//移动手机
    email: '463764941@qq.com',//邮箱
    github: 'ZDLegend', //github 用户名
    githubUrl: 'https://github.com/ZDLegend', //github主页
    photo:'../../images/photo.jpeg',
    wechatNo: 'zmh521125',//微信号
  },
  isShowContact: true, //是否显示联系方式
  workList: [ //工作经验
    {
      title: 'XXXX有限公司（2018年9月 ~ 至今）',
      projectList: [
        {
          projectName: '数据平台开发',
          duty: '代码编写',
          info: '内部工作日志项目。',
          skill: 'Java/Spring Boot/kafka'
        }
      ],
    },
    {
      title: 'XXXX数字股份有限公司（2017年8月 ~ 2018年8月）',
      projectList: [
        {
          projectName: '共享软件开发部',
          duty: '共享软件管理平台',
          info: '代码编写',
          skill: 'Java/Spring Boot/ES'
        },
        {
          projectName: '共享软件开发部',
          duty: '共享软件中心告警系统',
          info: '基于ebs的订单下单系统',
          skill: 'Java/Spring Boot/Activtie'
        }
      ],
    },
    {
      title: '浙江XX科技有限公司（2015年6月 ~ 2017月7月）',
      projectList: [
        {
          projectName: '数据对接平台',
          duty: '代码编写',
          info: '将第三方TCP协议转为公司自有协议',
          skill: 'Java/Spring Boot/Spring Boot Cloud/netty'
        },
        {
          projectName: 'SDK-Http',
          duty: '代码编写',
          info: '在原有C++ SDK',
          skill: 'Java/Spring Boot/jersey/thrift'
        },
        {
          projectName: '火眼核查',
          duty: '代码编写',
          info: '基于ICE分布式架构',
          skill: 'Java/ICE'
        },
        {
          projectName: 'X86系列产品开发',
          duty: '代码编写',
          info: 'X86系列产品音频特性开发',
          skill: 'C/C++/linux'
        },
      ],
    }
  ],
  skillList: [  //技能清单
    '主要计算机语言：Java',
    '开发框架：Spring Boot',
    '数据框架：Kafka / ES',
    '构建工具：Maven ',
    '数据库相关：Postgres / vatica ',
    '版本管理：Svn / Git',
  ],
  starList: [ //技能关键字start 1-5
    { name: 'Java', star: 5 },
    { name: 'Spring boot', star: 5 },
    { name: 'Linux', star: 4 },
    { name: 'windows', star: 4 },
    { name: 'Git/SVN', star: 4 },
    { name: 'javaStrap', star: 3 },
    { name: 'C/C++', star: 3 },
    { name: 'python', star: 2 },
  ]
}
module.exports = LocalData