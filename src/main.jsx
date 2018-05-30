import {Hello} from './Hello.jsx';
import {HelloComponent} from './HelloComponent.jsx';


const message = "Hello world";

Inferno.render(
	<div>
		<Hello message={ message } />
		<HelloComponent message={ message } />
	</div>,
	document.getElementById("app")
)