
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

function upvote(id) {
    alert('upvote post: '+id);
    $.post("/votes/up/", { postid: id }, (data) => {
        document.cookie = "votes="+JSON.stringify(data);
        
    });
}

function downvote(id) {
    alert('upvote post: '+id);
    $.post("/votes/down/", { postid: id }, (data) => {
        document.cookie = "votes="+JSON.stringify(data);
        
    });
}
