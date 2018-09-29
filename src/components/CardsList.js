import React from "react"
import NewCard from "./NewCard"
import avengers from '../avengers.json';
import NavigationTabs from './NavigationTabs'
import { Row } from 'reactstrap';

let clickedPics = []
let highScore = 0
let score = 0

class CardsList extends React.Component {


    handleChange = (name, id) => {
        if (clickedPics.includes(id)) {
            alert("Already Clicked")
            clickedPics = []
            if (highScore <= score + 1) {
                highScore = score + 1
            }
            this.setState({ clicked: 0 })


        } else {
            clickedPics.push(id)
            this.setState({ currentCartoon: name, clicked: this.state.clicked + 1 });
            this.shuffle(this.state.cartoonCharacters);
            console.log(clickedPics, this.state.clicked)
            score = this.state.clicked
            if (score === 12) {
                alert("YOU WIN!!")
            }
        }
    }

    shuffle = (characters) => {
        for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]];
        }
        return characters;
    }

    state = {
        cartoonCharacters: avengers,
        currentCartoon: "",
        clicked: 0,
    }

    goHome = () => {
        console.log("went home")
        return (
            <NavigationTabs />
        )
    }

render() {
    return (
        <div>
            <NavigationTabs goHome={this.goHome} clicks={this.state.clicked} currentHighScore={highScore}/>
            <div className="container">
                <br />
                <Row>
                    {this.state.cartoonCharacters.map(item => (
                        <NewCard id={item.id} name={item.name} occupation={item.occupation} location={item.location} image={item.image} handleChange={this.handleChange} />
                    ))}
                </Row>
            </div>
        </div>

        )
    }
}

export default CardsList;