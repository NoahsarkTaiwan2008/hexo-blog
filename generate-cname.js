const fs = require('fs');
const path = require('path');

hexo.extend.generator.register('generate-cname', function (locals) {
    const cnamePath = path.join(hexo.public_dir, 'CNAME');
    const cnameContent = 'noahsarktw.com';

    fs.writeFileSync(cnamePath, cnameContent);
});