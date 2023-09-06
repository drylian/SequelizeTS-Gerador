/**
 * interface models.config.json
 */
export interface ModelConfig {
    ModelsJsonDir: string;
    BaseDir: string;
}

/**
 * interface fields dos models, ainda vou melhorar
 */
export interface Field {
    name: string;
    type: string;
    primaryKey?: boolean;
    autoIncrement?: boolean;
    allowNull?: boolean;
    defaultValue?: any;
    unique?: boolean;
    comment?: string;
    references?: {
        model: string;
        key: string;
        deferrable?: any;
    };
    onUpdate?: string | "CASCADE" | "SET NULL" | "SET DEFAULT" | "NO ACTION";
    onDelete?: string | "CASCADE" | "SET NULL" | "SET DEFAULT" | "NO ACTION";
    validate?: {
        is?: string | RegExp;
        notNull?: boolean;
        notEmpty?: boolean;
        len?: {
            args: [number, number];
            msg: string;
        };
        isEmail?: boolean;
        isUrl?: boolean;
        isIP?: boolean | number;
        isIPv4?: boolean;
        isIPv6?: boolean;
        isAlpha?: boolean;
        isAlphanumeric?: boolean;
        isNumeric?: boolean;
        isInt?: boolean;
        isFloat?: boolean;
        isDecimal?: boolean;
        isDate?: boolean;
        isAfter?: string;
        isBefore?: string;
    };
    get?: () => any;
    set?: (value: any) => void;
};

/**
 * interface ModelContent for Model.json
 */
export interface ModelContent {
    model: string;
    fields: Array<Field>;
}