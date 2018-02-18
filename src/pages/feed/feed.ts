import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Antonio Paulino";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  public RetornaNumero():number{
    return 3;
  }

  public MostraMensagem():void{
    alert(this.nome_usuario);
  }

  public SomaDoisNumeros(num1:number, num2:number):void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.MostraMensagem();
    this.SomaDoisNumeros(10, 99);
    console.log('ionViewDidLoad FeedPage');
  }

}
