const obj = {
  name: "Victor",
  getName(){
    return this.name;
  }
};
// how to access this
const getName = obj.getName.bind(this);
console.log(getName());


// Example 2

class Options extends Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert(this.props.options);
  }
  render(){
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map((option) => {
          return <Option key={option} optionText={option} />
        })}
      </div>
    );
  }
}