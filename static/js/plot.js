$('#mygraph').on('change',function(){

    $.ajax({
        url: "/graph",
        type: "GET",
        contentType: 'application/json;charset=UTF-8',
        data: {
            'selected': document.getElementById('mygraph').value

        },
        dataType:"json",
        success: function (data) {
            Plotly.newPlot('bargraph', data );
        }
    });
})
$('#MyFunnel').on('click',function(){
       $.ajax({
        url: "/graph",
        type: "GET",
        contentType: 'application/json;charset=UTF-8',
        data: {
            'selected': 'Funnel Plot'

        },
        dataType:"json",
        success: function (data) {
            Plotly.newPlot('myFunneldiv', data );
        }
    });
})
$('#MyFunnelArea').on('click',function(){
       $.ajax({
        url: "/graph",
        type: "GET",
        contentType: 'application/json;charset=UTF-8',
        data: {
            'selected': 'Funnel Area'

        },
        dataType:"json",
        success: function (data) {
            Plotly.newPlot('myFunneldiv', data );
        }
    });
})
$('#BarGraph').on('click',function(){
       $.ajax({
        url: "/graph",
        type: "GET",
        contentType: 'application/json;charset=UTF-8',
        data: {
            'selected': 'Bar'

        },
        dataType:"json",
        success: function (data) {
            Plotly.newPlot('myFunneldiv', data );
        }
    });
})
$('#PieCharts').on('click',function(){
       $.ajax({
        url: "/graph",
        type: "GET",
        contentType: 'application/json;charset=UTF-8',
        data: {
            'selected': 'PieCharts'

        },
        dataType:"json",
        success: function (data) {
            Plotly.newPlot('myFunneldiv', data );
        }
    });
})
