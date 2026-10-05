// Theme hook — currently light-only, extend for dark mode later
export function useTheme() {
  return {
    theme: 'light' as const,
    colors: {
      navy:   '#1e2a3a',
      orange: '#F97316',
      white:  '#ffffff',
    },
  }
}