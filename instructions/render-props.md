# Render Props

* `git checkout render-props -f`
* Create a component that:
  * Let you query any endpoint
  * Pass `loading` and `error` states to other components

## Steps

* Create a component called `ApiConsumer`
* `ApiConsumer` should receive a prop called `endpoint` `<ApiConsumer endpoint="users" />` for example.
* `ApiConsumer` should handle all the request states, **Loading**, **Error** and **Data**
* The response from the API should be stored inside **Data**
* The component should work like

```js
<ApiConsumer endpoint="users">
  {({ loading, error, data }) => {
    // do what you need with loading
    // Show loading state...
    // do what you need with error
    // Show Error state...
    // do what you need with data
    // Show the right data with what is returned by the API
  }}
</ApiConsumer>
```
