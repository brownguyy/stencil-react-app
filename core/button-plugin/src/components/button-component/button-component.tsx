import { Component,  h, Prop,Event,EventEmitter } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl : 'button-component.css',
  // shadow : true
})

export class ButtonComponent {
  @Prop() type:string=''
  @Prop() size:string=''
  @Prop() disable:boolean=false
  @Prop() text:string=''
  @Event() buttonClick:EventEmitter<string>;

  render() {
    return (
      <button class={`${this.type} ${this.size}  rounded-xl`} disabled={this.disable} onClick={()=>!this.disable && this.buttonClick.emit()}><slot></slot></button>
    );
  }
}
