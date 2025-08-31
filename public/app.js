// Fetch timeline data and render
document.addEventListener('DOMContentLoaded', async function () {
  try {
    // 读取外部 JSON
    const response = await fetch('data/timeline.json');
    const timelineData = await response.json();

    // 编译 Handlebars 模板
    const templateSource = document.getElementById('timeline-template').innerHTML;
    const template = Handlebars.compile(templateSource);

    // 渲染模板
    const renderedHtml = template(timelineData);
    document.getElementById('timeline-container').innerHTML = renderedHtml;

    // 设置 wifi-fill 宽度
    document.querySelectorAll('.wifi-fill').forEach(el => {
      const value = el.getAttribute('data-penetration');
      el.style.width = value + '%';
    });

  } catch (error) {
    console.error("Error loading timeline data:", error);
    document.getElementById('timeline-container').innerHTML =
      "<p style='color:red;'>Failed to load timeline data.</p>";
  }
});
