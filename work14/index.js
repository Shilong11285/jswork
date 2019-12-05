let endseconds = new Date().getTime() + 15 * 1000;//设置秒杀的结束世间为15秒之后
let d = h = m = s = 0;//声明变量保存剩余的世间
let id = setInterval(seckill, 1000);//设置定时器，实现限时秒杀的效果
function seckill() {
    let nowTime = new Date(); //获取当前时间   
    let remaining = parseInt((endseconds - nowTime.getTime()) / 1000);//获取时间差，单位秒
    // 判断秒杀是否过期
    if (remaining > 0) {
        d = parseInt(remaining / 86400);// 计算剩余天数
        h = parseInt((remaining / 3600) % 24);// 尖酸剩余小时
        m = parseInt((remaining / 60) %60);// 计算剩余分钟
        s = parseInt(remaining % 60); //计算剩余秒
        // 统一利用两位数表示剩余的天，小时，分钟，秒
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
    } else  {
        clearInterval(id); // 秒杀过期，取消定时器
        d = h = m = s = '00';    
    }
    // 剩余的天，小时，分钟，秒显示到指定的网页中
    document.getElementById('d').innerHTML = d + '天';
    document.getElementById('h').innerHTML = h + '时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}