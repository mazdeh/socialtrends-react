var UserList = React.createClass({displayName: 'UserList',

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(name) {
        var user = _.find(this.state.data, {name: name})
        this.refs.userView.setState({user: user})

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    user: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },


    render: function() {

        var self = this

        var users = this.state.data.map(function(user) {
            return (
                <UserListItem user={user} onListItemClicked={self.handleListItemClicked}/>
                )
        })

        return (
            <div className="userPage">
                <div className="userList six columns">
                    {users}
                </div>
                <div className="userView six columns">
                    <UserView ref="userView"/>
                </div>
            </div>
        )
    }
})

