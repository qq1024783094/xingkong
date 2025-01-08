// 创建鼠标发光特效元素
const cursor = document.createElement('div');
cursor.style.position = 'absolute';
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.borderRadius = '50%';
cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
cursor.style.boxShadow = '0 0 10px 5px rgba(255, 255, 255, 0.8)';
cursor.style.pointerEvents = 'none';
document.body.appendChild(cursor);

// 创建星尘元素的函数
function createStar() {
    const star = document.createElement('span');
    star.style.position = 'absolute';
    star.style.width = Math.random() * 5 + 2 + 'px'; // 随机大小
    star.style.height = star.style.width;
    star.style.borderRadius = '50%';
    star.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    star.style.pointerEvents = 'none';
    document.getElementById('stars').appendChild(star);
    return star;
}

// 鼠标移动事件处理函数
document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';

    const star = createStar();
    star.style.left = e.pageX + 'px';
    star.style.top = e.pageY + 'px';
    // 后续渐隐等相关代
    const fadeOut = function () {
        star.style.opacity = parseFloat(star.style.opacity) - 0.05;
        if (parseFloat(star.style.opacity) > 0) {
            requestAnimationFrame(fadeOut);
        } else {
            star.remove();
        }
    };
    star.style.opacity = 1;
    requestAnimationFrame(fadeOut);
});