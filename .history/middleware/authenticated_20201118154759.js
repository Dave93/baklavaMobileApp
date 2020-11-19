export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log(store.state)
  if (!store.state.authenticated) {
    return redirect('/auth')
  }
}
