$(function(){
    var n=1
    init()
    setInterval(()=>{
        
        // console.log('img:nth-child('+n+')')
        leave(getImg(n))
        .one('transitionend',function(e){   
            enter($(e.currentTarget))      
        })
        // console.log('img:nth-child('+ x(n+1) +')')
        current(getImg(n+1))  
        n=n+1   
    },2000)

    function x(n){
        if(n>3){
            n=n%3
            if(n%3===0){
                n=3
            }
        }
        return n
    }

    function getImg(n){
        return $('img:nth-child('+ x(n) +')')
    }
    function init(){
        n =1;
        getImg(n).addClass('current').siblings().addClass('enter')
    }
    function leave(node){
        node.removeClass('current').addClass('leave')
        return node
    }
    function enter(node){
        node.removeClass('leave').addClass('enter') 
    }
    function current(node){
        node.removeClass('enter').addClass('current')
    }
})
