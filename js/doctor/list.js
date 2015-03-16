var TrendList = React.createClass({displayName: 'TrendList',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data[0].trends
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(query){
        var doctor = _.find(this.state.data, {query: query})
        var allStatuses = [];

        $.ajax({
            url: "https://socialtrends.herokuapp.com/search/tweets.json?q=" + doctor.query +"&result_type=popular",
            dataType: 'json',
            success: function(data) {
                for (i=0; i < data.statuses.length; i++) { 
                    allStatuses.push(data.statuses[i].id)
                }

                this.refs.doctorView.setState({
                    doctor: allStatuses
                });
                // console.log("calling doctor from list.js", doctor)
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });

        // console.log("this is doctor: ", data)
        // this.refs.doctorView.setState({doctor:doctor.url})
    },

    render: function() {

        var self = this

        var doctors = this.state.data.map(function (doctor) {
        
          return (    
            <DoctorListItem doctor={doctor} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="doctorPage">
                <div className="doctorList six columns">
                    {doctors}
                </div>
                <div className="doctorView six columns">
                    <DoctorView ref="doctorView"/>
                </div>
            </div>
        )
    }
})
