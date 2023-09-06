import * as fs from 'fs';
import { json } from './utils/Json';
import { dirCR } from './utils/Folder';
import * as path from 'path';
import { ModelMaker } from './gerators/MakeModels';
import { MakeConnect } from './gerators/MakeConnect';
import { MakeParams } from './gerators/MakeParams'
import { MakeIndex } from './gerators/MakeIndex'
import { ModelConfig, ModelContent } from './interfaces'
/**
 * Le a model.config.json
 */
let ModelConfig: ModelConfig

if (fs.existsSync("models.config.json")) {
    ModelConfig = json("models.config.json")
} else {
    console.log("Crie uma model.config.json antes de iniciar o gerator ")
    process.exit(1)
}

/**
 * Carrega todos os models.json
 */
function ModelsJsonPath(directoryPath: string): string[] {
    const files = fs.readdirSync(directoryPath);
    return files.filter((file: string) => file.endsWith('.json'));
}

/**
 * Carrega os models que vão virar model.ts
 */
const ModelFiles = ModelsJsonPath(ModelConfig.ModelsJsonDir);

// Cria onde vai ficar o Sequelize e seus conteúdos
dirCR(ModelConfig.BaseDir + "/Sequelize")
// Cria onde vai ficar a pasta models
dirCR(ModelConfig.BaseDir + "/Sequelize/models")

/**
 * Cria os Models.ts
 */
for (const modelFile of ModelFiles) {
    const filePath = path.join(ModelConfig.ModelsJsonDir, modelFile);
    ModelMaker(filePath, ModelConfig.BaseDir + "/Sequelize/models");
}

/**
 * Cria um array de models do Conteúdo
 */
let ModelsContents: ModelContent[] = [];
for (const modelFile of ModelFiles) {
    const filePath = path.join(ModelConfig.ModelsJsonDir, modelFile);
    const model: ModelContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    ModelsContents.push(model);
}

/**
 * Cria o params.ts na pasta do Sequelize
 */
MakeParams(ModelConfig.BaseDir)

/**
 * Cria o Connnect.ts na pasta do Sequelize
 */
MakeConnect(ModelConfig.BaseDir)

/**
 * Cria o index.ts na pasta do Sequelize
 */
MakeIndex(ModelsContents, ModelConfig.BaseDir)