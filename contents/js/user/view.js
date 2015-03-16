var UserView = React.createClass({

    getInitialState: function() {
        return {user: null}
    },

    render: function() {
        
        if (this.state.user){

            return ( 
                <div className="userView examplegrid" >
                    <div className="twelve columns" >
                        

                        <div className="row" >

                            <p className="userName name twelve columns" >
                                {this.state.user.name}
                            </p>
                        </div>



                        <div className="row" >
                            <h6 className="three columns" >
                                    Country: 
                            </h6>

                            <h6 className="nine columns" >
                                {this.state.user.country}
                            </h6>

                        </div>

                        <div className="row" >

                            <h6 className="three columns">
                                WOEID: 
                            </h6>

                            <h6 className="nine columns">
                                {this.state.user.woeid}
                            </h6>

                        </div>

                        <div className="row" >

                            <h6 className="three columns">
                                Parent ID: 
                            </h6>

                            <h6 className="nine columns">
                                {this.state.user.parentid}
                            </h6>

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
