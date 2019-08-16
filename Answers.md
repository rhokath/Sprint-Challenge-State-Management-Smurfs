1. What problem does the context API help solve?
    prop drilling
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions are payloads of information from the application to the redux store. they represent facts about 'what happened' Reducers specify how the application's state changes in response to actions sent to the store.
    the store is an obejct that holds the application state, allows acces to state via getState, allows state to be updated via dispatch(action) and handles registering and unregistering of listeners.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
component state is local while application state is global. component state is good for inputs and forms. 
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk allows you to right async logic like axios calls, it allows us to return a dispatch function instead of an object. if a normal action object is returned the middleware passes it along to the reducer. if a think is dispatched the middleware calls that function passing in the store's dispatch and getState. it does not forward thunk to the reducer. it allows our action creator to return functions or objects.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
i like the useReducer hook. it seems to do a lot of what redux is capable of but with a lower overhead. 