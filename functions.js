const fs = require('fs');
const path = require('path');

module.exports = {
  getData : function(filename){
    let rawdata = fs.readFileSync(path.resolve(__dirname, `commands/data/${filename}`));
    let objectData = JSON.parse(rawdata);
    return objectData;
  },

  writeData : function(filename, data){
    fs.writeFileSync(`commands/data/${filename}.json`, JSON.stringify(data));
  },

  checkFileExists: function(filename){
    // readdirSync returns file names
    let files = fs.readdirSync('./commands/data').filter(file => file.endsWith('json'));
    for (let file of files)
    {
        if (file == filename)
        {
          return true;
        }
    }
    return false;
  }
}
