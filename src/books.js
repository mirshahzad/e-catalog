import React, {Component} from 'react';
import axios from 'axios';
import Auth from './Auth';

class Books extends Component {
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
                <tr>
                    <td>{books.Book_Title}</td>
                    <td>{books.Author_name}</td>
                    <td>{books.Year_of_Publication}</td>
                    <td>{books.Library_name}</td>
                    <td>{books.Book_Language}</td>
                    <td>{books.ISBN_No}</td>
                    <td>{books.category}</td>
                    <td>{books.No_of_pages}</td>
                </tr>
            )
        });
        return(<tbody> {books} </tbody>);

    }
}

export default Books;
