<!--
  导航栏组件
  功能：顶部固定导航 + 手机端折叠菜单 + 滚动变色
-->
<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': mobileOpen }">
    <div class="navbar__inner container">
      <!-- Logo -->
      <a href="#" class="navbar__logo" @click.prevent="scrollTo('hero')">
        <span class="navbar__logo-icon">🎓</span>
        <span class="navbar__logo-text">小精英</span>
      </a>

      <!-- 桌面端菜单 -->
      <ul class="navbar__links">
        <li v-for="item in menuItems" :key="item.id">
          <a :href="'#' + item.id" @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
        </li>
      </ul>

      <!-- 右侧按钮 -->
      <div class="navbar__actions">
        <button class="btn btn-primary navbar__cta" @click="scrollTo('contact')">
          免费试听
        </button>
      </div>

      <!-- 手机端菜单按钮 -->
      <button class="navbar__toggle" @click="mobileOpen = !mobileOpen" :aria-label="mobileOpen ? '关闭菜单' : '打开菜单'">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- 手机端展开菜单 -->
    <div class="navbar__mobile" v-show="mobileOpen">
      <ul class="navbar__mobile-links">
        <li v-for="item in menuItems" :key="item.id">
          <a :href="'#' + item.id" @click.prevent="scrollTo(item.id); mobileOpen = false">{{ item.label }}</a>
        </li>
      </ul>
      <button class="btn btn-primary navbar__mobile-cta" @click="scrollTo('contact'); mobileOpen = false">
        免费试听
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)

// 导航菜单项（修改这里可以增减菜单）
const menuItems = [
  { id: 'hero', label: '首页' },
  { id: 'teachers', label: '外教团队' },
  { id: 'courses', label: '课程体系' },
  { id: 'advantages', label: '为什么选我们' },
  { id: 'testimonials', label: '学员反馈' },
  { id: 'contact', label: '联系我们' },
]

// 平滑滚动到指定区块
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 70 // 减去导航栏高度
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

// 监听滚动，控制导航栏背景色
function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  font-weight: 700;
  color: white;
  transition: color 0.3s;
}
.navbar--scrolled .navbar__logo {
  color: var(--color-primary);
}
.navbar__logo-icon {
  font-size: 28px;
}

/* 桌面菜单 */
.navbar__links {
  display: flex;
  gap: 4px;
}
.navbar__links a {
  display: block;
  padding: 8px 16px;
  font-size: 15px;
  color: rgba(255,255,255,0.85);
  border-radius: 8px;
  transition: all 0.3s;
  font-weight: 500;
}
.navbar--scrolled .navbar__links a {
  color: var(--color-text);
}
.navbar__links a:hover {
  background: rgba(255,255,255,0.15);
  color: white;
}
.navbar--scrolled .navbar__links a:hover {
  background: var(--color-bg-gray);
  color: var(--color-primary);
}

/* 右侧CTA按钮 */
.navbar__cta {
  padding: 10px 24px;
  font-size: 14px;
}

/* 手机菜单按钮 */
.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 4px;
}
.navbar__toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s;
}
.navbar--scrolled .navbar__toggle span {
  background: var(--color-primary);
}

/* 手机菜单展开 */
.navbar__mobile {
  display: none;
  background: white;
  border-top: 1px solid var(--color-border);
  padding: 20px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.navbar__mobile-links a {
  display: block;
  padding: 14px 16px;
  font-size: 16px;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-bg-gray);
  font-weight: 500;
}
.navbar__mobile-cta {
  width: 100%;
  margin-top: 16px;
}

/* ----- 响应式 ----- */
@media (max-width: 768px) {
  .navbar__links,
  .navbar__actions {
    display: none;
  }
  .navbar__toggle {
    display: flex;
  }
  .navbar__mobile {
    display: block;
  }
}
</style>
