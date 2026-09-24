import { describe, expect, it } from 'vitest';
import { routeDefinitions } from './route-definitions';

describe('manifesto de rotas do FrotaK View', () => {
  it('mantém exatamente as 36 telas documentadas', () => {
    expect(routeDefinitions).toHaveLength(36);
  });

  it('não possui caminhos duplicados', () => {
    expect(new Set(routeDefinitions.map((route) => route.path)).size).toBe(36);
  });

  it('preserva a distribuição entre FT Vision e FT Manager', () => {
    expect(routeDefinitions.filter((route) => route.product === 'vision')).toHaveLength(27);
    expect(routeDefinitions.filter((route) => route.product === 'manager')).toHaveLength(9);
  });
});
