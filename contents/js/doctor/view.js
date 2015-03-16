var DoctorView = React.createClass({

    getInitialState: function() {
        return {doctor: null}
    },

    render: function() {

        if (this.state.doctor){
            
            console.log("this.state.doctor from view.js: ", this.state.doctor);

            for (j = 0; j < this.state.doctor.length; j++) {
                
                    $.ajax({
                        url: "https://socialtrends.herokuapp.com/statuses/oembed.json?id=" + this.state.doctor[j],
                        dataType: 'json',
                        success: function(data) {
                            console.log("view data: ", data)
                            // this.setState({
                            //     doctor: data.html
                            // });
                        }.bind(this),
                        error: function(xhr, status, err) {
                            console.error(this.props.url, status, err.toString());
                        }.bind(this)
                    });

                }

            return ( 
                <div className="doctorView examplegrid" >
                    <div className="twelve columns" >
                        

                        <div className="row" >

                            <p className="doctorName name twelve columns" >
                                {this.state.doctor}
                            </p>
                        </div>

                    </div>

                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})