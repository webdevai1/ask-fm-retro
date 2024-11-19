import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const FriendsIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill={props.color}
    {...props}>
    <Path d="M7.99978 -0.000028C11.3134 -0.000028 13.9996 2.68619 13.9996 5.9998C13.9996 9.3134 11.3134 11.9996 7.99978 11.9996C4.68616 11.9996 1.99994 9.3134 1.99994 5.9998C1.99994 2.68619 4.68616 -0.000028 7.99978 -0.000028zM0.999972 22.0984C0.447703 22.0984 0 21.6507 0 21.0984V18.9994C0 16.2381 2.23851 13.9996 4.99986 13.9996H11.0004C13.7617 13.9996 16.0003 16.2381 16.0003 18.9994V21.0984C16.0003 21.6507 15.5526 22.0984 15.0003 22.0984C14.448 22.0984 1.55224 22.0984 0.999972 22.0984zM13.7484 11.563C15.142 10.1233 15.9996 8.16172 15.9996 5.9998C15.9996 3.83789 15.142 1.87627 13.7484 0.43658C14.4436 0.15502 15.2034 -0.000028 15.9996 -0.000028C19.3132 -0.000028 21.9994 2.68619 21.9994 5.9998C21.9994 9.3134 19.3132 11.9996 15.9996 11.9996C15.2034 11.9996 14.4436 11.8446 13.7484 11.563zM15.8992 13.9996H19.0002C21.7615 13.9996 24 16.2381 24 18.9994V21.0984C24 21.6507 23.5523 22.0984 23.0001 22.0984H17.8295C17.94 21.7856 18.0002 21.449 18.0002 21.0984V18.9994C18.0002 17.0408 17.1958 15.2701 15.8992 13.9996z" />
  </Svg>
);
