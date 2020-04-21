// an oreo cookie weighs 14.5 grams
let oreo = 14.5;

// one pound is equal to 454 grams
let gramsPerPound = 500;

let studentWeight;

$("button").click(function() {
    studentWeight = $("input").val();
    let oreos = ( studentWeight * gramsPerPound ) / oreo;   
    if(oreos>100){
        alert("你应该多打打篮球！");  
    }
    
    $("img").attr("src", "https://media.giphy.com/media/ibZqC0rHHnWIo/giphy.gif");
    $("#oreoWeight").text("你的奥利奥体重是 " + oreos + " 奥利奥!");
});



