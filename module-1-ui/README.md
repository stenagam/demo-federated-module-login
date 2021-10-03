# Module 1

This app contains a standalone web application and an importable React Component.

Both the standalone app and the "microfrontend" React component are served on localhost port `5001`
the module federation config of the component is set to have name `module1` and filename
`remoteEntry.js`.


## Standalone app

The standalone app have a login button that log users on Oauth2 OIDC compatible identity providers,
such as Google, Github and Facebook.

The configuration of the Identity provider is made with a `.env` file, copy `.env.example` and fill
in the blanks.


## Component1 (Exposed React component)

There is one component exposed for usage via module federation: `module1/Component1`,
to see an example of how to configure a host to use it check the `host-ui` folder.


## Installation and Usage

```
yarn
yarn start
```

Then, check http://localhost:5001 http://localhost:5001/remoteEntry.js

