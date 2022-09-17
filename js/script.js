var notifyId = 0;
var pushId = 0;

$(document).on("click", ".success", function(e) {
    notify({type:"success", text:"You successfully clicked that button..."});
    push({type:"success", text:"You successfully clicked that button...", className: $(this).attr("class")});
});

$(document).on("click", ".error", function(e) {
    notify({type:"error", text:"Something went wrong clicking that button..."});
    push({type:"error", text:"Something went wrong clicking that button...", className: $(this).attr("class")});
});

function notify(notifyText) {
    notifyId++;
    const notifyIcon = notifyText.type == "success" ? "&#10003;" : "&#10006;";
    const notifyBackground = notifyText.type == "success" ? "linear-gradient(140deg, rgba(110,230,116,1) 0%, rgba(93,215,99,1) 28%, rgba(70,196,76,1) 64%, rgba(58,194,65,1) 100%)" : "linear-gradient(140deg, rgba(241,58,86,1) 0%, rgba(226,45,73,1) 28%, rgba(210,29,56,1) 64%, rgba(189,12,39,1) 100%)";
    let html = `    
    <div id="notify-id-${notifyId}" class="notify-child" style="background:${notifyBackground};">
        <span class="notify-icon">${notifyIcon}</span>
        <span class="notify-text">${notifyText.text}</span>
    </div>
    `;
    $(".notify-parent").append(html);
    $(`#notify-id-${notifyId}`).css("position", "relative")
    .animate({right: $(window).width()*0.1715}, 250)
    .animate({right: $(window).width()*0.1615}, 100)
    .animate({right: $(window).width()*0.159}, 50)
    .animate({right: $(window).width()*0.1615}, 50)
    .delay(3000).animate({right: $(window).width()*0.1755}, 150)
    .animate({right: 0}, 250)
    .queue(function() { $(this).remove(); });
}

function push(pushed) {
    $(".push-parent").remove();
    pushId++;
    const pushBackground = pushed.type == "success" ? "linear-gradient(140deg, rgba(110,230,116,1) 0%, rgba(93,215,99,1) 28%, rgba(70,196,76,1) 64%, rgba(58,194,65,1) 100%)" : "linear-gradient(140deg, rgba(241,58,86,1) 0%, rgba(226,45,73,1) 28%, rgba(210,29,56,1) 64%, rgba(189,12,39,1) 100%)";
    let html = `
    <div id="push-id-${pushId}" class="push-parent">
    <div class="push" style="background: ${pushBackground} !important;">
        <span>${pushed.text}</span>
    </div>
    </div>
    `;
    $("." + pushed.className).append(html)
    $(`#push-id-${notifyId}`).fadeIn("slow")
    .delay(2500).fadeOut("slow") 
    .queue(function() { $(this).remove(); });
}