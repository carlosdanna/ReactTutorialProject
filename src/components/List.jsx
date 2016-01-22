var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require("../reflux/actions.jsx");
var IngredientStore = require("../reflux/ingredient-store.jsx");

var List = React.createClass({
  mixins: [Reflux.listenTo(IngredientStore, 'onChange')],
  getInitialState: function(){
    return {ingredients: [], newText:""};
  },
  componentWillMount: function(){
    Actions.getIngredients();
  },

  onChange: function(event, ingredients){
    this.setState({ingredients: ingredients});
  },

  onClick: function(){
    if(this.state.newText){
      Actions.postIngredient(this.state.newText);
    }
    this.setState({newText: ""});
  },

  onInputChange: function(e){
    this.setState({newText: e.target.value});
  },

  render: function(){
    var listItem = this.state.ingredients.map(function(item){
      return (<ListItem key={item.id} ingredient={item.text} />);
    });
    return (
      <div>
        <input placeholder="Add Item" value={this.state.newText} onChange={this.onInputChange} />
        <button onClick = {this.onClick}>Add Item</button>
        <ul>{listItem}</ul>
        </div>
      );
}
});

module.exports = List;
