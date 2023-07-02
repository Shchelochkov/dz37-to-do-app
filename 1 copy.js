
let addbut = document.getElementById("addbut");
let delbut = document.getElementById("delbut");
let inp = document.getElementById("inp");
let taskList = document.getElementById("taskList");



const spisok = []

function add() {
    if (inp.value != "") {
        if (spisok.length == 0) {
            taskList.innerHTML = '';
        }
        let newt = '<h3>' + inp.value + '</h3>'
        taskList.innerHTML += newt;
        spisok.push({'delo': inp.value, 'num': 0});
        inp.value = "";
        tochange();
    }
}

function del() {
    const newlist = [];
    let h3s = taskList.getElementsByTagName('h3')
    for (i in h3s){
        if(h3s[i].classList!=undefined){
            if (h3s[i].classList.contains("cancel")) {
                console.log(i)
            }
        else {
            newlist.push(spisok[i]);
            }
        }
    }
    spisok.length = 0
    for (i in newlist) {
        spisok.push(newlist[i]);
    }
    let str="";
    for (i in newlist) {
        str += '<h3>' + spisok[i]['delo'] + '</h3>';
    }
    taskList.innerHTML = str;
    tochange();
}

function change() {
    if (this.classList.contains("cancel")) {
        this.classList.remove("cancel");
    }
    else {
            this.classList.add("cancel");
        }
}

function tochange() {
    let h3s = taskList.getElementsByTagName('h3')
    for (h of h3s) {
        h.onclick = change;
    }
}

addbut.onclick = add;

delbut.onclick = del;