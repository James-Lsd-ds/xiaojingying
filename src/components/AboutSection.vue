<!--
  关于我们组件
  简短介绍小精英的品牌理念
-->
<template>
  <section class="about" id="about">
    <div class="container">
      <div class="about__grid">
        <!-- 左侧图片区域 -->
        <div class="about__visual">
          <div class="about__image-box">
            <div class="about__image-placeholder">
              <span class="about__image-emoji">🎓</span>
              <span>小精英英语</span>
            </div>
          </div>
          <!-- 浮动小卡片 -->
          <div class="about__float-card">
            <div class="about__float-icon">👨‍🏫</div>
            <div>
              <div class="about__float-number">20+</div>
              <div class="about__float-label">来自英美的资深外教</div>
            </div>
          </div>
        </div>

        <!-- 右侧文字 -->
        <div class="about__text">
          <span class="about__label">关于小精英</span>
          <h2 class="about__title">
            我们不教"哑巴英语"<br />
            <span class="about__title-highlight">我们让每个学生开口说</span>
          </h2>
          <p class="about__desc">
            小精英英语培训成立于2018年，专注于外教一对一英语口语教学。
            我们深知传统英语教育最大的痛点——学生学了十几年英语，却连简单的日常对话都不敢开口。
          </p>
          <p class="about__desc">
            因此，我们只做一件事：<strong>用最优质的外教，做最有效的口语训练。</strong>
            每一位外教都经过严格筛选（持证上岗、教学经验丰富、发音纯正），
            每一节课都围绕"让学生多开口"来设计。
          </p>

          <!-- 优势小列表 -->
          <div class="about__features">
            <div class="about__feature">
              <span class="about__feature-icon">✅</span>
              <span>全部外教持TEFL/CELTA/TESOL国际教学认证</span>
            </div>
            <div class="about__feature">
              <span class="about__feature-icon">✅</span>
              <span>100%母语外教，发音纯正地道</span>
            </div>
            <div class="about__feature">
              <span class="about__feature-icon">✅</span>
              <span>一对一量身定制课程，拒绝"大锅饭"</span>
            </div>
            <div class="about__feature">
              <span class="about__feature-icon">✅</span>
              <span>不满意随时退款，零风险承诺</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 纯展示组件，无需逻辑
</script>

<style scoped>
.about {
  padding: 100px 0;
  background: white;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* 左侧视觉区 */
.about__visual {
  position: relative;
}

.about__image-box {
  aspect-ratio: 4/3;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: linear-gradient(135deg, #1B3A5C, #2A5A8C);
  display: flex;
  align-items: center;
  justify-content: center;
}

.about__image-placeholder {
  text-align: center;
  color: rgba(255,255,255,0.6);
  font-size: 18px;
}
.about__image-emoji {
  display: block;
  font-size: 64px;
  margin-bottom: 12px;
}

/* 浮动小卡片 */
.about__float-card {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: white;
  border-radius: var(--radius-md);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: var(--shadow-lg);
}
.about__float-icon {
  font-size: 32px;
}
.about__float-number {
  font-size: 22px;
  font-weight: 800;
  color: var(--color-primary);
}
.about__float-label {
  font-size: 13px;
  color: var(--color-text-light);
}

/* 右侧文字 */
.about__label {
  display: inline-block;
  color: var(--color-accent);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  margin-bottom: 16px;
  padding: 4px 16px;
  border: 1px solid var(--color-accent);
  border-radius: 20px;
}

.about__title {
  font-size: 34px;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.35;
  margin-bottom: 20px;
}
.about__title-highlight {
  color: var(--color-accent);
}

.about__desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 12px;
}

.about__desc strong {
  color: var(--color-primary);
}

/* 优势列表 */
.about__features {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.about__feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: var(--color-text);
  padding: 10px 16px;
  background: var(--color-bg-gray);
  border-radius: var(--radius-sm);
}
.about__feature-icon {
  font-size: 16px;
  flex-shrink: 0;
}

/* ----- 响应式 ----- */
@media (max-width: 768px) {
  .about {
    padding: 60px 0;
  }
  .about__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about__title {
    font-size: 26px;
  }
  .about__float-card {
    right: 0;
    bottom: -30px;
  }
}
</style>
