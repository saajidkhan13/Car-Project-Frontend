import React, {Component} from 'react';
import { Card, Image, Button } from 'semantic-ui-react'


export default class MakerCard extends Component {
  state = {
    clicked: false,
    model: false
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }


  render(){
    const maker = this.props.maker
    return (

          <Card>
            <Image src={maker.image} onClick={this.handleClick}/>
            <Card.Content>
              <Card.Header>{maker.name}</Card.Header>
              {this.state.clicked ? <Card.Description>{maker.description}</Card.Description> : null}
              <Button onClick={() => this.props.handleModel(maker.id)}>See Models</Button>
            </Card.Content>
          </Card>

    )
  }
}
