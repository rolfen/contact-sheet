export {HelloComponent};

class HelloComponent extends Inferno.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (<div>
			{this.props.message}
		</div>);
	}
}