const simpleGit = require('simple-git');
const shell = require('shelljs');

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



   async function branchCheckout(branchName) {

    console.log(`changing branch to ${branchName}`);
    const git = simpleGit('/home/pranav/sandbox/PP/pp-migration');
    await git.checkout(branchName);
   }



   async function pullLatest(branchName) {


//     console.log(`pulling latest of ${branchName}`);
//     const git = simpleGit('/home/pranav/sandbox/PP/pp-migration');

//  //   await git.addRemote('origin', 'git@github.com:PrivacyAgentHolding/pp-migration.git', )
//     await git.pull('origin',branchName);


    shell.cd('/home/pranav/sandbox/PP/pp-migration')

    shell.exec("git remote set-url origin git@github.com:PrivacyAgentHolding/pp-migration.git", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    
        console.log(`stdout: ${stdout}`);
});


    shell.exec("git pull origin", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    
        console.log(`stdout: ${stdout}`);
});

   }

//checkChanges()

//branchCheckout('develop')

pullLatest('develop')