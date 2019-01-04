import React, {Component} from 'react';
import { Divider, Image, Card, Header, Statistic, Container, Grid } from 'semantic-ui-react'



export default class ModelCard extends Component {

  render(){
    const model = this.props.model
    return(
      <div>
        <Container>
        <Grid columns={2} relaxed='very'>

          {model.images.map(image => {
            return <Grid.Column key={image}><img  src={image} height="280" width="450" size='large' /></Grid.Column>
          })}
        </Grid>
          <Header as='h1'>{model.name}</Header>
          <Header as='h3'>{model.description}</Header>

          <Statistic>
            <Statistic.Value>${model.price}</Statistic.Value>
            <Statistic.Label>Price</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{model.engine}</Statistic.Value>
            <Statistic.Label>Engine</Statistic.Label>
          </Statistic>
        </Container >
      </div>
    )
  }
}
