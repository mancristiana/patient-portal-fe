import * as React from 'react';
import './DoctorSearch.less';

interface IDoctorSearchNotFoundProps {
  query: string;
}
const DoctorSearchNotFound: React.SFC<IDoctorSearchNotFoundProps> = ({
  query
}) => {
  return (
    <div className="Search-not-found">
      <h2>No results found for "{query}"</h2>
      <h4>Some things you can do:</h4>
      <ul>
        <li>Check for spelling mistakes</li>
        <li>
          Reduce the number of keywords used or try a broader search phrase
        </li>
        <li>Try selecting a city or one of the specialities below</li>
      </ul>
    </div>
  );
};
export default DoctorSearchNotFound;
