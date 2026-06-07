/**
 * 外教数据
 *
 * 【小白修改指南】
 * 这是外教老师的数据文件，你需要修改的部分：
 * - name: 老师名字
 * - nationality: 国籍
 * - photo: 照片路径（把照片放到 src/assets/images/ 文件夹，然后改这里的路径）
 * - experience: 教学年限
 * - specialty: 擅长领域
 * - intro: 简短介绍（1-2句话）
 * - certificate: 资质证书
 * - accent: 口音
 *
 * 如果要增加老师，复制一整段 { ... } 粘贴到数组里就行
 * 如果要删除老师，删掉对应的 { ... } 整段，注意逗号
 */

// 女老师默认头像
const femaleAvatar = 'https://api.dicebear.com/9.x/avataaars/svg?seed=teacher-female'
// 男老师默认头像
const maleAvatar = 'https://api.dicebear.com/9.x/avataaars/svg?seed=teacher-male'

export const teachers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    nationality: '美国 🇺🇸',
    photo: new URL('../assets/images/086d32bad550d125a619e808dc594a23.jpg', import.meta.url).href,
    experience: 8,
    specialty: '日常口语、商务英语',
    intro: '来自纽约，在中国生活多年，了解中国学生的发音难点，擅长帮助学生建立开口自信心。',
    certificate: 'TEFL国际认证',
    accent: '美式发音',
    featured: true,  // true = 推荐外教，会显示在最前面
  },
  {
    id: 2,
    name: 'James Williams',
    nationality: '英国 🇬🇧',
    photo: maleAvatar + '2',
    experience: 10,
    specialty: '雅思口语、学术英语',
    intro: '伦敦大学语言学硕士，10年一对一教学经验，擅长纠正发音和语法，帮助学生冲击雅思高分。',
    certificate: 'CELTA认证',
    accent: '英式发音（RP）',
    featured: true,
  },
  {
    id: 3,
    name: 'Emily Chen',
    nationality: '加拿大 🇨🇦',
    photo: femaleAvatar + '3',
    experience: 6,
    specialty: '少儿英语、绘本阅读',
    intro: '中英双语流利，特别擅长和孩子沟通，用游戏和故事激发孩子的英语兴趣。',
    certificate: 'TESOL认证',
    accent: '北美发音',
    featured: true,
  },
  {
    id: 4,
    name: 'Michael Brown',
    nationality: '澳大利亚 🇦🇺',
    photo: maleAvatar + '4',
    experience: 7,
    specialty: '旅游英语、日常对话',
    intro: '热情幽默的澳洲外教，上课氛围轻松活跃，让学生在聊天中不知不觉提升口语。',
    certificate: 'TEFL认证',
    accent: '澳洲发音',
    featured: false,
  },
  {
    id: 5,
    name: 'Lisa Taylor',
    nationality: '美国 🇺🇸',
    photo: femaleAvatar + '5',
    experience: 5,
    specialty: '发音纠正、面试英语',
    intro: '专攻发音训练和职场面试英语，帮助多位学生成功通过外企面试。',
    certificate: 'TEFL认证',
    accent: '美式发音',
    featured: false,
  },
  {
    id: 6,
    name: 'David Wilson',
    nationality: '英国 🇬🇧',
    photo: maleAvatar + '6',
    experience: 12,
    specialty: '商务谈判、演讲技巧',
    intro: '前跨国公司高管，有丰富的商务实战经验，教你地道的商务英语和谈判话术。',
    certificate: 'CELTA认证',
    accent: '英式发音',
    featured: false,
  },
]
