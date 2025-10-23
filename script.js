const answerBtn = document.getElementById("answerBtn");

answerBtn.addEventListener("click", function () {
  // 定义放大的动画效果
  let fontSize = 20; // 初始字体大小
  const interval = setInterval(() => {
    fontSize += 2; // 每次增加的字号
    answerBtn.style.fontSize = `${fontSize}px`;
    // 限制最大字号，防止页面溢出
    if (fontSize >= 50) {
      clearInterval(interval);
    }
  }, 100); // 每100毫秒放大一次
});
