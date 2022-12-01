export class userRepository {
  private users = [];

  async salvar (usuario ) {
    this.users.push(usuario)
    return { status : "Usuario Salvo"}
   }

  async show() {
    return this.users
  }
}
