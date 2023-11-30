// Classe que implementa o padrão Singleton
class SistemaSeguranca {
    // Variável privada que armazena a única instância da classe
    private static instancia: SistemaSeguranca;
  
    // Construtor privado para evitar a criação de novas instâncias
    private constructor() {}
  
    // Método estático que retorna a única instância da classe
    public static getInstancia(): SistemaSeguranca {
      // Se a instância não existir, cria uma nova
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      // Retorna a instância
      return SistemaSeguranca.instancia;
    }
  
    // Método que verifica se a senha inserida pelo agente coincide com a da Base Secreta
    public acessarBaseSecreta(senha: string): boolean {
      // Senha da Base Secreta
      const senhaBaseSecreta = "MI7-007";
      // Compara as senhas
      if (senha === senhaBaseSecreta) {
        // Senha correta, acesso concedido
        console.log(`Senha digitada: ${senhadigitada} - Acesso concedido à Base Secreta`);
        return true;
      } else {
        // Senha incorreta, acesso negado
        console.log(`Senha digitada: ${senhadigitada} - Acesso negado à Base Secreta`);
        return false;
      }
    }
  }
  
  // Programa principal que demonstra o uso do Singleton SistemaSeguranca
  // Cria uma variável que recebe a instância do sistema de segurança
  let sistema = SistemaSeguranca.getInstancia();
  // Tenta acessar a Base Secreta com uma senha incorreta
  let senhadigitada = "MI6-006";
  let acesso = sistema.acessarBaseSecreta(senhadigitada);
  // Verifica se o acesso foi concedido ou negado
  if (acesso) {
    console.log(`Porta Destravada`);
  } else {
    console.log(`Tente novamente!`);
  }
  // Tenta acessar a Base Secreta com a senha correta
  senhadigitada = "MI7-007"
  acesso = sistema.acessarBaseSecreta(senhadigitada);
  // Verifica se o acesso foi concedido ou negado
  if (acesso) {
    console.log(`Porta Destravada`);
  } else {
    console.log(`Tente novamente!`);
  }
  