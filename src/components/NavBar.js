import React, { Component } from 'react'
import MakerContainer from './MakerContainer'
import ModelContainer from './ModelContainer'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const API = "http://localhost:3000/api/v1/makers"


export default class NavBar extends Component {
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

  handleHideClick = () => this.setState({ visible: !this.state.visible })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })



  render() {
    const { visible } = this.state.visible

    return (
      <div>
        <Button.Group>
          <Button onClick={this.handleShowClick} basic color='black' content='Black'>
            <Icon name='world' />
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
              Car Manufacturers
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Car Models
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
          <MakerContainer makers={this.state.data} handleModel={this.handleModel}/>

          </Sidebar.Pusher>

        </Sidebar.Pushable>
        </div>
    )
  }
}//end of class component
