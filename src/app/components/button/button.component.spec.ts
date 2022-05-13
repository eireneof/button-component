import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { ButtonComponent } from './button.component';

fdescribe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ],
      imports: [MatIconModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('(@Input btnLabel) should be "Default" when (@Input btnLabel) is not assigned', () => {
    fixture.detectChanges();
    expect(component.btnLabel).toBe('Default');
  })

  it('(@Input btnLabel) should NOT be "Default" when (@Input btnLabel) is assigned', () => {
    const someLabel = 'someLabel';
    component.btnLabel = someLabel;
    fixture.detectChanges();
    expect(component.btnLabel).toBe(someLabel);
  })

  it('(@Input btnClass) should be "button" when (@Input btnClass) is not assigned', () => {
    fixture.detectChanges();
    expect(component.btnClass).toBe('button');
  })

  // nesses casos que as propriedades já estão tipadas, eu preciso fazer um caso de teste para erro?
  // it("(@Input btnClass) should only recive 'button' | 'outline' | 'text' when (@Input btnClass) assigned", () => {
  //   const someClass = 'someClass';
  //   component.btnClass = someClass;
  //   fixture.detectChanges();
  //   expect(() => component.btnClass).toThrow();
  // })

  it('(@Input btnClass) should be the specified type when (@Input btnClass) is assigned', () => {
    let btnClassTypes: Array<'button' | 'outline' | 'text'> = ['outline', 'text', 'button'];
    btnClassTypes.forEach(type => {
      component.btnClass = type;
      fixture.detectChanges();
      expect(component.btnClass).toBe(type);
    }) 
  })

  //box shadows
  //true por default
  it('(@Input boxShadow) should be TRUE when (@Input boxShadow) is not assigned', () => {
    fixture.detectChanges();
    expect(component.boxShadow).toBeTrue();
  })
  //só aceita booleano

  //vira falso quando eu mando ser falso e vice eversa
  it('(@Input boxShadow) should be the specified value when (@Input boxShadow) is assigned', () => {
    let boxShadowValuesTypes: Array<boolean> = [true, false];
    boxShadowValuesTypes.forEach(value => {
      component.boxShadow = value;
      fixture.detectChanges();
      expect(component.boxShadow).toBe(value);
    }) 
  }) 

  //btnDisabled
  //false por default
  it('(@Input btnDisabled) should be FALSE when (@Input btnDisabled) is not assigned', () => {
    fixture.detectChanges();
    expect(component.btnDisabled).toBeFalse();
  })

  //só aceita booleano

  //vira falso quando eu mando ser falso e vice e versa
  it('(@Input btnDisabled) should be the specified value when (@Input btnDisabled) is assigned', () => {
    let btnDisabledValuesValues: Array<boolean> = [true, false];
    btnDisabledValuesValues.forEach(value => {
      component.btnDisabled = value;
      fixture.detectChanges();
      expect(component.btnDisabled).toBe(value);
    }) 
  }) 

  //btnIcon
  //false por default
  it('(@Input btnIcon) should be FALSE when (@Input btnIcon) is not assigned', () => {
    fixture.detectChanges();
    expect(component.btnIcon).toBeFalse();
  })

  //só aceita booleano

  //vira falso quando eu mando ser falso e vice e versa
  it('(@Input btnIcon) should be the specified value when (@Input btnIcon) is assigned', () => {
    let btnIconValuesValues: Array<boolean> = [true, false];
    btnIconValuesValues.forEach(value => {
      component.btnIcon = value;
      fixture.detectChanges();
      expect(component.btnIcon).toBe(value);
    }) 
  }) 

  //btnIconName
  //tem 'favorite' por default
  it('(@Input btnIconName) should be "favorite" when (@Input btnIconName) is not assigned', () => {
    fixture.detectChanges();
    expect(component.btnIconName).toBe('favorite');
  })

  //aceita qualquer tipo de string
  it('(@Input btnIconName) should be the specified string when (@Input btnIconName) is assigned', () => {
    let someString: string;
    for(let i = 0; i < 3; i++) {
      someString = Math.random().toString(36);
      component.btnIconName = someString;
      fixture.detectChanges();
      expect(component.btnIconName).toBe(someString);
    }
  })

  //btnIconPosition 

  //btnIconPosition 'right' por default
  it('(@Input btnIconPosition) should be "right" when (@Input btnIconPosition) is not assigned', () => {
    fixture.detectChanges();
    expect(component.btnIconPosition).toBe('right');
  })

  // só aceita 'left' | 'right' 

  //muda quando eu mudo
  it('(@Input btnIconPosition) should be the specified value when (@Input btnIconPosition) is assigned', () => {
    let btnIconPositionValue: Array<'left' | 'right'> = ['left', 'right'];
    btnIconPositionValue.forEach(value => {
      component.btnIconPosition = value;
      fixture.detectChanges();
      expect(component.btnIconPosition).toBe(value);
    }) 
  })

  //btnSize
  // 'sm' default
  it('(@Input btnSize) should be "sm" when (@Input btnSize) is not assigned', () => {
    fixture.detectChanges();
    expect(component.btnSize).toBe('sm');
  })

  // só aceita 'sm' | 'md' | 'lg' 

  //muda quando eu mudo
  it('(@Input btnSize) should be the specified value when (@Input btnSize) is assigned', () => {
    let btnSizeValues: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];
    btnSizeValues.forEach(value => {
      component.btnSize = value;
      fixture.detectChanges();
      expect(component.btnSize).toBe(value);
    }) 
  })

  //btnColor
  // 'default' default
  it('(@Input btnColor) should be "default" when (@Input btnColor) is not assigned', () => {
    fixture.detectChanges();
    expect(component.btnColor).toBe('default');
  })

  // só aceita 'default' | 'primary' | 'secondary' | 'danger' 

  //muda quando eu mudo
  it('(@Input btnColor) should be the specified value when (@Input btnColor) is assigned', () => {
    let btnColorValues: Array<'default' | 'primary' | 'secondary' | 'danger'> = ['default', 'primary', 'secondary', 'danger'];
    btnColorValues.forEach(value => {
      component.btnColor = value;
      fixture.detectChanges();
      expect(component.btnColor).toBe(value);
    }) 
  })

  it('(@Output() btnAction) should trigger (@Output liked) when called', () => {
        spyOn(component.btnAction, 'emit');
        fixture.detectChanges();
        let event: MouseEvent = new MouseEvent('click');
        component.handleBtnAction(event);
        expect(component.btnAction.emit).toHaveBeenCalled();
    });
});
