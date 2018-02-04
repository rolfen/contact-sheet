import {Hello} from './Hello.jsx';

const message = "Hello world";

Inferno.render(
  <Hello message={ message } />,
  document.getElementById("app")
)