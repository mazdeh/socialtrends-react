function repoView(phrase){

    console.log('search results for: ', phrase)

    phrase = encodeURI(phrase)
    console.log(phrase)

    $.get("https://socialtrends.herokuapp.com/search/tweets.json?q=" + phrase + "&result_type=recent&lang=en", function(data) {
        
        var repo = data.statuses
        // var status_ids = [];

        // for (i = 0; i < repo.length; i++) {
        //     status_ids.push(repo[i].id)
        // }

        // id = status_ids[0]
        // $.get("https://socialtrends.herokuapp.com/statuses/oembed.json", {id: id}, function(data) {
        //     embeds = data
        //     console.log(data)
        // })

        // for (i=0; i < status_ids.length; i++) {
        //     $.get("https://socialtrends.herokuapp.com/statuses/oembed.json?id=" + status_ids[i], function(data) {
        //         // embeds = data
        //         console.log(data)
        //     })
        // }

        $.get("/socialtrends/templates/repoView.jade", function(template) {

            var html = jade.render(template, {item: repo})
            
            $("#details").html(html)

        })

    })

}