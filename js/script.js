var notifyChar = "";
var notifyBackground = "";
var notifyId = 0;

$(document).on("click", ".success", () => {
    notify({type:"success", text:"You successfully clicked that button..."});
});

$(document).on("click", ".error", () => {
    notify({type:"error", text:"Something went wrong clicking that button..."});
});

function notify(notifyText) {
    notifyId++;
    if(notifyText.type == "success") {
        notifyChar = "&#10003;";
        notifyBackground = "linear-gradient(140deg, rgba(110,230,116,1) 0%, rgba(93,215,99,1) 28%, rgba(70,196,76,1) 64%, rgba(58,194,65,1) 100%);";
    } else if(notifyText.type == "error") {
        notifyChar = "&#10006;";
        notifyBackground = "linear-gradient(140deg, rgba(241,58,86,1) 0%, rgba(226,45,73,1) 28%, rgba(210,29,56,1) 64%, rgba(189,12,39,1) 100%);";
    }
    let html = `
    <div id="notify-id-${notifyId}" class="notify-child" style="background:${notifyBackground}">
        <span class="notify-icon">${notifyChar}</span>
        <span class="notify-text">${notifyText.text}</span>
    </div>
    `;
    $(".notify-parent").append(html);
    $(`#notify-id-${notifyId}`).delay(400).css("position", "relative");
    $(`#notify-id-${notifyId}`).animate({right: $(window).width()*0.1715}, 250);
    $(`#notify-id-${notifyId}`).animate({right: $(window).width()*0.1615}, 100);
    $(`#notify-id-${notifyId}`).delay(3000).animate({right: 0}, 250)
    .queue(function() { $(this).remove(); });
}   