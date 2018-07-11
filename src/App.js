import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Style from './Style';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.style = Style.import();

    this.state = {
      searchOpen: false,
      currentCalendar: 'All',
      calendarSrcs: {
        'All': 'meetingroombookbook%40gmail.com',
        'Aero': 'jb6i3e63fllvb3r6k2rprhfu78%40group.calendar.google.com',
        'Australia': '6dtnn48acr2b6p44ipascf8sa4%40group.calendar.google.com',
        'Cheetah': 'r620c2je9c2is9m6rehtkn4c6o%40group.calendar.google.com',
        'China': 'r58ht4m27g54j6k8jlqcar2p4c%40group.calendar.google.com',
        'Dubai': 'g4l94ukdm1qabngq3adi7j3jp0%40group.calendar.google.com',
        'Hong Kong': '998iijas4mbjfgpk08gb5navv0%40group.calendar.google.com',
        'India': '3jhtgd331vijqierj8bemcp60s%40group.calendar.google.com',
        'Ion': 'i2eoo7734q1tkassa3bsofg36s%40group.calendar.google.com',
        'KLCC': 'afm1ec620v3r06nqdi9ka5j4ts%40group.calendar.google.com',
        'New Zealand': 'hna0j0gaccqomqv6pv1fvf7tk0%40group.calendar.google.com',
        'Octopus': 'aog4efj92poovmq1p20arevcsg%40group.calendar.google.com',
        'Philippines': 'flb1ik5ibls7fpfb825etejg00%40group.calendar.google.com',
        'Pitt Street': 'ukk1j80p6d5uq7e5adguj4rr5o%40group.calendar.google.com',
        'Siam': 'r0t36htoju34kt0r3mc6lvu13k%40group.calendar.google.com',
        'Singapore': 'r0t36htoju34kt0r3mc6lvu13k%40group.calendar.google.com',
        'Spider': '8cn5cdkbstbheksnr3bhgi2kqo%40group.calendar.google.com',
        'Thailand': '3lvtljqg095m82cb2jsg0ptqgg%40group.calendar.google.com',
        'Times Square': 'a2rnflknpek4074nevtlv8kghk%40group.calendar.google.com',
        'Vietnam': '94b91tg1sp2kf6aogiolrfp6ks%40group.calendar.google.com',
      }
    };
  }

  makeCalendarButtons() {
    let calendars = Object.keys(this.state.calendarSrcs);
    return (
      <div className="col-xs-12" style={this.style.base.align.hcvc}>
        {
          calendars.map(function(calendar) {
            return (
              <button key={calendar}
                onClick={() => this.setState({currentCalendar: calendar})}
                style={this.state.currentCalendar === calendar ? this.style.base.backgroundColour.lightGrey : this.style.base.backgroundColour.white}
              >{calendar}</button>
            )
          }.bind(this))
        }
      </div>
    )
  }

  componentDidMount() {
  }

  makeRoomSearchComponent() {
    const searchInputComponent = (
      <div className="row">
        <div className="col-xs-12" style={Style.merge([this.style.base.align.hcvc, this.style.base.padding.left.large, this.style.base.padding.right.large, this.style.base.padding.bottom.medium])}>
          <div style={Style.merge([{marginRight: '20px', float: 'left'}])}>From: <input type="date" ></input></div>
          <div style={Style.merge([{marginRight: '20px', float: 'left'}])}>To: <input type="date"></input></div>
          <div style={Style.merge([{marginRight: '20px', float: 'left'}])}>Pax: <input type="number"></input></div>
          <button style={this.style.base.backgroundColour.white}>Search</button>
        </div>
      </div>
    )
    const searchOpen = this.state.searchOpen;
    return (
      <div className="col-xs-12">
        <div className="row">
          <div className="col-xs-12" style={Style.merge([this.style.base.backgroundColour.white, this.style.base.padding.left.large, this.style.base.padding.right.large, this.style.base.padding.bottom.medium, this.style.base.align.hcvc, this.style.base.font.bold])}>
            <button style={Style.merge([{width: '100%'}])}
              onClick={() => this.setState({searchOpen: !searchOpen})}>
              {searchOpen ? 'CLOSE SEARCH' : 'OPEN SEARCH'}
            </button>
          </div>
        </div>
        {searchOpen ? searchInputComponent : ''}
      </div>
    )
  }

  render () {
    const roomSearchComponent = this.makeRoomSearchComponent();
    const currentCalendar = this.state.currentCalendar;
    const src = ["https://calendar.google.com/calendar/embed?src=", this.state.calendarSrcs[currentCalendar], "&ctz=Asia%2FSingapore"].join('')
    const calendarButtons = this.makeCalendarButtons();

    return (
      <div className="container">
        <div className="row">
          {roomSearchComponent}
        </div>
        <div className="row">
          {calendarButtons}
        </div>
        <div className="row">
          <div className="col-xs-12" style={this.style.base.align.hcvc}>
            <iframe src={src} style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default App
