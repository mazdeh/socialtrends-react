var UserListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.user)
        this.props.onListItemClicked(this.props.user)
    },

    render: function() {
        
        var user = this.props.user
        var resOpen = (user.open) ? "Open" : "Closed"

        return ( 
            <div className="user row" >
                <div className="userName six columns" onClick={this.handleClick}>
                    {user.name}                    
                </div>
            </div>
        )
    }
})

