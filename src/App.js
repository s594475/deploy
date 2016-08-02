import React from 'react';
import gitSearch from './gitSearch.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';

class App extends React.Component {
  getChildContext() {
   return {muiTheme: getMuiTheme()};
 }

  constructor(){
    super();
    this.state={
      info:{},
      wait:true
    }
  }
  componentDidMount(){
    gitSearch().then((data) =>{
      console.log(data.gitInfo);
      this.setState({
        info:data.gitInfo,
        wait:false
      })
    })
  }
  render () {
    let x = <CircularProgress size={2} />;
    return(
      <div>
        {this.state.wait ? x :
          <div>
              <h1>脚手架工具</h1>
              {this.state.info.name}
              {this.state.info.updated_at}
              {this.state.info.login}
              {this.state.info.created_at}
              <img src={this.state.info.avatar_url} />
          </div>
      }
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
