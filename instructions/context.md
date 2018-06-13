# Render Props

* `git checkout context -f`
* Take a look at `/providers`
* You can use React's Context in order to avoid _prop drilling_
* React's Context uses the Render Props pattern

## Your task

* Use the `<AuthProvider />` component that uses React's Context API to update the state of the button bellow `Stories`
* If the user is **logged in**, the button should say: `Logout`
* If the user is **not logged in**, the button should say: `Login`
* If the user is **logged in**, the three icons in the navigation **should be** displayed
* If the user is **not logged in**, the three icons in the navigation should not be displayed

* The releavant files for this exercise are:
  * `/src/providers/AuthProvider/AuthProvider.js`;
  * `/src/components/App/App.js`;
  * `/src/components/LoginButton/LoginButton.js`;
  * `/src/components/Navigation/Navigation.js`;
