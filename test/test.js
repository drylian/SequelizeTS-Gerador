const fs = require('fs');
const path = require('path');

const generatedDir = path.join(__dirname, 'tested');
const distDir = path.join(__dirname, 'checker');
const errors = [];

const compareFiles = (file1, file2) => {
  const file1Content = fs.readFileSync(file1, 'utf-8').split('\n');
  const file2Content = fs.readFileSync(file2, 'utf-8').split('\n');
  let differencesFound = false;

  for (let i = 0; i < file1Content.length; i++) {
    if (file1Content[i] !== file2Content[i]) {
      errors.push({
        file: path.relative(generatedDir, file1),
        line: i + 1,
        expected: file1Content[i],
        received: file2Content[i],
      });
      differencesFound = true;
    }
  }

  if (differencesFound) {
    console.log(`Erro encontrado no arquivo: ${path.relative(generatedDir, file1)}`);
  } else {
    console.log(`Verificação completa: ${path.relative(generatedDir, file1)}`);
  }
};

const logStatus = (name, type, status) => {
  console.log(`${name} | type: ${type} | status: ${status}`);
};

const compareFoldersRecursive = (folder1, folder2) => {
  const files1 = fs.readdirSync(folder1);
  const files2 = fs.readdirSync(folder2);

  for (const filename of files1) {
    const file1Path = path.join(folder1, filename);
    const file2Path = path.join(folder2, filename);

    const file1Stats = fs.statSync(file1Path);
    const file2Stats = fs.statSync(file2Path);

    if (file1Stats.isDirectory() && file2Stats.isDirectory()) {
      logStatus(filename, 'diretório', 'Ok');
      compareFoldersRecursive(file1Path, file2Path); // Verifica os arquivos dentro do diretório
    } else if (file1Stats.isFile() && file2Stats.isFile()) {
      compareFiles(file1Path, file2Path);
    } else {
      logStatus(filename, 'arquivo/diretório', 'Tipo diferente em generated e dist');
    }
  }
};

const compareFolders = () => {
  console.log(`Verificando ${generatedDir} e ${distDir}`);
  compareFoldersRecursive(generatedDir, distDir);

  if (errors.length > 0) {
    console.log('Erros encontrados:');
    for (const error of errors) {
      console.log(`- Arquivo: ${error.file} | Linha: ${error.line}`);
      console.log(`  +++ Esperado: ${error.expected}`);
      console.log(`  --- Recebido: ${error.received}`);
    }
  } else {
    console.log('Verificação concluída com sucesso. Todos os arquivos e diretórios estão corretos.');
  }
};

compareFolders();
