import { defineConfig } from 'vitepress'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// GitHub Pages 是仓库子路径，base 必须写成 /<repo-name>/
const baseConfig = '/teacher-ai-course/'

// 把 '../../public/course-assets/NN/xxx' 改写成站点绝对路径；
// 顺便在构建期检查素材是否真的存在，缺一个就报错，避免上线后图裂。
function courseAssets(md) {
  for (const [rule, attribute] of [['link_open', 'href'], ['image', 'src']]) {
    const original = md.renderer.rules[rule]
    md.renderer.rules[rule] = (tokens, index, options, env, self) => {
      const token = tokens[index]
      const value = token.attrGet(attribute) || ''
      const prefix = '../../public/course-assets/'
      if (value.startsWith(prefix)) {
        const relative = 'course-assets/' + decodeURIComponent(value.slice(prefix.length))
        const file = fileURLToPath(new URL('../public/' + relative, import.meta.url))
        if (!existsSync(file)) throw new Error('Missing course resource: ' + relative)
        if (rule === 'link_open') {
          token.attrSet('class', 'file-chip')
          // 必须带 download：否则 VitePress 会把站内路径再拼一次 base，变成 /repo/repo/...
          token.attrSet('download', '')
          token.attrSet('href', baseConfig + relative)
        } else {
          token.attrSet('src', '/' + relative)
        }
      }
      return original ? original(tokens, index, options, env, self) : self.renderToken(tokens, index, options)
    }
  }
}

export default defineConfig({
  lang: 'zh-CN',
  srcExclude: ['public/**'],
  title: '高校老师 AI 实用课',
  description: '面向高校老师的 AI 实用课：11 个真实教学场景，边学边做',
  base: baseConfig,
  markdown: { math: true, config: courseAssets },
  themeConfig: {
    nav: [
      { text: '课程目录', link: '/courses/' },
      { text: '怎么用', link: '/#怎么用这套课' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: { noResultsText: '没有找到', resetButtonTitle: '清除' }
        }
      }
    },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一课', next: '下一课' },
    sidebar: [
  {
    "text": "备课与教研",
    "collapsed": false,
    "items": [
      {
        "text": "备课提示词",
        "link": "/courses/01/"
      },
      {
        "text": "快速精读",
        "link": "/courses/04/"
      },
      {
        "text": "教学知识库",
        "link": "/courses/05/"
      }
    ]
  },
  {
    "text": "课堂与作业",
    "collapsed": false,
    "items": [
      {
        "text": "分层作业",
        "link": "/courses/02/"
      },
      {
        "text": "课件加工",
        "link": "/courses/03/"
      },
      {
        "text": "成绩分析",
        "link": "/courses/07/"
      }
    ]
  },
  {
    "text": "日常事务",
    "collapsed": false,
    "items": [
      {
        "text": "行政材料",
        "link": "/courses/06/"
      },
      {
        "text": "定时任务",
        "link": "/courses/08/"
      },
      {
        "text": "移动办公",
        "link": "/courses/09/"
      },
      {
        "text": "一键流程",
        "link": "/courses/10/"
      },
      {
        "text": "技能共享",
        "link": "/courses/11/"
      }
    ]
  }
]
  }
})
