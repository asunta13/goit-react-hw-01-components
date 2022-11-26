import PropTypes from 'prop-types';

export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <div class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </div>
  );
};
