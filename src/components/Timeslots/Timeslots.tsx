import { Button } from 'antd';
import * as React from 'react';
import { DayTimeslot } from './../../models';
import DayTimeslots from './DayTimeslots';

import './Timeslots.less';

interface ITimeslotsProps {
  days: DayTimeslot[];
}
interface ITimeslotsState {
  page: number;
}
class Timeslots extends React.Component<ITimeslotsProps, ITimeslotsState> {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }
  public render() {
    const dayWidth = 150;

    const isLeftDisabled = this.state.page === 0;
    const isRightDisabled = this.state.page === this.props.days.length - 1;
    return (
      <div className="Timeslots">
        <h1>Book an appointment</h1>
        <div className="Timeslots-navigation-container">
          <div className="Timeslots-navigation">
            <Button
              className="left"
              type="primary"
              shape="circle"
              icon="left"
              onClick={this.decreasePage}
              disabled={isLeftDisabled}
            />
            <Button
              className="right"
              type="primary"
              shape="circle"
              icon="right"
              onClick={this.increasePage}
              disabled={isRightDisabled}
            />
          </div>
        </div>
        <div className="Timeslots-viewer">
          <div
            className="Timeslots-container"
            style={{
              left: -dayWidth * this.state.page,
              width: this.props.days.length * dayWidth
            }}>
            {this.props.days.map((day, key) => (
              <DayTimeslots key={key} day={day} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  private decreasePage = event => {
    if (this.state.page > 0) {
      this.setState({ page: this.state.page - 1 });
    }
  };
  private increasePage = event => {
    if (this.state.page < this.props.days.length - 1) {
      this.setState({ page: this.state.page + 1 });
    }
  };
}
export default Timeslots;
