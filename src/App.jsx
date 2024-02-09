import userData from './data/userData.json'
import { Profile } from './components/Profil/Profile'

import friends from './data/friends.json'
import { FriendList } from './components/Friends/Friends'

import transactions from './data/transactions.json'
import {TransactionHistory} from './components/Transactions/Transactions'

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
