<!--
  页脚组件
-->
<template>
  <footer class="footer">
    <div class="container">
      <!-- 上部：四栏 -->
      <div class="footer__top">
        <!-- 品牌介绍 -->
        <div class="footer__col footer__col--brand">
          <div class="footer__logo">
            <span class="footer__logo-icon">🎓</span>
            <span>小精英英语</span>
          </div>
          <p class="footer__brand-desc">
            专注外教一对一英语口语教学。<br />
            让每一位学员都能自信开口说英语。
          </p>
          <div class="footer__social">
            <span>关注我们：</span>
            <span class="footer__social-icon">📱</span>
            <span class="footer__social-icon">📘</span>
            <span class="footer__social-icon">🎵</span>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="footer__col">
          <h4 class="footer__col-title">快速导航</h4>
          <ul class="footer__links">
            <li><a href="#teachers" @click.prevent="scrollTo('teachers')">外教团队</a></li>
            <li><a href="#courses" @click.prevent="scrollTo('courses')">课程体系</a></li>
            <li><a href="#advantages" @click.prevent="scrollTo('advantages')">核心优势</a></li>
            <li><a href="#testimonials" @click.prevent="scrollTo('testimonials')">学员反馈</a></li>
          </ul>
        </div>

        <!-- 课程导航 -->
        <div class="footer__col">
          <h4 class="footer__col-title">热门课程</h4>
          <ul class="footer__links">
            <li><a href="#courses">外教口语体验课</a></li>
            <li><a href="#courses">日常口语提升课</a></li>
            <li><a href="#courses">雅思口语冲刺课</a></li>
            <li><a href="#courses">少儿英语启蒙课</a></li>
            <li><a href="#courses">商务英语实战课</a></li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div class="footer__col">
          <h4 class="footer__col-title">联系我们</h4>
          <ul class="footer__links">
            <li>📞 400-XXX-XXXX</li>
            <li>💬 微信：xiaojingying2024</li>
            <li>📧 hello@xiaojingying.com</li>
            <li>🕐 周一至周日 9:00-21:00</li>
          </ul>
        </div>
      </div>

      <!-- 底部版权 -->
      <div class="footer__bottom">
        <p>&copy; 2024 小精英英语培训 All Rights Reserved.</p>
        <div class="footer__bottom-links">
          <a href="#">隐私政策</a>
          <span>|</span>
          <a href="#">服务条款</a>
        </div>
      </div>
    </div>
  </footer>
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
.footer {
  background: var(--color-bg-dark);
  color: rgba(255,255,255,0.7);
  padding: 60px 0 0;
}

.footer__top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: 14px;
}
.footer__logo-icon {
  font-size: 26px;
}

.footer__brand-desc {
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 16px;
}

.footer__social {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}
.footer__social-icon {
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.3s;
}
.footer__social-icon:hover {
  transform: scale(1.2);
}

.footer__col-title {
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer__links a,
.footer__links li {
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  transition: color 0.3s;
}
.footer__links a:hover {
  color: var(--color-accent-light);
}

/* 底部版权 */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  font-size: 13px;
  color: rgba(255,255,255,0.4);
  flex-wrap: wrap;
  gap: 10px;
}
.footer__bottom-links a {
  color: rgba(255,255,255,0.4);
  transition: color 0.3s;
}
.footer__bottom-links a:hover {
  color: white;
}
.footer__bottom-links span {
  margin: 0 8px;
}

/* ----- 响应式 ----- */
@media (max-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  .footer__col--brand {
    grid-column: 1 / -1;
  }
  .footer__bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
