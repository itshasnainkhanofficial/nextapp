function User({ users }) {
  return (
    <div>
      <h2>{users.name}</h2>
      <p>{users.email}</p>
    </div>
  );
}

export default User;
