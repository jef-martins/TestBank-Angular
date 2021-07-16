
export interface Usuario{
    idUsuario?: number,
    foto?: string | any,
    nome: string,
    cpf: string,
    senha?: string,
    tipoConta?: string,
    token?: string,
    createdAt?: Date,
    updatedAt?: Date
}

export interface Conta{
    idConta?: number,
    saldo: number,
    tipoConta: string,
    nConta: string,
    agencia: string,
    fkUsuario?: number,
    createdAt?: Date,
    updatedAt?: Date,
    descricao?: string
}

export interface Extrato{
    idExtrato?: number,
    descricao: string,
    fkConta?: number,
    createdAt?: Date,
    updatedAt?: Date
}
