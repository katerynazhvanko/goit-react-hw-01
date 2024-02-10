import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <FriendListItem friends={friend} key={friend.id} />
      ))}
    </ul>
  );
};
