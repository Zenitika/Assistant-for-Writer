window.onload=function(){
    // A working and compact way to navigate between pages
    let k = document.getElementsByTagName("button");
    for(let i = 0; i < k.length; i++)
         k[i].onclick = function (){
            window.location.href = this.value+'/main.html'
    }
    // Closing the program
    let btn_ex = document.querySelector('#btn_ex');
        btn_ex.addEventListener("click", close_programm);
    async function close_programm(){
        await eel.close_programm();
    }
}