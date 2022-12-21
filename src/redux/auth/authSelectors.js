const getIsLoggedIn = state => state.auth.getLoggedIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default authSelectors;
