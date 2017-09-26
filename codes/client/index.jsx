const React = require('react');
const ReactDOM = require('react-dom');

const Test = React.createClass({
    render: function(){
        console.log("welcome to name-tag day trader")
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
});

ReactDOM.render(
    <Test name="kashikasi"/>,
    document.querySelector("#wrapper")
)
