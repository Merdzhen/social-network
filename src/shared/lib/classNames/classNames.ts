type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
    ...additional.filter(Boolean),
  ].join(' ')
}

// пример - вызов classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])
// результат 'remove-btn hovered selectable pdg'
