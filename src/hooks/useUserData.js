function useUserData(auth) {
  return auth.currentUser;
}

export default useUserData;

// const { uid, email, emailVerified } = useUserData()
