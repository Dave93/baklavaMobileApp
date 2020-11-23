export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log('middleware', store.state.auth)
  if (!store.state.auth.userData.ID) {
    return redirect('/auth')
  }
}
