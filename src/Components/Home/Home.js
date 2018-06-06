import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import Signup from '../Signup/Signup';
import ContentBox from '../ContentBox/ContentBox';
import Filters from '../Filters/Filters';
import Product from '../Product/Product';
import MoreButton from '../Buttons/MoreButton';
import AddButton from '../Buttons/AddButton';
import './Home.css';

const PATH_BASE = 'https://studddent.com/api/';

const isSearched = searchTerm => item =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase());

const vote = (id, type) => {
  axios.post(`${PATH_BASE}votes/${type}`, {
    postid: id,
  }).catch((error) => console.log(error));
}

class Home extends Component {
  _isMounted = false; // Independent from state
  constructor() {
    super();
    this.state = {
      count: 7,
      searchTerm: '',
      buttons: [
        {
          id: 0,
          label: "ALL",
          active: true,
        },
        {
          id: 1,
          label: "DESIGN",
          active: false,
        },
        {
          id: 2,
          label: "DEVELOPMENT",
          active: false,
        },
        {
          id: 3,
          label: "UTILITY",
          active: false,
        },
      ],
      products: null,
      filteredProducts: null,
      votes: JSON.parse(localStorage.getItem('votes')) || { up: [], down: [] },
      error: null,
    }
    this.filterButtonClick = this.filterButtonClick.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);
    this.showMore = this.showMore.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  filterButtonClick(id) {
    let { products, filteredProducts } = this.state;
    const buttons = this.state.buttons
    for (let i = 0; i < buttons.length; i++) {
      if (i === id) {
        buttons[i].active = true;
        filteredProducts = products.filter((product) =>
          i === 0 || product.tags.indexOf(buttons[i].label.toLowerCase()) >= 0);
        this.setState({
          filteredProducts,
          count: 7,
        })
      } else {
        buttons[i].active = false;
      }
    }
    this.setState({
      buttons,
    })
  }

  upVote(id) {
    let { up, down } = this.state.votes;
    let products = this.state.products;
    let product = products.find(product => product._id === id)
    if (up.indexOf(id) < 0) {
      if (down.indexOf(id) >= 0) {
        down.splice(down.indexOf(id), 1);
        product.votes.down--;
        product.votes.up++;
        vote(id, 5);
      } else {
        product.votes.up++;
        vote(id, 3);
      }

      this.setState({
        products: [...products, product],
        votes: {
          up: [...up, id],
          down,
        }
      }, () => localStorage.setItem('votes', JSON.stringify(this.state.votes)))
    } else {
      up.splice(up.indexOf(id), 1);
      product.votes.up--;
      vote(id, 2);
      this.setState({
        products: [...products, product],
        votes: {
          up,
          down,
        }
      }, () => localStorage.setItem('votes', JSON.stringify(this.state.votes)))
    }
  }

  downVote(id) {
    let { up, down } = this.state.votes;
    let products = this.state.products;
    let product = products.find(product => product._id === id)
    if (down.indexOf(id) < 0) {
      if (up.indexOf(id) >= 0) {
        up.splice(up.indexOf(id), 1);
        product.votes.up--;
        product.votes.down++;
        vote(id, 0);
      } else {
        product.votes.down++;
        vote(id, 1);
      }
      this.setState({
        products: [...products, product],
        votes: {
          up,
          down: [...down, id]
        }
      }, () => localStorage.setItem('votes', JSON.stringify(this.state.votes)))
    } else {
      down.splice(down.indexOf(id), 1);
      product.votes.down--;
      vote(id, 4);
      this.setState({
        products: [...products, product],
        votes: {
          up,
          down,
        }
      }, () => localStorage.setItem('votes', JSON.stringify(this.state.votes)))
    }
  }

  showMore() {
    this.setState((prevState) => ({
      count: prevState.count + 7,
    })
    )
  }

  fetchTasks() {
    axios(`${PATH_BASE}links`)
      .then(result => this._isMounted && this.setState({ products: result.data, filteredProducts: result.data }))
      .catch(error => this._isMounted && this.setState({ error: error }));
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchTasks();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { buttons, products, votes, count, filteredProducts } = this.state;
    return (
      <div>
        <Header>
          <a href="/"><h1 className="title">Studddent.</h1></a>
          <p className="desc">Resources for learning design & development, discounted for students.</p>
          <AddButton path={'/submit'}>Submit a Discount</AddButton>
        </Header>
        <Filters buttons={buttons} buttonClick={this.filterButtonClick} searchUpdate={this.onSearchChange} />
        <ContentBox>
          {filteredProducts &&
            filteredProducts.filter((post) =>
              post.accepted === true)
              .filter(isSearched(this.state.searchTerm))
              .slice(0, count).map((product) =>
                <Product
                  upVote={this.upVote}
                  downVote={this.downVote}
                  key={product._id}
                  product={product}
                  votes={votes} />
              )}
          <div className="viewMore">
            {products &&
              filteredProducts.filter(isSearched(this.state.searchTerm)).length > count &&
              <div>
              <MoreButton showMore={this.showMore}>VIEW MORE</MoreButton>
              <div className="spacer"></div></div>}
          </div>
          
          {products && <Signup />}
        </ContentBox>
      </div>
    );
  }
}

export default Home;