import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul>{friends.map((friend) => <FriendListItem item={friend} key={friend.id}/>)}</ul>
    )
}

FriendList.propTypes = {
    friends:PropTypes.arrayOf(PropTypes.object).isRequired,
}