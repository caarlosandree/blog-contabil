import type { SimulatorInputs } from '@/types';

const DEFAULT_INPUTS: SimulatorInputs = {
  valorAquisicao: 500000,
  custoObra: 300000,
  valorVenda: 1200000,
  qtdImoveisAno: 2,
  lucroPfReinvestido: 200000,
  pfContribuinteIbs: false,
};

/**
 * Serializa os inputs do simulador para query params da URL
 * Sempre inclui todos os parâmetros para permitir compartilhamento
 */
export function serializeInputsToUrl(inputs: SimulatorInputs): string {
  const params = new URLSearchParams();
  
  // Sempre adiciona todos os parâmetros para permitir compartilhamento
  params.set('va', inputs.valorAquisicao.toString());
  params.set('co', inputs.custoObra.toString());
  params.set('vv', inputs.valorVenda.toString());
  params.set('qty', inputs.qtdImoveisAno.toString());
  params.set('lpr', inputs.lucroPfReinvestido.toString());
  params.set('ibs', inputs.pfContribuinteIbs ? '1' : '0');
  
  return params.toString();
}

/**
 * Deserializa os inputs do simulador a partir de query params da URL
 */
export function deserializeInputsFromUrl(
  searchParams: URLSearchParams
): Partial<SimulatorInputs> {
  const inputs: Partial<SimulatorInputs> = {};
  
  const valorAquisicao = searchParams.get('va');
  if (valorAquisicao) {
    const parsed = parseFloat(valorAquisicao);
    if (!isNaN(parsed) && parsed >= 0) {
      inputs.valorAquisicao = parsed;
    }
  }
  
  const custoObra = searchParams.get('co');
  if (custoObra) {
    const parsed = parseFloat(custoObra);
    if (!isNaN(parsed) && parsed >= 0) {
      inputs.custoObra = parsed;
    }
  }
  
  const valorVenda = searchParams.get('vv');
  if (valorVenda) {
    const parsed = parseFloat(valorVenda);
    if (!isNaN(parsed) && parsed >= 0) {
      inputs.valorVenda = parsed;
    }
  }
  
  const qtdImoveisAno = searchParams.get('qty');
  if (qtdImoveisAno) {
    const parsed = parseInt(qtdImoveisAno, 10);
    if (!isNaN(parsed) && parsed >= 0) {
      inputs.qtdImoveisAno = parsed;
    }
  }
  
  const lucroPfReinvestido = searchParams.get('lpr');
  if (lucroPfReinvestido) {
    const parsed = parseFloat(lucroPfReinvestido);
    if (!isNaN(parsed) && parsed >= 0) {
      inputs.lucroPfReinvestido = parsed;
    }
  }
  
  const pfContribuinteIbs = searchParams.get('ibs');
  if (pfContribuinteIbs !== null) {
    inputs.pfContribuinteIbs = pfContribuinteIbs === '1';
  }
  
  return inputs;
}

/**
 * Atualiza a URL com os inputs do simulador sem recarregar a página
 */
export function updateUrlWithInputs(inputs: SimulatorInputs): void {
  if (typeof window === 'undefined') return;
  
  const params = serializeInputsToUrl(inputs);
  const newUrl = params
    ? `${window.location.pathname}?${params}`
    : window.location.pathname;
  
  window.history.replaceState({}, '', newUrl);
}

/**
 * Obtém os inputs iniciais a partir da URL ou retorna os padrões
 */
export function getInitialInputsFromUrl(): SimulatorInputs {
  if (typeof window === 'undefined') {
    return DEFAULT_INPUTS;
  }
  
  const searchParams = new URLSearchParams(window.location.search);
  const urlInputs = deserializeInputsFromUrl(searchParams);
  
  return {
    ...DEFAULT_INPUTS,
    ...urlInputs,
  };
}
