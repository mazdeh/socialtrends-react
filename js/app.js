$( "#trends" ).on( "click", function( event ) {
    React.render(
        <TrendList url='https://socialtrends.herokuapp.com/trends/place.json'/>,
        document.getElementById('content')
    )
})

$( "#users" ).on( "click", function( event ) {
    React.render(
        <UserList url='https://socialtrends.herokuapp.com/trends/available.json'/>,
        document.getElementById('content')
    )
})

