import { Component } from "react";

import React from 'react'
import {Button, message} from 'antd'

export default class App extends Component {

  handleClick = ()=>{
    message.success('This is a antd button')
  }

  render() {
    return <Button type='primary' onClick={this.handleClick}>click me</Button>
  }
}