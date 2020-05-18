import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class GHSearch extends Component {
  getResults = async () => {
    let q = document.getElementById('search-input').value
    try {
      const response = await axios.get(`/search/users?q=${q}`, {
        headers: {
          Accept: "application/vnd.github.v3+json"
        } 
      })
      debugger
    } catch(error) {

      debugger
    }
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
