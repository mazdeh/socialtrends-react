// Q: How is this js file loaded?
function trendList(){

    console.log('listing twitter trends')    
    
    $.get("https://socialtrends.herokuapp.com/trends/place.json", function(data) {

        var repos = data[0].trends

        $.get("/socialtrends/templates/repoList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: repos})         

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            repoView(repos[0].name)

        })

    })

}