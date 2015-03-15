function googleView(item){

    console.log('search results for: ', item)
  
    var repo = item

    $.get("https://socialtrends.herokuapp.com/trends/available.json", function(data) {
        var countries = data

        $.get("/socialtrends/templates/countryView.jade", function(template) {

            var html = jade.render(template, {item: countries})
            
            $("#details").html(html)

        })

})

}