import React from 'react';

export default class FootballClub extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:3000/data/data.json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Errors: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul className="club">
            {items.map(item => (
              <li key={item.id}>
                &nbsp;
                <ul>
                   <li> <img src={item.img} alt="logo" /></li>
                   <li> Team Name: &nbsp; <strong>{item.name}</strong> &nbsp;</li>
                   <li> Country:  &nbsp; <strong>{item.country}</strong>  &nbsp;</li>
                   <li> Town: &nbsp; <strong>{item.town}</strong> &nbsp;</li>
                   <li> Founded: &nbsp; <strong>{item.founded}</strong> &nbsp;</li>
                   <li> Website: <a href={item.website} target="_blank">{item.website}</a></li>
                </ul>
              </li>
            ))}
          </ul>
        );
      }
    }
  }