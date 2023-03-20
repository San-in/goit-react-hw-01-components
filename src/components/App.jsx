import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import {UserProfile} from './UserProfile/UserProfile';
import { Statistics } from './Statistics/Statistics';
import { titleOfStats } from './Statistics/titleOfStats';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div
      style={{
        padding:40,
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <UserProfile   
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>

      <Statistics
      dataOfstats={data}
      title={titleOfStats}
      />
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
