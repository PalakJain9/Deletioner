(function(){
    console.log("we're starting");
    let para = document.querySelectorAll('p');
    goBlank(para);
    let heads = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    goBlank(heads);
    let spans = document.getElementsByTagName('span');
    goBlank(spans);
    let links = document.querySelectorAll('a');
    goBlank(links);
})();

function goBlank(ele){
    for(let index = 0; index < ele.length; index++){
        ele[index].innerHTML = "";
    }
}