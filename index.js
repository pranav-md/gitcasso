const simpleGit = require('simple-git');

async function checkChanges() {
    console.log('Entering check changes');
    const git = simpleGit('/home/pranav/sandbox/PP/pp-migration');
    const status = await git.status();
    const checked = status.files.length > 0;
    console.log(`Checked: ${checked}`);
    if (checked) {
     console.info(`status file length: ${status.files.map(file=>file.path)} that much`);
     console.table(status.files.map(file => ({
      type: file.working_dir,
      file: file.path
     })));
    }
    return checked;
   }

checkChanges()
