import PropTypes from 'prop-types';
import {
	Status,
	FriendCard,
	FriendImg,
	FriendName,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<FriendCard>
			<Status isOnline={isOnline} />
			<FriendImg src={avatar} alt="User avatar" width="48" />
			<FriendName>{name}</FriendName>
		</FriendCard>
	);
};

FriendListItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};
