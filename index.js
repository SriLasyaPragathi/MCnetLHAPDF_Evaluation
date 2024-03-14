function plotEquation() {

    document.getElementById("plot").innerHTML = "";

    var input_A = document.getElementById("para-A").value;
    var input_B = document.getElementById("para-B").value;
    var input_C = document.getElementById("para-C").value;
    var startx = document.getElementById("start-X").value;
    var endx = document.getElementById("end-X").value;
    var input_K = document.getElementById("para-k").value;

    var x_Array = [];
    var y_Array = [];
    for (var i = startx; i <= endx; i++) {
        var y = Math.exp(-input_A * i) * Math.sin(input_B * input_K * Math.pow(i, input_C))
        x_Array.push(i);
        y_Array.push(y);
    }

    var plot = document.getElementById("plot");
    Plotly.newPlot(plot, [{
        x: x_Array,
        y: y_Array
    }], {
        margin: { t: 0 }
    });
}
