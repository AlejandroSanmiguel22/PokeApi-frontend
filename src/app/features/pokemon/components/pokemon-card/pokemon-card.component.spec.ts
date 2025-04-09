import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  const mockPokemon: Pokemon = {
    id: 25,
    name: 'pikachu',
    types: ['electric'],
    abilities: ['static', 'lightning-rod'],
    sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.pokemon = mockPokemon; 
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el nombre y ID del Pokémon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Pikachu');
    expect(compiled.textContent).toContain('#25');
  });

  it('debería mostrar los tipos y habilidades', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('electric');
    expect(compiled.textContent).toContain('static');
    expect(compiled.textContent).toContain('lightning-rod');
  });

  it('debería mostrar la imagen del sprite', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.src).toContain('25.png');
    expect(img.alt).toBe('pikachu');
  });
});
