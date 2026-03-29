import React, { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen p-8">
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="切换主题"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="header text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl font-bold text-blue-500 avatar-circle">
                孙
              </div>
              <h1 className="text-2xl font-bold text-gray-800">孙杨铭</h1>
              <p className="text-blue-500 font-medium mt-2">前端工程师</p>
              <p className="text-gray-500 text-sm mt-1">5年工作经验</p>
            </div>

            <div className="card">
              <h2 className="section-title">联系方式</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-blue-500 icon-circle">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">邮箱</p>
                    <p className="text-sm font-medium text-gray-800">1484824012@qq.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-blue-500 icon-circle">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">电话</p>
                    <p className="text-sm font-medium text-gray-800">13666056576</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-blue-500 icon-circle">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">出生年月</p>
                    <p className="text-sm font-medium text-gray-800">1997.02</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="section-title">教育背景</h2>
              <div className="list-item">
                <h3 className="font-semibold text-gray-800">计算机科学与技术</h3>
                <p className="text-blue-500 text-sm">武夷学院</p>
                <p className="text-gray-500 text-xs mt-1">2018.09 - 2020.06 | 本科</p>
              </div>
              <div className="list-item">
                <h3 className="font-semibold text-gray-800">计算机网络技术</h3>
                <p className="text-blue-500 text-sm">厦门城市职业学院</p>
                <p className="text-gray-500 text-xs mt-1">2015.09 - 2018.06 | 专科</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h2 className="section-title">专业技能</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                  熟悉 JavaScript 核心基础，掌握 ES6 常用语法
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                  深入理解 Vue 及其生态，具备 Vue 项目从 0 到 1 开发经验
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                  掌握 React 核心技术栈，熟练运用 Hooks、状态管理等核心能力
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                  熟悉前端工程化 Webpack/Vite 打包工具，有性能优化方案实践
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                  具备独立解决问题的能力，能够快速定位和修复代码 bug，有一定的问题排查和调试经验
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                  良好的 Git 实践，重视 Code Review，保证代码质量和团队协作
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                  熟练使用 Cursor / Trae 等 AI 编码工具，将其作为工程提效手段，提升开发效率与代码质量
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="section-title">工作经历</h2>
              <div className="space-y-6">
                <div className="list-item">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">前端工程师</h3>
                      <p className="text-blue-500 text-sm">杭州时代银通软件股份有限公司</p>
                    </div>
                    <span className="badge">2022.03 - 至今</span>
                  </div>
                </div>

                <div className="list-item">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">初级前端工程师</h3>
                      <p className="text-blue-500 text-sm">厦门夏谷软件股份有限公司</p>
                    </div>
                    <span className="badge">2020.06 - 2022.02</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="section-title">项目经历</h2>
              <div className="space-y-6">
                <div className="list-item">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">债券报价交易平台</h3>
                      <p className="text-gray-500 text-sm">核心开发者</p>
                    </div>
                    <span className="badge">2023.11 - 至今</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">Vue3</span>
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">Pinia</span>
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">ES6</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-3 mb-3">
                    主要提供现券买卖、远期等银行间债券产品交易服务，为相关金融机构寻找符合要求的交易价格和交易手。产品范围包括国债、央票、金融债、短期融资券、中期票据、企业债等金融机构市场流通债券品种。
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      使用WebSocket实现实时数据同步，确保债券报价即时更新，支持快速交易决策
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      应用策略模式模块化工具栏和右键功能逻辑，增强代码可维护性和扩展性
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      开发撤销功能，利用栈结构允许用户撤销操作，减少报价错误，提升用户体验
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      利用IndexedDB存储超过10万条债券数据，确保快速数据访问，优化平台性能
                    </li>
                  </ul>
                </div>

                <div className="list-item">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">量化集中交易平台</h3>
                      <p className="text-gray-500 text-sm">前端开发</p>
                    </div>
                    <span className="badge">2022.03 - 2022.12</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">React</span>
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">Axios</span>
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">ES6</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-3 mb-3">
                    平台为金融机构建设资金业务价格和交易中心，实现对同业、企业等资金报价和交易的集中管理；覆盖外汇、贵金属、大宗商品、固定收益等市场。为金融机构提供做市报价、自营交易、头寸平盘以及相关的事前事后风险管理。
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      虚拟列表优化页面卡顿问题，提升30%页面响应速度
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      通过懒加载、代码分割等技术手段，优化了应用的加载速度和性能
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      实现多市场行情同屏对比功能，支持自定义窗口布局与联动分析
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      使用Web Workers分离数据处理线程，避免主线程阻塞，确保高频更新流畅性
                    </li>
                  </ul>
                </div>

                <div className="list-item">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">EHR人力资源管理</h3>
                      <p className="text-gray-500 text-sm">前端开发</p>
                    </div>
                    <span className="badge">2020.06 - 2022.02</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">Vue2</span>
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">Webpack</span>
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">Element UI</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-3 mb-3">
                    专注于人力资源管理数字化服务，提供招聘管理、人员发展、机构规划、员工自助等服务，推出金融、制造、医疗、物业多个细分行业解决方案，服务3000家公司超过300+万员工使用。
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      基于需求文档和业务逻辑，设计前端交互模式，确保用户体验流畅；独立完成前端页面的编码工作，保证代码质量和性能
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      项目组件维护及bug修复，持续提升用户体验
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      参与技术讨论和复杂需求研讨，积极探讨项目的最佳解决方案
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      使用vuepress构建组件库说明文档网页，编写组件使用示例代码，撰写使用说明文档
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      定期组织Code Review规范开发流程
                    </li>
                  </ul>
                </div>

                <div className="list-item">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">智慧城市网格化系统</h3>
                      <p className="text-gray-500 text-sm">前端开发</p>
                    </div>
                    <span className="badge">2021.09 - 2022.01</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">Vue全家桶</span>
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">Axios</span>
                    <span className="text-xs px-2 py-1 rounded-full tech-tag">ES6</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-3 mb-3">
                    项目旨在进一步提高网格化管理服务综合水平，构建管理信息化、服务智能化、运作高效化的多维立体综合管理服务信息网络，为社区网格化管理服务提供智慧支持，为实现社区治理的精细化、精准化、联动化提供有力保障。
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      通用组件开发，如搜索组件、表格组件、表单组件、公共方法抽离及组件化开发
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      开发基于ECharts的数据可视化模块，展示环境监测、交通流量等实时数据
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      实现事件上报与处理流程的前端交互，支持图片、视频等多媒体上传
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0 list-dot"></span>
                      使用Canvas自主开发高性能图表引擎，支持4K分辨率下60 FPS流畅渲染
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2026 孙杨铭 - 前端工程师</p>
        </footer>
      </div>
    </div>
  );
}

export default App;