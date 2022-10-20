//$(document).ready(init)
init()
function init() {

    var id = 0;
    var pics = ["pic1t", "pic2t", "pic3", "pic4", "pic5", "pic6", "pic7", "pic8", "pic9"];
    var idpics = [];
    encoderedirect()
    console.log(idpics)
    

    function redirect(id) {
        url = atob(id)
        window.location.replace(url)
    }
}