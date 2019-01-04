import React, {Component} from 'react';
import MakerCard from './MakerCard'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'



export default class MakerContainer extends Component {


  render(){

    return (
      <div>
            <Card.Group itemsPerRow={4}>
            {this.props.makers.map(maker => {
                return <MakerCard key={maker.id} maker={maker} handleModel={this.props.handleModel} />})}
          </Card.Group>
      </div>
    )
  }
}
