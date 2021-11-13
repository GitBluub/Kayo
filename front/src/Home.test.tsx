import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import Home from './Home';

describe('<Home>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<Home />);
    const linkElement = getByText(/learn react/i);
    expect(document.body.contains(linkElement));
  });
});
