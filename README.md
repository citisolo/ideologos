
# Ideologos - Idea List App


![Idealogos app](https://i.imgur.com/LxMAgCl.png)

Idealogos is an idea board app that can be used to create, update, delete and sort items.

# Features

-  Fully responsive.
-   Editable idea tiles with  a title and description field , as well as created/updated time.
-   New ideas  have the title field focused to prompt user to begin typing.
-  Sorting ideas by creation date or alphabetically.
- `LocalStorage` Persistence

# Implementation

All components are implemented using ReactHooks. The application state is managed by the `IdeaBoard` component. Tiles are displayed via the `IdeaList` component  and the `IdeaBoard` component holds a archetypal  `IdeaList` component from which to create new Components.

## Structure

 -  IdeaBoard
	 - Nav Panel
	 - Idea List Component
	 - Idea Input Component 


## Getting started

`yarn start`  will run a development server on  `http://localhost:3000`.  
`yarn test`  will run the suite of tests created.

you can try the `live demo` here at [https://ideologos.herokuapp.com](https://ideologos.herokuapp.com)