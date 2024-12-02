import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../components/Header';

describe('Header Component', () => {
  test('renders logo and title', () => {
    const { getByAltText, getByText } = render(<Header />);
    expect(getByAltText('ONDM Logo')).toBeTruthy();
    expect(getByText('ONDM 2025')).toBeTruthy();
  });

  test('navigates to program section on button press', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<Header navigation={{ navigate: mockNavigate }} />);
    fireEvent.press(getByText('Program'));
    expect(mockNavigate).toHaveBeenCalledWith('Program');
  });

  test('renders submit button', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Submit a Paper')).toBeTruthy();
  });

  test('submit button has correct styling', () => {
    const { getByText } = render(<Header />);
    const button = getByText('Submit a Paper');
    expect(button.props.style.backgroundColor).toBe('#ff8500');
  });
});
