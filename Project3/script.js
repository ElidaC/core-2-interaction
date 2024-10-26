

// 不同数量的渐变背景，避免使用绿色系颜色
const gradients = [
    'radial-gradient(circle at center, rgba(255, 99, 132, 1), rgba(255, 159, 64, 0.7), rgba(255, 205, 86, 0))',
    'radial-gradient(circle at center, rgba(54, 162, 235, 1), rgba(153, 102, 255, 0.7), rgba(255, 99, 132, 0), rgba(255, 159, 64, 0.7))',
    'radial-gradient(circle at center, rgba(255, 99, 132, 1), rgba(54, 162, 235, 0.7), rgba(153, 102, 255, 0.5), rgba(255, 159, 64, 0.7), rgba(255, 205, 86, 0))',
    'radial-gradient(circle at center, rgba(255, 159, 64, 1), rgba(255, 99, 132, 0.7), rgba(153, 102, 255, 0.5), rgba(54, 162, 235, 0.7), rgba(255, 205, 86, 0.5), rgba(0, 255, 255, 1), rgba(255, 99, 132, 0))',
    'radial-gradient(circle at center, rgba(255, 205, 86, 1), rgba(255, 99, 132, 0.7), rgba(54, 162, 235, 0.5), rgba(0, 255, 255, 0.6), rgba(153, 102, 255, 0.7), rgba(255, 0, 255, 0.5), rgba(255, 69, 0, 0.6), rgba(255, 159, 64, 0.7), rgba(255, 205, 86, 0), rgba(255, 99, 132, 0))'

];

// 根据 UV 值选择适当的渐变背景
function getGradient(uvValue) {
    if (uvValue <= 1) {
        return gradients[0];
    } else if (uvValue <= 2) {
        return gradients[1];
    } else if (uvValue <= 3) {
        return gradients[2];
    } else if (uvValue <= 4) {
        return gradients[3];
    } else {
        return gradients[4];
    }
}

const windSpeedHistory = [];
const uvIndexHistory = [];

async function getData() {
    const myUrl = "https://api.weatherapi.com/v1/current.json?key=5235bf3986ca4647925235439241410&q=11232";

    try {
        const response = await fetch(myUrl);
        const data = await response.json();

        // 获取 UV index 和风速
        const uvIndex = data.current.uv;  // UV index
        const windSpeed = data.current.wind_mph;  // Wind speed in mph

        // 保存当前风速和 UV 值到历史记录
        windSpeedHistory.push(windSpeed);
        uvIndexHistory.push(uvIndex);

        // 调试信息：打印当前 UV 值和风速
        console.log('当前 UV Index:', uvIndex);
        console.log('当前 Wind Speed:', windSpeed);

        // 输出追踪历史记录
        console.log('风速历史记录:', windSpeedHistory);
        console.log('UV 值历史记录:', uvIndexHistory);

        createBlobs(uvIndex, windSpeed);

    } catch (error) {
        console.error("获取数据时出错: ", error);
    }
}

function createBlob(uvIndex, windSpeed) {
    const blob = document.createElement('div');
    blob.classList.add('blob');

    // 检测屏幕宽度，决定色块大小和位置
    const isSmallScreen = window.innerWidth <= 430;  // 判断是否为小屏幕

    // 根据屏幕大小设置不同的尺寸范围
    const size = isSmallScreen ? Math.random() * 100 + 300 : Math.random() * 200 + 700;  // 小屏幕200px到300px，大屏幕600px到800px
    blob.style.width = `${size}px`;
    blob.style.height = `${size}px`;

    // 调整位置范围，确保小屏幕的布局不会超出视野
    blob.style.top = `${Math.random() * (isSmallScreen ? 10 : 50) + (isSmallScreen ? 5 : 15)}vh`;
    blob.style.left = `${Math.random() * (isSmallScreen ? 10 : 50) + (isSmallScreen ? 5 : 10)}vw`;

    // 设置背景渐变和动画速度
    blob.style.background = getGradient(uvIndex);
    const animationDuration = Math.max(10, 40 - windSpeed * 2);  // 动画速度
    blob.style.animation = `float ${animationDuration}s ease-in-out infinite`;

    return blob;
}


// 生成多个色块
function createBlobs(uvIndex, windSpeed) {
    const container = document.getElementById('container');
    container.innerHTML = '';  // 清除之前的色块
    for (let i = 0; i < 5; i++) {
        const blob = createBlob(uvIndex, windSpeed);
        container.appendChild(blob);
    }
}

// 初次获取数据并生成色块
getData();

// 每 13.4秒刷新一次数据
setInterval(getData, 13400);
