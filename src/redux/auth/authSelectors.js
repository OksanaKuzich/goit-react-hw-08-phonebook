const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsLoadingLogin = state => state.auth.isLoading;


const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsLoadingLogin,
};

export default authSelectors;
