const {fork} = require('child_process');

const randomsGenerar = async (req, res) => {
    const cant = req.query.cant || 100000000;
    const child = fork("./utils/randomsGenerar.js", [cant]);
    child.on('message', numeros=>res.end(`Numeros generados: ${numeros}`));
}

module.exports = {
    randomsGenerar
}