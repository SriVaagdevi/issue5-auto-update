import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProgramTable from '../components/ProgramTable';

describe('ProgramTable Component', () => {
  test('renders all sessions', () => {
    const { getByText } = render(<ProgramTable />);
    expect(getByText('Session 1: Optical Networks')).toBeTruthy();
    expect(getByText('Session 2: Quantum Networking')).toBeTruthy();
    expect(getByText('Session 3: AI in Networking')).toBeTruthy();
  });

  test('displays abstract on hover', () => {
    const { getByText, queryByText } = render(<ProgramTable />);
    fireEvent.mouseEnter(getByText('Session 1: Optical Networks'));
    expect(queryByText('Discussion on optical networks')).toBeTruthy();
    fireEvent.mouseLeave(getByText('Session 1: Optical Networks'));
    expect(queryByText('Discussion on optical networks')).toBeNull();
  });

  test('shows alert on session click', () => {
    global.alert = jest.fn();
    const { getByText } = render(<ProgramTable />);
    fireEvent.press(getByText('Session 1: Optical Networks'));
    expect(global.alert).toHaveBeenCalledWith('Selected: Session 1: Optical Networks');
  });

  test('displays message when no sessions are available', () => {
    const { getByText } = render(<ProgramTable sessions={[]} />);
    expect(getByText('No sessions available')).toBeTruthy();
  });
});
