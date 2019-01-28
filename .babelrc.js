module.exports = {
  presets: [
    "@babel/preset-env",    // transforms new JS to old JS
    "@babel/preset-react"   // transforms react jsx to native JS function calls
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
}