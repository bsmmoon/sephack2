import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Style from './Style';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.style = Style.import();

    this.bar = <i className="fas fa-minus" style={{'fontSize': '45px', padding: '2px'}}></i>
    this.empty = <i className="far fa-circle" style={{'fontSize': '30px', padding: '2px'}}></i>
    this.full = <i className="fas fa-circle" style={{'fontSize': '30px', padding: '2px', color: 'red'}}></i>

    this.state = {
      steps: [
        {title: 'Simple Link', message: 'Welcome', type: 'link', data: {link: 'https://www.sephora.sg/'}},
        {title: 'G Form', message: 'Terms and Conditions applied', type: 'link', data: {link: 'https://docs.google.com/forms/d/e/1FAIpQLSczb52p39n4xvaEFFkKBcF9AJ63m0B5TbkCLDSnRdWPCP5BUQ/viewform?embedded=true'}},
        {title: 'Image', message: 'WOW', type: 'image', data: [
          {link: 'https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg', caption: 'wow'},
          {link: 'https://t3.rbxcdn.com/abab9c91475ebf5a6c172a77e4e24708', caption: 'reverse of wow is wow'}
        ]},
      ],
      progress: 0,
      complete: false,
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
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc,
          {
            color: 'white',
            background: 'black',
            'fontWeight': '700',
            'letterSpacing': '0.5px',
            'fontSize': '24px',
            'lineHeight': '26px',
          }])}>
          <h1 style={{margin: '20px 0px 10px 0px'}}>{header}</h1>
        </div>
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc, {color: 'white', background: 'black'}])}>
        <p style={{margin: '10px 0px 20px 0px'}}>{subheader}</p>
        </div>
      </div>
    )
  }

  makeCurrentStepComponent() {
    let step = this.state.steps[this.state.progress]
    let action = '';
    switch (step.type) {
      case 'link':
        action = <a href={step.data.link}>LINK</a>;
        break;
      case 'image':
        action = step.data.map((image, index) => {
          return <div key={index}>
            <img src={image.link}/>
            {image.caption}
          </div>
        });
      default:
        break;
    }

    console.log(action)

    return (
      <div>
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          <h3>{step.title}</h3>
        </div>
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          {step.message}
        </div>
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          {action}
        </div>
      </div>
    )
  }

  progress() {
    let progress = this.state.progress + 1;
    if (!(progress < this.state.steps.length)) {
      this.setState({complete: true})
    } else {
      this.setState({progress: progress});
    }
  }

  progressComponent() {
    let progress = [];
    for (let i = 0; i < this.state.steps.length; i++) {
      if (i <= this.state.progress) {
        progress.push(<span key={`${i}-bar`}>{this.bar}</span>)
        progress.push(<span key={`${i}-circle`}>{this.full}</span>)
      } else {
        progress.push(<span key={`${i}-bar`} style={{color: 'lightgrey'}}>{this.bar}</span>)
        progress.push(<span key={`${i}-circle`} style={{color: 'lightgrey'}}>{this.empty}</span>)
      }
    }
    if (this.state.complete) {
      progress.push(<span key='end-bar'>{this.bar}</span>)
    } else {
      progress.push(<span key='end-bar' style={{color: 'lightgrey'}}>{this.bar}</span>)      
    }
    
    let nextButton = (
      <div>
        <div className="col-xs-4"></div>
        <button className="col-xs-4" style={Style.merge([this.style.base.align.hcvc,
          {
            border: '0px',
            padding: '5px',
            'color': '#fff',
            'backgroundColor': '#d50032',
            'borderColor': '#d50032',
          }])} onClick={this.progress.bind(this)}>
          NEXT
        </button>
        <div className="col-xs-4"></div>
      </div>
    )

    return (
      <div className="row">
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc, {padding: '20px'}])}>
          <div style={this.style.base.align.hcvc}>
            {progress}
          </div>
        </div>
        {this.state.complete ? '' : nextButton}
        {this.state.complete ? '' : this.makeCurrentStepComponent()}
      </div>
    )
  }

  completeComponent() {
    return (
      <div className="row">
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzrgO9g90pZIK4vHItL08PILDUATpj16B328szTdFGGBNzuLN"/>
        </div>
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          Thank you for completing the survey.
        </div>
      </div>
    )
  }

  render () {
    console.log(this.state)
    const url = 'http://u-wantitblog.com/wp-content/uploads/2017/03/sephora-header.jpg';
    const header = 'SEPHORA'
    const subheader = 'new minion guide'
    return (
      <div className="container" style={{width: '900px', fontFamily: '"Avalon", CenturyGothic, Helvetica, Arial'}}>
        {this.bannerComponent(url)}
        {this.headerComponent(header, subheader)}
        {this.progressComponent()}
        {this.state.complete ? this.completeComponent() : ''}
      </div>
    )
  }
}

export default App
