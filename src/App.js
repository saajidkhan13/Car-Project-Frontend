import React, { Component } from 'react';
import MakerContainer from './components/MakerContainer'
import ModelContainer from './components/ModelContainer'
import {Button, Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'


const API = "http://localhost:3000/api/v1/makers"


class App extends Component {
  state = {
    data: [],
    visible: false,
    models: false,
    makersToDisplay: {}
   }

   componentDidMount(){
     fetch(API)
       .then(r => r.json())
       .then(carAPI => {
         console.log(carAPI);
         this.setState({data: carAPI})
       })
   }

   handleHideClick = () => this.setState({ visible: false })
   handleShowClick = () => this.setState({ visible: !this.state.visible })
   handleSidebarHide = () => this.setState({ visible: false })


  handleModel = (id) => {
  this.setState({models: !this.state.models})
  const showMaker = this.state.data.find(maker => {
    return maker.id === parseInt(id)
  })
  this.setState({makersToDisplay: showMaker.models})
 }

 handleClick = () => {
   this.setState({models: !this.state.models})
 }

 handleAllMakers = () => {
   this.setState({models: !this.state.models})
 }

  render() {
    const { visible } = this.state
    return (
      <div>
      
      <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            <Icon name='align justify' size='big' />
          </Button>
      </Button.Group>

      <Sidebar.Pushable as={Segment}>
  <Sidebar
    as={Menu}
    animation='overlay'
    icon='labeled'
    inverted
    onHide={this.handleSidebarHide}
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>

  <Sidebar.Pusher>
    <Segment basic>
      {this.state.models ? <ModelContainer model={this.state.makersToDisplay} handleClick={this.handleClick} /> : <MakerContainer makers={this.state.data} handleModel={this.handleModel}/>}
    </Segment>
  </Sidebar.Pusher>
</Sidebar.Pushable>



      </div>
    );
  }
}

export default App;
