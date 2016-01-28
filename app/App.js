var React = require('react');

var App = React.createClass({
            getInitialState: function() {
                return {
                    hcard: this.props.hcard
                }
            },
            handleChange: function(hcard) {
                this.setState({
                    hcard: hcard
                });
            },
            render: function() {
                return ( <div><HCardPreview hcard = {this.state.hcard}/><HCardForm onChange={this.handleChange} hcard={this.state.hcard}/></div>);
                }
            });

        var HCardPreview = React.createClass({
            getInitialState: function() {
                return {
                    hcard: this.props.hcard
                };
            },
            render: function() {
                return ( < div > < p > {
                    this.props.hcard.firstname
                } < /p> < p > {
                    this.props.hcard.lastname
                } < /p></div > );
            }
        });

        var HCardForm = React.createClass({
                    getInitialState: function() {
                        return {
                            hcard: this.props.hcard
                        };
                    },
                    handleChange: function(event) {
                        this.state.hcard[event.target.name] = event.target.value;
                        this.props.onChange(this.state.hcard);
                    },
                    render: function() {
                        var firstname = this.state.firstname;
                        return ( < div > <input type = "text" name = "firstname" defaultValue = {this.props.hcard.firstname} onChange = {this.handleChange} /><input type="text" name="lastname" defaultValue={this.props.hcard.lastname} onChange={this.handleChange} /> </div>);
                        }
                    });

                module.exports = App;
