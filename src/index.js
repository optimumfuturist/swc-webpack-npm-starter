/**
 * Main Module, this one is a sample main module to get you started
 *
 * @category MODULES
 * @module MainModule
 *
 * @example <caption>In browser, use libs/js file to load using "script" tag</caption>
 *
 * <script src="./package.bundled.js"></script>
 * <script>
 * 		console.log(BabelWebpack.MainModule())
 * </script>
 *
 */

const MainModule = () => {
  return {
    name: 'MyModule',
    purpose:
      'Get you started developing npm modules that work in node server as well as in a regular browser',
  };
};

export { MainModule };
