export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log(store.getters['auth/userData'].ID)
  if (!store.state.auth.userData.ID) {
    return redirect('/auth')
  }
}
