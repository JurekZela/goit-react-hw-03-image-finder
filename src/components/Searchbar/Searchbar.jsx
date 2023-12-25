import { Component } from 'react';
import { Formik } from 'formik';
import { ReactComponent as SearchIcon} from '../images/search.svg';
import { Header, FormStyles as Form, Button, Input } from './Searchbar-styled';

export class Searchbar extends Component {
    render() {
        const { onSubmit } = this.props;
        return (
      <Formik  >
          <Header>
            <Form  onSubmit={onSubmit}>
                <Button type="submit"  >
                    <SearchIcon width="25" height="25" />
                </Button>
                <Input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                  />
            </Form>
        </Header>
      </Formik>
        )
    };
};