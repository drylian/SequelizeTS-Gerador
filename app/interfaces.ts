/**
 * interface models.config.json
 */
export interface ModelConfig {
    ModelsJsonDir: string;
    BaseDir: string;
}

/**
 * interface fields for Model.json
 */
export interface Field {
    name: string;
    type: string;
    primaryKey?: boolean;
    autoIncrement?: boolean;
    allowNull?: boolean;
    defaultValue?: string;
}

/**
 * interface ModelContent for Model.json
 */
export interface ModelContent {
    model: string;
    fields: Array<Field>;
}