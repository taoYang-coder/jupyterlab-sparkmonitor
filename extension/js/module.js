import SparkMonitor from './SparkMonitor'
import currentcell from './currentcell'

//Entrypoint: Called when the extension is loaded by jupyter.
function load_ipython_extension() {
	console.log('SparkMonitor: Loading Spark Monitor Front-End Extension');
	var monitor = new SparkMonitor();
	window.sm = monitor;
	currentcell.register();
	console.log('SparkMonitor: Finished loading module.js');
}

export { load_ipython_extension }