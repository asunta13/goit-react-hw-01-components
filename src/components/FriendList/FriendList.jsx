import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friends => (
        <li key={friends.id}>
          <FriendListItem friends={friends} />
        </li>
      ))}
    </ul>
  );
};
