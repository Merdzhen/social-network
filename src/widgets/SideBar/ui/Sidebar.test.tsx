import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/SideBar/ui/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('Button', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
