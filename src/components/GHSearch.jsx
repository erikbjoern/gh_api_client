import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class GHSearch extends Component {
  state = {
    searchResult: []
  }

  getResults = async () => {
    let q = document.getElementById('search-input').value.toLowerCase()
    try {
      const response = await axios.get(`/search/users?q=${q}`, {
        headers: {
          Accept: "application/vnd.github.v3+json"
        } 
      })
      this.setState({searchResult: response.data.items})
    } catch(error) {
      debugger
    }
  }


  render() {
    let i = 1
    let searchResult = this.state.searchResult.map((result) => {
      return (
        <>
          <p id={`result-${i++}`}>{result.login}</p>
        </>
      )
    })


    return (
      <>
        <Input id="search-input" type="text" name="search" placeholder="Input GH username"/>
        <Button onClick={() => {this.getResults()}} name="search">Search</Button>
        {searchResult}
      </>
    )
  }
}

export default GHSearch
