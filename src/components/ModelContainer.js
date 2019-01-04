import React, {Component} from 'react';
import { Image, Header, Button } from 'semantic-ui-react'
import ModelCard from './ModelCard'

export default class ModelContainer extends Component{

  render(){
    const model = this.props.model
      console.log(model);

    return (
      <div>
        {model.map(model => {
          return <ModelCard key={model.id} model={model} />
        })}
        <Button onClick={this.props.handleClick}>Back</Button>

      </div>
    )
  }
}
