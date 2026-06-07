<!--
  外教团队展示组件
  这是官网的核心卖点板块——展示外教实力
-->
<template>
  <section id="teachers" class="teachers">
    <div class="container">
      <!-- 区块标题 -->
      <div class="section-header">
        <span class="section-label">👨‍🏫 外教团队</span>
        <h2>全球优质外教，为你量身匹配</h2>
        <p class="section-desc">
          每一位外教都经过6轮严格筛选：简历初审 → 试讲评估 → 背景调查 →
          证书核验 → 学生试听 → 持续考核。录取率仅5%。
        </p>
      </div>

      <!-- 推荐外教（featured）-->
      <div class="teachers__featured">
        <div class="teachers__grid">
          <div
            v-for="teacher in featuredTeachers"
            :key="teacher.id"
            class="teacher-card teacher-card--featured"
          >
            <div class="teacher-card__badge">⭐ 明星外教</div>
            <div class="teacher-card__photo">
              <img :src="teacher.photo" :alt="teacher.name" />
            </div>
            <div class="teacher-card__info">
              <h3 class="teacher-card__name">{{ teacher.name }}</h3>
              <div class="teacher-card__meta">
                <span class="teacher-card__nationality">{{ teacher.nationality }}</span>
                <span class="teacher-card__dot">·</span>
                <span>{{ teacher.experience }}年教学经验</span>
              </div>
              <div class="teacher-card__certs">
                <span class="teacher-card__cert">{{ teacher.certificate }}</span>
                <span class="teacher-card__cert">{{ teacher.accent }}</span>
              </div>
              <p class="teacher-card__intro">{{ teacher.intro }}</p>
              <div class="teacher-card__specialty">
                <span>擅长：</span>{{ teacher.specialty }}
              </div>
            </div>
            <button class="btn btn-primary teacher-card__btn" @click="scrollTo('contact')">
              预约试听
            </button>
          </div>
        </div>
      </div>

      <!-- 更多外教 -->
      <div v-if="otherTeachers.length > 0" class="teachers__more">
        <h3 class="teachers__more-title">更多优秀外教</h3>
        <div class="teachers__grid teachers__grid--small">
          <div
            v-for="teacher in otherTeachers"
            :key="teacher.id"
            class="teacher-card"
          >
            <div class="teacher-card__photo">
              <img :src="teacher.photo" :alt="teacher.name" />
            </div>
            <div class="teacher-card__info">
              <h3 class="teacher-card__name">{{ teacher.name }}</h3>
              <div class="teacher-card__meta">
                <span class="teacher-card__nationality">{{ teacher.nationality }}</span>
                <span class="teacher-card__dot">·</span>
                <span>{{ teacher.experience }}年经验</span>
              </div>
              <div class="teacher-card__certs">
                <span class="teacher-card__cert">{{ teacher.certificate }}</span>
                <span class="teacher-card__cert">{{ teacher.accent }}</span>
              </div>
              <p class="teacher-card__intro">{{ teacher.intro }}</p>
            </div>
            <button class="btn btn-white teacher-card__btn" @click="scrollTo('contact')">
              预约试听
            </button>
          </div>
        </div>
      </div>

      <!-- 底部提示 -->
      <p class="teachers__tip">
        💡 不知道哪位外教适合你？<a href="#contact" @click.prevent="scrollTo('contact')">联系我们</a>，为你免费匹配最合适的外教老师。
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { teachers } from '../data/teachers.js'

const featuredTeachers = computed(() => teachers.filter(t => t.featured))
const otherTeachers = computed(() => teachers.filter(t => !t.featured))

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 70
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.teachers {
  padding: 100px 0;
  background: var(--color-bg-gray);
}

/* 网格布局 */
.teachers__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.teachers__grid--small {
  grid-template-columns: repeat(3, 1fr);
}

/* 外教卡片 */
.teacher-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}
.teacher-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.teacher-card--featured {
  border: 2px solid var(--color-accent);
}

.teacher-card__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--color-accent);
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  z-index: 2;
}

/* 照片区 */
.teacher-card__photo {
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #e8edf2, #d5dde5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.teacher-card__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 信息区 */
.teacher-card__info {
  padding: 20px;
  flex: 1;
}

.teacher-card__name {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.teacher-card__meta {
  font-size: 14px;
  color: var(--color-text-light);
  margin-bottom: 10px;
}
.teacher-card__nationality {
  font-weight: 600;
}
.teacher-card__dot {
  margin: 0 4px;
}

.teacher-card__certs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.teacher-card__cert {
  display: inline-block;
  font-size: 12px;
  padding: 3px 10px;
  background: var(--color-bg-gray);
  color: var(--color-text-light);
  border-radius: 4px;
  font-weight: 500;
}

.teacher-card__intro {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 8px;
}

.teacher-card__specialty {
  font-size: 13px;
  color: var(--color-accent);
  font-weight: 600;
}

.teacher-card__btn {
  margin: 0 20px 20px;
  width: calc(100% - 40px);
}

/* 更多外教标题 */
.teachers__more-title {
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
  margin: 50px 0 30px;
}

/* 底部提示 */
.teachers__tip {
  text-align: center;
  margin-top: 40px;
  font-size: 15px;
  color: var(--color-text-light);
}
.teachers__tip a {
  color: var(--color-accent);
  font-weight: 600;
  border-bottom: 1px dashed var(--color-accent);
}
.teachers__tip a:hover {
  border-bottom-style: solid;
}

/* ----- 响应式 ----- */
@media (max-width: 1024px) {
  .teachers__grid,
  .teachers__grid--small {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .teachers {
    padding: 60px 0;
  }
  .teachers__grid,
  .teachers__grid--small {
    grid-template-columns: 1fr;
  }
}
</style>
