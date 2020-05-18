import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class GHSearch extends Component {
  getResults = async () => {
    let q = document.getElementById('search-input').value
    const response = await axios.get(`/search/user&q=${q}`)
    debugger
  }

  render() {

    return (
      <>
        <Input id="search-input" type="text" name="search" placeholder="Input GH username"/>
        <Button onClick={() => {this.getResults()}} name="search">Search</Button>
      </>
    )
  }
}

export default GHSearch
