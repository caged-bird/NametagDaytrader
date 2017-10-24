import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {indexStore} from './stores/indexStore'
import {mapDispatchToProps, mapStateToProps} from './actions/indexActions';

const Test = React.createClass({
    componentDidMount: function(){
        fetch('/api/NameTag/').then(function(response) {
            return response.json();
        }).then((json) => {
            console.log(json);
            this.props.changeItemInfoTask(json);
        });
    },

    changeName: function(name){
        this.props.changeNameTask(name);
    },
    render: function(){
        return (
            <div>
                <InputText name={this.props.name} changeName={this.changeName}/>
                <h1>Hello {this.props.name}</h1>
                <h1>Hello {this.props.info.game_name}</h1>
                <NameTagInfo info={this.props.info}/>
            </div>
        )
    }
});

const InputText = React.createClass({
    handleInputChange: function(e){
        console.log(e.target.value);
        this.props.changeName(e.target.value);
    },
    render: function(){
        return (
            <div>
                <input value={this.props.name} onChange={this.handleInputChange}/>
            </div>
        )
    }
});

const NameTagInfo =React.createClass({
    render: function(){
        return(
            <div>
                <div>{this.props.info.item_name}</div>
                <div>{this.props.info.game_name}</div>
                <div>{this.props.info.sale_price}</div>
                <div>{this.props.info.normal_price}</div>
                <a href={this.props.info.page_link}>
                    <img src={this.props.info.img}/>
                </a>
            </div>
        )
    }
});


const TestContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);

ReactDOM.render(
    <Provider store={indexStore}>
        <TestContainer />
    </Provider>,
    document.querySelector("#wrapper")
);
