let btn = document.querySelector('.btnsearch');
let i = "https://www.baidu.com/s?wd=";
  function search(){
    iframe.src=i+searchin.value;
  }
  function ss(){
    qh.style.display='block'
  }
  function baidu(){
    i='https://www.baidu.com/s?wd='
    btn.textContent='百度'
    qh.style='none'
  }
    function bing(){
    i='https://cn.bing.com/search?q='
    btn.textContent='必应'
    qh.style='none'
  }
    function so(){
    i='https://www.so.com/s?q='
    btn.textContent='360'
    qh.style='none'
  }
wind