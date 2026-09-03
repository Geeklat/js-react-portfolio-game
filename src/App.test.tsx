import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'

function renderAt(hash = '') {
  window.history.replaceState({}, '', `${window.location.pathname}${hash}`)
  return render(<App />)
}

beforeEach(() => window.history.replaceState({}, '', window.location.pathname))
afterEach(() => window.history.replaceState({}, '', window.location.pathname))

describe('portfolio shell', () => {
  it('starts on the party screen with exactly four professional commands', () => {
    renderAt()
    expect(screen.getByText('Justin Green')).toBeInTheDocument()
    expect(screen.getByTestId('portrait-artwork')).toHaveAccessibleName('Portrait of Justin Green')
    expect(screen.getByRole('link', { name: 'Profile' })).toHaveFocus()
    expect(screen.getByTestId('menu-pointer-artwork')).toBeInTheDocument()
    const navigation = screen.getByRole('navigation', { name: 'Portfolio sections' })
    expect(within(navigation).getAllByRole('link')).toHaveLength(4)
    expect(within(navigation).getByRole('link', { name: 'Profile' })).toHaveAttribute(
      'href',
      '#profile',
    )
    expect(within(navigation).queryByRole('link', { name: 'Projects' })).not.toBeInTheDocument()
    expect(
      within(navigation).queryByRole('link', { name: 'Repository Log' }),
    ).not.toBeInTheDocument()
    expect(document.title).toBe('Justin Green — Software Engineer')
  })

  it('enters detail mode and keeps focus on the activated command', async () => {
    const user = userEvent.setup()
    renderAt()
    const profile = screen.getByRole('link', { name: 'Profile' })
    await user.click(profile)
    expect(profile).toHaveFocus()
    expect(profile).toHaveAttribute('aria-current', 'page')
    expect(window.location.hash).toBe('#profile')
    expect(screen.getByRole('heading', { name: 'Professional profile' })).toBeInTheDocument()
    expect(screen.getByTestId('detail-artwork')).toHaveAccessibleName('Portrait of Justin Green')
    expect(document.title).toBe('Justin Green — Profile')
  })

  it.each([
    ['#profile', 'Profile', 'Professional profile'],
    ['#work', 'Work', 'Professional experience'],
    ['#skills', 'Skills', 'Skills'],
    ['#contact', 'Contact', 'Contact'],
  ])('supports direct access to %s', (hash, label, heading) => {
    renderAt(hash)
    expect(screen.getByRole('link', { name: label })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('heading', { name: heading, level: 2 })).toBeInTheDocument()
    expect(document.title).toBe(`Justin Green — ${label}`)
  })

  it('switches sections while preserving the detail interface', async () => {
    const user = userEvent.setup()
    renderAt('#profile')
    const profile = screen.getByRole('link', { name: 'Profile' })
    const work = screen.getByRole('link', { name: 'Work' })
    await user.click(work)
    expect(screen.getByRole('heading', { name: 'Professional experience' })).toBeInTheDocument()
    expect(work).toHaveFocus()
    expect(work).toHaveAttribute('aria-current', 'page')
    expect(profile).not.toHaveAttribute('aria-current')
    expect(
      within(screen.getByRole('navigation', { name: 'Portfolio sections' })).getAllByRole('link', {
        current: 'page',
      }),
    ).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Portfolio sections' })).toBeInTheDocument()
    expect(screen.queryByText('Location', { selector: 'dt' })).not.toBeInTheDocument()
  })

  it('enhances arrow navigation without changing normal tab stops', async () => {
    const user = userEvent.setup()
    renderAt()
    const profile = screen.getByRole('link', { name: 'Profile' })
    profile.focus()
    await user.keyboard('{ArrowDown}')
    const work = screen.getByRole('link', { name: 'Work' })
    expect(work).toHaveFocus()
    expect(within(work).getByTestId('menu-pointer-artwork')).toBeInTheDocument()
    expect(within(profile).queryByTestId('menu-pointer-artwork')).not.toBeInTheDocument()
    await user.tab()
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveFocus()
  })

  it('keeps active section and focused command states separate', async () => {
    const user = userEvent.setup()
    renderAt('#work')
    const work = screen.getByRole('link', { name: 'Work' })
    const skills = screen.getByRole('link', { name: 'Skills' })
    expect(work).toHaveFocus()
    await user.keyboard('{ArrowDown}')
    expect(skills).toHaveFocus()
    expect(work).toHaveAttribute('aria-current', 'page')
    expect(skills).not.toHaveAttribute('aria-current')
    expect(within(skills).getByTestId('menu-pointer-artwork')).toBeInTheDocument()
    expect(screen.getAllByTestId('menu-pointer-artwork')).toHaveLength(1)
  })

  it('updates the active section when fragment history changes', async () => {
    const user = userEvent.setup()
    renderAt()
    await user.click(screen.getByRole('link', { name: 'Profile' }))
    await user.click(screen.getByRole('link', { name: 'Work' }))
    window.history.back()
    await waitFor(() =>
      expect(screen.getByRole('link', { name: 'Profile' })).toHaveAttribute('aria-current', 'page'),
    )
  })

  it('falls back to the party screen for an invalid fragment', () => {
    renderAt('#unknown')
    expect(screen.getByText('Justin Green')).toBeInTheDocument()
    expect(screen.queryByTestId('detail-artwork')).not.toBeInTheDocument()
    expect(document.title).toBe('Justin Green — Software Engineer')
  })
})
