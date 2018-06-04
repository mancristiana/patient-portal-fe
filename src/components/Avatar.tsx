import { Avatar } from 'antd';
import * as React from 'react';

interface IAvatarProps {
  name: string;
  color?: string;
}
const AvatarComponent: React.SFC<IAvatarProps> = props => {
  const colors = [
    '#FFB900',
    '#D83B01',
    '#B50E0E',
    '#E81123',
    '#B4009E',
    '#5C2D91',
    '#0078D7',
    '#00B4FF',
    '#008272',
    '#107C10'
  ];

  const calculateColor = name => {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
      sum += name.charCodeAt(i);
    }
    const colorIndex = sum % colors.length;
    return colors[colorIndex];
  };

  const getNameInitials = name => {
    const regex = new RegExp(/(\b\w)\w*\s?/g);
    const letters = name.replace(regex, '$1');
    return letters.toUpperCase();
  };

  const bgColor = props.color || calculateColor(props.name);
  const initials = getNameInitials(props.name);

  return (
    <Avatar
      style={{ backgroundColor: bgColor, verticalAlign: 'middle' }}
      size="large">
      {initials}
    </Avatar>
  );
};
export default AvatarComponent;
