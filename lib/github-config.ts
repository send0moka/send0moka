// GitHub configuration
export const GITHUB_CONFIG = {
  userId: "166832786",
  username: "send0moka", // Optional: untuk referensi
} as const

// Helper function to get avatar URL with different sizes
export const getGitHubAvatarUrl = (size?: number) => {
  const baseUrl = `https://avatars.githubusercontent.com/u/${GITHUB_CONFIG.userId}`
  return size ? `${baseUrl}?v=4&s=${size}` : `${baseUrl}?v=4`
}
