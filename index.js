import {Menu} from './servicos/menu.js';
import LeitorDeBancoDeDados from './database/leitorDeBancoDeDados.js';
import GravadorDeBancoDeDados from './database/gravadorDeBancoDeDados.js'
import ServicoAerovia from './servicos/servicoAerovia.js';
import ServicoAeronave from './servicos/servicoAeronave.js';
import ServicoPiloto from './servicos/servicoPiloto.js';
import ServicoPlano from './servicos/servicoPlano.js';
import ServicoOcupacaoAerovia from './servicos/servicoOcupacaoAerovia.js';

const leitorDeBancoDeDados = new LeitorDeBancoDeDados();
const gravadorDeBancoDeDados = new GravadorDeBancoDeDados();

const servicoAerovia = new ServicoAerovia(leitorDeBancoDeDados.aeroviasPersistidas);
const servicoAeronave = new ServicoAeronave(leitorDeBancoDeDados.aeronavesPersistidas);
const servicoPiloto = new ServicoPiloto(leitorDeBancoDeDados.pilotosPersistidos);
const servicoPlano = new ServicoPlano(leitorDeBancoDeDados.planosPersistidos, servicoPiloto, servicoAeronave, servicoAerovia);
const servicoOcupacaoAerovia = new ServicoOcupacaoAerovia(servicoAerovia, servicoPlano);

const menu = new Menu(servicoAerovia, servicoAeronave, servicoPiloto, servicoPlano, servicoOcupacaoAerovia, gravadorDeBancoDeDados);