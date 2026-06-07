<!--
  小精英英语培训官网
  主入口组件 —— 把所有区块组装成完整页面
-->
<template>
  <div class="app">
    <!-- 导航栏：始终在顶部 -->
    <NavBar />

    <!-- 每个区块都是一个独立的 Section -->
    <main>
      <HeroSection />
      <AboutSection />
      <TeacherShowcase />
      <CourseSection />
      <AdvantageSection />
      <TestimonialSection />
      <ContactSection />
    </main>

    <!-- 页脚 -->
    <FooterSection />
  </div>
</template>

<script setup>
// 导入所有组件
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TeacherShowcase from './components/TeacherShowcase.vue'
import CourseSection from './components/CourseSection.vue'
import AdvantageSection from './components/AdvantageSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
}
</style>
