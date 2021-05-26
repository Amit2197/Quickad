function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function dropdown() {
    var x = document.getElementById("plus");
    plus.classList.toggle("active")
    var y = document.getElementById("dropAds");
    if (y.style.maxHeight){
        y.style.maxHeight = null;
      } else {
        y.style.maxHeight = y.scrollHeight + "px";
      } 
    
}

var ctx = $("#line-chart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
        datasets: [
            {
                backgroundColor: "#30A7F2",
                borderColor: "#30A7F2",
                radius: 1,
                data: [10, 20, 30, 40, 60, 60, 40, 60, 30, 40, 30, 45, 23, 44, 40, 37, 56, 09, 39, 60, 62, 53, 34, 50, 35, 50, 70, 30, 73, 45]

            },
            {

                backgroundColor: "#372FF750",
                borderColor: "#372FF750",
                radius: 1,
                data: [10, 40, 30, 12, 14, 40, 40, 56, 40, 70, 60, 50, 23, 54, 40, 67, 56, 90, 39, 63, 42, 53, 54, 53, 45, 48, 64, 20, 53, 35]
            },

        ]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
            labels: {
                display: false
  }
        },
        scales:{
        xAxes: [{
            display: false //this will remove all the x-axis grid lines
        }],
        yAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                        color: "#e2e2e2"
                    },
                    ticks: {
                        display: false, // this here
                    },
                    maxBarThickness: 10
                }]
        },

        title: {
            display: false
        }

    }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);z
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
