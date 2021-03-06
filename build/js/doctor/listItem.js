var DoctorListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.doctor)
        this.props.onListItemClicked(this.props.doctor.query)
    },

    render: function() {

        var doctor = this.props.doctor

        return ( 
            <div className="doctor row" >
                <a className="doctorName six columns" onClick={this.handleClick}>
                    {doctor.name}                    
                </a>
            </div>
        )
  }
})