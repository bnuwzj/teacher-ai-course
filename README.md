<div align='center'>

# 高校老师 AI 实用课

**11 个真实教学场景，把 AI 用进备课、上课和日常事务**

<img src="https://img.shields.io/badge/language-Chinese-brightgreen?style=flat" alt="Language"/>
<img src="https://img.shields.io/badge/course-11-blue?style=flat" alt="Lessons"/>
<img src="https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey" alt="License"/>

</div>

## 在线学习

`https://bnuwzj.github.io/teacher-ai-course/courses/`

## 课程导航

| 课程 | 标题 |
| --- | --- |
| [备课提示词](https://bnuwzj.github.io/teacher-ai-course/courses/01/) | 学会写备课提示词，让 AI 直接产出规范可用的 Word 版教案 |
| [分层作业](https://bnuwzj.github.io/teacher-ai-course/courses/02/) | 一个班四十人水平差一大截，布置一样的作业——好的发呆，弱的写到十点还错一半。 |
| [课件加工](https://bnuwzj.github.io/teacher-ai-course/courses/03/) | 把 AI 生成的课件内容加工成真正能上课的 PPT |
| [快速精读](https://bnuwzj.github.io/teacher-ai-course/courses/04/) | 用 AI 快速提炼政策文件与论文的重点内容 |
| [教学知识库](https://bnuwzj.github.io/teacher-ai-course/courses/05/) | 搭建适合高校老师的 AI 知识库，沉淀教学科研资料 |
| [行政材料](https://bnuwzj.github.io/teacher-ai-course/courses/06/) | 让AI自动写行政材料，填表、申报更轻松 |
| [成绩分析](https://bnuwzj.github.io/teacher-ai-course/courses/07/) | 用 AI 高效完成成绩统计与学情分析 |
| [定时任务](https://bnuwzj.github.io/teacher-ai-course/courses/08/) | 用 AI 定时任务自动处理日常办公事项 |
| [移动办公](https://bnuwzj.github.io/teacher-ai-course/courses/09/) | 移动办公：在手机上用WorkBuddy |
| [一键流程](https://bnuwzj.github.io/teacher-ai-course/courses/10/) | 重复任务：Skill一键调用常用流程 |
| [技能共享](https://bnuwzj.github.io/teacher-ai-course/courses/11/) | 在课题组内共享优秀 AI 技能包，团队共同提效 |

## 本地预览

```bash
npm install
npm run docs:dev      # http://localhost:5173/teacher-ai-course/
```

## 目录结构

```text
teacher-ai-course/
├── README.md
├── package.json
├── .github/workflows/deploy.yml
└── docs/
    ├── index.md                  首页
    ├── courses/
    │   ├── index.md              课程目录
    │   └── 01/index.md …         每课一页
    ├── public/course-assets/01/  该课图片与附件
    └── .vitepress/
        ├── config.mts            站点、侧边栏、素材改写插件
        └── theme/                自定义样式与图片放大
```

## 内容说明

- 课程内容由 江南大学联通主义学习研究团队 提供，共 11 讲。
- 视频以微信视频号外链提供，点击课程页内的「观看本课视频」即可。
- 文字与图片版权归原作者所有，按 CC BY-NC-SA 4.0 使用。
