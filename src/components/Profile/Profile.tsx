import * as React from 'react';
import Avatar from './Avatar';
import './Profile.less';

interface IProfileProps {
  name: string;
  description: string;
  color?: string;
}
const Profile: React.SFC<IProfileProps> = props => {
  return (
    <div className="Profile">
      <div className="Profile-avatar">
        <Avatar name={props.name} color={props.color} />
      </div>

      <div className="Profile-box">
        <div className="Profile-text">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
