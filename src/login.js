import React, {Component} from 'react';
import Axios from 'axios';
import Auth from './Auth';
import Books from './books.js'
import 'bootstrap/dist/css/bootstrap.css';

class Login  extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '',password:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
          this.setState({[event.target.name]: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
        const {name,password} = this.state;
        // Send a post request

        Axios.post('/login',{name,password}).then((response)=>{
            // access response
            console.log('Result:',response);
            // save the token
            Auth.authenticateUser(response.data.token);
            console.log('token:',Auth.getToken());
            this.setState({name:'',password:''});

            // call parent component to refresh
            this.props.refreshPage();
        },
        (error)=>{
          console.log(error);
        });
      }

      render() {
        return (

          <form onSubmit={this.handleSubmit}>
              <p><label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" required placeholder = {"username"}/>
              </label></p>
                <p><label>
                <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder = {"password"} required/>
                </label></p>
                  <p><input type="submit" value="Login" /></p>
                </form>


        );
      }
}

export default Login;
