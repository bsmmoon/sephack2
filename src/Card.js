import React, {Component} from 'react';

import Style from './Style';

class Card extends Component {
  render() {
    const style = Style.import();
    let step = this.props.step;
    console.log(step)
    let action = '';
    switch (step.type) {
      case 'text':
        break;
      case 'link':
        action = <div className="col-xs-12" style={Style.merge([style.base.align.hc, style.base.align.vb, {height: '100%'}])}>
          <button onClick={()=>{window.open(step.data.link,'_blank')}} style={
            Style.merge([style.base.align.hcvc,
              {
                padding: '5px',
                'backgroundColor': '#fff',
                'border': '1px solid rgba(0, 0, 0, 0.125)',
                'color': 'black',
                width: '50%',
                margin: '5px'
              }
            ])
          }>Link</button>
        </div>
        break;
      case 'google-form':
        action = <div className="col-xs-12" style={Style.merge([style.base.align.hc, style.base.align.vb, {height: '100%'}])}>
          <button onClick={()=>{window.open(step.data.link,'_blank')}} style={
            Style.merge([style.base.align.hcvc,
              {
                padding: '5px',
                'backgroundColor': '#fff',
                'border': '1px solid rgba(0, 0, 0, 0.125)',
                'color': 'black',
                width: '50%',
                margin: '5px'
              }
            ])
          }>Link</button>
        </div>
        break;
      case 'image':
        action = <div className="col-xs-12">
          <div style={Style.merge([{maxHeight: '300px'}])}>
            <div style={Style.merge([style.base.align.hcvc])}>
              <img src={step.data.link} style={{'maxWidth': '100%'}} onClick={()=>{window.open(step.data.link,'_blank')}}/>
            </div>
            <div style={
              Style.merge([style.base.align.hcvc,
                {
                  padding: '5px',
                  'color': 'black',
                  width: '100%',
                  margin: '5px'
                }
              ])
            }>
              {step.data.caption}
            </div>
          </div>
        </div>
      default:
        break;
    }

    return (
      <div style={Style.merge([{width: '100%'}, style.base.align.hcvc])}>
        <div style={Style.merge([
          {
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
            'margin': '12px',
            'width': '480px',
            'height': '370px',
          },
        ])}>
          <div className="col-xs-12" style={Style.merge([style.base.align.hcvc,])}>
            <h3>{step.title}</h3>
          </div>
          <div className="col-xs-12" style={Style.merge([style.base.align.hcvc,])}>
            {step.message}
          </div>
          {action}
        </div>
      </div>
    )
  }
}

export default Card