# mesg-http

Display HTML webpages through a simple, native HTTP server.

```bash
mesg-core service deploy https://github.com/eisenbergrobin/mesg-http
```

Dead simple:

Add a route using the `addRoute` task, giving raw HTML as input, and a `route to serve the html on.

This will serve your raw webpage on the requested `route`.

# Contributing

## TODO:

    - Handle subtrees
    - Handle adding complex routes (zips with assets)
    - Handle more HTTP features (Basic Auth, etc...)
    - ...

Some repo health might be needed as well (CI, CD, tests, etc...).

# API Description

## Events

### started

Event key: **request**

This event is emitted every time when the server starts.

| **key**     | **type**  | **description**                          |
| ----------- | --------- | ---------------------------------------- |
| **success** | `boolean` | Whether the service sucessfully started. |

### route-added

Event key: **route-added**

This event is emitted every time a route is added.

| **key**   | **type** | **description**    |
| --------- | -------- | ------------------ |
| **route** | `string` | The created route. |

## Tasks

### addRoute

Task key: **addRoute**

This task will add a route to the HTTP server.

#### Inputs

| **key**      | **type** | **description**                             |
| ------------ | -------- | ------------------------------------------- |
| **route**    | `String` | The route you want to serve                 |
| **htmlBody** | `String` | Raw HTML body of the page you want to serve |

#### Outputs

##### success

Output key: **success**
