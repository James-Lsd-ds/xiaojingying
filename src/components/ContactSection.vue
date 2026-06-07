<!--
  联系/预约组件
  这是转化漏斗的最后一环——让用户留下联系方式
-->
<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact__wrapper">
        <!-- 左侧信息 -->
        <div class="contact__info">
          <span class="contact__label">📩 立即行动</span>
          <h2 class="contact__title">免费领取一节外教体验课</h2>
          <p class="contact__desc">
            留下你的信息，我们的课程顾问会在<strong>24小时内</strong>联系你，为你：
          </p>
          <ul class="contact__list">
            <li>
              <span class="contact__list-num">01</span>
              <span>免费英语水平测试</span>
            </li>
            <li>
              <span class="contact__list-num">02</span>
              <span>匹配最适合的外教老师</span>
            </li>
            <li>
              <span class="contact__list-num">03</span>
              <span>预约一节试听课（9.9元/30分钟）</span>
            </li>
          </ul>

          <!-- 联系方式 -->
          <div class="contact__methods">
            <div class="contact__method">
              <span class="contact__method-icon">📞</span>
              <div>
                <div class="contact__method-label">电话咨询</div>
                <div class="contact__method-value">400-XXX-XXXX</div>
              </div>
            </div>
            <div class="contact__method">
              <span class="contact__method-icon">💬</span>
              <div>
                <div class="contact__method-label">微信咨询</div>
                <div class="contact__method-value">xiaojingying2024</div>
              </div>
            </div>
            <div class="contact__method">
              <span class="contact__method-icon">📧</span>
              <div>
                <div class="contact__method-label">电子邮箱</div>
                <div class="contact__method-value">hello@xiaojingying.com</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧表单 -->
        <div class="contact__form-box">
          <form class="contact__form" @submit.prevent="handleSubmit">
            <div class="contact__form-group">
              <label>你的名字</label>
              <input v-model="form.name" type="text" placeholder="请输入你的名字" required />
            </div>
            <div class="contact__form-group">
              <label>手机号码</label>
              <input v-model="form.phone" type="tel" placeholder="请输入手机号码" required />
            </div>
            <div class="contact__form-group">
              <label>英语学习目标</label>
              <select v-model="form.goal" required>
                <option value="" disabled>请选择你的学习目标</option>
                <option>日常口语提升</option>
                <option>雅思/托福备考</option>
                <option>商务职场英语</option>
                <option>少儿英语启蒙</option>
                <option>旅游英语</option>
                <option>其他（备注说明）</option>
              </select>
            </div>
            <div class="contact__form-group">
              <label>当前英语水平</label>
              <select v-model="form.level" required>
                <option value="" disabled>请选择你的英语水平</option>
                <option>零基础</option>
                <option>初级（能说简单单词）</option>
                <option>中级（能简单对话）</option>
                <option>高级（能流利表达）</option>
              </select>
            </div>
            <div class="contact__form-group">
              <label>备注（选填）</label>
              <textarea v-model="form.note" placeholder="如果你有其他需求或疑问，请在这里告诉我们..." rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary contact__submit" :disabled="submitted">
              {{ submitted ? '✅ 已提交，我们将尽快联系你！' : '🚀 免费领取体验课' }}
            </button>
            <p class="contact__form-tip">
              提交即表示同意我们的<strong>隐私政策</strong>，你的信息将被严格保密。
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  goal: '',
  level: '',
  note: '',
})

const submitted = ref(false)

function handleSubmit() {
  // 这里是示例：实际项目中会调用后端API
  console.log('表单提交:', form)
  submitted.value = true
  // 3秒后恢复按钮
  setTimeout(() => {
    submitted.value = false
  }, 5000)
}
</script>

<style scoped>
.contact {
  padding: 100px 0;
  background: var(--color-bg-gray);
}

.contact__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: flex-start;
}

/* 左侧信息 */
.contact__label {
  display: inline-block;
  color: var(--color-accent);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 16px;
  padding: 4px 16px;
  border: 1px solid var(--color-accent);
  border-radius: 20px;
}

.contact__title {
  font-size: 34px;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.3;
  margin-bottom: 16px;
}

.contact__desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 24px;
}
.contact__desc strong {
  color: var(--color-primary);
}

/* 步骤列表 */
.contact__list {
  margin-bottom: 36px;
}
.contact__list li {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  font-size: 16px;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
}
.contact__list li:last-child {
  border-bottom: none;
}
.contact__list-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
}

/* 联系方式 */
.contact__methods {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contact__method {
  display: flex;
  align-items: center;
  gap: 14px;
  background: white;
  padding: 16px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
.contact__method-icon {
  font-size: 28px;
  flex-shrink: 0;
}
.contact__method-label {
  font-size: 13px;
  color: var(--color-text-lighter);
  margin-bottom: 2px;
}
.contact__method-value {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
}

/* 右侧表单 */
.contact__form-box {
  background: white;
  border-radius: var(--radius-xl);
  padding: 36px 30px;
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 90px;
}

.contact__form-group {
  margin-bottom: 18px;
}
.contact__form-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 6px;
}
.contact__form-group input,
.contact__form-group select,
.contact__form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 15px;
  font-family: var(--font-family);
  color: var(--color-text);
  transition: border-color 0.3s;
  background: white;
}
.contact__form-group input:focus,
.contact__form-group select:focus,
.contact__form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(200, 150, 62, 0.1);
}
.contact__form-group textarea {
  resize: vertical;
}

.contact__submit {
  width: 100%;
  padding: 16px;
  font-size: 17px;
  margin-top: 8px;
}
.contact__submit:disabled {
  background: #4CAF50;
  opacity: 0.8;
  cursor: default;
  transform: none;
}

.contact__form-tip {
  text-align: center;
  font-size: 12px;
  color: var(--color-text-lighter);
  margin-top: 12px;
}
.contact__form-tip strong {
  color: var(--color-text-light);
}

/* ----- 响应式 ----- */
@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }
  .contact__wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .contact__title {
    font-size: 26px;
  }
  .contact__form-box {
    position: static;
    padding: 24px 18px;
  }
}
</style>
