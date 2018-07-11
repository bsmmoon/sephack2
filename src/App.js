import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Style from './Style';
import Card from './Card';

import Slider from "react-slick";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.style = Style.import();

    this.bar = <i className="fas fa-minus" style={{'fontSize': '45px', padding: '2px'}}></i>
    this.empty = <i className="far fa-circle" style={{'fontSize': '30px', padding: '2px'}}></i>
    this.full = <i className="fas fa-circle" style={{'fontSize': '30px', padding: '2px', color: 'red'}}></i>

    this.slideSettings = {
      dots: false,
      infinite: false,
      swipe: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    const id = this.getParameterByName('id', window.location);
    if (id == 2) {
      this.banner = 'http://u-wantitblog.com/wp-content/uploads/2017/03/sephora-header.jpg';
      this.header = 'Admin Account Creation'
      this.subheader = 'step by step'
      this.headerColor = 'white'
      this.headerBackground = 'black'

      this.steps = [
        {title: 'Step 1', message: 'Select register on the top left corner and click ‘I’M NEW TO SEPHORA’', type: 'image', data: {
          link: 'https://i.imgur.com/Te5DsXA.png', caption: '',
        }},
        {title: 'Step 2', message: 'Input your details and your staff email address accordingly and continue.', type: 'image', data: {
          link: 'https://i.imgur.com/LmGgCng.png', caption: '',
        }},
      ]
    } else if (id == 3) {
      this.banner = 'https://i.imgur.com/ScAasNC.png';
      this.header = 'How to Make Omelette'
      this.subheader = 'for the hungry souls'
      this.headerColor = 'black'
      this.headerBackground = '#FFE4B5'

      this.steps = [
        {title: 'Step 1', message: 'BEAT eggs, water, salt and pepper in small bowl until blended.', type: 'image', data: {
          link: 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Step-1-2-120x120.jpg', caption: '',
        }},
        {title: 'Step 2', message: 'HEAT butter in 7 to 10-inch nonstick omelet pan or skillet over medium-high heat until hot. TILT pan to coat bottom. POUR IN egg mixture. Mixture should set immediately at edges.', type: 'image', data: {
          link: 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Step-2-3-120x120.jpg', caption: '',
        }},
        {title: 'Step 3', message: 'GENTLY PUSH cooked portions from edges toward the center with inverted turner so that uncooked eggs can reach the hot pan surface. CONTINUE cooking, tilting pan and gently moving cooked portions as needed.', type: 'image', data: {
          link: 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Step-3-3-120x120.jpg', caption: '',
        }},
        {title: 'Step 4', message: 'When top surface of eggs is thickened and no visible liquid egg remains, PLACE filling on one side of the omelet. FOLD omelet in half with turner. With a quick flip of the wrist, turn pan and INVERT or SLIDE omelet onto plate. SERVE immediately.', type: 'image', data: {
          link: 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Step-4-120x120.jpg', caption: '',
        }},
      ]
    } else {
      this.banner = 'http://u-wantitblog.com/wp-content/uploads/2017/03/sephora-header.jpg';
      this.header = 'New Hire Guide'
      this.subheader = 'welcome'
      this.headerColor = 'white'
      this.headerBackground = 'black'

      this.steps = [
        {title: 'Sign Up to Sephora.sg', message: 'Ask your neighbor for admin access', type: 'link', data: {link: 'https://www.sephora.sg/'}},
        {title: 'Personal Details Survey', message: 'Your data is safe with us', type: 'google-form', data: {
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSczb52p39n4xvaEFFkKBcF9AJ63m0B5TbkCLDSnRdWPCP5BUQ/viewform?embedded=true',
          api: 'https://script.google.com/macros/s/AKfycbwrXYiq_0bLfdfePko1TfWrB4m5D70KTU3XIuX3MuXeCyfrS7o/exec',
        }},
        {title: 'Freshdesk', message: 'Ask your neighbor for access', type: 'link', data: {link: 'https://luxola.freshdesk.com/helpdesk'}},
        {title: 'How to create an admin account', message: 'Step by step guide', type: 'link', data: {link: '?id=2'}},
      ]
    }

    this.stepDisplay = <Slider ref={slider => (this.slider = slider)} {...this.slideSettings}>
      {
        this.steps.map((step, index) => {
          return <div key={index}>{this.makeCurrentStepComponent(step)}</div>;
        })
      }
      <div>
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc, {padding: '20px'}])}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzrgO9g90pZIK4vHItL08PILDUATpj16B328szTdFGGBNzuLN"/>
        </div>
        <div className="col-xs-12" style={this.style.base.align.hcvc}>
          Thank you for completing the survey.
        </div>
      </div>
    </Slider>

    this.state = {
      progress: 0,
      complete: false,
      feedback: '',
    }
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  bannerComponent() {
    return (
      <div className="row">
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc])}>
          <img src={this.banner} style={{maxWidth: '100%'}}/>
        </div>
      </div>
    )
  }

  headerComponent() {
    return (
      <div className="row">
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc,
          {
            color: this.headerColor,
            background: this.headerBackground,
            'fontWeight': '700',
            'letterSpacing': '0.5px',
            'fontSize': '24px',
            'lineHeight': '26px',
          }])}>
          <h1 style={{margin: '20px 0px 10px 0px'}}>{this.header}</h1>
        </div>
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc, {
          color: this.headerColor,
          background: this.headerBackground,
        }])}>
        <p style={{margin: '10px 0px 20px 0px'}}>{this.subheader}</p>
        </div>
      </div>
    )
  }

  makeCurrentStepComponent(step) {
    return <Card step={step}/>
  }

  progress() {
    let progress = this.state.progress;
    let currentStep = this.steps[progress];
    var current_user = "yuhan.peh@luxola.com"

    let self = this;
    if (currentStep.type == 'google-form') {
      this.setState({feedback: 'checking...'})
      $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbwrXYiq_0bLfdfePko1TfWrB4m5D70KTU3XIuX3MuXeCyfrS7o/exec',
        type : "GET",
        dataType: 'JSON',
        success : function (data, status, xhr) {
          if ((data['logLines'][0]['Email Address'] === current_user) && (data['logLines'][0]['Status'] === 'Completed')) {
            progress = self.state.progress + 1;
            if (!(progress < self.steps.length)) {
              self.setState({
                complete: true,
                feedback: '',
              })
            } else {
              self.setState({
                progress: progress,
                feedback: '',
              });
            }
            self.slider.slickGoTo(progress);
          } else {
            return;
          }
        }
      });
    } else {
      progress = this.state.progress + 1;
      if (!(progress < this.steps.length)) {
        this.setState({complete: true})
      } else {
        this.setState({progress: progress});
      }
      this.slider.slickGoTo(progress);
    }
  }

  progressComponent() {
    let progress = [];
    for (let i = 0; i < this.steps.length; i++) {
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
            'backgroundColor': this.state.complete ? 'lightgrey' : '#d50032',
            'borderColor': '#d50032',
          }])} onClick={this.state.complete ? () => {} : this.progress.bind(this)}>
          NEXT
        </button>
        <div className="col-xs-4"></div>
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc])}>{this.state.feedback}</div>
      </div>
    )

    return (
      <div className="row">
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc, {padding: '20px'}])}>
          <div style={this.style.base.align.hcvc}>
            {progress}
          </div>
        </div>
        {nextButton}
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
    return (
      <div className="container" style={{width: '900px', fontFamily: '"Avalon", CenturyGothic, Helvetica, Arial'}}>
        {this.bannerComponent()}
        {this.headerComponent()}
        {this.stepDisplay}
        {this.progressComponent()}
      </div>
    )
  }
}

export default App
