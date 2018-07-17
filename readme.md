This repository stores the UI components used by generated applications. Each component is a single `.vue` file comprising the JavaScript and HTML needed to display the component.

# Repository structure

The different _official_ UI themes are stored in there own folder. For now, only the `go-default` theme exists.

Components are sorted into 4 categories, which correspond to Abstract classes:

-   Input/Output components
-   Container components
-   Selection components
-   Action components

Based on their category, these components must implement a specific interface which will be used linked to the application meta-model at generation time.
At the component level, extra data might be needed / implemented, depending on the interface defined for each type of component.

## Input/Output Components

These represent the most simple components. They have only one purpose: to display the value which is passed and emit an event when the value is changed (if the component can be used as an _input_ component).

## Container components

Containers are components which define a _scope_. This scope can be of different cardinality:

-   **Single scope**: the component will display information for a single entity and its fields.
-   **Multiple scope**: the component will display information for list of entitiess (of a defined type) and their fields.

## Selection components

These are containers of multiple cardinality (applied on a list) with the capacity of selecting a subset of the displayed data.

## Action components

This component reacts to user actions in order to execute a command in the app.

# Rules

1.  These components should be independent of Vuex => store & data management will be done at application levels, in specific "ViewModel-like" components (container components orchestrating a whole part of the app).
