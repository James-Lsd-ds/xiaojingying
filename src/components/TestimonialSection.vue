<!--
  学员反馈组件
  用真实评价建立信任感
-->
<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-header">
        <span class="section-label">💬 学员反馈</span>
        <h2>他们都在小精英实现了口语突破</h2>
        <p class="section-desc">
          来自真实学员的评价——每一个声音背后，都是一段从"不敢开口"到"自信表达"的成长故事。
        </p>
      </div>

      <!-- 评价网格 -->
      <div class="testimonials__grid">
        <div
          v-for="item in testimonials"
          :key="item.id"
          class="testimonial-card"
        >
          <!-- 星级 -->
          <div class="testimonial-card__stars">
            <span v-for="n in 5" :key="n" :class="{ active: n <= item.rating }">★</span>
          </div>

          <!-- 评价内容 -->
          <p class="testimonial-card__content">"{{ item.content }}"</p>

          <!-- 用户信息 -->
          <div class="testimonial-card__user">
            <div class="testimonial-card__avatar">
              <img :src="item.avatar" :alt="item.name" />
            </div>
            <div>
              <div class="testimonial-card__name">{{ item.name }}</div>
              <div class="testimonial-card__tag">{{ item.tag }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部行动按钮 -->
      <div class="testimonials__cta">
        <p>下一个口语达人，就是你 👇</p>
        <button class="btn btn-primary btn--lg" @click="scrollTo('contact')">
          免费领取体验课
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimonials } from '../data/testimonials.js'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 70
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.testimonials {
  padding: 100px 0;
  background: white;
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: var(--color-bg-gray);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}
.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-accent);
}

.testimonial-card__stars {
  margin-bottom: 14px;
}
.testimonial-card__stars span {
  font-size: 18px;
  color: #DDD;
  margin-right: 2px;
}
.testimonial-card__stars span.active {
  color: #F0B90B;
}

.testimonial-card__content {
  font-size: 15px;
  color: var(--color-text);
  line-height: 1.8;
  flex: 1;
  margin-bottom: 18px;
  font-style: italic;
}

.testimonial-card__user {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}

.testimonial-card__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: linear-gradient(135deg, #ddd, #ccc);
}
.testimonial-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-card__name {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-primary);
}
.testimonial-card__tag {
  font-size: 13px;
  color: var(--color-text-lighter);
}

/* 底部CTA */
.testimonials__cta {
  text-align: center;
  margin-top: 50px;
}
.testimonials__cta p {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 16px;
}

/* ----- 响应式 ----- */
@media (max-width: 1024px) {
  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .testimonials {
    padding: 60px 0;
  }
  .testimonials__grid {
    grid-template-columns: 1fr;
  }
}
</style>
