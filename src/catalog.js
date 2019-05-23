import React, {Component} from 'react';
import axios from 'axios';
import Auth from './Auth';
import './catalog.css';


class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books :[]
        };
    }

    componentWillMount(){
        axios.get('/books',{headers: {
            Authorization: "Bearer " + Auth.getToken()
         }}).then((response) => {
            console.log(response.data);
            this.setState({
                books: response.data
            })
        });
    }

       render(){

     let books = this.state.books.map((books)=>{
               return(
                 <div id="catalog">
                   <form>
                   <label> Book Title:
                   {books.Book_Title}
                   </label>
                   <label> Author_name:
                   {books.Author_name}
                   </label>
                   </form>
                     </div>
                 )
        });

          return(<tbody> {books} </tbody>);

    }
}

export default Catalog;
