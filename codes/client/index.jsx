import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {indexStore} from './stores/indexStore'
import {mapDispatchToProps, mapStateToProps} from './actions/indexActions';

const Test = React.createClass({
    componentDidMount: function(){
        this.props.changeNametagLoadingTask(true);
        fetch('/api/NameTag/').then(function(response) {
            return response.json();
        }).then((json) => {
            this.props.changeItemInfoTask(json);
            this.props.changeNametagLoadingTask(false);
        });
    },
    render: function(){
        return (
            <div className="nametag-wrapper">
                {this.props.nametag_loading ? 
                    <div className="nametag-loading">
                        <img src="/img/loader.gif" className="nametag-loading-img"/>
                    </div>
                    : 
                    <NameTagInfo info={this.props.info}/>
                }
            </div>
        )
    }
});

const NameTagInfo =React.createClass({
    render: function(){
        return(
            <div className="nametag-info">
                <a className="item-img" href={this.props.info.page_link}>
                    <img src={this.props.info.img}/>
                </a>
                <div className="item-info">
                    <div className="item-name">{this.props.info.item_name}</div>
                    <div className="item-price">{this.props.info.sale_price}</div>
                </div>
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
