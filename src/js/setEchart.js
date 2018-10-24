// var qualityChart = document.getElementById('quality-chart');
// var qualityChartOpts = {

// }
// var chart = echarts.init(qualityChart,'dark')

/**
 * 
 * @param {*} ele 容器选择器
 * @param {*} options echarts配置参数
 */
let setChart = function(ele,options) {
    let _defalut = {//默认配置参数

    }
 
    console.log(typeof echarts === 'object')
    if(typeof echarts === 'object') {
        console.log('查看echarts',echarts)
        console.log('ele',ele)
        
        let myChart = echarts.init(ele)
        myChart.setOption(options)
        return myChart
    }
    
}
//==========================================================

//==========================================================
