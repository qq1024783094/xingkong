// 获取返回顶部按钮元素
const backToTopButton = document.getElementById('back-to-top');

// 监听页面滚动事件
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // 当页面滚动超过200px时，显示按钮
        backToTopButton.style.display = 'block';
    } else {
        // 否则隐藏按钮
        backToTopButton.style.display = 'none';
    }
});

// 给返回顶部按钮添加点击事件，点击时返回页面顶部
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动效果，若不需要平滑滚动可改为 'auto'
    });
});