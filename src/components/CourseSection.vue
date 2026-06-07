<!--
  课程体系组件
  展示所有课程及其价格
-->
<template>
  <section id="courses" class="courses">
    <div class="container">
      <!-- 区块标题 -->
      <div class="section-header">
        <span class="section-label">📚 课程体系</span>
        <h2>找到最适合你的英语口语课程</h2>
        <p class="section-desc">
          从零基础到流利口语，从日常对话到商务谈判——我们为每一位学员量身定制学习方案。
        </p>
      </div>

      <!-- 课程卡片网格 -->
      <div class="courses__grid">
        <div
          v-for="course in courses"
          :key="course.id"
          class="course-card"
          :class="{ 'course-card--highlighted': course.highlighted }"
        >
          <!-- 高亮标签 -->
          <div v-if="course.highlighted" class="course-card__ribbon">推荐</div>

          <!-- 课程头部 -->
          <div class="course-card__header">
            <div class="course-card__tag">{{ course.tag }}</div>
            <h3 class="course-card__title">{{ course.title }}</h3>
            <p class="course-card__subtitle">{{ course.subtitle }}</p>
          </div>

          <!-- 价格 -->
          <div class="course-card__price">
            <span class="course-card__price-symbol">¥</span>
            <span class="course-card__price-number">{{ course.price }}</span>
            <span class="course-card__price-unit">{{ course.unit }}</span>
          </div>

          <!-- 课程特点 -->
          <ul class="course-card__features">
            <li v-for="(feature, idx) in course.features" :key="idx">
              <span class="course-card__check">✓</span>
              {{ feature }}
            </li>
          </ul>

          <!-- 按钮 -->
          <button
            class="btn course-card__btn"
            :class="course.highlighted ? 'btn-primary' : 'btn-white'"
            @click="scrollTo('contact')"
          >
            {{ course.highlighted ? '立即咨询' : '了解详情' }}
          </button>
        </div>
      </div>

      <!-- 底部说明 -->
      <div class="courses__note">
        <p>📌 以上价格仅供参考，实际价格以咨询报价为准。所有课程均支持<strong>免费试听</strong>，不满意不收费。</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { courses } from '../data/courses.js'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 70
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.courses {
  padding: 100px 0;
  background: white;
}

/* 课程网格 */
.courses__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* 课程卡片 */
.course-card {
  position: relative;
  background: var(--color-bg-gray);
  border-radius: var(--radius-lg);
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}
.course-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* 高亮推荐卡片 */
.course-card--highlighted {
  background: white;
  border-color: var(--color-accent);
  box-shadow: var(--shadow-md);
}
.course-card__ribbon {
  position: absolute;
  top: 12px;
  right: -6px;
  background: var(--color-accent);
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 16px 4px 12px;
  border-radius: 4px 0 0 4px;
}
.course-card__ribbon::after {
  content: '';
  position: absolute;
  top: 100%;
  right: 0;
  border: 3px solid var(--color-accent-dark);
  border-right-color: transparent;
  border-bottom-color: transparent;
}

/* 课程头部 */
.course-card__header {
  margin-bottom: 20px;
}
.course-card__tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 8px;
}
.course-card__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 6px;
}
.course-card__subtitle {
  font-size: 14px;
  color: var(--color-text-light);
}

/* 价格 */
.course-card__price {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-border);
}
.course-card__price-symbol {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-accent);
  vertical-align: top;
}
.course-card__price-number {
  font-size: 42px;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}
.course-card__price-unit {
  font-size: 14px;
  color: var(--color-text-light);
  margin-left: 4px;
}

/* 课程特点列表 */
.course-card__features {
  flex: 1;
  margin-bottom: 24px;
}
.course-card__features li {
  font-size: 14px;
  color: var(--color-text);
  padding: 6px 0;
  line-height: 1.5;
}
.course-card__check {
  color: var(--color-accent);
  font-weight: 700;
  margin-right: 8px;
}

/* 按钮 */
.course-card__btn {
  width: 100%;
}

/* 底部提示 */
.courses__note {
  text-align: center;
  margin-top: 36px;
  font-size: 14px;
  color: var(--color-text-lighter);
}
.courses__note strong {
  color: var(--color-accent);
}

/* ----- 响应式 ----- */
@media (max-width: 1024px) {
  .courses__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .courses {
    padding: 60px 0;
  }
  .courses__grid {
    grid-template-columns: 1fr;
  }
}
</style>
