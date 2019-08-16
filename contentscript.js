FILE_NAME = "filename="

function run () {

    let url = window.location.href;
    if (url.startsWith('https://ms.ggyypro.com/') && url.indexOf(FILE_NAME) > 0 && document.querySelector("video")) {
        
        setTimeout(function () {
            let eleLink = document.createElement('a');

            let start = url.indexOf(FILE_NAME) + FILE_NAME.length;
            let name = url.substring(start);

            eleLink.download = decodeURI(name);
            eleLink.href = url;
            eleLink.click();
        }, 000);
        
        eleLink.remove();
        return;
    }

    video = document.querySelector("video");
    if (!video) {
        console.log("没有视频标签");
        return;
    }

    var titleTag = document.querySelector("div.video-info-wrap > h4");
    if (!titleTag) {
        return;
    }
    var title = titleTag.innerHTML;
    console.log(title);

    src = document.querySelector("video > source[type='video/mp4']").src;
    console.log(src);

    var buttonTag = document.querySelector(".video-info-section");
    var path = src + "?" + FILE_NAME + title + ".mp4";

    // buttonTag.innerHTML = "<button class='btn bg-red' onclick='window.open(\"" + src + "?" + FILE_NAME + title + ".mp4\", \"target\", \"\")'>下载</button>";
    buttonTag.innerHTML = "<a class='btn bg-red' rel=noreferrer target=_blank href='" + path + "')'>下载</a>";
}


waitForComplete = function () {

    //  || window.location.href.startsWith('https://ms.ggyypro.com/')

    if (document.readyState != "complete" && !document.querySelector("video")) {
        setTimeout(function() { waitForComplete(); }, 50);
    } else {
        setTimeout(function() { run(); }, 50);
        
    }
}

waitForComplete();