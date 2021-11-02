import React, { Component } from 'react';
import Memer from 'random-jokes-api';
import NumberFormat from 'react-number-format';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Table, Navbar, Container, Button } from 'react-bootstrap';
<link rel="stylesheet" type="text/css" href="style.css?version=51"></link>


class App extends Component {
    constructor() {
        super();
        this.state = {
            clicks: 0,
            clicks_again: 0,
            clicks_and_again: 0,
            products: [
                {item_image: <img alt="smiley face" src="https://i.dlpng.com/static/png/6456029_preview.png" width="50" 
                height="auto"></img>, name: 'Smiley GumDrops', brand: "Eyums!", price: 3},
                {item_image: <img alt="heart" src="https://i.pinimg.com/originals/63/d3/8d/63d38d8cbba4335a6d28b5e19f67be8d.png" width="50" 
                height="auto"></img>, name: 'Lovely Licorice Lolipop', brand: "Eyums!", price: 4},
                {item_image: <img alt="smiling imp" src="https://cdn.discordapp.com/attachments/695051265767637030/904935029216538654/Smiling_Devil_Emoji.png" width="50" 
                height="auto"></img>, name: 'Imp Custard', brand: "Eyums!", price: 6},
            ],
            actual_total: 0,
            actual_cart_amount: 0,
            joke_sentence: ''
        }
    }

    IncrementItem = () => {
        if (this.state.clicks >= 6) {
            this.setState({ clicks: 6 });
        } else {
        this.setState({ clicks: this.state.clicks + 1 });
        }
      }

      DecreaseItem = () => {
        if (this.state.clicks === 0) {
            this.setState({ clicks: 0 });
        } else {
        this.setState({ clicks: this.state.clicks - 1 });
       }
      }

      IncrementItem1 = () => {
        if (this.state.clicks_again >= 6) {
            this.setState({ clicks_again: 6 });
        } else {
        this.setState({ clicks_again: this.state.clicks_again + 1 });
        }
      }

      DecreaseItem1 = () => {
        if (this.state.clicks_again === 0) {
            this.setState({ clicks_again: 0 });
        } else {
        this.setState({ clicks_again: this.state.clicks_again - 1 });
       }
      }

      IncrementItem2 = () => {
        if (this.state.clicks_and_again >= 6) {
            this.setState({ clicks_and_again: 6 });
        } else {
        this.setState({ clicks_and_again: this.state.clicks_and_again + 1 });
        }
      }

      DecreaseItem2 = () => {
        if (this.state.clicks_and_again === 0) {
            this.setState({ clicks_and_again: 0 });
        } else {
        this.setState({ clicks_and_again: this.state.clicks_and_again - 1 });
       }
      }

    render() {
 
        this.state.actual_total = (this.state.products[0].price * this.state.clicks) + 
        (this.state.products[1].price * this.state.clicks_again) + (this.state.products[2].price * this.state.clicks_and_again)// + (this.state.products[2].price * this.state.clicks_again)
        this.state.actual_cart_amount = (this.state.clicks + this.state.clicks_again + this.state.clicks_and_again)

        let jokes = Memer.joke();

        return ( 


            <div className="App">
                  
                <header>
                    <nav> 
                    <ul className="navbar"> 

                     <Navbar bg="dark" variant="dark">
                      <Container>
                       <Navbar.Brand className="navbar_brand_edition" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                          <img alt="thumbs up" src="https://cdn.shopify.com/s/files/1/1061/1924/files/Thumbs_Up_Sign_Emoji_Icon_ios10.png?13752525173949329807" width="30" 
                              height="30" className="d-inline-block align-top"/>{' '}
                            Emoji Bites
                        </Navbar.Brand>
                      </Container>
                     </Navbar>

                    </ul>
                    </nav>
                </header>

                <main>

                <Table striped bordered hover variant="dark">
                 <thead>
                  <tr>
                    <th>Item</th>
                      <th>Name</th>
                       <th>Brand</th>
                          <th>Price</th>
                           <th>Quantity</th>
                       </tr>
                    </thead>
                      <tbody>
                   <tr>
                    <td>{this.state.products[0].item_image}</td>
                     <td>{this.state.products[0].name}</td>
                     <td>{this.state.products[0].brand}</td>
                     <td>${this.state.products[0].price}.00</td>
                     <td>

                         <Button variant="danger" onClick={this.DecreaseItem}>-</Button> 
                         <span>
                         <NumberFormat value={ this.state.clicks } />
                         </span>
                         <Button variant="success" onClick={this.IncrementItem}>+</Button>
         
                     </td>
                     <td colSpan="2">
                      { this.state.clicks === 0 ? <p className="no-items">No {this.state.products[0].name} today?</p> : <p className="some-items">Enjoy the {this.state.products[0].name}!</p>  }
                     </td>
                       </tr>
                      <tr>
                     <td>{this.state.products[1].item_image}</td>
                     <td>{this.state.products[1].name}</td>
                     <td>{this.state.products[1].brand}</td>
                     <td>${this.state.products[1].price}.00</td>
                     <td>
      
                         <Button variant="danger" onClick={this.DecreaseItem1}>-</Button>

                         <NumberFormat value={ this.state.clicks_again }/>

                         <Button variant="success" onClick={this.IncrementItem1}>+</Button>
         
                     </td>
                     <td>
                     { this.state.clicks_again === 0 ? <p className="no-items">No {this.state.products[1].name} today?</p> : <p className="some-items">Enjoy the {this.state.products[1].name}!</p>  }
                     </td>
                     </tr>
                     <tr>
                     <td>{this.state.products[2].item_image}</td>
                     <td>{this.state.products[2].name}</td>
                     <td>{this.state.products[2].brand}</td>
                     <td>${this.state.products[2].price}.00</td>
                     <td>
      
                         <Button variant="danger" onClick={this.DecreaseItem2}>-</Button>

                         <NumberFormat value={ this.state.clicks_and_again }/>

                         <Button variant="success" onClick={this.IncrementItem2}>+</Button>
         
                     </td>
                     <td>
                      { this.state.clicks_and_again === 0 ? <p className="no-items">No {this.state.products[2].name} today?</p> : <p className="some-items">Enjoy the {this.state.products[2].name}!</p>  }
                     </td>
                    </tr>
                     </tbody> 
                </Table>

                <h4 className="cart-shifter">You have {this.state.actual_cart_amount} items in your cart</h4>
                <h4 className="total-shifter">The total of this order is: ${this.state.actual_total} dollars</h4>
                <h4 className="total-shifter"> {jokes} </h4>

                </main>

            </div>
        )
    }


}

 

export default App;
