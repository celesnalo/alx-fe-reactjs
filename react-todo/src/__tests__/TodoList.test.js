import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TodoList } from '../TodoList';

describe('TodoList Component', () => {

  // Initial Render Test
  it('renders correctly with initial todos', () => {
    render(<TodoList />);
    // Check that the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
    expect(screen.getByText('Master React Hooks')).toBeInTheDocument();
  });

  // Test Adding Todos
  it('allows a new todo to be added', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    // Simulate user typing and adding a new todo
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    // Verify the new todo is added to the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test Toggling Todos
  it('allows a todo to be toggled between completed and not completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    const toggleButton = screen.getAllByText('Toggle')[0];

    // Toggle the first todo item
    fireEvent.click(toggleButton);

    // Verify the todo item is now marked as completed
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Toggle it back to not completed
    fireEvent.click(toggleButton);

    // Verify the todo item is now not completed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test Deleting Todos
  it('allows a todo to be deleted', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0];

    // Delete the first todo item
    fireEvent.click(deleteButton);

    // Verify the todo item is removed from the list
    expect(todoItem).not.toBeInTheDocument();
  });

});
