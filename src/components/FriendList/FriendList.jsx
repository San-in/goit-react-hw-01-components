import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
	return (
		<ul>
			{friends.map(friend => (
				<FriendListItem
					avatar={friend.avatar}
					name={friend.name}
					isOnline={friend.isOnline}
					key={friend.id}
				/>
			))}
		</ul>
	);
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			avatar: PropTypes.string,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	).isRequired,
};
