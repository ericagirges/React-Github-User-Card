import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: props.user,
        };
    }

    // componentDidUpdate(prevProps, prevState) {
    //     /// ALWAYS use an if statement
    //     if (prevState.doggos !== this.state.doggos) {
    //       if (this.state.doggoText === 'chihuahua') {
    //         axios
    //           .get('https://dog.ceo/api/breed/husky/images')
    //           .then(res => {
    //             // res.data.message
    //             this.setState({
    //               doggos: res.data.message,
    //               doggoText: 'husky'
    //             });
    //           })
    //           .catch(err => console.log(err));
    //       }
    //     }
    //   }
    

    handleChanges = event => {
        this.setState({
            username: event.target.value
        })
    }


render() {
    return (
        <div>
          <input
            type="text"
            name="search"
            // value={this.state.inputValue}
            // onChange={this.handleChanges}
            placeholder="Search by username"
          />
          <button>Search</button>
        </div>
      );
    };
}

export default SearchBar;
