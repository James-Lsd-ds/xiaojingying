<!--
  为什么选择我们 - 优势展示组件
-->
<template>
  <section id="advantages" class="advantages">
    <div class="container">
      <div class="section-header">
        <span class="section-label">✨ 为什么选择小精英</span>
        <h2>6大核心优势，让口语提升看得见</h2>
        <p class="section-desc">
          不是所有外教课都一样。小精英用8年时间打磨出一套真正有效的外教口语教学模式。
        </p>
      </div>

      <!-- 优势网格 -->
      <div class="advantages__grid">
        <div
          v-for="item in advantages"
          :key="item.title"
          class="advantage-card"
        >
          <div class="advantage-card__icon">{{ item.icon }}</div>
          <h3 class="advantage-card__title">{{ item.title }}</h3>
          <p class="advantage-card__desc">{{ item.desc }}</p>
        </div>
      </div>

      <!-- 底部对比表 -->
      <div class="advantages__compare">
        <h3 class="advantages__compare-title">小精英 vs 传统培训</h3>
        <div class="advantages__table-wrapper">
          <table class="advantages__table">
            <thead>
              <tr>
                <th>对比维度</th>
                <th>传统培训机构</th>
                <th class="advantages__table-highlight">小精英英语</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in compareData" :key="row.dimension">
                <td class="advantages__table-dim">{{ row.dimension }}</td>
                <td class="advantages__table-old">{{ row.old }}</td>
                <td class="advantages__table-new">{{ row.new }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const advantages = [
  {
    icon: '🌍',
    title: '100%母语外教',
    desc: '全部来自英美加澳等英语母语国家，发音纯正地道，拒绝非母语"假外教"。每位外教持国际认证教学资质。',
  },
  {
    icon: '🎯',
    title: '量身定制课程',
    desc: '课程前进行免费水平测试，根据你的基础、目标和学习习惯定制专属教学方案，不浪费每一节课。',
  },
  {
    icon: '💬',
    title: '80%课堂时间让你开口',
    desc: '我们设计课程的核心原则：让学生多说话。每节课至少80%时间是你在说，老师引导+纠音，告别被动听讲。',
  },
  {
    icon: '📊',
    title: '每节课后有反馈',
    desc: '老师每次课后出具详细的学习报告：你的进步点、需改进的发音、下节课的重点。进步看得见。',
  },
  {
    icon: '💰',
    title: '不满意随时退款',
    desc: '试听不满意全额退款，课程中途不满意按剩余课时退款。零风险承诺，我们对教学质量有绝对信心。',
  },
  {
    icon: '📱',
    title: '灵活排课随心学',
    desc: '线上/线下均可，工作日/周末任选，早上/晚上自由安排。临时有事提前2小时取消不扣课时。',
  },
]

const compareData = [
  { dimension: '师资来源', old: '兼职大学生/非母语外教', new: '英美加澳母语外教，持证上岗' },
  { dimension: '班级规模', old: '10-30人大班', new: '一对一专属外教' },
  { dimension: '开口时间', old: '一节课说不到5分钟', new: '80%时间学生开口说' },
  { dimension: '课程内容', old: '统一教材，千篇一律', new: '量身定制，因人施教' },
  { dimension: '试听承诺', old: '免费试听=销售套路', new: '体验课9.9元，满意再续' },
  { dimension: '退费保障', old: '退费困难，流程复杂', new: '不满意随时退，按剩余课时退' },
]
</script>

<style scoped>
.advantages {
  padding: 100px 0;
  background: var(--color-bg-gray);
}

/* 优势网格 */
.advantages__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.advantage-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 30px 24px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}
.advantage-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.advantage-card__icon {
  font-size: 44px;
  margin-bottom: 16px;
}

.advantage-card__title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 10px;
}

.advantage-card__desc {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.7;
}

/* 对比表 */
.advantages__compare {
  margin-top: 60px;
}
.advantages__compare-title {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 30px;
}

.advantages__table-wrapper {
  overflow-x: auto;
}
.advantages__table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.advantages__table th,
.advantages__table td {
  padding: 16px 20px;
  text-align: center;
  font-size: 15px;
  border-bottom: 1px solid var(--color-border);
}
.advantages__table thead th {
  background: var(--color-primary);
  color: white;
  font-weight: 600;
}
.advantages__table-highlight {
  background: var(--color-accent) !important;
}
.advantages__table-dim {
  font-weight: 600;
  color: var(--color-primary);
}
.advantages__table-old {
  color: var(--color-text-lighter);
}
.advantages__table-new {
  color: var(--color-primary);
  font-weight: 600;
}
.advantages__table tbody tr:last-child td {
  border-bottom: none;
}
.advantages__table tbody tr:hover {
  background: var(--color-bg-gray);
}

/* ----- 响应式 ----- */
@media (max-width: 1024px) {
  .advantages__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .advantages {
    padding: 60px 0;
  }
  .advantages__grid {
    grid-template-columns: 1fr;
  }
  .advantages__table th,
  .advantages__table td {
    padding: 10px 12px;
    font-size: 13px;
  }
}
</style>
