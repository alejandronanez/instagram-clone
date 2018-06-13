import { Component } from 'react';
import { getFromApi } from 'api/api';

export class ApiConsumer extends Component {
  state = {
    loading: false,
    error: '',
    data: [],
  };

  async componentDidMount() {
    this.setState(() => ({ loading: true }));

    try {
      const { data } = await getFromApi(this.props.endpoint);

      this.setState(() => ({
        data,
      }));
    } catch (e) {
      this.setState(() => ({
        error: e.message,
      }));
    } finally {
      this.setState(() => ({ loading: false }));
    }
  }

  render() {
    const { loading, error, data } = this.state;

    return this.props.children({
      loading,
      error,
      data,
    });
  }
}
