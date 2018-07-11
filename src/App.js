import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Style from './Style';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.style = Style.import();

    this.bar = <i className="fas fa-minus" style={{'fontSize': '45px'}}></i>
    this.empty = <i className="far fa-circle" style={{'fontSize': '30px'}}></i>
    this.full = <i className="fas fa-circle" style={{'fontSize': '30px'}}></i>

    this.state = {
      total: 3,
      progress: 0,
    }
  }

  bannerComponent(url) {
    return (
      <div className="row">
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          <img src={url}/>
        </div>
      </div>
    )
  }

  headerComponent(header, subheader) {
    return (
      <div className="row">
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc, {color: 'white', background: 'black'}])}>
          <h1 style={{margin: '20px'}}>{header}</h1>
        </div>
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          <h2>{subheader}</h2>
        </div>
      </div>
    )
  }

  progressComponent() {
    let progress = [];
    for (let i = 0; i < this.state.total; i++) {
      progress.push(<span key={`${i}-bar`}>{this.bar}</span>)
      if (i <= this.state.progress) {
        progress.push(<span key={`${i}-circle`}>{this.full}</span>)
      } else {
        progress.push(<span key={`${i}-circle`}>{this.empty}</span>)
      }
    }
    progress.push(<span key='end-bar'>{this.bar}</span>)
    
    return (
      <div className="row">
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc])}>
          {progress}
        </div>
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          STEP {this.state.progress + 1}
        </div>
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          <h3>Sign Up to Sephora</h3>
        </div>
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          <a href="https://google.com">LINK</a>
        </div>
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          Do this and that
        </div>
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc, this.style.base.cursor.pointer, this.style.base.unselectable])} onClick={() => {this.setState({progress: this.state.progress + 1})}}>
          NEXT
        </div>
      </div>
    )
  }

  render () {
    const url = 'http://u-wantitblog.com/wp-content/uploads/2017/03/sephora-header.jpg';
    const header = 'SEPHORA'
    const subheader = 'new minion guide'
    return (
      <div className="container" style={{width: '900px'}}>
        {this.bannerComponent(url)}
        {this.headerComponent(header, subheader)}
        {this.progressComponent()}
      </div>
    )
  }
}

export default App
