import { Configuration } from "webpack";

export default ({ config }: { config: Configuration }) => {
  if(config.module && config.resolve && config.resolve.extensions) {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    })
    config.resolve.extensions.push(".ts", ".tsx")
  }
  return config
}
