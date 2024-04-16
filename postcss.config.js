module.exports = {
  plugins: {
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    // cssnano: {}
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
