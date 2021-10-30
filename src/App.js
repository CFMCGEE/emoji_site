import React, { Component } from 'react';

import Homepage from './pages/homepage';
import CatImage from './pages/randomcatimage'
import DogImage from './pages/randomdogimage';
// eslint-disable-next-line
import FunnyImage from './pages/memetemplate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
// eslint-disable-next-line 
import { Route, Link } from 'react-router-dom';

import { fetchCatImage } from './functionhandler/main';
import { fetchDogImage } from './functionhandler/main';
import { fetchMemeTemplate } from './functionhandler/main';



class App extends Component {
    constructor(){
        super();
        this.state = {
        catImage: '',
        dogImage: '',
        memeTmp: ''
        }
    }

    // componentDidMount() {
    //     this.GetCatImage();
    // }


    GetCatImage = () => {
        return fetchCatImage().then(data => {

            let catImg = data.file;
            this.setState({ catImage: catImg })

        })
    }

    GetDogImage = () => {
        return fetchDogImage().then(data => {

            let dogImg = data.url;
            this.setState({ dogImage: dogImg })

        })
    }

    GetMemeTemplate = () => {
        return fetchMemeTemplate().then(res => {
            
            let randomNum = Math.floor(Math.random() * 20) + 1;

            let meme = res.data.memes[randomNum].url
            this.setState({ memeTmp: meme })

        })
    }

    render() {
        return ( 
            <div className="App">
                  
                <header>
                    <nav> 
                    <ul> 

                    <Nav defaultActiveKey="/homepage" as="ul">
                     <Nav.Item as="li">
                         <Nav.Link href="/homepage">Homepage</Nav.Link>
                     </Nav.Item>
                     <Nav.Item as="li">
                        <Nav.Link href="/randomcatimage">Cat Image</Nav.Link>
                     </Nav.Item>
                     <Nav.Item as="li">
                        <Nav.Link href="/randomdogimage">Dog Image</Nav.Link>
                     </Nav.Item>
                     <Nav.Item as="li">
                        <Nav.Link href="/memetemplate">Meme Template</Nav.Link>
                    </Nav.Item>
                    </Nav>

                    </ul>
                    </nav>
                </header>
               
                <main>
               
                    <Route path="/homepage">

                    <Homepage> 
                        
                    </Homepage>

                    </Route>
                    <Route path="/randomcatimage">
 
                        <CatImage catImage={ this.state.catImage } GetCatImage={ this.GetCatImage } />

                    </Route>
                    <Route path="/randomdogimage">

                        <DogImage dogImage={ this.state.dogImage } GetDogImage={ this.GetDogImage }/>
                            
                    </Route>
                    <Route path="/memetemplate">

                        <FunnyImage memeTmp={ this.state.memeTmp } GetMemeTemplate={ this.GetMemeTemplate }/>
    
                    </Route>

                </main>
               
            </div>
        )
    }



  }

 

export default App;
