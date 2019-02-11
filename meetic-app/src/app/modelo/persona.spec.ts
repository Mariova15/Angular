import { Persona } from './persona';

describe('Persona', () => {
  it('should create an instance', () => {
    expect(new Persona(0,"Eufrasio","url",0,"string","string","string")).toBeTruthy();
  });
});
