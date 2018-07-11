import React, {Component} from 'react';

import Style from './Style';

class Card extends Component {
  render() {
    const style = Style.import();
    let step = this.props.step;
    console.log(step)
    let action = '';
    switch (step.type) {
      case 'link':
        action = <a href={step.data.link}>LINK</a>;
        break;
      case 'image':
        action = <div style={{float: 'left'}}>
          <img src={step.data.link} style={{'minWidth': '100%', height: 'auto'}}/>
          {step.data.caption}
        </div>
      default:
        break;
    }

    return (
      <div style={{
        'position': 'relative',
        'display': '-ms-flexbox',
        'display': 'flex',
        'msFlexDirection': 'column',
        'flexDirection': 'column',
        'minWidth': '0',
        'wordWrap': 'break-word',
        'backgroundColor': '#fff',
        'backgroundClip': 'border-box',
        'border': '1px solid rgba(0,0,0,.125)',
        'borderRadius': '.25rem',
      }}>
        <div className="col-xs-12" style={style.base.align.hcvc}>
          <h3>{step.title}</h3>
        </div>
        <div className="col-xs-12" style={style.base.align.hcvc}>
          {step.message}
        </div>
        <div className="col-xs-12" style={style.base.align.hcvc}>
          {action}
        </div>
      </div>
    )
  }
}

export default Card