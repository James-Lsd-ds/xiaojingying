<!--
  首屏大图组件
  这是用户打开网站看到的第一眼，要抓住眼球
-->
<template>
  <section id="hero" class="hero">
    <!-- 背景层：渐变 + 装饰圆 -->
    <div class="hero__bg">
      <div class="hero__circle hero__circle--1"></div>
      <div class="hero__circle hero__circle--2"></div>
      <div class="hero__circle hero__circle--3"></div>
    </div>

    <div class="hero__content container">
      <!-- 小标签 -->
      <div class="hero__badge">
        <span>🌟 全球优质外教 · 一对一教学</span>
      </div>

      <!-- 主标题 -->
      <h1 class="hero__title">
        地道英语
        <span class="hero__title-accent">脱口而出</span>
      </h1>

      <!-- 副标题 -->
      <p class="hero__subtitle">
        小精英汇聚来自英美加澳的资深外教，专注英语口语能力提升。<br />
        不论你是零基础、备考冲刺、还是职场进阶——<br />
        在这里，每一位学员都能找到属于自己的开口方式。
      </p>

      <!-- 按钮组 -->
      <div class="hero__actions">
        <button class="btn btn-primary btn--lg" @click="scrollTo('contact')">
          🔥 免费领取体验课
        </button>
        <button class="btn btn-outline btn--lg" @click="scrollTo('teachers')">
          了解外教团队 →
        </button>
      </div>

      <!-- 数据展示 -->
      <div class="hero__stats">
        <div class="hero__stat">
          <span class="hero__stat-number">20<span class="hero__stat-plus">+</span></span>
          <span class="hero__stat-label">资深外教</span>
        </div>
        <div class="hero__stat">
          <span class="hero__stat-number">5000<span class="hero__stat-plus">+</span></span>
          <span class="hero__stat-label">在读学员</span>
        </div>
        <div class="hero__stat">
          <span class="hero__stat-number">98<span class="hero__stat-unit">%</span></span>
          <span class="hero__stat-label">满意度</span>
        </div>
        <div class="hero__stat">
          <span class="hero__stat-number">8<span class="hero__stat-plus">年</span></span>
          <span class="hero__stat-label">教学沉淀</span>
        </div>
      </div>
    </div>

    <!-- 底部波浪 -->
    <div class="hero__wave">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60C240 100 480 20 720 40C960 60 1200 100 1440 40V120H0V60Z" fill="white"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 70
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0F2440 0%, #1B3A5C 40%, #2A5A8C 100%);
}

/* 背景装饰圆 */
.hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.hero__circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.06;
  background: white;
}
.hero__circle--1 {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -100px;
}
.hero__circle--2 {
  width: 300px;
  height: 300px;
  bottom: 120px;
  left: -80px;
}
.hero__circle--3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 内容区 */
.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding-top: 70px;
}

.hero__badge {
  margin-bottom: 24px;
}
.hero__badge span {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 50px;
  font-size: 14px;
  color: var(--color-accent-light);
  backdrop-filter: blur(10px);
}

.hero__title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -1px;
}
.hero__title-accent {
  display: inline-block;
  background: linear-gradient(135deg, #C8963E, #E8C373);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: 18px;
  line-height: 1.9;
  color: rgba(255,255,255,0.75);
  max-width: 640px;
  margin: 0 auto 36px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
}
.btn--lg {
  padding: 16px 36px;
  font-size: 17px;
}

/* 数据栏 */
.hero__stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}
.hero__stat {
  text-align: center;
}
.hero__stat-number {
  display: block;
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 6px;
}
.hero__stat-plus,
.hero__stat-unit {
  font-size: 22px;
  font-weight: 400;
  color: var(--color-accent-light);
}
.hero__stat-label {
  font-size: 14px;
  color: rgba(255,255,255,0.6);
}

/* 底部波浪 */
.hero__wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 0;
}
.hero__wave svg {
  width: 100%;
  height: auto;
}

/* ----- 响应式 ----- */
@media (max-width: 768px) {
  .hero__title {
    font-size: 36px;
  }
  .hero__subtitle {
    font-size: 15px;
    line-height: 1.7;
  }
  .hero__subtitle br {
    display: none;
  }
  .hero__stats {
    gap: 30px;
  }
  .hero__stat-number {
    font-size: 30px;
  }
  .btn--lg {
    padding: 14px 28px;
    font-size: 15px;
    width: 100%;
  }
  .hero__actions {
    margin-bottom: 40px;
  }
}
</style>
