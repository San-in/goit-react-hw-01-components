import PropTypes from "prop-types";
import { 
    Online,
    Ofline,
    FriendCard,
    FriendImg,
    FriendName
} from "./FriendListItem.styled";

export const FriendListItem = ({item}) => {
    const{avatar,name,isOnline} = item;
return (
    <FriendCard>{ isOnline
            ? <Online></Online>
            : <Ofline></Ofline>}
    <FriendImg src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
    </FriendCard>
    )
};

FriendListItem.propTypes = {
    item:PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
        id:PropTypes.number.isRequired,
       
    }),
    
}