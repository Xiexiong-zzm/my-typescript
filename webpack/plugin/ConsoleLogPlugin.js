const pluginName = "ConsoleLogPlugin";

class ConsoleLogPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, (compilation) => {
            console.log("Compiling...");
        })
    }
}

module.exports = ConsoleLogPlugin;