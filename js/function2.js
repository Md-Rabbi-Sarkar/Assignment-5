document.getElementById('history').addEventListener('click',function(){
    remove('noakhali');
    remove('feni');
    remove('quota');
    hover('history');
    hoverRemove('donate');
})

document.getElementById('donate').addEventListener('click',function(){
    add('noakhali');
    add('feni');
    add('quota');
    hover('donate');
    hoverRemove('history')
})