export const theme = {
  fg: 'palevioletred',
  bg: 'white',
}

export const invert = ({fg, bg}: typeof theme) => ({fg: bg, bg: fg})
