var path = require("path");
const spawn = require('child_process').spawn;
const exec = require('child_process').exec;
const os = require('os');

function TouchFilesPlugin(options) {
    this.startTime = Date.now();
    this.prevTimestamps = {};
    this.options = options;

    this.puts = function(error, stdout, stderr) {
        if (error) {
            console.warn("You should use: http://unxutils.sourceforge.net/ to emulate the 'touch' command");
            throw error;
        }
    };

    this.spreadStdoutAndStdErr = function(proc) {
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stdout);
    };

    this.serializeScript = function(script) {
        if (typeof script === 'string') {
            const [command, ...args] = script.split(' ');
            return {command, args};
        }
        const {command, args} = script;
        return {command, args};
    };

    this.touchFiles = function() {
        var files = [];
        this.walkSync(this.options.root, files);
        var script = "touch " + files.join(" ");

        if (os.platform() === 'win32') {
            this.spreadStdoutAndStdErr(exec(script, this.puts));
        } else {
            const {command, args} = this.serializeScript(script);
            const proc = spawn(command, args, {stdio: 'inherit'});
            proc.on('close', this.puts);
        }
    };

    this.walkSync = function(dir, filelist) {
        var fs = fs || require('fs'),
            files = fs.readdirSync(dir);
        filelist = filelist || [];
        files.forEach(function(file) {
            if (fs.statSync(dir + '/' + file).isDirectory()) {
                this.walkSync(dir + '/' + file, filelist);
            }
            else {
                filelist.push(path.resolve(path.join(dir, file)));
            }
        }.bind(this));
    };
}



TouchFilesPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {

        var changedFiles = Object.keys(compilation.fileTimestamps).filter(function(watchfile) {
            return (this.prevTimestamps[watchfile] || this.startTime) < (compilation.fileTimestamps[watchfile] || Infinity);
        }.bind(this));

        this.prevTimestamps = compilation.fileTimestamps;

        if (changedFiles.length === 0) {
            callback();
            return;
        }

        if (changedFiles.filter(function(file) {
            return file.indexOf(this.options.trigger) !== -1;
        }.bind(this)).length > 0) {
            this.touchFiles();
        }

        callback();
    }.bind(this));
};

module.exports = TouchFilesPlugin;
