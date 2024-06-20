import { useGetUsers } from './hooks/userGetUsers';
import UserCard from '../Atoms/UserCard';
function Users() {
  const { users, loading, error } = useGetUsers();
  console.log('users...', users, loading, error);
  return (
    <div>
      {loading && <h2>Loading users ...</h2>}
      {users && users.length > 0 && !loading ? (
        users.map((user) => (
          <UserCard
            image={user.image}
            fullname={`${user.firstName} ${user.lastName}`}
            key={user.id}
          />
        ))
      ) : !loading && <h2>No users Found</h2>}
      {error && error.length > 0 && <h2>Error. {error}</h2>}
    </div>
  );
}
export default Users;