/**
 * @File:      LG脚手架logo
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-14 11:30:24
 */

var chalk = require('chalk');
function LGLogo(contex) {
    var version = '';
    try{
        version = contex ? 'v' + contex.pkg.version : '';
    }
    catch (e) {}
    var logo = '\n'
        +    chalk.red(' _            _______  \n')
        +    chalk.red('| |          / ______|  \n')
        +    chalk.red('| |         / /        \n')
        + chalk.yellow('| |        / /         \n')
        + chalk.yellow('| |        | |        __\n')
        +  chalk.green('| |        \\ \\        \\ \\\n')
        + chalk.magenta('| |_____     \\ \\______/ /\n')
        +   chalk.blue('|_______|      \\______/') + '    ' + version + '\n\n';

    logo += ('need help?') + chalk.magenta('  ===>  ') + chalk.green('yo lg:h') + '\n';

    if (contex) {
        logo += '\nCMD: '+ chalk.green(contex.rootGeneratorName()) + '\n';
    }

    return logo;
};

exports.LGLogo = LGLogo;