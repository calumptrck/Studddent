
function regURL(url) {
    var txt = url;
                
    var re1='.*?';	// Non-greedy match on filler
    var re2='((?:[a-z][a-z\\.\\d\\-]+)\\.(?:[a-z][a-z\\-]+))(?![\\w\\.])';	// Fully Qualified Domain Name 1
                
    var p = new RegExp(re1+re2,["i"]);
    var m = p.exec(txt);
    if (m != null) {
        var fqdn1=m[1];
        return fqdn1.replace(/</,"&lt;");
    }
}

var upvotes = JSON.parse(get_cookies().votes).up;
var downvotes = JSON.parse(get_cookies().votes).down;

function upvote(id) {
    $('#'+id.toString()).find(".up a").css('color','rgb(199, 199, 199)');
    $.post("/votes/up/", { postid: id }, (data) => {
        document.cookie = "votes="+JSON.stringify(data);
        var count = $('#'+id.toString()).find('.count').html()
        if ($('#'+id.toString()).find(".down").hasClass('down-pressed')) {
            count = parseInt(count)+2;
            $('#'+id.toString()).find('.count').html(count)
        } else if ($('#'+id.toString()).find(".up").hasClass('up-pressed')) {
            count = parseInt(count)-1;
            $('#'+id.toString()).find('.count').html(count)
        } else {
            count = parseInt(count)+1;
            $('#'+id.toString()).find('.count').html(count)
        }
        $('#'+id.toString()).find(".up").toggleClass('up-pressed')
        $('#'+id.toString()).find(".down").removeClass('down-pressed')   
    });
    
}

function downvote(id) {
    $.post("/votes/down/", { postid: id }, (data) => {
        document.cookie = "votes="+JSON.stringify(data);
        var count = $('#'+id.toString()).find('.count').html()
        if ($('#'+id.toString()).find(".up").hasClass('up-pressed')) {
            count = parseInt(count)-2;
            $('#'+id.toString()).find('.count').html(count)
        } else if ($('#'+id.toString()).find(".down").hasClass('down-pressed')) {
            count = parseInt(count)+1;
            $('#'+id.toString()).find('.count').html(count)
        } else {
            count = parseInt(count)-1;
            $('#'+id.toString()).find('.count').html(count)
        }
        $('#'+id.toString()).find(".down").toggleClass('down-pressed')
        $('#'+id.toString()).find(".up").removeClass('up-pressed')
    });
}

function get_cookies() {
    var cookies = { };
    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }
    return cookies;
}

$(document).ready(function() {
    
    for(var name in upvotes) {
        $("#"+upvotes[name].toString()).find(".up").addClass('up-pressed');
    }

    for(var name in downvotes) {
        $("#"+downvotes[name].toString()).find(".down").addClass('down-pressed');
    
    }

    

});
