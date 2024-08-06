import { render, fireEvent, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  const mockOnDialogOpen = jest.fn();

  const defaultProps1 = {
    id: 'project-id',
    imgPath: 'path/to/image',
    languages: ['JavaScript', 'TypeScript'],
    name: 'Test Project',
    githubLink: 'https://github.com/test',
    demoLink: '/',
    content: [
        {
            order: 1,
            type: 'p',
            text: 'Test content',
        }
    ],
    onDialogOpen: mockOnDialogOpen,
  };

  const defaultProps2 = {
    id: 'project-id-2',
    imgPath: 'path/to/image2',
    languages: ['JavaScript', 'TypeScript'],
    name: 'Test Project 2',
    githubLink: 'https://github.com/test',
    demoLink: 'https://demo.com',
    onDialogOpen: mockOnDialogOpen,
  };

  it('renders project name', () => {
    render(<ProjectCard {...defaultProps1} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('opens dialog on docs button click', () => {
    render(<ProjectCard {...defaultProps1} />);
    fireEvent.click(screen.getByText('projects.docs'));
    expect(mockOnDialogOpen).toHaveBeenCalledWith('project-id');
  });

  it('opens github link on github button click', () => {
    render(<ProjectCard {...defaultProps1} />);
    global.open = jest.fn(); // mock window.open
    fireEvent.click(screen.getByText('projects.github'));
    expect(global.open).toHaveBeenCalledWith('https://github.com/test', '_blank');
  });

  it('opens demo link on demo button click', () => {
    render(<ProjectCard {...defaultProps2} />);
    global.open = jest.fn();
    fireEvent.click(screen.getByText('projects.demo'));
    expect(global.open).toHaveBeenCalledWith('https://demo.com', '_blank');
  })
});
