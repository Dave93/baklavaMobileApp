export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log(+store.state.auth.userData.ID <= 0)
  if (+store.state.auth.userData.ID <= 0) {
    return redirect('/auth')
  }
}
