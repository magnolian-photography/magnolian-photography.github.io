function handleFileSelect(evt) {
    alert(toString(evt));
    $(document).append("<img src=")
    var original = document.getElementById("original"),
        stego = document.getElementById("stego"),
        img = document.getElementById("img");
    if (!original || !stego) return;

    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                img.src = e.target.result;
                img.title = escape(theFile.name);
                stego.className = "half invisible";
                message.parentNode.className = "invisible";
                updateCapacity();
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
}

function hide() {
    var stego = document.getElementById("stego"),
        img = document.getElementById("img"),
        cover = document.getElementById("cover"),
        message = document.getElementById("message"),
        textarea = document.getElementById("text"),
        download = document.getElementById("download");
    if (img && textarea) {
        cover.src = steg.encode(textarea.value, img);
        stego.className = "half";
        message.innerHTML = "";
        message.parentNode.className = "invisible";
        download.href = cover.src.replace("image/png", "image/octet-stream");
    }
}

function read() {
    var img = document.getElementById("img"),
        cover = document.getElementById("cover"),
        message = document.getElementById("message");
    if (img && textarea) {
        var message = steg.decode(img);
        console.log(message)
        if (message.innerHTML !== "") {
            updateCapacity();
        }
    }
}

function redirect(name) {
    var image = $(name).get()
    console.log(steg.decode(image))
    $(body).append("<img src='" + name + ".png' id='" + name + "'>")
    //var message = $("#")
    //window.location.href
}

function add_handlers() {
    $("img").each(function() {
        $(this).on("click", redirect(this.src));
    })
}

$("document").ready(add_handlers())
