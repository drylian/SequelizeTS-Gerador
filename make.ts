class MDMake {
    private message: string;
  
    constructor() {
      this.message = '';
    }
  
    title(title: string): this {
      this.message += `** ## ${title}**\n\n`;
      return this;
    }
  
    description(description: string): this {
      this.message += `### ${description}\n\n`;
      return this;
    }
  
    fields(fields: Record<string, string>): this {
      for (const [key, value] of Object.entries(fields)) {
        this.message += `**${key}:** ${value}\n`;
      }
      this.message += '\n';
      return this;
    }
  
    raw(rawText: string): this {
      this.message += rawText;
      return this;
    }
  
    make(): string {
      return this.message;
    }
  }
  
  // Exemplo de uso:
  const message = new MDMake()
    .title('Título da Mensagem')
    .description('Descrição da Mensagem')
    .fields({ Campo1: 'Valor1', Campo2: 'Valor2' })
    .raw('Texto sem formatação adicional')
    .make();
  
  console.log(message);
  