function googleList(){

    console.log('listing countries available')    
    
    $.get("https://socialtrends.herokuapp.com/trends/available.json", function(data) {

        var countries = data

        $.get("/socialtrends/templates/countryList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: countries})         

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            googleView(countries[0])

        })

    })

}