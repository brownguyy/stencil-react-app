import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.css',
  // shadow: true,
})
export class InputComponent {
  @State() value:string="";
  @Prop() onChange;

  changeHandler(e){
    this.value =  e.target.value
    this.onChange(this.value)
  }

  render() {    
    return (
      <Host>
       <input type='text' data-test-id="input-plugin" onChange={(e)=>this.changeHandler(e)} value={this.value} />
      </Host>
    );
  }

}
