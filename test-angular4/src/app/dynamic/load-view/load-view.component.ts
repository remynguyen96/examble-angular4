import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TypeComponent, View} from '../models/type';
import {DynamicDirective} from '../models/dynamic.directive';
// import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-load-view',
  templateUrl: './load-view.component.html',
  styleUrls: ['./load-view.component.scss'],
})
export class LoadViewComponent implements OnInit, OnDestroy {
  @Input() ads: TypeComponent[];
  currentAddIndex: number = -1;
  @ViewChild(DynamicDirective) directiveDynamic: DynamicDirective;
  // subscription: Subscription;
  numInterval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.numInterval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAddIndex];

    const componentFactory  = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.directiveDynamic.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<View>componentRef.instance).infomation = adItem.data;
  }

  getAds() {
    this.numInterval = setInterval(() => {
      this.loadComponent();
    },  1000);
  }

}
