import PropTypes from 'prop-types';
import {
	ProfileCard,
	CardDescription,
	CardName,
	CardTag,
	CardLocation,
	CardStats,
	CardStatsLabel,
	CardStatsQnt,
} from 'components/UserProfile/UserProfile.styled';

export const UserProfile = ({
	username,
	location,
	tag,
	avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
	stats,
}) => {
	return (
		<ProfileCard>
			<CardDescription>
				<img src={avatar} alt="User avatar" />
				<CardName>{username}</CardName>
				<CardTag>{`@${tag}`}</CardTag>
				<CardLocation>{location}</CardLocation>
			</CardDescription>

			<CardStats>
				<li>
					<CardStatsLabel>Followers</CardStatsLabel>
					<CardStatsQnt>{stats.followers}</CardStatsQnt>
				</li>
				<li>
					<CardStatsLabel>Views</CardStatsLabel>
					<CardStatsQnt>{stats.views}</CardStatsQnt>
				</li>
				<li>
					<CardStatsLabel>Likes</CardStatsLabel>
					<CardStatsQnt>{stats.likes}</CardStatsQnt>
				</li>
			</CardStats>
		</ProfileCard>
	);
};

UserProfile.propTypes = {
	username: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	avatar: PropTypes.string,
	stats: PropTypes.exact({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}).isRequired,
};
