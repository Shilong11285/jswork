//哥德巴赫猜想
function goldbach() {
    // <p>请输入一个大于2的偶数:<input type="text" id="odd"></p>
    var value = document.getElementById('odd').value    
    if(value%2!==0){
        alert("请输入偶数")
    }
    //<input type="button" value="找像素" onclick="goldbach()">
    //<div id="goldbach"></div>    
    let goldbach = document.getElementById('goldbach')
    //设定初始值
    var arr =[]
    var a = 0;
    for(var n=2;n<=value;n++){
        a = 0
        for(var l=2;l<n;l++){
            if(n%l==0){
                a++
            }
        }
        if(a==0){
            arr.push(n)
        }
    }
    //计算  拆分
    var str = ''
    for(let n=0;n<(arr.length)/2;n++){
       for(let l=0;l<arr.length;l++){
           if((arr[n]+arr[l])===Number(value)){
               str += '<div>'+value+"可以拆分为两个质数"+arr[n]+"与"+arr[l]+"的和"+ '</div>'
           }
       }
    }
    goldbach.innerHTML = str
}