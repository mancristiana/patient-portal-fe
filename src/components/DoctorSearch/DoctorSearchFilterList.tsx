import { Button, Icon } from 'antd';
import * as React from 'react';
import './DoctorSearch.less';

interface IDoctorSearchFilterListProps {
  list: string[];
  title: string;
  onSelect: (item: string) => void;
  size?: number;
}
interface IDoctorSearchFilterListState {
  isSliced: boolean;
}
class DoctorSearchFilterList extends React.Component<
  IDoctorSearchFilterListProps,
  IDoctorSearchFilterListState
> {
  constructor(props) {
    super(props);
    this.state = {
      isSliced: true
    };
  }
  public render() {
    const { list, title, onSelect, size = 11 } = this.props;
    const { isSliced } = this.state;
    const slicedList = isSliced ? list.slice(0, size) : list;
    const icon = isSliced ? 'plus' : 'minus';

    return (
      <div className="Search-filter-list">
        <h3>{title}</h3>
        <div>
          <ul>
            {slicedList.map((item, key) => (
              <li key={key} onClick={event => onSelect(item)}>
                {item}
                <span className="Search-filter-icon">
                  <Icon type="search" />
                </span>
              </li>
            ))}
          </ul>
          {list.length > size && (
            <Button
              type="primary"
              shape="circle"
              size="small"
              icon={icon}
              onClick={this.toggleSliced}
            />
          )}
        </div>
      </div>
    );
  }

  private toggleSliced = event => {
    this.setState({ isSliced: !this.state.isSliced });
  };
}
export default DoctorSearchFilterList;
